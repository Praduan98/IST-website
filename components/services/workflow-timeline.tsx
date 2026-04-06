"use client"

import { motion, useScroll, useTransform, useInView, useMotionValueEvent } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import {
  Zap, Brain, Workflow, TrendingUp, Search, Rocket, Database, Layers,
  Settings, BarChart3, Mail, Eye, Target, Users, Filter, Globe,
} from "lucide-react"
import type { WorkflowStep } from "@/lib/services-data/types"
import { FloatingOrbs } from "./atmospheric-orbs"

interface WorkflowTimelineProps {
  steps: WorkflowStep[]
  title?: string
  description?: string
}

const DEFAULT_ICONS = [Zap, Brain, Workflow, TrendingUp, Search, Rocket]

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Zap, Brain, Workflow, TrendingUp, Search, Rocket, Database, Layers,
  Settings, BarChart3, Mail, Eye, Target, Users, Filter, Globe,
}

function getStepIcon(step: WorkflowStep, index: number) {
  if (step.icon && ICON_MAP[step.icon]) return ICON_MAP[step.icon]
  return DEFAULT_ICONS[index % DEFAULT_ICONS.length]
}

export function WorkflowTimeline({
  steps,
  title = "How We Work",
  description,
}: WorkflowTimelineProps) {
  const stepsRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const [svgPath, setSvgPath] = useState("")
  const [activeStep, setActiveStep] = useState(-1)

  // What fraction of the stepsRef container height the last node sits at.
  // This lets us remap pathLength so 1.0 = line reaches last node.
  const [lastNodeFrac, setLastNodeFrac] = useState(0.85)

  // ── Scroll ─────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start center", "end center"],
  })

  // pathDraw drives the teal stroke. Reaches 1.0 when the scroll
  // has progressed to the last node's position in the container.
  const pathDraw = useTransform(
    scrollYProgress,
    [0, lastNodeFrac],
    [0, 1],
    { clamp: true }
  )

  const mobileHeight = useTransform(pathDraw, [0, 1], ["0%", "100%"])

  // Node activation: node i is at fraction i/(N-1) of the path.
  // Activate when pathDraw reaches that fraction.
  useMotionValueEvent(pathDraw, "change", (v) => {
    let active = -1
    for (let i = 0; i < steps.length; i++) {
      const frac = steps.length <= 1 ? 0 : i / (steps.length - 1)
      if (v >= frac - 0.03) active = i
    }
    setActiveStep(active)
  })

  // ── Build SVG path ─────────────────────────────────────────────────
  const buildPath = useCallback(() => {
    if (!stepsRef.current) return
    const box = stepsRef.current.getBoundingClientRect()

    const points = nodeRefs.current.filter(Boolean).map((n) => {
      const r = n!.getBoundingClientRect()
      return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 }
    })

    if (points.length < 2) return

    // Compute where the last node sits as a fraction of container height
    const lastY = points[points.length - 1].y
    const frac = lastY / box.height
    setLastNodeFrac(Math.max(0.5, Math.min(0.98, frac)))

    // Deep S-curve through node centers
    let d = `M ${points[0].x} ${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]
      const curr = points[i]
      const dy = curr.y - prev.y
      d += ` C ${prev.x} ${prev.y + dy * 0.65}, ${curr.x} ${curr.y - dy * 0.65}, ${curr.x} ${curr.y}`
    }

    setSvgPath(d)
  }, [])

  useEffect(() => {
    buildPath()
    const t1 = setTimeout(buildPath, 300)
    const t2 = setTimeout(buildPath, 800)
    window.addEventListener("resize", buildPath)
    return () => { clearTimeout(t1); clearTimeout(t2); window.removeEventListener("resize", buildPath) }
  }, [buildPath])

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 py-20 lg:py-28">
      <div className="glow-orb absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" />
      <FloatingOrbs />

      <div className="relative mx-auto w-[min(92vw,1400px)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            THE PROCESS
          </span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-[600px] text-sm leading-relaxed text-[#64748B] lg:text-base">
              {description}
            </p>
          )}
        </motion.div>

        {/* S-Flow — this is the scroll-tracked container */}
        <div className="relative" ref={stepsRef}>
          {/* Desktop S-Curve SVG */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none" style={{ zIndex: 0 }}>
            {svgPath && (
              <svg className="w-full h-full overflow-visible">
                {/* Gray base track */}
                <path d={svgPath} fill="none" stroke="#E2E8F0" strokeWidth="2" />

                {/* Single teal draw-on-scroll stroke */}
                <motion.path
                  d={svgPath}
                  fill="none"
                  stroke="#0dcfcf"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ pathLength: pathDraw }}
                />
              </svg>
            )}
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-[#E2E8F0] lg:hidden" style={{ zIndex: 0 }}>
            <motion.div className="w-full bg-[#0dcfcf] origin-top" style={{ height: mobileHeight }} />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16 relative" style={{ zIndex: 10 }}>
            {steps.map((step, index) => (
              <SFlowStep
                key={step.step}
                step={step}
                index={index}
                isActive={activeStep >= index}
                isEven={index % 2 === 0}
                nodeRef={(el) => { nodeRefs.current[index] = el }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


function SFlowStep({
  step,
  index,
  isActive,
  isEven,
  nodeRef,
}: {
  step: WorkflowStep
  index: number
  isActive: boolean
  isEven: boolean
  nodeRef: (el: HTMLDivElement | null) => void
}) {
  const Icon = getStepIcon(step, index)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative flex flex-col gap-4 lg:items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div
        ref={nodeRef}
        className={`absolute left-0 top-0 lg:top-1/2 lg:-translate-y-1/2 ${
          isEven
            ? "lg:left-[45%] lg:-translate-x-1/2"
            : "lg:left-[55%] lg:-translate-x-1/2"
        }`}
        style={{ zIndex: 20 }}
      >
        <div className="relative">
          <motion.div
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white"
            animate={{
              borderColor: isActive ? "#0dcfcf" : "#E2E8F0",
              boxShadow: isActive
                ? "0 0 15px rgba(13,207,207,0.5), 0 0 40px rgba(13,207,207,0.15)"
                : "0 1px 4px rgba(0,0,0,0.06)",
              scale: isActive ? 1 : 0.92,
            }}
            transition={{ duration: 0.4 }}
          >
            <Icon
              className="h-6 w-6 transition-colors duration-300"
              style={{ color: isActive ? "#0dcfcf" : "#94A3B8" }}
            />
          </motion.div>
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-full border border-[#0dcfcf]"
              initial={{ scale: 1, opacity: 0.4 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          )}
        </div>
      </div>

      <div className={`ml-16 lg:ml-0 lg:w-[42%] ${isEven ? "lg:mr-auto" : "lg:ml-auto"}`}>
        <StepCard
          step={step}
          slideFrom={isEven ? "left" : "right"}
          textAlign={isEven ? "right" : "left"}
        />
      </div>

      <div className="hidden lg:block lg:w-[42%]" />
    </motion.div>
  )
}

function StepCard({
  step,
  slideFrom,
  textAlign,
}: {
  step: WorkflowStep
  slideFrom: "left" | "right"
  textAlign: "left" | "right"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: slideFrom === "left" ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className="rounded-xl border border-[#E2E8F0] bg-white p-7 lg:p-8 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.06)" }}
      >
        <h3 className="mb-2 text-lg font-semibold text-[#0F172A]" style={{ textAlign }}>
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#64748B]" style={{ textAlign }}>
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}
