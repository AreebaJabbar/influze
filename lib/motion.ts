import { Variants, Transition } from "framer-motion";

/**
 * Shared Motion System for Influze
 * Default easing: cubic-bezier(0.22, 1, 0.36, 1) - smooth ease-out
 */
export const DEFAULT_EASE = [0.22, 1, 0.36, 1] as const;

export const DEFAULT_VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;

export const DEFAULT_TRANSITION: Transition = {
  duration: 0.8,
  ease: DEFAULT_EASE,
};

// 1. Fade Up (y: 40 -> 0, opacity: 0 -> 1, 0.8s)
export const createFadeUpVariants = (
  yOffset = 40,
  duration = 0.8,
  delay = 0,
  reducedMotion = false
): Variants => ({
  hidden: {
    opacity: 0,
    y: reducedMotion ? 0 : yOffset,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: DEFAULT_EASE,
    },
  },
});

// 2. Slide From Left (x: -80 -> 0, opacity 0 -> 1, 0.9s; mobile: -30)
export const createSlideFromLeftVariants = (
  xOffset = -80,
  duration = 0.9,
  delay = 0,
  reducedMotion = false
): Variants => ({
  hidden: {
    opacity: 0,
    x: reducedMotion ? 0 : xOffset,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: DEFAULT_EASE,
    },
  },
});

// 3. Slide From Right (x: 80 -> 0, opacity 0 -> 1, 0.9s; mobile: 30)
export const createSlideFromRightVariants = (
  xOffset = 80,
  duration = 0.9,
  delay = 0,
  reducedMotion = false
): Variants => ({
  hidden: {
    opacity: 0,
    x: reducedMotion ? 0 : xOffset,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: DEFAULT_EASE,
    },
  },
});

// 4. Fade In (opacity: 0 -> 1, 0.8s)
export const createFadeInVariants = (
  duration = 0.8,
  delay = 0
): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: DEFAULT_EASE,
    },
  },
});

// 5. Scale In (0.96 -> 1, opacity: 0 -> 1, 0.8s)
export const createScaleInVariants = (
  initialScale = 0.96,
  duration = 0.8,
  delay = 0,
  reducedMotion = false
): Variants => ({
  hidden: {
    opacity: 0,
    scale: reducedMotion ? 1 : initialScale,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: DEFAULT_EASE,
    },
  },
});

// 6. Stagger Container (staggerChildren: 0.12s)
export const createStaggerContainerVariants = (
  staggerChildren = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// 7. Text Fade From Gray (opacity: ~0.25 -> 1, 0.9s)
export const createTextFadeFromGrayVariants = (
  duration = 0.9,
  delay = 0
): Variants => ({
  hidden: {
    opacity: 0.25,
  },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: DEFAULT_EASE,
    },
  },
});
