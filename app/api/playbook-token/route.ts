import { NextRequest, NextResponse } from "next/server"

/**
 * Generates a short-lived download token after the client confirms
 * a successful HubSpot form submission.
 *
 * The client must POST { email, formCode } so the server can verify
 * the request is intentional (not a direct URL guess).
 */

const TOKEN_SECRET =
  process.env.PLAYBOOK_TOKEN_SECRET ?? "ist-gtm-playbook-gated-2024"

async function hmac(message: string, secret: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message))
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, formCode } = body as {
      email?: string
      formCode?: string
    }

    // Basic server-side validation — must match the expected form
    if (!email || formCode !== "FPG034") {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      )
    }

    // Generate time-limited token
    const ts = Date.now().toString()
    const sig = await hmac(ts, TOKEN_SECRET)
    const token = btoa(`${ts}:${sig}`)

    return NextResponse.json({ token })
  } catch {
    return NextResponse.json(
      { error: "Bad request" },
      { status: 400 }
    )
  }
}
