"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "We slashed our CAC by 40% and tripled booked demos in 6 weeks.",
    name: "CMO",
    company: "B2B IT Firm",
  },
  {
    quote: "Insightstap helped us launch a working GPT-powered app in 3 weeks.",
    name: "Founder",
    company: "AI Startup",
  },
  {
    quote: "Their AI agents outbooked our sales team. That says everything.",
    name: "Head of Growth",
    company: "B2B SaaS",
  },
  {
    quote: "We cut our CAC by 40% and tripled demo bookings in 60 days.",
    name: "CTO",
    company: "Leading IT Services Firm",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Testimonials() {
  return (
    <section className="relative bg-white px-6 py-24 lg:py-32">
      {/* Background glow */}
      <div className="glow-orb absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            WHAT CLIENTS SAY
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-[#0dcfcf] to-[#0F172A] bg-clip-text text-transparent">industry leaders</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  name,
  company,
  variants,
}: {
  quote: string
  name: string
  company: string
  variants: typeof cardVariants
}) {
  return (
    <motion.div
      variants={variants}
      className="group relative overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:border-[#0dcfcf]/30 hover:shadow-md"
    >
      {/* Decorative quote mark */}
      <span className="absolute -right-2 -top-4 text-6xl font-serif text-[#0dcfcf]/10">
        &ldquo;
      </span>

      <div className="relative z-10">
        {/* Quote */}
        <p className="mb-6 text-base italic leading-relaxed text-[#0F172A]">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Attribution */}
        <div>
          <p className="font-medium text-[#475569]">{name}</p>
          <p className="text-sm text-[#64748B]">{company}</p>
        </div>

        {/* Rating stars */}
        <div className="mt-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
