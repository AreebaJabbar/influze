import React from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { CreatorCard } from "@/components/ui/CreatorCard";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { creatorsData } from "@/data/creators";
import { homeFaqs } from "@/data/faqs";

export const metadata = {
  title: "Trusted Creator Partners – Influze",
  description: "Browse our roster of vetted, top-tier digital creators across lifestyle, beauty, tech, fashion, and travel.",
};

export default function CreatorsPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        prefix="Trusted Creator"
        suffix="Partners"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/projects"
        nextPageLabel="Next Page"
      />

      {/* 2. Black Logo Strip */}
      <LogoStrip variant="black" />

      {/* 3. Our Talents 4×2 Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionPill label="OUR TALENTS" className="mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
              <span>Discover Exceptional</span>{" "}
              <span className="block italic font-light text-neutral-500 mt-1">
                Digital Creators
              </span>
            </h2>
          </div>

          <div className="max-w-md sm:text-right">
            <p className="text-sm text-neutral-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* 4×2 Grid of 8 Creator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {creatorsData.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </section>

      {/* 4. Skewed Marquee */}
      <SkewedMarquee />

      {/* 5. Support Center FAQ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionPill label="SUPPORT CENTER" className="mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
            <span>Your Influencer Marketing</span>{" "}
            <span className="block italic font-light text-neutral-500 mt-1">
              Questions Answered
            </span>
          </h2>
        </div>

        <FAQAccordion items={homeFaqs} />
      </section>
    </div>
  );
}
