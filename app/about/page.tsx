"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Wallet,
  CheckCircle2,
  ArrowRight,
  Heart,
  Send,
  Sparkles,
  Target,
  Lightbulb,
  Eye,
} from "lucide-react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import { SectionPill } from "@/components/ui/SectionPill";
import {
  BlackPillButton,
  WhitePillButton,
  RoundArrowButton,
} from "@/components/ui/Buttons";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { LogoStrip } from "@/components/ui/LogoStrip";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  TextFadeFromGray,
} from "@/components/animations";
import { DEFAULT_EASE, DEFAULT_VIEWPORT, createFadeUpVariants } from "@/lib/motion";

/* ========================================================================== */
/* ABOUT PAGE TYPED CONTENT (SELF-CONTAINED)                                  */
/* ========================================================================== */

const bannerContent = {
  prefix: "About Our",
  suffix: "Agency",
  description:
    "We are a modern creator and talent agency built to engineer high-converting partnerships and lasting cultural resonance.",
  nextPageHref: "/services",
  nextPageLabel: "Next Page",
};

const aboutIntro = {
  pill: "ABOUT OUR AGENCY",
  italicLine: "We create influencer campaigns –",
  paragraph:
    "For brands that value authenticity over vanity metrics, believing that meaningful connections drive lasting impact.",
};

const stats = [
  {
    icon: "rocket",
    target: 220,
    suffix: "+",
    label: "Brands Launched",
  },
  {
    icon: "wallet",
    target: 10,
    suffix: "M",
    label: "Engagements Generated",
  },
] as const;

const marqueeText = [
  "INFLUENCER MARKETING",
  "BRAND CAMPAIGNS",
  "CONTENT STRATEGY",
  "TALENT MANAGEMENT",
  "DIGITAL CAMPAIGNS",
  "CREATOR ECONOMY",
];

const whyChoose = {
  pill: "WHY CHOOSE US",
  heading: {
    line1: "Driving Results Through",
    line2: "Real Influence",
  },
  features: [
    {
      title: "STRATEGIC CAMPAIGN PLANNING",
      description:
        "We analyze behavioral audience overlap, engagement integrity, and historical conversion metrics before recommending any talent.",
      linkText: "Get Started",
      href: "/services",
    },
    {
      title: "ENGAGING CONTENT CREATION",
      description:
        "Our creative directors build narrative hooks and dynamic storyboard guidelines that align with your brand standards.",
      linkText: "Get Started",
      href: "/services",
    },
  ],
  profileCard: {
    name: "Sarah Johnson",
    verified: true,
    views: "43.4K",
    image: "/images/why-center.jpg",
    placeholderText: "Send Message...",
  },
  insightCard: {
    title: "EXPERT INDUSTRY INSIGHTS",
    description:
      "Access proprietary market intelligence, competitive creator benchmarks, and real-time social platform trend forecasts.",
    linkText: "Get Started",
    href: "/services",
  },
  connectLabel: "Book A Call",
};

const talents = [
  {
    id: "ethan-carter",
    name: "Ethan Carter",
    role: "Lifestyle Creator",
    image: "/images/creator-ethan.jpg",
    verified: true,
    isDefaultBlack: false,
  },
  {
    id: "sophia-bennett",
    name: "Sophia Bennett",
    role: "Beauty Influencer",
    image: "/images/creator-sophia.jpg",
    verified: true,
    isDefaultBlack: true,
  },
  {
    id: "naomi-mitchell",
    name: "Naomi Mitchell",
    role: "Tech Reviewer",
    image: "/images/creator-naomi.jpg",
    verified: true,
    isDefaultBlack: false,
  },
  {
    id: "ava-collins",
    name: "Ava Collins",
    role: "Fashion Creator",
    image: "/images/creator-ava.jpg",
    verified: true,
    isDefaultBlack: false,
  },
];

const talentsSectionText = {
  pill: "OUR TALENTS",
  headingLine1: "Discover Exceptional",
  headingLine2: "Digital Creators",
  description:
    "Our roster of verified digital talent commands deep community loyalty and measurable commercial engagement across all channels.",
  buttonText: "View More",
};

/* ========================================================================== */
/* SECTION 1: PAGE BANNER                                                     */
/* ========================================================================== */

function AboutBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Centered H1 with INLINE overlapping icon cluster */}
      <motion.h1
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: DEFAULT_EASE }}
        className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-950 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 leading-tight"
      >
        <span>{bannerContent.prefix}</span>

        {/* INLINE Overlapping Icon Cluster */}
        <span className="inline-flex items-center -space-x-2.5 mx-1.5 align-middle">
          {/* 1. Snapchat Yellow Circle */}
          <span
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFC00] flex items-center justify-center shadow-sm z-10 border-2 border-white"
            title="Snapchat"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c-3.3 0-5.4 2.2-5.4 5.3 0 .7.1 1.6.4 2.3-.6.2-1.3.5-1.5 1-.2.4 0 .9.4 1.1.2.1.6.2 1.1.2-.2.6-.5 1.1-.9 1.4-.4.3-.8.4-1.2.5-.4.1-.7.4-.7.8 0 .5.4.9 1.2 1.1 1.2.3 2.5-.2 3.4-.6.9.5 2 .8 3.1.8s2.2-.3 3.1-.8c.9.4 2.2.9 3.4.6.8-.2 1.2-.6 1.2-1.1 0-.4-.3-.7-.7-.8-.4-.1-.8-.2-1.2-.5-.4-.3-.7-.8-.9-1.4.5 0 .9-.1 1.1-.2.4-.2.6-.7.4-1.1-.2-.5-.9-.8-1.5-1 .3-.7.4-1.6.4-2.3 0-3.1-2.1-5.3-5.4-5.3z" />
            </svg>
          </span>

          {/* 2. Instagram Gradient Circle */}
          <span
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-sm z-20 border-2 border-white"
            style={{
              background:
                "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            }}
            title="Instagram"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
            </svg>
          </span>

          {/* 3. Dark Circle with White Arrow */}
          <span
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900 flex items-center justify-center shadow-sm z-30 border-2 border-white text-white"
            title="Arrow"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
        </span>

        <span>{bannerContent.suffix}</span>
      </motion.h1>

      {/* 2-line Subtitle Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8, ease: DEFAULT_EASE }}
        className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed"
      >
        {bannerContent.description}
      </motion.p>

      {/* Centered White Pill "Next Page →" with hover to #3A3A3A */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.8, ease: DEFAULT_EASE }}
        className="mt-6 sm:mt-8 flex justify-center"
      >
        <Link
          href={bannerContent.nextPageHref}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-white text-neutral-950 border border-neutral-200/90 shadow-sm hover:bg-[#3A3A3A] hover:text-white hover:border-[#3A3A3A] transition-all duration-300 ease-out group select-none cursor-pointer"
        >
          <span>{bannerContent.nextPageLabel}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}

/* ========================================================================== */
/* SECTION 3: ABOUT INTRO BLOCK WITH COUNT-UP STATS & AUTOPLAY VIDEO          */
/* ========================================================================== */

function AboutStats() {
  const [brandsCount, setBrandsCount] = useState(0);
  const [engagementCount, setEngagementCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView) return;

    // Animate Brands Launched: 0 -> 220 over ~2s ease-out
    const controlsBrands = animate(0, stats[0].target, {
      duration: 2,
      ease: DEFAULT_EASE,
      onUpdate: (latest) => setBrandsCount(Math.round(latest)),
    });

    // Animate Engagements Generated: 0 -> 10 over ~2s ease-out
    const controlsEng = animate(0, stats[1].target, {
      duration: 2,
      ease: DEFAULT_EASE,
      onUpdate: (latest) => setEngagementCount(Math.round(latest)),
    });

    return () => {
      controlsBrands.stop();
      controlsEng.stop();
    };
  }, [isInView]);

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-neutral-200">
      <div>
        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 mb-2">
          <Rocket className="w-5 h-5 text-neutral-800" />
        </div>
        <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          {brandsCount}
          {stats[0].suffix}
        </div>
        <p className="text-xs uppercase font-bold tracking-wider text-neutral-500 mt-1">
          {stats[0].label}
        </p>
      </div>

      <div>
        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 mb-2">
          <Wallet className="w-5 h-5 text-neutral-800" />
        </div>
        <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          {engagementCount}
          {stats[1].suffix}
        </div>
        <p className="text-xs uppercase font-bold tracking-wider text-neutral-500 mt-1">
          {stats[1].label}
        </p>
      </div>
    </div>
  );
}

function AboutIntroSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Heading, Italic intro, Arrow button, Stats */}
        <div className="lg:col-span-6 space-y-8">
          <FadeIn>
            <SectionPill label={aboutIntro.pill} />
          </FadeIn>

          <div className="space-y-4">
            <FadeUp delay={0.1} duration={0.8}>
              <span className="italic font-light text-neutral-500 block mb-1 text-2xl sm:text-3xl md:text-4xl leading-[1.25] tracking-tight">
                {aboutIntro.italicLine}
              </span>
            </FadeUp>
            <FadeUp delay={0.25} duration={0.8}>
              <p className="text-2xl sm:text-3xl md:text-4xl leading-[1.25] tracking-tight text-neutral-900 font-normal">
                {aboutIntro.paragraph}
              </p>
            </FadeUp>
          </div>

          {/* Left Arrow Button */}
          <FadeUp delay={0.3} duration={0.8} className="pt-2">
            <RoundArrowButton href="/about" direction="left" />
          </FadeUp>

          {/* 220+ & 10M Count-Up Stats */}
          <AboutStats />
        </div>

        {/* Right Column: Studio Creator Video Preview */}
        <div className="lg:col-span-6">
          <FadeUp delay={0.2} duration={0.9} y={50}>
            {/* TODO: Drop a real mp4 video file in public/videos/about.mp4 */}
            <div className="relative w-full aspect-[16/11] rounded-[28px] overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200/80 group">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/about-studio.jpg"
                className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
              >
                <source src="/videos/about.mp4" type="video/mp4" />
                {/* Fallback image */}
                <Image
                  src="/images/about-studio.jpg"
                  alt="Creator Studio Shoot"
                  fill
                  className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                />
              </video>
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors pointer-events-none" />

              {/* Round black right-arrow button at video's top-right corner */}
              <div className="absolute top-4 right-4 z-10">
                <RoundArrowButton href="/about" direction="up-right" variant="black" />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* SECTION 5: WHY CHOOSE US (LIGHT BACKGROUND VARIANT)                        */
/* ========================================================================== */

function WhyChooseUsLight() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7] text-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: Pill + Heading fade from light gray to black */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <FadeIn>
            <SectionPill label={whyChoose.pill} variant="light" className="mb-4" />
          </FadeIn>
          <TextFadeFromGray duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-950">
              <span>{whyChoose.heading.line1}</span>{" "}
              <span className="block italic font-light text-neutral-500 mt-1">
                {whyChoose.heading.line2}
              </span>
            </h2>
          </TextFadeFromGray>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          {/* Column 1: Feature Points (slide from left, staggered 0.15s) */}
          <div className="space-y-8 sm:space-y-10">
            {whyChoose.features.map((feature, idx) => (
              <SlideFromLeft key={feature.title} delay={idx * 0.15} duration={0.9}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-white shadow-sm text-neutral-950">
                    {idx === 0 ? <Target className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {feature.description}
                    </p>
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mt-3 underline underline-offset-4 text-neutral-950 hover:text-neutral-700 transition-colors"
                    >
                      <span>{feature.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </SlideFromLeft>
            ))}
          </div>

          {/* Column 2 (Center): Tall Portrait Card (fades up with scale 0.96 -> 1) */}
          <div className="flex justify-center">
            <ScaleIn scale={0.96} duration={0.8} delay={0.2} className="w-full max-w-sm">
              <div className="relative w-full aspect-[3/4.2] rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-300/80">
                <Image
                  src={whyChoose.profileCard.image}
                  alt={whyChoose.profileCard.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35" />

                {/* Top-Left: "Sarah Johnson ✓" badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs font-semibold">
                  <span>{whyChoose.profileCard.name}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 fill-[#0084FF] text-white" />
                </div>

                {/* Top-Right: Gray "43.4K" views chip */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-medium">
                  <Eye className="w-3 h-3" />
                  <span>{whyChoose.profileCard.views}</span>
                </div>

                {/* Bottom: "Send Message..." Pill Input with Heart + Send Icons */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center justify-between bg-white/25 backdrop-blur-md rounded-full px-4 py-2.5 border border-white/30 text-white text-xs shadow-lg">
                    <span className="text-white/80 font-normal">
                      {whyChoose.profileCard.placeholderText}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <Heart className="w-4 h-4 fill-red-500 text-red-500 cursor-pointer transition-transform hover:scale-110" />
                      <Send className="w-4 h-4 text-white cursor-pointer transition-transform hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>

          {/* Column 3 (Right): Black Rounded Card (slides from right) */}
          <div className="space-y-6">
            <SlideFromRight delay={0.25} duration={0.9}>
              <div className="rounded-[26px] p-7 sm:p-8 bg-neutral-950 text-white shadow-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-950 mb-5 shadow-sm">
                  <Lightbulb className="w-6 h-6 text-neutral-950" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-3">
                  {whyChoose.insightCard.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-neutral-400">
                  {whyChoose.insightCard.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={whyChoose.insightCard.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider underline underline-offset-4 text-white hover:text-neutral-300 transition-colors"
                  >
                    <span>{whyChoose.insightCard.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SlideFromRight>

            {/* "Let's Connect : ———— [Book A Call]" row */}
            <div className="pt-2">
              {/* Line draws left -> right */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={DEFAULT_VIEWPORT}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease: DEFAULT_EASE,
                }}
                className="h-[1px] w-full origin-left bg-neutral-300 mb-4"
              />

              <FadeUp delay={0.4} duration={0.6}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Let&apos;s Connect :
                  </span>
                  <WhitePillButton href="/contact" showArrow={false}>
                    {whyChoose.connectLabel}
                  </WhitePillButton>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* SECTION 6: OUR TALENTS SECTION (4 CREATORS, CARD 2 BLACK BY DEFAULT)       */
/* ========================================================================== */

function TalentsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
        <div>
          <FadeIn>
            <SectionPill label={talentsSectionText.pill} className="mb-4" />
          </FadeIn>
          <SlideFromLeft delay={0.1} duration={0.9}>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
              <span>{talentsSectionText.headingLine1}</span>{" "}
              <span className="block italic font-light text-neutral-500 mt-1">
                {talentsSectionText.headingLine2}
              </span>
            </h2>
          </SlideFromLeft>
        </div>

        <FadeUp delay={0.2} duration={0.8} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-md">
          <p className="text-sm text-neutral-600 leading-relaxed hidden md:block">
            {talentsSectionText.description}
          </p>
          <div className="flex-shrink-0">
            <BlackPillButton href="/creators" showArrow={true}>
              {talentsSectionText.buttonText}
            </BlackPillButton>
          </div>
        </FadeUp>
      </div>

      {/* 4 Creator Cards Grid: Staggered Fade Up (0.12s stagger) */}
      <StaggerContainer
        stagger={0.12}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {talents.map((creator) => {
          const isBlack = creator.isDefaultBlack;

          return (
            <StaggerItem
              key={creator.id}
              variants={createFadeUpVariants(40, 0.8, 0, Boolean(shouldReduceMotion))}
            >
              <div
                className={`group relative rounded-[24px] p-3.5 sm:p-4.5 border shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 ${
                  isBlack
                    ? "bg-neutral-950 text-white border-neutral-900 shadow-xl"
                    : "bg-white text-neutral-950 border-neutral-200/70 hover:shadow-md"
                }`}
              >
                <Link href={`/creators#${creator.id}`} className="block">
                  {/* Portrait Image */}
                  <div className="relative w-full aspect-[3/3.8] rounded-[18px] overflow-hidden bg-neutral-100 mb-4 sm:mb-5">
                    <Image
                      src={creator.image}
                      alt={creator.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Info Row: Name + Role + Arrow Button */}
                  <div className="flex items-center justify-between gap-2 px-1 pb-1">
                    <div>
                      {/* Name + Verified Badge */}
                      <div className="flex items-center gap-1.5">
                        <h3
                          className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${
                            isBlack ? "text-white" : "text-neutral-950"
                          }`}
                        >
                          {creator.name}
                        </h3>
                        {creator.verified && (
                          <span className="text-[#0084FF] flex-shrink-0" title="Verified Creator">
                            <CheckCircle2 className="w-4 h-4 fill-[#0084FF] text-white" />
                          </span>
                        )}
                      </div>

                      {/* Role in Gray */}
                      <p
                        className={`text-xs sm:text-sm mt-0.5 transition-colors duration-300 ${
                          isBlack ? "text-neutral-400" : "text-neutral-500"
                        }`}
                      >
                        - {creator.role}
                      </p>
                    </div>

                    {/* Round Arrow Button: Inverted White for Card 2, Black for other cards */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
                          isBlack
                            ? "bg-white text-neutral-950 group-hover:bg-neutral-100"
                            : "bg-neutral-950 text-white group-hover:bg-neutral-800"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}

/* ========================================================================== */
/* MAIN ABOUT PAGE COMPONENT                                                  */
/* ========================================================================== */

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full overflow-x-clip">
      {/* 1. PageBanner */}
      <AboutBanner />

      {/* 2. Black LogoStrip right under the banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.8, ease: DEFAULT_EASE }}
      >
        <LogoStrip variant="black" />
      </motion.div>

      {/* 3. About Block: Pill, Intro, Arrow Button, Stats, Video */}
      <AboutIntroSection />

      {/* 4. SkewedMarquee Band */}
      <SkewedMarquee />

      {/* 5. Why Choose Us (Light Background Variant) */}
      <WhyChooseUsLight />

      {/* 6. Our Talents (4 Cards, Sophia Bennett Black by Default) */}
      <TalentsSection />
    </div>
  );
}
