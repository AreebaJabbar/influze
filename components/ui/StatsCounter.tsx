"use client";

import React, { useEffect, useState, useRef } from "react";
import { Rocket, Wallet } from "lucide-react";
import { animate, useInView } from "framer-motion";
import { DEFAULT_EASE } from "@/lib/motion";

interface StatsCounterProps {
  layout?: "grid" | "vertical";
  className?: string;
}

export function StatsCounter({ layout = "grid", className = "" }: StatsCounterProps) {
  const [brandsCount, setBrandsCount] = useState(0);
  const [engagementCount, setEngagementCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView) return;

    // Animate Brands: 0 -> 220 over 2 seconds
    const controlsBrands = animate(0, 220, {
      duration: 2,
      ease: DEFAULT_EASE,
      onUpdate: (latest) => {
        setBrandsCount(Math.round(latest));
      },
    });

    // Animate Engagement: 0 -> 10 over 2 seconds
    const controlsEngagement = animate(0, 10, {
      duration: 2,
      ease: DEFAULT_EASE,
      onUpdate: (latest) => {
        setEngagementCount(Math.round(latest));
      },
    });

    return () => {
      controlsBrands.stop();
      controlsEngagement.stop();
    };
  }, [isInView]);

  if (layout === "vertical") {
    return (
      <div ref={containerRef} className={`space-y-8 sm:space-y-10 ${className}`}>
        {/* Stat 1: 220+ Brands Launched */}
        <div>
          <Rocket className="w-7 h-7 text-neutral-900 mb-3" />
          <div className="text-4xl sm:text-5xl md:text-[54px] font-black text-neutral-950 tracking-tight leading-none">
            {brandsCount}+
          </div>
          <p className="text-sm sm:text-base text-neutral-600 font-medium mt-2">
            Brands Launched
          </p>
        </div>

        {/* Stat 2: 10M Engagements Generated */}
        <div>
          <Wallet className="w-7 h-7 text-neutral-900 mb-3" />
          <div className="text-4xl sm:text-5xl md:text-[54px] font-black text-neutral-950 tracking-tight leading-none">
            {engagementCount}M
          </div>
          <p className="text-sm sm:text-base text-neutral-600 font-medium mt-2">
            Engagements Generated
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`grid grid-cols-2 gap-6 sm:gap-8 ${className}`}>
      {/* Stat 1: 220+ Brands Launched */}
      <div>
        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 mb-2 shadow-2xs">
          <Rocket className="w-5 h-5 text-neutral-800" />
        </div>
        <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          {brandsCount}+
        </div>
        <p className="text-xs uppercase font-bold tracking-wider text-neutral-500 mt-1">
          Brands Launched
        </p>
      </div>

      {/* Stat 2: 10M Engagements Generated */}
      <div>
        <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 mb-2 shadow-2xs">
          <Wallet className="w-5 h-5 text-neutral-800" />
        </div>
        <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          {engagementCount}M
        </div>
        <p className="text-xs uppercase font-bold tracking-wider text-neutral-500 mt-1">
          Engagements Generated
        </p>
      </div>
    </div>
  );
}
