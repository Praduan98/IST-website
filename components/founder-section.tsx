"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { handleEmailClick, INFO_EMAIL } from "@/components/email-link"

export function FounderSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      {/* Background glow */}
      <div className="glow-orb absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.05] blur-[120px] hidden sm:block" />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[40%]"
          >
            <InteractiveFounderImage />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full text-center lg:w-[60%] lg:text-left"
          >
            <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              MEET THE FOUNDER
            </span>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              {"Hi! I'm "}
              <span className="gradient-text">Ritesh Osta</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#64748B] lg:text-lg">
              Founder of Insightstap and a Top Rated Fiverr Pro Consultant with more than a decade of experience working with B2B Enterprises and startups. I specialize in building AI-powered GTM systems that transform how companies approach sales and marketing.
            </p>

            {/* Stats Row */}
            <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-4">
              <FounderStat value="19+" label="Years experience" />
              <FounderStat value="250+" label="Projects delivered" />
              <FounderStat value="50M+" label="Pipeline generated" />
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <Link
                href="/about"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[#0a9a9a] sm:w-auto"
              >
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                <SocialLink
                  href="https://www.linkedin.com/in/riteshosta1/"
                  label="LinkedIn"
                  icon={<Linkedin className="h-5 w-5" />}
                />
                <SocialLink
                  href="https://x.com/riteshosta"
                  label="Twitter / X"
                  icon={<Twitter className="h-5 w-5" />}
                />
                <SocialLink
                  href={`mailto:${INFO_EMAIL}`}
                  label="Email"
                  icon={<Mail className="h-5 w-5" />}
                  onClick={handleEmailClick()}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InteractiveFounderImage() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    rotateX.set(mouseY * 0.03)
    rotateY.set(-mouseX * 0.03)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div 
      ref={ref}
      className="relative mx-auto max-w-[280px] sm:max-w-[350px] lg:max-w-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#0dcfcf]/20 via-transparent to-[#0dcfcf]/10 blur-xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Image container */}
      <div className="relative aspect-square overflow-hidden rounded-full border-2 border-[#0dcfcf]/30 shadow-2xl shadow-[#0dcfcf]/10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7dwEccfBxQEVrC0vzyT57DJN6zEehG.png"
          alt="Ritesh Osta - Founder of Insightstap"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative corner accents */}
      <motion.div 
        className="absolute -left-2 -top-2 h-12 w-12 border-l-2 border-t-2 border-[#0dcfcf]/60 rounded-tl-xl"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-2 -right-2 h-12 w-12 border-b-2 border-r-2 border-[#0dcfcf]/60 rounded-br-xl"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      {/* Floating badge */}
      <motion.div
        className="absolute -right-4 top-8 rounded-lg border border-[#0dcfcf]/30 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-xs font-medium text-[#0dcfcf]">Fiverr Pro</span>
      </motion.div>

      {/* Another floating element */}
      <motion.div
        className="absolute -left-4 bottom-12 rounded-lg border border-[#E2E8F0] bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-xs font-medium text-[#0F172A]">Top rated</span>
      </motion.div>
    </motion.div>
  )
}

function FounderStat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      className="text-center lg:text-left"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-xl font-bold text-[#0dcfcf] sm:text-3xl">{value}</div>
      <div className="text-[11px] text-[#64748B] sm:text-sm">{label}</div>
    </motion.div>
  )
}

function SocialLink({
  href,
  label,
  icon,
  onClick,
}: {
  href: string
  label: string
  icon: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf] hover:shadow-lg hover:shadow-[#0dcfcf]/10"
        aria-label={label}
      >
        {icon}
      </Link>
    </motion.div>
  )
}
