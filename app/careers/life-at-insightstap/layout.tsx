import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Life at InsightsTap | Culture, Team & Vibes",
  description:
    "Discover what it's like to work at InsightsTap. Sharp collaboration, impactful work, and a team obsessed with excellence. See our culture in action.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
