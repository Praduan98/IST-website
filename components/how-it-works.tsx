"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Zap, Brain, Workflow, TrendingUp, DollarSign, Check } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Zap,
    title: "Capture signals",
    description: "We tap into intent data, job changes, funding rounds, and website visits.",
    details: ["Job monitoring", "Funding alerts", "Visitor tracking", "Signal aggregation"],
  },
  {
    number: "02",
    icon: Brain,
    title: "AI processing",
    description: "Our AI agents analyze signals in real-time and personalize messaging.",
    details: ["Lead scoring", "Personalization", "Pattern matching", "Analytics"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Smart automation",
    description: "Automated workflows trigger the right action at the right time.",
    details: ["Multi-channel", "CRM sync", "Ad targeting", "Sales alerts"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale revenue",
    description: "Watch your pipeline grow with higher-quality leads and faster conversions.",
    details: ["Pipeline speed", "CAC reduction", "Revenue growth", "Predictable scale"],
  },
]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsContainerRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const dollarRef = useRef<HTMLDivElement>(null)
  const [pathData, setPathData] = useState("")
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center start"],
  })

  useEffect(() => {
    const updatePath = () => {
      if (!stepsContainerRef.current) return
      const containerRect = stepsContainerRef.current.getBoundingClientRect()
      
      const points = nodeRefs.current.filter(Boolean).map(node => {
        const rect = node!.getBoundingClientRect()
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2
        }
      })
      
      if (points.length < 2) return
      
      // Start at node 1 (no leading vertical line above it)
      let d = `M ${points[0].x} ${points[0].y}`

      // S-curve through all step nodes
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1]
        const curr = points[i]
        const yDist = curr.y - prev.y
        d += ` C ${prev.x} ${prev.y + yDist * 0.65}, ${curr.x} ${curr.y - yDist * 0.65}, ${curr.x} ${curr.y}`
      }

      // Final segment: curve into the $ revenue node and STOP there
      if (dollarRef.current) {
        const dr = dollarRef.current.getBoundingClientRect()
        const dx = dr.left - containerRect.left + dr.width / 2
        const dy = dr.top - containerRect.top + dr.height / 2
        const last = points[points.length - 1]
        const segY = dy - last.y
        d += ` C ${last.x} ${last.y + segY * 0.65}, ${dx} ${dy - segY * 0.65}, ${dx} ${dy}`
      }

      setPathData(d)
    }
    
    updatePath()
    setTimeout(updatePath, 100)
    window.addEventListener('resize', updatePath)
    return () => window.removeEventListener('resize', updatePath)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#F8FAFC] px-4 py-16 lg:py-24" id="how-it-works">
      <div className="glow-orb absolute right-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.04] blur-[150px]" />

      <div className="relative mx-auto w-[min(92vw,1400px)]">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           className="mb-16 text-center"
        >
          <span className="mb-3 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0dcfcf]">
            THE PROCESS
          </span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
            How we <span className="gradient-text">supercharge</span> your growth
          </h2>
          <p className="mx-auto max-w-[600px] text-sm leading-relaxed text-[#64748B] lg:text-base">
            Our proven 4-step process transforms buyer signals into booked meetings and revenue.
          </p>
        </motion.div>

        {/* Steps with Timeline */}
        <div className="relative" ref={stepsContainerRef}>
          {/* Animated SVG zigzag timeline */}
          <div className="absolute inset-0 hidden lg:block z-0 pointer-events-none">
            {pathData && (
              <svg className="w-full h-full overflow-visible">
                <path 
                  d={pathData} 
                  fill="none" 
                  stroke="#E2E8F0" 
                  strokeWidth="2" 
                />
                <motion.path 
                  d={pathData} 
                  fill="none" 
                  stroke="#0dcfcf" 
                  strokeWidth="3"
                  style={{ pathLength: scrollYProgress }} 
                />
              </svg>
            )}
          </div>
          
          {/* Mobile simple straight timeline */}
          <div className="absolute left-6 top-0 h-full w-px bg-[#E2E8F0] lg:hidden z-0 pointer-events-none">
            <motion.div
              className="w-full bg-[#0dcfcf]"
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-6 lg:space-y-12 relative z-10">
            {steps.map((step, index) => (
              <StepItem
                key={step.number}
                {...step}
                index={index}
                isActive={activeStep >= index}
                onHover={() => setActiveStep(index)}
                isEven={index % 2 === 0}
                nodeRef={(el) => { nodeRefs.current[index] = el }}
              />
            ))}
          </div>

          {/* Terminal "$" revenue node — anchored on the S-curve path */}
          <div className="mt-14 lg:mt-20 mb-6 flex justify-center relative z-10">
            <div ref={dollarRef}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0dcfcf] bg-white"
                style={{ boxShadow: "0 0 25px rgba(13,207,207,0.5), 0 0 50px rgba(13,207,207,0.15)" }}
              >
                <DollarSign className="h-7 w-7 text-[#0dcfcf]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StepItem({
  number,
  icon: Icon,
  title,
  description,
  details,
  index,
  isActive,
  onHover,
  isEven,
  nodeRef,
}: {
  number: string
  icon: typeof Zap
  title: string
  description: string
  details: string[]
  index: number
  isActive: boolean
  onHover: () => void
  isEven: boolean
  nodeRef: (el: HTMLDivElement | null) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative flex flex-col gap-4 lg:items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      onContextMenu={(e) => e} 
      onMouseEnter={onHover}
    >
      {/* Timeline node */}
      <div 
        ref={nodeRef}
        className={`absolute left-0 top-0 z-10 lg:top-1/2 lg:-translate-y-1/2 ${
          isEven 
            ? "lg:left-[45%] lg:-translate-x-1/2" 
            : "lg:left-[55%] lg:-translate-x-1/2"
        }`}
      >
        <motion.div
          className="flex h-12 w-12 lg:h-12 lg:w-12 items-center justify-center rounded-full border-2 bg-white shadow-sm"
          animate={{
            borderColor: isActive ? "#0dcfcf" : "#E2E8F0",
            boxShadow: isActive ? "0 0 20px rgba(13, 207, 207, 0.2)" : "0 1px 3px rgba(0,0,0,0.1)",
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Icon className="h-5 w-5 lg:h-5 lg:w-5" style={{ color: isActive ? "#0dcfcf" : "#64748B" }} />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        className={`ml-16 lg:ml-0 lg:w-[42%] ${isEven ? "lg:mr-auto" : "lg:ml-auto"}`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="interactive-card rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:border-[#0dcfcf]/30 hover:shadow-md lg:p-6">
          <div className="flex items-center gap-3 mb-2">
             <span className="inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-2 py-1 font-mono text-xs font-bold text-[#0dcfcf]">
               STEP {number}
             </span>
             <h3 className="text-lg font-semibold text-[#0F172A] lg:text-xl">
               {title}
             </h3>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-[#64748B]">
            {description}
          </p>

          <ul className="grid grid-cols-2 gap-2">
            {details.map((detail) => (
              <div key={detail} className="flex items-center gap-2 text-xs text-[#64748B]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0dcfcf]/10">
                  <Check className="h-2.5 w-2.5 text-[#0dcfcf]" />
                </div>
                {detail}
              </div>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Empty space for alternating layout */}
      <div className="hidden lg:block lg:w-[42%]" />
    </motion.div>
  )
}

