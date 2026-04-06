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
  { src: "/life/1.png",  caption: "Team Dinner" },
  { src: "/life/2.png",  caption: "Pool Night" },
  { src: "/life/3.png",  caption: "Game On" },
  { src: "/life/4.png",  caption: "After Hours" },
  { src: "/life/5.png",  caption: "Air Hockey" },
  { src: "/life/6.png",  caption: "Game Night" },
  { src: "/life/7.png",  caption: "Arcade Vibes" },
  { src: "/life/8.png",  caption: "Team Walk" },
  { src: "/life/9.png",  caption: "Squad Goals" },
  { src: "/life/10.png", caption: "Bowling Night" },
  { src: "/life/11.png", caption: "Pool Round 2" },
]

// Orb data for atmospheric background
const ORB_DATA = [
  { x: 8,  y: 15, size: 400, blur: 90,  opacity: 0.06,  dur: 14, delay: 0 },
  { x: 85, y: 50, size: 300, blur: 80,  opacity: 0.05,  dur: 18, delay: 2 },
  { x: 45, y: 80, size: 350, blur: 85,  opacity: 0.055, dur: 16, delay: 5 },
  { x: 70, y: 20, size: 150, blur: 60,  opacity: 0.08,  dur: 11, delay: 3 },
  { x: 20, y: 60, size: 120, blur: 50,  opacity: 0.07,  dur: 9,  delay: 6 },
  { x: 55, y: 40, size: 200, blur: 70,  opacity: 0.06,  dur: 13, delay: 1 },
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

// ─── Atmospheric orbs ───────────────────────────────────────────────────────────
function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {ORB_DATA.map((orb, i) => {
        const amp = orb.size > 200 ? 14 : 24
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: orb.size,
              height: orb.size,
              opacity: orb.opacity,
              filter: `blur(${orb.blur}px)`,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle at 30% 30%, rgba(13,207,207,${orb.opacity * 5}) 0%, rgba(13,207,207,${orb.opacity * 1.5}) 50%, transparent 100%)`,
            }}
            animate={{
              x: [-amp, amp, -amp],
              y: [-amp * 0.7, amp * 0.7, -amp * 0.7],
              scale: [1, orb.size > 200 ? 1.08 : 1.15, 1],
            }}
            transition={{ duration: orb.dur, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
          />
        )
      })}
    </div>
  )
}

// ─── Hero ───────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-[#0a0e1a] px-6" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0 opacity-30" />

      {/* Ghost text */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="whitespace-nowrap text-[18vw] font-black tracking-tighter text-white">
          COMMUNITY
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[800px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0dcfcf]">
            Life at InsightsTap
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Where Great Work{" "}
          <span className="text-[#0dcfcf]">Meets Great People</span>
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
          className="mx-auto mb-10 max-w-[640px] text-base leading-relaxed text-white/70 sm:text-lg"
        >
          A typical week at InsightsTap looks like this: collaborating with a
          team that&apos;s sharp, supportive, and genuinely obsessed with doing
          excellent work. No unnecessary noise — just meaningful conversations,
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
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-[#0a0e1a] transition-all hover:bg-[#5de0e0] hover:shadow-md hover:shadow-[#0dcfcf]/15"
          >
            View Open Roles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center rounded-lg border border-white/20 px-8 text-base font-medium text-white/90 transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf]"
          >
            About Us
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
      className="relative overflow-hidden bg-[#0a0e1a]"
      style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
    >
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0 opacity-20" />

      {/* Vertical ghost text — drifts behind the marquee rows */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
        aria-hidden="true"
        style={{ opacity: 0.02 }}
      >
        <span
          className="text-[14vw] font-black tracking-tighter text-white"
          style={{ writingMode: "vertical-rl" }}
        >
          TEAM VIBE
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <SectionHeader
          badge="Team Gallery"
          title="Our Moments,"
          highlight="Captured"
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
    { title: "Impact Over Noise", desc: "Every conversation and deliverable is purpose-driven. We skip the busywork." },
    { title: "Ownership Culture", desc: "Take the wheel on your projects. Ideas are welcomed, initiative is celebrated." },
    { title: "Grow Together", desc: "We celebrate big wins and small milestones alike. Your growth is the team's growth." },
    { title: "Clear Communication", desc: "No politics, no ambiguity. Just transparent, honest collaboration every day." },
  ]

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0F172A] px-6" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0 opacity-20" />

      {/* Ghost text */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
        style={{ opacity: 0.02 }}
      >
        <span className="whitespace-nowrap text-[16vw] font-black tracking-tighter text-white">
          CULTURE
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeader
          badge="Our Values"
          title="What Makes Us,"
          highlight="Us"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all hover:border-[#0dcfcf]/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-[#0dcfcf]/40 transition-all group-hover:w-12 group-hover:bg-[#0dcfcf]" />
              <h3 className="mb-2 text-lg font-bold text-white">{v.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Bottom CTA ─────────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0F172A] px-6" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0 opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-[680px] text-center"
      >
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to Join the{" "}
          <span className="text-[#0dcfcf]">Team</span>?
        </h2>
        <p className="mb-8 text-base leading-relaxed text-white/60">
          We&apos;re always looking for curious, driven people who want to build
          something meaningful. Check out our open roles.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/careers"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-[#0a0e1a] transition-all hover:bg-[#5de0e0] hover:shadow-md hover:shadow-[#0dcfcf]/15"
          >
            View Open Roles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/Contact"
            className="inline-flex h-12 items-center rounded-lg border border-white/20 px-8 text-base font-medium text-white/90 transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf]"
          >
            Get in Touch
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
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {title} <span className="text-[#0dcfcf]">{highlight}</span>
      </h2>
    </motion.div>
  )
}
