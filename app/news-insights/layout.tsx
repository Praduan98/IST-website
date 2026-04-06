import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "News & Resources | GTM Webinars, Articles & B2B Growth Intelligence by InsightsTap",
  description:
    "The latest from InsightsTap — company updates, GTM engineering webinar replays, signal-led growth articles, and B2B revenue strategies from Ritesh Osta and the InsightsTap team.",
  keywords:
    "InsightsTap News, GTM Engineering Webinars, B2B GTM Intelligence, Signal-Led Growth, Dark Funnel Intelligence, AI Agents B2B, GTM Webinar Series, Ritesh Osta Articles, B2B Revenue Systems",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
