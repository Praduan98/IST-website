"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

// ─── Tool icons with brand colors ───────────────────────────────────────────────
const TOOLS: Record<string, { color: string; icon?: React.ReactNode; domain?: string }> = {
  JobFeeder:      { color: "#FF6B35", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/></svg> },
  RB2B:           { color: "#6366F1", domain: "rb2b.com" },
  "Factors.ai":   { color: "#00D4AA", domain: "factors.ai" },
  "Common Room":  { color: "#FF5C35", domain: "commonroom.io" },
  Vector:         { color: "#7C3AED", domain: "vector.co" },
  Unify:          { color: "#4F46E5", domain: "unifygtm.com" },
  ChatGPT:        { color: "#10A37F", domain: "openai.com" },
  Claude:         { color: "#D97706", domain: "claude.ai" },
  RelevanceAI:    { color: "#8B5CF6", domain: "relevanceai.com" },
  Perplexity:     { color: "#20B2AA", domain: "perplexity.ai" },
  Apollo:         { color: "#4F46E5", domain: "apollo.io" },
  Clay:           { color: "#58C4F7", domain: "clay.com" },
  FullEnrich:     { color: "#CCBF00", domain: "fullenrich.com" },
  "Ocean.io":     { color: "#3B82F6", domain: "ocean.io" },
  "Sales Nav":    { color: "#0A66C2", domain: "linkedin.com" },
  Instantly:      { color: "#3B82F6", domain: "instantly.ai" },
  Smartlead:      { color: "#10B981", domain: "smartlead.ai" },
  Lemlist:        { color: "#9333EA", domain: "lemlist.com" },
  "Reply.io":     { color: "#2563EB", domain: "reply.io" },
  n8n:            { color: "#EA4B71", domain: "n8n.io" },
  HubSpot:        { color: "#FF7A59", domain: "hubspot.com" },
  Airtable:       { color: "#18BFFF", domain: "airtable.com" },
  Make:           { color: "#6D29D9", domain: "make.com" },
  Notion:         { color: "#000000", domain: "notion.so" },
  Figma:          { color: "#F24E1E", domain: "figma.com" },
  Canva:          { color: "#00C4CC", domain: "canva.com" },
  Miro:           { color: "#FFD02F", domain: "miro.com" },
  Qwilr:          { color: "#00B8D9", domain: "qwilr.com" },
  Loom:           { color: "#625DF5", domain: "loom.com" },
}

// ─── Cluster data ───────────────────────────────────────────────────────────────
const CLUSTERS = [
  { label: "Signals & Intent",         tools: ["JobFeeder", "RB2B", "Factors.ai", "Common Room", "Vector", "Unify"] },
  { label: "AI Agents & LLMs",         tools: ["ChatGPT", "Claude", "RelevanceAI", "Perplexity"] },
  { label: "Prospecting & Enrichment", tools: ["Apollo", "Clay", "FullEnrich", "Ocean.io", "Sales Nav"] },
  { label: "Sequencing & Outreach",    tools: ["Instantly", "Smartlead", "Lemlist", "Unify", "Reply.io"] },
  { label: "Automation & Operations",  tools: ["n8n", "HubSpot", "Airtable", "Make", "Notion"] },
  { label: "Content & Collateral",     tools: ["Figma", "Canva", "Miro", "Qwilr", "Loom"] },
]

// Reverse lookup: tool name → cluster indices
const TOOL_CLUSTERS: Record<string, number[]> = {}
CLUSTERS.forEach((c, ci) => {
  c.tools.forEach((t) => {
    if (!TOOL_CLUSTERS[t]) TOOL_CLUSTERS[t] = []
    if (!TOOL_CLUSTERS[t].includes(ci)) TOOL_CLUSTERS[t].push(ci)
  })
})

// Deduplicated tool list preserving cluster order
const ALL_TOOLS: string[] = []
const _seen = new Set<string>()
CLUSTERS.forEach((c) =>
  c.tools.forEach((t) => {
    if (!_seen.has(t)) { _seen.add(t); ALL_TOOLS.push(t) }
  }),
)

// Subtle scatter — just enough rotation to feel organic, no Y-offset so rows stay aligned
const SCATTER = [
  { r: -1.0 }, { r:  0.8 }, { r: -0.5 }, { r:  1.2 },
  { r: -0.7 }, { r:  0.4 }, { r: -1.2 }, { r:  0.6 },
  { r: -0.3 }, { r:  1.0 }, { r: -0.9 }, { r:  0.5 },
  { r: -0.4 }, { r:  1.1 }, { r: -0.6 }, { r:  0.3 },
  { r: -1.1 }, { r:  0.9 }, { r: -0.2 }, { r:  1.3 },
  { r: -0.5 }, { r:  0.2 }, { r: -1.0 }, { r:  0.8 },
  { r: -0.3 }, { r:  1.0 }, { r: -0.7 }, { r:  0.4 },
  { r: -1.2 }, { r:  0.5 },
]

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ─── Main component ─────────────────────────────────────────────────────────────
export function TechStack() {
  const [activeCluster, setActiveCluster] = useState<number | null>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activate = (idx: number) => {
    if (leaveTimer.current) { clearTimeout(leaveTimer.current); leaveTimer.current = null }
    setActiveCluster(idx)
  }
  const deactivate = () => {
    leaveTimer.current = setTimeout(() => setActiveCluster(null), 80)
  }

  return (
    <section
      id="tech-stack"
      className="relative bg-[#0a0e1a] px-6"
      style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
    >
      {/* Background grid */}
      <div className="dot-grid absolute inset-0 opacity-20" />

      {/* Ambient orbs */}
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
        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 text-center lg:mb-16"
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

        {/* ── Category filter pills ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="mb-16 flex flex-wrap justify-center gap-2.5 sm:gap-3"
        >
          {CLUSTERS.map((cluster, i) => {
            const isActive = activeCluster === i
            return (
              <button
                key={cluster.label}
                onMouseEnter={() => activate(i)}
                onMouseLeave={deactivate}
                className={`rounded-full px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer border ${
                  isActive
                    ? "text-[#0a0e1a] border-[#0dcfcf] bg-[#0dcfcf] shadow-[0_0_24px_rgba(13,207,207,0.4)]"
                    : "text-white/50 border-white/10 bg-white/[0.03] hover:text-white/80 hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                {cluster.label}
              </button>
            )
          })}
        </motion.div>

        {/* ── Scattered tool constellation ────────────────────── */}
        <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-10 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-4 justify-items-center">
          {ALL_TOOLS.map((name, i) => (
            <ToolNode
              key={name}
              name={name}
              index={i}
              activeCluster={activeCluster}
              onActivate={activate}
              onDeactivate={deactivate}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Individual tool node ───────────────────────────────────────────────────────
function ToolNode({
  name,
  index,
  activeCluster,
  onActivate,
  onDeactivate,
}: {
  name: string
  index: number
  activeCluster: number | null
  onActivate: (idx: number) => void
  onDeactivate: () => void
}) {
  const info = TOOLS[name]
  const clusters = TOOL_CLUSTERS[name] || []
  const isHighlighted = activeCluster !== null && clusters.includes(activeCluster)
  const isDimmed = activeCluster !== null && !clusters.includes(activeCluster)
  const s = SCATTER[index]
  const brandColor = info?.color || "#0dcfcf"

  return (
    /* Outer wrapper: scroll-triggered entrance — runs once */
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.025, ease: EASE }}
    >
      {/* Inner wrapper: hover-driven state — runs continuously */}
      <motion.div
        animate={{
          opacity: isDimmed ? 0.15 : isHighlighted ? 1 : 0.9,
          scale: isHighlighted ? 1.12 : isDimmed ? 0.9 : 1,
          y: isHighlighted ? -6 : 0,
          rotate: s?.r ?? 0,
        }}
        transition={{ duration: 0.4, ease: EASE }}
        onMouseEnter={() => {
          if (clusters.length > 0) onActivate(clusters[0])
        }}
        onMouseLeave={onDeactivate}
        className="flex flex-col items-center gap-3 cursor-pointer"
      >
        {/* Logo container */}
        <motion.div
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border"
          animate={{
            borderColor: isHighlighted ? `${brandColor}80` : "rgba(255,255,255,0.10)",
            backgroundColor: isHighlighted ? `${brandColor}20` : "rgba(255,255,255,0.06)",
          }}
          transition={{ duration: 0.3 }}
          style={
            isHighlighted
              ? { boxShadow: `0 0 24px ${brandColor}40, 0 0 48px ${brandColor}20, 0 8px 32px rgba(0,0,0,0.3)` }
              : { boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }
          }
        >
          {info?.domain ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://unavatar.io/${info.domain}?fallback=https://www.google.com/s2/favicons?domain=${info.domain}%26sz=128`}
              alt={`${name} logo`}
              className={`h-7 w-7 sm:h-8 sm:w-8 rounded object-contain transition-all duration-300 ${
                isDimmed ? "grayscale opacity-40" : ""
              }`}
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
            <span style={{ color: brandColor }} className="shrink-0 [&>svg]:h-5 [&>svg]:w-5">
              {info.icon}
            </span>
          ) : null}
        </motion.div>

        {/* Tool name */}
        <span
          className={`text-[11px] sm:text-xs font-medium text-center leading-tight transition-colors duration-300 ${
            isHighlighted ? "text-white" : isDimmed ? "text-white/20" : "text-white/60"
          }`}
        >
          {name}
        </span>
      </motion.div>
    </motion.div>
  )
}
