"use client";

import { motion } from "motion/react";
import CountUp from "@/components/count-up";
import ScrollRevealText from "@/components/scroll-reveal-text";
import { useI18n } from "@/i18n/provider";
import { stats } from "@/lib/site";
import { fadeUp, inView, stagger } from "@/lib/motion";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="sobre" className="scroll-mt-28 px-6 py-24 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.p
          variants={fadeUp}
          {...inView}
          className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-white/50 sm:text-xs"
        >
          {t.about.eyebrow}
        </motion.p>

        <ScrollRevealText
          text={t.about.statement}
          highlight={t.about.highlight}
          className="mt-6 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl"
        />

        <motion.p
          variants={fadeUp}
          {...inView}
          className="mt-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
        >
          {t.about.body}
        </motion.p>

        <motion.dl
          variants={stagger(0.1)}
          {...inView}
          className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.id}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <dt className="sr-only">{t.about.stats[s.id]}</dt>
              <dd>
                <CountUp
                  value={s.value}
                  className="text-gradient block text-3xl font-semibold tabular-nums sm:text-4xl"
                />
                <span className="mt-2 block text-sm leading-snug text-white/55">
                  {t.about.stats[s.id]}
                </span>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
