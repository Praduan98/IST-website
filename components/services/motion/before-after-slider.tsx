"use client"

import { motion, useSpring, useMotionValue, animate } from "framer-motion"
import { useRef, useCallback, useEffect, useState } from "react"
import { useReducedMotion } from "./use-reduced-motion"

interface BeforeAfterSliderProps {
  title?: string
  beforeTitle?: string
  afterTitle?: string
  beforeItems: string[]
  afterItems: string[]
}

export function BeforeAfterSlider({
  title = "Manual Entry vs. Automated Enrichment",
  beforeTitle = "Before: Manual Chaos",
  afterTitle = "After: Automated Flow",
  beforeItems,
  afterItems,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const reduced = useReducedMotion()

  // pct = divider position. 100 = far-right = Before fully visible.
  // Dragging left reveals After.
  const raw = useMotionValue(100)
  const spring = useSpring(raw, { stiffness: 300, damping: 30 })
  const [pct, setPct] = useState(100)

  useEffect(() => spring.on("change", (v) => setPct(v)), [spring])

  // Full 0–100 range — no padding that stops the dragger short
  const toPct = useCallback((clientX: number) => {
    if (!containerRef.current) return 100
    const { left, width } = containerRef.current.getBoundingClientRect()
    return Math.max(0, Math.min(100, ((clientX - left) / width) * 100))
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true
    containerRef.current?.setPointerCapture(e.pointerId)
    raw.set(toPct(e.clientX))
  }, [toPct, raw])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return
    raw.set(toPct(e.clientX))
  }, [toPct, raw])

  const onPointerUp = useCallback(() => { dragging.current = false }, [])

  // Auto-sweep: starts at 100 (Before visible), sweeps left to reveal After, returns
  const [entered, setEntered] = useState(false)
  useEffect(() => {
    if (!entered || reduced) return
    let cancelled = false
    const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    const run = async () => {
      // Brief pause so user sees the default "Before" state first
      await new Promise((r) => setTimeout(r, 400))
      if (cancelled) return
      await animate(raw, 5, { duration: 0.9, ease })
      if (cancelled) return
      await animate(raw, 100, { duration: 0.9, ease })
    }
    run()
    return () => { cancelled = true }
  }, [entered, reduced, raw])

  // Use the longer list to size the hidden measuring div
  const maxItems = Math.max(beforeItems.length, afterItems.length)
  const sizingItems = maxItems === beforeItems.length ? beforeItems : afterItems

  return (
    <section className="relative bg-[#F8FAFC] px-6 py-20 lg:py-28">
      <div className="mx-auto w-[min(92vw,1100px)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setEntered(true)}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            THE DIFFERENCE
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
            {title}
          </h2>
        </motion.div>

        {/* Slider card — NO overflow:hidden so the handle knob isn't clipped at edges */}
        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="relative rounded-2xl border border-[#E2E8F0] bg-white shadow-sm cursor-col-resize select-none touch-none"
        >
          {/*
            Sizing layer (invisible) — in normal flow to set the card's height.
            Both visible panels are absolute so they align pixel-perfectly.
          */}
          <div className="p-6 sm:p-8 invisible" aria-hidden="true">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest">&nbsp;</h3>
            <ul className="space-y-3">
              {sizingItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-snug">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/*
            Layer 1: AFTER — absolute, full size, always rendered underneath.
            Visible wherever Before is clipped away.
          */}
          <div className="absolute inset-0 rounded-2xl bg-white p-6 sm:p-8 overflow-hidden">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-[#0dcfcf]">
              {afterTitle}
            </h3>
            <ul className="space-y-3">
              {afterItems.map((item, i) => (
                <li key={`a-${i}`} className="flex items-start gap-2.5 text-sm leading-snug text-[#0F172A]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0dcfcf]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/*
            Layer 2: BEFORE — absolute, on top, clipped from the right.
            clip-path inset(top right bottom left):
              right = 100-pct → at pct=100 clip=0% (fully visible)
                               → at pct=0   clip=100% (fully hidden)
          */}
          <div
            className="absolute inset-0 rounded-2xl bg-white p-6 sm:p-8 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - pct}% 0 0)`,
              willChange: "clip-path",
            }}
          >
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-[#EF4444]/80">
              {beforeTitle}
            </h3>
            <ul className="space-y-3">
              {beforeItems.map((item, i) => (
                <li key={`b-${i}`} className="flex items-start gap-2.5 text-sm leading-snug text-[#64748B]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EF4444]/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/*
            Layer 3: Handle — highest z-index, positioned by pct.
            translateX(-50%) centers the line on the pct mark.
          */}
          <div
            className="absolute inset-y-0 z-20 pointer-events-none"
            style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
          >
            {/* Teal glow line */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-[#0dcfcf]" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-3 bg-[#0dcfcf]/20 blur-sm" />

            {/* Drag knob */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0dcfcf] bg-white pointer-events-auto"
              style={{ boxShadow: "0 0 14px rgba(13,207,207,0.35), 0 2px 8px rgba(0,0,0,0.1)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M5 3L2 8L5 13" stroke="#0dcfcf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 3L14 8L11 13" stroke="#0dcfcf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-[#94A3B8]">
          Drag the handle to compare
        </p>
      </div>
    </section>
  )
}
