"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { Check, Lock } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/provider";
import { easeOut } from "@/lib/motion";

type Copy = Dictionary["processWeb"];
type Screens = Copy["screens"];

/** Step order and the mockup screen for each one; copy comes from the dictionary. */
const steps: { id: keyof Copy["steps"]; Screen: (props: { s: Screens }) => ReactNode }[] = [
  { id: "discovery", Screen: WireframeScreen },
  { id: "build", Screen: DevScreen },
  { id: "launch", Screen: LaunchScreen },
];

/** Product-page style section: a pinned browser window whose screen follows the step in view. */
export default function ProcessWeb() {
  const { t } = useI18n();
  const copy = t.processWeb;
  const [active, setActive] = useState(0);
  const ActiveScreen = steps[active].Screen;
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start center", "end center"] });
  const line = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <section id="processo" className="scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <ol ref={listRef} className="relative flex flex-col gap-24 lg:gap-[40vh] lg:py-[20vh]">
            {/* Progress rail that fills with scroll */}
            <span aria-hidden className="absolute bottom-0 left-[1.1rem] top-0 w-px bg-white/10" />
            <motion.span
              aria-hidden
              className="absolute bottom-0 left-[1.1rem] top-0 w-px origin-top bg-gradient-to-b from-[#d6c4ff] to-[#a78bfa]"
              style={{ scaleY: reduce ? 1 : line }}
            />

            {steps.map(({ id, Screen }, i) => (
              <motion.li
                key={id}
                className="relative pl-14"
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: active === i ? 1 : 0.3 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <span
                  className={`absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border font-mono text-sm transition-colors duration-500 ${
                    active >= i
                      ? "border-transparent bg-[#a78bfa] text-[#1a1325]"
                      : "border-white/15 bg-[#0c0a0f] text-white/60"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">{copy.steps[id].title}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
                  {copy.steps[id].description}
                </p>
                {/* On small screens the window is not pinned, so show each screen inline */}
                <div className="mt-8 lg:hidden">
                  <Browser url={copy.steps[id].url}>
                    <Screen s={copy.screens} />
                  </Browser>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-[calc(50vh-190px)]">
              <Browser url={copy.steps[steps[active].id].url}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    className="h-full"
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                    transition={{ duration: 0.45, ease: easeOut }}
                  >
                    <ActiveScreen s={copy.screens} />
                  </motion.div>
                </AnimatePresence>
              </Browser>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Browser({ children, url }: { children: ReactNode; url: string }) {
  return (
    <div
      aria-hidden
      className="overflow-hidden rounded-2xl border border-white/15 bg-[#120f17] shadow-[0_40px_120px_-30px_rgba(167,139,250,0.45)]"
    >
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-[70%] items-center gap-1.5 rounded-lg bg-white/[0.05] px-3 py-1 font-mono text-[0.7rem] text-white/50">
          <Lock size={11} className="shrink-0" />
          <span className="truncate">{url}</span>
        </div>
        <span className="w-[42px]" />
      </div>
      <div className="aspect-[16/10] bg-[#0c0a0f] p-4 sm:p-5">{children}</div>
    </div>
  );
}

function WireframeScreen({ s }: { s: Screens }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between rounded-lg border border-dashed border-white/20 px-3 py-2">
        <span className="h-2 w-12 rounded-full bg-white/20" />
        <div className="flex gap-2">
          <span className="h-2 w-8 rounded-full bg-white/10" />
          <span className="h-2 w-8 rounded-full bg-white/10" />
          <span className="h-2 w-8 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#d6c4ff]/40">
        <span className="h-3 w-1/2 rounded-full bg-white/20" />
        <span className="h-2 w-1/3 rounded-full bg-white/10" />
        <span className="mt-2 h-5 w-20 rounded-md border border-dashed border-[#a78bfa]/60" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="h-12 rounded-lg border border-dashed border-white/20 sm:h-16" />
        <div className="h-12 rounded-lg border border-dashed border-white/20 sm:h-16" />
        <div className="h-12 rounded-lg border border-dashed border-white/20 sm:h-16" />
      </div>
      <p className="text-center font-mono text-[0.6rem] text-white/40">{s.wireframe}</p>
    </div>
  );
}

function DevScreen({ s }: { s: Screens }) {
  const lines = [
    ["w-1/3 bg-[#a78bfa]/70", "w-1/3 bg-white/20"],
    ["ml-3 w-1/4 bg-[#d6c4ff]/60", "w-1/4 bg-white/15"],
    ["ml-6 w-2/3 bg-white/20"],
    ["ml-6 w-1/2 bg-[#a78bfa]/50"],
    ["ml-6 w-3/5 bg-white/15"],
    ["ml-3 w-1/5 bg-[#d6c4ff]/60"],
    ["w-1/4 bg-white/20"],
  ];
  return (
    <div className="grid h-full grid-cols-2 gap-3">
      <div className="flex flex-col gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3">
        <span className="font-mono text-[0.6rem] text-white/40">{s.fileName}</span>
        {lines.map((row, i) => (
          <div key={i} className="flex gap-1.5">
            {row.map((c) => (
              <span key={c} className={`h-2 rounded-full ${c}`} />
            ))}
          </div>
        ))}
        <div className="mt-auto flex items-center justify-between font-mono text-[0.6rem] text-white/50">
          <span>{s.tests}</span>
          <span className="text-[#d6c4ff]">{s.testsPassed}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 rounded-xl border border-white/10 p-3">
        <span className="font-mono text-[0.6rem] text-white/40">{s.preview}</span>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#d6c4ff]/15 to-[#a78bfa]/5">
          <span className="h-2.5 w-2/3 rounded-full bg-white/60" />
          <span className="h-2 w-1/2 rounded-full bg-white/25" />
          <span className="mt-1 h-5 w-16 rounded-md bg-gradient-to-r from-[#d6c4ff] to-[#a78bfa]" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <span className="h-6 rounded-md bg-white/[0.06]" />
          <span className="h-6 rounded-md bg-white/[0.06]" />
          <span className="h-6 rounded-md bg-white/[0.06]" />
        </div>
      </div>
    </div>
  );
}

function ScoreRing({ score, label, delay }: { score: number; label: string; delay: number }) {
  const r = 16;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative h-12 w-12 sm:h-14 sm:w-14">
        <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
          <circle cx="20" cy="20" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
          <motion.circle
            cx="20"
            cy="20"
            r={r}
            fill="none"
            stroke="#a78bfa"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: c * (1 - score / 100) }}
            transition={{ duration: 1.1, delay, ease: easeOut }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white sm:text-sm">
          {score}
        </span>
      </div>
      <span className="text-center text-[0.55rem] leading-tight text-white/50 sm:text-[0.6rem]">
        {label}
      </span>
    </div>
  );
}

function LaunchScreen({ s }: { s: Screens }) {
  const bars = [30, 42, 38, 55, 64, 78, 92];
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center gap-2 rounded-xl bg-[#a78bfa]/15 px-3 py-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#a78bfa] text-[#1a1325]">
          <Check size={12} />
        </span>
        <span className="text-xs text-white/80">{s.deployed}</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <ScoreRing score={100} label={s.scores.performance} delay={0.1} />
        <ScoreRing score={100} label={s.scores.accessibility} delay={0.2} />
        <ScoreRing score={98} label={s.scores.bestPractices} delay={0.3} />
        <ScoreRing score={100} label={s.scores.seo} delay={0.4} />
      </div>
      <div className="mt-auto flex flex-1 flex-col">
        <p className="font-mono text-[0.6rem] uppercase tracking-widest text-white/40">
          {s.visits}
        </p>
        <div className="mt-2 flex flex-1 items-end gap-1.5">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-[#a78bfa]/40 to-[#d6c4ff]"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.08 * i, ease: easeOut }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
