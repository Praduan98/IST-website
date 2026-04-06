"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FloatingOrbs } from "./atmospheric-orbs"

interface ServiceCTAProps {
  title: string
  description: string
  primaryLabel?: string
  primaryHref?: string
  brochureHref?: string
  brochureLabel?: string
}

export function ServiceCTA({
  title,
  description,
  primaryLabel = "Book a Discovery Call",
  primaryHref = "/Contact",
  brochureHref = "/services/ai-gtm-strategy/optin",
  brochureLabel = "Download Company Profile",
}: ServiceCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] px-6 py-20 lg:py-28">
      <FloatingOrbs />
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="glow-orb absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.08] blur-[150px]" />
        <div
          className="glow-orb absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.06] blur-[120px]"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(13,207,207,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto w-[min(92vw,900px)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mb-10 max-w-[550px] text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            {description}
          </p>
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href={primaryHref}
              className="shimmer relative h-12 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#5de0e0] hover:shadow-lg hover:shadow-[#0dcfcf]/25 inline-flex items-center justify-center"
            >
              {primaryLabel}
            </Link>
            <Link
              href={brochureHref}
              className="h-12 rounded-lg border border-white/20 bg-transparent px-8 text-base font-medium text-white transition-all hover:border-white/40 hover:bg-white/10 inline-flex items-center justify-center"
            >
              {brochureLabel}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
