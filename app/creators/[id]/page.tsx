import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Eye, Heart, Users, Share2 } from "lucide-react";
import { creatorsData } from "@/data/creators";
import { BlackPillButton } from "@/components/ui/Buttons";
import { SectionPill } from "@/components/ui/SectionPill";
import { CreatorCard } from "@/components/ui/CreatorCard";

interface CreatorDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CreatorDetailPage({ params }: CreatorDetailPageProps) {
  const { id } = await params;
  const creator = creatorsData.find((c) => c.id === id);

  if (!creator) {
    notFound();
  }

  const otherCreators = creatorsData.filter((c) => c.id !== creator.id).slice(0, 4);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/creators"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Talents</span>
        </Link>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
        {/* Left: Creator Portrait */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[3/3.8] rounded-[28px] overflow-hidden bg-white p-3 border border-neutral-200/80 shadow-xl">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-neutral-100">
              <Image
                src={creator.image}
                alt={creator.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Right: Detailed Bio & Metrics */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <SectionPill label={creator.category} className="mb-3" />
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950">
                {creator.name}
              </h1>
              {creator.verified && (
                <CheckCircle2 className="w-6 h-6 fill-[#0084FF] text-white" />
              )}
            </div>
            <p className="text-lg text-neutral-500 font-medium mt-1">
              {creator.handle} &bull; {creator.role}
            </p>
          </div>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            {creator.bio}
          </p>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-y border-neutral-200 py-6">
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>FOLLOWERS</span>
              </div>
              <p className="text-2xl font-black text-neutral-950">{creator.followers}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase mb-1">
                <Heart className="w-3.5 h-3.5" />
                <span>ENGAGEMENT</span>
              </div>
              <p className="text-2xl font-black text-neutral-950">{creator.engagement}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-bold uppercase mb-1">
                <Eye className="w-3.5 h-3.5" />
                <span>AUDIENCE</span>
              </div>
              <p className="text-2xl font-black text-neutral-950">18 - 34 YRS</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <BlackPillButton href="/contact">
              Book Campaign With {creator.name}
            </BlackPillButton>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white border border-neutral-200 text-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Talent Media Kit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Talents */}
      <section className="pt-12 border-t border-neutral-200/80">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mb-8">
          Similar Creators You May Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherCreators.map((item) => (
            <CreatorCard key={item.id} creator={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
