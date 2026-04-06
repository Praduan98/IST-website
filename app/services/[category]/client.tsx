"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/services/service-hero"
import { CategoryServicesGrid } from "@/components/services/category-services-grid"
import { ProofSection } from "@/components/services/proof-section"
import { ServiceCTA } from "@/components/services/service-cta"
import { LogoTicker } from "@/components/logo-ticker"
import type { ServiceCategory } from "@/lib/services-data/types"

// Map category slugs to their brochure config
const BROCHURE_CONFIG: Record<string, { href: string; label: string }> = {
  "ai-powered-gtm-strategy": { href: "/services/ai-gtm-strategy/optin", label: "Download Company Profile" },
  "custom-ai-agent-app-development": { href: "/services/custom-ai-development/optin", label: "Download Brochure" },
  "crm-enrichment-automation": { href: "/services/crm-automation/optin", label: "Download Brochure" },
  "performance-marketing-abm": { href: "/services/performance-abm/optin", label: "Download Brochure" },
}

const DEFAULT_BROCHURE = { href: "/services/ai-gtm-strategy/optin", label: "Download Company Profile" }

export function CategoryPageClient({ category }: { category: ServiceCategory }) {
  const topMetrics = category.services
    .slice(0, 4)
    .map((s) => s.metrics[0])

  const { href: brochureHref, label: brochureLabel } =
    BROCHURE_CONFIG[category.slug] ?? DEFAULT_BROCHURE

  return (
    <>
      <Navigation />
      <main>
        <ServiceHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: category.title, href: `/services/${category.slug}` },
          ]}
          title={category.title}
          subtitle={category.description}
          brochureHref={brochureHref}
          brochureLabel={brochureLabel}
          variant="category"
        />

        {/* Description section — scroll animated + flow illustration */}
        <section className="bg-white px-6 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-[min(92vw,960px)] text-center"
          >
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
              {category.sectionTitle}
            </h2>
            <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
              {category.sectionText}
            </p>
          </motion.div>
        </section>

        <CategoryServicesGrid
          categorySlug={category.slug}
          services={category.services}
          title="What We Build"
          description="Every service below is designed to work together — or stand alone — depending on where your pipeline needs the most help."
        />

        <ProofSection metrics={topMetrics} title="Results That Matter" />

        {/* Why section — scroll animated */}
        <section className="bg-white px-6 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-[min(92vw,960px)] text-center"
          >
            <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
              WHY INSIGHTSTAP
            </span>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
              {category.whyTitle}
            </h2>
            <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
              {category.whyText}
            </p>
          </motion.div>
        </section>

        {/* Social Proof — Logo Marquee */}
        <LogoTicker />

        <ServiceCTA
          title="Ready to Get Started?"
          description="Tell us where your pipeline is stuck. We'll show you the signals you're missing."
          brochureHref={brochureHref}
          brochureLabel={brochureLabel}
        />
      </main>
      <Footer />
    </>
  )
}
