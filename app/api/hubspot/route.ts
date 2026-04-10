import { NextRequest, NextResponse } from "next/server"

/**
 * POST /api/hubspot
 * Server-side proxy that creates/updates a HubSpot contact using the private app token.
 * All form submissions go through here — credentials never exposed to the browser.
 *
 * Body: { properties: Record<string, string>, pageName?: string }
 */

export const runtime = "nodejs"

const TOKEN = process.env.HUBSPOT_ACCESS_TOKEN ?? ""

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status })
}

export async function POST(req: NextRequest) {
  if (!TOKEN) {
    return bad("HubSpot API not configured. Set HUBSPOT_ACCESS_TOKEN on the server.", 503)
  }

  let body: { properties?: Record<string, string>; pageName?: string }
  try {
    body = await req.json()
  } catch {
    return bad("Invalid JSON payload")
  }

  const { properties, pageName } = body
  if (!properties || typeof properties !== "object") {
    return bad("Missing properties object")
  }

  const email = properties.email
  if (!email) {
    return bad("Email is required")
  }

  // Strip empty string values — HubSpot rejects them for some property types
  // Also separate lifecyclestage since it needs a dedicated API call for updates
  const lifecyclestage = properties.lifecyclestage
  const cleanProps: Record<string, string> = {}
  for (const [key, val] of Object.entries(properties)) {
    if (val !== "" && val != null && key !== "lifecyclestage") {
      cleanProps[key] = val
    }
  }

  console.log("[/api/hubspot] Submitting for:", email, "page:", pageName)

  // Try to find existing contact by email first
  let existingId: string | null = null
  try {
    const searchRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts/search",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                { propertyName: "email", operator: "EQ", value: email },
              ],
            },
          ],
        }),
      }
    )
    const searchData = await searchRes.json()
    if (searchData.results?.length > 0) {
      existingId = searchData.results[0].id
      console.log("[/api/hubspot] Existing contact found:", existingId)
    }
  } catch (err) {
    console.error("[/api/hubspot] Search failed:", err)
  }

  try {
    let res: Response

    if (existingId) {
      // Update existing contact
      res = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ properties: cleanProps }),
        }
      )
    } else {
      // Create new contact — include lifecyclestage on create
      const createProps = lifecyclestage
        ? { ...cleanProps, lifecyclestage }
        : cleanProps
      res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties: createProps }),
      })
    }

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error("[/api/hubspot] HubSpot error:", res.status, JSON.stringify(err))
      return NextResponse.json(
        { ok: false, error: "HubSpot submission failed", details: err },
        { status: res.status }
      )
    }

    const data = await res.json()
    console.log("[/api/hubspot] Success, contact ID:", data.id)
    return NextResponse.json({ ok: true, id: data.id })
  } catch (err) {
    console.error("[/api/hubspot] Request failed:", err)
    return bad("Failed to submit to HubSpot", 502)
  }
}
