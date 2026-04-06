"use client"

import { useInView } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import { useReducedMotion } from "./use-reduced-motion"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>{}[]"

interface ScrambleTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "span"
  delay?: number
  /** Duration per character (ms) before it settles */
  scrambleDuration?: number
}

/**
 * Data-scrambling / decoding entrance effect for AI-themed titles.
 * Characters cycle through random glyphs before "decoding" to the correct letter.
 */
export function ScrambleText({
  text,
  className = "",
  as: Tag = "h1",
  delay = 300,
  scrambleDuration = 50,
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as any, { once: true, margin: "-50px" })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState("")
  const [settled, setSettled] = useState(false)
  const frameRef = useRef<number>(0)

  const scramble = useCallback(() => {
    const length = text.length
    let startTime: number | null = null
    const totalDuration = delay + length * scrambleDuration

    function tick(timestamp: number) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      if (elapsed < delay) {
        // Pre-delay: show all scrambled
        setDisplay(
          text
            .split("")
            .map((ch) => (ch === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
            .join("")
        )
        frameRef.current = requestAnimationFrame(tick)
        return
      }

      const progress = elapsed - delay
      const settledCount = Math.min(
        Math.floor(progress / scrambleDuration),
        length
      )

      const result = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " "
          if (i < settledCount) return ch
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join("")

      setDisplay(result)

      if (settledCount >= length) {
        setDisplay(text)
        setSettled(true)
        return
      }

      frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
  }, [text, delay, scrambleDuration])

  useEffect(() => {
    if (!isInView || reduced || settled) return
    scramble()
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isInView, reduced, scramble, settled])

  if (reduced) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag ref={ref as any} className={className}>
      <span className="font-mono" style={{ fontFamily: settled ? "inherit" : undefined }}>
        {display || text.replace(/[^ ]/g, "\u00A0")}
      </span>
    </Tag>
  )
}
