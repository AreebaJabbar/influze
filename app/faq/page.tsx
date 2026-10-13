import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { homeFaqs, helpCenterFaqs } from "@/data/faqs";

export const metadata = {
  title: "Need More Answers – Influze",
  description: "Find clear answers to your influencer campaigns, creator onboarding, and payment questions.",
};

export default function FAQPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        prefix="Need More"
        suffix="Answers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/contact"
        nextPageLabel="Next Page"
      />

      {/* 2. Black Logo Strip */}
      <LogoStrip variant="black" />

      {/* 3. Help Center Two Columns */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Title + "Any Questions?" Image Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionPill label="HELP CENTER" className="mb-4" />
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
                <span>Your Questions,</span>{" "}
                <span className="block italic font-light text-neutral-500 mt-1">
                  Clearly Answered
                </span>
              </h2>
            </div>

            {/* "Any Questions?" Image Card */}
            <div className="relative rounded-[28px] overflow-hidden bg-neutral-900 aspect-[4/3.8] shadow-xl border border-neutral-200/80 group">
              <Image
                src="/images/why-center.jpg"
                alt="Any Questions?"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />

              {/* White Overlay Box "STILL HAVE QUESTION?" */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-xl text-neutral-950">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  STILL HAVE QUESTION?
                </p>
                <p className="text-sm font-semibold text-neutral-900 mb-4">
                  Can&apos;t find what you&apos;re looking for? Reach out directly to our campaign directors.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-950 text-white hover:bg-neutral-800 transition-colors w-full"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 pt-4">
            <FAQAccordion items={helpCenterFaqs} defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      {/* 4. Support Center Centered Accordion */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/80">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionPill label="SUPPORT CENTER" className="mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
            <span>Your Influencer Marketing</span>{" "}
            <span className="block italic font-light text-neutral-500 mt-1">
              Questions Answered
            </span>
          </h2>
        </div>

        <FAQAccordion items={homeFaqs} defaultOpenIndex={0} />
      </section>
    </div>
  );
}
