"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

type Props = {
  text: string;
  /** Words (without punctuation) painted with the accent gradient */
  highlight?: string[];
  className?: string;
};

/** Apple-style statement: each word lights up as the visitor scrolls through it. */
export default function ScrollRevealText({ text, highlight = [], className }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.45"] });
  const words = text.split(" ");

  return (
    <h2 ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
            reduce={reduce}
            accent={highlight.includes(word.replace(/[.,!?]/g, ""))}
          >
            {word}
          </Word>
        ))}
      </span>
    </h2>
  );
}

function Word({
  children,
  progress,
  range,
  reduce,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduce: boolean;
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, reduce ? [1, 1] : [0.14, 1]);
  return (
    <>
      <motion.span style={{ opacity }} className={accent ? "text-gradient" : undefined}>
        {children}
      </motion.span>{" "}
    </>
  );
}
