"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { DEFAULT_EASE, DEFAULT_VIEWPORT } from "@/lib/motion";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const columnVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: DEFAULT_EASE },
    },
  };

  const navLinkClasses =
    "inline-block transition-all duration-300 ease-out text-neutral-400 hover:text-white hover:translate-x-1";

  const socialIconClasses =
    "w-9 h-9 rounded-full bg-neutral-800 text-neutral-300 hover:bg-white hover:text-neutral-950 hover:-translate-y-1 flex items-center justify-center transition-all duration-300 ease-out shadow-sm";

  return (
    <footer className="w-full bg-neutral-950 text-white pt-16 sm:pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Layout with 0.1s stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={DEFAULT_VIEWPORT}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800"
        >
          {/* Column 1: Brand Info & Socials (lg:col-span-5) */}
          <motion.div variants={columnVariants} className="lg:col-span-5 space-y-6">
            <Logo variant="light" />
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              We connect brands with creators through authentic partnerships that inspire audiences and deliver measurable results.
            </p>

            {/* 3 Round Gray Social Icons with hover lift/invert */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className={socialIconClasses}
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter"
                className={socialIconClasses}
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className={socialIconClasses}
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2: EXPLORE (lg:col-span-2) */}
          <motion.div variants={columnVariants} className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">EXPLORE</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className={navLinkClasses}>Home</Link>
              </li>
              <li>
                <Link href="/about" className={navLinkClasses}>About</Link>
              </li>
              <li>
                <Link href="/services" className={navLinkClasses}>Services</Link>
              </li>
              <li>
                <Link href="/creators" className={navLinkClasses}>Creators</Link>
              </li>
              <li>
                <Link href="/insights" className={navLinkClasses}>Insights</Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: SERVICES (lg:col-span-2) */}
          <motion.div variants={columnVariants} className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">SERVICES</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className={navLinkClasses}>Influencer Marketing</Link>
              </li>
              <li>
                <Link href="/services" className={navLinkClasses}>Campaign Strategy</Link>
              </li>
              <li>
                <Link href="/services" className={navLinkClasses}>Creator Management</Link>
              </li>
              <li>
                <Link href="/services" className={navLinkClasses}>Content Production</Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: CONTACT US (lg:col-span-3) */}
          <motion.div variants={columnVariants} className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">CONTACT US</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <a href="mailto:Hello@Influze.Com" className="hover:text-white transition-colors duration-300">
                  Hello@Influze.Com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <a href="tel:+6872973934" className="hover:text-white transition-colors duration-300">
                  (+68)72973934
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                <span>3763 Newton Maco</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Influze | All Rights Reserved</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-neutral-300 transition-colors duration-300">Privacy</Link>
            <Link href="/contact" className="hover:text-neutral-300 transition-colors duration-300">Cookie</Link>
            <Link href="/faq" className="hover:text-neutral-300 transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
