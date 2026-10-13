import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch – Influze",
  description:
    "Connect with Influze to scale your creator strategy and build high-converting brand partnerships.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
