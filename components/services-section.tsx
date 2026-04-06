"use client"

import { motion, useMotionValue } from "framer-motion"
import { Rocket, Target, BarChart3, Bot, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const services = [
  {
    icon: Rocket,
    title: "AI-Led GTM Systems",
    description: "We build go-to-market engines that combine automation, AI agents, and real-time buyer signals to accelerate revenue.",
    color: "#0dcfcf",
    features: ["Signal Detection", "AI Processing", "Auto-Engagement"]
  },
  {
    icon: Target,
    title: "Signal-Led Outreach & ABM",
    description: "We run hyper-personalized, multichannel campaigns — driven by job, intent, and funding signals — to convert your ideal buyers.",
    color: "#0a9a9a",
    features: ["Intent Signals", "Multi-Channel", "Personalization"]
  },
  {
    icon: BarChart3,
    title: "Ads, Analytics & CRM Automation",
    description: "We launch performance ads and streamline HubSpot or Salesforce with smart workflows that nurture leads and close deals.",
    color: "#5de0e0",
    features: ["HubSpot/Salesforce", "Smart Workflows", "Analytics"]
  },
  {
    icon: Bot,
    title: "Custom AI Apps & Agents",
    description: "From chatbots to voice assistants, we develop AI tools that automate decision-making, engagement, and internal workflows.",
    color: "#0d9f9f",
    features: ["Chatbots", "Voice AI", "Custom Apps"]
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-white px-6 py-24 lg:py-32">
      {/* Background glow */}
      <div className="glow-orb absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.05] blur-[150px]" />

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
            OUR SERVICES
          </span>
          <h2 className="mx-auto mb-4 max-w-[800px] text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Complete Signal-Led GTM and ABM Solutions to Power{" "}
            <span className="gradient-text">New Age Tech Companies</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  color,
  features,
  index,
}: {
  icon: typeof Rocket
  title: string
  description: string
  color: string
  features: string[]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      className="interactive-card group relative overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#0dcfcf]/30 hover:shadow-lg lg:p-8"
      whileHover={{ y: -4 }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${color}10, transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon with animation */}
        <motion.div
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl lg:h-16 lg:w-16"
          style={{ backgroundColor: `${color}15` }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Icon className="h-7 w-7 lg:h-8 lg:w-8" style={{ color }} />
        </motion.div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-[#0F172A] lg:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-[15px] leading-relaxed text-[#64748B]">
          {description}
        </p>

        {/* Feature tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {features.map((feature, i) => (
            <motion.span
              key={feature}
              className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#64748B] transition-colors group-hover:border-[#0dcfcf]/20 group-hover:text-[#0F172A]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {feature}
            </motion.span>
          ))}
        </div>

        {/* Link */}
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64748B] transition-colors hover:text-[#0dcfcf]"
        >
          Learn more
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </Link>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${color}10, transparent 70%)`,
        }}
      />
    </motion.div>
  )
}
