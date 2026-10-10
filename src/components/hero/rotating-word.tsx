"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

/**
 * Cycles through words with a blur/slide swap. Invisible copies of every word
 * share the same grid cell, so the slot is always as wide as the longest word
 * and the surrounding line never jumps.
 */
export default function RotatingWord({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [reduce, words.length, interval]);

  const word = words[index % words.length];

  return (
    <span className="relative inline-grid justify-items-center align-bottom">
      {words.map((w) => (
        <span key={`ghost-${w}`} className="invisible col-start-1 row-start-1">
          {w}
        </span>
      ))}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={word}
          className="text-gradient col-start-1 row-start-1 pb-1"
          initial={{ y: "55%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-55%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
