import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data"
import { ServicePageClient } from "./client"

interface PageProps {
  params: Promise<{ category: string; service: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: catSlug, service: svcSlug } = await params
  const result = getServiceBySlug(catSlug, svcSlug)
  if (!result) return {}

  return {
    title: result.service.seo.title,
    description: result.service.seo.meta,
    keywords: result.service.seo.keywords,
  }
}

export default async function SubServicePage({ params }: PageProps) {
  const { category: catSlug, service: svcSlug } = await params
  const result = getServiceBySlug(catSlug, svcSlug)

  if (!result) {
    notFound()
  }

  return (
    <ServicePageClient
      category={result.category}
      service={result.service}
    />
  )
}
