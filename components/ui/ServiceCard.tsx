"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <div
      className={`group rounded-[24px] bg-white p-4 sm:p-5 border border-neutral-200/70 shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      <Link href="/services" className="block">
        {/* Image on top */}
        <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden bg-neutral-100 mb-4 sm:mb-5">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Title + Round Arrow Button */}
        <div className="flex items-center justify-between gap-3 mb-3 px-1">
          <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
            {service.title}
          </h3>
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-neutral-950 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-neutral-800">
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-rotate-45" />
          </div>
        </div>

        {/* Tag Chips */}
        <div className="flex flex-wrap gap-2 px-1">
          {service.tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border border-neutral-200/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
