"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/provider";
import { site } from "@/lib/site";
import { fadeUp, inView, stagger } from "@/lib/motion";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: site.social.github, icon: GithubIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
];

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const ctaRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // CTA grows into place as it scrolls up into view
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ["start end", "start 0.4"] });
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.85, 1]);
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <footer id="contato" className="scroll-mt-28 px-6 pb-10 pt-24 sm:px-10 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ctaRef}
          style={{ scale }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center sm:px-12 sm:py-20"
          variants={stagger(0.1)}
          {...inView}
        >
          <motion.div
            aria-hidden
            style={{ opacity: glow }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_120%,rgba(167,139,250,0.18),transparent)]"
          />
          <motion.p
            variants={fadeUp}
            className="relative text-[0.7rem] font-medium uppercase tracking-[0.35em] text-white/50 sm:text-xs"
          >
            {t.footer.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="relative mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            {t.footer.title} <span className="text-gradient">{t.footer.titleHighlight}</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={`mailto:${site.email}`}
              className="btn-gradient inline-flex min-h-12 items-center gap-2 rounded-xl px-6 text-sm font-medium text-[#1a1325]"
            >
              <Mail size={16} aria-hidden />
              {site.email}
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-1.5 rounded-xl border border-white/15 px-6 text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              {t.footer.linkedin}
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-white/70">
              © {year} {site.fullName}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden />
              {t.footer.location}
            </span>
          </div>

          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-colors hover:border-white/25 hover:text-white"
                >
                  <Icon />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#top"
                className="ml-2 inline-flex h-11 items-center rounded-xl px-3 text-white/60 transition-colors hover:text-white"
              >
                {t.footer.backToTop}
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}
