"use client"

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValueEvent,
} from "framer-motion"
import {
  Sparkles, Users, Rocket, Heart, Eye, Zap, Brain,
  Shield, Coffee, GraduationCap, Briefcase, Code, Palette,
  TrendingUp, ArrowRight, ChevronDown, Mail, CheckCircle,
  Send, FileText, UserCheck, Award,
} from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingOrbs } from "@/components/services/atmospheric-orbs"
import { LogoTicker } from "@/components/logo-ticker"

// ─── Data ────────────────────────────────────────────────────────────
const teamValues = [
  { icon: Shield, title: "Own It", description: "Take ownership of your work, your outcomes, and your growth. We trust our team to set the bar high and clear it." },
  { icon: Rocket, title: "Ship It", description: "Ideas are cheap. Execution matters. We value people who move fast, iterate, and get things into the world." },
  { icon: Eye, title: "Measure It", description: "Every system we build is measured by its impact on pipeline and revenue. We apply the same standard to ourselves." },
  { icon: Coffee, title: "Have Fun", description: "We genuinely enjoy what we do. Building AI agents, engineering signal systems — this is exciting work." },
]

const benefits = [
  { icon: TrendingUp, title: "Competitive Compensation", description: "Salaries that reflect your skills, impact, and meet market standards." },
  { icon: Heart, title: "Health Insurance", description: "Comprehensive coverage to support your well-being and peace of mind." },
  { icon: Shield, title: "PF Benefits", description: "Structured financial security to help you plan for the future." },
  { icon: Award, title: "Performance Bonuses", description: "Your contributions don't go unnoticed — earn rewards based on performance." },
  { icon: GraduationCap, title: "Learning & Development", description: "Dedicated budgets and opportunities to upskill, learn, and grow continuously." },
  { icon: Users, title: "Team Events", description: "Regular team hangouts, knowledge-sharing sessions, and celebration of milestones." },
]

const departments = [
  { icon: Code, title: "Engineering", description: "Build AI agents, LLM pipelines, and GTM infrastructure that powers real revenue.", color: "#0dcfcf", roles: 2 },
  { icon: Palette, title: "Creative & Design", description: "Craft premium interfaces, campaigns, and brand experiences for B2B.", color: "#0dcfcf", roles: 1 },
  { icon: TrendingUp, title: "Growth & Operations", description: "Run performance ads, ABM campaigns, and pipeline analytics at scale.", color: "#0dcfcf", roles: 1 },
]

const openRoles = [
  { title: "AI Developer", level: "Fresher / 0–1 Year", type: "Full-Time", department: "Engineering", responsibilities: ["Develop AI features using LLM APIs (OpenAI/Claude/Llama)", "Build AI workflows — chatbots, automation, data extraction", "Develop backend APIs (Python/JS) and integrations", "Work on prompt engineering and structured outputs"] },
  { title: "Senior AI Developer", level: "3+ Years", type: "Full-Time", department: "Engineering", responsibilities: ["Own end-to-end AI/LLM feature development", "Build AI agents with tool calling and multi-step workflows", "Implement RAG pipelines and CRM integrations", "Mentor junior developers and enforce engineering standards"] },
  { title: "PPC Expert / Google Ads Specialist", level: "2–3 Years", type: "Full-Time", department: "Growth & Marketing", responsibilities: ["Manage Google Ads campaigns and improve CTR, CPA, ROAS", "Set up GA4 conversion tracking and attribution", "Execute keyword research and bidding strategies", "Translate data insights into campaign optimizations"] },
  { title: "Junior Content Writer", level: "0–1 Year", type: "Full-Time", department: "Creative & Content", responsibilities: ["Write LinkedIn posts, articles, scripts, and newsletters", "Create thought leadership content for founders", "Draft ghostwritten GTM and AI-related content", "Support content planning and publishing workflows"] },
]

const hiringSteps = [
  { icon: Send, title: "Application", description: "Submit your resume with a brief note on why you'd like to join." },
  { icon: FileText, title: "Review", description: "Our team reviews your experience and fit. We respond within 3–5 days." },
  { icon: Users, title: "Initial Screen", description: "A 30-minute two-way conversation with our People & Culture team." },
  { icon: Code, title: "Skills Assessment", description: "A practical, role-specific evaluation powered by XOBIN." },
  { icon: UserCheck, title: "Final Interview", description: "Discussion with the hiring manager and potential team members." },
  { icon: Shield, title: "Verification", description: "Documentation and background verification for a smooth onboarding." },
  { icon: CheckCircle, title: "Offer & Onboarding", description: "Clear offer within 2–3 days. Structured first-week plan and buddy system." },
]

const faqs = [
  { q: "Can I apply for multiple roles at the same time?", a: "Yes — we recommend limiting to 2–3 roles. After the initial screen, our team can help align you with the best opportunity." },
  { q: "What does the XOBIN assessment look like?", a: "It's a practical, role-specific skills evaluation. Engineering roles get technical challenges. Strategy roles get GTM scenarios. It reflects real work, not trick questions." },
  { q: "How long does the hiring process take?", a: "Most processes complete within 2 weeks from initial screen to offer. We move quickly when we find the right person." },
  { q: "Do you offer internships?", a: "Yes — paid internships running 3–6 months in Engineering, GTM Strategy, Marketing, and Design." },
  { q: "What if I don't see a role that fits?", a: "Send your resume and a note to careers@insightstap.com. Tell us what you'd build. We're always open to exceptional people." },
]

// ─── Variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

// ─── 3D Tilt Scroll Reveal ──────────────────────────────────────────
function TiltReveal({
  children,
  from = "left",
  delay = 0,
}: {
  children: React.ReactNode
  from?: "left" | "right" | "bottom"
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const initial =
    from === "left"
      ? { opacity: 0, x: -40, rotateY: 6 }
      : from === "right"
        ? { opacity: 0, x: 40, rotateY: -6 }
        : { opacity: 0, y: 40, rotateX: -6 }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0 } : initial}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}

// ─── Kinetic Typography — velocity-based parallax text ───────────────
function KineticText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const skewX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [2, 0, 0, 0, -2])

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={`pointer-events-none whitespace-nowrap font-bold leading-none select-none kinetic-text ${className ?? ""}`}
        style={{ x, skewX }}
      >
        {text}
      </motion.div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────
export default function CareerPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CultureSection />
        <ValuesSection />
        <DepartmentHub />
        <BenefitsSection />
        <OpenRolesSection />
        <HiringProcessSection />
        <InternshipSection />
        <FAQSection />
        <LogoTicker />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 1. DARK HERO — with magnetic orbs
// ═══════════════════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-[#0a0e1a] pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1526] to-[#0a0e1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(13,207,207,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(13,207,207,0.08)_0%,_transparent_50%)]" />
      <FloatingOrbs />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Magnetic orbs — react to mouse movement */}
      <div className="glow-orb absolute left-[15%] top-[30%] h-[280px] w-[280px] rounded-full bg-[#0dcfcf]/[0.06] blur-[140px]" />
      <div className="glow-orb absolute left-[75%] top-[60%] h-[220px] w-[220px] rounded-full bg-[#0dcfcf]/[0.04] blur-[110px]" style={{ animationDelay: "-2s" }} />
      <div className="glow-orb absolute left-[50%] top-[80%] h-[180px] w-[180px] rounded-full bg-[#0dcfcf]/[0.05] blur-[90px]" style={{ animationDelay: "-4s" }} />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
        <motion.h1 className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="block">Build the Future of</motion.span>
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="block">
            <span className="text-[#0dcfcf]">B2B Revenue</span>. From Anywhere.
          </motion.span>
        </motion.h1>

        <motion.div className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#0dcfcf]" initial={{ width: 0, opacity: 0 }} animate={{ width: 64, opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="mx-auto mb-10 max-w-[700px] text-base leading-relaxed text-white/70 sm:text-lg">
          {"We're a team of GTM engineers, strategists, designers, and marketers building AI-powered systems that help B2B companies grow revenue. If you want to ship systems that actually move pipelines — you belong here."}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="#open-roles" className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a]">
            View Open Positions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/careers/how-we-work" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-8 text-base font-medium text-white transition-all hover:border-white/40 hover:bg-white/5">
            See How We Work
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }} className="mt-16 flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-widest text-white/40">Scroll to Explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="h-5 w-5 text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 2. CULTURE — with oversized background text + 3D tilt reveals
// ═══════════════════════════════════════════════════════════════════════
function CultureSection() {
  return (
    <section id="culture" className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-[20%] top-[40%] h-[350px] w-[350px] rounded-full bg-[#0dcfcf]/[0.04] blur-[140px]" style={{ animationDelay: "-1s" }} />

      {/* Kinetic velocity-stretched background text */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full">
        <KineticText
          text="CULTURE · CULTURE · CULTURE · CULTURE"
          className="text-[12rem] lg:text-[18rem] text-[#0F172A]/[0.02]"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <TiltReveal from="left">
          <div className="mb-16 max-w-[720px]">
            <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Why InsightsTap</span>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Company Culture</h2>
            <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
              {"InsightsTap isn't a traditional agency. We engineer revenue systems — signal detection pipelines, AI-powered outreach, CRM automation, and full-funnel analytics. We're remote-first and globally distributed. Clear goals, fast feedback loops, direct access to leadership, and the autonomy to do your best work."}
            </p>
          </div>
        </TiltReveal>

        {/* Employee stories — staggered 3D reveals */}
        <div className="grid gap-8 lg:grid-cols-2">
          {[
            { quote: "What surprised me was the speed. We don't talk about ideas for weeks. We build them, test them, and see results within days. The autonomy is real, and the impact is visible.", name: "Somnath", role: "Principal Software Engineer – Platforms & Integrations" },
            { quote: "Every project is different, and every system we build actually runs. We're not creating reports that sit in a folder. We're building engines that generate pipelines every single day.", name: "Subashis", role: "Principal – AI Solutions & GTM Architecture" },
          ].map((story, i) => (
            <TiltReveal key={i} from={i === 0 ? "left" : "right"} delay={i * 0.15}>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 lg:p-10 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                <p className="mb-6 text-base leading-relaxed text-[#64748B] italic">&ldquo;{story.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0dcfcf]/12 text-sm font-bold text-[#0dcfcf]">{story.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">{story.name}</p>
                    <p className="text-xs text-[#64748B]">{story.role}</p>
                  </div>
                </div>
              </div>
            </TiltReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 3. TEAM VALUES — with 3D card entry
// ═══════════════════════════════════════════════════════════════════════
function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 lg:py-32">
      <div className="glow-orb absolute left-[70%] top-[50%] h-[320px] w-[320px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" style={{ animationDelay: "-2s" }} />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">How We Work</span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">Team Values</h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">Everything we do runs on four values. They&apos;re not motivational posters — they&apos;re how we hire, evaluate, and make decisions.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamValues.map((v, i) => {
            const Icon = v.icon
            return (
              <TiltReveal key={v.title} from="bottom" delay={i * 0.1}>
                <div className="group rounded-2xl border border-[#E2E8F0] bg-white p-7 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0dcfcf]/10 transition-colors group-hover:bg-[#0dcfcf]/20">
                    <Icon className="h-6 w-6 text-[#0dcfcf]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">{v.description}</p>
                </div>
              </TiltReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 4. DEPARTMENT HUB — Glassmorphism expanding cards
// ═══════════════════════════════════════════════════════════════════════
function DepartmentHub() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1526] to-[#0a0e1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(13,207,207,0.1)_0%,_transparent_60%)]" />
      <FloatingOrbs />
      <div className="glow-orb absolute left-[30%] top-[40%] h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.06] blur-[130px]" />
      <div className="glow-orb absolute left-[70%] top-[60%] h-[250px] w-[250px] rounded-full bg-[#0dcfcf]/[0.05] blur-[110px]" style={{ animationDelay: "-3s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/20 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Departments</span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Where Will You Build?</h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-white/60">Three teams, one mission. Find the department that matches your craft.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {departments.map((dept, i) => {
            const Icon = dept.icon
            return (
              <TiltReveal key={dept.title} from="bottom" delay={i * 0.12}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative rounded-2xl glass-deep p-8 transition-all hover:border-[#0dcfcf]/40 hover:shadow-2xl hover:shadow-[#0dcfcf]/10 cursor-pointer"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-[#0dcfcf]/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <motion.div
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-7 w-7 text-[#0dcfcf]" />
                    </motion.div>

                    <h3 className="mb-3 text-xl font-semibold text-white">{dept.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-white/60">{dept.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-[#0dcfcf]/15 px-2.5 py-1 text-xs font-medium text-[#0dcfcf]">{dept.roles} open role{dept.roles > 1 ? "s" : ""}</span>
                      <Link href="#open-roles" className="inline-flex items-center gap-1 text-sm font-medium text-[#0dcfcf] transition-colors hover:text-white">
                        View Roles <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </TiltReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 5. BENEFITS — with diagonal accent
// ═══════════════════════════════════════════════════════════════════════
function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-[10%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" style={{ animationDelay: "-1s" }} />

      {/* Kinetic velocity-stretched background text */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full">
        <KineticText text="BENEFITS · PERKS · GROWTH · BENEFITS" className="text-[12rem] lg:text-[18rem] text-[#0F172A]/[0.02]" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Perks</span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">Benefits & Perks</h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">Competitive compensation, learning, and a team that genuinely cares about your growth.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <TiltReveal key={b.title} from="bottom" delay={i * 0.08}>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-7 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0dcfcf]/10">
                    <Icon className="h-6 w-6 text-[#0dcfcf]" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[#0F172A]">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">{b.description}</p>
                </div>
              </TiltReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 6. OPEN POSITIONS
// ═══════════════════════════════════════════════════════════════════════
function OpenRolesSection() {
  return (
    <section id="open-roles" className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 lg:py-32">
      <div className="glow-orb absolute left-[80%] top-[25%] h-[350px] w-[350px] rounded-full bg-[#0dcfcf]/[0.04] blur-[140px]" />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Join Us</span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">Open Positions</h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">{"We're building the infrastructure behind modern B2B revenue. If you see yourself here, we'd love to talk."}</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-6">
          {openRoles.map((role) => (
            <motion.div key={role.title} variants={cardVariants} className="group rounded-2xl border border-[#E2E8F0] bg-white p-8 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-[#0dcfcf]/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#0dcfcf]">{role.department}</span>
                    <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 text-xs font-medium text-[#64748B]">{role.type}</span>
                    <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 text-xs font-medium text-[#64748B]">{role.level}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-[#0F172A]">{role.title}</h3>
                  <ul className="space-y-1.5">
                    {role.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#64748B]">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#0dcfcf]" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="mailto:careers@insightstap.com" className="shimmer mt-4 inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-[#0dcfcf] px-6 text-sm font-medium text-white shadow-sm shadow-[#0dcfcf]/12 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] lg:mt-0">
                  Apply Now <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 7. HIRING PROCESS — S-curve with scroll-driven line
// ═══════════════════════════════════════════════════════════════════════
function HiringProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start center", "end center"] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const [activeStep, setActiveStep] = useState(-1)

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const step = Math.floor(v * hiringSteps.length)
    setActiveStep(Math.min(step, hiringSteps.length - 1))
  })

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-[25%] top-[50%] h-[350px] w-[350px] rounded-full bg-[#0dcfcf]/[0.04] blur-[140px]" style={{ animationDelay: "-2s" }} />

      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">The Process</span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">The Candidate Journey</h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">Fast, fair, and transparent. Most hiring processes complete within 2 weeks.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical track */}
          <div className="absolute left-6 top-0 h-full w-px bg-[#E2E8F0] lg:left-1/2 lg:-translate-x-px" />
          {/* Scroll-driven teal line */}
          <div className="absolute left-6 top-0 w-px overflow-hidden lg:left-1/2 lg:-translate-x-px" style={{ height: "100%" }}>
            <motion.div className="w-full bg-[#0dcfcf] origin-top" style={{ height: lineHeight }} />
          </div>

          <div className="space-y-10">
            {hiringSteps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              const isActive = activeStep >= i
              return (
                <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className={`relative flex items-start gap-6 lg:items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Node */}
                  <div className="absolute left-0 z-10 lg:left-1/2 lg:-translate-x-1/2">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white"
                      animate={{
                        borderColor: isActive ? "#0dcfcf" : "#E2E8F0",
                        boxShadow: isActive ? "0 0 15px rgba(13,207,207,0.4), 0 0 40px rgba(13,207,207,0.1)" : "0 1px 4px rgba(0,0,0,0.06)",
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="h-5 w-5 transition-colors duration-300" style={{ color: isActive ? "#0dcfcf" : "#94A3B8" }} />
                    </motion.div>
                    {isActive && (
                      <motion.div className="absolute inset-0 rounded-full border border-[#0dcfcf]" initial={{ scale: 1, opacity: 0.4 }} animate={{ scale: 2, opacity: 0 }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }} />
                    )}
                  </div>
                  {/* Card */}
                  <div className={`ml-16 lg:ml-0 lg:w-[44%] ${isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}>
                    <div className={`rounded-xl border bg-white p-6 transition-all hover:shadow-lg ${isActive ? "border-[#0dcfcf]/30 shadow-md" : "border-[#E2E8F0]"}`} style={{ boxShadow: isActive ? "0 4px 20px rgba(13,207,207,0.08)" : "0 4px 20px rgba(0,0,0,0.04)" }}>
                      <span className="mb-1 block font-mono text-xs font-semibold text-[#0dcfcf]">Step {i + 1}</span>
                      <h3 className="mb-1.5 text-base font-semibold text-[#0F172A]">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-[#64748B]">{step.description}</p>
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
// 8. INTERNSHIP
// ═══════════════════════════════════════════════════════════════════════
function InternshipSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 lg:py-32">
      <div className="glow-orb absolute left-[80%] top-[30%] h-[280px] w-[280px] rounded-full bg-[#0dcfcf]/[0.04] blur-[120px]" style={{ animationDelay: "-1s" }} />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <TiltReveal from="left">
            <div>
              <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Early Career</span>
              <h2 className="mb-5 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">Student & Internships</h2>
              <p className="mb-6 text-base leading-relaxed text-[#64748B]">Our internship program is designed for ambitious students and early-career professionals who want to learn by doing — not by watching. Interns work on real projects with real clients from day one.</p>
              <p className="mb-8 text-base leading-relaxed text-[#64748B]">Internships run 3–6 months and are available in Engineering, GTM Strategy, Marketing, and Design. All internships are paid.</p>
              <a href="mailto:careers@insightstap.com" className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a]">
                Apply for Internship <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </TiltReveal>
          <TiltReveal from="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, label: "Engineering" },
                { icon: TrendingUp, label: "GTM Strategy" },
                { icon: Palette, label: "Design" },
                { icon: Briefcase, label: "Marketing" },
              ].map((dept) => {
                const Icon = dept.icon
                return (
                  <motion.div key={dept.label} whileHover={{ scale: 1.04, y: -2 }} className="rounded-xl border border-[#E2E8F0] bg-white p-6 text-center transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0dcfcf]/10">
                      <Icon className="h-6 w-6 text-[#0dcfcf]" />
                    </div>
                    <p className="text-sm font-semibold text-[#0F172A]">{dept.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </TiltReveal>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 9. FAQ
// ═══════════════════════════════════════════════════════════════════════
function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="relative mx-auto max-w-[800px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-xl border border-[#E2E8F0] bg-white transition-all hover:border-[#0dcfcf]/30" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-6 py-5 text-left">
        <span className="pr-4 text-base font-semibold text-[#0F172A]">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[#94A3B8] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-6 pb-5">
          <p className="text-sm leading-relaxed text-[#64748B]">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 10. CTA
// ═══════════════════════════════════════════════════════════════════════
function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] px-6 py-24 lg:py-32">
      <FloatingOrbs />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(13,207,207,0.3) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="glow-orb absolute left-[40%] top-[50%] h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.08] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Build Something That Matters.</h2>
          <p className="mx-auto mb-10 max-w-[600px] text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Whether you&apos;re an engineer, strategist, marketer, or designer — if you care about doing excellent work and seeing it drive real results, we want you on the team.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#open-roles" className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#5de0e0]">
              View Open Positions
            </Link>
            <a href="mailto:careers@insightstap.com" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-8 text-base font-medium text-white transition-all hover:border-white/40 hover:bg-white/10">
              <Mail className="h-4 w-4" /> Submit Your Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
