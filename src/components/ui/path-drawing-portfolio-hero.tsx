"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

type SvgPathDrawingTextAnimationProps = {
  text: string;
  fromColor?: string;
  toColor?: string;
  strokeWidth?: number;
  /** Seconds for one full draw pass */
  durationSec?: number;
  /** Restart from the beginning as soon as the draw finishes */
  loop?: boolean;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  fontSize?: number;
  className?: string;
};

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("svg raster failed"));
    img.src = url;
  });
}

function countOpaque(ctx: CanvasRenderingContext2D, w: number, h: number): number {
  const data = ctx.getImageData(0, 0, w, h).data;
  let n = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] > 12) n += 1;
  }
  return n;
}

async function rasterInk(
  source: SVGSVGElement,
  apply: (text: SVGTextElement) => void,
): Promise<number> {
  const clone = source.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const text = clone.querySelector("text");
  if (!text) return 0;
  apply(text as SVGTextElement);
  text.setAttribute("stroke", "#ffffff");
  (text as SVGTextElement).style.stroke = "#ffffff";

  const vb = source.viewBox.baseVal;
  const w = Math.max(1, Math.round(vb.width || 800));
  const h = Math.max(1, Math.round(vb.height || 160));
  clone.setAttribute("width", String(w));
  clone.setAttribute("height", String(h));
  clone.style.visibility = "visible";

  const xml = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  try {
    const img = await loadImage(url);
    const cw = Math.max(1, Math.round(w * 0.45));
    const ch = Math.max(1, Math.round(h * 0.45));
    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return 0;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, cw, ch);
    return countOpaque(ctx, cw, ch);
  } finally {
    URL.revokeObjectURL(url);
  }
}

/** Smallest dash length that renders the same ink as the finished glyph */
async function measureExactDashLength(svg: SVGSVGElement): Promise<number> {
  const full = await rasterInk(svg, (text) => {
    text.style.strokeDasharray = "none";
    text.style.strokeDashoffset = "0";
  });
  if (full <= 0) {
    throw new Error("empty ink");
  }

  const covered = async (dash: number) => {
    const ink = await rasterInk(svg, (text) => {
      text.style.strokeDasharray = `${dash} 100000`;
      text.style.strokeDashoffset = "0";
    });
    return ink >= full * 0.994;
  };

  let hi = 64;
  while (hi < 24000 && !(await covered(hi))) {
    hi *= 2;
  }

  let lo = 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (await covered(mid)) hi = mid;
    else lo = mid + 1;
  }

  return Math.max(1, lo);
}

/**
 * Draws SVG text via stroke-dashoffset. The loop restarts exactly when the
 * real glyph is fully drawn, so it never idles on the finished shape.
 */
function SvgPathDrawingTextAnimation({
  text,
  fromColor = "#d6c4ff",
  toColor = "#a78bfa",
  strokeWidth = 2,
  durationSec = 5.5,
  loop = true,
  viewBoxWidth = 800,
  viewBoxHeight = 160,
  fontSize = 88,
  className,
}: SvgPathDrawingTextAnimationProps) {
  const reactId = useId().replace(/:/g, "");
  const gradientId = `pathGradient-${reactId}`;
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const [dashLength, setDashLength] = useState(0);
  const reduceMotion = useReducedMotion();
  const display = text.trim();

  useEffect(() => {
    if (!display || reduceMotion) return;
    const svg = svgRef.current;
    if (!svg) return;

    let cancelled = false;
    const run = async () => {
      try {
        await document.fonts.ready;
        if (cancelled || !svgRef.current) return;
        const dash = await measureExactDashLength(svgRef.current);
        if (!cancelled) setDashLength(dash);
      } catch {
        const el = textRef.current;
        if (!el || cancelled) return;
        const width = el.getComputedTextLength() || display.length * fontSize * 0.62;
        setDashLength(Math.max(1, Math.ceil(width * 1.15)));
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [display, fontSize, viewBoxWidth, strokeWidth, reduceMotion]);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    if (reduceMotion || dashLength <= 0) {
      el.style.strokeDashoffset = "0";
      el.style.strokeDasharray = "none";
      return;
    }

    el.style.strokeDasharray = `${dashLength} ${dashLength}`;
    el.style.strokeDashoffset = String(dashLength);

    const drawMs = Math.max(0.8, durationSec) * 1000;
    const unitsPerMs = dashLength / drawMs;
    let offset = dashLength;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      offset -= unitsPerMs * dt;
      if (offset <= 0) {
        if (!loop) {
          el.style.strokeDashoffset = "0";
          return;
        }
        offset = dashLength;
      }
      el.style.strokeDashoffset = String(offset);
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [dashLength, durationSec, loop, reduceMotion]);

  if (!display) return null;

  const ready = dashLength > 0 || Boolean(reduceMotion);

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center",
        className,
      )}
    >
      <svg
        ref={svgRef}
        width="1000"
        height="420"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="h-auto w-full max-w-full"
        role="img"
        aria-label={display}
        style={{ visibility: ready ? "visible" : "hidden" }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>

        <text
          ref={textRef}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="0.02em"
        >
          {display}
        </text>
      </svg>
    </div>
  );
}

export type PathDrawingPortfolioHeroProps = {
  /** Display name (brand / person) drawn large as an SVG path */
  brand: string;
  /** Content above the name (label, badge…) */
  eyebrow?: ReactNode;
  /** Headline under the name */
  headline?: ReactNode;
  /** Short supporting text under the headline */
  tagline?: ReactNode;
  /** Call-to-action buttons under the tagline */
  actions?: ReactNode;
  /** Strip pinned to the bottom of the hero */
  footer?: ReactNode;
  /** Absolutely positioned decoration layer rendered behind the content */
  background?: ReactNode;
  /** Gradient start color */
  fromColor?: string;
  /** Gradient end color */
  toColor?: string;
  /** Tune how big the drawn name renders: font size inside the SVG and its viewBox */
  nameFontSize?: number;
  nameViewBox?: { width: number; height: number };
  /** Extra slot rendered at the end of the section */
  children?: ReactNode;
  className?: string;
};

const heroEase = [0.22, 1, 0.36, 1] as const;

/**
 * Portfolio hero: path-drawn name on loop + soft staggered entrance.
 * Transparent background — place it over your own page backdrop.
 * All copy comes in through props so the component stays language-agnostic.
 */
export default function PathDrawingPortfolioHero({
  brand,
  eyebrow,
  headline,
  tagline,
  actions,
  footer,
  background,
  fromColor,
  toColor,
  nameFontSize,
  nameViewBox,
  children,
  className,
}: PathDrawingPortfolioHeroProps) {
  const name = brand.trim();

  if (!name) return null;

  const fontSize = nameFontSize ?? (name.length > 12 ? 72 : name.length > 8 ? 96 : 148);
  const viewBox = nameViewBox ?? {
    width: name.length > 8 ? 1100 : 860,
    height: name.length > 8 ? 200 : 240,
  };

  // Reduced motion is handled globally by <MotionConfig reducedMotion="user">.
  const enter = (delay: number, y = 16) => ({
    initial: { opacity: 0, y, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay, ease: heroEase },
  });

  return (
    <section
      data-path-drawing-hero
      className={cn(
        "relative flex min-h-svh w-full flex-col overflow-hidden",
        "bg-transparent text-white",
        className,
      )}
    >
      {background ? (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {background}
        </div>
      ) : null}

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-8 pt-24 text-center sm:px-10">
        {eyebrow ? <motion.div {...enter(0, 12)}>{eyebrow}</motion.div> : null}

        <h1 className="sr-only">{name}</h1>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: heroEase }}
        >
          <SvgPathDrawingTextAnimation
            text={name}
            fromColor={fromColor}
            toColor={toColor}
            className="mx-auto w-full max-w-4xl"
            fontSize={fontSize}
            viewBoxWidth={viewBox.width}
            viewBoxHeight={viewBox.height}
            strokeWidth={1.6}
            durationSec={5.5}
            loop
          />
        </motion.div>

        {headline ? (
          <motion.div
            {...enter(0.45)}
            className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {headline}
          </motion.div>
        ) : null}

        {tagline ? (
          <motion.p
            {...enter(0.6)}
            className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/60 sm:mt-5 sm:text-base"
          >
            {tagline}
          </motion.p>
        ) : null}

        {actions ? (
          <motion.div
            {...enter(0.75)}
            className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            {actions}
          </motion.div>
        ) : null}
      </div>

      {footer ? (
        <motion.div
          className="relative z-10 w-full pb-6 sm:pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {footer}
        </motion.div>
      ) : null}

      {children}
    </section>
  );
}
