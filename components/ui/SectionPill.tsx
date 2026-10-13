interface SectionPillProps {
  label: string;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionPill({ label, variant = "light", className = "" }: SectionPillProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase select-none ${
        isDark
          ? "bg-neutral-900 text-neutral-200 border border-neutral-800"
          : "bg-white text-neutral-800 border border-neutral-200/80 shadow-sm"
      } ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white" : "bg-neutral-900"}`} />
      <span>{label}</span>
    </div>
  );
}
