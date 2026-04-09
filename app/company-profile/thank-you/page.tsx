"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, CheckCircle, Download, Phone } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LogoTicker } from "@/components/logo-ticker"

export default function CompanyProfileThankYouPage() {
  return (<><Navigation /><main><HeroSection /><LogoTicker /></main><Footer /></>)
}

function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [showToast, setShowToast] = useState(false)
  useEffect(() => setMounted(true), [])

  const handleDownload = useCallback(async () => {
    try {
      const res = await fetch("/assets/InsightsTap-Company-Profile.pdf")
      if (res.ok) {
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url; a.download = "InsightsTap-Company-Profile.pdf"
        document.body.appendChild(a); a.click(); document.body.removeChild(a)
        setTimeout(() => URL.revokeObjectURL(url), 1000)
        setShowToast(true); setTimeout(() => setShowToast(false), 4000)
      }
    } catch { /* silent */ }
  }, [])

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-white" style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
      <div className="dot-grid absolute inset-0" />
      <div className="glow-orb absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0dcfcf]/[0.07] blur-[160px]" />
      <div className="glow-orb absolute right-[15%] top-[55%] h-[500px] w-[500px] rounded-full bg-[#0dcfcf]/[0.05] blur-[140px]" style={{ animationDelay: "-4s" }} />
      <div className="glow-orb absolute left-[8%] top-[60%] h-[380px] w-[380px] rounded-full bg-[#0dcfcf]/[0.04] blur-[120px]" style={{ animationDelay: "-7s" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(13,207,207,0.04) 0%, transparent 70%)" }} />
      {mounted && <FloatingDots />}
      <AnimatePresence>
        {showToast && (
          <motion.div initial={{ opacity: 0, y: -20, x: 20 }} animate={{ opacity: 1, y: 0, x: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} className="fixed right-6 top-24 z-50 flex items-center gap-3 rounded-xl border border-[#0dcfcf]/30 bg-white px-5 py-3.5 shadow-xl shadow-black/10">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0dcfcf]/12"><CheckCircle className="h-4 w-4 text-[#0dcfcf]" /></div>
            <div><p className="text-sm font-semibold text-[#0F172A]">Download complete</p><p className="text-xs text-[#64748B]">Check your downloads folder</p></div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-10 mx-auto w-[min(92vw,720px)] px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#0dcfcf]/12">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 200 }}><CheckCircle className="h-10 w-10 text-[#0dcfcf]" /></motion.div>
          <motion.div className="absolute h-20 w-20 rounded-full border border-[#0dcfcf]/40" initial={{ scale: 1, opacity: 0.5 }} animate={{ scale: 2, opacity: 0 }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0dcfcf]/30 bg-[#0dcfcf]/10 px-4 py-2 glow-border">
          <Sparkles className="h-4 w-4 text-[#0dcfcf]" /><span className="text-xs font-medium uppercase tracking-wider text-[#64748B]">Conversion complete</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }} className="mb-5 whitespace-nowrap text-3xl font-semibold leading-[1.05] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
          Your profile is <span className="gradient-text">ready</span>.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mx-auto mb-10 max-w-[540px] text-[1.125rem] leading-relaxed text-[#64748B]">
          Click below to download the InsightsTap company profile, or book a discovery call to discuss how we can accelerate your pipeline.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button onClick={handleDownload} className="shimmer relative inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0dcfcf] px-8 text-base font-medium text-white shadow-md shadow-[#0dcfcf]/15 transition-all hover:-translate-y-0.5 hover:bg-[#0a9a9a] hover:shadow-lg hover:shadow-[#0dcfcf]/25">
            <Download className="h-4 w-4" />Download now
          </button>
          <Link href="/Contact" className="h-12 rounded-lg border border-[#E2E8F0] bg-white px-8 text-base font-medium text-[#0F172A] transition-all hover:border-[#0dcfcf]/50 hover:bg-[#0dcfcf]/5 inline-flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />Book a discovery call
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const FLOAT_DOTS = [{ x: 5, y: 10, dur: 7, delay: 0 },{ x: 20, y: 45, dur: 9, delay: 1.2 },{ x: 35, y: 78, dur: 6, delay: 2.4 },{ x: 50, y: 22, dur: 8, delay: 0.6 },{ x: 65, y: 60, dur: 7, delay: 1.8 },{ x: 78, y: 35, dur: 9, delay: 3 },{ x: 90, y: 80, dur: 6, delay: 0.3 },{ x: 12, y: 88, dur: 8, delay: 1.5 }]
function FloatingDots() {
  return (<div className="absolute inset-0 overflow-hidden pointer-events-none">{FLOAT_DOTS.map((d, i) => (<motion.div key={i} className="absolute h-1 w-1 rounded-full bg-[#0dcfcf]/60" style={{ left: `${d.x}%`, top: `${d.y}%` }} initial={{ opacity: 0 }} animate={{ y: [-15, 15, -15], opacity: [0, 0.4, 0] }} transition={{ duration: d.dur, repeat: Infinity, delay: d.delay, ease: "easeInOut" }} />))}</div>)
}
