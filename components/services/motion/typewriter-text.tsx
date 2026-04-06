"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useReducedMotion } from "./use-reduced-motion"

// "Decoding" stagger for AI group titles — characters reveal with a processing effect.

interface TypewriterTextProps {
  text: string
  className?: string
  as?: "h2" | "h3" | "span"
  delay?: number
}

export function TypewriterText({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: TypewriterTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const reduced = useReducedMotion()

  if (reduced) {
    return <Tag className={className}>{text}</Tag>
  }

  const words = text.split(" ")

  return (
    <Tag className={className} ref={ref as any}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              className="inline-block"
              initial={{ opacity: 0, filter: "blur(8px)", y: 5 }}
              animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{
                duration: 0.3,
                delay: delay + (wi * word.length + ci) * 0.02,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}
