import React from "react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { BlogPostWithCommentForm } from "@/components/ui/BlogPostWithCommentForm";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Post Not Found – Influze" };

  return {
    title: `${post.title} – Influze`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostWithCommentForm post={post} />;
}
