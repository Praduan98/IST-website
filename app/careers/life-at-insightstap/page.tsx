"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// ─── Photo data ─────────────────────────────────────────────────────────────────
const PHOTOS = [
  { src: "/life/1.png",  caption: "Team dinner" },
  { src: "/life/2.png",  caption: "Pool night" },
  { src: "/life/3.png",  caption: "Game on" },
  { src: "/life/4.png",  caption: "After hours" },
  { src: "/life/5.png",  caption: "Air hockey" },
  { src: "/life/6.png",  caption: "Game night" },
  { src: "/life/7.png",  caption: "Arcade vibes" },
  { src: "/life/8.png",  caption: "Team walk" },
  { src: "/life/9.png",  caption: "Squad goals" },
  { src: "/life/10.png", caption: "Bowling night" },
  { src: "/life/11.png", caption: "Pool round 2" },
]

// Floating particle data for atmospheric background (light theme)
const PARTICLE_POSITIONS = [
  { x: 5, y: 15, duration: 7, delay: 0 },
  { x: 15, y: 80, duration: 8, delay: 1 },
  { x: 25, y: 40, duration: 6, delay: 2 },
  { x: 35, y: 65, duration: 9, delay: 0.5 },
  { x: 45, y: 25, duration: 7, delay: 1.5 },
  { x: 55, y: 90, duration: 8, delay: 2.5 },
  { x: 65, y: 35, duration: 6, delay: 3 },
  { x: 75, y: 70, duration: 9, delay: 0.8 },
  { x: 85, y: 50, duration: 7, delay: 1.8 },
  { x: 95, y: 20, duration: 8, delay: 2.8 },
  { x: 10, y: 55, duration: 6, delay: 3.5 },
  { x: 20, y: 85, duration: 9, delay: 0.3 },
]

// ─── Row data for Kinetic Zoom-Grid ────────────────────────────────────────────
const ROW1_PHOTOS = PHOTOS.slice(0, 6).map((p, i) => ({
  ...p,
  w: [360, 260, 310, 280, 360, 240][i],
}))

const ROW2_PHOTOS = PHOTOS.slice(6).map((p, i) => ({
  ...p,
  w: [310, 260, 360, 280, 340][i],
}))

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function LifeAtInsightsTapPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <KineticZoomGrid />
        <CultureSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

// ─── Floating particles (light theme, matching homepage) ────────────────────────
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLE_POSITIONS.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#0dcfcf]/50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// ─── Hero ───────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-white px-6 pt-24 pb-12">
      <div className="dot-grid absolute inset-0" />

      {/* Glow orbs — homepage style */}
      <div className="glow-orb absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.07] blur-[160px]" />
      <div className="glow-orb absolute right-[15%] top-[55%] h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.05] blur-[140px]" style={{ animationDelay: "-4s" }} />
      <div className="glow-orb absolute left-[10%] top-[65%] h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.04] blur-[120px]" style={{ animationDelay: "-6s" }} />

      {/* Radial wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(13,207,207,0.04) 0%, transparent 70%)",
        }}
      />

      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-[800px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2 glow-border"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">
            Life at InsightsTap
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-5 text-3xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
        >
          Where great work{" "}
          <span className="gradient-text">meets great people</span>
        </motion.h1>

        <motion.div
          className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#0dcfcf]"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mx-auto mb-10 max-w-[640px] text-base leading-relaxed text-[#64748B] sm:text-lg"
        >
          A typical week at InsightsTap looks like this: collaborating with a
          team that&apos;s sharp, supportive, and genuinely obsessed with doing
          excellent work. No unnecessary noise, just meaningful conversations,
          thoughtful execution, and people who truly want to see each other grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/careers"
            className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25"
          >
            View open roles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] transition-all hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5"
          >
            About us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Kinetic Zoom-Grid — Infinite Culture Wall ─────────────────────────────────
function KineticZoomGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const inViewRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    let active = true

    const io = new IntersectionObserver(
      ([e]) => {
        inViewRef.current = e.isIntersecting
      },
      { threshold: 0.1 },
    )
    io.observe(section)

    const tick = () => {
      if (!active) return
      if (inViewRef.current) {
        const cards = section.querySelectorAll<HTMLElement>(".marquee-card")
        const cx = window.innerWidth / 2
        const zone = window.innerWidth * 0.18
        cards.forEach((card) => {
          const r = card.getBoundingClientRect()
          card.classList.toggle(
            "zoom-active",
            Math.abs(r.left + r.width / 2 - cx) < zone,
          )
        })
      }
      requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    return () => {
      active = false
      io.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8FAFC]"
      style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
    >
      <div className="dot-grid absolute inset-0" />

      {/* Background glow */}
      <div className="glow-orb absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <SectionHeader
          badge="Team gallery"
          title="Our moments,"
          highlight="captured"
        />
      </div>

      {/* Two-row infinite marquee — rows scroll in opposite directions */}
      <div className="relative z-10">
        <MarqueeRow
          photos={ROW1_PHOTOS}
          duration={45}
          reverse={false}
          cardHeight={280}
        />
        <MarqueeRow
          photos={ROW2_PHOTOS}
          duration={38}
          reverse
          cardHeight={230}
        />
      </div>
    </section>
  )
}

function MarqueeRow({
  photos,
  duration,
  reverse,
  cardHeight,
}: {
  photos: Array<(typeof PHOTOS)[number] & { w: number }>
  duration: number
  reverse: boolean
  cardHeight: number
}) {
  const gap = 16
  const oneSetWidth =
    photos.reduce((sum, p) => sum + p.w, 0) + photos.length * gap
  const copies = Math.max(2, Math.ceil(4000 / oneSetWidth) + 1)
  const allPhotos = Array.from({ length: copies }, () => photos).flat()

  return (
    <div className="overflow-hidden py-4">
      <div
        className="marquee-track"
        data-reverse={reverse || undefined}
        style={
          {
            "--marquee-duration": `${duration}s`,
            "--repeat-width": `${oneSetWidth}px`,
          } as React.CSSProperties
        }
      >
        {allPhotos.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className="marquee-card"
            style={{ width: photo.w, height: cardHeight }}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover"
              sizes={`${photo.w}px`}
            />
            <div className="card-caption">
              <span className="text-sm font-semibold text-white">
                {photo.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Culture text section ───────────────────────────────────────────────────────
function CultureSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const values = [
    { title: "Impact over noise", desc: "Every conversation and deliverable is purpose-driven. We skip the busywork." },
    { title: "Ownership culture", desc: "Take the wheel on your projects. Ideas are welcomed, initiative is celebrated." },
    { title: "Grow together", desc: "We celebrate big wins and small milestones alike. Your growth is the team's growth." },
    { title: "Clear communication", desc: "No politics, no ambiguity. Just transparent, honest collaboration every day." },
  ]

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />

      {/* Background glow */}
      <div className="glow-orb absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[150px]" />
      <div className="glow-orb absolute right-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.04] blur-[120px]" style={{ animationDelay: "-5s" }} />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeader
          badge="Our values"
          title="What makes us,"
          highlight="us"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all hover:border-[#0dcfcf]/30 hover:shadow-md hover:shadow-[#0dcfcf]/5"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-[#0dcfcf]/40 transition-all group-hover:w-12 group-hover:bg-[#0dcfcf]" />
              <h3 className="mb-2 text-lg font-bold text-[#0F172A]">{v.title}</h3>
              <p className="text-sm leading-relaxed text-[#64748B]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="mx-auto mt-24 h-px max-w-[800px] bg-gradient-to-r from-transparent via-[#0dcfcf]/30 to-transparent" />
    </section>
  )
}

// ─── Bottom CTA ─────────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]" />

      {/* Pulsing glow orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.08] blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-[680px] text-center"
      >
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
          Ready to join the{" "}
          <span className="gradient-text">team</span>?
        </h2>
        <p className="mb-8 text-base leading-relaxed text-[#64748B] lg:text-lg">
          We&apos;re always looking for curious, driven people who want to build
          something meaningful. Check out our open roles.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/careers"
            className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25"
          >
            View open roles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/Contact"
            className="inline-flex h-12 items-center rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] transition-all hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5"
          >
            Get in touch
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

// ─── Shared section header ──────────────────────────────────────────────────────
function SectionHeader({ badge, title, highlight }: { badge: string; title: string; highlight: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-14 text-center"
    >
      <span className="mb-3 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
        {badge}
      </span>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
    </motion.div>
  )
}
