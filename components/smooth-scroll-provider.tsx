"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

/**
 * Global smooth-scroll provider using Lenis.
 *
 * - lerp 0.1 → weighty, trailing stop for a premium feel
 * - Syncs with native scroll events so Framer Motion's useScroll works out-of-the-box
 * - Respects prefers-reduced-motion
 * - Preserves anchor / scrollIntoView behaviour
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const lenis = new Lenis({
      lerp: 0.1,               // Smooth trailing stop
      duration: 1.2,            // Fallback duration for programmatic scrolls
      smoothWheel: true,        // Virtual-scroll the mouse wheel
      wheelMultiplier: 1,       // 1:1 distance mapping (no amplification)
      touchMultiplier: 1.5,     // Slightly amplify touch for mobile feel
      infinite: false,
    })
    lenisRef.current = lenis

    // Single RAF loop — all orb / ghost-text CSS animations stay on the
    // compositor thread independently; Lenis just drives scroll position.
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
