import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface BaseButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// 1. Black Pill Button (Primary)
export function BlackPillButton({
  children,
  href,
  onClick,
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
}: BaseButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </>
  );

  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-neutral-950 bg-neutral-950 text-white hover:bg-white hover:text-neutral-950 transition-all duration-300 ease-out group select-none shadow-sm ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
}

// 2. White Pill Button (Secondary/Outline)
export function WhitePillButton({
  children,
  href,
  onClick,
  className = "",
  showArrow = true,
  type = "button",
  disabled = false,
}: BaseButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </>
  );

  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-white text-neutral-950 border border-neutral-200/90 shadow-sm hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all duration-300 ease-out group select-none ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
}

// 3. Round Arrow Button (Action circle seen in cards & sliders)
interface RoundArrowButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "black" | "white";
  direction?: "right" | "up-right" | "left";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function RoundArrowButton({
  href,
  onClick,
  variant = "black",
  direction = "right",
  size = "md",
  className = "",
}: RoundArrowButtonProps) {
  const isWhite = variant === "white";

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  const iconSize = size === "sm" ? "w-3.5 h-3.5" : size === "md" ? "w-4 h-4" : "w-5 h-5";

  const Icon = direction === "up-right" ? ArrowUpRight : ArrowRight;

  const content = (
    <div
      className={`rounded-full flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-105 ${sizeClasses} ${
        isWhite
          ? "bg-white text-neutral-950 group-hover:bg-neutral-100 shadow-sm"
          : "bg-neutral-950 text-white group-hover:bg-neutral-800"
      } ${className}`}
    >
      <Icon
        className={`${iconSize} transition-transform duration-300 ease-out ${
          direction === "left"
            ? "rotate-180 group-hover:-translate-x-0.5"
            : direction === "up-right"
            ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            : "group-hover:translate-x-0.5"
        }`}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block group select-none">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block group select-none cursor-pointer">
      {content}
    </button>
  );
}

// 4. Underlined Link with Arrow
interface UnderlineLinkProps {
  label: string;
  href: string;
  variant?: "black" | "white";
  className?: string;
}

export function UnderlineLink({
  label,
  href,
  variant = "black",
  className = "",
}: UnderlineLinkProps) {
  const isWhite = variant === "white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 transition-all duration-300 ease-out group ${
        isWhite ? "text-white hover:text-neutral-300" : "text-neutral-950 hover:text-neutral-700"
      } ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
    </Link>
  );
}
