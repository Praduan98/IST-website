export type MotionDNA = "gtm" | "ai" | "crm" | "abm"

export function getMotionDNA(categorySlug: string): MotionDNA {
  switch (categorySlug) {
    case "ai-powered-gtm-strategy":
      return "gtm"
    case "custom-ai-agent-app-development":
      return "ai"
    case "crm-enrichment-automation":
      return "crm"
    case "performance-marketing-abm":
      return "abm"
    default:
      return "gtm"
  }
}

// Group-specific animation variants for cards/sections
export const motionVariants = {
  // GTM: Strategic connector animations — elements slide in from sides, connecting
  gtm: {
    card: {
      hidden: { opacity: 0, x: -30 },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
      }),
    },
    section: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
  },
  // AI: Staccato / processing — elements appear with a decoding flicker
  ai: {
    card: {
      hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
      visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
      }),
    },
    section: { initial: { opacity: 0, filter: "blur(4px)" }, animate: { opacity: 1, filter: "blur(0px)" } },
  },
  // CRM: Liquid / gliding — smooth glide from below with spring
  crm: {
    card: {
      hidden: { opacity: 0, y: 40 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15, delay: i * 0.08 },
      }),
    },
    section: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  },
  // ABM: Scaling / focus — elements scale up from center with a "lock-on" feel
  abm: {
    card: {
      hidden: { opacity: 0, scale: 0.85 },
      visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] },
      }),
    },
    section: { initial: { opacity: 0, scale: 0.97 }, animate: { opacity: 1, scale: 1 } },
  },
}
