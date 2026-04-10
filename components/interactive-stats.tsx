"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, TrendingUp, Users } from "lucide-react"
import { useRef, useState, useEffect } from "react"

type ThemeMode = 'night' | 'sunrise' | 'day' | 'sunset'

function getThemeColors(mode: ThemeMode) {
  const isDark = mode === 'night' || mode === 'sunset'
  const accents: Record<ThemeMode, string> = {
    night: '#0dcfcf',
    sunrise: '#CC5500',
    day: '#0dcfcf',
    sunset: '#FFB74D',
  }
  const bgs: Record<ThemeMode, string> = {
    night: '#1a3250',
    sunrise: '#ffc48c',
    day: '#FFFFFF',
    sunset: '#5a3468',
  }
  const glows: Record<ThemeMode, string> = {
    night: '#264060',
    sunrise: '#ffa07a',
    day: '#0dcfcf',
    sunset: '#8b4f8e',
  }
  return {
    isDark,
    text: isDark ? '#FFFFFF' : '#0F172A',
    subtext: isDark ? 'rgba(255,255,255,0.7)' : '#64748B',
    accent: accents[mode],
    bg: bgs[mode],
    glow: glows[mode],
  }
}

export function InteractiveStats() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('day')

  return (
    <section className="relative w-full">
      <InteractiveSection themeMode={themeMode} setThemeMode={setThemeMode}>
        {/* Interactive Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 grid max-w-[800px] grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-4"
        >
          <InteractiveStat icon={Zap} value="40%" label="Lower CAC" delay={0} themeMode={themeMode} />
          <InteractiveStat icon={TrendingUp} value="3x" label="Pipeline growth" delay={0.1} themeMode={themeMode} />
          <InteractiveStat icon={Users} value="2.5x" label="More meetings" delay={0.2} themeMode={themeMode} />
          <InteractiveStat icon={Sparkles} value="90" label="Days to results" delay={0.3} themeMode={themeMode} />
        </motion.div>

        {/* Hero Visual - Animated Signal Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-[900px]"
        >
          <SignalFlowVisualization themeMode={themeMode} />
        </motion.div>
      </InteractiveSection>
    </section>
  )
}

function InteractiveStat({
  icon: Icon,
  value,
  label,
  delay,
  themeMode,
}: {
  icon: typeof Zap
  value: string
  label: string
  delay: number
  themeMode: ThemeMode
}) {
  const colors = getThemeColors(themeMode)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="group flex flex-col items-center gap-2 p-3 cursor-pointer sm:gap-3 sm:p-6"
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-700 sm:h-16 sm:w-16"
        style={{ backgroundColor: colors.isDark ? `${colors.bg}f0` : `${colors.bg}e8`, boxShadow: `0 0 0 1px ${colors.accent}25` }}
      >
        <Icon className="h-7 w-7 transition-colors duration-700 sm:h-8 sm:w-8" style={{ color: colors.accent }} />
      </div>
      <span className="text-2xl font-semibold transition-colors duration-700 sm:text-4xl" style={{ color: colors.text }}>{value}</span>
      <span className="text-sm transition-colors duration-700" style={{ color: colors.subtext }}>{label}</span>
    </motion.div>
  )
}

function InteractiveSection({
  themeMode,
  setThemeMode,
  children,
}: {
  themeMode: ThemeMode
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>
  children: React.ReactNode
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const modeRef = useRef(themeMode)
  const particlesRef = useRef<Array<{
    x: number; y: number; baseX: number; baseY: number
    size: number; density: number; opacity: number
  }>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { modeRef.current = themeMode }, [themeMode])

  useEffect(() => {
    if (!mounted) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    function resize() {
      canvas!.width = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
      // Grid-based placement for even scatter — no random clustering
      const count = canvas!.width < 640 ? 80 : 288
      const cols = Math.ceil(Math.sqrt(count * (canvas!.width / canvas!.height)))
      const rows = Math.ceil(count / cols)
      const cellW = canvas!.width / cols
      const cellH = canvas!.height / rows
      particlesRef.current = Array.from({ length: cols * rows }, (_, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        const x = col * cellW + Math.random() * cellW
        const y = row * cellH + Math.random() * cellH
        return {
          x, y, baseX: x, baseY: y,
          size: Math.random() * 2.5 + 0.8,
          density: Math.random() * 30 + 5,
          opacity: Math.random() * 0.4 + 0.35,
        }
      })
    }

    function getColor(opacity: number): string {
      switch (modeRef.current) {
        case 'sunrise': return `rgba(204, 85, 0, ${opacity})`
        case 'sunset': return `rgba(255, 183, 77, ${opacity})`
        default: return `rgba(13, 207, 207, ${opacity})`
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      const particles = particlesRef.current
      const mouse = mouseRef.current

      particles.forEach(p => {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150 && distance > 0) {
          const force = (150 - distance) / 150
          p.x -= (dx / distance) * force * p.density
          p.y -= (dy / distance) * force * p.density
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
        }

        ctx!.fillStyle = getColor(p.opacity)
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fill()
      })

      const connectionDist = canvas!.width < 640 ? 70 : 110
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * 0.4
            ctx!.strokeStyle = getColor(opacity)
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(particles[a].x, particles[a].y)
            ctx!.lineTo(particles[b].x, particles[b].y)
            ctx!.stroke()
          }
        }
      }

      animId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [mounted])

  const handleMouseMove = (e: React.MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 }
  }

  const backgrounds: Record<ThemeMode, string> = {
    night: 'linear-gradient(135deg, #0f2035 0%, #1a3250 50%, #0f2035 100%)',
    sunrise: 'linear-gradient(135deg, #ffa07a 0%, #ffb894 20%, #ffd4a3 40%, #ffe5b4 60%, #fff4e6 80%, #ffffff 100%)',
    day: '#FFFFFF',
    sunset: 'linear-gradient(135deg, #2d1b3d 0%, #4a2c5a 20%, #6b3d76 40%, #8b4f8e 60%, #c77d9f 80%, #e8a5b8 100%)',
  }

  const modes: ThemeMode[] = ['night', 'sunrise', 'day', 'sunset']
  const labels: Record<ThemeMode, string> = { night: 'Night', sunrise: 'Sunrise', day: 'Day', sunset: 'Sunset' }

  const colors = getThemeColors(themeMode)

  return (
    <div
      className="relative w-full overflow-hidden transition-all duration-1000 py-8 sm:py-16"
      style={{
        background: backgrounds[themeMode],
        isolation: 'isolate',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Particle Canvas */}
      {mounted && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }} />
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-[1280px] text-center px-4 sm:px-6" style={{ zIndex: 2 }}>
        {/* Theme Toggle Button */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={() => {
              const idx = modes.indexOf(themeMode)
              setThemeMode(modes[(idx + 1) % modes.length])
            }}
            className="min-w-[80px] h-10 px-4 rounded-full border text-sm font-medium tracking-wide flex items-center justify-center transition-all duration-700 hover:scale-105 cursor-pointer backdrop-blur-sm"
            style={{
              background: `${colors.accent}18`,
              borderColor: `${colors.accent}50`,
              color: colors.isDark ? '#FFFFFF' : colors.accent,
            }}
          >
            {labels[themeMode]}
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

function SignalFlowVisualization({ themeMode }: { themeMode: ThemeMode }) {
  const colors = getThemeColors(themeMode)
  return (
    <div className="relative h-[250px] w-full p-4 sm:p-8 sm:h-[280px]">
      <div className="relative z-10 flex h-full items-center justify-center gap-2 sm:gap-6 lg:gap-8">
        <FlowStage
          icon={<SignalIcon className="h-6 w-6 sm:h-10 sm:w-10 transition-colors duration-700" style={{ color: colors.accent }} />}
          label="Signals"
          color={colors.accent}
          delay={0}
          themeMode={themeMode}
        />
        <FlowArrow themeMode={themeMode} />
        <FlowStage
          icon={<AIIcon className="h-6 w-6 sm:h-10 sm:w-10 transition-colors duration-700" style={{ color: colors.accent }} />}
          label="AI agents"
          color={colors.accent}
          delay={0.5}
          themeMode={themeMode}
        />
        <FlowArrow themeMode={themeMode} />
        <FlowStage
          icon={<AutomationIcon className="h-6 w-6 sm:h-10 sm:w-10 transition-colors duration-700" style={{ color: colors.accent }} />}
          label="Automation"
          color={colors.accent}
          delay={1}
          themeMode={themeMode}
        />
        <FlowArrow themeMode={themeMode} />
        <FlowStage
          icon={<RevenueIcon className="h-6 w-6 sm:h-10 sm:w-10 transition-colors duration-700" style={{ color: colors.text }} />}
          label="Revenue"
          color={colors.text}
          delay={1.5}
          isLast
          themeMode={themeMode}
        />
      </div>
    </div>
  )
}

function FlowStage({
  icon,
  label,
  color,
  delay,
  isLast,
  themeMode,
}: {
  icon: React.ReactNode
  label: string
  color: string
  delay: number
  isLast?: boolean
  themeMode: ThemeMode
}) {
  const colors = getThemeColors(themeMode)
  return (
    <motion.div
      className="flex w-16 flex-col items-center gap-2 sm:w-24 sm:gap-3"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.div
        className="relative flex h-12 w-12 items-center justify-center rounded-xl sm:h-20 sm:w-20 cursor-pointer transition-all duration-700"
        style={{
          backgroundColor: colors.isDark ? `${colors.bg}f0` : `${colors.bg}e8`,
          border: `1px solid ${color}50`,
        }}
        whileHover={{
          boxShadow: `0 0 30px ${color}30`,
        }}
        animate={{
          boxShadow: [
            `0 0 0 0 ${color}00`,
            `0 0 20px 4px ${color}20`,
            `0 0 0 0 ${color}00`
          ]
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity, delay }
        }}
      >
        {icon}
      </motion.div>
      <span
        className="whitespace-nowrap text-center text-xs font-medium uppercase tracking-wider sm:text-sm transition-colors duration-700"
        style={{ color: colors.subtext }}
      >
        {label}
      </span>
    </motion.div>
  )
}

function FlowArrow({ themeMode }: { themeMode: ThemeMode }) {
  const colors = getThemeColors(themeMode)
  return (
    <>
      {/* Mobile: small dot separator */}
      <div className="flex flex-shrink-0 items-center sm:hidden">
        <div
          className="h-1.5 w-1.5 rounded-full transition-colors duration-700"
          style={{ backgroundColor: colors.accent }}
        />
      </div>
      {/* Desktop: animated arrow */}
      <div className="hidden flex-shrink-0 items-center sm:flex">
        <motion.div
          className="h-[2px] w-8 lg:w-12 transition-colors duration-700"
          style={{ background: `linear-gradient(to right, ${colors.accent}50, ${colors.accent})` }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div
          className="h-0 w-0 border-y-4 border-l-4 border-y-transparent transition-colors duration-700"
          style={{ borderLeftColor: colors.accent }}
        />
      </div>
    </>
  )
}

function SignalIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12h2M6 12h2M10 12h2M14 12h2M18 12h2M22 12h2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

function AIIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}

function AutomationIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RevenueIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
