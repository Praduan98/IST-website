"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "./use-reduced-motion"

// "Precision Targeting" — Animated funnel that filters broad traffic
// into high-value leads with radar-pulse targeting rings.

export function AbmHeroVisual() {
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 400 300"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[650px] h-auto opacity-65"
        fill="none"
      >
        {/* Funnel shape */}
        <motion.path
          d="M 80 40 L 320 40 L 250 150 L 230 250 L 170 250 L 150 150 Z"
          stroke="#1E293B"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Funnel gradient fill */}
        <defs>
          <linearGradient id="funnelGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0dcfcf" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0dcfcf" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 80 40 L 320 40 L 250 150 L 230 250 L 170 250 L 150 150 Z"
          fill="url(#funnelGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Funnel stage labels */}
        {[
          { label: "Broad Traffic", y: 55, opacity: 0.5 },
          { label: "Signal Filtered", y: 120, opacity: 0.7 },
          { label: "Intent Matched", y: 180, opacity: 0.85 },
          { label: "Qualified Leads", y: 240, opacity: 1 },
        ].map((stage, i) => (
          <motion.text
            key={stage.label}
            x={200}
            y={stage.y}
            textAnchor="middle"
            className="fill-[#0F172A] text-[9px] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage.opacity }}
            transition={{ duration: 0.5, delay: 1.5 + i * 0.3 }}
          >
            {stage.label}
          </motion.text>
        ))}

        {/* Horizontal filter lines */}
        {[85, 150, 210].map((y, i) => (
          <motion.line
            key={y}
            x1={i === 0 ? 100 : i === 1 ? 160 : 175}
            y1={y}
            x2={i === 0 ? 300 : i === 1 ? 240 : 225}
            y2={y}
            stroke="#0dcfcf"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.5, delay: 1.8 + i * 0.3 }}
          />
        ))}

        {/* Dots falling through the funnel — broad at top, fewer at bottom */}
        {Array.from({ length: 12 }).map((_, i) => {
          const startX = 120 + Math.random() * 160
          const filtered = i >= 8
          const highValue = i >= 10
          return (
            <motion.circle
              key={i}
              cx={startX}
              cy={45}
              r={highValue ? 3 : 2}
              fill={filtered ? "#64748B" : "#0dcfcf"}
              initial={{ cy: 45, opacity: 0 }}
              animate={{
                cy: filtered ? [45, 80 + Math.random() * 40] : [45, 245],
                opacity: filtered ? [0.9, 0] : [0.7, 1, 0.7],
                cx: filtered ? startX : 170 + (startX - 200) * 0.15,
              }}
              transition={{
                duration: filtered ? 1.5 : 3,
                delay: 2.5 + i * 0.25,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeIn",
              }}
            />
          )
        })}

        {/* Radar pulse at the output */}
        <motion.circle
          cx={200}
          cy={250}
          r={10}
          fill="none"
          stroke="#0dcfcf"
          strokeWidth="1"
          animate={{ r: [10, 25], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.circle
          cx={200}
          cy={250}
          r={10}
          fill="none"
          stroke="#0dcfcf"
          strokeWidth="1"
          animate={{ r: [10, 25], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
      </svg>
    </div>
  )
}
