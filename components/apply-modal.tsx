"use client"

import { useCallback, useRef, useState } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, FileText, Loader2, Upload, X } from "lucide-react"

const MAX_FILE_BYTES = 10 * 1024 * 1024 // keep in sync with /api/apply
const ACCEPT = ".pdf,.doc,.docx,.rtf,.txt"

type ApplyModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Pre-fills the role field on the form (e.g. "Internship", "Frontend developer"). */
  role?: string
  /** Customise the modal heading + sub-copy. */
  title?: string
  description?: string
}

type Status = "idle" | "submitting" | "success" | "error"

export function ApplyModal({
  open,
  onOpenChange,
  role,
  title = "Submit your application",
  description = "Upload your resume and we'll be in touch. We typically respond within 3–5 business days.",
}: ApplyModalProps) {
  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const reset = useCallback(() => {
    setFile(null)
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setStatus("idle")
    setError(null)
    setDragActive(false)
    if (inputRef.current) inputRef.current.value = ""
  }, [])

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (!next) {
        // delay reset until the close animation finishes so users don't see fields wipe
        setTimeout(reset, 200)
      }
      onOpenChange(next)
    },
    [onOpenChange, reset]
  )

  const validateAndSetFile = useCallback((f: File | null) => {
    setError(null)
    if (!f) return
    if (f.size === 0) {
      setError("That file appears to be empty.")
      return
    }
    if (f.size > MAX_FILE_BYTES) {
      setError("Resume must be 10 MB or smaller.")
      return
    }
    setFile(f)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!file) {
      setError("Please upload your resume.")
      return
    }
    if (!name.trim()) {
      setError("Please enter your name.")
      return
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    const fd = new FormData()
    fd.append("resume", file)
    fd.append("name", name.trim())
    fd.append("email", email.trim())
    if (phone.trim()) fd.append("phone", phone.trim())
    if (role) fd.append("role", role)
    if (message.trim()) fd.append("message", message.trim())

    setStatus("submitting")

    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd })
      const data: { ok: boolean; error?: string } = await res
        .json()
        .catch(() => ({ ok: false, error: "Unexpected response from server." }))

      if (!res.ok || !data.ok) {
        setStatus("error")
        setError(data.error ?? "Failed to send application.")
        return
      }

      setStatus("success")
    } catch {
      setStatus("error")
      setError("Network error. Please check your connection and try again.")
    }
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(true)
  }
  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
  }
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    const f = e.dataTransfer.files?.[0]
    if (f) validateAndSetFile(f)
  }

  const submitting = status === "submitting"
  const succeeded = status === "success"

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-[#0F172A]/60 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="fixed left-1/2 top-1/2 z-50 flex max-h-[92vh] w-[min(92vw,640px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-2xl"
              >
                {/* Decorative top bar */}
                <div className="h-1 w-full shrink-0 bg-gradient-to-r from-[#0dcfcf] via-[#5de0e0] to-[#0a9a9a]" />

                <DialogPrimitive.Close
                  aria-label="Close"
                  className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-lg text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#0F172A]"
                >
                  <X className="h-4 w-4" />
                </DialogPrimitive.Close>

                {succeeded ? (
                  <div className="p-6 sm:p-8">
                    <SuccessState onClose={() => handleOpenChange(false)} />
                  </div>
                ) : (
                  <>
                    {/* Header — pinned at top */}
                    <div className="shrink-0 px-6 pb-4 pt-6 sm:px-8 sm:pt-7">
                      <DialogPrimitive.Title className="mb-1 pr-10 text-2xl font-semibold tracking-tight text-[#0F172A]">
                        {title}
                      </DialogPrimitive.Title>
                      <DialogPrimitive.Description className="text-sm leading-relaxed text-[#64748B]">
                        {description}
                      </DialogPrimitive.Description>

                      {role && (
                        <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#0dcfcf]/10 px-3 py-1.5 text-xs font-semibold text-[#0a9a9a]">
                          Applying for: {role}
                        </div>
                      )}
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex min-h-0 flex-1 flex-col"
                    >
                      {/* Scrollable body — only the fields scroll */}
                      <div
                        className="min-h-0 flex-1 space-y-5 overflow-y-auto px-6 pb-4 pt-2 sm:px-8 [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                      >
                        {/* File dropzone */}
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#475569]">
                            Resume / CV <span className="text-[#0dcfcf]">*</span>
                          </label>
                          <div
                            onDragOver={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                            onClick={() => inputRef.current?.click()}
                            className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-8 text-center transition-all ${
                              dragActive
                                ? "border-[#0dcfcf] bg-[#0dcfcf]/5"
                                : file
                                  ? "border-[#0dcfcf]/60 bg-[#0dcfcf]/[0.03]"
                                  : "border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/[0.03]"
                            }`}
                          >
                            <input
                              ref={inputRef}
                              type="file"
                              accept={ACCEPT}
                              className="sr-only"
                              onChange={(e) => validateAndSetFile(e.target.files?.[0] ?? null)}
                            />
                            {file ? (
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0dcfcf]/10">
                                  <FileText className="h-5 w-5 text-[#0dcfcf]" />
                                </div>
                                <div className="text-left">
                                  <p className="text-sm font-semibold text-[#0F172A]">{file.name}</p>
                                  <p className="text-xs text-[#64748B]">
                                    {(file.size / 1024).toFixed(0)} KB · click to replace
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setFile(null)
                                    if (inputRef.current) inputRef.current.value = ""
                                  }}
                                  className="ml-2 rounded-md p-1.5 text-[#94A3B8] transition-colors hover:bg-[#F1F5F9] hover:text-[#0F172A]"
                                  aria-label="Remove file"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </div>
                            ) : (
                              <>
                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0dcfcf]/10 transition-transform group-hover:scale-105">
                                  <Upload className="h-6 w-6 text-[#0dcfcf]" />
                                </div>
                                <p className="text-sm font-semibold text-[#0F172A]">
                                  Click to upload <span className="text-[#64748B]">or drag & drop</span>
                                </p>
                                <p className="mt-1 text-xs text-[#94A3B8]">
                                  PDF, DOC, DOCX, RTF or TXT · max 10 MB
                                </p>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Name + Email */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          <Field label="Full name" required>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                              autoComplete="name"
                              className={inputCls}
                              placeholder="Jane Doe"
                            />
                          </Field>
                          <Field label="Email" required>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              autoComplete="email"
                              className={inputCls}
                              placeholder="jane@example.com"
                            />
                          </Field>
                        </div>

                        <Field label="Phone (optional)">
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            autoComplete="tel"
                            className={inputCls}
                            placeholder="+91 98765 43210"
                          />
                        </Field>

                        <Field label="Message (optional)">
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={3}
                            className={`${inputCls} resize-none`}
                            placeholder="Tell us a bit about why you'd like to join…"
                          />
                        </Field>

                      </div>

                      {/* Sticky footer — always visible regardless of viewport height */}
                      <div className="shrink-0 border-t border-[#E2E8F0] bg-white px-6 py-4 sm:px-8">
                        {error && (
                          <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700">
                            {error}
                          </p>
                        )}

                        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-xs text-[#94A3B8]">
                            Submitting sends your resume directly to{" "}
                            <span className="font-medium text-[#475569]">careers@insightstap.com</span>
                          </p>
                          <button
                            type="submit"
                            disabled={submitting}
                            className="shimmer inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-6 text-sm font-semibold text-white shadow-md shadow-[#0dcfcf]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                          >
                            {submitting ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                              </>
                            ) : (
                              <>
                                Apply now <ArrowRight className="h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  )
}

const inputCls =
  "w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-colors focus:border-[#0dcfcf] focus:outline-none focus:ring-2 focus:ring-[#0dcfcf]/20"

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#475569]">
        {label}
        {required && <span className="ml-0.5 text-[#0dcfcf]">*</span>}
      </span>
      {children}
    </label>
  )
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center px-2 py-6 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0dcfcf]/10"
      >
        <CheckCircle2 className="h-8 w-8 text-[#0dcfcf]" />
      </motion.div>
      <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#0F172A]">
        Application sent
      </h3>
      <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#64748B]">
        Thanks for reaching out. Our team will review your resume and get back to you within 3–5 business days.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex h-11 items-center justify-center rounded-lg bg-[#0F172A] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0F172A]/90"
      >
        Close
      </button>
    </div>
  )
}
