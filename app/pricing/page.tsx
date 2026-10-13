import React from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton } from "@/components/ui/Buttons";
import { PricingCard } from "@/components/ui/PricingCard";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { pricingPlans } from "@/data/pricing";
import { homeFaqs } from "@/data/faqs";

export const metadata = {
  title: "Choose Your Plan – Influze",
  description: "Transparent influencer marketing plans tailored for growing brands and enterprise campaigns.",
};

export default function PricingPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        prefix="Choose Your"
        suffix="Plan"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/creators"
        nextPageLabel="Next Page"
      />

      {/* 2. Black Logo Strip */}
      <LogoStrip variant="black" />

      {/* 3. Pricing Plans Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionPill label="PRICING PLANS" className="mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
              <span>Choose The <span className="italic">Perfect</span></span>{" "}
              <span className="block italic font-light text-neutral-500 mt-1">
                Campaign Plan
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:max-w-md">
            <p className="text-sm text-neutral-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex-shrink-0">
              <BlackPillButton href="/contact" showArrow={true}>
                Learn More
              </BlackPillButton>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
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
