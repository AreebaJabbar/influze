"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, Heart } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div
      className={`group rounded-[24px] bg-white p-3.5 sm:p-4.5 border border-neutral-200/70 shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      <Link href="/projects" className="block">
        {/* Top: Large image with dark overlay and inside badges */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[20px] overflow-hidden bg-neutral-900 mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-transparent" />

          {/* Top-Left: Category Tag Chips */}
          <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Row on Image: Title + Subtitle and Round Arrow Button */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between gap-3 z-10">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-0.5 font-medium">
                {project.subtitle}
              </p>
            </div>

            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-black">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Below Image: Creator Info + Reach & Engagement Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-2 py-1">
          {/* Creator Avatar & Name */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
              <Image
                src={project.creatorAvatar}
                alt={project.creatorName}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-neutral-950">
                {project.creatorName}
              </span>
              {project.creatorVerified && (
                <CheckCircle2 className="w-3.5 h-3.5 fill-[#0084FF] text-white" />
              )}
            </div>
          </div>

          {/* Stats Badges: REACH & ENGAGEMENT */}
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-neutral-400" />
              <span>REACH</span>
              <span className="text-neutral-950">{project.reach}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-neutral-400" />
              <span>ENGAGEMENT</span>
              <span className="text-neutral-950">{project.engagement}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
