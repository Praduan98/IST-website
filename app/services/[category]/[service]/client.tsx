"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/services/service-hero"
import { DeepDive } from "@/components/services/deep-dive"
import { ProofSection } from "@/components/services/proof-section"
import { PhilosophySection } from "@/components/services/philosophy-section"
import { WorkflowTimeline } from "@/components/services/workflow-timeline"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ServiceCTA } from "@/components/services/service-cta"
import { LogoTicker } from "@/components/logo-ticker"
import { BeforeAfterSlider } from "@/components/services/motion/before-after-slider"
import { getMotionDNA } from "@/components/services/motion/motion-config"
import type { ServiceCategory, SubService } from "@/lib/services-data/types"

function linkDarkFunnel(text: string) {
  if (!text.includes("dark funnel")) return text
  const [before, after] = text.split("dark funnel")
  return <>{before}<Link href="/#problem-section" className="font-semibold text-[#0dcfcf] hover:underline">dark funnel</Link>{after}</>
}

function gradientLastWord(text: string) {
  const lastSpace = text.lastIndexOf(" ")
  if (lastSpace === -1) return <span className="gradient-text">{text}</span>
  return <>{text.slice(0, lastSpace)}{" "}<span className="gradient-text">{text.slice(lastSpace + 1)}</span></>
}

interface ServicePageClientProps {
  category: ServiceCategory
  service: SubService
}

// Per-CRM-service before/after comparison content
const CRM_SLIDER_DATA: Record<string, {
  title: string
  beforeTitle: string
  afterTitle: string
  before: string[]
  after: string[]
}> = {
  "hubspot-services": {
    title: "Messy CRM vs. revenue engine",
    beforeTitle: "Before: CRM chaos",
    afterTitle: "After: HubSpot optimized",
    before: [
      "Reps logging activities in spreadsheets",
      "Leads sitting in a queue for days",
      "Duplicate contacts with conflicting data",
      "Pipelines nobody trusts for forecasting",
      "Reports built manually every Monday morning",
      "Workflows that break at every handoff",
    ],
    after: [
      "Every activity auto-logged in HubSpot",
      "Leads routed to the right rep in under 60 seconds",
      "Deduplicated, validated contact records",
      "Pipeline stages with automated progression rules",
      "Real-time dashboards leadership trusts",
      "End-to-end workflows from MQL to closed-won",
    ],
  },
  "clay-services": {
    title: "Manual prospecting vs. waterfall enrichment",
    beforeTitle: "Before: manual research",
    afterTitle: "After: Clay enrichment",
    before: [
      "SDRs spending 2 hours per prospect on research",
      "One data provider with 40% coverage gaps",
      "Stale contact data from last quarter's list buy",
      "No company context beyond name and industry",
      "Enrichment runs in weekly batch jobs",
      "Outreach sent with generic, unresearched messaging",
    ],
    after: [
      "50+ providers waterfalled for 85%+ coverage",
      "AI columns auto-summarizing company news & tech stack",
      "Real-time enrichment triggered by signals",
      "ICP scoring applied automatically to every lead",
      "Enriched data pushed directly into CRM and sequences",
      "Personalized outreach powered by rich context",
    ],
  },
  "apollo-services": {
    title: "Cold blasting vs. signal-led outbound",
    beforeTitle: "Before: spray & pray",
    afterTitle: "After: Apollo precision",
    before: [
      "Blasting 5,000 emails with 1% reply rate",
      "No domain warming or deliverability strategy",
      "Same generic template for every prospect",
      "Leads from a purchased list with no intent signal",
      "No visibility into which sequences drive pipeline",
      "CRM and outreach completely disconnected",
    ],
    after: [
      "Targeted lists with 500 high-fit contacts",
      "Domain warmed, authenticated, and monitored",
      "Signal-triggered sequences with personal context",
      "Intent data prioritizing in-market accounts",
      "Full attribution from email to closed-won",
      "Bidirectional CRM sync with every touchpoint tracked",
    ],
  },
  "rb2b-services": {
    title: "Anonymous traffic vs. identified pipeline",
    beforeTitle: "Before: invisible visitors",
    afterTitle: "After: RB2B identification",
    before: [
      "98% of website visitors leave without a trace",
      "Only form-fillers make it into your CRM",
      "No idea who is reading your pricing page",
      "Sales follows up days after the visit, if at all",
      "Marketing spends on traffic with no conversion path",
      "High-intent visitors lost to competitor follow-up",
    ],
    after: [
      "Person-level identification on 40% of US traffic",
      "Name, title, email, and LinkedIn delivered instantly",
      "Real-time Slack alerts for high-value page visits",
      "Automated outreach within minutes of visit",
      "Visitors scored by page, time on site, and ICP fit",
      "Every identified visitor enriched and routed to CRM",
    ],
  },
  "6sense-services": {
    title: "Guessing vs. predictive intelligence",
    beforeTitle: "Before: guesswork",
    afterTitle: "After: 6sense precision",
    before: [
      "Targeting your entire TAM with the same message",
      "No visibility into which accounts are in-market",
      "Ad budget spread thin across cold audiences",
      "Sales calling accounts with zero buying intent",
      "Marketing and sales arguing over lead quality",
      "Competitors engaging your buyers before you do",
    ],
    after: [
      "Dynamic segments by buying stage and intent topic",
      "85% prediction accuracy on in-market accounts",
      "Ad spend concentrated on Decision-stage accounts",
      "Sales prioritizing accounts with surging intent",
      "Unified view of account journey across all channels",
      "Engaging buyers during research, before competitors",
    ],
  },
}

export function ServicePageClient({ category, service }: ServicePageClientProps) {
  const motionDNA = getMotionDNA(category.slug)

  return (
    <>
      <Navigation />
      <main>
        {/* I. Dynamic Header */}
        <ServiceHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: category.title, href: `/services/${category.slug}` },
            { label: service.title, href: `/services/${category.slug}/${service.slug}` },
          ]}
          title={service.title}
          subtitle={linkDarkFunnel(service.opening)}
          showCTA={false}
          variant="service"
        />

        {/* III. Proof of concept, metrics */}
        <ProofSection
          metrics={service.metrics}
          title={gradientLastWord("The numbers speak")}
          description="Real impact, measured by the metrics that matter."
        />

        {/* II. Deep dive, the "what" and "how" */}
        <DeepDive
          title={gradientLastWord(`Our approach to ${service.title}`)}
          items={service.approach}
          motionDNA={motionDNA}
        />

        {/* CRM group: Per-service Before/After comparison slider */}
        {motionDNA === "crm" && CRM_SLIDER_DATA[service.slug] && (
          <BeforeAfterSlider
            title={CRM_SLIDER_DATA[service.slug].title}
            beforeTitle={CRM_SLIDER_DATA[service.slug].beforeTitle}
            afterTitle={CRM_SLIDER_DATA[service.slug].afterTitle}
            beforeItems={CRM_SLIDER_DATA[service.slug].before}
            afterItems={CRM_SLIDER_DATA[service.slug].after}
          />
        )}

        {/* Philosophy flip cards */}
        <PhilosophySection cards={service.philosophy} />

        {/* IV. Workflow timeline, the "how it works" */}
        <WorkflowTimeline
          steps={service.workflow}
          title={gradientLastWord("Strategy & execution")}
          description="From audit to activation, here's how we deliver results."
        />

        {/* Social proof, logo marquee */}
        <LogoTicker />

        {/* FAQ */}
        <ServiceFAQ faqs={service.faqs} />

        {/* V. Final CTA */}
        <ServiceCTA title={gradientLastWord(service.ctaTitle)} description={linkDarkFunnel(service.ctaDescription)} showBrochure={false} />
      </main>
      <Footer />
    </>
  )
}
