/**
 * Textos em português (idioma padrão).
 * Este arquivo define o formato do dicionário: ao adicionar uma chave aqui,
 * o TypeScript passa a exigir a mesma chave em `en.ts`.
 */
const ptBR = {
  meta: {
    title: "Priscilla Correa — Desenvolvedora Front-end & Mobile",
    description:
      "Desenvolvedora Front-end & Mobile — interfaces rápidas, acessíveis e cheias de detalhe.",
  },

  language: {
    label: "Selecionar idioma",
  },

  nav: {
    ariaLabel: "Navegação principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    cta: "Vamos conversar",
    links: {
      about: "Sobre",
      features: "Especialidades",
      process: "Processo",
      works: "Projetos",
      contact: "Contato",
    },
  },

  hero: {
    headline: {
      before: "Crio interfaces",
      after: "",
      /** Palavras que alternam na frase de destaque */
      words: ["rápidas", "acessíveis", "memoráveis", "responsivas"],
      /** Versão completa lida por leitores de tela */
      srText: "Crio interfaces rápidas, acessíveis, memoráveis e responsivas.",
    },
    tagline:
      "Desenvolvedora front-end com foco em web e mobile, apaixonada por performance, acessibilidade e animações que dão vida às interfaces.",
    primaryCta: "Ver projetos",
    secondaryCta: "Entrar em contato",
    stackLabel: "Tecnologias que uso no dia a dia",
  },

  about: {
    eyebrow: "Sobre",
    statement:
      "Transformo ideias em experiências marcantes, no celular e no navegador. Do protótipo ao deploy, com cuidado em cada detalhe.",
    /** Palavras da frase acima que recebem o gradiente (sem pontuação) */
    highlight: ["experiências", "marcantes"],
    body: "Sou desenvolvedora focada em front-end e mobile. Trabalho na fronteira entre design e engenharia, com atenção à performance, à acessibilidade e às micro-interações que fazem a diferença.",
    stats: {
      years: "anos construindo interfaces",
      projects: "projetos entregues",
      apps: "apps publicados nas lojas",
      lighthouse: "Lighthouse em acessibilidade",
    },
  },

  features: {
    eyebrow: "Especialidades",
    title: "Do pixel ao bolso do usuário",
    description:
      "Um conjunto de competências pensado para levar um produto do Figma até as lojas de apps e o navegador.",
    techLabel: "Tecnologias",
    items: {
      web: {
        title: "Front-end Web",
        description:
          "Aplicações React e Next.js com arquitetura limpa, SSR e componentes reutilizáveis.",
      },
      mobile: {
        title: "Apps Mobile",
        description:
          "Apps nativos para iOS e Android com uma única base de código e experiência nativa.",
      },
      designSystems: {
        title: "Design Systems",
        description:
          "Tokens, componentes e documentação que mantêm web e mobile visualmente consistentes.",
      },
      motion: {
        title: "Animação & Interação",
        description:
          "Animações com propósito que guiam o usuário sem atrapalhar — sempre em 60 fps.",
      },
      performance: {
        title: "Performance",
        description:
          "Core Web Vitals no verde, bundles enxutos e inicialização rápida até em aparelhos mais simples.",
      },
      accessibility: {
        title: "Acessibilidade",
        description:
          "Interfaces navegáveis por teclado e leitores de tela, com contraste WCAG AA.",
      },
    },
  },

  processWeb: {
    eyebrow: "Processo",
    title: "Da ideia ao navegador",
    description: "Um fluxo claro, com entregas visíveis a cada etapa.",
    steps: {
      discovery: {
        title: "Descoberta & Protótipo",
        description:
          "Entendo o problema, o público e as metas. Wireframes e protótipos navegáveis no Figma validam a ideia antes da primeira linha de código.",
        url: "figma.com/proto/novo-site",
      },
      build: {
        title: "Desenvolvimento",
        description:
          "Componentes tipados e reutilizáveis, testes e animações em 60 fps. Interfaces responsivas que funcionam bem em qualquer tela.",
        url: "localhost:3000",
      },
      launch: {
        title: "Deploy & Evolução",
        description:
          "Publicação com deploy contínuo, Core Web Vitals no verde e métricas para evoluir o produto depois do lançamento.",
        url: "priscillacorrea.dev",
      },
    },
    screens: {
      wireframe: "wireframe · v3",
      fileName: "Hero.tsx",
      tests: "testes",
      testsPassed: "48 aprovados",
      preview: "preview",
      deployed: "Deploy concluído em produção",
      visits: "visitas na semana",
      scores: {
        performance: "Performance",
        accessibility: "Acessibilidade",
        bestPractices: "Boas práticas",
        seo: "SEO",
      },
    },
  },

  /** Seção de processo mobile — desativada no momento (ver app/page.tsx) */
  processMobile: {
    eyebrow: "Processo",
    title: "Da ideia à loja de apps",
    description: "Um fluxo claro, com entregas visíveis a cada etapa.",
    steps: {
      discovery: {
        title: "Descoberta & Protótipo",
        description:
          "Entendo o problema, o público e as metas. Protótipos navegáveis no Figma validam a ideia antes da primeira linha de código.",
      },
      build: {
        title: "Desenvolvimento",
        description:
          "Componentes tipados, testes e animações em 60 fps. Web e mobile compartilham o mesmo design system.",
      },
      launch: {
        title: "Lançamento & Evolução",
        description:
          "Publicação na App Store, no Google Play e na web, com métricas e melhorias contínuas depois do lançamento.",
      },
    },
    screens: {
      wireframe: "wireframe · v3",
      tests: "testes",
      testsPassed: "48 aprovados",
      published: "Publicado",
      activeUsers: "usuários ativos",
      rating: "4,9★",
      ratingLabel: "avaliação",
      retention: "+38%",
      retentionLabel: "retenção",
    },
  },

  works: {
    eyebrow: "Projetos",
    title: "Trabalho selecionado",
    description:
      "Alguns produtos web e mobile em que liderei o front-end, da arquitetura aos detalhes de interação.",
    techLabel: "Tecnologias",
    platforms: {
      web: "Web",
      mobile: "Mobile",
      both: "Web + Mobile",
    },
    projects: {
      pulse: {
        title: "Pulse Finance",
        description:
          "App de finanças pessoais com sincronização offline, gráficos animados e autenticação biométrica.",
      },
      atlas: {
        title: "Atlas Design System",
        description:
          "Biblioteca de componentes acessíveis com tokens compartilhados entre web e mobile e documentação em Storybook.",
      },
      nomad: {
        title: "Nômade Travel",
        description:
          "Plataforma de reservas com SSR, busca instantânea e Core Web Vitals no verde em todas as páginas.",
      },
      habitly: {
        title: "Habitly",
        description:
          "App de hábitos com widgets nativos, notificações locais e micro-interações pensadas para o polegar.",
      },
    },
  },

  footer: {
    eyebrow: "Contato",
    title: "Tem um produto web ou mobile em mente?",
    titleHighlight: "Vamos tirar do papel.",
    linkedin: "Ver LinkedIn",
    backToTop: "Voltar ao topo ↑",
    location: "Brasil",
  },
};

export type Dictionary = typeof ptBR;

export default ptBR;
