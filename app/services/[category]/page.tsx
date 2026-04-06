import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { serviceCategories, getCategoryBySlug, getAllCategorySlugs } from "@/lib/services-data"
import { CategoryPageClient } from "./client"

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}

  return {
    title: category.seo.title,
    description: category.seo.meta,
    keywords: category.seo.keywords,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  return <CategoryPageClient category={category} />
}
