import { ServiceCategory, SubService } from "./types"
import { gtmStrategy } from "./gtm-strategy"
import { aiDevelopment } from "./ai-development"
import { crmAutomation } from "./crm-automation"
import { performanceMarketing } from "./performance-marketing"

export type { ServiceCategory, SubService, ServiceMetric, ApproachItem, PhilosophyCard, FAQ, WorkflowStep } from "./types"

export const serviceCategories: ServiceCategory[] = [
  gtmStrategy,
  aiDevelopment,
  crmAutomation,
  performanceMarketing,
]

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug)
}

export function getServiceBySlug(
  categorySlug: string,
  serviceSlug: string
): { category: ServiceCategory; service: SubService } | undefined {
  const category = getCategoryBySlug(categorySlug)
  if (!category) return undefined
  const service = category.services.find((s) => s.slug === serviceSlug)
  if (!service) return undefined
  return { category, service }
}

export function getAllCategorySlugs(): string[] {
  return serviceCategories.map((c) => c.slug)
}

export function getAllServiceSlugs(): { category: string; service: string }[] {
  return serviceCategories.flatMap((c) =>
    c.services.map((s) => ({ category: c.slug, service: s.slug }))
  )
}
