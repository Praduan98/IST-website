"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useReducedMotion } from "./use-reduced-motion"

// "Strategic Pathing" — SVG connector lines draw from Signal nodes to Revenue,
// blurred "dark funnel" elements sharpen as they enter the intelligence zone.

const NODES = [
  { id: "signals", label: "Signals", x: 80, y: 40, blur: true },
  { id: "dark", label: "Dark funnel", x: 200, y: 100, blur: true },
  { id: "intent", label: "Intent", x: 140, y: 170, blur: true },
  { id: "engine", label: "Intelligence", x: 320, y: 120, blur: false },
  { id: "pipeline", label: "Pipeline", x: 440, y: 80, blur: false },
  { id: "revenue", label: "Revenue", x: 520, y: 140, blur: false },
]

const CONNECTIONS = [
  { from: 0, to: 3 },
  { from: 1, to: 3 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
]

export function GtmHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const pathProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  if (reduced) return null

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 600 220"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] h-auto opacity-70"
        fill="none"
      >
        {/* Connection lines that draw on scroll */}
        {CONNECTIONS.map((conn, i) => {
          const from = NODES[conn.from]
          const to = NODES[conn.to]
          return (
            <g key={i}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#1E293B"
                strokeWidth="1.5"
              />
              <motion.line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#0dcfcf"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 + i * 0.3, ease: "easeInOut" }}
              />
            </g>
          )
        })}

        {/* Nodes */}
        {NODES.map((node, i) => (
          <motion.g key={node.id}>
            {/* Blur filter for dark funnel nodes */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="22"
              fill="rgba(255,255,255,0.98)"
              stroke={node.blur ? "rgba(0,201,177,0.2)" : "#0dcfcf"}
              strokeWidth="1.5"
              initial={{ filter: node.blur ? "blur(6px)" : "blur(0px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
            />
            {/* Glow pulse on "intelligence" nodes */}
            {!node.blur && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="22"
                fill="none"
                stroke="#0dcfcf"
                strokeWidth="1"
                initial={{ r: 22, opacity: 0.6 }}
                animate={{ r: 32, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            )}
            <motion.text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-[#0F172A] text-[8px] font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
            >
              {node.label}
            </motion.text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}
