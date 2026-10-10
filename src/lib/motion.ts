import type { Variants } from "motion/react";

/** Same easing curve the hero uses, so every entrance feels like one system. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Fade + rise + de-blur, the soft "focus pull" entrance used across the page. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOut },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Shared props for sections that animate once when scrolled into view. */
export const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;
