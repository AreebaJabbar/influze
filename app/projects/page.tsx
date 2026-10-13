import React from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton } from "@/components/ui/Buttons";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SkewedMarquee } from "@/components/ui/SkewedMarquee";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { projectsData } from "@/data/projects";
import { homeFaqs } from "@/data/faqs";

export const metadata = {
  title: "Our Latest Projects – Influze",
  description: "Explore measurable influencer campaign case studies that deliver outstanding ROI.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Banner */}
      <PageBanner
        prefix="Our Latest"
        suffix="Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/pricing"
        nextPageLabel="Next Page"
      />

      {/* 2. Black Logo Strip */}
      <LogoStrip variant="black" />

      {/* 3. Featured Projects 2×2 Grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionPill label="FEATURED PROJECTS" className="mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
              <span>Campaigns That</span>{" "}
              <span className="block italic font-light text-neutral-500 mt-1">
                Deliver Real Results
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

        {/* 2×2 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
