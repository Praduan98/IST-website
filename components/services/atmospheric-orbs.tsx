"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const DOTS = [
  { x: 3, y: 12, size: 6, dur: 7, delay: 0 },
  { x: 10, y: 45, size: 5, dur: 8, delay: 0.8 },
  { x: 15, y: 78, size: 7, dur: 6, delay: 1.6 },
  { x: 22, y: 25, size: 5, dur: 9, delay: 2.4 },
  { x: 28, y: 60, size: 6, dur: 7, delay: 0.4 },
  { x: 33, y: 90, size: 5, dur: 8, delay: 3.2 },
  { x: 38, y: 18, size: 7, dur: 6, delay: 1.2 },
  { x: 42, y: 52, size: 5, dur: 9, delay: 2.0 },
  { x: 48, y: 35, size: 6, dur: 7, delay: 0.6 },
  { x: 52, y: 72, size: 5, dur: 8, delay: 2.8 },
  { x: 58, y: 8, size: 7, dur: 6, delay: 1.4 },
  { x: 62, y: 48, size: 5, dur: 9, delay: 3.6 },
  { x: 68, y: 82, size: 6, dur: 7, delay: 0.2 },
  { x: 72, y: 22, size: 5, dur: 8, delay: 1.8 },
  { x: 78, y: 55, size: 7, dur: 6, delay: 2.6 },
  { x: 82, y: 38, size: 5, dur: 9, delay: 0.9 },
  { x: 85, y: 85, size: 6, dur: 7, delay: 3.4 },
  { x: 90, y: 15, size: 5, dur: 8, delay: 1.0 },
  { x: 94, y: 65, size: 7, dur: 6, delay: 2.2 },
  { x: 97, y: 42, size: 5, dur: 9, delay: 3.0 },
  { x: 5, y: 58, size: 6, dur: 7, delay: 1.3 },
  { x: 18, y: 92, size: 5, dur: 8, delay: 0.5 },
  { x: 35, y: 5, size: 7, dur: 6, delay: 2.9 },
  { x: 55, y: 95, size: 5, dur: 9, delay: 1.7 },
  { x: 75, y: 10, size: 6, dur: 7, delay: 3.8 },
]

const ORBS = [
  { x: 15, y: 25, size: 140, dur: 12, delay: 0 },
  { x: 70, y: 55, size: 120, dur: 14, delay: 3 },
  { x: 40, y: 80, size: 100, dur: 10, delay: 6 },
  { x: 85, y: 20, size: 90, dur: 13, delay: 2 },
  { x: 25, y: 65, size: 110, dur: 11, delay: 5 },
]

export function FloatingOrbs() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="gpu-layer absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
      {ORBS.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-[#0dcfcf]"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            filter: `blur(${orb.size * 0.6}px)`,
            opacity: 0,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {DOTS.map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full bg-[#0dcfcf]"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: dot.dur,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
