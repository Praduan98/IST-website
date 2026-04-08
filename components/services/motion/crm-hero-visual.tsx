"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "./use-reduced-motion"

// "Frictionless Flow" — Data sources glide and snap into a unified CRM stream.
// Disparate elements merge into one flowing pipeline.

const DATA_SOURCES = [
  { label: "HubSpot", x: -120, y: -50, color: "#FF7A59" },
  { label: "Clay", x: -100, y: 20, color: "#6366F1" },
  { label: "Apollo", x: -130, y: 80, color: "#3B82F6" },
  { label: "RB2B", x: 120, y: -40, color: "#10B981" },
  { label: "6sense", x: 110, y: 60, color: "#8B5CF6" },
]

const MERGE_DELAY = 1.5

export function CrmHeroVisual() {
  const reduced = useReducedMotion()

  if (reduced) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Data source pills that glide to center */}
        {DATA_SOURCES.map((source, i) => (
          <motion.div
            key={source.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-[10px] font-semibold text-white shadow-lg whitespace-nowrap"
            style={{ backgroundColor: source.color }}
            initial={{ x: source.x, y: source.y, opacity: 0, scale: 0.7 }}
            animate={{
              x: [source.x, source.x * 0.3, 0],
              y: [source.y, source.y * 0.3, 0],
              opacity: [0, 1, 0],
              scale: [0.7, 1, 0.5],
            }}
            transition={{
              duration: 3,
              delay: MERGE_DELAY + i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            {source.label}
          </motion.div>
        ))}

        {/* Central unified CRM node */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: MERGE_DELAY + 1 }}
        >
          {/* Outer ring pulse */}
          <motion.div
            className="absolute h-24 w-24 rounded-full border border-[#0dcfcf]/30"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Inner circle */}
          <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-[#0dcfcf]/30 to-[#0dcfcf]/10 border border-[#0dcfcf]/50 flex items-center justify-center" style={{ boxShadow: '0 0 15px rgba(13,207,207,0.15)' }}>
            <span className="text-[9px] font-bold text-[#0F172A] tracking-wider">CRM</span>
          </div>
        </motion.div>

        {/* Flow lines from sources to center */}
        <svg className="absolute -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px]" viewBox="-150 -100 300 200" style={{ left: 0, top: 0 }}>
          {DATA_SOURCES.map((source, i) => (
            <motion.line
              key={i}
              x1={source.x}
              y1={source.y}
              x2={0}
              y2={0}
              stroke="#0dcfcf"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{
                duration: 3,
                delay: MERGE_DELAY + i * 0.3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
