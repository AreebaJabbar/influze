"use client";

import React from "react";
import Link from "next/link";
import { Check, Flame } from "lucide-react";
import { PricingPlan } from "@/data/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
}

export function PricingCard({ plan, className = "" }: PricingCardProps) {
  const isGrowth = plan.isPopular;

  return (
    <div
      className={`rounded-[28px] p-7 sm:p-9 transition-all duration-300 ease-out flex flex-col justify-between hover:-translate-y-1 ${
        isGrowth
          ? "bg-neutral-950 text-white shadow-2xl ring-1 ring-neutral-800"
          : "bg-white text-neutral-950 border border-neutral-200/80 shadow-sm hover:shadow-md"
      } ${className}`}
    >
      <div>
        {/* Top Header Row: Plan Chip & Optional "Most Popular" Pill */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
              isGrowth
                ? "bg-neutral-800 text-neutral-200"
                : "bg-neutral-100 text-neutral-700"
            }`}
          >
            {plan.name}
          </span>

          {isGrowth && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-neutral-200 border border-neutral-700">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Most Popular</span>
            </div>
          )}
        </div>

        {/* Price Row */}
        <div className="flex items-baseline gap-1.5 mb-3">
          <span className="text-4xl sm:text-5xl font-black tracking-tight">
            {plan.price}
          </span>
          <span
            className={`text-sm font-medium ${
              isGrowth ? "text-neutral-400" : "text-neutral-500"
            }`}
          >
            {plan.period}
          </span>
        </div>

        {/* Short Description */}
        <p
          className={`text-sm leading-relaxed mb-6 ${
            isGrowth ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {plan.description}
        </p>

        {/* Divider */}
        <div
          className={`w-full h-px my-6 ${
            isGrowth ? "bg-neutral-800" : "bg-neutral-200"
          }`}
        />

        {/* What's Included Section */}
        <div className="space-y-4 mb-8">
          <p
            className={`text-xs font-bold uppercase tracking-wider ${
              isGrowth ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            What&apos;s Included:
          </p>

          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm">
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    isGrowth
                      ? "border border-neutral-700 text-white"
                      : "border border-neutral-300 text-neutral-900"
                  }`}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span
                  className={isGrowth ? "text-neutral-200" : "text-neutral-700"}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-width CTA Button */}
      <Link
        href="/contact"
        className={`w-full py-3.5 px-6 rounded-full text-sm font-semibold text-center transition-all duration-300 select-none block ${
          isGrowth
            ? "bg-white text-neutral-950 hover:bg-neutral-200"
            : "bg-neutral-950 text-white hover:bg-neutral-800"
        }`}
      >
        {plan.ctaText}
      </Link>
    </div>
  );
}
