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
  Send, FileText, UserCheck, Award, User,
} from "lucide-react"
import Link from "next/link"
import { createContext, useCallback, useContext, useRef, useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingOrbs } from "@/components/services/atmospheric-orbs"
import { LogoTicker } from "@/components/logo-ticker"
import { ApplyModal } from "@/components/apply-modal"

// ─── Data ────────────────────────────────────────────────────────────
const CAREERS_EMAIL = "careers@insightstap.com"

const teamValues = [
  { icon: Shield, title: "Own It", description: "Own your work and your growth. Set clear goals, act with trust, and deliver without being chased. That drive turns good work into real results." },
  { icon: Rocket, title: "Ship It", description: "We build real things fast. Launch a solid idea now and improve it later. Move, test, learn, and repeat." },
  { icon: Eye, title: "Measure It", description: "We track what matters: revenue, pipeline, and profit. We ignore vanity metrics and follow the data to change course." },
  { icon: Coffee, title: "Have Fun", description: "We love building AI agents, signal systems, and campaigns that convert. Bring energy and curiosity every day." },
]

const benefits = [
  { icon: TrendingUp, title: "Competitive Compensation", description: "Salaries that reflect your skills, impact, and meet market standards." },
  { icon: Heart, title: "Health Insurance", description: "Comprehensive coverage to support your well-being and peace of mind." },
  { icon: Shield, title: "PF Benefits", description: "Structured financial security to help you plan for the future." },
  { icon: Award, title: "Performance Bonuses", description: "Your contributions don't go unnoticed. Earn rewards based on performance and targets." },
  { icon: GraduationCap, title: "Learning & Development", description: "Dedicated budgets and opportunities to upskill, learn, and grow continuously." },
  { icon: Users, title: "Collaborative Office Culture", description: "Innovation thrives when people work together in person, exchange ideas, and build real connections." },
  { icon: Zap, title: "Emergency Remote Flexibility", description: "We value in-office collaboration, but provide flexibility to work remotely when genuine emergencies arise." },
  { icon: Heart, title: "Supportive Team Environment", description: "Work with people who genuinely care about your growth, success, and overall experience." },
]


type OpenRole = {
  title: string
  level: string
  type: string
  department: string
  pkg: string
  applyUrl: string
  responsibilities: string[]
}

const openRoles: OpenRole[] = [
  {
    title: "Software Developer (Fresher)",
    level: "0–1 year",
    type: "Full-time",
    department: "Engineering",
    pkg: "₹2.64L – ₹3.84L PA",
    applyUrl: "https://talent.flowmingo.ai/jobs/job001",
    responsibilities: [
      "Strong fundamentals in Python or JavaScript / TypeScript",
      "A build-first mindset and hunger to learn AI / LLM integration",
      "Obsessed with clean, readable code and best practices",
      "Hiring immediately. Start your career with us",
    ],
  },
  {
    title: "Python Backend Developer (FastAPI)",
    level: "2–3 years",
    type: "Full-time",
    department: "Engineering",
    pkg: "₹4.2L – ₹5.4L PA",
    applyUrl: "https://talent.flowmingo.ai/jobs/job004",
    responsibilities: [
      "2–3 years of hands-on backend experience",
      "Mastery of FastAPI and complex SQL queries",
      "Build background pipelines and robust Pydantic models",
      "Ship to production from day one",
    ],
  },
  {
    title: "Frontend Developer (Next.js / React)",
    level: "2–3 years",
    type: "Full-time · Kolkata (On-site)",
    department: "Engineering",
    pkg: "₹4L – ₹5L PA",
    applyUrl: "https://talent.flowmingo.ai/jobs/job006",
    responsibilities: [
      "2–3 years of professional frontend experience",
      "TypeScript mastery and a deep understanding of Core Web Vitals",
      "Passion for responsive, accessible, and fast UI",
      "Build the future of AI interfaces",
    ],
  },
]

const hiringSteps = [
  { icon: Send, title: "Application Submission", description: "Apply through our careers page or trusted job portals. Submit your resume with a brief note on why you'd like to join Insightstap." },
  { icon: FileText, title: "Application Review", description: "Our team carefully reviews your experience, achievements, and fit for the role. We respond within 3–5 business days." },
  { icon: Code, title: "XOBIN Assessment", description: "A practical, role-specific skills evaluation powered by XOBIN: a technical challenge, GTM scenario, or marketing exercise." },
  { icon: UserCheck, title: "Final Interview", description: "Discussion with the hiring manager and potential team members. We explore your experience in depth and how you approach real challenges." },
  { icon: Shield, title: "Documentation & BGV", description: "We initiate documentation and background verification of previous employment, education, and other relevant details for compliant onboarding." },
  { icon: CheckCircle, title: "Offer & Onboarding", description: "A clear, transparent offer within 2–3 business days. Structured first-week plan, dedicated buddy, and 30/60/90-day goals." },
]

const faqs = [
  { q: "Can I apply for multiple roles at the same time?", a: "Yes, absolutely. We recommend limiting to 2–3 roles based on your skills and interests. After the initial screen, our team can help align you with the best opportunity for your skills and career goals." },
  { q: "How long does the hiring process take?", a: "Most processes complete within 2 weeks from initial screen to offer. We respect your time and move quickly when we find the right person." },
  { q: "Do you offer internships?", a: "Yes. Paid internships running 3–6 months in Engineering, GTM Strategy, Marketing, and Design." },
  { q: "What if I don't see a role that fits?", a: "Send your resume and a note to careers@insightstap.com. Tell us what you'd build. We're always open to exceptional people, even if there's no open listing." },
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
      className="h-full"
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

// ─── Apply modal context ─────────────────────────────────────────────
type ApplyCtx = { openApply: (role?: string) => void }
const ApplyContext = createContext<ApplyCtx | null>(null)
function useApply() {
  const ctx = useContext(ApplyContext)
  if (!ctx) throw new Error("useApply must be used inside ApplyContext")
  return ctx
}

// ─── Page ────────────────────────────────────────────────────────────
export default function CareerPage() {
  const [applyOpen, setApplyOpen] = useState(false)
  const [applyRole, setApplyRole] = useState<string | undefined>(undefined)

  const openApply = useCallback((role?: string) => {
    setApplyRole(role)
    setApplyOpen(true)
  }, [])

  return (
    <ApplyContext.Provider value={{ openApply }}>
      <Navigation />
      <main>
        <HeroSection />
        <CultureSection />
        <ValuesSection />

        <BenefitsSection />
        <OpenRolesSection />
        <HiringProcessSection />
        <InternshipSection />
        <SubmitApplicationSection />
        <FAQSection />
        <CTASection />
        <LogoTicker />
      </main>
      <Footer />
      <ApplyModal
        open={applyOpen}
        onOpenChange={setApplyOpen}
        role={applyRole}
        title={applyRole ? `Apply for ${applyRole}` : "Submit your application"}
      />
    </ApplyContext.Provider>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 1. DARK HERO — with magnetic orbs
// ═══════════════════════════════════════════════════════════════════════
function HeroSection() {
  const { openApply } = useApply()
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]" />
      <FloatingOrbs />
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2 glow-border"
        >
          <Sparkles className="h-4 w-4 text-[#0dcfcf]" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#64748B]">
            Join the team
          </span>
        </motion.div>

        <motion.h1 className="mb-5 text-2xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}>
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="block">Designing Tomorrow&apos;s</motion.span>
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="block">
            <span className="gradient-text">B2B Revenue</span> From Anywhere
          </motion.span>
        </motion.h1>

        <motion.div className="mx-auto mb-8 h-1 w-16 rounded-full bg-[#0dcfcf]" initial={{ width: 0, opacity: 0 }} animate={{ width: 64, opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="mx-auto mb-10 max-w-[720px] text-base leading-relaxed text-[#64748B] sm:text-lg">
          {"We're a talent pool of GTM engineers, designers, and marketers who love building. Each day, we build AI-powered GTM systems that drive real pipeline results. If you like AI, smart automation, and real revenue growth, you'll fit in. We don't use old playbooks. We create the next ones and want people who'll help shape them."}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link href="#open-roles" className="shimmer inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] sm:w-auto">
            View open positions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#culture" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] transition-all hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5 sm:w-auto">
            See how we work
          </Link>
          <button
            type="button"
            onClick={() => openApply()}
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5 hover:text-[#0dcfcf] hover:shadow-md hover:shadow-[#0dcfcf]/10 sm:w-auto"
          >
            <Mail className="h-4 w-4 text-[#0dcfcf] transition-transform duration-300 group-hover:scale-110" />
            Submit your resume
          </button>
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
// 2. CULTURE — with oversized background text + 3D tilt reveals
// ═══════════════════════════════════════════════════════════════════════
function CultureSection() {
  return (
    <section id="culture" className="relative overflow-hidden bg-white px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
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
            <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Why Insightstap</span>
            <h2 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Company <span className="gradient-text">Culture</span></h2>
            <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
              {"InsightsTap is a creative studio and talent pool built around one big idea: that AI, automation, and smart strategy can completely transform how B2B companies grow. These values guide who we hire, how we work, and what we celebrate."}
            </p>
          </div>
        </TiltReveal>

        {/* Employee stories — staggered 3D reveals */}
        <div className="grid gap-8 lg:grid-cols-2">
          {[
            { quote: "I joined Insightstap as a GTM strategist six months ago. What surprised me was the speed. We don't talk about ideas for weeks. We build them, test them, and see results within days. The autonomy is real, and the impact is visible.", name: "Somnath", role: "Developer / Principal Software Engineer, Platforms & Integrations" },
            { quote: "What I love about working here is that every project is different, and every system we build actually runs. We're not creating reports that sit in a folder. We're building engines that generate pipelines every single day.", name: "Subashis", role: "Principal, AI Solutions & GTM Architecture" },
          ].map((story, i) => (
            <TiltReveal key={i} from={i === 0 ? "left" : "right"} delay={i * 0.15}>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-8 lg:p-10 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
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
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
      <div className="glow-orb absolute left-[70%] top-[50%] h-[320px] w-[320px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" style={{ animationDelay: "-2s" }} />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-12 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">How We Work</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Team <span className="gradient-text">Values</span></h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">Our four values drive every bit of what we do. They are not poster-worthy quotations. They&apos;re the basis of how we hire, assess, and make daily decisions.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamValues.map((v, i) => {
            const Icon = v.icon
            return (
              <TiltReveal key={v.title} from="bottom" delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-7 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
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
// 5. BENEFITS — with diagonal accent
// ═══════════════════════════════════════════════════════════════════════
function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-[10%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" style={{ animationDelay: "-1s" }} />

      {/* Kinetic velocity-stretched background text */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full">
        <KineticText text="BENEFITS · PERKS · GROWTH · BENEFITS" className="text-[12rem] lg:text-[18rem] text-[#0F172A]/[0.02]" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-12 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Perks</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Benefits & <span className="gradient-text">Perks</span></h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-[#64748B]">Competitive compensation, learning, and a team that genuinely cares about your growth.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <TiltReveal key={b.title} from="bottom" delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-6 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
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
    <section id="open-roles" className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
      <div className="glow-orb absolute left-[80%] top-[25%] h-[350px] w-[350px] rounded-full bg-[#0dcfcf]/[0.04] blur-[140px]" />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-12 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Join Us</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Open <span className="gradient-text">Positions</span></h2>
          <p className="mx-auto max-w-[640px] text-base leading-relaxed text-[#64748B]">{"We're building the infrastructure behind modern B2B revenue. These are the people we're looking for. If you see yourself here, we'd love to talk."}</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="space-y-6">
          {openRoles.map((role) => (
            <motion.div key={role.title} variants={cardVariants} className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-8 transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-[#0dcfcf]/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#0dcfcf]">{role.department}</span>
                    <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 text-xs font-medium text-[#64748B]">{role.type}</span>
                    <span className="rounded-md bg-[#F1F5F9] px-2.5 py-0.5 text-xs font-medium text-[#64748B]">{role.level}</span>
                    <span className="rounded-md border border-[#0dcfcf]/30 bg-[#0dcfcf]/5 px-2.5 py-0.5 text-xs font-semibold text-[#0a9a9a]">{role.pkg}</span>
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
                <a
                  href={role.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer mt-4 inline-flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-6 text-sm font-medium text-white shadow-sm shadow-[#0dcfcf]/12 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] sm:w-auto lg:mt-0"
                >
                  Apply now <ArrowRight className="h-3.5 w-3.5" />
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
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-[25%] top-[50%] h-[350px] w-[350px] rounded-full bg-[#0dcfcf]/[0.04] blur-[140px]" style={{ animationDelay: "-2s" }} />

      <div className="relative mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-12 sm:mb-16 text-center">
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">The Process</span>
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Our Recruitment <span className="gradient-text">Process</span></h2>
          <p className="mx-auto max-w-[640px] text-base leading-relaxed text-[#64748B]">Fast, fair, and transparent. We respect your time and give you clarity at every step. Most hiring processes complete within 2 weeks, from the first screen to the final offer.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical track */}
          <div className="absolute left-[18px] sm:left-6 top-0 h-full w-px bg-[#E2E8F0] lg:left-1/2 lg:-translate-x-px" />
          {/* Scroll-driven teal line */}
          <div className="absolute left-[18px] sm:left-6 top-0 w-px overflow-hidden lg:left-1/2 lg:-translate-x-px" style={{ height: "100%" }}>
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
                      className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 bg-white"
                      animate={{
                        borderColor: isActive ? "#0dcfcf" : "#E2E8F0",
                        boxShadow: isActive ? "0 0 15px rgba(13,207,207,0.4), 0 0 40px rgba(13,207,207,0.1)" : "0 1px 4px rgba(0,0,0,0.06)",
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300" style={{ color: isActive ? "#0dcfcf" : "#94A3B8" }} />
                    </motion.div>
                    {isActive && (
                      <motion.div className="absolute inset-0 rounded-full border border-[#0dcfcf]" initial={{ scale: 1, opacity: 0.4 }} animate={{ scale: 2, opacity: 0 }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }} />
                    )}
                  </div>
                  {/* Card */}
                  <div className={`ml-12 sm:ml-16 lg:ml-0 lg:w-[44%] ${isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"}`}>
                    <div className={`rounded-xl border bg-white p-4 sm:p-6 transition-all hover:shadow-lg ${isActive ? "border-[#0dcfcf]/30 shadow-md" : "border-[#E2E8F0]"}`} style={{ boxShadow: isActive ? "0 4px 20px rgba(13,207,207,0.08)" : "0 4px 20px rgba(0,0,0,0.04)" }}>
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
  const { openApply } = useApply()
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
      <div className="glow-orb absolute left-[80%] top-[30%] h-[280px] w-[280px] rounded-full bg-[#0dcfcf]/[0.04] blur-[120px]" style={{ animationDelay: "-1s" }} />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <TiltReveal from="left">
            <div>
              <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Early Career</span>
              <h2 className="mb-5 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Student & <span className="gradient-text">Internships</span></h2>
              <p className="mb-6 text-base leading-relaxed text-[#64748B]">The Insightstap internship program gives motivated individuals a unique chance to work on actual projects with actual clients. Interns learn by doing as part of the team&apos;s daily function, building automation workflows, writing marketing material, or designing collateral from the day they start.</p>
              <p className="mb-8 text-base leading-relaxed text-[#64748B]">Internships run 3–6 months across Engineering, GTM Strategy, Marketing, and Design. All internships are paid.</p>
              <button
                type="button"
                onClick={() => openApply("Internship")}
                className="shimmer inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] sm:w-auto"
              >
                Apply for Internship <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </TiltReveal>
          <TiltReveal from="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: Code, label: "Engineering" },
                { icon: TrendingUp, label: "GTM Strategy" },
                { icon: Palette, label: "Design" },
                { icon: Briefcase, label: "Marketing" },
              ].map((dept) => {
                const Icon = dept.icon
                return (
                  <motion.div key={dept.label} whileHover={{ scale: 1.04, y: -2 }} className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-6 text-center transition-all hover:border-[#0dcfcf]/30 hover:shadow-lg" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
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
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="relative mx-auto max-w-[800px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="mb-10 sm:mb-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Frequently Asked <span className="gradient-text">Questions</span></h2>
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
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-xl border border-[#E2E8F0] bg-white transition-all hover:border-[#0dcfcf]/30" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.07)" }}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-4 py-4 sm:px-6 sm:py-5 text-left">
        <span className="pr-4 text-sm sm:text-base font-semibold text-[#0F172A]">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[#94A3B8] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-4 pb-4 sm:px-6 sm:pb-5">
          <p className="text-sm leading-relaxed text-[#64748B]">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 9b. SUBMIT YOUR APPLICATION
// ═══════════════════════════════════════════════════════════════════════
function SubmitApplicationSection() {
  const { openApply } = useApply()
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-[60%] top-[40%] h-[300px] w-[300px] rounded-full bg-[#0dcfcf]/[0.04] blur-[130px]" style={{ animationDelay: "-2s" }} />

      <div className="relative mx-auto max-w-[800px] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">Apply Now</span>
          <h2 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">Submit Your <span className="gradient-text">Application</span></h2>
          <p className="mb-4 text-base leading-relaxed text-[#64748B] lg:text-lg">
            Want to build revenue systems that work? We&apos;d love to hear from you. Browse open roles, pick one, and tell us why you&apos;re a fit. Attach your resume and a short note about why Insightstap excites you.
          </p>
          <p className="mb-10 text-base leading-relaxed text-[#64748B] lg:text-lg">
            Don&apos;t see a match? We still want to hear from great people. Email your resume and a brief idea of what you&apos;d build to{" "}
            <a href="mailto:careers@insightstap.com" className="font-semibold text-[#0dcfcf] hover:underline">careers@insightstap.com</a>.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#open-roles" className="shimmer inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] sm:w-auto">
              Browse open positions <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => openApply()}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5 hover:text-[#0dcfcf] hover:shadow-md hover:shadow-[#0dcfcf]/10 sm:w-auto"
            >
              <Mail className="h-4 w-4 text-[#0dcfcf] transition-transform duration-300 group-hover:scale-110" />
              Submit your resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════════
// 10. CTA
// ═══════════════════════════════════════════════════════════════════════
function CTASection() {
  const { openApply } = useApply()
  return (
    <section className="relative overflow-hidden bg-[#0F172A] px-4 sm:px-6 py-20 sm:py-24 lg:py-32">
      <FloatingOrbs />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(13,207,207,0.3) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="glow-orb absolute left-[40%] top-[50%] h-[400px] w-[400px] rounded-full bg-[#0dcfcf]/[0.08] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
          <h2 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Build Something That <span className="gradient-text">Matters</span>. From Anywhere.</h2>
          <p className="mx-auto mb-10 max-w-[640px] text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Insightstap is where GTM engineering meets real impact. Whether you&apos;re an engineer, strategist, marketer, or designer, if you care about doing excellent work and seeing it drive real results, we want you on the team.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link href="#open-roles" className="shimmer inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#5de0e0] sm:w-auto">
              View open positions <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => openApply()}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-8 text-base font-medium text-white transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              <Mail className="h-4 w-4" /> Submit your resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
