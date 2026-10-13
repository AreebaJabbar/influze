import React from "react";
import { WhitePillButton } from "./Buttons";
import { ArrowRight } from "lucide-react";

interface PageBannerProps {
  prefix: string;
  suffix: string;
  description?: string;
  nextPageHref?: string;
  nextPageLabel?: string;
  className?: string;
}

export function PageBanner({
  prefix,
  suffix,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  nextPageHref = "/services",
  nextPageLabel = "Next Page",
  className = "",
}: PageBannerProps) {
  return (
    <section className={`pt-24 pb-16 md:pt-28 md:pb-20 text-center px-4 sm:px-6 max-w-5xl mx-auto ${className}`}>
      {/* Centered H1 with INLINE overlapping icon cluster */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-950 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 leading-tight">
        <span>{prefix}</span>

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
              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            }}
            title="Instagram"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

        <span>{suffix}</span>
      </h1>

      {/* 2-line Subtitle Paragraph */}
      <p className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
        {description}
      </p>

      {/* Centered White Pill "Next Page →" */}
      <div className="mt-6 sm:mt-8 flex justify-center">
        <WhitePillButton href={nextPageHref} showArrow={true}>
          {nextPageLabel}
        </WhitePillButton>
      </div>
    </section>
  );
}
