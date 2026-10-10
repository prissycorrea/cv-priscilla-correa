import type { Dictionary } from "./pt-BR";

/** English copy. Must mirror the shape of `pt-BR.ts` — TypeScript flags any missing key. */
const en: Dictionary = {
  meta: {
    title: "Priscilla Correa — Front-end & Mobile Developer",
    description:
      "Front-end & Mobile Developer — fast, accessible interfaces crafted down to the detail.",
  },

  language: {
    label: "Select language",
  },

  nav: {
    ariaLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    cta: "Let's talk",
    links: {
      about: "About",
      features: "Expertise",
      process: "Process",
      works: "Work",
      contact: "Contact",
    },
  },

  hero: {
    headline: {
      before: "I build",
      after: "interfaces",
      words: ["fast", "accessible", "memorable", "responsive"],
      srText: "I build fast, accessible, memorable and responsive interfaces.",
    },
    tagline:
      "Front-end developer focused on web and mobile, passionate about performance, accessibility and animations that bring interfaces to life.",
    primaryCta: "View projects",
    secondaryCta: "Get in touch",
    stackLabel: "Technologies I use every day",
  },

  about: {
    eyebrow: "About",
    statement:
      "I turn ideas into memorable experiences, on phones and in the browser. From prototype to deploy, with care in every detail.",
    highlight: ["memorable", "experiences"],
    body: "I'm a developer focused on front-end and mobile. I work where design meets engineering, paying close attention to performance, accessibility and the micro-interactions that make a difference.",
    stats: {
      years: "years building interfaces",
      projects: "projects delivered",
      apps: "apps published to the stores",
      lighthouse: "Lighthouse accessibility score",
    },
  },

  features: {
    eyebrow: "Expertise",
    title: "From pixel to pocket",
    description:
      "A set of skills designed to take a product from Figma all the way to the app stores and the browser.",
    techLabel: "Technologies",
    items: {
      web: {
        title: "Web Front-end",
        description:
          "React and Next.js applications with clean architecture, SSR and reusable components.",
      },
      mobile: {
        title: "Mobile Apps",
        description:
          "Native iOS and Android apps from a single codebase, with a truly native feel.",
      },
      designSystems: {
        title: "Design Systems",
        description:
          "Tokens, components and documentation that keep web and mobile visually consistent.",
      },
      motion: {
        title: "Motion & Interaction",
        description:
          "Purposeful animations that guide users without getting in the way — always at 60 fps.",
      },
      performance: {
        title: "Performance",
        description:
          "Green Core Web Vitals, lean bundles and fast startup even on modest devices.",
      },
      accessibility: {
        title: "Accessibility",
        description:
          "Interfaces that work with keyboards and screen readers, with WCAG AA contrast.",
      },
    },
  },

  processWeb: {
    eyebrow: "Process",
    title: "From idea to browser",
    description: "A clear workflow, with visible deliverables at every step.",
    steps: {
      discovery: {
        title: "Discovery & Prototype",
        description:
          "I get to know the problem, the audience and the goals. Wireframes and clickable Figma prototypes validate the idea before the first line of code.",
        url: "figma.com/proto/new-site",
      },
      build: {
        title: "Development",
        description:
          "Typed, reusable components, tests and 60 fps animations. Responsive interfaces that work well on any screen.",
        url: "localhost:3000",
      },
      launch: {
        title: "Deploy & Growth",
        description:
          "Continuous deployment, green Core Web Vitals and metrics to keep improving the product after launch.",
        url: "priscillacorrea.dev",
      },
    },
    screens: {
      wireframe: "wireframe · v3",
      fileName: "Hero.tsx",
      tests: "tests",
      testsPassed: "48 passed",
      preview: "preview",
      deployed: "Deployed to production",
      visits: "visits this week",
      scores: {
        performance: "Performance",
        accessibility: "Accessibility",
        bestPractices: "Best practices",
        seo: "SEO",
      },
    },
  },

  processMobile: {
    eyebrow: "Process",
    title: "From idea to app store",
    description: "A clear workflow, with visible deliverables at every step.",
    steps: {
      discovery: {
        title: "Discovery & Prototype",
        description:
          "I get to know the problem, the audience and the goals. Clickable Figma prototypes validate the idea before the first line of code.",
      },
      build: {
        title: "Development",
        description:
          "Typed components, tests and 60 fps animations. Web and mobile share the same design system.",
      },
      launch: {
        title: "Launch & Growth",
        description:
          "Shipping to the App Store, Google Play and the web, with metrics and continuous improvements after launch.",
      },
    },
    screens: {
      wireframe: "wireframe · v3",
      tests: "tests",
      testsPassed: "48 passed",
      published: "Published",
      activeUsers: "active users",
      rating: "4.9★",
      ratingLabel: "rating",
      retention: "+38%",
      retentionLabel: "retention",
    },
  },

  works: {
    eyebrow: "Work",
    title: "Selected work",
    description:
      "A few web and mobile products where I led the front-end, from architecture to interaction details.",
    techLabel: "Technologies",
    platforms: {
      web: "Web",
      mobile: "Mobile",
      both: "Web + Mobile",
    },
    projects: {
      pulse: {
        title: "Pulse Finance",
        description:
          "Personal finance app with offline sync, animated charts and biometric authentication.",
      },
      atlas: {
        title: "Atlas Design System",
        description:
          "Accessible component library with tokens shared across web and mobile, documented in Storybook.",
      },
      nomad: {
        title: "Nomad Travel",
        description:
          "Booking platform with SSR, instant search and green Core Web Vitals on every page.",
      },
      habitly: {
        title: "Habitly",
        description:
          "Habit tracker with native widgets, local notifications and thumb-friendly micro-interactions.",
      },
    },
  },

  footer: {
    eyebrow: "Contact",
    title: "Have a web or mobile product in mind?",
    titleHighlight: "Let's build it.",
    linkedin: "View LinkedIn",
    backToTop: "Back to top ↑",
    location: "Brazil",
  },
};

export default en;
