"use client"

import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Product", href: "/Product/jobfeeder" },
    { label: "Contact", href: "/Contact" },
  ],
  services: [
    { label: "AI-powered GTM strategy", href: "/services/ai-powered-gtm-strategy" },
    { label: "Custom AI & agent app development", href: "/services/custom-ai-agent-app-development" },
    { label: "CRM, enrichment & automation", href: "/services/crm-enrichment-automation" },
    { label: "Performance marketing & ABM", href: "/services/performance-marketing-abm" },
  ],
  product: [
    { label: "JobFeeder", href: "/Product/jobfeeder" },
  ],
  quickLinks: [
    { label: "Privacy policy", href: "/legal/privacy-policy" },
    { label: "Refund policy", href: "/legal/refund-policy" },
    { label: "Terms and conditions", href: "/legal/terms-and-conditions" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] px-6 py-16 lg:py-20">
      <div className="mx-auto w-[min(92vw,1600px)]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1.5fr_2fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image src="/logo.png" alt="InsightsTap logo" width={32} height={32} className="rounded-full" />
              <span className="text-lg font-semibold tracking-tight text-[#0F172A]">
                InsightsTap
              </span>
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-[#64748B]">
              AI-powered GTM systems that grow your pipeline with precision and speed.
            </p>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=539+W+Commerce+St+%232588+Dallas+TX+75208+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 flex items-start gap-2 text-sm text-[#64748B] transition-colors hover:text-[#0dcfcf] group"
            >
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#0dcfcf]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" />
                <circle cx="12" cy="8" r="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="group-hover:text-[#0dcfcf] transition-colors">
                539 W Commerce St #2588,<br />Dallas, TX 75208, USA
              </span>
            </Link>
            {/* Social Icons */}
            <div className="flex gap-3">
              <SocialLink
                href="https://www.linkedin.com/company/105917233/"
                label="LinkedIn"
                icon={
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
              />
              <SocialLink
                href="https://x.com/InsightsTap"
                label="X"
                icon={
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                }
              />
              <SocialLink
                href="https://www.youtube.com/channel/UCCQNObwJ-jZFnnZDg_4ORTw"
                label="YouTube"
                icon={
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1E293B]">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] transition-colors hover:text-[#0dcfcf]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1E293B]">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] transition-colors hover:text-[#0dcfcf]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1E293B]">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] transition-colors hover:text-[#0dcfcf]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1E293B]">
              Quick links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] transition-colors hover:text-[#0dcfcf]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-[#E2E8F0] pt-8 text-center">
          <p className="text-sm text-[#94A3B8]">
            &copy; 2026 InsightsTap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E2E8F0] text-[#64748B] transition-all hover:border-[#0dcfcf]/50 hover:text-[#0dcfcf]"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}
