"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItem } from "@/data/faqs";
import { DEFAULT_EASE } from "@/lib/motion";

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
  className?: string;
}

export function FAQAccordion({
  items,
  defaultOpenIndex = 0,
  className = "",
}: FAQAccordionProps) {
  // One item open at a time; first item open on load
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`space-y-4 max-w-4xl mx-auto ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={item.id || idx}
            className={`transition-colors duration-300 rounded-2xl overflow-hidden ${
              isOpen
                ? "bg-white shadow-sm border border-neutral-200/80 p-6 sm:p-8"
                : "bg-white/80 hover:bg-white border border-neutral-200/60 p-5 sm:p-6"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group cursor-pointer select-none"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-semibold text-neutral-900 tracking-tight group-hover:text-neutral-700 transition-colors">
                {item.question}
              </span>

              {/* "+" rotates to "—" (rotate 90° with crossfade) */}
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.35, ease: DEFAULT_EASE }}
                className="relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 group-hover:text-neutral-950 transition-colors"
              >
                {/* Fixed horizontal bar */}
                <span className="w-4 h-[2px] bg-current rounded-full pointer-events-none" />
                {/* Crossfading vertical bar that fades/scales to create "—" */}
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    scaleY: isOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.25, ease: DEFAULT_EASE }}
                  className="absolute w-[2px] h-4 bg-current rounded-full pointer-events-none"
                />
              </motion.span>
            </button>

            {/* Smooth height + opacity transition (~0.35s) */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: DEFAULT_EASE }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 sm:pt-5 pr-6 border-t border-neutral-100 mt-4 sm:mt-5">
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
