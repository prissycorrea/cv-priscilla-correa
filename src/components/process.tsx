"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { Check } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import type { Dictionary } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/provider";
import { easeOut } from "@/lib/motion";

type Copy = Dictionary["processMobile"];
type Screens = Copy["screens"];

/** Step order and the phone screen for each one; copy comes from the dictionary. */
const steps: { id: keyof Copy["steps"]; Screen: (props: { s: Screens }) => ReactNode }[] = [
  { id: "discovery", Screen: DesignScreen },
  { id: "build", Screen: CodeScreen },
  { id: "launch", Screen: LaunchScreen },
];

/** Product-page style section: a pinned phone whose screen follows the step in view. */
export default function Process() {
  const { t } = useI18n();
  const copy = t.processMobile;
  const [active, setActive] = useState(0);
  const ActiveScreen = steps[active].Screen;
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start center", "end center"] });
  const line = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <section id="processo-mobile" className="scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
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
                {/* On small screens the phone is not pinned, so show each screen inline */}
                <div className="mt-8 lg:hidden">
                  <Phone className="mx-auto w-[220px]"><Screen s={copy.screens} /></Phone>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-[calc(50vh-280px)]">
              <Phone className="mx-auto w-[280px]">
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
              </Phone>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Phone({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative aspect-[9/19] rounded-[2.75rem] border border-white/15 bg-[#120f17] p-2.5 shadow-[0_40px_120px_-30px_rgba(167,139,250,0.45)] ${className ?? ""}`}
    >
      <div className="relative h-full overflow-hidden rounded-[2.2rem] bg-[#0c0a0f]">
        <span className="absolute left-1/2 top-2.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <div className="h-full px-4 pb-4 pt-12">{children}</div>
      </div>
    </div>
  );
}

function DesignScreen({ s }: { s: Screens }) {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="h-24 rounded-2xl border border-dashed border-[#d6c4ff]/40" />
      <div className="grid grid-cols-2 gap-3">
        <div className="h-20 rounded-xl border border-dashed border-white/20" />
        <div className="h-20 rounded-xl border border-dashed border-white/20" />
      </div>
      <div className="h-3 w-3/4 rounded-full bg-white/15" />
      <div className="h-3 w-1/2 rounded-full bg-white/10" />
      <div className="mt-auto h-11 rounded-xl border border-dashed border-[#a78bfa]/60" />
      <p className="text-center font-mono text-[0.65rem] text-white/40">{s.wireframe}</p>
    </div>
  );
}

function CodeScreen({ s }: { s: Screens }) {
  const lines = [
    ["w-1/3 bg-[#a78bfa]/70", "w-1/2 bg-white/20"],
    ["ml-4 w-1/4 bg-[#d6c4ff]/60", "w-1/3 bg-white/15"],
    ["ml-8 w-2/3 bg-white/20"],
    ["ml-8 w-1/2 bg-[#a78bfa]/50"],
    ["ml-4 w-1/5 bg-[#d6c4ff]/60"],
    ["w-1/4 bg-white/20"],
  ];
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      {lines.map((row, i) => (
        <div key={i} className="flex gap-2">
          {row.map((c) => (
            <span key={c} className={`h-2.5 rounded-full ${c}`} />
          ))}
        </div>
      ))}
      <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <div className="flex items-center justify-between font-mono text-[0.65rem] text-white/50">
          <span>{s.tests}</span>
          <span className="text-[#d6c4ff]">{s.testsPassed}</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-gradient-to-r from-[#d6c4ff] to-[#a78bfa]" />
      </div>
    </div>
  );
}

function LaunchScreen({ s }: { s: Screens }) {
  const bars = [30, 45, 40, 62, 70, 88];
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center gap-2 rounded-2xl bg-[#a78bfa]/15 p-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#a78bfa] text-[#1a1325]">
          <Check size={16} />
        </span>
        <span className="text-sm text-white/80">{s.published}</span>
      </div>
      <p className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40">
        {s.activeUsers}
      </p>
      <div className="flex h-40 items-end gap-2">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#a78bfa]/40 to-[#d6c4ff]"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.8, delay: 0.1 * i, ease: easeOut }}
          />
        ))}
      </div>
      <div className="mt-auto grid grid-cols-2 gap-2 text-center">
        <div className="rounded-xl bg-white/[0.04] p-2">
          <p className="text-lg font-semibold text-white">{s.rating}</p>
          <p className="text-[0.6rem] text-white/45">{s.ratingLabel}</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] p-2">
          <p className="text-lg font-semibold text-white">{s.retention}</p>
          <p className="text-[0.6rem] text-white/45">{s.retentionLabel}</p>
        </div>
      </div>
    </div>
  );
}
