"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const services = [
  {
    title: "AI-powered GTM strategy",
    slug: "ai-powered-gtm-strategy",
    href: "/services/ai-powered-gtm-strategy",
    items: [
      { label: "GTM strategy & consulting", slug: "gtm-strategy-consulting" },
      { label: "SaaS GTM execution", slug: "saas-gtm-execution" },
      { label: "Signal architecture design", slug: "signal-architecture-design" },
      { label: "DARK Loop™ intelligence system", slug: "dark-loop-intelligence-system" },
      { label: "SIGNAL Playbook™ GTM execution", slug: "signal-playbook-gtm-execution" },
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
  const servicesRef = useRef<HTMLDivElement>(null)
  const productRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const productCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

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

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsServicesOpen(true)
  }

  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full min-h-[60px] transition-all duration-500 ${
        isScrolled ? "h-16 bg-white/90 shadow-sm" : "h-20 bg-white/80"
      } max-w-[100vw] backdrop-blur-xl border-b border-[#E2E8F0] animate-[fadeSlideDown_0.4s_ease-out_both]`}
    >
      <nav className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {/* About */}
          <Link
            href="/about"
            className="group relative text-[0.938rem] font-medium text-[#64748B] transition-colors hover:text-[#0F172A]"
          >
            About
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#0dcfcf] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Services with mega dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button suppressHydrationWarning className="group relative flex items-center gap-1.5 text-[0.938rem] font-medium text-[#64748B] transition-colors hover:text-[#0F172A]">
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full mt-3 w-[min(700px,calc(100vw-4rem))] -translate-x-1/2 rounded-2xl border border-[#E2E8F0] bg-white shadow-xl shadow-black/8"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <div className="grid grid-cols-4 gap-0 p-6">
                    {services.map((service) => (
                      <div
                        key={service.title}
                        className="px-4"
                      >
                        <Link
                          href={service.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[#0dcfcf] hover:text-[#0a9a9a] transition-colors"
                        >
                          {service.title}
                        </Link>
                        <ul className="space-y-2">
                          {service.items.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`/services/${service.slug}/${item.slug}`}
                                onClick={() => setIsServicesOpen(false)}
                                className="block text-xs leading-snug text-[#64748B] transition-colors hover:text-[#0F172A]"
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

          {/* Product dropdown */}
          <div
            ref={productRef}
            className="relative"
            onMouseEnter={() => { if (productCloseTimer.current) clearTimeout(productCloseTimer.current); setIsProductOpen(true) }}
            onMouseLeave={() => { productCloseTimer.current = setTimeout(() => setIsProductOpen(false), 150) }}
          >
            <button suppressHydrationWarning className="group relative flex items-center gap-1.5 text-[0.938rem] font-medium text-[#64748B] transition-colors hover:text-[#0F172A]">
              Product
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isProductOpen ? "rotate-180" : ""}`} />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#0dcfcf] transition-all duration-300 group-hover:w-full" />
            </button>
            <AnimatePresence>
              {isProductOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full mt-3 w-44 -translate-x-1/2 rounded-xl border border-[#E2E8F0] bg-white shadow-xl shadow-black/8"
                  onMouseEnter={() => { if (productCloseTimer.current) clearTimeout(productCloseTimer.current); setIsProductOpen(true) }}
                  onMouseLeave={() => { productCloseTimer.current = setTimeout(() => setIsProductOpen(false), 150) }}
                >
                  <div className="p-2">
                    <Link
                      href="/Product/jobfeeder"
                      onClick={() => setIsProductOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#64748B] transition-colors hover:bg-[#F8FAFC] hover:text-[#0dcfcf]"
                    >
                      JobFeeder
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* News & Insights — direct link, no dropdown */}
          <Link
            href="/news-insights"
            className={`group relative text-[0.938rem] font-medium transition-colors hover:text-[#0F172A] ${
              pathname?.startsWith("/news-insights") ? "text-[#0F172A]" : "text-[#64748B]"
            }`}
          >
            News &amp; Insights
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#0dcfcf] transition-all duration-300 ${
              pathname?.startsWith("/news-insights") ? "w-full" : "w-0 group-hover:w-full"
            }`} />
          </Link>

          {/* Careers */}
          <Link
            href="/careers"
            className="group relative text-[0.938rem] font-medium text-[#64748B] transition-colors hover:text-[#0F172A]"
          >
            Career
          </Link>

          {/* Contact — pill CTA */}
          <Link
            href="/Contact"
            className="rounded-lg bg-[#0dcfcf] px-5 py-2 text-[0.938rem] font-semibold text-white transition-all hover:bg-[#0a9a9a] hover:shadow-sm hover:shadow-[#0dcfcf]/15"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 shadow-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-[#0F172A]" />
          ) : (
            <Menu className="h-5 w-5 text-[#0F172A]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
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
                      <div className="ml-4 mt-1 space-y-4 border-l-2 border-[#0dcfcf]/20 pl-4 pb-2">
                        {services.map((service) => (
                          <div key={service.title}>
                            <Link
                              href={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#0dcfcf] hover:text-[#0a9a9a] transition-colors"
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
                      <div className="ml-4 border-l-2 border-[#0dcfcf]/20 pl-4 pb-2 pt-1">
                        <Link
                          href="/Product/jobfeeder"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-1.5 text-sm text-[#64748B] hover:text-[#0dcfcf]"
                        >
                          JobFeeder
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* News & Insights — direct link, no sub-menu */}
              <Link
                href="/news-insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base sm:text-lg font-medium transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A] ${
                  pathname?.startsWith("/news-insights") ? "text-[#0dcfcf]" : "text-[#64748B]"
                }`}
              >
                News &amp; Insights
              </Link>

              {/* Careers */}
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
                className="mt-4 block rounded-lg bg-[#0dcfcf] px-4 py-3 text-center text-base sm:text-lg font-medium text-white transition-all hover:bg-[#0a9a9a]"
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
