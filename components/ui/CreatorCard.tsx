"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Creator } from "@/data/creators";

interface CreatorCardProps {
  creator: Creator;
  className?: string;
}

export function CreatorCard({ creator, className = "" }: CreatorCardProps) {
  return (
    <div
      className={`group relative rounded-[24px] bg-white p-3.5 sm:p-4.5 border border-neutral-200/70 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-950 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      <Link href={`/creators#${creator.id}`} className="block">
        {/* Tall portrait with inner rounded corners */}
        <div className="relative w-full aspect-[3/3.8] rounded-[18px] overflow-hidden bg-neutral-100 mb-4 sm:mb-5">
          <Image
            src={creator.image}
            alt={creator.name}
            fill
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Info & Action Row */}
        <div className="flex items-center justify-between gap-2 px-1 pb-1">
          <div>
            {/* Name + Verified Badge */}
            <div className="flex items-center gap-1.5">
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight transition-colors duration-300 group-hover:text-white">
                {creator.name}
              </h3>
              {creator.verified && (
                <span className="text-[#0084FF] flex-shrink-0" title="Verified Creator">
                  <CheckCircle2 className="w-4 h-4 fill-[#0084FF] text-white" />
                </span>
              )}
            </div>

            {/* Role in Gray */}
            <p className="text-xs sm:text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400 mt-0.5">
              - {creator.role}
            </p>
          </div>

          {/* Round Action Button: Inverts to white on black card hover */}
          <div className="flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-out bg-neutral-950 text-white group-hover:bg-white group-hover:text-neutral-950">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
