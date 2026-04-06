import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { VideoSection } from "@/components/video-section"
import { LogoTicker } from "@/components/logo-ticker"
import { ValueProposition } from "@/components/value-proposition"
import { HowItWorks } from "@/components/how-it-works"
import { ServicesSection } from "@/components/services-section"
import { InteractiveStats } from "@/components/interactive-stats"
import { CaseStudies } from "@/components/case-studies"
import { TechStack } from "@/components/tech-stack"
import { FounderSection } from "@/components/founder-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { FAQSection } from "@/components/faq-section"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <VideoSection />
        <LogoTicker />
        <ValueProposition />
        <HowItWorks />
        <ServicesSection />
        <InteractiveStats />
        <CaseStudies />
        <TechStack />
        <FounderSection />
        <NewsletterSection />
        <FAQSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
