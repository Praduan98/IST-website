"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  Search, Brain, Zap, Bell, UserCheck, Download, Check,
  Sparkles, ChevronDown, MessageSquare, ArrowRight,
  UserPlus, Plug, Send,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LogoTicker } from "@/components/logo-ticker"
import { FloatingOrbs } from "@/components/services/atmospheric-orbs"

// ─── Data ────────────────────────────────────────────────────────────
const features = [
  { title: "Real-time scanning", description: "Proprietary bots scan job boards, career pages, and public sources the moment postings appear.", icon: Search, year: "Discovery" },
  { title: "AI-powered insights", description: "Every posting processed by AI: summarized descriptions, company details, and job poster contacts in seconds.", icon: Brain, year: "Intelligence" },
  { title: "Instant delivery", description: "Leads sent to Slack or inbox the moment they exist. Your sales team acts while the hiring need is fresh.", icon: Bell, year: "Activation" },
  { title: "CRM & export sync", description: "Download as CSV or push directly to HubSpot, Salesforce, Apollo, or any CRM. One click, zero friction.", icon: Download, year: "Integration" },
]

const toolset = [
  { title: "Job discovery", description: "Real-time scanning for job listings by title, location, and type.", icon: Search },
  { title: "AI summaries", description: "Long job descriptions distilled into actionable insights.", icon: Brain },
  { title: "Account identification", description: "Company details, domain, size, and industry, instantly.", icon: UserCheck },
  { title: "Real-time notifications", description: "Slack and email alerts the moment a relevant job is posted.", icon: Bell },
  { title: "Contact extraction", description: "Job poster email and phone pulled directly from descriptions.", icon: MessageSquare },
  { title: "Lead exporting", description: "CSV download or direct push to Slack and CRM tools.", icon: Download },
]

const steps = [
  {
    step: "01",
    title: "Sign up for free",
    description: "Create your account in under 60 seconds. No credit card required. Free plan includes 9 queries per day.",
    icon: UserPlus,
    highlight: "60 seconds",
  },
  {
    step: "02",
    title: "Integrate with Slack",
    description: "Connect JobFeeder to your Slack workspace. Leads delivered directly to the channel your team monitors.",
    icon: Plug,
    highlight: "1-click setup",
  },
  {
    step: "03",
    title: "Act on leads",
    description: "Leads arrive with company details, summaries, and contact info. Reach out while the need is fresh.",
    icon: Send,
    highlight: "Real-time",
  },
]

const testimonials = [
  { quote: "We cut our lead generation costs by 70% and closed deals faster than ever before. JobFeeder is a game-changer.", author: "John D.", role: "MSP Manager" },
  { quote: "Before JobFeeder, we were constantly playing catch-up. Now, with real-time job data, we've regained control and are closing deals faster than ever.", author: "Chris Miller", role: "Head of Operations, DataCore Solutions" },
  { quote: "JobFeeder has transformed how we operate. Instead of spending hours searching, we now have a steady flow of leads. It's like having an extra team member who works 24/7.", author: "Emily Johnson", role: "CEO, ProHire Agency" },
]

const faqs = [
  { q: "Is JobFeeder really free?", a: "Yes. The Free plan includes 9 queries per day with full access to real-time scanning and AI summaries. Upgrade to Team for unlimited queries, Slack integration, and coaching." },
  { q: "What types of companies is JobFeeder for?", a: "IT service providers, MSPs, staffing agencies, recruitment firms, and any B2B company selling services to companies that are actively hiring." },
  { q: "Can I export leads to my CRM?", a: "Yes. Download as CSV and import into HubSpot, Salesforce, Apollo, or any CRM. You can also push directly to Slack." },
  { q: "Is JobFeeder data privacy compliant?", a: "Yes. We only scan publicly available job postings. We do not scrape private data or violate platform terms." },
]

// Card entrance directions for staggered reveal
const CARD_ORIGINS: [number, number][] = [[-40, -20], [40, -20], [-40, 20], [40, 20]]

// ─── Page ────────────────────────────────────────────────────────────
export default function JobFeederPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <GifShowcase />
        <LogoTicker />
        <ProblemSolution />
        <FeatureGrid />
        <ToolsetSection />
        <StepsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-[#0a0e1a] pt-24 pb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1526] to-[#0a0e1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(13,207,207,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(13,207,207,0.08)_0%,_transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <FloatingOrbs />

      <motion.div
        className="absolute left-[15%] top-[30%] h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.06] blur-[100px]"
        animate={{ y: [-20, 20, -20], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] bottom-[20%] h-[250px] w-[250px] rounded-full bg-[#0dcfcf]/[0.04] blur-[80px]"
        animate={{ y: [15, -15, 15], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 mx-auto w-[min(92vw,1600px)] text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2"
        >
          <Sparkles className="h-4 w-4 text-[#0dcfcf]" />
          <span className="text-xs font-medium uppercase tracking-wider text-white/70">Product</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-5 text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
        >
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="block">
            Find companies posting IT jobs
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="block">
            <span className="text-[#0dcfcf]">in real time</span>
          </motion.span>
        </motion.h1>

        <motion.div
          className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#0dcfcf]"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mb-10 sm:mb-20 max-w-[680px] text-base leading-relaxed text-white/70 sm:text-lg"
        >
          JobFeeder helps IT service providers and recruitment agencies get real-time job leads with summaries and details, delivered instantly to Slack or inbox.
        </motion.p>

      </div>

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

// ─── GIF Showcase ────────────────────────────────────────────────────
function GifShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -4])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96])
  const shadow = useTransform(scrollYProgress, [0, 0.5, 1], [
    "0 20px 60px rgba(13,207,207,0.04), 0 8px 24px rgba(0,0,0,0.06)",
    "0 20px 60px rgba(13,207,207,0.18), 0 8px 24px rgba(0,0,0,0.06)",
    "0 20px 60px rgba(13,207,207,0.06), 0 8px 24px rgba(0,0,0,0.06)",
  ])

  return (
    <section ref={ref} className="relative bg-[#F8FAFC] px-6 py-16 lg:py-24">
      <div className="relative mx-auto grid w-[min(92vw,1200px)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* GIF — left on desktop */}
        <div className="relative order-2 lg:order-1" style={{ perspective: 1200 }}>
          <motion.div
            className="gpu-layer rounded-2xl border border-[#E2E8F0] bg-white p-2 overflow-hidden"
            style={{ y, rotateX, scale, boxShadow: shadow }}
            whileHover={{ rotateY: 2, rotateX: -1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <img src="/jobfeeder-demo.gif" alt="JobFeeder platform demo" className="w-full rounded-xl" />
          </motion.div>
        </div>

        {/* Description — right on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            See it in action
          </span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.6rem]">
            Real-time job leads, <span className="text-[#0dcfcf]">delivered live</span>
          </h2>
          <div className="mb-5 h-1 w-12 rounded-full bg-[#0dcfcf]" />
          <p className="mb-6 text-base leading-relaxed text-[#64748B] lg:text-lg">
            Search by job title, location, and posting date. JobFeeder pulls fresh openings the moment they go live and routes them straight to Slack or your inbox with company details, contact info, and AI-powered summaries already attached.
          </p>

          <ul className="space-y-3">
            {[
              { icon: Zap, text: "Live results in seconds, not hours" },
              { icon: Brain, text: "AI summaries on every posting" },
              { icon: Bell, text: "Slack & email alerts the moment a job appears" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-[#0F172A]">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0dcfcf]/10 text-[#0dcfcf]">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <span className="pt-1 leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Problem / Solution ──────────────────────────────────────────────
function ProblemSolution() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] px-6 py-20 lg:py-28">
      <FloatingOrbs />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(13,207,207,0.08)_0%,_transparent_70%)]" />
      <div className="relative mx-auto w-[min(92vw,1200px)]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">The problem</span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Turn job postings into revenue opportunities</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Before */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#EF4444]/80">Traditional methods</h3>
            {["Hours wasted on manual job board searches", "Paying lead gen agencies for outdated lists", "Burning money on paid ads with no guaranteed ROI"].map((item, i) => (
              <div key={i} className="mb-3 flex items-start gap-2.5 text-sm text-white/60">
                <span className="mt-1 text-[#EF4444]">&#10006;</span> {item}
              </div>
            ))}
          </motion.div>

          {/* After */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#0dcfcf]/25 bg-[#0dcfcf]/[0.06] p-7 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#0dcfcf]">JobFeeder delivers</h3>
            {["Real-time job scanning: see postings the moment they go live", "Direct company details and job poster contact info", "Unlimited leads pipeline with zero manual effort"].map((item, i) => (
              <div key={i} className="mb-3 flex items-start gap-2.5 text-sm text-white/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0dcfcf]" /> {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── 2x2 Feature Grid with whileInView reveal ──────────────────────────
function FeatureGrid() {
  return (
    <section id="how-it-works" className="relative bg-white px-4 py-20 sm:py-28 lg:py-32">
      <FloatingOrbs />
      <div className="relative z-10 mx-auto" style={{ maxWidth: "1000px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">How it works</span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
            The JobFeeder <span className="text-[#0dcfcf]">engine</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: CARD_ORIGINS[i][0], y: CARD_ORIGINS[i][1], scale: 0.85 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="gpu-layer rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-7"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0dcfcf] bg-[#0dcfcf]/10">
                  <f.icon className="h-4 w-4 text-[#0dcfcf]" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#0dcfcf]/30 to-transparent" />
                <span className="font-mono text-[11px] font-bold text-[#94A3B8]">{String(i + 1).padStart(2, "0")} / 04</span>
              </div>
              <span className="mb-1.5 inline-flex rounded-md bg-[#0dcfcf]/10 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0dcfcf]">{f.year}</span>
              <h3 className="mb-1.5 text-lg font-bold text-[#0F172A] sm:text-xl">{f.title}</h3>
              <div className="mb-2.5 h-0.5 w-8 rounded-full bg-[#0dcfcf]" />
              <p className="text-[13px] leading-relaxed text-[#64748B]">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Toolset ─────────────────────────────────────────────────────────
function ToolsetSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] px-6 py-20 lg:py-28">
      <FloatingOrbs />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(13,207,207,0.08)_0%,_transparent_70%)]" />
      <div className="relative mx-auto w-[min(92vw,1600px)]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Toolset</span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">All you need, in one platform</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toolset.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all hover:border-[#0dcfcf]/40 hover:bg-[#0dcfcf]/[0.10]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0dcfcf]/15">
                <t.icon className="h-5 w-5 text-[#0dcfcf]" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{t.title}</h3>
              <p className="text-sm leading-relaxed text-white/75">{t.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Steps ───────────────────────────────────────────────────────────
function StepsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 lg:py-28">
      <FloatingOrbs />
      <div className="glow-orb absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.05] blur-[140px]" />

      <div className="relative mx-auto w-[min(92vw,1200px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            Setup
          </span>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Live in <span className="text-[#0dcfcf]">3 simple steps</span>
          </h2>
          <p className="mx-auto max-w-[560px] text-base leading-relaxed text-[#64748B]">
            From zero to your first lead in under 5 minutes. No engineering, no setup fees.
          </p>
        </motion.div>

        {/* Connector line behind cards (desktop only) */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[44px] hidden h-px lg:block"
            style={{
              background:
                "repeating-linear-gradient(to right, #0dcfcf 0 8px, transparent 8px 16px)",
              maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          />

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Number badge — sits on the connector line */}
                  <div className="relative z-10 mb-6">
                    <div className="absolute inset-0 rounded-full bg-[#0dcfcf] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
                    <div className="relative flex h-[72px] w-[72px] sm:h-[88px] sm:w-[88px] items-center justify-center rounded-full border border-[#E2E8F0] bg-white shadow-[0_8px_30px_rgba(13,207,207,0.08)] transition-all duration-300 group-hover:border-[#0dcfcf]/40 group-hover:shadow-[0_12px_40px_rgba(13,207,207,0.18)]">
                      <Icon className="h-8 w-8 text-[#0dcfcf]" strokeWidth={1.8} />
                      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#0dcfcf] font-mono text-[11px] font-bold text-white shadow-md shadow-[#0dcfcf]/30">
                        {s.step}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative w-full rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:border-[#0dcfcf]/30 group-hover:shadow-[0_12px_40px_rgba(13,207,207,0.10)]">
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-[#0dcfcf]/10 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0dcfcf]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0dcfcf]" />
                      {s.highlight}
                    </span>
                    <h3 className="mb-2 text-xl font-semibold text-[#0F172A]">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-[#64748B]">{s.description}</p>
                  </div>

                  {/* Mobile-only step-to-step arrow */}
                  {i < steps.length - 1 && (
                    <div className="my-2 flex h-8 items-center justify-center lg:hidden">
                      <ChevronDown className="h-5 w-5 text-[#0dcfcf]/50" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] px-6 py-20 lg:py-28">
      <FloatingOrbs />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(13,207,207,0.08)_0%,_transparent_70%)]" />
      <div className="relative mx-auto w-[min(92vw,1200px)]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Proof</span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Proven results</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all hover:border-[#0dcfcf]/40 hover:bg-[#0dcfcf]/[0.08]"
            >
              <p className="mb-4 text-sm leading-relaxed text-white/80 italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-white">{t.author}</p>
              <p className="text-xs text-white/60">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────
function FAQSection() {
  return (
    <section className="relative bg-white px-6 py-20 lg:py-28">
      <FloatingOrbs />
      <div className="relative mx-auto w-[min(92vw,800px)]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">FAQ</span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">Frequently asked questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.details key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.08 }}
              className="group rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] transition-all hover:border-[#0dcfcf]/20"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-[#0F172A]">
                {f.q}
                <ChevronDown className="h-4 w-4 text-[#94A3B8] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[#E2E8F0] px-5 pb-5 pt-3">
                <p className="text-sm leading-relaxed text-[#64748B]">{f.a}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="beta" className="relative overflow-hidden bg-[#0F172A] px-6 py-20 lg:py-28">
      <FloatingOrbs />
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="glow-orb absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.08] blur-[150px]" />
        <div className="glow-orb absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.06] blur-[120px]" style={{ animationDelay: "-3s" }} />
      </div>
      <div className="relative z-10 mx-auto w-[min(92vw,700px)] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="mb-5 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Only 10 beta spots available</h2>
          <p className="mx-auto mb-8 max-w-[550px] text-base text-[#94A3B8] sm:text-lg">
            Get early, free access to JobFeeder. Real-time job leads, AI summaries, and contact details, delivered to Slack.
          </p>
          <Link href="#book-call" className="shimmer relative h-12 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:bg-[#5de0e0] inline-flex w-full sm:w-auto items-center justify-center">
            Get beta access for free
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
