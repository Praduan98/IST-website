"use client"

import { motion, useMotionValue } from "framer-motion"
import {
  ArrowRight, Target, Rocket, Radio, RefreshCw, BookOpen,
  BarChart3, Search, Eye, Brain, Bot, MessageSquare, Mic,
  Globe, Code, Cpu, Layers, Database, Compass, Radar,
  Megaphone, LayoutGrid, TrendingUp, MousePointer, Link2,
} from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import type { SubService } from "@/lib/services-data/types"
import { FloatingOrbs } from "./atmospheric-orbs"

// Map service slugs to Lucide icons
const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  // GTM Strategy
  "gtm-strategy-consulting": Target,
  "saas-gtm-execution": Rocket,
  "signal-architecture-design": Radio,
  "dark-loop-intelligence-system": RefreshCw,
  "signal-playbook-gtm-execution": BookOpen,
  "revenue-operations-alignment": BarChart3,
  "gtm-stack-audit": Search,
  "dark-funnel-intelligence": Eye,
  // Custom AI
  "custom-gpt-applications": Brain,
  "ai-chatbots-agents": MessageSquare,
  "ai-voice-assistants": Mic,
  "autonomous-browser-agents": Globe,
  "ai-saas-development": Code,
  "enterprise-ai-integrations": Cpu,
  "ai-systems-integration": Layers,
  // CRM
  "hubspot-services": Database,
  "clay-services": Layers,
  "apollo-services": Compass,
  "rb2b-services": Radar,
  "6sense-services": Eye,
  // Performance Marketing
  "performance-ads-management": Megaphone,
  "bridge-ads-development": LayoutGrid,
  "signal-led-abm-campaigns": Target,
  "signal-led-media-strategy": TrendingUp,
  "conversion-optimization": MousePointer,
  "crm-ads-integration": Link2,
}

interface CategoryServicesGridProps {
  categorySlug: string
  services: SubService[]
  title?: string
  description?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function CategoryServicesGrid({
  categorySlug,
  services,
  title = "What We Build",
  description,
}: CategoryServicesGridProps) {
  return (
    <section className="relative bg-white px-6 py-20 lg:py-28">
      <div className="glow-orb absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.04] blur-[150px]" />
      <FloatingOrbs />

      <div className="relative mx-auto w-[min(92vw,1600px)]">
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
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-[600px] text-sm leading-relaxed text-[#64748B] lg:text-base">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              href={`/services/${categorySlug}/${service.slug}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, href }: { service: SubService; href: string }) {
  const Icon = SERVICE_ICONS[service.slug] ?? Target
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
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(13,207,207,0.08), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0dcfcf]/10 transition-colors group-hover:bg-[#0dcfcf]/20">
          <Icon className="h-5 w-5 text-[#0dcfcf]" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-[#0F172A]">{service.title}</h3>
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-[#64748B]">
          {service.opening}
        </p>

        {/* Metrics preview */}
        <div className="mb-6 flex flex-wrap gap-3">
          {service.metrics.slice(0, 2).map((m) => (
            <span
              key={m.label}
              className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#64748B] transition-colors group-hover:border-[#0dcfcf]/20 group-hover:text-[#0F172A]"
            >
              {m.value} {m.label.split(" ").slice(0, 3).join(" ")}
            </span>
          ))}
        </div>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64748B] transition-colors hover:text-[#0dcfcf]"
        >
          Learn more
          <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}
