"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DEFAULT_EASE, DEFAULT_VIEWPORT } from "@/lib/motion";

interface LogoStripProps {
  variant?: "black" | "gray";
  className?: string;
}

export function LogoStrip({ variant = "black", className = "" }: LogoStripProps) {
  const isBlack = variant === "black";
  const shouldReduceMotion = useReducedMotion();

  // 5 distinct agency partner logos from the Elementor kit
  const logos = [
    {
      name: "LOGO-1",
      svg: (
        <svg viewBox="0 0 140 40" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <circle cx="16" cy="20" r="12" stroke="currentColor" strokeWidth="4" fill="none" />
          <path d="M16 12v16M12 20h8" stroke="currentColor" strokeWidth="3" />
          <text x="38" y="27" fontFamily="sans-serif" fontSize="20" fontWeight="900" letterSpacing="2">
            LOGO
          </text>
        </svg>
      ),
    },
    {
      name: "LOGO-2",
      svg: (
        <svg viewBox="0 0 150 40" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <path d="M10 20L20 10L30 20L20 30Z" fill="currentColor" />
          <path d="M20 10L10 20M20 30L30 20" stroke="currentColor" strokeWidth="2" />
          <text x="42" y="27" fontFamily="sans-serif" fontSize="20" fontWeight="900" letterSpacing="2">
            LOGO
          </text>
        </svg>
      ),
    },
    {
      name: "LOQO",
      svg: (
        <svg viewBox="0 0 140 40" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <text x="5" y="28" fontFamily="sans-serif" fontSize="24" fontWeight="800" letterSpacing="4">
            LOQO
          </text>
        </svg>
      ),
    },
    {
      name: "LIIIIIN",
      svg: (
        <svg viewBox="0 0 160 40" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <g transform="skewX(-15)">
            <rect x="10" y="8" width="6" height="24" fill="currentColor" />
            <rect x="20" y="8" width="6" height="24" fill="currentColor" />
            <rect x="30" y="8" width="6" height="24" fill="currentColor" />
            <rect x="40" y="8" width="6" height="24" fill="currentColor" />
          </g>
          <text x="65" y="27" fontFamily="sans-serif" fontSize="18" fontWeight="900" letterSpacing="2">
            LIIIIIN
          </text>
        </svg>
      ),
    },
    {
      name: "IPSUM",
      svg: (
        <svg viewBox="0 0 150 40" fill="currentColor" className="h-6 sm:h-7 w-auto">
          <text x="5" y="28" fontFamily="sans-serif" fontSize="24" fontWeight="900" letterSpacing="5">
            IPSUM
          </text>
        </svg>
      ),
    },
  ];

  // Gray variant for Home page with staggered fade-in
  if (!isBlack) {
    return (
      <div
        className={`w-full overflow-hidden select-none py-8 md:py-10 bg-transparent text-neutral-400 border-y border-neutral-200/60 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={DEFAULT_VIEWPORT}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 md:gap-12"
          >
            {logos.map((logo, idx) => (
              <motion.div
                key={`gray-logo-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
                  visible: {
                    opacity: 0.6,
                    y: 0,
                    transition: { duration: 0.8, ease: DEFAULT_EASE },
                  },
                }}
                whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
                className="flex items-center transition-opacity"
              >
                {logo.svg}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  // Black marquee variant
  return (
    <div
      className={`w-full overflow-hidden select-none py-8 md:py-10 bg-neutral-950 text-white ${className}`}
    >
      <div className="flex w-max animate-marquee space-x-12 sm:space-x-20 md:space-x-28 items-center">
        {[1, 2, 3, 4].map((setIndex) => (
          <React.Fragment key={`set-${setIndex}`}>
            {logos.map((logo, idx) => (
              <div
                key={`logo-${setIndex}-${idx}`}
                className="flex items-center opacity-85 hover:opacity-100 transition-opacity duration-300"
              >
                {logo.svg}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
