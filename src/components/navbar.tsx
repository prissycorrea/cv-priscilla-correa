"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import LanguageSwitch from "@/components/language-switch";
import { useI18n } from "@/i18n/provider";
import { navItems, site } from "@/lib/site";
import { easeOut } from "@/lib/motion";

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
    >
      <nav
        aria-label={t.nav.ariaLabel}
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition-[background-color,border-color,backdrop-filter] duration-300 sm:px-6 ${
          scrolled || open
            ? "border-white/10 bg-[#0c0a0f]/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="text-sm font-semibold tracking-[0.2em] text-white"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {t.nav.links[item.id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch />

          <a
            href={`mailto:${site.email}`}
            className="btn-gradient hidden rounded-xl px-4 py-2 text-sm font-medium text-[#1a1325] lg:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-white/80 transition-colors hover:text-white lg:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0a0f]/90 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <ul className="flex flex-col p-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.3, ease: easeOut }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center rounded-xl px-4 text-base text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {t.nav.links[item.id]}
                  </a>
                </motion.li>
              ))}
              <li className="p-2">
                <a
                  href={`mailto:${site.email}`}
                  onClick={() => setOpen(false)}
                  className="btn-gradient flex min-h-12 items-center justify-center rounded-xl text-base font-medium text-[#1a1325]"
                >
                  {t.nav.cta}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
