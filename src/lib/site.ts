import type { Dictionary } from "@/i18n/dictionaries";

/**
 * Dados do portfólio que NÃO mudam com o idioma (nome, contatos, links, stacks, números).
 * Os textos traduzíveis ficam em `src/i18n/dictionaries/`.
 */
export const site = {
  name: "PRISCILLA",
  fullName: "Priscilla Correa",
  email: "contato@priscillacorrea.dev",
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

/** Stack shown in the scrolling strip at the bottom of the hero */
export const heroTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "React Native",
  "Expo",
  "Node.js",
  "Storybook",
  "Figma",
];

type NavId = keyof Dictionary["nav"]["links"];

export const navItems: { id: NavId; href: string }[] = [
  { id: "about", href: "#sobre" },
  { id: "features", href: "#especialidades" },
  { id: "process", href: "#processo" },
  { id: "works", href: "#works" },
  { id: "contact", href: "#contato" },
];

export const stats: { id: keyof Dictionary["about"]["stats"]; value: string }[] = [
  { id: "years", value: "5+" },
  { id: "projects", value: "30+" },
  { id: "apps", value: "12" },
  { id: "lighthouse", value: "100" },
];

export const featureTags: Record<keyof Dictionary["features"]["items"], string[]> = {
  web: ["React", "Next.js", "TypeScript"],
  mobile: ["React Native", "Expo", "Flutter"],
  designSystems: ["Figma", "Storybook", "Tailwind"],
  motion: ["Framer Motion", "Reanimated"],
  performance: ["Lighthouse", "Profiling"],
  accessibility: ["WCAG", "ARIA", "VoiceOver"],
};

export type Project = {
  id: keyof Dictionary["works"]["projects"];
  platform: keyof Dictionary["works"]["platforms"];
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    id: "pulse",
    platform: "mobile",
    stack: ["React Native", "Expo", "Reanimated", "Zustand"],
    href: "#",
  },
  {
    id: "atlas",
    platform: "both",
    stack: ["React", "TypeScript", "Storybook", "Tailwind"],
    href: "#",
  },
  {
    id: "nomad",
    platform: "web",
    stack: ["Next.js", "Framer Motion", "tRPC", "Vercel"],
    href: "#",
  },
  {
    id: "habitly",
    platform: "mobile",
    stack: ["Flutter", "Dart", "Riverpod", "Firebase"],
    href: "#",
  },
];
