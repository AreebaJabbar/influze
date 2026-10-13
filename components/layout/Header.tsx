"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { BlackPillButton } from "@/components/ui/Buttons";

import { motion, AnimatePresence } from "framer-motion";
import { DEFAULT_EASE } from "@/lib/motion";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setPagesDropdownOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: DEFAULT_EASE }}
      className="relative z-50 w-full bg-white py-5 border-b border-neutral-100/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo variant="dark" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-sm font-medium text-neutral-800">
          {/* Home */}
          <Link
            href="/"
            className={`transition-colors hover:text-neutral-950 ${
              pathname === "/" ? "text-neutral-950 font-bold" : "text-neutral-700"
            }`}
          >
            Home
          </Link>

          {/* About Us ▾ Dropdown */}
            {/* About Us ▾ Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:text-neutral-950 text-neutral-700 py-2 cursor-pointer focus:outline-none"
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            >
              <span className={pathname.startsWith("/about") ? "text-neutral-950 font-bold" : ""}>
                About Us
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: DEFAULT_EASE }}
                  className="absolute top-full left-0 pt-1 z-50"
                >
                  <div className="w-44 bg-white rounded-2xl shadow-xl border border-neutral-100 p-2 space-y-1">
                    <Link
                      href="/about"
                      className="block px-4 py-2.5 text-sm font-medium rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/creators"
                      className="block px-4 py-2.5 text-sm font-medium rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors"
                    >
                      Influencers
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services */}
          <Link
            href="/services"
            className={`transition-colors hover:text-neutral-950 ${
              pathname === "/services" ? "text-neutral-950 font-bold" : "text-neutral-700"
            }`}
          >
            Services
          </Link>

          {/* Pages ▾ Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPagesDropdownOpen(true)}
            onMouseLeave={() => setPagesDropdownOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:text-neutral-950 text-neutral-700 py-2 cursor-pointer focus:outline-none"
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
            >
              <span>Pages</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${pagesDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {pagesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: DEFAULT_EASE }}
                  className="absolute top-full left-0 pt-1 z-50"
                >
                  <div className="w-44 bg-white rounded-2xl shadow-xl border border-neutral-100 p-2 space-y-1">
                    <Link
                      href="/projects"
                      className="block px-4 py-2.5 text-sm font-medium rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/pricing"
                      className="block px-4 py-2.5 text-sm font-medium rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/insights"
                      className="block px-4 py-2.5 text-sm font-medium rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-4 py-2.5 text-sm font-medium rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/not-found"
                      className="block px-4 py-2.5 text-sm font-medium rounded-xl text-neutral-800 hover:bg-neutral-100 transition-colors"
                    >
                      404
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <BlackPillButton
              href="/contact"
              className="hover:!bg-neutral-200 hover:!text-neutral-950 hover:!border-neutral-200 transition-all duration-300"
            >
              Get In Touch
            </BlackPillButton>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-900 hover:bg-neutral-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl">
          <Link
            href="/"
            className="block text-base font-semibold text-neutral-900 py-1"
          >
            Home
          </Link>
          <div className="space-y-2 pl-2 border-l-2 border-neutral-100">
            <p className="text-xs uppercase font-bold text-neutral-400">About</p>
            <Link href="/about" className="block text-sm text-neutral-700 py-1">
              About Us
            </Link>
            <Link href="/creators" className="block text-sm text-neutral-700 py-1">
              Influencers
            </Link>
          </div>
          <Link
            href="/services"
            className="block text-base font-semibold text-neutral-900 py-1"
          >
            Services
          </Link>
          <div className="space-y-2 pl-2 border-l-2 border-neutral-100">
            <p className="text-xs uppercase font-bold text-neutral-400">Pages</p>
            <Link href="/projects" className="block text-sm text-neutral-700 py-1">
              Projects
            </Link>
            <Link href="/pricing" className="block text-sm text-neutral-700 py-1">
              Pricing
            </Link>
            <Link href="/insights" className="block text-sm text-neutral-700 py-1">
              Blog / Insights
            </Link>
            <Link href="/faq" className="block text-sm text-neutral-700 py-1">
              FAQ
            </Link>
            <Link href="/not-found" className="block text-sm text-neutral-700 py-1">
              404 Page
            </Link>
          </div>
          <div className="pt-2">
            <BlackPillButton href="/contact" className="w-full text-center">
              Get In Touch
            </BlackPillButton>
          </div>
        </div>
      )}
    </motion.header>
  );
}
