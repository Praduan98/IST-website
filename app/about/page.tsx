"use client"

import { motion, useInView } from "framer-motion"
import {
  Sparkles,
  Users,
  Target,
  Heart,
  Award,
  Rocket,
  Eye,
  Lightbulb,
  Phone,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Zap,
  Brain,
  Layers,
  BarChart3,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingOrbs } from "@/components/services/atmospheric-orbs"
import { handleEmailClick, INFO_EMAIL } from "@/components/email-link"

// ─── Data ────────────────────────────────────────────────────────────
const values = [
  {
    letter: "C",
    title: "Customer-centric",
    description: "We solve real business problems, not surface-level tasks.",
    icon: Users,
    color: "#0dcfcf",
  },
  {
    letter: "A",
    title: "Authentic",
    description: "Clear, honest, no fluff, always.",
    icon: Heart,
    color: "#0dcfcf",
  },
  {
    letter: "R",
    title: "Results-driven",
    description: "Revenue, pipeline, efficiency. Nothing else matters.",
    icon: Target,
    color: "#0dcfcf",
  },
  {
    letter: "E",
    title: "Expert-led",
    description: "Deep specialization, real execution.",
    icon: Award,
    color: "#0dcfcf",
  },
]

const storySteps = [
  {
    title: "Foundation",
    description:
      "InsightsTap was founded by a team of seasoned professionals in martech, sales, and data analytics with a vision to redefine B2B sales success.",
    icon: Lightbulb,
    year: "The beginning",
  },
  {
    title: "Passion",
    description:
      "Born from a passion for innovation, InsightsTap saw the disconnect between traditional B2B sales tactics and the data-driven strategies driving e-commerce success.",
    icon: Heart,
    year: "The spark",
  },
  {
    title: "Vision",
    description:
      "Determined to bridge this gap, we assembled a team of experts with diverse backgrounds in sales, marketing, and technology.",
    icon: Eye,
    year: "The team",
  },
  {
    title: "Future",
    description:
      "We focus on developing innovative solutions that drive enterprises forward, aligning them with future trends and opportunities.",
    icon: Rocket,
    year: "What's next",
  },
]

const whyUsItems = [
  { icon: Brain, title: "Deep industry expertise", description: "Decades of combined B2B, SaaS, and martech experience." },
  { icon: Target, title: "Results-oriented approach", description: "Every action tied directly to revenue outcomes." },
  { icon: Zap, title: "AI-powered GTM systems", description: "Cutting-edge signal intelligence and automation." },
  { icon: Users, title: "Extension of your team", description: "We embed, not just consult, real skin in the game." },
  { icon: Layers, title: "End-to-end execution", description: "From strategy to deployment, we own the full stack." },
  { icon: BarChart3, title: "Data-driven strategies", description: "Every decision backed by real-time analytics." },
]

const stats = [
  { value: 19, suffix: "+", label: "Years of experience" },
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 50, suffix: "M+", label: "Pipeline generated" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
]

// ─── Animated Counter ────────────────────────────────────────────────
function useCounter(end: number, duration = 1800, startCounting: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!startCounting) return
    let startTime: number | null = null
    let animId: number
    const animate = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [end, duration, startCounting])
  return count
}

// ─── Stagger Variants ────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

// ─── Page ────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ══════════════════════════════════════════════════════════
            1. DARK HERO — Full-width dark bg, large white text
        ══════════════════════════════════════════════════════════ */}
        <HeroSection />

        {/* ══════════════════════════════════════════════════════════
            2. STATS BAR — Full-width accent-colored section
        ══════════════════════════════════════════════════════════ */}
        <StatsBar />

        {/* ══════════════════════════════════════════════════════════
            3. WHO WE ARE — Text-focused about section
        ══════════════════════════════════════════════════════════ */}
        <WhoWeAreSection />

        {/* ══════════════════════════════════════════════════════════
            4. CORE VALUES — C.A.R.E. as large statement headings
        ══════════════════════════════════════════════════════════ */}
        <CoreValuesSection />

        {/* ══════════════════════════════════════════════════════════
            5. VISION & MISSION
        ══════════════════════════════════════════════════════════ */}
        <VisionMissionSection />

        {/* ══════════════════════════════════════════════════════════
            6. MEET THE FOUNDER
        ══════════════════════════════════════════════════════════ */}
        <FounderSection />

        {/* ══════════════════════════════════════════════════════════
            7. OUR STORY TIMELINE
        ══════════════════════════════════════════════════════════ */}
        <StoryTimeline />

        {/* ══════════════════════════════════════════════════════════
            8. WHY CHOOSE US
        ══════════════════════════════════════════════════════════ */}
        <WhyChooseUsSection />

        {/* ══════════════════════════════════════════════════════════
            8b. LEADERSHIP TEAM
        ══════════════════════════════════════════════════════════ */}
        <LeadershipTeamSection />

        {/* ══════════════════════════════════════════════════════════
            9. CTA SECTION
        ══════════════════════════════════════════════════════════ */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 1. DARK HERO
// ═══════════════════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-[#0a0e1a] pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1526] to-[#0a0e1a]" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(13,207,207,0.15), transparent 70%)" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 40% at 70% 70%, rgba(13,207,207,0.08), transparent 60%)" }} />
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <FloatingOrbs />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
        <motion.h1
          className="mb-6 text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block"
          >
            Build your next
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="block"
          >
            Predictable{" "}
            <span className="text-[#0dcfcf]">B2B revenue</span> engine
          </motion.span>
        </motion.h1>

        {/* Accent underline */}
        <motion.div
          className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#0dcfcf]"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mx-auto mb-10 max-w-[700px] text-base leading-relaxed text-white/70 sm:text-lg"
        >
          We help sales-led B2B companies scale faster using AI-powered GTM
          systems, marketing automation, and data-driven growth strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/Contact"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-[#0a0e1a] transition-all hover:bg-[#5de0e0] hover:shadow-md hover:shadow-[#0dcfcf]/15"
          >
            Book a discovery call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/careers/life-at-insightstap"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/20 px-8 text-base font-medium text-white/90 transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf]"
          >
            Life at InsightsTap
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-white/30" />
      </motion.div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 2. STATS BAR — Full-width accent-colored section
// ═══════════════════════════════════════════════════════════════════════
function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="relative bg-[#0dcfcf] py-16 lg:py-20">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} {...stat} isInView={isInView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCounter({
  value,
  suffix,
  label,
  isInView,
  delay,
}: {
  value: number
  suffix: string
  label: string
  isInView: boolean
  delay: number
}) {
  const count = useCounter(value, 1800, isInView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-3xl font-bold text-[#0a0e1a] sm:text-4xl md:text-5xl lg:text-6xl">
        {count}
        <span className="text-[#0a0e1a]/80">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-[#0a0e1a]/70 sm:text-base">{label}</div>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 3. WHO WE ARE
// ═══════════════════════════════════════════════════════════════════════
function WhoWeAreSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      <FloatingOrbs />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[45%]"
          >
            <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              Who we are
            </span>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Your partner in{" "}
              <span className="text-[#0dcfcf]">B2B sales success</span>
            </h2>
            <motion.div
              className="mt-6 h-1 w-16 rounded-full bg-[#0dcfcf]"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[55%]"
          >
            <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
              At Insightstap, we help sales-led companies unlock product-led
              growth, automation, and analytics without rebuilding their
              entire GTM stack. We blend PLG motion, marketing automation,
              performance campaigns, and data intelligence to help you scale
              revenue like e-commerce, predictably, measurably, and repeatably.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["AI-powered", "Data-driven", "Scalable", "Results-first"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#0dcfcf]/20 bg-[#0dcfcf]/5 px-4 py-2 text-sm font-medium text-[#0dcfcf]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 4. CORE VALUES — C.A.R.E. as large statement headings
//    (Inspired by NP Digital's "Think Big" / "Own It" / "Have Fun")
// ═══════════════════════════════════════════════════════════════════════
function CoreValuesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] px-6 py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(13,207,207,0.1), transparent 70%)" }} />
      <FloatingOrbs />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: Interactive circular design ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px]">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#0dcfcf]/15"
                animate={{
                  borderColor: activeIndex !== null ? "rgba(13,207,207,0.35)" : "rgba(13,207,207,0.15)",
                  boxShadow: activeIndex !== null ? "0 0 40px rgba(13,207,207,0.1)" : "0 0 0px rgba(13,207,207,0)",
                }}
                transition={{ duration: 0.6 }}
              />
              {/* Middle ring */}
              <motion.div
                className="absolute inset-6 rounded-full border border-[#0dcfcf]/10 sm:inset-8"
                animate={{
                  borderColor: activeIndex !== null ? "rgba(13,207,207,0.25)" : "rgba(13,207,207,0.1)",
                }}
                transition={{ duration: 0.6 }}
              />
              {/* Inner ring */}
              <div className="absolute inset-12 rounded-full border border-[#0dcfcf]/5 sm:inset-16" />

              {/* Rotating dashed ring */}
              <motion.div
                className="absolute inset-3 rounded-full border border-dashed border-[#0dcfcf]/20 sm:inset-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Connector lines from center to each badge */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                {values.map((v, i) => {
                  const positions = [
                    { x: 50, y: 6 },
                    { x: 94, y: 50 },
                    { x: 50, y: 94 },
                    { x: 6, y: 50 },
                  ]
                  const pos = positions[i]
                  return (
                    <motion.line
                      key={`line-${v.letter}`}
                      x1="50" y1="50" x2={pos.x} y2={pos.y}
                      stroke="#0dcfcf"
                      strokeWidth="0.2"
                      animate={{
                        strokeOpacity: activeIndex === i ? 0.5 : 0.08,
                        strokeWidth: activeIndex === i ? 0.4 : 0.2,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  )
                })}
              </svg>

              {/* Letter badges at cardinal positions */}
              {values.map((v, i) => {
                const badgeStyles: React.CSSProperties[] = [
                  { top: 0, left: "50%", marginLeft: -28, marginTop: -28 },
                  { top: "50%", right: 0, marginTop: -28, marginRight: -28 },
                  { bottom: 0, left: "50%", marginLeft: -28, marginBottom: -28 },
                  { top: "50%", left: 0, marginTop: -28, marginLeft: -28 },
                ]
                const isActive = activeIndex === i
                return (
                  <div key={v.letter} className="absolute z-20" style={badgeStyles[i]}>
                    <motion.div
                      className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border bg-[#0a0e1a] text-xl font-bold text-[#0dcfcf]"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      animate={{
                        borderColor: isActive ? "rgba(13,207,207,0.8)" : "rgba(13,207,207,0.3)",
                        boxShadow: isActive
                          ? "0 0 20px rgba(13,207,207,0.35), 0 0 60px rgba(13,207,207,0.1)"
                          : "0 0 0px rgba(13,207,207,0)",
                        scale: isActive ? 1.2 : 1,
                      }}
                      whileHover={{
                        scale: 1.2,
                        borderColor: "rgba(13,207,207,0.8)",
                        boxShadow: "0 0 20px rgba(13,207,207,0.35), 0 0 60px rgba(13,207,207,0.1)",
                      }}
                      onMouseEnter={() => setActiveIndex(i)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      {v.letter}
                    </motion.div>
                  </div>
                )
              })}

              {/* Pulsing dots on the outer ring */}
              {[
                { left: "100%", top: "50%", delay: 0 },
                { left: "75%", top: "6.7%", delay: 0.3 },
                { left: "25%", top: "6.7%", delay: 0.6 },
                { left: "0%", top: "50%", delay: 0.9 },
                { left: "25%", top: "93.3%", delay: 1.2 },
                { left: "75%", top: "93.3%", delay: 1.5 },
              ].map((dot, idx) => (
                <motion.div
                  key={`dot-${idx}`}
                  className="absolute h-1 w-1 rounded-full bg-[#0dcfcf]/40"
                  style={{ left: dot.left, top: dot.top, transform: "translate(-50%, -50%)" }}
                  animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.5, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: dot.delay }}
                />
              ))}

              {/* Center content */}
              <div className="relative z-10 text-center">
                <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-[#0dcfcf]">
                  Our principles
                </span>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  The <span className="text-[#0dcfcf]">C.A.R.E.</span>
                  <br />values
                </h2>
                <div className="mt-3 h-6">
                  <motion.span
                    key={activeIndex !== null ? `label-${activeIndex}` : "empty"}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: activeIndex !== null ? 1 : 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm font-medium text-[#0dcfcf]/70"
                  >
                    {activeIndex !== null ? values[activeIndex].title : ""}
                  </motion.span>
                </div>
              </div>

              {/* Subtle glow behind center */}
              <motion.div
                className="absolute inset-[30%] rounded-full blur-2xl"
                animate={{
                  background: activeIndex !== null
                    ? "rgba(13,207,207,0.08)"
                    : "rgba(13,207,207,0.04)",
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* ── Right: Value cards ── */}
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative cursor-pointer rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300"
                style={{
                  borderColor: activeIndex === i ? "rgba(13,207,207,0.5)" : "rgba(255,255,255,0.12)",
                  background: activeIndex === i ? "rgba(13,207,207,0.12)" : "rgba(255,255,255,0.06)",
                  boxShadow: activeIndex === i
                    ? "0 0 30px rgba(13,207,207,0.15)"
                    : "0 1px 8px rgba(0,0,0,0.2)",
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Active indicator bar */}
                <motion.div
                  className="absolute left-0 top-6 h-8 w-0.5 rounded-full bg-[#0dcfcf]"
                  animate={{ opacity: activeIndex === i ? 1 : 0, scaleY: activeIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0dcfcf]/10">
                  <v.icon className="h-5 w-5 text-[#0dcfcf]" />
                </div>

                {/* Letter + Title */}
                <h3 className="relative mb-2 text-lg font-bold text-white sm:text-xl">
                  <span className="text-[#0dcfcf]">{v.letter}</span>
                  <span className="mx-1.5 text-white/20">-</span>
                  {v.title}
                </h3>

                {/* Accent line */}
                <motion.div
                  className="relative mb-3 h-0.5 rounded-full bg-[#0dcfcf]/40"
                  animate={{ width: activeIndex === i ? 48 : 32 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Description */}
                <p className="relative text-sm leading-relaxed text-white/60">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 5. VISION & MISSION
// ═══════════════════════════════════════════════════════════════════════
function VisionMissionSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      <FloatingOrbs />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid gap-6 lg:gap-0 lg:grid-cols-2">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="border-b border-[#E2E8F0] p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-12"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0dcfcf]/10">
                <Eye className="h-7 w-7 text-[#0dcfcf]" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-[#0F172A]">
                Vision
              </h3>
            </div>
            <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
              To make signal-led, AI-powered GTM the default operating
              system for B2B revenue teams worldwide.
            </p>
            <motion.div
              className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#0dcfcf] to-[#0dcfcf]/30"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-5 sm:p-8 lg:p-12"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0dcfcf]/10">
                <Target className="h-7 w-7 text-[#0dcfcf]" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-[#0F172A]">
                Mission
              </h3>
            </div>
            <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
              We help B2B companies grow like e-commerce businesses by
              turning real-time buyer signals into automated, scalable
              revenue systems powered by AI.
            </p>
            <motion.div
              className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#0dcfcf] to-[#0dcfcf]/30"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 6. FOUNDER SECTION
// ═══════════════════════════════════════════════════════════════════════
function FounderSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 lg:py-32">
      <FloatingOrbs />
      <div className="relative mx-auto max-w-[1280px]">
        <div ref={ref} className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[40%]"
          >
            <div className="relative mx-auto max-w-[350px] lg:max-w-none">
              {/* Glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#0dcfcf]/20 via-transparent to-[#0dcfcf]/10 blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative aspect-square overflow-hidden rounded-full border-2 border-[#0dcfcf]/30 shadow-2xl shadow-[#0dcfcf]/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7dwEccfBxQEVrC0vzyT57DJN6zEehG.png"
                  alt="Ritesh Osta, founder of Insightstap"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative accents */}
              <motion.div
                className="absolute -left-2 -top-2 h-12 w-12 rounded-tl-xl border-l-2 border-t-2 border-[#0dcfcf]/60"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 h-12 w-12 rounded-br-xl border-b-2 border-r-2 border-[#0dcfcf]/60"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              {/* Badges */}
              <motion.div
                className="absolute -right-2 sm:-right-4 top-8 rounded-lg border border-[#0dcfcf]/30 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-xs font-medium text-[#0dcfcf]">Fiverr Pro</span>
              </motion.div>
              <motion.div
                className="absolute -left-2 sm:-left-4 bottom-12 rounded-lg border border-[#E2E8F0] bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-xs font-medium text-[#0F172A]">Top rated</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full text-center lg:w-[60%] lg:text-left"
          >
            <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              Meet the founder
            </span>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              {"Hi! I'm "}
              <span className="text-[#0dcfcf]">Ritesh Osta</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-[#64748B] lg:text-lg">
              Founder of Insightstap and a top-rated Fiverr Pro consultant,
              with 19+ years of experience helping B2B enterprises and
              startups build scalable GTM and revenue systems. I&apos;ve worked
              closely with growth, sales, and marketing teams to turn complex
              data, tools, and buyer signals into clear execution and real
              revenue impact.
            </p>

            {/* Stats Row */}
            <div className="mb-8 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: 19, suffix: "+", label: "Years experience" },
                { value: 250, suffix: "+", label: "Projects delivered" },
                { value: 50, suffix: "M+", label: "Pipeline generated" },
              ].map((stat, i) => (
                <FounderStatAnimated key={stat.label} {...stat} delay={i * 0.1} />
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <div className="flex gap-3">
                <SocialLink href="https://www.linkedin.com/in/riteshosta1/" label="LinkedIn" icon={<Linkedin className="h-5 w-5" />} />
                <SocialLink href="https://x.com/riteshosta" label="Twitter / X" icon={<Twitter className="h-5 w-5" />} />
                <SocialLink href={`mailto:${INFO_EMAIL}`} label="Email" icon={<Mail className="h-5 w-5" />} onClick={handleEmailClick()} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FounderStatAnimated({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const count = useCounter(value, 1600, isInView)

  return (
    <motion.div
      ref={ref}
      className="text-center lg:text-left"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="text-2xl font-bold text-[#0dcfcf] sm:text-3xl">{count}{suffix}</div>
      <div className="text-xs text-[#64748B] sm:text-sm">{label}</div>
    </motion.div>
  )
}

function SocialLink({ href, label, icon, onClick }: { href: string; label: string; icon: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf] hover:shadow-lg hover:shadow-[#0dcfcf]/10"
        aria-label={label}
      >
        {icon}
      </Link>
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 7. STORY TIMELINE — 2x2 scroll-reveal grid
// ═══════════════════════════════════════════════════════════════════════

// Card entrance directions for staggered reveal
const CARD_ORIGINS: [number, number][] = [
  [-40, -20],  // top-left
  [40, -20],   // top-right
  [-40, 20],   // bottom-left
  [40, 20],    // bottom-right
]

function StoryTimeline() {
  const total = storySteps.length

  return (
    <section className="relative bg-[#F8FAFC] px-4 py-20 sm:py-28 lg:py-32">
      <FloatingOrbs />

      <div className="relative z-10 mx-auto" style={{ maxWidth: "1000px" }}>
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-3 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0dcfcf]">
            Our journey
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
            Our <span className="text-[#0dcfcf]">story</span>
          </h2>
        </motion.div>

        {/* 2x2 grid with staggered whileInView reveal */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {storySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: CARD_ORIGINS[i][0], y: CARD_ORIGINS[i][1], scale: 0.85 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03)" }}
            >
              {/* Step counter row */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0dcfcf] bg-[#0dcfcf]/10">
                  <step.icon className="h-4 w-4 text-[#0dcfcf]" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#0dcfcf]/30 to-transparent" />
                <span className="font-mono text-[11px] font-bold text-[#94A3B8]">
                  {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>

              {/* Badge */}
              <span className="mb-1.5 inline-flex rounded-md bg-[#0dcfcf]/10 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0dcfcf]">
                {step.year}
              </span>

              {/* Title */}
              <h3 className="mb-1.5 text-lg font-bold text-[#0F172A] sm:text-xl">
                {step.title}
              </h3>

              {/* Accent line */}
              <div className="mb-2.5 h-0.5 w-8 rounded-full bg-[#0dcfcf]" />

              {/* Description */}
              <p className="text-[13px] leading-relaxed text-[#64748B]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 8. WHY CHOOSE US
// ═══════════════════════════════════════════════════════════════════════
function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 lg:py-32">
      <FloatingOrbs />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0dcfcf]">
            Why us
          </span>
          <h2 className="mx-auto mb-4 max-w-[700px] text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Why choose{" "}
            <span className="text-[#0dcfcf]">InsightsTap</span>?
          </h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">
            We work as an extension of your team, providing the expertise
            and support needed to navigate complex challenges and seize new
            opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyUsItems.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <div className="group rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg hover:shadow-[#0dcfcf]/8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0dcfcf]/10 transition-transform group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-[#0dcfcf]" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 8b. LEADERSHIP TEAM
// ═══════════════════════════════════════════════════════════════════════
const leadershipData = [
  {
    name: "Ritesh Osta",
    title: "Founder & CEO",
    image: "/leaders/Ritesh.jpg",
    description:
      "19+ years with Fortune 500s and startups. Building the GTM engines, AI agents, and revenue systems behind some of the fastest-growing B2B teams globally",
  },
  {
    name: "Swarnendu De",
    title: "CTO",
    image: "/leaders/SD.png",
    description:
      "600+ products shipped. Harvard-certified. Serial entrepreneur. 18+ years architecting SaaS and AI platforms for Google, Best Buy, and 250+ startups, from model strategy to production-ready, scalable software. Author of advanced technology books.",
  },
  {
    name: "Hassan Malik",
    title: "VP, UK Sales",
    image: "/leaders/Hassan.png",
    description:
      "UK-based B2B growth leader helping enterprise sales teams shorten deal cycles, activate high-intent accounts, and close more revenue using signal-driven GTM systems and AI automation.",
  },
  {
    name: "Moumita Dasgupta",
    title: "VP, Branding",
    image: "/leaders/Moumita.jpg",
    description:
      "Crafting the brand identity behind InsightsTap's proprietary frameworks. Turning complex B2B offerings into sharp, memorable positioning that wins trust before the first sales call.",
  },
  {
    name: "Annesha Dutta",
    title: "Advisor, Customer Relations",
    image: "/leaders/Annesha.png",
    description:
      "Turning client engagements into long-term partnerships through consistent results and honest communication",
  },
  {
    name: "Shivani Nath",
    title: "VP, Performance Marketing",
    image: "/leaders/Shivani.webp",
    description:
      "Owning PPC, SEO, and paid media strategy across every channel that matters, engineering campaigns where every dollar spent is traceable to pipeline and revenue.",
  },
]

function LeadershipTeamSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      <FloatingOrbs />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Leadership team
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {leadershipData.map((leader) => (
            <motion.div
              key={leader.name}
              variants={cardVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] overflow-hidden rounded-full border-2 border-[#E2E8F0] shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={180}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-base font-semibold text-[#0F172A]">
                {leader.name}
              </h3>
              <p className="text-sm font-medium text-[#333333]">
                {leader.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 9. CTA SECTION
// ═══════════════════════════════════════════════════════════════════════
function CTASection() {
  return (
    <section id="book-call" className="relative overflow-hidden bg-[#0a0e1a] px-6 py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(13,207,207,0.12), transparent 70%)" }} />
      <div className="glow-orb absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[150px]" />
      <FloatingOrbs />

      <div className="relative mx-auto max-w-[1280px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2"
        >
          <Sparkles className="h-4 w-4 text-[#0dcfcf]" />
          <span className="text-sm font-medium text-white/70">
            Transform your GTM strategy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {"Let's build your "}
          <span className="text-[#0dcfcf]">revenue engine</span>
        </motion.h2>

        <motion.div
          className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#0dcfcf]"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 64, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-8 sm:mb-12 max-w-[600px] text-base leading-relaxed text-white/60 sm:text-lg lg:text-xl"
        >
          Ready to take your B2B sales to the next level? Get in touch with
          our team today to schedule a consultation and see how InsightsTap
          can help you unlock your full potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/Contact"
            className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-[#0a0e1a] transition-all hover:bg-[#5de0e0] hover:shadow-md hover:shadow-[#0dcfcf]/15"
          >
            <Phone className="h-5 w-5" />
            Book a discovery call
          </Link>
          <Link
            href="/"
            className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-white/20 px-8 text-base font-medium text-white/90 transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf]"
          >
            Explore our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
