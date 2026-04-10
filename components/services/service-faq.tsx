"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import type { FAQ } from "@/lib/services-data/types"
import { FloatingOrbs } from "./atmospheric-orbs"

interface ServiceFAQProps {
  faqs: FAQ[]
  title?: string
}

export function ServiceFAQ({ faqs, title = "Frequently Asked Questions" }: ServiceFAQProps) {
  return (
    <section className="relative bg-white px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
      <FloatingOrbs />
      <div className="relative mx-auto w-[min(92vw,960px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            FAQ
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl">
            {title}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all hover:border-[#0dcfcf]/20"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 sm:p-5 text-left"
      >
        <span className="pr-4 text-sm sm:text-base font-medium text-[#0F172A]">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#64748B] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#E2E8F0] px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
              <p className="text-sm leading-relaxed text-[#64748B]">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
