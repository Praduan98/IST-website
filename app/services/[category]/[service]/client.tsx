"use client"

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
    title: "Messy CRM vs. Revenue Engine",
    beforeTitle: "Before: CRM Chaos",
    afterTitle: "After: HubSpot Optimized",
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
    title: "Manual Prospecting vs. Waterfall Enrichment",
    beforeTitle: "Before: Manual Research",
    afterTitle: "After: Clay Enrichment",
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
    title: "Cold Blasting vs. Signal-Led Outbound",
    beforeTitle: "Before: Spray & Pray",
    afterTitle: "After: Apollo Precision",
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
    title: "Anonymous Traffic vs. Identified Pipeline",
    beforeTitle: "Before: Invisible Visitors",
    afterTitle: "After: RB2B Identification",
    before: [
      "98% of website visitors leave without a trace",
      "Only form-fillers make it into your CRM",
      "No idea who is reading your pricing page",
      "Sales follows up days after the visit — if at all",
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
    title: "Guessing vs. Predictive Intelligence",
    beforeTitle: "Before: Guesswork",
    afterTitle: "After: 6sense Precision",
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
      "Engaging buyers during research — before competitors",
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
          subtitle={service.opening}
          showCTA={false}
          variant="service"
        />

        {/* III. Proof of Concept — Metrics */}
        <ProofSection
          metrics={service.metrics}
          title="The Numbers Speak"
          description="Real impact, measured by the metrics that matter."
        />

        {/* II. Deep Dive — The "What" and "How" */}
        <DeepDive
          title={`Our Approach to ${service.title}`}
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

        {/* IV. Workflow Timeline — The "How It Works" */}
        <WorkflowTimeline
          steps={service.workflow}
          title="Strategy & Execution"
          description="From audit to activation — here's how we deliver results."
        />

        {/* Social Proof — Logo Marquee */}
        <LogoTicker />

        {/* FAQ */}
        <ServiceFAQ faqs={service.faqs} />

        {/* V. Final CTA */}
        <ServiceCTA title={service.ctaTitle} description={service.ctaDescription} />
      </main>
      <Footer />
    </>
  )
}
