"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowUpRight, Monitor, Smartphone } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { useI18n } from "@/i18n/provider";
import { projects, type Project } from "@/lib/site";

/** Projects as sticky cards that stack, each one receding as the next slides over it. */
export default function Works() {
  const { t } = useI18n();
  const listRef = useRef<HTMLUListElement>(null);
  const reduce = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });

  return (
    <section id="works" className="scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={t.works.eyebrow}
          title={t.works.title}
          description={t.works.description}
        />

        <ul ref={listRef} className="mt-16 flex flex-col gap-[20vh]">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              total={projects.length}
              progress={scrollYProgress}
              reduce={reduce}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({
  project: p,
  index: i,
  total,
  progress,
  reduce,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const { t } = useI18n();
  const copy = t.works.projects[p.id];
  const targetScale = 1 - (total - 1 - i) * 0.05;
  const scale = useTransform(progress, [i / total, 1], [1, reduce ? 1 : targetScale]);
  const dim = useTransform(progress, [i / total, 1], [0, reduce ? 0 : (total - 1 - i) * 0.12]);
  const PlatformIcon = p.platform === "web" ? Monitor : Smartphone;

  return (
    <li className="sticky" style={{ top: `calc(6.5rem + ${i * 1.25}rem)` }}>
      <motion.a
        href={p.href ?? "#"}
        style={{ scale }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="group relative grid origin-top gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[#120f17] p-5 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.8)] sm:p-8 md:grid-cols-[1.1fr_1fr] md:items-center"
      >
        {/* Abstract cover — replace with a screenshot via next/image */}
        <div
          aria-hidden
          className="project-cover relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5"
          style={{ ["--cover-angle" as string]: `${120 + i * 55}deg` }}
        >
          <span className="absolute bottom-4 left-4 font-mono text-xs text-white/40">0{i + 1}</span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-white/45">
              <PlatformIcon size={14} aria-hidden />
              {t.works.platforms[p.platform]}
            </span>
            <ArrowUpRight
              size={20}
              aria-hidden
              className="text-white/40 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
            />
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{copy.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">{copy.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.works.techLabel}>
            {p.stack.map((s) => (
              <li
                key={s}
                className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[0.7rem] text-white/60"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Darkens cards as they recede behind the next one */}
        <motion.span
          aria-hidden
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 bg-black"
        />
      </motion.a>
    </li>
  );
}
