import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You for Subscribing | AI GTM Hub by InsightsTap",
  description:
    "You're now part of the InsightsTap AI GTM Hub. Expect weekly GTM engineering frameworks, signal-led growth tactics, and real campaign breakdowns from the InsightsTap lab.",
  keywords:
    "InsightsTap Newsletter, AI GTM Hub, GTM Engineering, Signal-Led Growth, B2B GTM Tactics, Weekly GTM Playbook",
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
