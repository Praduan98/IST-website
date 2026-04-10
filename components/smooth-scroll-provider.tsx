"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

/**
 * Global smooth-scroll provider using Lenis.
 *
 * Tuned for high-refresh-rate displays:
 * - lerp 0.12 → snappier than the previous 0.1 while still trailing-smooth
 * - Custom easeOutExpo curve for programmatic scrolls (anchor jumps)
 * - syncTouch + touchInertiaMultiplier → native-feel inertial scrolling on mobile
 * - autoRaf disabled → driven by a single rAF loop so it composes cleanly
 *   with Framer Motion's useScroll
 * - Respects prefers-reduced-motion
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const lenis = new Lenis({
      lerp: 0.12,                    // Snappier follow while keeping the trailing smoothness
      duration: 1.0,                 // Faster programmatic scrolls (anchors, scrollTo)
      easing: (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart — premium deceleration
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,              // Disabled — native touch scroll is faster on mobile
      touchMultiplier: 1,
      infinite: false,
      autoResize: true,              // Recalculate on viewport change
    })
    lenisRef.current = lenis

    // Single RAF loop — all orb / ghost-text CSS animations stay on the
    // compositor thread independently; Lenis just drives scroll position.
    let frame: number
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
