import React from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton } from "@/components/ui/Buttons";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { TestimonialCards } from "@/components/ui/TestimonialCards";
import { servicesData } from "@/data/services";
import { FadeIn, FadeUp, SlideFromLeft, SlideFromRight } from "@/components/animations";

export const metadata = {
  title: "Services We Offer – Influze",
  description: "Explore Influze's comprehensive creator and influencer marketing capabilities.",
};

export default function ServicesPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        prefix="Services We"
        suffix="Offer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/projects"
        nextPageLabel="Next Page"
      />

      {/* 2. Black Logo Strip */}
      <LogoStrip variant="black" />

      {/* 3. Our Expertise Section Header & 3x2 Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between mb-14">
          <div className="lg:col-span-7">
            <FadeIn>
              <SectionPill label="OUR EXPERTISE" className="mb-4" />
            </FadeIn>
            <SlideFromLeft delay={0.1} duration={0.9}>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
                <span>Strategic Services</span>{" "}
                <span className="block italic font-light text-neutral-500 mt-1">
                  For Modern Brands
                </span>
              </h2>
            </SlideFromLeft>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end space-y-4">
            <SlideFromRight delay={0.15} duration={0.9}>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md lg:text-right mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex lg:justify-end">
                <BlackPillButton href="/contact" showArrow={true}>
                  Learn More
                </BlackPillButton>
              </div>
            </SlideFromRight>
          </div>
        </div>

        {/* 3×2 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => (
            <FadeUp key={service.id} delay={0.1 + (idx % 3) * 0.12} duration={0.8}>
              <ServiceCard service={service} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 4. Skewed Marquee */}
      <SkewedMarquee />

      {/* 5. Success Stories & Testimonials */}
      <TestimonialCards />
    </div>
  );
}
