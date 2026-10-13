import React from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton } from "@/components/ui/Buttons";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Latest Creator Insights – Influze",
  description: "Industry news, tactical creator strategies, and influencer marketing thought leadership.",
};

export default function InsightsPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        prefix="Latest Creator"
        suffix="Insights"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/faq"
        nextPageLabel="Next Page"
      />

      {/* 2. Black Logo Strip */}
      <LogoStrip variant="black" />

      {/* 3. Header Row & 3×2 Blog Cards Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Row: Pill Left, Heading Middle Column, Black "View More →" Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-14">
          <div className="md:col-span-3">
            <SectionPill label="LATEST INSIGHTS" />
          </div>

          <div className="md:col-span-6 text-left md:text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
              <span>Latest Trends In</span>{" "}
              <span className="block italic font-light text-neutral-500 mt-1">
                Creator Marketing
              </span>
            </h2>
          </div>

          <div className="md:col-span-3 flex justify-start md:justify-end">
            <BlackPillButton href="/contact" showArrow={true}>
              View More
            </BlackPillButton>
          </div>
        </div>

        {/* 3×2 Blog Cards Grid with Full-bleed Top Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Note: NO marquee and NO FAQ on this page per specification */}
    </div>
  );
}
