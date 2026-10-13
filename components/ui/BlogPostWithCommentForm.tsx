"use client";

import React, { useState, useEffect } from "react";
import { BlogPost } from "@/data/blog";

interface BlogPostWithCommentFormProps {
  post: BlogPost;
}

export function BlogPostWithCommentForm({ post }: BlogPostWithCommentFormProps) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load saved info from localStorage on client
  useEffect(() => {
    try {
      const saved = localStorage.getItem("influze_comment_author");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name) setName(parsed.name);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.website) setWebsite(parsed.website);
        setSaveInfo(true);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !name.trim() || !email.trim()) return;

    if (saveInfo) {
      try {
        localStorage.setItem(
          "influze_comment_author",
          JSON.stringify({ name, email, website })
        );
      } catch {
        // Ignore
      }
    } else {
      try {
        localStorage.removeItem("influze_comment_author");
      } catch {
        // Ignore
      }
    }

    setIsSubmitted(true);
    setComment("");
  };

  return (
    <div className="w-full bg-white text-neutral-950 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Post Title */}
        <h1 className="text-4xl sm:text-5xl md:text-[54px] font-normal tracking-tight text-neutral-950 leading-[1.14] mb-6">
          {post.title}
        </h1>

        {/* Post Description / Excerpt */}
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-14 sm:mb-20">
          {post.excerpt}
        </p>

        {/* Leave A Reply Section */}
        <div id="reply" className="pt-2">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-normal tracking-tight text-neutral-950 mb-3">
            Leave A Reply
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mb-8 sm:mb-10">
            Your email address will not be published. Required fields are marked *
          </p>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-8 p-4 rounded-xl bg-neutral-100 border border-neutral-300 text-neutral-900 text-sm">
              <p className="font-semibold text-neutral-950">Thank you for your reply!</p>
              <p className="text-neutral-600 text-xs mt-0.5">
                Your comment has been submitted and is awaiting approval.
              </p>
            </div>
          )}

          {/* Comment Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Comment * */}
            <div>
              <label
                htmlFor="comment"
                className="block text-sm text-neutral-800 font-normal mb-2"
              >
                Comment <span className="text-neutral-500">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                required
                rows={8}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-white border border-neutral-400/80 rounded-[2px] p-3.5 text-sm sm:text-base text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors"
              />
            </div>

            {/* Name * */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-neutral-800 font-normal mb-2"
              >
                Name <span className="text-neutral-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-neutral-400/80 rounded-[2px] px-3.5 py-2.5 text-sm sm:text-base text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors"
              />
            </div>

            {/* Email * */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-neutral-800 font-normal mb-2"
              >
                Email <span className="text-neutral-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-neutral-400/80 rounded-[2px] px-3.5 py-2.5 text-sm sm:text-base text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors"
              />
            </div>

            {/* Website */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm text-neutral-800 font-normal mb-2"
              >
                Website
              </label>
              <input
                id="website"
                name="website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full bg-white border border-neutral-400/80 rounded-[2px] px-3.5 py-2.5 text-sm sm:text-base text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="save-info"
                name="saveInfo"
                type="checkbox"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
                className="mt-1 w-4 h-4 rounded-xs border-neutral-400 text-neutral-950 focus:ring-0 cursor-pointer"
              />
              <label
                htmlFor="save-info"
                className="text-xs sm:text-sm text-neutral-600 select-none cursor-pointer leading-relaxed"
              >
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            {/* Submit Button: Post Comment */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold bg-neutral-950 text-white hover:bg-neutral-800 transition-colors duration-300 cursor-pointer select-none"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
