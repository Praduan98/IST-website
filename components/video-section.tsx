"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
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

            {/* Right Side - Video Embed */}
            <div className="relative aspect-video flex-1 lg:aspect-auto lg:min-h-[320px]">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* YouTube Thumbnail */}
                  <Image
                    src="https://img.youtube.com/vi/3lOAzPreFt4/maxresdefault.jpg"
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Dark overlay for contrast */}
                  <div className="absolute inset-0 bg-[#0F172A]/30" />
                  
                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#0dcfcf] shadow-md shadow-[#0dcfcf]/15 transition-all duration-300 hover:scale-110 hover:bg-[#0a9a9a] sm:h-14 sm:w-14"
                    aria-label="Play video"
                  >
                    <Play className="h-4 w-4 text-white sm:h-5 sm:w-5" fill="currentColor" />

                    {/* Glow effect on hover */}
                    <div className="absolute -inset-3 rounded-full bg-[#0dcfcf]/15 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
                  </button>

                  {/* Decorative elements */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-2 opacity-80">
                    <div className="h-1 flex-1 rounded-full bg-[#0F172A]/20">
                      <div className="h-full w-0 rounded-full bg-[#0dcfcf]" />
                    </div>
                    <span className="font-mono text-xs text-[#64748B]">3:24</span>
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/3lOAzPreFt4?autoplay=1"
                  title="Insightstap Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
