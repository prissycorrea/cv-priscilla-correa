"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { easeOut } from "@/lib/motion";

/** Counts from 0 up to a value like "30+" the first time it enters the viewport. */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const [, digits = "0", suffix = ""] = value.match(/^(\d+)(.*)$/) ?? [];
  const target = Number(digits);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, { duration: 1.8, ease: easeOut });
    return () => controls.stop();
  }, [inView, reduce, target, count]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <motion.span aria-hidden>{rounded}</motion.span>
    </span>
  );
}
