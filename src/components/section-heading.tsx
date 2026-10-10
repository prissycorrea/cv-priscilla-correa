"use client";

import { motion } from "motion/react";
import { fadeUp, inView, stagger } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div className="mx-auto max-w-2xl text-center" variants={stagger(0.1)} {...inView}>
      <motion.p
        variants={fadeUp}
        className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-white/50 sm:text-xs"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-pretty text-base leading-relaxed text-white/60"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
