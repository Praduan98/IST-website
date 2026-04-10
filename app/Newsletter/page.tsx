"use client"

import { useState, useRef, useCallback } from "react"
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import {
  Mail,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Brain,
  BookOpen,
  Target,
  Package,
  FlaskConical,
  Loader2,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LogoTicker } from "@/components/logo-ticker"
import { EmailLink } from "@/components/email-link"

// ─── Config ────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error"

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function NewsletterPage() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })

  return (
    <>
      <Navigation />
      <main>
        <HeroSection onScroll={scrollToForm} />
        <WhatYouGetSection formRef={formRef} />
        <FollowSection />
        <LogoTicker />
      </main>
      <Footer />
    </>
  )
}

// ─── Hero ───────────────────────────────────────────────────────────────────────
function HeroSection({ onScroll }: { onScroll: () => void }) {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-white px-6 pt-28 pb-20 lg:min-h-[85vh]">
      {/* Atmospheric layers */}
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.07] blur-[160px]" />
      <div
        className="glow-orb absolute right-[10%] top-[55%] h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.05] blur-[130px]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="glow-orb absolute left-[5%] bottom-[15%] h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.04] blur-[110px]"
        style={{ animationDelay: "-8s" }}
      />

      <div className="relative z-10 mx-auto grid w-[min(92vw,1280px)] items-center gap-14 lg:grid-cols-[45%_55%]">
        {/* ── Left: illustration ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:block"
        >
          <HeroIllustration />
        </motion.div>

        {/* ── Right: content ── */}
        <div className="text-center lg:text-left">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-1.5 glow-border"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0dcfcf]">
              Run your B2B sales like an e-commerce engine
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-5 text-3xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          >
            AI GTM hub for{" "}
            <span className="gradient-text">modern sales leaders</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-6 max-w-[600px] text-base leading-relaxed text-[#64748B] sm:text-lg lg:mx-0"
          >
            Every week at InsightsTap, we drop the same GTM engineering
            frameworks, tools, and AI tactics that help our clients grow faster
            and cheaper.{" "}
            <span className="font-medium text-[#0F172A]">
              No fluff. Just actual playbooks.
            </span>{" "}
            Built for founders, CMOs, and GTM leaders who want speed, scale,
            and smarter systems.
          </motion.p>

          {/* Benefit pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <FreeBadge />
            <Pill icon={<Zap className="h-3.5 w-3.5" />} label="Actionable strategies" />

            <Pill icon={<TrendingUp className="h-3.5 w-3.5" />} label="Weekly drops" />
            <Pill icon={<Target className="h-3.5 w-3.5" />} label="AI & GTM focused" />
          </motion.div>

          {/* Inline subscribe form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <HeroForm />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-3 text-center text-xs text-[#94A3B8] lg:text-left"
          >
            Zero spam. Just playbooks that convert. Unsubscribe anytime.
          </motion.p>

          {/* Mobile scroll hint */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={onScroll}
            className="mt-8 block text-xs font-medium uppercase tracking-widest text-[#94A3B8] transition-colors hover:text-[#0dcfcf] lg:hidden mx-auto"
          >
            See what&apos;s inside ↓
          </motion.button>
        </div>
      </div>
    </section>
  )
}

// ─── Hero inline form ───────────────────────────────────────────────────────────
function HeroForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [focused, setFocused] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [honeypot, setHoneypot] = useState("")

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (honeypot || !isValid) return
    setStatus("loading")

    const pageUri = typeof window !== "undefined" ? window.location.href : ""

    const properties: Record<string, string> = {
      email,
      product_list: "IST_Newsletter",
      lifecyclestage: "subscriber",
      hs_lead_status: "NEW",
      website: pageUri,
      dr_code: "DR020",
      form_code: "FPG033",
      ist_lead_source: "Newsletter Signup - Hero",
    }

    try {
      const res = await fetch("/api/hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ properties, pageName: "IST Newsletter Signup" }),
      })
      if (!res.ok) { setStatus("error"); return }
      router.push("/Newsletter/thank-you")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") return <SuccessInline />

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:max-w-[520px] lg:mx-0 mx-auto">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <input
          type="text"
          name="hp_field"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Email input */}
      <div className="relative flex-1">
        <Mail
          className={`absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-200 ${
            focused ? "text-[#0dcfcf]" : "text-[#94A3B8]"
          }`}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Enter your work email"
          suppressHydrationWarning
          className={`w-full rounded-xl border bg-white py-3.5 pl-10 pr-4 text-sm text-[#0F172A] outline-none transition-all duration-200 placeholder:text-[#94A3B8] focus:ring-2 focus:ring-[#0dcfcf]/20 ${
            focused ? "border-[#0dcfcf] shadow-md shadow-[#0dcfcf]/10" : "border-[#E2E8F0] hover:border-[#CBD5E1]"
          }`}
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        className="shimmer group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#0dcfcf] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-shadow hover:shadow-lg hover:shadow-[#0dcfcf]/20 disabled:opacity-60"
        whileHover={{ scale: 1.02, backgroundColor: "#0ab8b8" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {status === "loading" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Subscribing…</>
        ) : (
          <><span>Subscribe Free</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>
        )}
      </motion.button>

      {status === "error" && (
        <p className="w-full text-xs text-red-500 sm:col-span-2">
          Something went wrong. Please try again or email us at{" "}
          <EmailLink className="underline">
            info@insightstap.com
          </EmailLink>
          .
        </p>
      )}
    </form>
  )
}

function SuccessInline() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex max-w-[420px] items-center gap-3 rounded-xl border border-[#0dcfcf]/30 bg-[#0dcfcf]/5 px-5 py-4"
    >
      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#0dcfcf]" />
      <div>
        <p className="text-sm font-medium text-[#0F172A]">You&apos;re in!</p>
        <p className="text-xs text-[#64748B]">First issue lands in your inbox this week.</p>
      </div>
    </motion.div>
  )
}

// ─── Hero illustration ──────────────────────────────────────────────────────────
function HeroIllustration() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[480px]">
      {/* Rotating rings */}
      <motion.div
        className="absolute inset-0 m-auto h-[340px] w-[340px] rounded-full border border-[#0dcfcf]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 m-auto h-[260px] w-[260px] rounded-full border border-dashed border-[#0dcfcf]/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* Center card */}
      <motion.div
        className="absolute inset-0 m-auto flex h-[150px] w-[210px] flex-col items-center justify-center rounded-2xl border border-[#0dcfcf]/30 bg-white shadow-2xl shadow-[#0dcfcf]/10"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.04 }}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0dcfcf]/10">
          <Mail className="h-6 w-6 text-[#0dcfcf]" />
        </div>
        <div className="h-2.5 w-24 rounded-full bg-[#E2E8F0]" />
        <div className="mt-2 h-2 w-16 rounded-full bg-[#F1F5F9]" />
        {/* Notification dot */}
        <motion.div
          className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0dcfcf] text-[11px] font-bold text-white shadow-md"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          1
        </motion.div>
      </motion.div>

      {/* Floating stat cards */}
      <IllustrationCard
        positionClass="absolute left-2 top-16"
        delay={0}
        floatDelay={0}
        icon={<TrendingUp className="h-4 w-4 text-[#0dcfcf]" />}
        value="2–3×"
        label="Pipeline velocity"
      />
      <IllustrationCard
        positionClass="absolute right-0 top-20"
        delay={0.5}
        floatDelay={1.5}
        icon={<Zap className="h-4 w-4 text-[#0dcfcf]" />}
        value="50K+"
        label="Subscribers"
      />
      <IllustrationCard
        positionClass="absolute bottom-16 left-4"
        delay={1}
        floatDelay={0.8}
        icon={<Brain className="h-4 w-4 text-[#0dcfcf]" />}
        value="Weekly"
        label="AI insights"
      />

      {/* Orbiting dots */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * Math.PI) / 2
        const r = 155
        return (
          <motion.div
            key={i}
            className="absolute h-2.5 w-2.5 rounded-full bg-[#0dcfcf]"
            style={{
              top: "50%",
              left: "50%",
              marginTop: -5,
              marginLeft: -5,
            }}
            animate={{
              x: [
                Math.cos(angle) * r,
                Math.cos(angle + Math.PI * 2) * r,
              ],
              y: [
                Math.sin(angle) * r,
                Math.sin(angle + Math.PI * 2) * r,
              ],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
              delay: 0,
            }}
          />
        )
      })}
    </div>
  )
}

function IllustrationCard({
  positionClass,
  delay,
  floatDelay,
  icon,
  value,
  label,
}: {
  positionClass: string
  delay: number
  floatDelay: number
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <motion.div
      className={`${positionClass} z-20 flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white/90 px-3 py-2.5 shadow-lg backdrop-blur-sm`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay: 0.4 + delay, duration: 0.4 },
        scale: { delay: 0.4 + delay, duration: 0.4 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#0dcfcf]/10">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-[#0F172A]">{value}</div>
        <div className="text-[10px] text-[#94A3B8]">{label}</div>
      </div>
    </motion.div>
  )
}

// ─── What You'll Get ────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: <TrendingUp className="h-9 w-9 text-white" />,
    title: "AI-powered growth strategies",
    desc: "Tips to scale your sales with AI agents, signal-driven campaigns, and performance-first GTM engineering.",
  },
  {
    icon: <Brain className="h-9 w-9 text-white" />,
    title: "Real campaign breakdowns",
    desc: "Behind-the-scenes lessons from our cold outreach, ads, and ABM systems that book meetings and close deals.",
  },
  {
    icon: <Package className="h-9 w-9 text-white" />,
    title: "Plug-and-play GTM frameworks",
    desc: "SOPs, workflows, and automation templates used by top-performing B2B teams, ready for you to copy & deploy.",
  },
  {
    icon: <FlaskConical className="h-9 w-9 text-white" />,
    title: "BTS from the InsightsTap lab",
    desc: "Use cases straight to your inbox to enable Sales + Customer Success with CRM automation & HubSpot ops.",
  },
]

// Desktop stagger: [translateY, rotateDeg]
const cardOffsets = [
  { y: 0,   rotate: -2 },
  { y: 40,  rotate:  1 },
  { y: -20, rotate: -1 },
  { y: 60,  rotate:  2 },
]

// Ambient orb positions — large, medium, and small
const ORB_DATA = [
  // Large orbs (150px+, heavy blur)
  { x: 5,   y: 10,  size: 380, blur: 80,  opacity: 0.045, dur: 14, delay: 0   },
  { x: 90,  y: 60,  size: 320, blur: 90,  opacity: 0.04,  dur: 18, delay: 2   },
  { x: 50,  y: 85,  size: 350, blur: 85,  opacity: 0.035, dur: 16, delay: 5   },
  // Medium orbs (90-150px, medium blur)
  { x: 30,  y: 15,  size: 150, blur: 60,  opacity: 0.07,  dur: 10, delay: 1   },
  { x: 75,  y: 30,  size: 130, blur: 55,  opacity: 0.06,  dur: 12, delay: 3   },
  { x: 12,  y: 50,  size: 140, blur: 60,  opacity: 0.065, dur: 11, delay: 4   },
  { x: 60,  y: 45,  size: 110, blur: 50,  opacity: 0.055, dur: 13, delay: 6   },
  { x: 85,  y: 80,  size: 120, blur: 55,  opacity: 0.06,  dur: 9,  delay: 7   },
  // Small orbs (45-90px, lighter blur, more visible)
  { x: 15,  y: 30,  size: 70,  blur: 40,  opacity: 0.08,  dur: 8,  delay: 1.5 },
  { x: 70,  y: 15,  size: 55,  blur: 35,  opacity: 0.09,  dur: 10, delay: 2.5 },
  { x: 40,  y: 70,  size: 60,  blur: 38,  opacity: 0.08,  dur: 7,  delay: 3.5 },
  { x: 88,  y: 45,  size: 50,  blur: 32,  opacity: 0.10,  dur: 6,  delay: 0.5 },
]

// ─── Floating ambient orbs ──────────────────────────────────────────────────────
function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {ORB_DATA.map((orb, i) => {
        // Vary motion amplitude by size — larger orbs drift less
        const amp = orb.size > 200 ? 14 : orb.size > 100 ? 22 : 30
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              opacity: orb.opacity,
              filter: `blur(${orb.blur}px)`,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle at 30% 30%, rgba(13,207,207,${orb.opacity * 6}) 0%, rgba(13,207,207,${orb.opacity * 2}) 50%, transparent 100%)`,
            }}
            animate={{
              x: [-amp, amp, -amp],
              y: [-amp * 0.7, amp * 0.7, -amp * 0.7],
              scale: [1, orb.size > 200 ? 1.08 : 1.15, 1],
            }}
            transition={{ duration: orb.dur, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
          />
        )
      })}
    </div>
  )
}

// ─── Benefit card — 3D pop-up with cursor-tracking tilt ─────────────────────────
function BenefitCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 300, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 300, damping: 20 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5   // -0.5 → 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateX.set(py * -10)   // tilt up to ±5° vertically
    rotateY.set(px * 10)    // tilt up to ±5° horizontally
  }, [rotateX, rotateY])

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative h-full rounded-[20px] border border-[#E2E8F0] bg-white p-10"
      variants={{
        rest: {
          y: 0,
          z: 0,
          boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        },
        hover: {
          y: -10,
          z: 20,
          boxShadow: "0 30px 60px rgba(13,207,207,0.30), 0 15px 30px rgba(0,0,0,0.10)",
        },
      }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Icon container */}
      <motion.div
        className="relative mb-6 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[16px]"
        variants={{
          rest: { scale: 1, boxShadow: "0 4px 20px rgba(13,207,207,0.30)" },
          hover: { scale: 1.08, boxShadow: "0 8px 32px rgba(13,207,207,0.50)" },
        }}
        style={{
          background: "linear-gradient(135deg, #0dcfcf 0%, #5ce1e6 100%)",
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-[16px] bg-[#0dcfcf]/20"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="relative z-10"
          variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: 5, scale: 1.05 } }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      </motion.div>

      {/* Accent line */}
      <motion.div
        className="mb-5 h-[3px] rounded-full"
        variants={{
          rest: { width: 40, background: "rgba(13,207,207,0.3)" },
          hover: { width: 60, background: "linear-gradient(90deg, #0dcfcf, #5ce1e6)" },
        }}
        style={{ originX: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <h3 className="mb-3 text-2xl font-bold leading-[1.3] tracking-[-0.02em] text-black">
        {title}
      </h3>
      <p className="text-base leading-[1.6] text-[#3C3C3C]">{desc}</p>
    </motion.div>
  )
}

// ─── Horizontal fan-out card (scroll-driven) ────────────────────────────────────
// Final horizontal offsets: cards fan from center stack to evenly spaced row
const CARD_FAN_X = [-180, -60, 60, 180] // px from center

function FanCard({
  index,
  total,
  progress,
  children,
}: {
  index: number
  total: number
  progress: ReturnType<typeof useTransform<number, number>>
  children: React.ReactNode
}) {
  // Stagger: each card fans slightly later
  const start = 0.05 + index * 0.08
  const end   = start + 0.35

  const x       = useTransform(progress, [start, end], [0, CARD_FAN_X[index]])
  const scale   = useTransform(progress, [start, end], [0.9, 1])
  const opacity = useTransform(progress, [start, end], [0, 1])

  return (
    <motion.div className="w-[300px] flex-shrink-0" style={{ x, scale, opacity }}>
      {children}
    </motion.div>
  )
}

// ─── Subscribe CTA sub-component ────────────────────────────────────────────────
function SubscribeCTA({ formRef, ctaOpacity, ctaY }: {
  formRef?: React.RefObject<HTMLDivElement | null>
  ctaOpacity?: ReturnType<typeof useTransform<number, number>>
  ctaY?: ReturnType<typeof useTransform<number, number>>
  isInView?: boolean
}) {
  return (
    <motion.div
      ref={formRef}
      style={ctaOpacity ? { opacity: ctaOpacity, y: ctaY } : undefined}
      className="relative mx-auto max-w-[680px] overflow-hidden rounded-2xl border border-[#0dcfcf]/20 bg-white p-8 shadow-xl shadow-[#0dcfcf]/5 lg:p-10"
    >
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#0dcfcf] to-[#0a9a9a]" />
      <div className="mb-2 flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 text-[#0dcfcf]" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[#0dcfcf]">
          Join 5,000+ founders & marketers
        </span>
      </div>
      <h3 className="mb-2 text-center text-2xl font-bold text-[#0F172A] sm:text-3xl">
        Get weekly AI-led GTM tips
      </h3>
      <p className="mb-6 text-center text-sm text-[#64748B]">That actually convert.</p>
      <HeroForm />
      <p className="mt-4 text-center text-xs text-[#94A3B8]">
        Zero spam. Just value. Unsubscribe anytime.
      </p>
    </motion.div>
  )
}

// ─── What You'll Get ────────────────────────────────────────────────────────────
function WhatYouGetSection({ formRef }: { formRef: React.RefObject<HTMLDivElement | null> }) {
  const stickyRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLElement>(null)
  const isInView = useInView(mobileRef, { once: true, margin: "-80px" })

  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  })

  // 0→1 progress mapped over the first 60% of scroll for cards
  const cardProgress = useTransform(scrollYProgress, [0, 0.6], [0, 1])

  // CTA fades in during the last 30%
  const ctaOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1])
  const ctaY       = useTransform(scrollYProgress, [0.65, 0.85], [40, 0])

  return (
    <>
      {/* ── Desktop: sticky horizontal fan-out ── */}
      <div ref={stickyRef} className="relative hidden lg:block" style={{ height: "250vh" }}>
        <div
          className="sticky top-0 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F8FAFC] px-6"
          style={{ paddingTop: "15vh", paddingBottom: "15vh", perspective: 1200 }}
        >
          <FloatingOrbs />
          <div className="dot-grid absolute inset-0 opacity-50" />

          <div className="relative w-full max-w-[1400px]">
            {/* Header */}
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.12], [0, 1]),
                y: useTransform(scrollYProgress, [0, 0.12], [30, 0]),
              }}
              className="mb-14 text-center"
            >
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
                <BookOpen className="h-3 w-3" />
                What you&apos;ll get
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
                Every issue is packed with{" "}
                <span className="gradient-text">real GTM value</span>
              </h2>
            </motion.div>

            {/* Horizontal card row — fans out from center */}
            <div className="mb-10 flex flex-row items-center justify-center gap-6">
              {benefits.map((b, i) => (
                <FanCard key={b.title} index={i} total={benefits.length} progress={cardProgress}>
                  <BenefitCard {...b} />
                </FanCard>
              ))}
            </div>

            {/* CTA form */}
            <SubscribeCTA formRef={formRef} ctaOpacity={ctaOpacity} ctaY={ctaY} />
          </div>
        </div>
      </div>

      {/* ── Mobile / tablet ── */}
      <section ref={mobileRef} className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 lg:hidden">
        <FloatingOrbs />
        <div className="dot-grid absolute inset-0 opacity-50" />

        <div className="relative mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              <BookOpen className="h-3 w-3" />
              What you&apos;ll get
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
              Every issue is packed with{" "}
              <span className="gradient-text">real GTM value</span>
            </h2>
          </motion.div>

          <div className="mb-14 grid gap-6 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <BenefitCard {...b} />
              </motion.div>
            ))}
          </div>

          <SubscribeCTA />
        </div>
      </section>
    </>
  )
}

// ─── Follow Section ─────────────────────────────────────────────────────────────
function FollowSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-6 py-16">
      <FloatingOrbs />
      <div className="glow-orb absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.05] blur-[100px]" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-[600px] text-center"
      >
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-[#94A3B8]">
          Follow us
        </p>
        <div className="mb-8 flex items-center justify-center gap-4">
          <SocialBtn
            href="https://linkedin.com"
            label="LinkedIn"
            icon={
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            }
          />
          <SocialBtn
            href="https://twitter.com"
            label="Twitter / X"
            icon={
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
          />
          <SocialBtn
            href="https://youtube.com"
            label="YouTube"
            icon={
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            }
          />
        </div>
        <div className="rounded-xl border border-[#0dcfcf]/20 bg-[#0dcfcf]/5 px-6 py-5">
          <p className="text-sm font-medium text-[#0F172A]">
            Zero spam. Just value.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
            You&apos;ll only get proven insights, no fluff, no sales pitches.
            Unsubscribe anytime.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

function SocialBtn({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <motion.div whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0] text-[#64748B] transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf] hover:shadow-lg hover:shadow-[#0dcfcf]/10"
      >
        {icon}
      </Link>
    </motion.div>
  )
}

// ─── Shared badge components ────────────────────────────────────────────────────
function FreeBadge() {
  return (
    <motion.span
      className="inline-flex items-center gap-1 rounded-full bg-[#0dcfcf] px-3 py-1 text-xs font-bold tracking-widest text-white shadow-sm shadow-[#0dcfcf]/15"
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 4px 14px rgba(13,207,207,0.25)",
          "0 4px 22px rgba(13,207,207,0.45)",
          "0 4px 14px rgba(13,207,207,0.25)",
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      FREE
    </motion.span>
  )
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
      <span className="text-[#0dcfcf]">{icon}</span>
      {label}
    </span>
  )
}
