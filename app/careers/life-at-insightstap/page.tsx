"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight, Shield, Rocket, Eye, Coffee, TrendingUp, Heart,
  Award, GraduationCap, Users, Zap, User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingOrbs } from "@/components/services/atmospheric-orbs"

// ─── Data (migrated from /careers) ──────────────────────────────────
const teamValues = [
  { icon: Shield, title: "Own it", description: "Own your work and your growth. Set clear goals, act with trust, and deliver without being chased. That drive turns good work into real results." },
  { icon: Rocket, title: "Ship it", description: "We build real things fast. Launch a solid idea now and improve it later. Move, test, learn, and repeat." },
  { icon: Eye, title: "Measure it", description: "We track what matters: revenue, pipeline, and profit. We ignore vanity metrics and follow the data to change course." },
  { icon: Coffee, title: "Have fun", description: "We love building AI agents, signal systems, and campaigns that convert. Bring energy and curiosity every day." },
]

const benefits = [
  { icon: TrendingUp, title: "Competitive compensation", description: "Salaries that reflect your skills, impact, and meet market standards." },
  { icon: Heart, title: "Health insurance", description: "Comprehensive coverage to support your well-being and peace of mind." },
  { icon: Shield, title: "PF benefits", description: "Structured financial security to help you plan for the future." },
  { icon: Award, title: "Performance bonuses", description: "Your contributions don't go unnoticed. Earn rewards based on performance and targets." },
  { icon: GraduationCap, title: "Learning & development", description: "Dedicated budgets and opportunities to upskill, learn, and grow continuously." },
  { icon: Users, title: "Collaborative office culture", description: "Innovation thrives when people work together in person, exchange ideas, and build real connections." },
  { icon: Zap, title: "Emergency remote flexibility", description: "We value in-office collaboration, but provide flexibility to work remotely when genuine emergencies arise." },
  { icon: Heart, title: "Supportive team environment", description: "Work with people who genuinely care about your growth, success, and overall experience." },
]


// ─── Photo data ─────────────────────────────────────────────────────
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

const ROW1_PHOTOS = PHOTOS.slice(0, 6).map((p, i) => ({
  ...p,
  w: [360, 260, 310, 280, 360, 240][i],
}))

const ROW2_PHOTOS = PHOTOS.slice(6).map((p, i) => ({
  ...p,
  w: [310, 260, 360, 280, 340][i],
}))

// ─── Variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

// ─── Page ───────────────────────────────────────────────────────────
export default function LifeAtInsightsTapPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CompanyCultureSection />
        <TeamValuesSection />
        <BenefitsSection />
        <KineticZoomGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

// ─── Floating particles ─────────────────────────────────────────────
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLE_POSITIONS.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#0dcfcf]/50"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          initial={{ opacity: 0 }}
          animate={{ y: [-15, 15, -15], opacity: [0, 0.6, 0] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}

// ─── Hero ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-white px-6 pt-24 pb-12">
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.07] blur-[160px]" />
      <div className="glow-orb absolute right-[15%] top-[55%] h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.05] blur-[140px]" style={{ animationDelay: "-4s" }} />
      <div className="glow-orb absolute left-[10%] top-[65%] h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.04] blur-[120px]" style={{ animationDelay: "-6s" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(13,207,207,0.04) 0%, transparent 70%)" }} />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-[800px] text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2 glow-border">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#64748B]">Life at InsightsTap</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }} className="mb-5 text-3xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
          Where great work{" "}
          <span className="gradient-text">meets great people</span>
        </motion.h1>

        <motion.div className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#0dcfcf]" initial={{ width: 0, opacity: 0 }} animate={{ width: 64, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="mx-auto mb-10 max-w-[640px] text-base leading-relaxed text-[#64748B] sm:text-lg">
          A typical week at InsightsTap looks like this: collaborating with a
          team that&apos;s sharp, supportive, and genuinely obsessed with doing
          excellent work. No unnecessary noise, just meaningful conversations,
          thoughtful execution, and people who truly want to see each other grow.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/careers" className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25">
            View open roles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/about" className="inline-flex h-12 items-center rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] transition-all hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5">
            About us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Kinetic Zoom-Grid ──────────────────────────────────────────────
function KineticZoomGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8FAFC]"
      style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
    >
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <SectionHeader badge="Team gallery" title="Our moments," highlight="captured" />
      </div>

      <div className="relative z-10">
        <MarqueeRow photos={ROW1_PHOTOS} duration={45} reverse={false} cardHeight={280} />
        <MarqueeRow photos={ROW2_PHOTOS} duration={38} reverse cardHeight={230} />
      </div>
    </section>
  )
}

function MarqueeRow({ photos, duration, reverse, cardHeight }: {
  photos: Array<(typeof PHOTOS)[number] & { w: number }>
  duration: number
  reverse: boolean
  cardHeight: number
}) {
  const gap = 16
  const oneSetWidth = photos.reduce((sum, p) => sum + p.w, 0) + photos.length * gap
  const copies = Math.max(2, Math.ceil(4000 / oneSetWidth) + 1)
  const allPhotos = Array.from({ length: copies }, () => photos).flat()

  return (
    <div className="overflow-hidden py-4">
      <div
        className="marquee-track"
        data-reverse={reverse || undefined}
        style={{ "--marquee-duration": `${duration}s`, "--repeat-width": `${oneSetWidth}px` } as React.CSSProperties}
      >
        {allPhotos.map((photo, i) => (
          <div key={`${photo.src}-${i}`} className="marquee-card" style={{ width: photo.w, height: cardHeight }}>
            <Image src={photo.src} alt={photo.caption} fill className="object-cover" sizes={`${photo.w}px`} />
            <div className="card-caption">
              <span className="text-sm font-semibold text-white">{photo.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Company Culture (migrated from /careers) ───────────────────────
function CompanyCultureSection() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image src="/life/culture-bg.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-white/85" />
      </div>
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-[30%] top-[50%] h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" />

      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-16 max-w-[720px]">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Why InsightsTap</span>
          <h2 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Company <span className="gradient-text">culture</span></h2>
          <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
            InsightsTap is a creative studio and talent pool built around one big idea: that AI, automation, and smart strategy can completely transform how B2B companies grow. These values guide who we hire, how we work, and what we celebrate.
          </p>
        </motion.div>

        {/* Employee stories */}
        <div className="grid gap-8 lg:grid-cols-2">
          {[
            { quote: "I joined Insightstap as a GTM strategist six months ago. What surprised me was the speed. We don't talk about ideas for weeks. We build them, test them, and see results within days. The autonomy is real, and the impact is visible.", name: "Somnath", role: "Developer / Principal Software Engineer, Platforms & Integrations" },
            { quote: "What I love about working here is that every project is different, and every system we build actually runs. We're not creating reports that sit in a folder. We're building engines that generate pipelines every single day.", name: "Subashis", role: "Principal, AI Solutions & GTM Architecture" },
          ].map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-8 lg:p-10 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg"
              style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}
            >
              <p className="mb-6 text-base leading-relaxed text-[#64748B] italic">&ldquo;{story.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0dcfcf]/10">
                  <User className="h-5 w-5 text-[#0dcfcf]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">{story.name}</p>
                  <p className="text-xs text-[#64748B]">{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Team Values (migrated from /careers) ───────────────────────────
function TeamValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
      <div className="glow-orb absolute left-[70%] top-[50%] h-[320px] w-[320px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" style={{ animationDelay: "-2s" }} />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-12 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">How we work</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Team <span className="gradient-text">values</span></h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">Our four values drive every bit of what we do. They are not poster-worthy quotations. They&apos;re the basis of how we hire, assess, and make daily decisions.</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamValues.map((v) => {
            const Icon = v.icon
            return (
              <motion.div key={v.title} variants={cardVariants}>
                <div className="group h-full rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-7 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0dcfcf]/10 transition-colors group-hover:bg-[#0dcfcf]/20">
                    <Icon className="h-6 w-6 text-[#0dcfcf]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">{v.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Benefits & Perks (migrated from /careers) ──────────────────────
function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
      <div className="dot-grid absolute inset-0" />
      {/* Glow orbs */}
      <div className="glow-orb absolute left-[10%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" style={{ animationDelay: "-1s" }} />
      <div className="glow-orb absolute right-[5%] top-[60%] h-[350px] w-[350px] rounded-full bg-[#0dcfcf]/[0.05] blur-[140px]" style={{ animationDelay: "-3s" }} />
      <div className="glow-orb absolute left-[50%] top-[10%] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#0dcfcf]/[0.03] blur-[120px]" />
      {/* Infrastructure grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(13,207,207,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(13,207,207,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <FloatingOrbs />

      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-12 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Perks</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Benefits & <span className="gradient-text">perks</span></h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">Competitive compensation, learning, and a team that genuinely cares about your growth.</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <motion.div key={b.title} variants={cardVariants}>
                <div className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-6 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0dcfcf]/10">
                    <Icon className="h-6 w-6 text-[#0dcfcf]" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[#0F172A]">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">{b.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Bottom CTA ─────────────────────────────────────────────────────
function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-6" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]" />
      <motion.div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.08] blur-[150px]" animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <FloatingParticles />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="relative z-10 mx-auto max-w-[680px] text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
          Ready to join the{" "}
          <span className="gradient-text">team</span>?
        </h2>
        <p className="mb-8 text-base leading-relaxed text-[#64748B] lg:text-lg">
          We&apos;re always looking for curious, driven people who want to build
          something meaningful. Check out our open roles.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/careers" className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25">
            View open roles
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/Contact" className="inline-flex h-12 items-center rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] transition-all hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5">
            Get in touch
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

// ─── Shared section header ──────────────────────────────────────────
function SectionHeader({ badge, title, highlight }: { badge: string; title: string; highlight: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-14 text-center">
      <span className="mb-3 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
        {badge}
      </span>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
    </motion.div>
  )
}
