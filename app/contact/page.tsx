"use client";

import React, { useState } from "react";
import {
  MapPin,
  Headphones,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { SectionPill } from "@/components/ui/SectionPill";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import {
  FadeIn,
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  TextFadeFromGray,
} from "@/components/animations";
import { DEFAULT_EASE } from "@/lib/motion";

const contactFaqs = [
  {
    id: "faq-1",
    question: "How Do You Match Brands With Influencers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  },
  {
    id: "faq-2",
    question: "What Social Media Platforms Do You Support?",
    answer:
      "We execute campaigns across TikTok, Instagram, YouTube, and Snapchat, matching your specific audience demographics to creator platform strengths.",
  },
  {
    id: "faq-3",
    question: "Can I Choose The Influencers For My Campaign?",
    answer:
      "Yes, absolutely. Our talent directors curate targeted recommendations, but you always have final review and approval on all roster selections.",
  },
  {
    id: "faq-4",
    question: "How Do You Measure Campaign Success?",
    answer:
      "We provide transparent live tracking covering reach, impressions, verified engagement rates, click-through rates, and ROAS acquisition benchmarks.",
  },
];

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    campaignType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full overflow-x-clip">
      {/* ========================================================= */}
      {/* 1. PAGE BANNER: Let's Build [icons] Together              */}
      {/* ========================================================= */}
      <PageBanner
        prefix="Let's Build"
        suffix="Together"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        nextPageHref="/"
        nextPageLabel="Next Page"
      />

      {/* ========================================================= */}
      {/* 2. BLACK LOGO STRIP                                       */}
      {/* ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: DEFAULT_EASE }}
      >
        <LogoStrip variant="black" />
      </motion.div>

      {/* ========================================================= */}
      {/* 3. LET'S CONNECT & INQUIRY FORM                           */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Address, Contact Info, Socials */}
          <div className="lg:col-span-5 space-y-8">
            <SlideFromLeft delay={0} duration={0.9}>
              <SectionPill label="LET'S CONNECT" className="mb-4" />
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-neutral-950 leading-[1.14]">
                <span>Let&apos;s Grow</span>{" "}
                <span className="block italic font-light text-neutral-500 mt-1">
                  Your Brand Together
                </span>
              </h2>
            </SlideFromLeft>

            <FadeUp delay={0.15} duration={0.8} className="space-y-6 pt-2">
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-900 flex-shrink-0 bg-white shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950 mb-1">
                    ADDRESS
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    457 Morningview Lane<br />
                    New York USA
                  </p>
                </div>
              </div>

              {/* CONTACT US */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-900 flex-shrink-0 bg-white shadow-2xs">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950 mb-1">
                    CONTACT US
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    <a href="mailto:Hello@Influze.Com" className="hover:text-neutral-950 transition-colors">
                      Hello@Influze.Com
                    </a>
                    <br />
                    <a href="tel:+6872973934" className="hover:text-neutral-950 transition-colors">
                      (+68)72973934
                    </a>
                  </p>
                </div>
              </div>

              {/* 4 Round Social Media Icons */}
              <div className="flex items-center gap-3 pt-4">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 flex items-center justify-center transition-all duration-300 shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                  </svg>
                </a>

                {/* X Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X Twitter"
                  className="w-9 h-9 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 flex items-center justify-center transition-all duration-300 shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 flex items-center justify-center transition-all duration-300 shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 flex items-center justify-center transition-all duration-300 shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <SlideFromRight delay={0.15} duration={0.9}>
              {submitted ? (
                <div className="bg-white rounded-[24px] p-8 sm:p-12 border border-neutral-200/80 shadow-md text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-neutral-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950">Inquiry Sent!</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name || "friend"}. We have received your inquiry and our agency directors will be in touch within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          company: "",
                          campaignType: "",
                          message: "",
                        });
                      }}
                      className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-950 text-white hover:bg-neutral-800 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-6 py-3.5 rounded-full border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors shadow-2xs"
                    />
                  </div>

                  {/* EMAIL ADDRESS & COMPANY */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-6 py-3.5 rounded-full border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                        COMPANY
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-6 py-3.5 rounded-full border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* CAMPAIGN TYPE */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                      CAMPAIGN TYPE
                    </label>
                    <div className="relative">
                      <select
                        value={form.campaignType}
                        onChange={(e) => setForm({ ...form, campaignType: e.target.value })}
                        className="w-full px-6 py-3.5 rounded-full border border-neutral-300 bg-white text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 transition-colors appearance-none cursor-pointer shadow-2xs pr-10"
                      >
                        <option value="">Select</option>
                        <option value="Influencer Marketing">Influencer Marketing</option>
                        <option value="Brand Collaboration">Brand Collaboration</option>
                        <option value="Content Strategy">Content Strategy</option>
                        <option value="Talent Management">Talent Management</option>
                        <option value="Digital Campaigns">Digital Campaigns</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-5 rounded-[22px] border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 transition-colors resize-none shadow-2xs"
                    />
                  </div>

                  {/* Send Inquiry Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full text-sm font-semibold bg-neutral-950 text-white hover:bg-neutral-800 transition-colors duration-300 cursor-pointer shadow-sm select-none"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </form>
              )}
            </SlideFromRight>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. GOOGLE MAP SECTION (London Eye with overlay card)      */}
      {/* ========================================================= */}
      <section className="relative w-full h-[380px] sm:h-[450px] bg-neutral-200 overflow-hidden border-y border-neutral-300/80">
        {/* Desaturated Google Map Iframe */}
        <iframe
          title="Google Map London Eye"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540424564882!2d-0.12211422338006834!3d51.50332401124403!2m3!1f0!2f0!3f0!3m2!1i1024!2i784!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
          className="w-full h-full border-0 filter grayscale-[80%] contrast-[1.05]"
          loading="lazy"
        />

        {/* Floating London Eye Card (Top-Left) */}
        <div className="absolute top-6 left-6 z-10 bg-white rounded-xl shadow-lg border border-neutral-200/90 p-4 max-w-xs text-left hidden sm:block">
          <h4 className="text-sm font-bold text-neutral-950">London Eye</h4>
          <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
            Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, UK
          </p>
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold mt-2">
            <span>4.5</span>
            <span className="text-amber-400">★★★★☆</span>
            <span className="text-neutral-400 font-normal">(159,126)</span>
          </div>
          <a
            href="https://maps.google.com/?q=London+Eye"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-neutral-600 mt-3 pt-2 border-t border-neutral-100"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Open in Maps</span>
          </a>
        </div>

        {/* Center zoom tip badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium shadow-sm">
            Use ctrl + scroll to zoom the map
          </span>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SUPPORT CENTER FAQ ACCORDION                           */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <SectionPill label="SUPPORT CENTER" className="mb-4" />
          </FadeIn>
          <FadeUp delay={0.1} duration={0.9}>
            <TextFadeFromGray duration={0.9}>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-950">
                <span>Your Influencer Marketing</span>{" "}
                <span className="block italic font-light text-neutral-500 mt-1">
                  Questions Answered
                </span>
              </h2>
            </TextFadeFromGray>
          </FadeUp>
        </div>

        {/* FAQ Accordion (First item open by default) */}
        <FAQAccordion items={contactFaqs} defaultOpenIndex={0} />
      </section>
    </div>
  );
}
