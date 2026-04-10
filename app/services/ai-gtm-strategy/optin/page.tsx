"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Sparkles,
  ChevronDown,
  Mail,
  Phone,
  User,
  MessageSquare,
  Loader2,
  Lock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LogoTicker } from "@/components/logo-ticker"
import { EmailLink } from "@/components/email-link"


type Status = "idle" | "loading" | "error"

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function GTMOptinPage() {
  const formSectionRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Navigation />
      <main>
        <HeroSection onScroll={scrollToForm} />
        <div ref={formSectionRef}>
          <FormSection />
        </div>
        <LogoTicker />
      </main>
      <Footer />
    </>
  )
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection({ onScroll }: { onScroll: () => void }) {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-white pt-28 pb-16">
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
            GTM playbook
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-5 text-3xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
        >
          Get the AI-powered{" "}
          <span className="gradient-text">GTM playbook</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mb-14 max-w-[660px] text-base leading-relaxed text-[#64748B] sm:text-lg"
        >
          We build go-to-market engines that find buyers before they find you.
          This playbook walks you through the exact system we use to detect
          buying signals, automate outreach, and scale B2B pipeline.
        </motion.p>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={onScroll}
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

// ─── Form Section ──────────────────────────────────────────────────────────────
function FormSection() {
  const router = useRouter()
  const [status, setStatus] = useState<Status>("idle")
  const [formRevealed, setFormRevealed] = useState(false)
  const [shaking, setShaking] = useState(false)
  const [honeypot, setHoneypot] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  // Gate check, locked until required fields are filled
  const isGateValid =
    form.fullName.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

  // Reveal fields when section enters view
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setFormRevealed(true), 300)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const splitName = (full: string) => {
    const parts = full.trim().split(/\s+/)
    return {
      firstname: parts[0] ?? "",
      lastname: parts.slice(1).join(" "),
    }
  }

  const triggerShake = () => {
    setShaking(true)
    setTimeout(() => setShaking(false), 600)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return
    if (!isGateValid) {
      triggerShake()
      return
    }

    setStatus("loading")

    const { firstname, lastname } = splitName(form.fullName)
    const pageUri =
      typeof window !== "undefined" ? window.location.href : ""

    const properties: Record<string, string> = {
      firstname, lastname,
      email: form.email, phone: form.phone, message: form.message,
      form_code: "FPG034", dr_code: "DR018",
      ist_lead_source: "GTM Playbook Download",
      product_list: "PPC & Social Ads Services",
      lifecyclestage: "subscriber", hs_lead_status: "NEW",
      website: pageUri,
    }

    try {
      {
        const res = await fetch("/api/hubspot", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ properties, pageName: "GTM Playbook Download" }),
        })
        if (!res.ok) {
          setStatus("error")
          return
        }
      }

      // Redirect to Thank You page (download happens there)
      router.push("/services/ai-gtm-strategy/thank-you")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-white px-6 overflow-hidden"
      style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
    >
      {/* Atmospheric layers */}
      <div className="dot-grid absolute inset-0" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[160px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="glow-orb absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.04] blur-[140px]"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative z-10 mx-auto w-[min(92vw,680px)]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            Get access
          </span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
            Get the <span className="gradient-text">GTM playbook</span>
          </h2>
          <p className="mx-auto max-w-[480px] text-base leading-relaxed text-[#64748B]">
            Fill in your details to unlock the AI-powered GTM strategy
            playbook on the next page.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          animate={shaking ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
          className="relative rounded-2xl border border-[#E2E8F0] bg-white p-8 lg:p-10 overflow-hidden"
          style={{
            boxShadow: formRevealed
              ? "0 0 40px rgba(13,207,207,0.12), 0 25px 50px rgba(0,0,0,0.06)"
              : "0 25px 50px rgba(0,0,0,0.06)",
            transition: "box-shadow 0.8s ease",
          }}
        >
          {/* Teal top-border progress line */}
          <motion.div
            className="absolute left-0 top-0 h-[3px] bg-gradient-to-r from-[#0dcfcf] to-[#0a9a9a]"
            initial={{ width: "0%" }}
            animate={formRevealed ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Teal glow behind card on reveal */}
          {formRevealed && (
            <motion.div
              className="absolute -inset-px rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,207,207,0.15) 0%, transparent 30%)",
              }}
            />
          )}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative space-y-5"
          >
            {/* Full Name */}
            <RevealField revealed={formRevealed} delay={0}>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Full name
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <User className="h-4 w-4" />
                </span>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={inputCls}
                />
              </div>
            </RevealField>

            {/* Email */}
            <RevealField revealed={formRevealed} delay={0.1}>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Email <span className="text-[#0dcfcf]">*</span>
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  required
                  className={inputCls}
                />
              </div>
            </RevealField>

            {/* Phone */}
            <RevealField revealed={formRevealed} delay={0.2}>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Phone number
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <Phone className="h-4 w-4" />
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={inputCls}
                />
              </div>
            </RevealField>

            {/* Message */}
            <RevealField revealed={formRevealed} delay={0.3}>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Write us your comment
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-3.5 text-[#94A3B8]">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your GTM challenge..."
                  rows={4}
                  className={`${inputCls} resize-none`}
                />
              </div>
            </RevealField>

            {/* Honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <input
                type="text"
                name="website_url_hp"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600"
              >
                The submission could not be completed. Please check your
                connection and try again, or email us at{" "}
                <EmailLink className="font-medium underline">
                  info@insightstap.com
                </EmailLink>
                .
              </motion.div>
            )}

            {/* Submit, locked until gate is valid */}
            <RevealField revealed={formRevealed} delay={0.4}>
              <button
                type="submit"
                disabled={status === "loading"}
                className={`relative flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-base font-semibold text-white shadow-lg transition-all disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${
                  isGateValid
                    ? "shimmer bg-[#0dcfcf] shadow-[#0dcfcf]/15 hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25"
                    : "bg-[#94A3B8] shadow-black/5 cursor-not-allowed"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : isGateValid ? (
                  <>
                    <ArrowRight className="h-4 w-4" />
                    Submit
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Fill required fields to unlock
                  </>
                )}
              </button>
            </RevealField>

            <p className="text-center text-xs text-[#94A3B8]">
              By submitting, you agree to our{" "}
              <Link href="#" className="text-[#0dcfcf] hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Shared input class ────────────────────────────────────────────────────────
const inputCls =
  "w-full rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 pl-10 text-sm text-[#0F172A] placeholder-[#94A3B8] transition-all focus:border-[#0dcfcf] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0dcfcf]/20"

// ─── Field reveal wrapper ──────────────────────────────────────────────────────
function RevealField({
  revealed,
  delay,
  children,
}: {
  revealed: boolean
  delay: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
