"use client"

import { motion, useMotionValue } from "framer-motion"
import {
  Search, Brain, Zap, Target, BarChart3, Workflow, Shield, Users, Layers,
  Eye, Activity, GitBranch, Gauge, Database, LineChart, Code, Mic, Bot,
  Settings, Globe, Server, Mail, Monitor, MousePointer, TrendingUp, ArrowRight,
  Cpu, FileText, Phone, MessageSquare, Plug, Clock, DollarSign, PieChart,
  Rocket, Wrench, Lock, Radio, Repeat, Shuffle, Filter, BookOpen,
} from "lucide-react"
import { useRef } from "react"
import type { ApproachItem } from "@/lib/services-data/types"
import type { MotionDNA } from "./motion/motion-config"
import { motionVariants } from "./motion/motion-config"
import { useReducedMotion } from "./motion/use-reduced-motion"
import { FloatingOrbs } from "./atmospheric-orbs"

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Search, Brain, Zap, Target, BarChart3, Workflow, Shield, Users, Layers,
  Eye, Activity, GitBranch, Gauge, Database, LineChart, Code, Mic, Bot,
  Settings, Globe, Server, Mail, Monitor, MousePointer, TrendingUp, ArrowRight,
  Cpu, FileText, Phone, MessageSquare, Plug, Clock, DollarSign, PieChart,
  Rocket, Wrench, Lock, Radio, Repeat, Shuffle, Filter, BookOpen,
}

interface DeepDiveProps {
  label?: string
  title: React.ReactNode
  description?: React.ReactNode
  items: ApproachItem[]
  motionDNA?: MotionDNA
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function DeepDive({ label = "OUR APPROACH", title, description, items, motionDNA }: DeepDiveProps) {
  const reduced = useReducedMotion()
  const dnaVariants = motionDNA ? motionVariants[motionDNA] : null

  // Use DNA-specific container if available
  const containerAnim = dnaVariants
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
    : containerVariants

  return (
    <section className="relative bg-white px-6 py-20 lg:py-28">
      <div className="glow-orb absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.04] blur-[150px]" />
      <FloatingOrbs />

      <div className="relative mx-auto w-[min(92vw,1600px)]">
        {/* Header */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            {label}
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

        {/* Cards grid — uses DNA-specific card variants */}
        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid gap-6 ${items.length <= 3 ? "sm:grid-cols-3" : items.length === 5 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}
        >
          {items.map((item, index) => (
            <ApproachCard key={item.title} item={item} index={index} motionDNA={motionDNA} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ApproachCard({ item, index, motionDNA }: { item: ApproachItem; index: number; motionDNA?: MotionDNA }) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const dnaCard = motionDNA ? motionVariants[motionDNA].card : null

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const Icon = iconMap[item.icon] || Zap

  return (
    <motion.div
      ref={ref}
      variants={dnaCard || cardVariants}
      custom={index}
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
        <motion.div
          className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0dcfcf]/10"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Icon className="h-7 w-7 text-[#0dcfcf]" />
        </motion.div>

        <h3 className="mb-3 text-lg font-semibold text-[#0F172A]">{item.title}</h3>
        <p className="text-sm leading-relaxed text-[#64748B]">{item.description}</p>
      </div>
    </motion.div>
  )
}
