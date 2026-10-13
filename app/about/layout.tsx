import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Agency – Influze",
  description:
    "We create influencer campaigns for brands that value authenticity over vanity metrics, believing that meaningful connections drive lasting impact.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
