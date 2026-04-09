import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

/**
 * POST /api/apply
 * Receives a multipart/form-data submission from the careers page
 * (resume file + applicant fields) and emails it to the careers inbox.
 *
 * Required env vars:
 *   SMTP_HOST          e.g. smtp.gmail.com / smtp.zoho.in
 *   SMTP_PORT          e.g. 465
 *   SMTP_SECURE        "true" for 465, "false" for 587
 *   SMTP_USER          full mailbox address used to authenticate
 *   SMTP_PASSWORD      app-password for the mailbox
 *   CAREERS_TO_EMAIL   defaults to careers@insightstap.com
 *   CAREERS_FROM_EMAIL defaults to SMTP_USER (must match what the SMTP server allows)
 */

export const runtime = "nodejs"
// Allow large-ish resumes; Next.js App Router default body cap is generous
// but we cap it ourselves below to avoid abuse.
export const maxDuration = 30

const MAX_FILE_BYTES = 10 * 1024 * 1024 // 10 MB
const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/rtf",
  "text/plain",
])
const ALLOWED_EXT = /\.(pdf|doc|docx|rtf|txt)$/i

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status })
}

export async function POST(req: NextRequest) {
  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return bad("Invalid form payload", 400)
  }

  const file = form.get("resume")
  const name = String(form.get("name") ?? "").trim()
  const email = String(form.get("email") ?? "").trim()
  const phone = String(form.get("phone") ?? "").trim()
  const role = String(form.get("role") ?? "").trim()
  const message = String(form.get("message") ?? "").trim()

  // Validate file
  if (!(file instanceof File)) {
    return bad("Resume file is required")
  }
  if (file.size === 0) {
    return bad("Resume file is empty")
  }
  if (file.size > MAX_FILE_BYTES) {
    return bad("Resume file exceeds 10 MB limit")
  }
  if (file.type && !ALLOWED_MIME.has(file.type) && !ALLOWED_EXT.test(file.name)) {
    return bad("Unsupported file type. Upload PDF, DOC, DOCX, RTF, or TXT.")
  }

  // Validate applicant fields
  if (!name) return bad("Name is required")
  if (!email) return bad("Email is required")
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Invalid email")

  // Read SMTP config
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 465)
  const secure = (process.env.SMTP_SECURE ?? "true").toLowerCase() === "true"
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD
  const to = process.env.CAREERS_TO_EMAIL ?? "careers@insightstap.com"
  const from = process.env.CAREERS_FROM_EMAIL ?? user

  if (!host || !user || !pass) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email service not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD on the server.",
      },
      { status: 503 }
    )
  }

  // Build attachment
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })

  const subject = role
    ? `New application: ${role} — ${name}`
    : `New career application — ${name}`

  const textBody = [
    `New application received from the Insightstap careers page.`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    phone ? `Phone:   ${phone}` : null,
    role ? `Role:    ${role}` : null,
    ``,
    message ? `Message:\n${message}` : `(No message)`,
  ]
    .filter(Boolean)
    .join("\n")

  const htmlBody = `
    <h2 style="margin:0 0 16px;font-family:sans-serif;color:#0F172A;">New career application</h2>
    <table style="font-family:sans-serif;font-size:14px;color:#0F172A;border-collapse:collapse;">
      <tr><td style="padding:4px 12px 4px 0;color:#64748B;">Name</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#64748B;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      ${phone ? `<tr><td style="padding:4px 12px 4px 0;color:#64748B;">Phone</td><td>${escapeHtml(phone)}</td></tr>` : ""}
      ${role ? `<tr><td style="padding:4px 12px 4px 0;color:#64748B;">Role</td><td>${escapeHtml(role)}</td></tr>` : ""}
    </table>
    ${message ? `<p style="font-family:sans-serif;font-size:14px;color:#0F172A;margin-top:16px;white-space:pre-wrap;">${escapeHtml(message)}</p>` : ""}
    <p style="font-family:sans-serif;font-size:12px;color:#94A3B8;margin-top:24px;">Resume attached: ${escapeHtml(file.name)} (${(file.size / 1024).toFixed(0)} KB)</p>
  `.trim()

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
      attachments: [
        {
          filename: file.name || "resume",
          content: buffer,
          contentType: file.type || "application/octet-stream",
        },
      ],
    })
  } catch (err) {
    console.error("[/api/apply] sendMail failed:", err)
    return NextResponse.json(
      { ok: false, error: "Failed to send application. Please try again." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
