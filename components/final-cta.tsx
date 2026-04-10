"use client"

import { motion } from "framer-motion"
import { Phone, FileText, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function FinalCTA() {
  return (
    <section id="book-call" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]" />

      {/* Large pulsing glow orb */}
      <motion.div
        className="hidden sm:block absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.08] blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      <FloatingElements />

      <div className="relative mx-auto max-w-[1280px] text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2"
        >
          <Sparkles className="h-4 w-4 text-[#0dcfcf]" />
          <span className="text-sm font-medium text-[#64748B]">
            Transform your GTM strategy
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl"
        >
          Ready to scale{" "}
          <span className="gradient-text">smarter</span>?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mb-12 max-w-[600px] text-lg leading-relaxed text-[#64748B] lg:text-xl"
        >
          {"Let's turn buyer signals into booked meetings and real revenue."}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mb-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
        >
          <CTAButton
            href="/Contact"
            icon={<Phone className="h-5 w-5" />}
            label="Book a discovery call"
            primary
          />
          <CTAButton
            href="/company-profile/optin"
            icon={<FileText className="h-5 w-5" />}
            label="Download company profile"
          />
        </motion.div>

      </div>
    </section>
  )
}

function CTAButton({
  href,
  icon,
  label,
  primary,
}: {
  href: string
  icon: React.ReactNode
  label: string
  primary?: boolean
}) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 text-base font-medium transition-all sm:h-14 sm:w-auto sm:px-8 ${
          primary
            ? "shimmer bg-[#0dcfcf] text-white shadow-md shadow-[#0dcfcf]/15 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/20"
            : "border border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5"
        }`}
      >
        {icon}
        {label}
      </Link>
    </motion.div>
  )
}

// Fixed particle positions to avoid hydration mismatch
const CTA_PARTICLE_POSITIONS = [
  { x: 8, y: 12, duration: 7, delay: 0 },
  { x: 22, y: 75, duration: 9, delay: 1.2 },
  { x: 35, y: 45, duration: 6, delay: 2.4 },
  { x: 48, y: 88, duration: 8, delay: 0.6 },
  { x: 62, y: 28, duration: 7, delay: 1.8 },
  { x: 75, y: 62, duration: 9, delay: 3 },
  { x: 88, y: 38, duration: 6, delay: 0.3 },
  { x: 15, y: 55, duration: 8, delay: 1.5 },
  { x: 42, y: 18, duration: 7, delay: 2.7 },
  { x: 58, y: 82, duration: 9, delay: 0.9 },
  { x: 72, y: 48, duration: 6, delay: 2.1 },
  { x: 92, y: 22, duration: 8, delay: 3.3 },
  { x: 28, y: 68, duration: 7, delay: 1 },
  { x: 52, y: 35, duration: 9, delay: 2 },
  { x: 82, y: 78, duration: 6, delay: 3.6 },
]

function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {CTA_PARTICLE_POSITIONS.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#0dcfcf]/80"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Larger floating orbs */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-[#0dcfcf]/5 blur-2xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-[15%] bottom-[30%] h-24 w-24 rounded-full bg-[#0dcfcf]/5 blur-2xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
    </div>
  )
}
