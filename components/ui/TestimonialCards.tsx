"use client";

import React from "react";
import Image from "next/image";
import { Star, Play, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { reviewsData, videoTestimonialData } from "@/data/testimonials";
import { SectionPill } from "./SectionPill";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
} from "@/components/animations";
import { DEFAULT_EASE, DEFAULT_VIEWPORT } from "@/lib/motion";

interface TestimonialCardsProps {
  className?: string;
}

export function TestimonialCards({ className = "" }: TestimonialCardsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {/* Header */}
      <div className="mb-14 sm:mb-16">
        <FadeIn>
          <SectionPill label="SUCCESS STORIES" className="mb-4" />
        </FadeIn>
        <SlideFromLeft delay={0.1} duration={0.9}>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
            <span>Trusted By Brands</span>{" "}
            <span className="block italic font-light text-neutral-500 mt-1">
              And Creators
            </span>
          </h2>
        </SlideFromLeft>
      </div>

      {/* Grid Layout: Left rating + Center Video + Right Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Avatar cluster + 4.8/5.0 Brand Rating Badge */}
        <div className="lg:col-span-3">
          <SlideFromLeft delay={0.15} duration={0.9} className="space-y-4">
            <div className="flex -space-x-3 overflow-hidden">
              <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                <Image src="/images/creator-ethan.jpg" alt="Client 1" fill className="object-cover" />
              </div>
              <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                <Image src="/images/creator-sophia.jpg" alt="Client 2" fill className="object-cover" />
              </div>
              <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                <Image src="/images/creator-naomi.jpg" alt="Client 3" fill className="object-cover" />
              </div>
            </div>

            {/* Stars pop in one by one (0.05s stagger) */}
            <div className="flex items-center gap-1.5 text-amber-500">
              {[1, 2, 3, 4, 5].map((i, idx) => (
                <motion.span
                  key={i}
                  initial={{ scale: shouldReduceMotion ? 1 : 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={DEFAULT_VIEWPORT}
                  transition={{
                    delay: 0.25 + idx * 0.05,
                    duration: 0.35,
                    ease: DEFAULT_EASE,
                  }}
                  className="inline-block"
                >
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </motion.span>
              ))}
              <span className="text-xl font-bold text-neutral-950 ml-1.5">4.8/5.0</span>
            </div>

            <p className="text-xs uppercase font-bold tracking-wider text-neutral-500">
              Trusted By 10K+ Brands Worldwide
            </p>
          </SlideFromLeft>
        </div>

        {/* Center Column: Video Testimonial Card */}
        <div className="lg:col-span-5">
          <FadeUp delay={0.2} duration={0.8}>
            <div className="group relative rounded-[28px] overflow-hidden bg-white p-3.5 border border-neutral-200/80 shadow-md">
              {/* Video Image on Top */}
              <div className="relative w-full aspect-[4/3.2] rounded-[20px] overflow-hidden bg-neutral-900">
                <Image
                  src={videoTestimonialData.image}
                  alt={videoTestimonialData.creatorName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label="Play Creator Story"
                    className="w-14 h-14 rounded-full bg-neutral-950/90 hover:bg-neutral-950 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                  </button>
                </div>
              </div>

              {/* Text and author below image */}
              <div className="p-3 pt-4">
                <p className="text-xs sm:text-sm text-neutral-600 italic mb-4 leading-relaxed">
                  {videoTestimonialData.quote}
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-neutral-100">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-neutral-950">{videoTestimonialData.creatorName}</span>
                      <CheckCircle2 className="w-4 h-4 fill-[#0084FF] text-white" />
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5">- {videoTestimonialData.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{videoTestimonialData.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Column: 2 Stacked Review Cards */}
        <div className="lg:col-span-4 space-y-5">
          {reviewsData.map((review, idx) => (
            <SlideFromRight
              key={review.id}
              delay={0.2 + idx * 0.15}
              duration={0.9}
            >
              <div className="rounded-[24px] bg-white p-6 border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow">
                {/* 5 Stars at top */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Avatar + Author Name + Designation */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-neutral-950">{review.name}</h4>
                    <p className="text-xs text-neutral-500">{review.role}</p>
                  </div>
                </div>

                {/* Quote below author */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>
            </SlideFromRight>
          ))}
        </div>
      </div>
    </section>
  );
}
