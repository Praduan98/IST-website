"use client"

import { motion } from "framer-motion"

// ─── Tool icons with brand colors ───────────────────────────────────────────────
// Official SVG paths from Simple Icons where available.
// For brands without simple-icons coverage, `domain` is set and we render the
// logo via Clearbit's free logo CDN (https://logo.clearbit.com/<domain>) which
// serves the official brand mark as an image.
const TOOLS: Record<string, { color: string; icon?: React.ReactNode; domain?: string }> = {
  // --- Signals & Intent ---
  // JobFeeder — keep custom briefcase icon (in-house product)
  JobFeeder:      { color: "#FF6B35", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/></svg> },
  // RB2B — official brand logo via Clearbit
  RB2B:           { color: "#6366F1", domain: "rb2b.com" },
  // Factors.ai — official brand logo via Clearbit
  "Factors.ai":   { color: "#00D4AA", domain: "factors.ai" },
  // Common Room — official brand logo via Clearbit
  "Common Room":  { color: "#FF5C35", domain: "commonroom.io" },
  // Vector — official brand logo via Clearbit
  Vector:         { color: "#7C3AED", domain: "vector.co" },
  // Unify — official brand logo via Clearbit
  Unify:          { color: "#4F46E5", domain: "unifygtm.com" },

  // --- AI Agents & LLMs ---
  // ChatGPT / OpenAI — official brand logo via unavatar
  ChatGPT:        { color: "#10A37F", domain: "openai.com" },
  // Claude — official Claude brand logo via claude.ai
  Claude:         { color: "#D97706", domain: "claude.ai" },
  // RelevanceAI — official brand logo via unavatar
  RelevanceAI:    { color: "#8B5CF6", domain: "relevanceai.com" },
  // Perplexity — official brand logo via unavatar
  Perplexity:     { color: "#20B2AA", domain: "perplexity.ai" },

  // --- Prospecting & Enrichment ---
  // Apollo.io — official brand logo via unavatar
  Apollo:         { color: "#4F46E5", domain: "apollo.io" },
  // Clay — official brand logo via unavatar
  Clay:           { color: "#58C4F7", domain: "clay.com" },
  // FullEnrich — official brand logo via unavatar
  FullEnrich:     { color: "#CCBF00", domain: "fullenrich.com" },
  // Ocean.io — official brand logo via unavatar
  "Ocean.io":     { color: "#3B82F6", domain: "ocean.io" },
  // Sales Navigator / LinkedIn — official brand logo via unavatar
  "Sales Navigator": { color: "#0A66C2", domain: "linkedin.com" },

  // --- Sequencing & Outreach ---
  // Instantly — official brand logo via Clearbit
  Instantly:      { color: "#3B82F6", domain: "instantly.ai" },
  // Smartlead — official brand logo via Clearbit
  Smartlead:      { color: "#10B981", domain: "smartlead.ai" },
  // Lemlist — official brand logo via Clearbit
  Lemlist:        { color: "#9333EA", domain: "lemlist.com" },
  // Reply.io — official brand logo via Clearbit
  "Reply.io":     { color: "#2563EB", domain: "reply.io" },

  // --- Automation & Operations ---
  // n8n — official brand logo via unavatar
  n8n:            { color: "#EA4B71", domain: "n8n.io" },
  // HubSpot — official brand logo via unavatar
  HubSpot:        { color: "#FF7A59", domain: "hubspot.com" },
  // Airtable — official brand logo via unavatar
  Airtable:       { color: "#18BFFF", domain: "airtable.com" },
  // Make — official brand logo via unavatar
  Make:           { color: "#6D29D9", domain: "make.com" },
  // Notion — official brand logo via unavatar
  Notion:         { color: "#000000", domain: "notion.so" },

  // --- Content & Collateral ---
  // Figma — official brand logo via unavatar
  Figma:          { color: "#F24E1E", domain: "figma.com" },
  // Canva — official brand logo via unavatar
  Canva:          { color: "#00C4CC", domain: "canva.com" },
  // Miro — official brand logo via unavatar
  Miro:           { color: "#FFD02F", domain: "miro.com" },
  // Qwilr — official brand logo via Clearbit
  Qwilr:          { color: "#00B8D9", domain: "qwilr.com" },
  // Loom — official brand logo via unavatar
  Loom:           { color: "#625DF5", domain: "loom.com" },
}

// ─── Cluster data — 6 categories ────────────────────────────────────────────────
const CLUSTERS = [
  { label: "Signals & intent",         tools: ["JobFeeder", "RB2B", "Factors.ai", "Common Room", "Vector", "Unify"] },
  { label: "AI agents & LLMs",         tools: ["ChatGPT", "Claude", "RelevanceAI", "Perplexity"] },
  { label: "Prospecting & enrichment", tools: ["Apollo", "Clay", "FullEnrich", "Ocean.io", "Sales Navigator"] },
  { label: "Sequencing & outreach",    tools: ["Instantly", "Smartlead", "Lemlist", "Unify", "Reply.io"] },
  { label: "Automation & operations",  tools: ["n8n", "HubSpot", "Airtable", "Make", "Notion"] },
  { label: "Content & collateral",     tools: ["Figma", "Canva", "Miro", "Qwilr", "Loom"] },
]

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ─── Main component ─────────────────────────────────────────────────────────────
export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative bg-[#0a0e1a] px-6"
      style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
    >
      {/* Background grid */}
      <div className="dot-grid absolute inset-0 opacity-20" />

      {/* Orbs */}
      <div
        className="glow-orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 700, height: 700, backgroundColor: "rgba(13,207,207,0.06)", filter: "blur(150px)" }}
      />
      <div
        className="glow-orb absolute left-[15%] top-[30%] rounded-full"
        style={{ width: 400, height: 400, backgroundColor: "rgba(13,207,207,0.04)", filter: "blur(120px)", animationDelay: "-4s" }}
      />
      <div
        className="glow-orb absolute right-[15%] top-[65%] rounded-full"
        style={{ width: 400, height: 400, backgroundColor: "rgba(13,207,207,0.04)", filter: "blur(120px)", animationDelay: "-7s" }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16 text-center lg:mb-20"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            Infrastructure
          </span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built on a best-in-class{" "}
            <span className="text-[#0dcfcf]">tech stack</span>
          </h2>
          <p className="mx-auto max-w-[640px] text-base leading-relaxed text-white/60 lg:text-lg">
            Built with advanced frameworks and tools to deliver seamless,
            high-performance solutions for modern businesses.
          </p>
        </motion.div>

        {/* === Neural Hub Layout === */}
        <div className="relative">
          {/* Top row — 3 clusters */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CLUSTERS.slice(0, 3).map((c, i) => (
              <ClusterCard key={c.label} label={c.label} tools={c.tools} index={i} />
            ))}
          </div>

          {/* Neural line between rows */}
          <div className="relative my-6 py-4 lg:my-8 lg:py-6">
            {/* Horizontal neural line */}
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-[#0dcfcf]/30 to-transparent" />
              <motion.div
                className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-[#0dcfcf]/60 to-transparent"
                animate={{ left: ["-15%", "115%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
            </div>

            {/* Vertical ticks connecting to cards above & below */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              {[25, 50, 75].map((pct) => (
                <div
                  key={pct}
                  className="absolute top-0 h-full w-px bg-gradient-to-b from-[#0dcfcf]/20 via-[#0dcfcf]/10 to-[#0dcfcf]/20"
                  style={{ left: `${pct}%` }}
                />
              ))}
            </div>
          </div>

          {/* Bottom row — 3 clusters */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CLUSTERS.slice(3).map((c, i) => (
              <ClusterCard key={c.label} label={c.label} tools={c.tools} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Cluster card ───────────────────────────────────────────────────────────────
function ClusterCard({
  label,
  tools,
  index,
}: {
  label: string
  tools: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: index < 3 ? -30 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.08 * index, ease: EASE }}
      className="rounded-2xl border border-white p-5 lg:p-6"
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0px 10px 40px -10px rgba(0, 201, 177, 0.3)",
      }}
    >
      <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-wider text-[#00C9B1]">
        {label}
      </span>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {tools.map((name, ti) => (
          <ToolPill key={name} name={name} delay={0.08 * index + 0.04 * ti} />
        ))}
      </div>
    </motion.div>
  )
}

// ─── Tool pill — monochrome idle → brand color hover ────────────────────────────
function ToolPill({ name, delay }: { name: string; delay: number }) {
  const info = TOOLS[name]
  const brandColor = info?.color || "#0dcfcf"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay, ease: EASE }}
      className="group flex min-w-0 items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1.5 transition-all duration-300 hover:scale-[1.03] hover:bg-[#F8FAFC]"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${brandColor}60`
        e.currentTarget.style.boxShadow = `0 4px 16px ${brandColor}20`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = ""
        e.currentTarget.style.boxShadow = ""
      }}
    >
      {info?.domain ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://unavatar.io/${info.domain}?fallback=https://www.google.com/s2/favicons?domain=${info.domain}%26sz=128`}
          alt={`${name} logo`}
          className="h-4 w-4 shrink-0 rounded object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget
            if (!img.dataset.fallback) {
              img.dataset.fallback = "1"
              img.src = `https://icons.duckduckgo.com/ip3/${info.domain}.ico`
            }
          }}
        />
      ) : info?.icon ? (
        <span style={{ color: brandColor }} className="shrink-0 transition-transform duration-300 group-hover:scale-110">
          {info.icon}
        </span>
      ) : null}
      <span className="truncate text-[11px] font-semibold text-[#0F172A] transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  )
}
