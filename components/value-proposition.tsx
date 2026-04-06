"use client"

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

// ─── Focus category data ────────────────────────────────────────────
const FOCUS_DATA = {
  intent: {
    title: "Intent Signals",
    color: "#0dcfcf",
  },
  automation: {
    title: "Smart Automation",
    color: "#0a9a9a",
  },
  revops: {
    title: "RevOps & Pipeline",
    color: "#5de0e0",
  },
  ai: {
    title: "AI Agents",
    color: "#0F172A",
  },
} as const

type FocusKey = keyof typeof FOCUS_DATA

// ─── Precise iceberg layer geometry (% of the image container) ──────
// Calibrated to the exact label positions in the funnel PNG.
//   Intent   → "Website visit", "Job changes", "Funding rounds"
//   Automate → "CRM sync", "GTM workflows"
//   RevOps   → "Predictable pipeline", "Data-Driven Growth"
//   AI       → "Auto follow-ups", "Book meetings"
const LAYER_MAP: Record<FocusKey, { top: number; height: number; anchorY: number }> = {
  intent:     { top: 26, height: 12, anchorY: 32 },
  automation: { top: 38, height: 10, anchorY: 43 },
  revops:     { top: 48, height: 10, anchorY: 53 },
  ai:         { top: 58, height: 13, anchorY: 65 },
}

const SPRING = { type: "spring" as const, stiffness: 220, damping: 24 }
const LIFT = { duration: 0.5, ease: [0.33, 1, 0.68, 1] } // snappy Power4-style ease

const IMAGE_SRC =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t5sxH2so1ETKlRStz9QLOwQU7s98Wp.png"

// ═════════════════════════════════════════════════════════════════════
// Main export
// ═════════════════════════════════════════════════════════════════════
export function ValueProposition() {
  const [activeFocus, setActiveFocus] = useState<FocusKey | null>(null)

  const handlePillClick = (key: FocusKey) => {
    setActiveFocus((prev) => (prev === key ? null : key))
  }

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      {/* Background glow */}
      <div className="glow-orb absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* ── Left: 3D Iceberg Diagram ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full lg:w-[50%]"
          >
            <IcebergDiagram activeFocus={activeFocus} />
          </motion.div>

          {/* ── Right: Text + Focus Pills ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[50%]"
          >
            <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              THE PROBLEM
            </span>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Turning Hidden Signals Into{" "}
              <span className="gradient-text">Growth</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#64748B] lg:text-lg">
              Traditional CRMs show only surface-level engagement, while the real
              growth signals hide in the dark funnel. AI agents and automation turn
              those signals into revenue, and smart integrations power a
              predictable, scalable growth engine.
            </p>

            {/* Focus Pills */}
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(FOCUS_DATA) as FocusKey[]).map((key) => (
                <FocusPill
                  key={key}
                  color={FOCUS_DATA[key].color}
                  label={FOCUS_DATA[key].title}
                  isActive={activeFocus === key}
                  onClick={() => handlePillClick(key)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="mx-auto mt-24 h-px max-w-[800px] bg-gradient-to-r from-transparent via-[#0dcfcf]/30 to-transparent lg:mt-32" />
    </section>
  )
}

// ═════════════════════════════════════════════════════════════════════
// Iceberg Diagram — 3D layer uplift with depth-of-field
// ═════════════════════════════════════════════════════════════════════
function IcebergDiagram({ activeFocus }: { activeFocus: FocusKey | null }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeFocus) return
    const rect = e.currentTarget.getBoundingClientRect()
    rotateX.set((e.clientY - rect.top - rect.height / 2) * 0.02)
    rotateY.set(-(e.clientX - rect.left - rect.width / 2) * 0.02)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const layer = activeFocus ? LAYER_MAP[activeFocus] : null
  const data = activeFocus ? FOCUS_DATA[activeFocus] : null

  return (
    <motion.div
      className="relative rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 shadow-sm"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: activeFocus ? 0 : rotateX,
        rotateY: activeFocus ? 0 : rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      whileHover={activeFocus ? {} : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* 3D scene container */}
      <div
        className="relative aspect-square w-full"
        style={{ perspective: "800px", transformStyle: "preserve-3d" }}
      >
        {/* ── Z-0: Base image — receives DOF blur when a layer is active ── */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            filter: activeFocus
              ? "blur(3px) saturate(0.7) brightness(0.9)"
              : "blur(0px) saturate(1) brightness(1)",
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={IMAGE_SRC}
            alt="Dark Funnel Visualization"
            fill
            className="rounded-xl object-contain"
            priority
          />
        </motion.div>

        {/* ── Z-5: Ambient pulse dots (trapped in the depth gap) ── */}
        {[
          { left: "57%", top: "13%", color: "#0dcfcf", delay: 0 },
          { left: "12%",  top: "28%", color: "#0dcfcf", delay: 0.5 },
          { left: "33%", top: "55%", color: "#5de0e0", delay: 1 },
          { left: "30%", top: "80%", color: "#0a9a9a", delay: 1.5 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute z-[5] h-2.5 w-2.5 rounded-full"
            style={{
              left: dot.left,
              top: dot.top,
              backgroundColor: dot.color,
              transformStyle: "preserve-3d",
              transform: "translateZ(12px)",
            }}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
          />
        ))}

        {/* ── Z-10: Uplifted sharp layer (3D extraction + scale) ── */}
        <AnimatePresence mode="wait">
          {layer && data && (
            <motion.div
              key={activeFocus}
              className="absolute inset-0 z-[10]"
              style={{
                clipPath: `inset(${layer.top}% 0% ${100 - layer.top - layer.height}% 0% round 6px)`,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, z: 0, scale: 1 }}
              animate={{ opacity: 1, z: 40, scale: 1.05 }}
              exit={{ opacity: 0, z: 0, scale: 1 }}
              transition={LIFT}
            >
              {/* Sharp copy of the image — only the clipped band shows */}
              <Image
                src={IMAGE_SRC}
                alt=""
                fill
                className="rounded-xl object-contain"
                aria-hidden="true"
              />

              {/* Inner teal shadow on the uplifted edges */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  clipPath: `inset(${layer.top}% 0% ${100 - layer.top - layer.height}% 0% round 6px)`,
                  boxShadow: `inset 0 0 24px ${data.color}35, inset 0 2px 0 ${data.color}25, inset 0 -2px 0 ${data.color}25`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Teal drop-shadow frame (sits behind the uplifted band) ── */}
        <AnimatePresence>
          {layer && data && (
            <motion.div
              key={`shadow-${activeFocus}`}
              className="pointer-events-none absolute left-[5%] right-[5%] z-[9] rounded-lg"
              style={{ top: `${layer.top}%`, height: `${layer.height}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={LIFT}
            >
              <div
                className="h-full w-full rounded-lg"
                style={{
                  boxShadow: `0 10px 30px ${data.color}30, 0 4px 12px ${data.color}20`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Z-20: Pulsing teal beacon on the active layer ──── */}
        <AnimatePresence>
          {layer && data && (
            <motion.div
              key={`beacon-${activeFocus}`}
              className="absolute z-[20]"
              style={{
                left: "13%",
                top: `${layer.anchorY}%`,
                transform: "translate(-50%, -50%) translateZ(45px)",
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={LIFT}
            >
              {/* Outer ring — pulses outward */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{ border: `2px solid ${data.color}` }}
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Middle ring */}
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{ border: `1.5px solid ${data.color}` }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              {/* Core dot */}
              <div
                className="h-3.5 w-3.5 rounded-full"
                style={{
                  backgroundColor: data.color,
                  boxShadow: `0 0 14px ${data.color}90, 0 0 28px ${data.color}50`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ═════════════════════════════════════════════════════════════════════
// Focus Pill
// ═════════════════════════════════════════════════════════════════════
function FocusPill({
  color,
  label,
  isActive,
  onClick,
}: {
  color: string
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      className="flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-left shadow-sm transition-colors focus:outline-none"
      animate={{
        scale: isActive ? 1.05 : 1,
        borderColor: isActive ? color : "#E2E8F0",
        backgroundColor: isActive ? `${color}12` : "#FFFFFF",
        boxShadow: isActive
          ? `0 0 0 1px ${color}30, 0 4px 14px ${color}18`
          : "0 1px 2px rgba(0,0,0,0.04)",
      }}
      whileHover={{ scale: isActive ? 1.05 : 1.02, borderColor: color }}
      whileTap={{ scale: 0.98 }}
      transition={SPRING}
    >
      <motion.div
        className="h-3 w-3 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{ scale: isActive ? 1.25 : 1 }}
        transition={SPRING}
      />
      <span
        className={`text-sm font-medium transition-colors ${
          isActive ? "text-[#0F172A]" : "text-[#64748B]"
        }`}
      >
        {label}
      </span>
    </motion.button>
  )
}
