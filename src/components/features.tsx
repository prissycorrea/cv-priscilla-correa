"use client";

import { motion } from "motion/react";
import {
  Accessibility,
  Gauge,
  Layers,
  Monitor,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/provider";
import { featureTags } from "@/lib/site";
import { fadeUp, inView, stagger } from "@/lib/motion";

type FeatureId = keyof Dictionary["features"]["items"];

/** Display order and icon for each feature; copy comes from the dictionary. */
const features: { id: FeatureId; icon: LucideIcon }[] = [
  { id: "web", icon: Monitor },
  { id: "mobile", icon: Smartphone },
  { id: "designSystems", icon: Layers },
  { id: "motion", icon: Sparkles },
  { id: "performance", icon: Gauge },
  { id: "accessibility", icon: Accessibility },
];

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="especialidades" className="scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          description={t.features.description}
        />

        <motion.ul
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger(0.08)}
          {...inView}
        >
          {features.map(({ id, icon: Icon }) => (
            <motion.li
              key={id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d6c4ff]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="icon-ring inline-flex h-11 w-11 items-center justify-center rounded-xl text-white">
                <Icon size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{t.features.items[id].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {t.features.items[id].description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.features.techLabel}>
                {featureTags[id].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/55"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
