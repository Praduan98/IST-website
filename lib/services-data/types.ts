export interface ServiceMetric {
  value: string
  label: string
}

export interface ApproachItem {
  title: string
  description: string
  icon: string
}

export interface PhilosophyCard {
  frontTitle: string
  frontText: string
  backText: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface WorkflowStep {
  step: string
  title: string
  description: string
  /** Lucide icon name for the step node (optional — falls back to default rotation) */
  icon?: string
}

export interface SubService {
  title: string
  slug: string
  opening: string
  metrics: ServiceMetric[]
  approach: ApproachItem[]
  philosophy: PhilosophyCard[]
  workflow: WorkflowStep[]
  faqs: FAQ[]
  ctaTitle: string
  ctaDescription: string
  seo: {
    title: string
    meta: string
    keywords: string
  }
}

export interface ServiceCategory {
  title: string
  slug: string
  description: string
  sectionTitle: string
  sectionText: string
  whyTitle: string
  whyText: string
  services: SubService[]
  seo: {
    title: string
    meta: string
    keywords: string
  }
}
