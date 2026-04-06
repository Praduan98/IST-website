"use client"

import { motion } from "framer-motion"
import { CheckCircle, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LogoTicker } from "@/components/logo-ticker"

const FLOAT_DOTS = [
  { x: 8,  y: 12, dur: 7, delay: 0   },
  { x: 22, y: 48, dur: 9, delay: 1.2 },
  { x: 38, y: 76, dur: 6, delay: 2.4 },
  { x: 52, y: 24, dur: 8, delay: 0.6 },
  { x: 68, y: 62, dur: 7, delay: 1.8 },
  { x: 80, y: 36, dur: 9, delay: 3   },
  { x: 92, y: 82, dur: 6, delay: 0.3 },
  { x: 14, y: 90, dur: 8, delay: 1.5 },
]

const ORB_DATA = [
  { x: 10, y: 20, size: 350, blur: 80, opacity: 0.04, dur: 14, delay: 0 },
  { x: 85, y: 55, size: 280, blur: 85, opacity: 0.035, dur: 18, delay: 2 },
  { x: 45, y: 80, size: 300, blur: 80, opacity: 0.04, dur: 16, delay: 5 },
  { x: 70, y: 15, size: 120, blur: 55, opacity: 0.06, dur: 11, delay: 3 },
  { x: 20, y: 60, size: 90,  blur: 45, opacity: 0.07, dur: 9,  delay: 6 },
]

export default function NewsletterThankYouPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <LogoTicker />
      </main>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-white px-6" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
      {/* Atmospheric layers */}
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.07] blur-[160px]" />
      <div className="glow-orb absolute right-[15%] top-[55%] h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.05] blur-[140px]" style={{ animationDelay: "-4s" }} />

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FLOAT_DOTS.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#0dcfcf]/60"
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
            initial={{ opacity: 0 }}
            animate={{ y: [-15, 15, -15], opacity: [0, 0.4, 0] }}
            transition={{ duration: dot.dur, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-[min(92vw,640px)] text-center">
        {/* Animated check */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#0dcfcf]/12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="h-10 w-10 text-[#0dcfcf]" />
          </motion.div>
          <motion.div
            className="absolute h-20 w-20 rounded-full border border-[#0dcfcf]/40"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2 glow-border"
        >
          <Mail className="h-4 w-4 text-[#0dcfcf]" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            You&apos;re Subscribed
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-5 text-[2.4rem] font-semibold leading-[1.1] tracking-tight text-[#0F172A] sm:text-5xl"
        >
          Thank You for{" "}
          <span className="gradient-text">Subscribing</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mb-10 max-w-[540px] text-lg leading-relaxed text-[#64748B]"
        >
          We appreciate you joining us. You&apos;re now part of our community
          and will receive GTM insights, automation strategies, and signal-led
          growth tactics. Thank you for your trust in InsightsTap.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="shimmer inline-flex items-center gap-2 rounded-xl bg-[#0dcfcf] px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25"
          >
            Explore Insightstap
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/Contact"
            className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-7 py-3.5 text-base font-medium text-[#0F172A] transition-all hover:border-[#0dcfcf]/40 hover:bg-[#0dcfcf]/5"
          >
            Book a Discovery Call
          </Link>
        </motion.div>

        {/* Social follow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            Follow for daily insights
          </p>
          <div className="flex gap-3">
            {[
              { href: "https://linkedin.com", label: "LinkedIn", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: "https://twitter.com", label: "Twitter", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { href: "https://youtube.com", label: "YouTube", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
            ].map((s) => (
              <motion.div key={s.label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf]"
                >
                  {s.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {ORB_DATA.map((orb, i) => {
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
