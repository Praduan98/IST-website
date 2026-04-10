"use client"

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useInView,
} from "framer-motion"
import {
  Sparkles, ArrowRight, ChevronDown, Search, Map, Settings,
  Bot, Rocket, TrendingUp, Server, Zap, Brain, Target,
  BarChart3, Mail, Layers, Palette, Wrench, HelpCircle,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingOrbs } from "@/components/services/atmospheric-orbs"
import { LogoTicker } from "@/components/logo-ticker"

// ─── Data ────────────────────────────────────────────────────────────
const buildSteps = [
  { icon: Search, title: "Diagnose", week: "Week 1", description: "Audit your funnel, CRM, campaigns, tracking, and conversion flow to find the fastest wins.", deliverable: "GTM scorecard + prioritized roadmap." },
  { icon: Map, title: "Map signals", week: "Week 1–2", description: "Identify where intent is already showing up, then define what should trigger action.", deliverable: "Signal map + trigger plan." },
  { icon: Settings, title: "Build the engine", week: "Week 2", description: "Connect your systems so data moves automatically, including CRM, enrichment, routing, audiences, and attribution.", deliverable: "System architecture + workflow buildout plan." },
  { icon: Bot, title: "Deploy AI agents", week: "Week 2–3", description: "Create agents that reduce manual GTM work, including research, scoring, personalization, and follow-ups.", deliverable: "Agent workflows + prompts + QA checklist." },
  { icon: Rocket, title: "Launch campaigns", week: "Week 3–6", description: "Run hyper-personalized outreach + ABM + performance ads driven by real signals.", deliverable: "Live campaigns + weekly optimization loop." },
  { icon: TrendingUp, title: "Optimize & scale", week: "Day 45–90", description: "Improve conversion rates, expand segments, tighten attribution, and scale what works.", deliverable: "Scaling plan + dashboards + SOPs." },
]

const deliverables = [
  { title: "Systems & infrastructure", icon: Server, items: ["Signal tracking + trigger framework", "CRM automation (HubSpot / Salesforce)", "Routing + enrichment + lifecycle hygiene", "Attribution + dashboards"] },
  { title: "Growth execution", icon: Zap, items: ["Signal-led outreach & ABM plays", "Ads + analytics + conversion improvements", "Retargeting + nurture sequences"] },
  { title: "AI assets", icon: Brain, items: ["Prompt library + agent logic", "Personalization templates", "Research + scoring + follow-up SOPs"] },
]

const engagementModels = [
  { title: "GTM engine build", tag: "Project", description: "Best if you want the full engine built end-to-end and handed off with SOPs." },
  { title: "GTM engine + managed growth", tag: "Retainer", description: "Best if you want us to build + run the system with ongoing optimization." },
  { title: "AI agent sprint", tag: "2–3 weeks", description: "Best if you need one high-impact agent deployed fast, including research, scoring, personalization, or follow-ups." },
]

const techCategories = [
  { title: "Signals & intent", icon: Target, tools: "JobFeeder, RB2B, Factors.ai, Common Room, Vector, Unify" },
  { title: "AI agents & LLMs", icon: Brain, tools: "ChatGPT, Claude, RelevanceAI, Perplexity" },
  { title: "Prospecting & enrichment", icon: Layers, tools: "Apollo, Clay, FullEnrich, Ocean.io, Sales Navigator" },
  { title: "Sequencing & outreach", icon: Mail, tools: "Instantly, Smartlead, Lemlist, Unify, Reply.io" },
  { title: "Automation & ops", icon: Wrench, tools: "n8n, HubSpot, Airtable, Make, Notion" },
  { title: "Content & collateral", icon: Palette, tools: "Figma, Canva, Miro, Qwilr, Loom" },
]

const faqs = [
  { q: "How are you different?", a: "We don't sell one-off campaigns. We build full-stack GTM engines that run 24/7, combining signals, automation, AI agents, and performance marketing to deliver faster, predictable growth." },
  { q: "What results can I expect?", a: "Most clients see lower CAC, higher-quality leads, and a 2–3x increase in pipeline velocity within 90 days of implementation." },
  { q: "Do you work with my tools?", a: "Yes. We integrate with your existing CRM, ad platforms, and intent tools, or set up a best-in-class stack from scratch." },
]

// ─── Helpers ─────────────────────────────────────────────────────────
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }

function TiltReveal({ children, from = "left", delay = 0 }: { children: React.ReactNode; from?: "left" | "right" | "bottom"; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const init = from === "left" ? { opacity: 0, x: -40, rotateY: 6 } : from === "right" ? { opacity: 0, x: 40, rotateY: -6 } : { opacity: 0, y: 40, rotateX: -6 }
  return <motion.div ref={ref} initial={init} animate={inView ? { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 } : init} transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }} style={{ perspective: 1000 }}>{children}</motion.div>
}

// ─── Page ────────────────────────────────────────────────────────────
export default function HowWeWorkPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <OperatingSystemSection />
        <BuildProcessSection />
        <DeliverablesSection />
        <EngagementModelsSection />
        <TechStackSection />
        <FAQSection />
        <LogoTicker />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 1. HERO
// ═══════════════════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]" />
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2 glow-border">
          <Sparkles className="h-4 w-4 text-[#0dcfcf]" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#64748B]">Our methodology</span>
        </motion.div>

        <motion.h1
          className="mb-5 text-3xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          See how we <span className="gradient-text">work</span>
        </motion.h1>

        <motion.div className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#0dcfcf]" initial={{ width: 0, opacity: 0 }} animate={{ width: 64, opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="mx-auto mb-10 max-w-[700px] text-base leading-relaxed text-[#64748B] sm:text-lg">
          We build signal-led GTM systems that grow your pipeline with the speed and precision of an e-commerce engine, powered by signals, AI agents, and automation.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/Contact" className="shimmer inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a]">
            Book a strategy call <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }} className="mt-10 sm:mt-16 flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-widest text-[#64748B]">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/5">
            <ChevronDown className="h-4 w-4 text-[#0dcfcf]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 2. THE PROBLEM
// ═══════════════════════════════════════════════════════════════════════
function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-[20%] top-[40%] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-[#0dcfcf]/[0.04] blur-[300px]" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-bold text-[6rem] sm:text-[12rem] leading-none text-[#0F172A]/[0.02] lg:text-[18rem] select-none">
        SIGNALS · SIGNALS · SIGNALS
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <TiltReveal from="left">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">The Problem</span>
          <h2 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl lg:text-5xl">Still using outdated playbooks for <span className="gradient-text">B2B sales</span>?</h2>
        </TiltReveal>
        <div className="mt-8 sm:mt-10 grid gap-8 sm:gap-12 lg:grid-cols-2">
          <TiltReveal from="left" delay={0.1}>
            <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
              Traditional CRMs only show surface-level engagement. Your real buyers are researching, comparing, and signaling intent long before they ever fill out a form.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#64748B] lg:text-lg">
              We capture those hidden buying signals, convert them into actions using AI agents, and connect everything with automation, so growth becomes predictable, scalable, and compounding.
            </p>
          </TiltReveal>
          <TiltReveal from="right" delay={0.2}>
            {/* CRM view vs Signal view comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-red-200 bg-red-50/50 p-4 sm:p-6">
                <p className="mb-2 font-mono text-xs font-semibold text-red-400">OLD WAY</p>
                <p className="text-sm font-semibold text-[#0F172A]">CRM view</p>
                <p className="mt-2 text-xs leading-relaxed text-[#64748B]">Empty, late, reactive. Only sees form fills.</p>
              </div>
              <div className="rounded-xl border border-[#0dcfcf]/30 bg-[#0dcfcf]/5 p-4 sm:p-6">
                <p className="mb-2 font-mono text-xs font-semibold text-[#0dcfcf]">OUR WAY</p>
                <p className="text-sm font-semibold text-[#0F172A]">Signal view</p>
                <p className="mt-2 text-xs leading-relaxed text-[#64748B]">Jobs, site intent, content, ads, engagement, all lighting up.</p>
              </div>
            </div>
          </TiltReveal>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 3. THE OPERATING SYSTEM — signal flow visualization
// ═══════════════════════════════════════════════════════════════════════
function OperatingSystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/20 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">The Operating System</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl lg:text-5xl">Turning hidden signals into <span className="gradient-text">growth</span></h2>
          <p className="mx-auto mb-10 sm:mb-14 max-w-[700px] text-sm sm:text-base leading-relaxed text-[#64748B]">Most teams run GTM like disconnected tactics. We build one system where signals trigger workflows, workflows trigger campaigns, and campaigns compound into pipeline.</p>
        </motion.div>

        {/* Signal flow visualization */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4">
          {["Signals", "AI agents", "Automations", "Outreach + ads", "Pipeline"].map((step, i) => (
            <div key={step} className="flex items-center gap-3 lg:gap-4">
              <motion.div
                className="rounded-xl border border-[#E2E8F0] px-3 py-2 text-xs font-semibold text-[#0F172A] sm:px-5 sm:py-3 sm:text-sm lg:px-7 lg:py-4 lg:text-base"
                style={{ background: "rgba(255,255,255,0.98)", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 201, 177, 0.1)" }}
                whileHover={{ scale: 1.05, borderColor: "rgba(13,207,207,0.5)" }}
              >
                {step}
              </motion.div>
              {i < 4 && <ArrowRight className="h-4 w-4 text-[#0dcfcf] shrink-0" />}
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-10 sm:mt-12">
          <Link href="/Contact" className="shimmer inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a]">
            Book a strategy call <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 4. 6-STEP BUILD PROCESS — scroll-driven S-curve timeline
// ═══════════════════════════════════════════════════════════════════════
function BuildProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start center", "end center"] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const [activeStep, setActiveStep] = useState(-1)

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveStep(Math.min(Math.floor(v * buildSteps.length), buildSteps.length - 1))
  })

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <div className="glow-orb absolute left-[75%] top-[30%] h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] rounded-full bg-[#0dcfcf]/[0.04] blur-[350px]" />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-10 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">The Build</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl lg:text-5xl">How we build your GTM <span className="gradient-text">engine</span></h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">A proven 6-step process from diagnosis to scale. Most engines are live within 6 weeks.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 h-full w-px bg-[#E2E8F0] lg:left-1/2 lg:-translate-x-px" />
          <div className="absolute left-4 sm:left-6 top-0 w-px overflow-hidden lg:left-1/2 lg:-translate-x-px" style={{ height: "100%" }}>
            <motion.div className="w-full bg-[#0dcfcf] origin-top" style={{ height: lineHeight }} />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {buildSteps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              const isActive = activeStep >= i
              return (
                <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className={`relative flex items-start gap-4 sm:gap-6 lg:items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className="absolute left-[-4px] sm:left-0 z-10 lg:left-1/2 lg:-translate-x-1/2">
                    <motion.div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 bg-white" animate={{ borderColor: isActive ? "#0dcfcf" : "#E2E8F0", boxShadow: isActive ? "0 0 15px rgba(13,207,207,0.4)" : "0 1px 4px rgba(0,0,0,0.06)" }} transition={{ duration: 0.4 }}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300" style={{ color: isActive ? "#0dcfcf" : "#94A3B8" }} />
                    </motion.div>
                    {isActive && <motion.div className="absolute inset-0 rounded-full border border-[#0dcfcf]" initial={{ scale: 1, opacity: 0.4 }} animate={{ scale: 2, opacity: 0 }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }} />}
                  </div>
                  <div className={`ml-10 sm:ml-16 lg:ml-0 lg:w-[44%] ${isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}>
                    <div className={`rounded-xl border bg-white p-4 sm:p-6 transition-all hover:shadow-lg ${isActive ? "border-[#0dcfcf]/30" : "border-[#E2E8F0]"}`} style={{ boxShadow: isActive ? "0 4px 20px rgba(13,207,207,0.08)" : "0 4px 20px rgba(0,0,0,0.04)" }}>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-[#0dcfcf]">Step {i + 1}</span>
                        <span className="rounded-md bg-[#F1F5F9] px-2 py-0.5 text-xs font-medium text-[#64748B]">{step.week}</span>
                      </div>
                      <h3 className="mb-1.5 text-base font-semibold text-[#0F172A]">{step.title}</h3>
                      <p className="mb-3 text-sm leading-relaxed text-[#64748B]">{step.description}</p>
                      <p className="text-xs font-medium text-[#0dcfcf]">{step.deliverable}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-[44%]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 5. DELIVERABLES — what you get
// ═══════════════════════════════════════════════════════════════════════
function DeliverablesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-[15%] top-[35%] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-full bg-[#0dcfcf]/[0.04] blur-[300px]" />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-10 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Deliverables</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl lg:text-5xl">What you <span className="gradient-text">get</span></h2>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((d) => {
            const Icon = d.icon
            return (
              <motion.div key={d.title} variants={cardVariants} className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-8 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0dcfcf]/10">
                  <Icon className="h-6 w-6 text-[#0dcfcf]" />
                </div>
                <h3 className="mb-4 text-lg font-semibold text-[#0F172A]">{d.title}</h3>
                <ul className="space-y-2">
                  {d.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#64748B]">
                      <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#0dcfcf]" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 6. ENGAGEMENT MODELS
// ═══════════════════════════════════════════════════════════════════════
function EngagementModelsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <div className="glow-orb absolute left-[80%] top-[40%] h-[180px] w-[180px] sm:h-[280px] sm:w-[280px] rounded-full bg-[#0dcfcf]/[0.04] blur-[280px]" />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-10 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Engagement</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl lg:text-5xl">Engagement <span className="gradient-text">models</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
            <TiltReveal key={m.title} from="bottom" delay={i * 0.1}>
              <div className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-8 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                <span className="mb-3 inline-flex rounded-md bg-[#0dcfcf]/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#0dcfcf]">{m.tag}</span>
                <h3 className="mb-3 text-lg font-semibold text-[#0F172A]">{m.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-[#64748B]">{m.description}</p>
                <Link href="/Contact" className="inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-[#0dcfcf] transition-colors hover:text-[#0a9a9a]">
                  Book a call <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </TiltReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 7. TECH STACK — glassmorphism orbit cards
// ═══════════════════════════════════════════════════════════════════════
function TechStackSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1526] to-[#0a0e1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(13,207,207,0.08)_0%,_transparent_60%)]" />
      <FloatingOrbs />
      <div className="glow-orb absolute left-[40%] top-[40%] h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] rounded-full bg-[#0dcfcf]/[0.06] blur-[350px]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-10 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/20 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Tech Stack</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">Tools we work <span className="gradient-text">with</span></h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-white/60">Built with advanced frameworks and tools to deliver seamless, high-performance solutions.</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group relative rounded-xl border p-4 sm:p-6 transition-all"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderColor: "rgba(0, 201, 177, 0.2)",
                  boxShadow: "0px 10px 40px -10px rgba(0, 201, 177, 0.3)",
                }}
              >
                {/* Subtle teal gradient overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-xl" style={{ background: "radial-gradient(ellipse at top left, rgba(13,207,207,0.05), transparent 70%)" }} />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0dcfcf]/10">
                      <Icon className="h-4 w-4 text-[#0dcfcf]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#0F172A]">{cat.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-[#64748B]">{cat.tools}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 8. FAQ
// ═══════════════════════════════════════════════════════════════════════
function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="relative mx-auto max-w-[800px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl lg:text-5xl">Frequently asked <span className="gradient-text">questions</span></h2>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (<FAQItem key={i} question={faq.q} answer={faq.a} index={i} />))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-xl border border-[#E2E8F0] bg-white transition-all hover:border-[#0dcfcf]/30" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
      <button onClick={() => setOpen(!open)} className="flex w-full min-h-[44px] items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left">
        <span className="pr-4 text-sm sm:text-base font-semibold text-[#0F172A]">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[#94A3B8] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-4 sm:px-6 pb-4 sm:pb-5"><p className="text-sm leading-relaxed text-[#64748B]">{answer}</p></motion.div>}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 9. CTA
// ═══════════════════════════════════════════════════════════════════════
function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <FloatingOrbs />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(13,207,207,0.3) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="glow-orb absolute left-[40%] top-[50%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#0dcfcf]/[0.08] blur-[400px]" />
      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <h2 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">Ready to scale <span className="gradient-text">smarter</span>?</h2>
          <p className="mx-auto mb-8 sm:mb-10 max-w-[550px] text-sm sm:text-base leading-relaxed text-[#94A3B8] md:text-lg">{"Let's turn buyer signals into booked meetings and real revenue."}</p>
          <Link href="/Contact" className="shimmer inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#5de0e0]">
            Book a strategy call <Phone className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
