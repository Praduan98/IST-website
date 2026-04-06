"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
  { name: "Shootsta", src: "/logos/media__1773743041614.png" },
  { name: "Woliba", src: "/logos/media__1773743041625.png" },
  { name: "Innofied", src: "/logos/media__1773743041651.png" },
  { name: "REB2B", src: "/logos/reb2b.svg" },
  { name: "Apollo", src: "/logos/apollo.svg" },
  { name: "AWS", src: "/logos/idS5TK0MYh_1773741690369.png" },
  { name: "AllRide", src: "/logos/media__1773743041697.png" },
  { name: "Snapfix", src: "/logos/media__1773743041788.png" },
]

function LogoImage({ company }: { company: { name: string; src: string } }) {
  if (company.src.endsWith(".svg")) {
    return (
      <img
        src={company.src}
        alt={company.name}
        className="object-contain max-h-10 lg:max-h-14 w-auto"
        style={{ width: "auto", height: "auto", maxWidth: 180 }}
        loading="eager"
      />
    )
  }
  return (
    <Image
      src={company.src}
      alt={company.name}
      width={180}
      height={70}
      className="object-contain max-h-10 lg:max-h-14 w-auto"
    />
  )
}

export function LogoTicker() {
  const innerRef = useRef<HTMLDivElement>(null)
  const [setWidth, setSetWidth] = useState(0)

  useEffect(() => {
    function measure() {
      if (!innerRef.current) return
      // Measure the width of the first set of logos (first child)
      const firstSet = innerRef.current.children[0] as HTMLElement | undefined
      if (firstSet) {
        setSetWidth(firstSet.offsetWidth)
      }
    }

    // Measure after images have loaded
    const timer = setTimeout(measure, 200)
    window.addEventListener("resize", measure)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", measure)
    }
  }, [])

  return (
    <section className="relative overflow-hidden border-y border-[#E2E8F0] bg-[#F8FAFC] py-12 lg:py-16">
      <div className="mx-auto w-[min(92vw,1600px)] px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-[#64748B]"
        >
          Trusted by the most innovative companies worldwide
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent pointer-events-none" />

        {/*
          Two identical sets side by side.
          Animate x from 0 to -setWidth (exact pixels).
          repeatType "loop" resets instantly — visually seamless
          because set 2 occupies the same position set 1 started at.
        */}
        <motion.div
          ref={innerRef}
          className="flex items-center"
          animate={setWidth > 0 ? { x: [0, -setWidth] } : undefined}
          transition={
            setWidth > 0
              ? {
                  x: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }
              : undefined
          }
        >
          {/* Set 1 */}
          <div className="flex flex-shrink-0 items-center">
            {companies.map((company, i) => (
              <div
                key={`a-${i}`}
                className="flex-shrink-0 flex items-center justify-center pl-8 pr-8 lg:pl-12 lg:pr-12 grayscale opacity-60 transition-opacity transition-[filter] duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <LogoImage company={company} />
              </div>
            ))}
          </div>

          {/* Set 2 — identical clone */}
          <div className="flex flex-shrink-0 items-center">
            {companies.map((company, i) => (
              <div
                key={`b-${i}`}
                className="flex-shrink-0 flex items-center justify-center pl-8 pr-8 lg:pl-12 lg:pr-12 grayscale opacity-60 transition-opacity transition-[filter] duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <LogoImage company={company} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
