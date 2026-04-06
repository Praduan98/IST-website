"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"

const caseStudies = [
  {
    metric: "40%",
    description: "Reduction in Customer Acquisition Cost",
    clientType: "B2B IT Firm",
    color: "#0dcfcf",
  },
  {
    metric: "3x",
    description: "Pipeline Velocity Increase in 90 Days",
    clientType: "SaaS Company",
    color: "#0a9a9a",
  },
  {
    metric: "3 weeks",
    description: "From Concept to Working GPT-Powered App",
    clientType: "AI Startup",
    color: "#5de0e0",
  },
  {
    metric: "25x",
    description: "Increase in Qualified Meeting Bookings",
    clientType: "Enterprise Software",
    color: "#0d9f9f",
  },
]

function useCounter(end: number, duration = 1800, startCounting: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return
    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => { if (animationFrame) cancelAnimationFrame(animationFrame) }
  }, [end, duration, startCounting])

  return count
}

export function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="case-studies" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            RESULTS
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Success{" "}
            <span className="bg-gradient-to-r from-[#0dcfcf] to-[#0F172A] bg-clip-text text-transparent">Stories</span>
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent lg:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent lg:w-24" />

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto px-6 pb-4 lg:px-[calc((100vw-1280px)/2+24px)]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              {...study}
              index={index}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="mx-auto mt-6 flex max-w-[1280px] items-center justify-between px-6">
          <div className="flex gap-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                animate={{
                  width: activeIndex === index ? 20 : 8,
                  backgroundColor: activeIndex === index ? study.color : "#E2E8F0",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full"
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#0F172A] transition-colors hover:border-[#CBD5E1] hover:bg-[#F8FAFC] disabled:opacity-40"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#0F172A] transition-colors hover:border-[#CBD5E1] hover:bg-[#F8FAFC] disabled:opacity-40"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({
  metric,
  description,
  clientType,
  color,
  index,
  isActive,
  onHover,
}: {
  metric: string
  description: string
  clientType: string
  color: string
  index: number
  isActive: boolean
  onHover: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hovered, setHovered] = useState(false)

  const numericValue = parseInt(metric.replace(/[^0-9]/g, "")) || 0
  const suffix = metric.replace(/[0-9]/g, "")
  const count = useCounter(numericValue, 1800, isInView)

  // 3D tilt
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 })
  // spotlight position
  const spotX = useMotionValue(110)
  const spotY = useMotionValue(100)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    rotateY.set(((x - cx) / cx) * 8)
    rotateX.set(-((y - cy) / cy) * 8)
    spotX.set(x)
    spotY.set(y)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12, type: "spring", stiffness: 200, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { setHovered(true); onHover() }}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
        borderColor: hovered ? `${color}50` : "#E2E8F0",
        boxShadow: hovered
          ? `0 20px 50px ${color}20, 0 4px 16px rgba(0,0,0,0.08)`
          : "0 1px 4px rgba(0,0,0,0.06)",
        transition: "border-color 0.4s, box-shadow 0.4s",
      }}
      className="relative flex h-[200px] w-[220px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl border bg-[#F8FAFC] p-5 cursor-pointer"
    >
      {/* Soft spotlight that follows the cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(120px circle at ${spotX}px ${spotY}px, ${color}22, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      <div className="relative z-10">
        {/* Metric */}
        <motion.div
          className="mb-2 text-4xl font-bold tracking-tight"
          style={{ color }}
          animate={{ opacity: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.3 }}
        >
          {numericValue > 0 ? `${count}${suffix}` : metric}
        </motion.div>

        {/* Description */}
        <p className="text-xs font-medium leading-snug text-[#475569] line-clamp-2">
          {description}
        </p>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-xs font-medium text-[#94A3B8]">{clientType}</span>
        <motion.div
          animate={{
            color: hovered ? color : "#CBD5E1",
            x: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
        >
          <TrendingUp className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.div>
  )
}
