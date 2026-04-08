"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import type { ServiceMetric } from "@/lib/services-data/types"
import { FloatingOrbs } from "./atmospheric-orbs"

interface ProofSectionProps {
  metrics: ServiceMetric[]
  title?: React.ReactNode
  description?: React.ReactNode
}

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (!isInView) return

    // Extract numeric part and suffix
    const match = value.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const prefix = match[1]
    const target = parseFloat(match[2])
    const suffix = match[3]
    const duration = 1500
    const steps = 40
    const increment = target / steps

    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(target, increment * step)
      const display = target % 1 === 0 ? Math.round(current) : current.toFixed(1)
      setDisplayValue(`${prefix}${display}${suffix}`)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="mb-2 text-4xl font-bold text-[#0dcfcf] sm:text-5xl lg:text-6xl">
        {displayValue}
      </div>
      <p className="text-sm text-[#64748B] lg:text-base">{label}</p>
    </motion.div>
  )
}

export function ProofSection({
  metrics,
  title = "The Numbers Speak",
  description,
}: ProofSectionProps) {
  return (
    <section className="relative bg-[#F8FAFC] px-6 py-20 lg:py-28">
      <div className="glow-orb absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" />
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
            PROOF OF IMPACT
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

        <div className={`grid gap-8 ${metrics.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
          {metrics.map((metric) => (
            <AnimatedCounter key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
