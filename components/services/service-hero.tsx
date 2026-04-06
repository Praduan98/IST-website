"use client"

import { motion } from "framer-motion"
import { Sparkles, ChevronRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useReducedMotion } from "./motion/use-reduced-motion"
import { FloatingOrbs } from "./atmospheric-orbs"

interface ServiceHeroProps {
  breadcrumbs: { label: string; href: string }[]
  title: string
  subtitle: string
  showCTA?: boolean
  brochureHref?: string
  brochureLabel?: string
  variant?: "category" | "service"
}

// Unified smooth easing — Power2.easeOut equivalent
const SMOOTH_EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

export function ServiceHero({
  breadcrumbs,
  title,
  subtitle,
  showCTA = true,
  brochureHref = "/services/ai-gtm-strategy/optin",
  brochureLabel = "Download Company Profile",
  variant = "service",
}: ServiceHeroProps) {
  const reduced = useReducedMotion()

  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-white pt-28 pb-16">
      {/* Clean background — subtle dot-grid + soft teal radial wash */}
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[160px]" />
      <div
        className="glow-orb absolute right-1/4 top-2/3 h-[350px] w-[350px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(13,207,207,0.03) 0%, transparent 70%)",
        }}
      />

      <FloatingOrbs />

      <div className="relative z-10 mx-auto w-[min(92vw,1600px)] text-center px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: SMOOTH_EASE }}
          className="mb-8 flex items-center justify-center gap-1.5 text-sm text-[#64748B]"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-[#CBD5E1]" />
              )}
              {i < breadcrumbs.length - 1 ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-[#0dcfcf]"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-[#0F172A]">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Badge */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: SMOOTH_EASE }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2 glow-border"
        >
          <Sparkles className="h-4 w-4 text-[#0dcfcf]" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#64748B]">
            {variant === "category" ? "Service Category" : "Service"}
          </span>
        </motion.div>

        {/* Title — unified smooth fade-in + slide-up (transform + opacity only) */}
        <motion.h1
          className="mb-6 text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#0F172A] sm:text-5xl lg:text-6xl"
          initial={reduced ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: SMOOTH_EASE }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: SMOOTH_EASE }}
          className={`mx-auto max-w-[700px] text-base leading-relaxed text-[#64748B] sm:text-lg ${showCTA ? "mb-10" : "mb-20"}`}
        >
          {subtitle}
        </motion.p>

        {/* Split CTA — category pages only */}
        {showCTA && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: SMOOTH_EASE }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={brochureHref}
              className="shimmer relative h-12 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25 inline-flex items-center justify-center"
            >
              {brochureLabel}
            </Link>
            <Link
              href="/Contact"
              className="h-12 rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] transition-all hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5 inline-flex items-center justify-center"
            >
              Book a Discovery Call
            </Link>
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0, ease: SMOOTH_EASE }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-medium uppercase tracking-widest text-[#94A3B8]">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-[#CBD5E1]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
