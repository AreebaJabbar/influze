"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton, WhitePillButton, RoundArrowButton } from "@/components/ui/Buttons";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { TestimonialCards } from "@/components/ui/TestimonialCards";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BlogCard } from "@/components/ui/BlogCard";
import { StatsCounter } from "@/components/ui/StatsCounter";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  StaggerContainer,
  StaggerItem,
  TextFadeFromGray,
} from "@/components/animations";
import { DEFAULT_EASE, createFadeUpVariants } from "@/lib/motion";
import { servicesData } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { blogPosts } from "@/data/blog";

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full overflow-x-clip">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Floating Portrait Card (lg:col-span-3) */}
          <div className="hidden lg:flex lg:col-span-3 justify-center xl:justify-start">
            <motion.div
              initial={{ x: shouldReduceMotion ? 0 : -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: DEFAULT_EASE }}
              className="relative w-full max-w-[280px] xl:max-w-[310px] h-[430px] xl:h-[460px] rounded-[32px] overflow-hidden bg-neutral-100 shadow-xl border border-neutral-200/70 select-none"
            >
              <Image
                src="/images/hero-ken.jpg"
                alt="Ken"
                fill
                priority
                sizes="(max-width: 1280px) 280px, 310px"
                className="object-cover"
              />
              {/* Floating Follower Chip: Instagram Icon + Ken 6M+ Followers + Verified Badge */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: DEFAULT_EASE }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md py-2.5 px-3.5 rounded-full flex items-center justify-between shadow-lg border border-neutral-100/90 z-20"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-neutral-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span className="text-xs sm:text-[13px] font-bold text-neutral-900">Ken 6M+ Followers</span>
                </div>
                <CheckCircle2 className="w-4 h-4 fill-[#0084FF] text-white flex-shrink-0" />
              </motion.div>
            </motion.div>
          </div>

          {/* Center Column: Hero Headline & CTAs (lg:col-span-6) */}
          <div className="lg:col-span-6 text-center max-w-2xl mx-auto flex flex-col items-center">
            {/* Pill Badge fades in */}
            <FadeIn delay={0.2} duration={0.6} trigger="load">
              <SectionPill label="LIMITED CLIENT SPOTS AVAILABLE" className="mb-6" />
            </FadeIn>

            {/* 3-Line H1 Headline with Inline Overlapping Icons */}
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-normal tracking-tight text-neutral-950 leading-[1.12] mb-6">
              {/* Line 1: Fades from light gray to full black */}
              <motion.span
                initial={{ opacity: 0.25 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.9, ease: DEFAULT_EASE }}
                className="block"
              >
                Turn Creators Into
              </motion.span>

              {/* Middle line: social cluster starts small and scales into place */}
              <span className="flex items-center justify-center flex-wrap gap-2.5 my-1.5">
                <motion.span
                  initial={{ scale: shouldReduceMotion ? 1 : 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1.0, ease: DEFAULT_EASE }}
                  className="inline-flex items-center -space-x-2 align-middle origin-center"
                >
                  {/* 1. Snapchat Icon (Yellow) */}
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFC00] flex items-center justify-center shadow-sm z-10 border-2 border-white">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-current" viewBox="0 0 24 24">
                      <path d="M12 2c-3.3 0-5.4 2.2-5.4 5.3 0 .7.1 1.6.4 2.3-.6.2-1.3.5-1.5 1-.2.4 0 .9.4 1.1.2.1.6.2 1.1.2-.2.6-.5 1.1-.9 1.4-.4.3-.8.4-1.2.5-.4.1-.7.4-.7.8 0 .5.4.9 1.2 1.1 1.2.3 2.5-.2 3.4-.6.9.5 2 .8 3.1.8s2.2-.3 3.1-.8c.9.4 2.2.9 3.4.6.8-.2 1.2-.6 1.2-1.1 0-.4-.3-.7-.7-.8-.4-.1-.8-.2-1.2-.5-.4-.3-.7-.8-.9-1.4.5 0 .9-.1 1.1-.2.4-.2.6-.7.4-1.1-.2-.5-.9-.8-1.5-1 .3-.7.4-1.6.4-2.3 0-3.1-2.1-5.3-5.4-5.3z" />
                    </svg>
                  </span>

                  {/* 2. TikTok Icon (Black) */}
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center shadow-sm z-20 border-2 border-white">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.68a6.34 6.34 0 0 0 10.82 4.48c1.64-1.64 2.1-3.95 2.1-6.19V8.69a8.18 8.18 0 0 0 3.57 1.48V6.69z" />
                    </svg>
                  </span>

                  {/* 3. Instagram Icon (Gradient) */}
                  <span
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm z-30 border-2 border-white"
                    style={{
                      background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                  </span>

                  {/* 4. YouTube Icon (Red) */}
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF0000] flex items-center justify-center shadow-sm z-40 border-2 border-white">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </span>
                </motion.span>

                <motion.span
                  initial={{ x: shouldReduceMotion ? 0 : 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1.0, ease: DEFAULT_EASE }}
                >
                  Your Brand&apos;s
                </motion.span>
              </span>

              {/* Line 3: Fades from light gray to full black */}
              <motion.span
                initial={{ opacity: 0.25 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: DEFAULT_EASE }}
                className="block font-bold"
              >
                Biggest Advantage.
              </motion.span>
            </h1>

            {/* Subtitle matching reference text */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: DEFAULT_EASE }}
              className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed mb-8"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </motion.p>

            {/* Two Action Buttons */}
            <motion.div
              initial={{ opacity: 0.25, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: DEFAULT_EASE }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <BlackPillButton href="/contact">
                <span className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Work With Us</span>
                </span>
              </BlackPillButton>
              <WhitePillButton href="/services" showArrow={false}>
                Our Services
              </WhitePillButton>
            </motion.div>
          </div>

          {/* Right Floating Portrait Card (lg:col-span-3) - Sani */}
          <div className="hidden lg:flex lg:col-span-3 justify-center xl:justify-end">
            <motion.div
              initial={{ x: shouldReduceMotion ? 0 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: DEFAULT_EASE }}
              className="relative w-full max-w-[280px] xl:max-w-[310px] h-[430px] xl:h-[460px] rounded-[32px] overflow-hidden bg-neutral-100 shadow-xl border border-neutral-200/70 select-none"
            >
              <Image
                src="/images/hero-sani.jpg"
                alt="Sani"
                fill
                priority
                sizes="(max-width: 1280px) 280px, 310px"
                className="object-cover"
              />
              {/* Floating Follower Chip: Instagram Icon + Sani 8M+ Followers + Verified Badge */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: DEFAULT_EASE }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md py-2.5 px-3.5 rounded-full flex items-center justify-between shadow-lg border border-neutral-100/90 z-20"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-neutral-900 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span className="text-xs sm:text-[13px] font-bold text-neutral-900">Sani 8M+ Followers</span>
                </div>
                <CheckCircle2 className="w-4 h-4 fill-[#0084FF] text-white flex-shrink-0" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SKEWED MARQUEE TICKER                                  */}
      {/* ========================================================= */}
      <SkewedMarquee />

      {/* ========================================================= */}
      {/* 3. ABOUT OUR AGENCY SECTION (Matching Reference)          */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Top Row: Left Pill + Arrow, Right Big Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Left Column: Badge and round arrow button */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <FadeIn>
              <SectionPill label="ABOUT OUR AGENCY" />
            </FadeIn>
            <FadeUp delay={0.15} duration={0.8}>
              <RoundArrowButton href="/about" direction="left" />
            </FadeUp>
          </div>

          {/* Right Column: Editorial Italic + Headline */}
          <div className="lg:col-span-8">
            <SlideFromRight delay={0.1} duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-neutral-900 leading-[1.24]">
                <span className="italic font-light text-neutral-500 block mb-2">
                  We create influencer campaigns –
                </span>
                <span>
                  For brands that value authenticity over vanity metrics, believing that meaningful connections drive lasting impact.
                </span>
              </h2>
            </SlideFromRight>
          </div>
        </div>

        {/* Bottom Row: Left Stats, Right Big Video Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Vertical Stats (220+ Brands, 10M Engagements) */}
          <div className="lg:col-span-4">
            <FadeUp delay={0.2} duration={0.8}>
              <StatsCounter layout="vertical" />
            </FadeUp>
          </div>

          {/* Right Column: Video Preview with Top-Right Action Button */}
          <div className="lg:col-span-8">
            <FadeUp delay={0.25} duration={0.9}>
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[32px] overflow-hidden bg-neutral-950 shadow-2xl border border-neutral-200/80 group">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/about-vlog-studio.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/videos/creator-demo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-neutral-950/10 pointer-events-none" />

                {/* Round black arrow button at the video's top-right corner */}
                <div className="absolute top-5 right-5 z-20">
                  <RoundArrowButton href="/about" direction="up-right" variant="black" />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. GRAY LOGO ROW                                          */}
      {/* ========================================================= */}
      <LogoStrip variant="gray" className="my-8" />

      {/* ========================================================= */}
      {/* 5. STRATEGIC SERVICES                                     */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <SectionPill label="OUR EXPERTISE" className="mb-4" />
            </FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
              <SlideFromLeft delay={0} duration={0.9}>
                <span className="block">Strategic Services</span>
              </SlideFromLeft>
              <SlideFromLeft delay={0.1} duration={0.9}>
                <span className="block italic font-light text-neutral-500 mt-1">
                  For Modern Brands
                </span>
              </SlideFromLeft>
            </h2>
          </div>

          <FadeUp delay={0.2} duration={0.8} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:max-w-md">
            <p className="text-sm text-neutral-600 leading-relaxed">
              Tailored campaign execution that bridges the gap between high-reach talent and bottom-line customer acquisition.
            </p>
            <div className="flex-shrink-0">
              <BlackPillButton href="/services">See All</BlackPillButton>
            </div>
          </FadeUp>
        </div>

        {/* 3 Services Cards stagger fade-up (0.12s stagger) */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.slice(0, 3).map((service) => (
            <StaggerItem
              key={service.id}
              variants={createFadeUpVariants(40, 0.8, 0, Boolean(shouldReduceMotion))}
            >
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ========================================================= */}
      {/* 6. BLACK "WHY CHOOSE US" SECTION                         */}
      {/* ========================================================= */}
      <WhyChooseUs variant="dark" />

      {/* ========================================================= */}
      {/* 7. SUCCESS STORIES & TESTIMONIALS                         */}
      {/* ========================================================= */}
      <TestimonialCards />

      {/* ========================================================= */}
      {/* 8. SUPPORT CENTER FAQ                                     */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <SectionPill label="SUPPORT CENTER" className="mb-4" />
          </FadeIn>
          <FadeUp delay={0.1} duration={0.9}>
            <TextFadeFromGray duration={0.9}>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
                <span>Your Influencer Marketing</span>{" "}
                <span className="block italic font-light text-neutral-500 mt-1">
                  Questions Answered
                </span>
              </h2>
            </TextFadeFromGray>
          </FadeUp>
        </div>

        {/* FAQ Accordion */}
        <FAQAccordion items={homeFaqs} />
      </section>

      {/* ========================================================= */}
      {/* 9. LATEST TRENDS (BLOG ARTICLES)                         */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <SectionPill label="LATEST INSIGHTS" className="mb-4" />
            </FadeIn>
            <TextFadeFromGray duration={0.9}>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
                <span>Latest Trends In</span>{" "}
                <span className="block italic font-light text-neutral-500 mt-1">
                  Creator Marketing
                </span>
              </h2>
            </TextFadeFromGray>
          </div>

          <FadeIn delay={0.2} className="flex-shrink-0">
            <BlackPillButton href="/insights" showArrow={true}>
              View More
            </BlackPillButton>
          </FadeIn>
        </div>

        {/* 3 Blog Cards stagger fade-up (0.12s stagger) */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <StaggerItem
              key={post.id}
              variants={createFadeUpVariants(40, 0.8, 0, Boolean(shouldReduceMotion))}
            >
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
