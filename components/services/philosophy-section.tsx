"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import type { PhilosophyCard as PhilosophyCardType } from "@/lib/services-data/types"
import { FloatingOrbs } from "./atmospheric-orbs"

interface PhilosophySectionProps {
  cards: PhilosophyCardType[]
  title?: string
}

export function PhilosophySection({ cards, title = "Our Philosophy" }: PhilosophySectionProps) {
  return (
    <section className="relative bg-white px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
      <div className="glow-orb absolute left-0 top-1/3 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" />
      <FloatingOrbs />

      <div className="relative mx-auto w-[min(92vw,1600px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            PHILOSOPHY
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card, index) => (
            <FlipCard key={card.frontTitle} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FlipCard({ card, index }: { card: PhilosophyCardType; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group perspective-[1000px] h-[240px] sm:h-[280px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl border border-[#E2E8F0] bg-white p-5 sm:p-8 shadow-sm flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="mb-3 h-1 w-10 rounded-full bg-[#0dcfcf]" />
          <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#0F172A]">{card.frontTitle}</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-[#64748B]">{card.frontText}</p>
          <p className="mt-3 sm:mt-4 text-xs font-medium text-[#0dcfcf]">
            <span className="sm:hidden">Tap to learn more</span>
            <span className="hidden sm:inline">Hover to learn more</span>
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl border border-[#0dcfcf]/30 bg-[#F8FAFC] p-5 sm:p-8 shadow-sm flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="mb-3 h-1 w-10 rounded-full bg-[#0dcfcf]" />
          <p className="text-sm leading-relaxed text-[#475569]">{card.backText}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
