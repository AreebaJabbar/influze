"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Target, Lightbulb, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionPill } from "./SectionPill";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  ScaleIn,
  TextFadeFromGray,
} from "@/components/animations";
import { DEFAULT_EASE, DEFAULT_VIEWPORT } from "@/lib/motion";

interface WhyChooseUsProps {
  variant?: "dark" | "light";
  className?: string;
}

export function WhyChooseUs({ variant = "dark", className = "" }: WhyChooseUsProps) {
  const isDark = variant === "dark";
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark ? "bg-neutral-950 text-white" : "bg-[#F4F5F7] text-neutral-950"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <FadeIn>
            <SectionPill
              label="WHY CHOOSE US"
              variant={isDark ? "dark" : "light"}
              className="mb-4"
            />
          </FadeIn>
          <TextFadeFromGray duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">
              <span>Driving Results Through</span>{" "}
              <span
                className={`block italic font-light mt-1 ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                Real Influence
              </span>
            </h2>
          </TextFadeFromGray>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          {/* Column 1: Feature Points (slide from left, staggered) */}
          <div className="space-y-8 sm:space-y-10">
            {/* Feature 1 */}
            <SlideFromLeft delay={0} duration={0.9}>
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-neutral-900 text-white" : "bg-white shadow-sm text-neutral-950"
                  }`}
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase mb-2">
                    STRATEGIC TALENT MATCHING
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    We analyze behavioral audience overlap, engagement integrity, and historical conversion metrics before recommending any talent.
                  </p>
                  <Link
                    href="/creators"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mt-3 underline underline-offset-4 ${
                      isDark ? "text-white hover:text-neutral-300" : "text-neutral-950 hover:text-neutral-700"
                    }`}
                  >
                    <span>Explore Network</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SlideFromLeft>

            {/* Feature 2: ENGAGING CONTENT CREATION */}
            <SlideFromLeft delay={0.15} duration={0.9}>
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isDark ? "bg-neutral-900 text-white" : "bg-white shadow-sm text-neutral-950"
                  }`}
                >
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase mb-2">
                    ENGAGING CONTENT CREATION
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    Our creative directors build narrative hooks and dynamic storyboard guidelines that align with your brand standards.
                  </p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mt-3 underline underline-offset-4 ${
                      isDark ? "text-white hover:text-neutral-300" : "text-neutral-950 hover:text-neutral-700"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SlideFromLeft>
          </div>

          {/* Column 2 (Center): Tall Portrait Card (fades up with scale 0.96 -> 1) */}
          <div className="flex justify-center">
            <ScaleIn scale={0.96} duration={0.8} delay={0.2} className="w-full max-w-sm">
              <div className="relative w-full aspect-[3/4.2] rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-800">
                <Image
                  src="/images/why-center.jpg"
                  alt="Influencer with Smartphone"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Verified Pill Chip inside */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs font-semibold">
                  <span>Verified Partner</span>
                  <CheckCircle2 className="w-3.5 h-3.5 fill-[#0084FF] text-white" />
                </div>

                {/* Bottom stats inside image */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-wider text-neutral-300 font-bold">
                    Verified Engagement
                  </p>
                  <p className="text-xl font-black mt-0.5">9.4% Interaction Rate</p>
                </div>
              </div>
            </ScaleIn>
          </div>

          {/* Column 3 (Right): Expert Insights Card (slides from right) */}
          <div className="space-y-6">
            <SlideFromRight delay={0.25} duration={0.9}>
              <div
                className={`rounded-[26px] p-7 sm:p-8 transition-all ${
                  isDark
                    ? "bg-white text-neutral-950 shadow-xl"
                    : "bg-neutral-950 text-white shadow-xl"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-950 mb-5">
                  <Lightbulb className="w-6 h-6 text-neutral-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-3">
                  EXPERT INDUSTRY INSIGHTS
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isDark ? "text-neutral-600" : "text-neutral-400"
                  }`}
                >
                  Access proprietary market intelligence, competitive creator benchmarks, and real-time social platform trend forecasts.
                </p>

                {/* Animated dividing line drawing from left to right */}
                <div className="relative pt-4">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={DEFAULT_VIEWPORT}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: DEFAULT_EASE,
                    }}
                    className={`h-[1px] w-full origin-left mb-4 ${
                      isDark ? "bg-neutral-200" : "bg-neutral-800"
                    }`}
                  />
                  <FadeUp delay={0.4} duration={0.6}>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/contact"
                        className={`text-xs font-bold uppercase tracking-wider underline underline-offset-4 flex items-center gap-1 ${
                          isDark ? "text-neutral-950" : "text-white"
                        }`}
                      >
                        <span>Let&apos;s Connect ——— Book A Call</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </SlideFromRight>

            <FadeUp delay={0.4} className="flex justify-start lg:justify-end">
              <Link
                href="/services"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors ${
                  isDark
                    ? "border-neutral-800 text-neutral-300 hover:bg-neutral-900 hover:text-white"
                    : "border-neutral-300 text-neutral-800 hover:bg-neutral-950 hover:text-white"
                }`}
              >
                <span>All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
