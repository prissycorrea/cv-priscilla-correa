"use client";

import { useRef, type PointerEvent } from "react";
import { useMotionValue, useReducedMotion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import HeroScroll from "@/components/hero-scroll";
import HeroBackground from "@/components/hero/hero-background";
import RotatingWord from "@/components/hero/rotating-word";
import TechMarquee from "@/components/hero/tech-marquee";
import PathDrawingPortfolioHero from "@/components/ui/path-drawing-portfolio-hero";
import { useI18n } from "@/i18n/provider";
import { heroTech, site } from "@/lib/site";

export default function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Pointer position in px, used by the background spotlight
  const px = useMotionValue(-1000);
  const py = useMotionValue(-1000);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set(e.clientX - rect.left);
    py.set(e.clientY - rect.top);
  };

  const onPointerLeave = () => {
    px.set(-1000);
    py.set(-1000);
  };

  const { headline } = t.hero;

  return (
    <HeroScroll>
      <div ref={ref} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
        <PathDrawingPortfolioHero
          className="w-full"
          brand={site.fullName}
          // Tuned for "Priscilla Correa": a tighter viewBox makes the name fill the width.
          // If the name changes, adjust the width so the text isn't clipped.
          nameFontSize={72}
          nameViewBox={{ width: 640, height: 120 }}
          fromColor="#d6c4ff"
          toColor="#a78bfa"
          background={<HeroBackground px={px} py={py} />}
          headline={
            <p>
              <span className="sr-only">{headline.srText}</span>
              <span aria-hidden>
                {headline.before} <RotatingWord words={headline.words} />
                {headline.after ? ` ${headline.after}` : null}
              </span>
            </p>
          }
          tagline={t.hero.tagline}
          actions={
            <>
              <a
                href="#works"
                className="btn-gradient inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-medium text-[#1a1325] sm:w-auto"
              >
                {t.hero.primaryCta}
                <ArrowDown size={16} aria-hidden />
              </a>
              <a
                href="#contato"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 text-sm text-white/80 backdrop-blur-md transition-colors hover:border-white/30 hover:text-white sm:w-auto"
              >
                <Mail size={16} aria-hidden />
                {t.hero.secondaryCta}
              </a>
            </>
          }
          footer={<TechMarquee items={heroTech} label={t.hero.stackLabel} />}
        />
      </div>
    </HeroScroll>
  );
}
