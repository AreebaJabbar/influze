"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className = "" }: BlogCardProps) {
  return (
    <article
      className={`group rounded-[24px] bg-white overflow-hidden border border-neutral-200/70 shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col h-full ${className}`}
    >
      <Link href={`/blog/${post.slug}`} className="block flex-1 flex flex-col">
        {/* Full-bleed image on top */}
        <div className="relative w-full aspect-[16/11] sm:h-[300px] overflow-hidden bg-neutral-100 flex-shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content container */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
          <div>
            {/* Title: 2 lines max */}
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 line-clamp-2 leading-snug group-hover:text-neutral-700 transition-colors">
              {post.title}
            </h3>

            {/* Excerpt: 3 lines max */}
            <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed font-normal">
              {post.excerpt}
            </p>
          </div>

          {/* Bottom Action: Underlined "Read More →" */}
          <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-950 underline underline-offset-4 group-hover:text-neutral-700 transition-colors">
              <span>Read More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="text-xs text-neutral-400 font-medium">{post.readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
