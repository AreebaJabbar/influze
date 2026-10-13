"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion, Variants, TargetAndTransition } from "framer-motion";
import {
  DEFAULT_EASE,
  DEFAULT_VIEWPORT,
  createFadeUpVariants,
  createSlideFromLeftVariants,
  createSlideFromRightVariants,
  createFadeInVariants,
  createScaleInVariants,
  createStaggerContainerVariants,
  createTextFadeFromGrayVariants,
} from "@/lib/motion";

export function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

interface BaseMotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: "inView" | "load";
  viewportAmount?: number;
  viewportMargin?: string;
  id?: string;
}

// 1. FadeUp Component
export function FadeUp({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 40,
  trigger = "inView",
  viewportAmount = 0.2,
  viewportMargin = "0px 0px -80px 0px",
  id,
}: BaseMotionProps & { y?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = createFadeUpVariants(y, duration, delay, Boolean(shouldReduceMotion));

  if (trigger === "load") {
    return (
      <motion.div
        id={id}
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 2. SlideFromLeft Component
export function SlideFromLeft({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  x = -80,
  trigger = "inView",
  viewportAmount = 0.2,
  viewportMargin = "0px 0px -80px 0px",
  id,
}: BaseMotionProps & { x?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const effectiveX = isMobile ? (x < 0 ? -30 : 30) : x;
  const variants = createSlideFromLeftVariants(
    effectiveX,
    duration,
    delay,
    Boolean(shouldReduceMotion)
  );

  if (trigger === "load") {
    return (
      <motion.div
        id={id}
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. SlideFromRight Component
export function SlideFromRight({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  x = 80,
  trigger = "inView",
  viewportAmount = 0.2,
  viewportMargin = "0px 0px -80px 0px",
  id,
}: BaseMotionProps & { x?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const effectiveX = isMobile ? (x > 0 ? 30 : -30) : x;
  const variants = createSlideFromRightVariants(
    effectiveX,
    duration,
    delay,
    Boolean(shouldReduceMotion)
  );

  if (trigger === "load") {
    return (
      <motion.div
        id={id}
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 4. FadeIn Component
export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  trigger = "inView",
  viewportAmount = 0.2,
  viewportMargin = "0px 0px -80px 0px",
  id,
}: BaseMotionProps) {
  const variants = createFadeInVariants(duration, delay);

  if (trigger === "load") {
    return (
      <motion.div
        id={id}
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 5. ScaleIn Component
export function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  scale = 0.96,
  trigger = "inView",
  viewportAmount = 0.2,
  viewportMargin = "0px 0px -80px 0px",
  id,
}: BaseMotionProps & { scale?: number }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = createScaleInVariants(scale, duration, delay, Boolean(shouldReduceMotion));

  if (trigger === "load") {
    return (
      <motion.div
        id={id}
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 6. StaggerContainer Component
export function StaggerContainer({
  children,
  className = "",
  stagger = 0.12,
  delay = 0,
  trigger = "inView",
  viewportAmount = 0.2,
  viewportMargin = "0px 0px -80px 0px",
  id,
}: BaseMotionProps & { stagger?: number }) {
  const variants = createStaggerContainerVariants(stagger, delay);

  if (trigger === "load") {
    return (
      <motion.div
        id={id}
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 7. StaggerItem Component
export function StaggerItem({
  children,
  className = "",
  variants,
  custom,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  custom?: unknown;
  id?: string;
}) {
  const defaultItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: DEFAULT_EASE },
    },
  };

  return (
    <motion.div
      id={id}
      variants={variants || defaultItemVariants}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 8. TextFadeFromGray Component
export function TextFadeFromGray({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  trigger = "inView",
  viewportAmount = 0.2,
  viewportMargin = "0px 0px -80px 0px",
  id,
}: BaseMotionProps) {
  const variants = createTextFadeFromGrayVariants(duration, delay);

  if (trigger === "load") {
    return (
      <motion.span
        id={id}
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.span
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: viewportMargin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.span>
  );
}
