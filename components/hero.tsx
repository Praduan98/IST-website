"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { Sparkles, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-12">
      {/* Atmospheric layers */}
      <div className="dot-grid absolute inset-0" />

      {/* Primary orb — large, centered-high */}
      <div className="glow-orb absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.07] blur-[160px]" />

      {/* Secondary orb — right side, lower */}
      <div
        className="glow-orb absolute right-[15%] top-[55%] h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.05] blur-[140px]"
        style={{ animationDelay: "-4s" }}
      />

      {/* Tertiary orb — left side, subtle */}
      <div
        className="glow-orb absolute left-[10%] top-[65%] h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.04] blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />

      {/* Soft radial wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(13,207,207,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      <div className="relative z-10 mx-auto w-[min(92vw,1600px)] text-center px-6">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2 glow-border"
        >
          <Sparkles className="h-4 w-4 text-[#0dcfcf]" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#64748B]">
            ISaaS
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mb-5 text-3xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Intent Signals{" "}
          <span className="gradient-text">as a Service</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mb-6 max-w-[820px] text-xl font-medium leading-snug tracking-tight text-[#334155] sm:text-2xl md:text-[1.75rem]"
        >
          Run your B2B enterprise like an{" "}
          <span className="text-[#0dcfcf]">E-commerce</span> store
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mx-auto mb-10 max-w-[680px] text-base leading-relaxed text-[#64748B] sm:text-lg"
        >
          Using instant signals, AI agents, and GTM automation, we build Go-to-Market systems that grow your pipeline with the precision and speed of an e-commerce engine.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton>
            <Link
              href="/company-profile/optin"
              className="shimmer relative h-12 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25 inline-flex items-center justify-center"
            >
              Download company profile
            </Link>
          </MagneticButton>
          <Link
            href="/Contact"
            className="h-12 rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] transition-all hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5 inline-flex items-center justify-center"
          >
            Book a Discovery Call
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-medium uppercase tracking-widest text-[#64748B]">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/5"
          >
            <ChevronDown className="h-4 w-4 text-[#0dcfcf]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Fixed particle positions to avoid hydration mismatch
const PARTICLE_POSITIONS = [
  { x: 5, y: 15, duration: 7, delay: 0 },
  { x: 15, y: 80, duration: 8, delay: 1 },
  { x: 25, y: 40, duration: 6, delay: 2 },
  { x: 35, y: 65, duration: 9, delay: 0.5 },
  { x: 45, y: 25, duration: 7, delay: 1.5 },
  { x: 55, y: 90, duration: 8, delay: 2.5 },
  { x: 65, y: 35, duration: 6, delay: 3 },
  { x: 75, y: 70, duration: 9, delay: 0.8 },
  { x: 85, y: 50, duration: 7, delay: 1.8 },
  { x: 95, y: 20, duration: 8, delay: 2.8 },
  { x: 10, y: 55, duration: 6, delay: 3.5 },
  { x: 20, y: 85, duration: 9, delay: 0.3 },
  { x: 30, y: 30, duration: 7, delay: 1.3 },
  { x: 40, y: 75, duration: 8, delay: 2.3 },
  { x: 50, y: 45, duration: 6, delay: 3.3 },
  { x: 60, y: 10, duration: 9, delay: 0.6 },
  { x: 70, y: 60, duration: 7, delay: 1.6 },
  { x: 80, y: 95, duration: 8, delay: 2.6 },
  { x: 90, y: 38, duration: 6, delay: 3.6 },
  { x: 8, y: 72, duration: 9, delay: 0.9 },
]

function FloatingParticles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLE_POSITIONS.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#0dcfcf]/50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.1)
    y.set((e.clientY - centerY) * 0.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
