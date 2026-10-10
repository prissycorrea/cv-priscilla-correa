export const locales = ["pt-BR", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

/** How each language names itself in the switcher (always in its own language). */
export const localeLabels: Record<Locale, { short: string; name: string }> = {
  "pt-BR": { short: "PT", name: "Português" },
  en: { short: "EN", name: "English" },
};

export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}
