"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, ArrowRight, Sparkles, Zap, TrendingUp, Brain } from "lucide-react"
import Link from "next/link"

export function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:py-32"
    >
      {/* Background decorative orbs */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <motion.div
          className="glow-orb absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.06] blur-[100px]"
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="glow-orb absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.05] blur-[90px]"
          animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Dot grid overlay */}
        <div className="dot-grid absolute inset-0 opacity-60" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">

          {/* ── Left side: animated illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <NewsletterIllustration />
          </motion.div>

          {/* ── Right side: content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full text-center lg:w-1/2 lg:text-left"
          >
            {/* Label badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
              className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]"
            >
              <Sparkles className="h-3 w-3" />
              NEWSLETTER
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.6rem]"
            >
              Stay ahead with{" "}
              <span className="gradient-text">InsightsTap insights</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className="mb-6 text-base leading-relaxed text-[#64748B] lg:text-lg"
            >
              Weekly AI &amp; GTM strategies delivered straight to your inbox.
              No fluff, just actionable plays used by top B2B teams to drive
              faster pipeline and lower CAC.
            </motion.p>

            {/* FREE badge row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
              className="mb-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <FreeBadge />
              <BenefitPill icon={<Zap className="h-3.5 w-3.5" />} text="Actionable strategies" />
              <BenefitPill icon={<TrendingUp className="h-3.5 w-3.5" />} text="Weekly drops" />
              <BenefitPill icon={<Brain className="h-3.5 w-3.5" />} text="AI & GTM focused" />
            </motion.div>

            {/* Subscribe CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
            >
              <SubscribeButton />
              <p className="mt-3 text-center text-xs text-[#94A3B8] lg:text-left">
                No spam, ever. Unsubscribe in one click.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────── */
/*  Sub-components                                            */
/* ────────────────────────────────────────────────────────── */

function FreeBadge() {
  return (
    <motion.span
      className="inline-flex items-center gap-1 rounded-full bg-[#0dcfcf] px-3 py-1 text-xs font-bold tracking-widest text-white shadow-sm shadow-[#0dcfcf]/15"
      animate={{ scale: [1, 1.05, 1], boxShadow: ["0 4px 10px rgba(13,207,207,0.12)", "0 4px 15px rgba(13,207,207,0.22)", "0 4px 10px rgba(13,207,207,0.12)"] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      FREE
    </motion.span>
  )
}

function BenefitPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
      <span className="text-[#0dcfcf]">{icon}</span>
      {text}
    </span>
  )
}

function SubscribeButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-block"
    >
      <Link
        href="/Newsletter"
        className="shimmer group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#0dcfcf] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-shadow hover:shadow-lg hover:shadow-[#0dcfcf]/20 sm:w-auto"
      >
        Subscribe free
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  )
}

/* ────────────────────────────────────────────────────────── */
/*  Animated illustration (left panel)                        */
/* ────────────────────────────────────────────────────────── */

function NewsletterIllustration() {
  return (
    <div className="relative mx-auto flex h-[340px] w-full max-w-[480px] items-center justify-center overflow-hidden sm:overflow-visible lg:h-[400px]">
      {/* Outer glow ring */}
      <motion.div
        className="absolute h-[280px] w-[280px] rounded-full border border-[#0dcfcf]/20 lg:h-[320px] lg:w-[320px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-[#0dcfcf]/15 lg:h-[250px] lg:w-[250px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Center envelope card */}
      <motion.div
        className="relative z-10 flex h-[140px] w-[200px] flex-col items-center justify-center rounded-2xl border border-[#0dcfcf]/30 bg-white shadow-2xl shadow-[#0dcfcf]/10 lg:h-[160px] lg:w-[220px]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.04 }}
      >
        {/* Envelope icon */}
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0dcfcf]/10">
          <Mail className="h-6 w-6 text-[#0dcfcf]" />
        </div>
        <div className="h-2.5 w-24 rounded-full bg-[#E2E8F0]" />
        <div className="mt-1.5 h-2 w-16 rounded-full bg-[#F1F5F9]" />
        {/* Notification dot */}
        <motion.div
          className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#0dcfcf] text-[10px] font-bold text-white shadow-md"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          1
        </motion.div>
      </motion.div>

      {/* Floating stat cards */}
      <FloatingCard
        style="absolute left-2 sm:-left-4 top-12 lg:-left-8"
        delay={0}
        icon={<TrendingUp className="h-4 w-4 text-[#0dcfcf]" />}
        value="2-3×"
        label="Pipeline velocity"
      />
      <FloatingCard
        style="absolute right-2 sm:-right-4 top-16 lg:-right-8"
        delay={0.6}
        icon={<Zap className="h-4 w-4 text-[#0dcfcf]" />}
        value="50K+"
        label="Subscribers"
      />
      <FloatingCard
        style="absolute bottom-12 left-2 sm:-left-2 lg:-left-6"
        delay={1.2}
        icon={<Brain className="h-4 w-4 text-[#0dcfcf]" />}
        value="Weekly"
        label="AI insights"
      />

      {/* Orbiting dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute h-2.5 w-2.5 rounded-full bg-[#0dcfcf]"
          style={{
            top: "50%",
            left: "50%",
            transformOrigin: "0 0",
          }}
          animate={{
            rotate: [i * 90, i * 90 + 360],
            x: [Math.cos((i * Math.PI) / 2) * 140 - 5, Math.cos((i * Math.PI) / 2 + Math.PI * 2) * 140 - 5],
            y: [Math.sin((i * Math.PI) / 2) * 140 - 5, Math.sin((i * Math.PI) / 2 + Math.PI * 2) * 140 - 5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0,
          }}
          initial={{
            x: Math.cos((i * Math.PI) / 2) * 140 - 5,
            y: Math.sin((i * Math.PI) / 2) * 140 - 5,
          }}
        />
      ))}
    </div>
  )
}

function FloatingCard({
  style,
  delay,
  icon,
  value,
  label,
}: {
  style: string
  delay: number
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <motion.div
      className={`${style} z-20 flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white/90 px-3 py-2.5 shadow-lg backdrop-blur-sm`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 + delay, duration: 0.4, ease: "easeOut" }}
      animate={{ y: [0, -5, 0] }}
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
