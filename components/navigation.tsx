"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

// Service brief descriptions keyed by slug
const serviceBriefs: Record<string, { title: string; brief: string }> = {
  // AI-powered GTM strategy
  "gtm-strategy-consulting": {
    title: "GTM strategy & consulting",
    brief: "Strategic go-to-market planning that aligns your product positioning with buyer intent signals. We design frameworks that convert market opportunities into predictable revenue.",
  },
  "saas-gtm-execution": {
    title: "SaaS GTM execution",
    brief: "End-to-end execution of your SaaS go-to-market motions, from launch to scale. We operationalize every stage of your growth funnel with data-driven playbooks.",
  },
  "signal-architecture-design": {
    title: "Signal architecture design",
    brief: "Custom signal infrastructure that captures, scores, and routes buyer intent across your tech stack. Build the foundation for truly signal-driven pipeline generation.",
  },
  "dark-loop-intelligence-system": {
    title: "DARK Loop\u2122 intelligence system",
    brief: "Our proprietary intelligence system that surfaces hidden buying signals from the dark funnel. Gain visibility into anonymous engagement that traditional tools miss.",
  },
  "signal-playbook-gtm-execution": {
    title: "SIGNAL Playbook\u2122 GTM execution",
    brief: "Structured, signal-triggered playbooks that automate the right outreach at the right moment. Turn intent data into coordinated, multi-channel campaigns.",
  },
  "revenue-operations-alignment": {
    title: "Revenue operations alignment",
    brief: "Align your sales, marketing, and CS operations around a unified revenue engine. Eliminate handoff friction and create seamless pipeline flow.",
  },
  "gtm-stack-audit": {
    title: "GTM stack audit",
    brief: "A comprehensive audit of your existing go-to-market technology stack. We identify gaps, redundancies, and integration opportunities to maximize ROI.",
  },
  "dark-funnel-intelligence": {
    title: "Dark funnel intelligence",
    brief: "Uncover the anonymous research and engagement happening outside your tracked channels. Transform invisible buyer activity into actionable pipeline opportunities.",
  },
  // Custom AI & agent app development
  "custom-gpt-applications": {
    title: "Custom GPT applications",
    brief: "Purpose-built GPT applications tailored to your business workflows and data. From internal tools to customer-facing products, we build AI that delivers real value.",
  },
  "ai-chatbots-agents": {
    title: "AI chatbots & agents",
    brief: "Intelligent conversational agents that handle complex interactions across your sales and support channels. Deploy AI that understands context and drives meaningful outcomes.",
  },
  "ai-voice-assistants": {
    title: "AI voice assistants",
    brief: "Voice-enabled AI assistants that automate calls, qualify leads, and support customers naturally. Build voice experiences that scale your team without scaling headcount.",
  },
  "autonomous-browser-agents": {
    title: "Autonomous & browser agents",
    brief: "Self-directed AI agents that navigate the web, gather data, and execute multi-step workflows autonomously. Automate the research and operations your team does manually.",
  },
  "ai-saas-development": {
    title: "AI SaaS development",
    brief: "Full-stack development of AI-powered SaaS products, from MVP to scale. We build intelligent software platforms that create lasting competitive advantage.",
  },
  "enterprise-ai-integrations": {
    title: "Enterprise AI integrations",
    brief: "Seamlessly embed AI capabilities into your existing enterprise systems and workflows. Connect models to your CRM, ERP, and data infrastructure for immediate impact.",
  },
  "ai-systems-integration": {
    title: "AI systems integration",
    brief: "End-to-end integration of AI services across your technology ecosystem. We ensure your AI tools work together as a unified, intelligent system.",
  },
  // CRM, enrichment & automation
  "hubspot-services": {
    title: "HubSpot services",
    brief: "Expert HubSpot implementation, customization, and optimization for your revenue operations. Maximize your CRM investment with workflows built for your specific growth stage.",
  },
  "clay-services": {
    title: "Clay services",
    brief: "Automated data enrichment and outbound workflows powered by Clay's waterfall enrichment engine. Build personalized, signal-driven sequences at scale.",
  },
  "apollo-services": {
    title: "Apollo.io services",
    brief: "Configure and optimize Apollo.io for prospecting, sequencing, and pipeline intelligence. We build the workflows that turn contact data into qualified conversations.",
  },
  "rb2b-services": {
    title: "RB2B services",
    brief: "Identify anonymous website visitors and convert them into qualified leads with RB2B. We integrate visitor intelligence directly into your outbound workflows.",
  },
  "6sense-services": {
    title: "6sense services",
    brief: "Harness 6sense's predictive intelligence to prioritize accounts showing real buying intent. We configure the platform to surface your highest-value opportunities.",
  },
  // Performance marketing & ABM
  "performance-ads-management": {
    title: "Performance ads management",
    brief: "Data-driven ad management across search, social, and programmatic channels. We optimize every dollar toward pipeline impact, not vanity metrics.",
  },
  "bridge-ads-development": {
    title: "Bridge ads development",
    brief: "Custom bridge ad experiences that connect campaign clicks to personalized landing journeys. Increase conversion rates by meeting prospects exactly where they are.",
  },
  "signal-led-abm-campaigns": {
    title: "Signal-led ABM campaigns",
    brief: "Account-based campaigns triggered by real-time buying signals and intent data. Reach decision-makers at the exact moment they are researching solutions like yours.",
  },
  "signal-led-media-strategy": {
    title: "Signal-led media strategy",
    brief: "Media planning and buying informed by intent signals and account-level engagement data. Allocate budget where active buyers are paying attention.",
  },
  "conversion-optimization": {
    title: "Conversion optimization",
    brief: "Systematic testing and optimization of your conversion funnel from ad click to closed deal. We identify and eliminate the friction points costing you pipeline.",
  },
  "crm-ads-integration": {
    title: "CRM & ads integration",
    brief: "Connect your ad platforms directly to your CRM for closed-loop attribution and audience targeting. Build feedback loops that make every campaign smarter than the last.",
  },
}

const defaultPreview = {
  title: "AI-powered systems built for revenue growth",
  brief: "From signal-driven GTM strategies to autonomous AI agents, we build the infrastructure that turns intent into pipeline.",
}

const services = [
  {
    title: "AI-powered GTM strategy",
    slug: "ai-powered-gtm-strategy",
    href: "/services/ai-powered-gtm-strategy",
    items: [
      { label: "GTM strategy & consulting", slug: "gtm-strategy-consulting" },
      { label: "SaaS GTM execution", slug: "saas-gtm-execution" },
      { label: "Signal architecture design", slug: "signal-architecture-design" },
      { label: "DARK Loop\u2122 intelligence system", slug: "dark-loop-intelligence-system" },
      { label: "SIGNAL Playbook\u2122 GTM execution", slug: "signal-playbook-gtm-execution" },
      { label: "Revenue operations alignment", slug: "revenue-operations-alignment" },
      { label: "GTM stack audit", slug: "gtm-stack-audit" },
      { label: "Dark funnel intelligence", slug: "dark-funnel-intelligence" },
    ],
  },
  {
    title: "Custom AI & agent app development",
    slug: "custom-ai-agent-app-development",
    href: "/services/custom-ai-agent-app-development",
    items: [
      { label: "Custom GPT applications", slug: "custom-gpt-applications" },
      { label: "AI chatbots & agents", slug: "ai-chatbots-agents" },
      { label: "AI voice assistants", slug: "ai-voice-assistants" },
      { label: "Autonomous & browser agents", slug: "autonomous-browser-agents" },
      { label: "AI SaaS development", slug: "ai-saas-development" },
      { label: "Enterprise AI integrations", slug: "enterprise-ai-integrations" },
      { label: "AI systems integration", slug: "ai-systems-integration" },
    ],
  },
  {
    title: "CRM, enrichment & automation",
    slug: "crm-enrichment-automation",
    href: "/services/crm-enrichment-automation",
    items: [
      { label: "HubSpot services", slug: "hubspot-services" },
      { label: "Clay services", slug: "clay-services" },
      { label: "Apollo.io services", slug: "apollo-services" },
      { label: "RB2B services", slug: "rb2b-services" },
      { label: "6sense services", slug: "6sense-services" },
    ],
  },
  {
    title: "Performance marketing & ABM",
    slug: "performance-marketing-abm",
    href: "/services/performance-marketing-abm",
    items: [
      { label: "Performance ads management", slug: "performance-ads-management" },
      { label: "Bridge ads development", slug: "bridge-ads-development" },
      { label: "Signal-led ABM campaigns", slug: "signal-led-abm-campaigns" },
      { label: "Signal-led media strategy", slug: "signal-led-media-strategy" },
      { label: "Conversion optimization", slug: "conversion-optimization" },
      { label: "CRM & ads integration", slug: "crm-ads-integration" },
    ],
  },
]


export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false)
  const [hoveredService, setHoveredService] = useState<{ title: string; brief: string } | null>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const productRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const productCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activePreview = hoveredService || defaultPreview

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  // Close mega-menus on route change
  useEffect(() => {
    setIsServicesOpen(false)
    setIsProductOpen(false)
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Reset preview when menu closes
  useEffect(() => {
    if (!isServicesOpen) setHoveredService(null)
  }, [isServicesOpen])

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsProductOpen(false)
    setIsServicesOpen(true)
  }

  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 150)
  }

  const handleProductEnter = () => {
    if (productCloseTimer.current) clearTimeout(productCloseTimer.current)
    setIsServicesOpen(false)
    setIsProductOpen(true)
  }

  const handleProductLeave = () => {
    productCloseTimer.current = setTimeout(() => setIsProductOpen(false), 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "h-16 bg-white/90 shadow-sm" : "h-20 bg-white/80"
      } max-w-[100vw] backdrop-blur-xl border-b border-[#E2E8F0] animate-[fadeSlideDown_0.4s_ease-out_both]`}
    >
      <nav className="mx-auto grid h-full w-full max-w-[1600px] grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 lg:px-8">
        {/* Logo - far left */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="InsightsTap Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-[#0F172A]">
            InsightsTap
          </span>
        </Link>

        {/* Desktop Navigation - centered */}
        <div className="hidden items-center justify-center gap-10 md:flex">
          {/* About */}
          <Link
            href="/about"
            className="group relative text-[0.938rem] font-medium text-[#64748B] transition-colors hover:text-[#0F172A]"
          >
            About
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#0DCFCF] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Services with full-width mega-menu */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              suppressHydrationWarning
              className={`group relative flex items-center gap-1.5 text-[0.938rem] font-medium transition-colors hover:text-[#0F172A] ${
                isServicesOpen ? "text-[#0F172A]" : "text-[#64748B]"
              }`}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              />
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#0DCFCF] transition-all duration-300 ${
                isServicesOpen ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
          </div>

          {/* Product dropdown */}
          <div
            ref={productRef}
            className="relative"
            onMouseEnter={handleProductEnter}
            onMouseLeave={handleProductLeave}
          >
            <button
              suppressHydrationWarning
              className={`group relative flex items-center gap-1.5 text-[0.938rem] font-medium transition-colors hover:text-[#0F172A] ${
                isProductOpen ? "text-[#0F172A]" : "text-[#64748B]"
              }`}
            >
              Product
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isProductOpen ? "rotate-180" : ""}`}
              />
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#0DCFCF] transition-all duration-300 ${
                isProductOpen ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
          </div>

          {/* News & Insights */}
          <Link
            href="/news-insights"
            className={`group relative text-[0.938rem] font-medium transition-colors hover:text-[#0F172A] ${
              pathname?.startsWith("/news-insights") ? "text-[#0F172A]" : "text-[#64748B]"
            }`}
          >
            News &amp; Insights
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#0DCFCF] transition-all duration-300 ${
              pathname?.startsWith("/news-insights") ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>

          {/* Career */}
          <Link
            href="/careers"
            className={`group relative text-[0.938rem] font-medium transition-colors hover:text-[#0F172A] ${
              pathname?.startsWith("/careers") ? "text-[#0F172A]" : "text-[#64748B]"
            }`}
          >
            Career
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#0DCFCF] transition-all duration-300 ${
              pathname?.startsWith("/careers") ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>
        </div>

        {/* Contact CTA - far right (desktop) + mobile hamburger */}
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/Contact"
            className="hidden rounded-lg bg-[#0DCFCF] px-5 py-2 text-[0.938rem] font-semibold text-white transition-all hover:bg-[#0ab8b8] hover:shadow-lg hover:shadow-[#0DCFCF]/20 md:block"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#0DCFCF]/30 bg-[#0DCFCF]/10 shadow-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-[#0F172A]" />
            ) : (
              <Menu className="h-5 w-5 text-[#0F172A]" />
            )}
          </button>
        </div>
      </nav>

      {/* ─── Full-width Services mega-menu ─── */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full z-40 hidden md:block"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            {/* Glassmorphic pane */}
            <div
              className="relative overflow-hidden border-b border-[#E2E8F0]"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0px 10px 40px -10px rgba(0, 201, 177, 0.3)",
              }}
            >
              {/* Atmospheric: Infrastructure grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,201,177,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,177,0.4) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Atmospheric: Ambient orbs */}
              <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#0DCFCF]/[0.06] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 right-1/4 h-48 w-48 rounded-full bg-[#0DCFCF]/[0.04] blur-3xl" />
              <div className="pointer-events-none absolute top-1/3 right-10 h-32 w-32 rounded-full bg-[#0DCFCF]/[0.05] blur-2xl" />

              {/* Content */}
              <div className="relative mx-auto flex w-full max-w-[1600px] gap-0 px-6 py-10 lg:px-8">
                {/* Column 1: Dynamic preview panel */}
                <div className="flex w-[280px] shrink-0 flex-col justify-between border-r border-[#E2E8F0]/60 pr-8">
                  <div className="min-h-[180px]">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0DCFCF]">
                      {hoveredService ? "Service preview" : "Explore our services"}
                    </p>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePreview.title}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                      >
                        <h3 className="mb-3 text-lg font-semibold leading-tight text-[#0F172A]">
                          {activePreview.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#64748B]">
                          {activePreview.brief}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Columns 2-5: Service link grid */}
                <div className="grid flex-1 grid-cols-4 gap-0">
                  {services.map((service, idx) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.04 }}
                      className="px-8"
                    >
                      <Link
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="group mb-4 block text-[0.8125rem] font-semibold text-[#0DCFCF] transition-colors hover:text-[#0ab8b8]"
                      >
                        {service.title}
                        <span className="ml-1 inline-block opacity-0 transition-all group-hover:ml-2 group-hover:opacity-100">
                          &rarr;
                        </span>
                      </Link>
                      <ul className="space-y-2.5">
                        {service.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/services/${service.slug}/${item.slug}`}
                              onClick={() => setIsServicesOpen(false)}
                              onMouseEnter={() => {
                                const brief = serviceBriefs[item.slug]
                                if (brief) setHoveredService(brief)
                              }}
                              onMouseLeave={() => setHoveredService(null)}
                              className="block text-[0.8125rem] leading-snug text-[#475569] transition-colors hover:text-[#0F172A]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Full-width Product mega-menu ─── */}
      <AnimatePresence>
        {isProductOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full z-40 hidden md:block"
            onMouseEnter={handleProductEnter}
            onMouseLeave={handleProductLeave}
          >
            <div
              className="relative overflow-hidden border-b border-[#E2E8F0]"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0px 10px 40px -10px rgba(0, 201, 177, 0.3)",
              }}
            >
              {/* Atmospheric: Infrastructure grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,201,177,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,177,0.4) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Ambient orbs */}
              <div className="pointer-events-none absolute -top-16 left-1/3 h-48 w-48 rounded-full bg-[#0DCFCF]/[0.05] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 right-1/3 h-40 w-40 rounded-full bg-[#0DCFCF]/[0.04] blur-3xl" />

              {/* Content */}
              <div className="relative mx-auto flex w-full max-w-[1600px] items-start gap-0 px-6 py-10 lg:px-8">
                {/* Featured column */}
                <div className="flex w-[280px] shrink-0 flex-col border-r border-[#E2E8F0]/60 pr-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0DCFCF]">
                    Our products
                  </p>
                  <h3 className="mb-3 text-xl font-semibold leading-tight text-[#0F172A]">
                    Tools that accelerate your growth
                  </h3>
                  <p className="text-sm leading-relaxed text-[#64748B]">
                    Purpose-built products designed to give your revenue team an unfair advantage.
                  </p>
                </div>

                {/* Product card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.04 }}
                  className="px-8"
                >
                  <Link
                    href="/Product/jobfeeder"
                    onClick={() => setIsProductOpen(false)}
                    className="group block rounded-xl border border-[#E2E8F0] p-6 transition-all hover:border-[#0DCFCF]/30 hover:shadow-md hover:shadow-[#0DCFCF]/10"
                    style={{ maxWidth: "340px" }}
                  >
                    <p className="mb-2 text-[0.8125rem] font-semibold text-[#0DCFCF] transition-colors group-hover:text-[#0ab8b8]">
                      JobFeeder
                    </p>
                    <p className="mb-4 text-sm leading-relaxed text-[#64748B]">
                      Real-time hiring signal intelligence that identifies companies actively building teams in your target market.
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0DCFCF] transition-colors group-hover:text-[#0ab8b8]">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            data-lenis-prevent
            className="fixed right-0 top-[4.5rem] h-[calc(100vh-4rem)] w-full overflow-y-auto overscroll-contain bg-white/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {/* About */}
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base sm:text-lg font-medium text-[#64748B] transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A]"
              >
                About
              </Link>

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base sm:text-lg font-medium text-[#64748B] transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 space-y-4 border-l-2 border-[#0DCFCF]/20 pl-4 pb-2">
                        {services.map((service) => (
                          <div key={service.title}>
                            <Link
                              href={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="mb-1.5 block text-xs font-semibold text-[#0DCFCF] hover:text-[#0ab8b8] transition-colors"
                            >
                              {service.title}
                            </Link>
                            <ul className="space-y-1.5">
                              {service.items.map((item) => (
                                <li key={item.slug}>
                                  <Link
                                    href={`/services/${service.slug}/${item.slug}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-sm text-[#64748B] hover:text-[#0F172A]"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Product accordion */}
              <div>
                <button
                  onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base sm:text-lg font-medium text-[#64748B] transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                >
                  Product
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileProductOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isMobileProductOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 border-l-2 border-[#0DCFCF]/20 pl-4 pb-2 pt-1">
                        <Link
                          href="/Product/jobfeeder"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1.5 text-sm text-[#64748B] hover:text-[#0DCFCF]"
                        >
                          JobFeeder
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* News & Insights */}
              <Link
                href="/news-insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base sm:text-lg font-medium transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A] ${
                  pathname?.startsWith("/news-insights") ? "text-[#0DCFCF]" : "text-[#64748B]"
                }`}
              >
                News &amp; Insights
              </Link>

              {/* Career */}
              <Link
                href="/careers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base sm:text-lg font-medium text-[#64748B] transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A]"
              >
                Career
              </Link>

              {/* Contact */}
              <Link
                href="/Contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 block rounded-lg bg-[#0DCFCF] px-4 py-3 text-center text-base sm:text-lg font-medium text-white transition-all hover:bg-[#0ab8b8]"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
