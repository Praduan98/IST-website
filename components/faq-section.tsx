"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How are you different?",
    answer: "We don't sell \"one-off campaigns.\" We build full-stack GTM engines that run 24/7 — combining signals, automation, AI agents, and performance marketing to deliver faster, predictable growth.",
  },
  {
    question: "What results can I expect?",
    answer: "Most clients see lower CAC, higher-quality leads, and a 2–3x increase in pipeline velocity within 90 days of implementation.",
  },
  {
    question: "Do you work with my tools?",
    answer: "Yes. We integrate with your existing CRM, ad platforms, and intent tools — or set up a best-in-class stack from scratch.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative bg-[#F8FAFC] px-6 py-24 lg:py-32">
      <div className="relative mx-auto max-w-[768px]">
        {/* Header */}
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
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  variants,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  variants: typeof itemVariants
}) {
  return (
    <motion.div
      variants={variants}
      className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm transition-colors hover:border-[#0dcfcf]/30"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg font-medium transition-colors ${
            isOpen ? "text-[#0F172A]" : "text-[#64748B]"
          }`}
        >
          {question}
        </span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border transition-all ${
            isOpen
              ? "border-[#0dcfcf]/50 bg-[#0dcfcf]/10 text-[#0dcfcf]"
              : "border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B]"
          }`}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-[#E2E8F0] px-6 pb-6 pt-4">
              <p className="leading-relaxed text-[#64748B]">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
