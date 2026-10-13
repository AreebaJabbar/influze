import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SectionPill } from "@/components/ui/SectionPill";
import { BlackPillButton } from "@/components/ui/Buttons";

export const metadata = {
  title: "404 – Page Not Found | Influze",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 max-w-3xl mx-auto">
      <SectionPill label="ERROR 404" className="mb-6" />

      {/* Big Display 404 */}
      <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-neutral-950 font-sans select-none">
        404
      </h1>

      <h2 className="text-2xl sm:text-3xl font-normal text-neutral-900 mt-4 tracking-tight">
        <span>Oops! Page</span>{" "}
        <span className="italic font-light text-neutral-500">Not Found</span>
      </h2>

      <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed">
        The link you followed may be broken, or the page may have been removed. Let&apos;s get you back to discovering great creator campaigns.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <BlackPillButton href="/">
          Return To Home
        </BlackPillButton>
        <Link
          href="/creators"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-100 transition-colors"
        >
          <span>Explore Talents</span>
        </Link>
      </div>
    </div>
  );
}
