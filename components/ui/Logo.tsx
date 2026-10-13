import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center group select-none transition-opacity hover:opacity-90 ${className}`}
    >
      <Image
        src="/images/influze-logo.png"
        alt="Influze"
        width={144}
        height={34}
        priority
        className={`h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] ${
          !isDark ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
