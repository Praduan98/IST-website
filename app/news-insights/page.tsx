"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, X, Play } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// ─── Data ───────────────────────────────────────────────────────────────────────
const COMPANY_NEWS = [
  {
    title: "JobFeeder \u2014 Now Live",
    description:
      "Most IT MSPs and recruitment agencies are still cold calling. JobFeeder detects companies posting IT jobs in real time and turns them into a live sales pipeline \u2014 automatically.",
    cta: "See JobFeeder",
    href: "/Product/jobfeeder",
  },
  {
    title: "4 AI Products Shipped",
    description:
      "OneGPT, AetherPilot, ConnectChat, Ava AI \u2014 all production-grade, all live. We don\u2019t just consult. We build.",
    cta: "Custom AI Development",
    href: "/services/custom-ai-agent-app-development",
  },
]

const ARTICLES = [
  {
    title:
      "You ran 3,000 outreach touches. Booked 11 meetings. Closed 2. Here\u2019s why.",
    href: "https://medium.com/@riteshosta/you-ran-3-000-outreach-touches-last-quarter-booked-11-meetings-closed-2-bb440f661cbd",
  },
  {
    title: "Automation without governance is just faster waste.",
    href: "https://medium.com/@riteshosta/automation-without-governance-is-just-faster-waste-562c4c3d5207",
  },
  {
    title:
      "Why traditional PPC is failing B2B \u2014 and how ABM fixes it.",
    href: "https://medium.com/@riteshosta/why-traditional-ppc-is-failing-b2b-and-how-account-based-marketing-can-fix-it-5079207b595f",
  },
  {
    title:
      "The $100 billion problem \u2014 how enterprises can beat ad fraud in real time.",
    href: "https://medium.com/@riteshosta/100-billion-problem-how-enterprises-can-beat-ad-fraud-in-real-time-1424d945e8b9",
  },
  {
    title: "PPC tactics for ABM \u2014 the account-centric methodology.",
    href: "https://medium.com/@riteshosta/ppc-tactics-for-abm-the-account-centric-ppc-methodology-6ba21c8ddd49",
  },
]

const LINKEDIN_POSTS = [
  {
    title: "Pipeline generation \u2014 if we\u2019re being honest.",
    href: "https://www.linkedin.com/posts/riteshosta1_if-were-being-honest-pipeline-generation-activity-7424058646646628352-_OOw",
  },
  {
    title: "The $100B fraud problem and what B2B teams are missing.",
    href: "https://www.linkedin.com/posts/riteshosta1_today-were-talking-about-the-100b-fraud-activity-7398757333255962624-RfIm",
  },
  {
    title: "How real estate SaaS is reshaping the industry.",
    href: "https://www.linkedin.com/posts/riteshosta1_a-breakdown-of-how-real-estate-saas-is-reshaping-activity-7396592078803337217--mwD",
  },
]

const WEBINARS = [
  {
    title: "How to Build a GTM Engine for Large B2B Sales Teams",
    videoId: "DNY0PitTvmw",
  },
  {
    title: "AI Agents, Revenue Automation & the Future of B2B GTM",
    videoId: "-Qa030ZuB10",
  },
  {
    title: "The SIGNALS Framework\u2122 to Build Modern GTM Strategy",
    videoId: "LB9aFUe1D1Q",
  },
  {
    title:
      "What Is GTM Engineering? Q&A \u2014 How Data, Signals & Automation Drive B2B Growth",
    videoId: "IyjHIl0mmhY",
  },
  {
    title:
      "The Death of Old ABM \u2014 5 Shifts Redefining B2B Marketing with AI",
    videoId: "MkBPSiOouZw",
  },
  {
    title:
      "The $100 Billion Problem \u2014 How Enterprises Can Stop Ad Fraud in Real Time",
    videoId: "eo_gCVioMYs",
  },
  {
    title: "How Does the Dark Funnel Really Work in B2B Sales? Part 1",
    videoId: "dVwqSvt8XjU",
  },
  {
    title:
      "Smarter PPC Using ABM 2.0 \u2014 Reducing Wasted Ad Spend with Intent Data",
    videoId: "rZpawiTmQJ4",
  },
  {
    title:
      "HubSpot + ABM \u2014 Using CRM Intelligence for Account-Based Growth",
    videoId: "SMiefK411ew",
  },
  {
    title:
      "How to Turn Job Listings into B2B Leads Using Job Intent Signals",
    videoId: "0-m2WH4lTXs",
  },
]

// ─── Page ───────────────────────────────────────────────────────────────────────
export default function NewsInsightsPage() {
  const [cinemaVideo, setCinemaVideo] = useState<{
    id: string
    title: string
  } | null>(null)

  const handlePlay = useCallback((id: string, title: string) => {
    setCinemaVideo({ id, title })
  }, [])

  return (
    <>
      <Navigation />
      <main className="relative bg-transparent">
        {/* Atmospheric orb layer — sits behind all content via z-[-1] */}
        <AtmosphericOrbs />
        <HeroSection />
        <CompanyNewsSection />
        <ArticlesSection />
        <LinkedInSection />
        <WebinarSection onPlay={handlePlay} />
        <FinalCTA />
      </main>
      <Footer />

      <AnimatePresence>
        {cinemaVideo && (
          <CinemaMode
            videoId={cinemaVideo.id}
            title={cinemaVideo.title}
            onClose={() => setCinemaVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Atmospheric orbs — absolute within main, z-[-1] behind all sections ────────
const ORBS = [
  { left: "8%",  top: "5%",  size: 400, opacity: 0.18, blur: 100, dur: 25 },
  { left: "75%", top: "12%", size: 350, opacity: 0.15, blur: 90,  dur: 30 },
  { left: "50%", top: "28%", size: 500, opacity: 0.20, blur: 120, dur: 35 },
  { left: "15%", top: "42%", size: 300, opacity: 0.15, blur: 80,  dur: 22 },
  { left: "80%", top: "55%", size: 450, opacity: 0.18, blur: 110, dur: 28 },
  { left: "40%", top: "70%", size: 350, opacity: 0.15, blur: 90,  dur: 32 },
  { left: "10%", top: "85%", size: 400, opacity: 0.20, blur: 100, dur: 26 },
]

function AtmosphericOrbs() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, rgba(0,128,128,${orb.opacity}) 0%, rgba(13,207,207,${orb.opacity * 0.5}) 40%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            willChange: "transform",
            animation: `float ${orb.dur}s ease-in-out infinite`,
            animationDelay: `${-i * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

// ─── Reusable section header ────────────────────────────────────────────────────
function SectionHeader({
  badge,
  title,
  highlight,
}: {
  badge: string
  title: string
  highlight: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
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

// ─── Shared easing ──────────────────────────────────────────────────────────────
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ─── Hero ───────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative bg-white/80 px-6 pb-16 pt-32 lg:pb-24 lg:pt-40">
      <div className="dot-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-[800px] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0dcfcf]">
            News &amp; Resources
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT }}
          className="mb-5 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl"
        >
          GTM Webinars, Articles &amp;{" "}
          <span className="gradient-text">B2B Growth Intelligence</span>
        </motion.h1>

        <motion.div
          className="mx-auto mb-8 h-1 rounded-full bg-[#0dcfcf]"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE_OUT }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: EASE_OUT }}
          className="mx-auto mb-10 max-w-[640px] text-base leading-relaxed text-[#64748B] sm:text-lg"
        >
          Looking for the latest InsightsTap headlines or B2B GTM insights?
          Check here for news, webinars, and growth strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.0, ease: EASE_OUT }}
        >
          <Link
            href="/Contact"
            className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Company News — cards scale up ──────────────────────────────────────────────
function CompanyNewsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative bg-[#F8FAFC]/80 px-6 py-16 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeader badge="Company News" title="Latest" highlight="Updates" />

        <div className="grid gap-6 md:grid-cols-2">
          {COMPANY_NEWS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: EASE_OUT }}
            >
              <div className="group rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0dcfcf]/30 hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="mb-6 text-[0.938rem] leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0dcfcf] transition-all duration-300 hover:gap-3"
                >
                  {item.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ─── Featured Articles — staggered lift with slight rotation ─────────────────────
function ArticlesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative bg-white/80 px-6 py-16 lg:py-24"
    >
      <div className="dot-grid absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeader
          badge="Featured Insights"
          title="Articles &"
          highlight="Thought Leadership"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE_OUT }}
            >
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0dcfcf]/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0dcfcf]/10">
                  <svg
                    className="h-5 w-5 text-[#0dcfcf]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  </svg>
                </div>
                <h3 className="mb-4 flex-1 text-[1.05rem] font-semibold leading-snug text-[#0F172A] transition-colors duration-300 group-hover:text-[#0dcfcf]">
                  {article.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0dcfcf] transition-all duration-300 group-hover:gap-3">
                  Read on Medium
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ─── LinkedIn Posts — slide in from alternating sides ────────────────────────────
function LinkedInSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative bg-[#F8FAFC]/80 px-6 py-16 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeader
          badge="Social Pulse"
          title="Featured LinkedIn"
          highlight="Posts"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LINKEDIN_POSTS.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.12 * i, ease: EASE_OUT }}
            >
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0dcfcf]/30 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0dcfcf]/10 text-sm font-bold text-[#0dcfcf]">
                    RO
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">
                      Ritesh Osta
                    </p>
                    <p className="text-xs text-[#94A3B8]">CEO, InsightsTap</p>
                  </div>
                  <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2]/10">
                    <svg className="h-4 w-4 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 flex-1 text-[1.05rem] font-semibold leading-snug text-[#0F172A] transition-colors duration-300 group-hover:text-[#0dcfcf]">
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A66C2] transition-all duration-300 group-hover:gap-3 group-hover:text-[#0dcfcf]">
                  Read on LinkedIn
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ─── GTM Webinar Series — scale up from center ──────────────────────────────────
function WebinarSection({
  onPlay,
}: {
  onPlay: (id: string, title: string) => void
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative bg-white/80 px-6 py-16 lg:py-24"
    >
      <div className="dot-grid absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionHeader badge="GTM Webinar Series" title="Watch &" highlight="Learn" />

        <div className="grid gap-6 md:grid-cols-2">
          {WEBINARS.map((item, i) => (
            <motion.div
              key={item.videoId}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.07 * i, ease: EASE_OUT }}
            >
              <button
                onClick={() => onPlay(item.videoId, item.title)}
                className="group w-full overflow-hidden rounded-xl border border-[#E2E8F0] bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0dcfcf]/30 hover:shadow-lg"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#F1F5F9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      if (e.currentTarget.src.includes("maxresdefault")) {
                        e.currentTarget.src = e.currentTarget.src.replace("maxresdefault", "hqdefault")
                      }
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300 group-hover:bg-black/5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0dcfcf] shadow-md shadow-[#0dcfcf]/15 transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[0.938rem] font-semibold leading-snug text-[#0F172A] transition-colors duration-300 group-hover:text-[#0dcfcf]">
                    {item.title}
                  </h3>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// ─── Final CTA — 50/50 split slide-in ───────────────────────────────────────────
function FinalCTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative bg-[#F8FAFC]/80 px-6 py-16 lg:py-24"
    >
      <div className="dot-grid absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {/* Left — Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="flex flex-col justify-center rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm lg:p-12"
          >
            <span className="mb-4 inline-flex w-fit items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              Stay Updated
            </span>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#0F172A] lg:text-3xl">
              Get GTM Insights{" "}
              <span className="gradient-text">Every Week</span>
            </h2>
            <p className="mb-6 text-[0.938rem] leading-relaxed text-[#64748B]">
              Join 5,000+ founders and GTM leaders getting weekly AI-led GTM
              tips, signal-led growth strategies, and real campaign breakdowns
              — straight from the InsightsTap lab.
            </p>
            <div>
              <Link
                href="/Newsletter"
                className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25"
              >
                Subscribe for Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-xs text-[#94A3B8]">
                Zero spam. Just playbooks that convert.
              </p>
            </div>
          </motion.div>

          {/* Right — Strategy Call */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
            className="flex flex-col justify-center rounded-2xl border border-[#0dcfcf]/20 bg-gradient-to-br from-white to-[#0dcfcf]/[0.04] p-8 shadow-sm lg:p-12"
          >
            <span className="mb-4 inline-flex w-fit items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              Let&apos;s Talk
            </span>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#0F172A] lg:text-3xl">
              Ready to Build Your{" "}
              <span className="gradient-text">Revenue Engine</span>?
            </h2>
            <p className="mb-6 text-[0.938rem] leading-relaxed text-[#64748B]">
              Let&apos;s turn buyer signals into booked meetings and real
              revenue. Our team will map out a GTM strategy tailored to your
              pipeline goals.
            </p>
            <div>
              <Link
                href="/Contact"
                className="shimmer inline-flex h-12 items-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-semibold text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

// ─── Cinema Mode — fullscreen video overlay ─────────────────────────────────────
function CinemaMode({
  videoId,
  title,
  onClose,
}: {
  videoId: string
  title: string
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative mx-4 w-full max-w-[1100px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <span>Close</span>
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <p className="mt-4 text-center text-sm text-white/50">{title}</p>
      </motion.div>
    </motion.div>
  )
}
