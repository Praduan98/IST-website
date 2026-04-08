"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  ChevronDown,
  Mail,
  Phone,
  Building2,
  User,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// ─── HubSpot config — set via environment variables before deployment ────────
const HS_PORTAL_ID = process.env.NEXT_PUBLIC_HS_PORTAL_ID ?? ""
const HS_FORM_GUID = process.env.NEXT_PUBLIC_HS_FORM_GUID ?? ""

// ─── Types ───────────────────────────────────────────────────────────────────
interface GeoData {
  country_name: string
  country_code: string
  city: string
  timezone: string
}

type Status = "idle" | "loading" | "success" | "error"

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const formSectionRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Navigation />
      <main>
        <HeroSection onScrollToForm={scrollToForm} />
        <div ref={formSectionRef}>
          <FormSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection({ onScrollToForm }: { onScrollToForm: () => void }) {
  return (
    <section className="relative flex min-h-[72vh] flex-col items-center justify-center overflow-hidden bg-white pt-28 pb-16">
      {/* Atmospheric layers */}
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.07] blur-[160px]" />
      <div
        className="glow-orb absolute right-[15%] top-[55%] h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.05] blur-[140px]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="glow-orb absolute left-[8%] top-[60%] h-[380px] w-[380px] rounded-full bg-[#0dcfcf]/[0.04] blur-[120px]"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="glow-orb absolute right-[30%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.035] blur-[100px]"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(13,207,207,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-[min(92vw,1600px)] px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2 glow-border"
        >
          <Sparkles className="h-4 w-4 text-[#0dcfcf]" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#64748B]">
            Get in touch
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-5 text-4xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          Let&apos;s build your{" "}
          <span className="gradient-text">revenue engine</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mb-14 max-w-[620px] text-base leading-relaxed text-[#64748B] sm:text-lg"
        >
          Tell us where your pipeline is stuck. We&apos;ll map the exact signals, AI agents,
          and GTM plays to unlock your next stage of growth.
        </motion.p>

        {/* Scroll chevron — smooth-scrolls to form */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={onScrollToForm}
          className="group mx-auto flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[11px] font-medium uppercase tracking-widest text-[#94A3B8] transition-colors group-hover:text-[#0dcfcf]">
            Scroll to form
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-[#CBD5E1] transition-colors group-hover:text-[#0dcfcf]" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}

// ─── Form Section ─────────────────────────────────────────────────────────────
function FormSection() {
  const [status, setStatus] = useState<Status>("idle")
  const [geo, setGeo] = useState<GeoData | null>(null)

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  // Silently fetch geo data for hidden CRM fields
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data: GeoData) => setGeo(data))
      .catch(() => {})
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Split "Jane Smith" → { firstname: "Jane", lastname: "Smith" }
  const splitName = (full: string) => {
    const parts = full.trim().split(/\s+/)
    return {
      firstname: parts[0] ?? "",
      lastname: parts.slice(1).join(" "),
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    const { firstname, lastname } = splitName(form.fullName)
    const pageUri =
      typeof window !== "undefined" ? window.location.href : ""

    // Derive dr_code from URL search params if present
    const drCode =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("dr_code") ?? ""
        : ""

    const fields = [
      // ── Visible fields ──────────────────────────────────────
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "email", value: form.email },
      { name: "phone", value: form.phone },
      { name: "company", value: form.company },
      { name: "message", value: form.message },
      // ── Hidden — hardcoded ───────────────────────────────────
      { name: "lifecyclestage", value: "lead" },
      { name: "hs_lead_status", value: "New" },
      { name: "website", value: pageUri },
      { name: "ist_lead_source", value: "Contact Us" },
      { name: "product_list", value: "Please chose an option" },
      { name: "dr_code", value: drCode },
      // ── Hidden — geo (populated via ipapi.co) ────────────────
      { name: "country", value: geo?.country_name ?? "" },
      { name: "hs_country_region_code", value: geo?.country_code ?? "" },
      { name: "city", value: geo?.city ?? "" },
      { name: "ip_country", value: geo?.country_code ?? "" },
      { name: "hs_ip_timezone", value: geo?.timezone ?? "" },
    ]

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields,
            context: { pageUri, pageName: "Contact Us" },
          }),
        }
      )
      if (res.ok) {
        setStatus("success")
        setForm({ fullName: "", email: "", phone: "", company: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative bg-[#F8FAFC] px-6 py-20 lg:py-28">
      <div className="mx-auto w-[min(92vw,1600px)]">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: Info panel ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:sticky lg:top-32"
          >
            <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              Why InsightsTap
            </span>
            <h2 className="mb-5 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
              Pipeline-first.<br />Signal-driven.<br />Results-obsessed.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#64748B]">
              Every engagement starts with a conversation. We listen first, then
              architect the exact GTM system your stage of growth demands.
            </p>

            <ul className="mb-10 space-y-3.5">
              {[
                "Real-time intent signals, not guesswork",
                "AI agents that act 24/7 on your behalf",
                "CRM-connected, attribution-measured",
                "Enterprise results, startup execution speed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#0F172A]">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0dcfcf]/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0dcfcf]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="mb-8 h-px bg-[#E2E8F0]" />

            {/* Contact details */}
            <div className="space-y-3">
              <a
                href="mailto:hello@insightstap.com"
                className="group flex items-center gap-3 text-sm text-[#64748B] transition-colors hover:text-[#0dcfcf]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#0dcfcf]" />
                hello@insightstap.com
              </a>
              <p className="flex items-start gap-3 text-sm text-[#64748B]">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0dcfcf]" />
                539 W Commerce St #2588,&nbsp;Dallas, TX 75208, USA
              </p>
            </div>
          </motion.div>

          {/* ── Right: Form card ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {status === "success" ? (
              <SuccessState />
            ) : (
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-xl shadow-black/[0.04] lg:p-10">
                <h3 className="mb-1.5 text-xl font-bold text-[#0F172A]">
                  Send us a message
                </h3>
                <p className="mb-8 text-sm text-[#64748B]">
                  We respond within one business day.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  {/* Full Name */}
                  <FormField
                    label="Full name"
                    icon={<User className="h-4 w-4" />}
                  >
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      autoFocus
                      className={inputCls}
                    />
                  </FormField>

                  {/* Email + Phone — 2 col */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      label="Email"
                      required
                      icon={<Mail className="h-4 w-4" />}
                    >
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        required
                        className={inputCls}
                      />
                    </FormField>

                    <FormField
                      label="Phone number"
                      icon={<Phone className="h-4 w-4" />}
                    >
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={inputCls}
                      />
                    </FormField>
                  </div>

                  {/* Company */}
                  <FormField
                    label="Company"
                    required
                    icon={<Building2 className="h-4 w-4" />}
                  >
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      required
                      className={inputCls}
                    />
                  </FormField>

                  {/* Message */}
                  <FormField
                    label="Write us your comment"
                    icon={<MessageSquare className="h-4 w-4" />}
                    alignIconTop
                  >
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your GTM challenge, current stack, or where your pipeline is stuck…"
                      rows={5}
                      className={`${inputCls} resize-none`}
                    />
                  </FormField>

                  {/* Error state */}
                  {status === "error" && (
                    <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      Something went wrong. Please try again or email us directly at{" "}
                      <a href="mailto:hello@insightstap.com" className="underline">
                        hello@insightstap.com
                      </a>
                      .
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="shimmer relative flex w-full items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] py-3.5 text-base font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#94A3B8]">
                    By submitting, you agree to our{" "}
                    <Link href="#" className="text-[#0dcfcf] hover:underline">
                      Privacy policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Shared input class ───────────────────────────────────────────────────────
const inputCls =
  "w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 pl-10 text-sm text-[#0F172A] placeholder-[#94A3B8] transition-all focus:border-[#0dcfcf] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0dcfcf]/20"

// ─── Field wrapper ────────────────────────────────────────────────────────────
function FormField({
  label,
  required,
  icon,
  alignIconTop,
  children,
}: {
  label: string
  required?: boolean
  icon: React.ReactNode
  alignIconTop?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
        {label}
        {required && <span className="ml-1 text-[#0dcfcf]">*</span>}
      </label>
      <div className="relative">
        <span
          className={`pointer-events-none absolute left-3 text-[#94A3B8] ${
            alignIconTop ? "top-3.5" : "top-1/2 -translate-y-1/2"
          }`}
        >
          {icon}
        </span>
        {children}
      </div>
    </div>
  )
}

// ─── Success state ────────────────────────────────────────────────────────────
function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center justify-center rounded-2xl border border-[#0dcfcf]/20 bg-white px-10 py-20 text-center shadow-xl shadow-black/[0.04]"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0dcfcf]/12">
        <CheckCircle className="h-8 w-8 text-[#0dcfcf]" />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-[#0F172A]">Message received</h3>
      <p className="max-w-[360px] text-base leading-relaxed text-[#64748B]">
        Our team will review your details and reach out within one business day.
      </p>
    </motion.div>
  )
}
