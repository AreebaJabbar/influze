"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SkewedMarqueeProps {
  className?: string;
}

export function SkewedMarquee({ className = "" }: SkewedMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();
  const marqueeItems = [
    "INFLUENCER MARKETING",
    "BRAND COLLABORATION",
    "CONTENT STRATEGY",
    "TALENT MANAGEMENT",
    "BRAND CAMPAIGNS",
    "CREATOR ECONOMY",
  ];

  return (
    <div className={`relative w-full overflow-hidden my-14 sm:my-20 py-8 select-none ${className}`}>
      {/* Background black accent wedges creating the sharp contrast effect */}
      <div className="absolute inset-0 bg-neutral-950 pointer-events-none transform -skew-y-2 origin-left scale-105" />

      {/* Slanted white ribbon */}
      <div className="relative w-full py-4 sm:py-5 bg-white transform -rotate-2 scale-110 shadow-lg border-y-2 border-neutral-950 overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max items-center will-change-transform"
        >
          {/* Two duplicate sets for seamless 50% translation */}
          {[1, 2].map((setIndex) => (
            <div key={`set-${setIndex}`} className="flex items-center space-x-8 sm:space-x-12 pr-8 sm:pr-12">
              {marqueeItems.map((item, idx) => (
                <div key={`${setIndex}-${idx}`} className="flex items-center space-x-8 sm:space-x-12">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 uppercase font-sans whitespace-nowrap">
                    {item}
                  </span>
                  <span className="text-xl sm:text-2xl text-neutral-950 font-bold">•</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
