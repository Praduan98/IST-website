"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useReducedMotion } from "./use-reduced-motion"

// "Neural Growth & Processing" — An interactive node that reacts to cursor,
// simulating a live AI brain with pulsing connections.

const NEURAL_NODES = [
  { x: 50, y: 50, r: 6, delay: 0 },
  { x: 20, y: 30, r: 4, delay: 0.3 },
  { x: 80, y: 25, r: 4, delay: 0.5 },
  { x: 30, y: 75, r: 4, delay: 0.7 },
  { x: 70, y: 80, r: 4, delay: 0.2 },
  { x: 15, y: 55, r: 3, delay: 0.9 },
  { x: 85, y: 50, r: 3, delay: 0.4 },
  { x: 40, y: 20, r: 3, delay: 0.6 },
  { x: 60, y: 15, r: 3, delay: 0.8 },
  { x: 35, y: 60, r: 3, delay: 1.0 },
  { x: 65, y: 65, r: 3, delay: 0.1 },
  { x: 50, y: 85, r: 3, delay: 1.1 },
]

const NEURAL_CONNECTIONS = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 7], [2, 8], [3, 9], [4, 10], [3, 11], [4, 11],
  [1, 5], [2, 6], [7, 8], [9, 10],
]

export function AiHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // The central node follows the cursor with a lag
  const centerX = useTransform(springX, [0, 100], [42, 58])
  const centerY = useTransform(springY, [0, 100], [42, 58])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100)
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  if (reduced) return null

  return (
    <div
      ref={containerRef}
      className="pointer-events-auto absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] sm:w-[80%] max-w-[600px] h-auto opacity-50 sm:opacity-65"
        fill="none"
      >
        {/* Neural connections */}
        {NEURAL_CONNECTIONS.map(([from, to], i) => {
          const n1 = NEURAL_NODES[from]
          const n2 = NEURAL_NODES[to]
          return (
            <motion.line
              key={i}
              x1={from === 0 ? undefined : n1.x}
              y1={from === 0 ? undefined : n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="#0dcfcf"
              strokeWidth="0.6"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.15 }}
              style={from === 0 ? { x1: centerX, y1: centerY } : undefined}
            />
          )
        })}

        {/* Outer nodes */}
        {NEURAL_NODES.slice(1).map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#0dcfcf"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.4, 0.85, 0.4], scale: 1 }}
            transition={{
              opacity: { duration: 2.5, repeat: Infinity, delay: node.delay },
              scale: { duration: 0.6, delay: 0.5 + node.delay },
            }}
          />
        ))}

        {/* Central node — follows cursor */}
        <motion.circle
          cx={50}
          cy={50}
          r={8}
          fill="#0dcfcf"
          opacity={0.8}
          style={{ cx: centerX, cy: centerY }}
        />
        <motion.circle
          cx={50}
          cy={50}
          r={8}
          fill="none"
          stroke="#0dcfcf"
          strokeWidth="0.8"
          style={{ cx: centerX, cy: centerY }}
          animate={{ r: [8, 14, 8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          opacity={0.5}
        />
      </svg>
    </div>
  )
}
