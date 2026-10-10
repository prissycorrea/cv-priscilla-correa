"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { dictionaries, type Dictionary } from "@/i18n/dictionaries";

const STORAGE_KEY = "locale";

// Tiny external store: the chosen locale lives in localStorage (with an in-memory
// fallback when storage is blocked) and every subscriber re-renders on change.
const listeners = new Set<() => void>();
let memoryLocale: Locale | null = null;

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Locale {
  if (memoryLocale) return memoryLocale;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {}
  // First visit: follow the browser language
  return navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
}

function getServerSnapshot(): Locale {
  return defaultLocale;
}

function setLocale(locale: Locale) {
  memoryLocale = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {}
  listeners.forEach((notify) => notify());
}

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = dictionaries[locale];

  // Keep <html lang> and the tab title in sync with the chosen language
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;
  }, [locale, t]);

  return <I18nContext.Provider value={{ locale, t, setLocale }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
