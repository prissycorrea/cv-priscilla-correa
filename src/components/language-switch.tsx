"use client";

import { motion } from "motion/react";
import { localeLabels, locales } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";

/** PT | EN segmented switch with a sliding gradient pill. */
export default function LanguageSwitch() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            lang={l}
            title={localeLabels[l].name}
            aria-pressed={active}
            onClick={() => setLocale(l)}
            className={`relative z-10 h-8 min-w-11 cursor-pointer rounded-full px-3 text-xs font-semibold tracking-wider transition-colors duration-200 ${
              active ? "text-[#1a1325]" : "text-white/60 hover:text-white"
            }`}
          >
            {active ? (
              <motion.span
                layoutId="locale-pill"
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#d6c4ff] to-[#a78bfa]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            {localeLabels[l].short}
          </button>
        );
      })}
    </div>
  );
}
