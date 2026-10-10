"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/** Shrinks, lifts and blurs the hero away as the visitor scrolls past it. */
export default function HeroScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.86]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", reduce ? "blur(0px)" : "blur(8px)"]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ scale, y, opacity, filter }} className="origin-top will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
