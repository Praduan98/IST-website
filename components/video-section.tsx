"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative bg-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1120px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xl"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Text Content */}
            <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
              <span className="mb-4 inline-flex w-fit items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
                WATCH
              </span>
              <h2 className="mb-4 text-2xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
                Still using outdated playbooks for B2B Sales? Do this instead.
              </h2>
              <p className="text-base leading-relaxed text-[#64748B] lg:text-lg">
                Replace outdated sales playbooks with AI-enabled GTM systems that scale revenue.
              </p>
            </div>

            {/* Right Side - Thumbnail */}
            <div className="flex flex-1 items-center justify-center p-6 lg:p-8">
              <button
                onClick={() => setIsPlaying(true)}
                className="group relative w-full cursor-pointer overflow-hidden rounded-xl"
                aria-label="Play video"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src="https://i.ytimg.com/vi/3lOAzPreFt4/hq720.jpg"
                    alt="Video thumbnail"
                    fill
                    className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 rounded-xl bg-[#0F172A]/20 transition-colors duration-300 group-hover:bg-[#0F172A]/10" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0dcfcf] shadow-lg shadow-[#0dcfcf]/25 transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5 text-white" fill="currentColor" />
                      <div className="absolute -inset-3 rounded-full bg-[#0dcfcf]/15 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cinema Mode Popup */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative mx-4 w-full max-w-[1100px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute -top-12 right-0 flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span>Close</span>
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/3lOAzPreFt4?autoplay=1&rel=0"
                  title="InsightsTap - Signal-Led GTM Engine"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
