export const profile = {
  name: 'Leonardo Vasconcelos de Sá',
  handle: 'leonardo.vsa',
  email: 'leonardovasconcelosdesa@gmail.com',
  linkedin: 'https://www.linkedin.com/in/leonardovsa/',
  github: 'https://github.com/leonardovsa08',
  whatsapp: 'https://wa.me/5518996239916',
  whatsappIntro:
    'https://wa.me/5518996239916?text=Olá%20Leonardo,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
  resume: 'assets/curriculo_leonardo_vasconcelos_de_sa.pdf',
};

export const navLinks = [
  { label: 'Início', href: '#banner' },
  { label: 'Sobre', href: '#about' },
  { label: 'Trajetória', href: '#experience' },
  { label: 'Educação', href: '#education' },
  { label: 'Especialidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export const footerLinks = [
  { label: 'Sobre Mim', href: '#about' },
  { label: 'Trajetória', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'WhatsApp', href: profile.whatsapp },
];

export const aboutMoments = [
  {
    year: '2023',
    title: 'Primeiro contato com tecnologia',
    icon: 'computer',
    aos: 'fade-right',
    text: 'Iniciei o ensino médio com curso técnico em Informática para a Internet. Durante os estudos comecei a aprender lógica, linguagens de programação e prototipação, descobrindo meu interesse pelo desenvolvimento.',
  },
  {
    year: '2025',
    title: 'Início no mercado',
    icon: 'work',
    aos: 'fade-up',
    text: 'Em outubro de 2025 iniciei meu estágio como desenvolvedor front-end na Vip Automação, trabalhando com Angular e TypeScript no desenvolvimento de aplicações web.',
  },
  {
    year: 'Atualmente',
    title: 'Evolução constante',
    icon: 'trending_up',
    aos: 'fade-left',
    text: 'Hoje continuo no estágio enquanto curso Bacharelado em Ciência da Computação e sigo aprofundando meus conhecimentos em Angular e Tailwind CSS.',
  },
];

export const experiences = [
  {
    period: 'Outubro 2025 — Atual',
    title: 'Estágio em front-end',
    place: 'Vip Automação',
    icon: 'work',
    aos: 'fade-right',
    text: 'Desenvolvimento de aplicações web com Angular e TypeScript, do layout ao componente, no ritmo de um produto que já está no ar.',
  },
  {
    period: '2025 — Atual',
    title: 'Landing pages em produção',
    place: 'Produtos Vip',
    icon: 'language',
    aos: 'fade-up',
    text: 'Interfaces de Coblify, Vip Automação, Organize Veículos, Vip Comercial, Organize Igrejas e Drop Vip, construídas com Angular e Tailwind CSS.',
  },
  {
    period: 'Em andamento',
    title: 'Ciência da Computação',
    place: 'Bacharelado',
    icon: 'school',
    aos: 'fade-left',
    text: 'Graduação em paralelo ao estágio. O que estudo volta para o código, e o que aparece no trabalho vira a próxima dúvida para levar à faculdade.',
  },
];

export interface EducationItem {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  nested: boolean;
  delay?: number;
}

export const education: EducationItem[] = [
  {
    title: 'Ensino Médio Técnico em Informática',
    subtitle: "ETEC PEDRO D' ARCADIA NETO",
    period: '2023 — 2025',
    nested: false,
    description:
      'Formação técnica voltada para lógica de programação, desenvolvimento de software e tecnologias web. Durante esse período tive meu primeiro contato com desenvolvimento front-end e criação de interfaces digitais.',
  },
  {
    title: 'HTML e CSS',
    period: '2023 — 2024',
    nested: true,
    delay: 100,
    description:
      'Aprendizado focado na estruturação de páginas web utilizando HTML e estilização com CSS, criando layouts responsivos e organizados.',
  },
  {
    title: 'Figma',
    period: '2024 — 2025',
    nested: true,
    delay: 200,
    description:
      'Aprendizado focado em prototipação de interfaces, criação de layouts e organização de componentes utilizando Figma. Base importante para construção de interfaces modernas e bem estruturadas.',
  },
  {
    title: 'Desenvolvimento Front-End',
    subtitle: 'Angular & Tailwind CSS',
    period: '2025 — Atual',
    nested: false,
    description:
      'Especialização na criação de interfaces modernas e responsivas utilizando Angular, Tailwind CSS e arquitetura baseada em componentes, focando em performance, organização e experiência do usuário.',
  },
  {
    title: 'Angular',
    period: '2025 — Atual',
    nested: true,
    delay: 100,
    description:
      'Aplicações em componentes, com rotas, templates e TypeScript. É a mesma base do estágio e das interfaces que mantenho no ar.',
  },
  {
    title: 'Tailwind CSS',
    period: '2025 — Atual',
    nested: true,
    delay: 200,
    description:
      'Criação de interfaces modernas utilizando Tailwind CSS, aplicando design responsivo e padronização visual.',
  },
  {
    title: 'Integração de API',
    period: '2025 — Atual',
    nested: true,
    delay: 400,
    description:
      'Integração de APIs REST em aplicações front-end, realizando consumo de dados, tratamento de respostas e exibição dinâmica de informações na interface.',
  },
];

export interface Skill {
  name: string;
  description: string;
  level: number;
  aos: string;
  image?: string;
  imageClass?: string;
  icon?: string;
}

export const skills: Skill[] = [
  {
    name: 'Angular',
    description: 'Desenvolvimento de aplicações SPA modernas com arquitetura escalável.',
    level: 70,
    aos: 'fade-up-right',
    image: 'images/skills/angular.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'TypeScript',
    description: 'Tipagem e organização do código nas aplicações Angular do dia a dia.',
    level: 70,
    aos: 'fade-up',
    image: 'images/skills/typescript.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'Tailwind',
    description: 'Estilização rápida e responsiva com foco em produtividade e consistência.',
    level: 90,
    aos: 'zoom-in-up',
    image: 'images/skills/tailwind.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'HTML',
    description: 'Estruturação semântica e acessível de páginas web modernas.',
    level: 95,
    aos: 'zoom-in-up',
    image: 'images/skills/html.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'CSS',
    description: 'Criação de layouts modernos, responsivos e com foco em UX.',
    level: 90,
    aos: 'fade-up',
    image: 'images/skills/css.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'Figma',
    description: 'Prototipação de interfaces e organização de componentes antes do código.',
    level: 75,
    aos: 'fade-up-left',
    image: 'images/skills/figma.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'Git',
    description: 'Uso no dia a dia para versionar o código.',
    level: 70,
    aos: 'fade-up-right',
    image: 'images/skills/git.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'GitHub',
    description: 'Uso no dia a dia para acompanhar os repositórios.',
    level: 70,
    aos: 'fade-up',
    image: 'images/skills/github.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'Java',
    description: 'Em estudo, junto com Spring Boot e C++.',
    level: 30,
    aos: 'zoom-in-up',
    image: 'images/skills/java.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'Spring Boot',
    description: 'Em estudo, junto com Java e C++.',
    level: 30,
    aos: 'zoom-in-up',
    image: 'images/skills/spring.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'C++',
    description: 'Em estudo, junto com Java e Spring Boot.',
    level: 30,
    aos: 'fade-up',
    image: 'images/skills/cplusplus.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'DBeaver',
    description: 'Estou começando a utilizar para consultar bancos de dados.',
    level: 30,
    aos: 'fade-up-left',
    image: 'images/skills/dbeaver.svg',
    imageClass: 'w-7 h-7',
  },
  {
    name: 'APIs REST',
    description: 'Consumo de dados, tratamento de respostas e exibição na interface.',
    level: 60,
    aos: 'fade-up-left',
    image: 'images/skills/rest.svg',
    imageClass: 'w-7 h-7',
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  url: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'Sistema de Cobrança',
    description:
      'Landing page do Coblify: contratos, clientes e cobranças recorrentes. Angular e Tailwind CSS.',
    image: 'images/print-cobranca.webp',
    imageWidth: 502,
    imageHeight: 590,
    url: 'https://coblify.com.br/',
    tags: ['Angular', 'Tailwind'],
  },
  {
    title: 'Vip Automação',
    description:
      'Landing page do ERP para vendas, estoque e financeiro no varejo. Angular e Tailwind CSS.',
    image: 'images/print-vipautomacao.webp',
    imageWidth: 654,
    imageHeight: 551,
    url: 'https://vipautomacao.com.br/',
    tags: ['Angular', 'Tailwind'],
  },
  {
    title: 'Organize Veículos',
    description:
      'Landing page do app de manutenções, despesas e alertas do veículo. Angular e Tailwind CSS.',
    image: 'images/print-organizeveiculos.webp',
    imageWidth: 611,
    imageHeight: 543,
    url: 'https://organizeveiculos.com.br/',
    tags: ['Angular', 'Tailwind'],
  },
  {
    title: 'ERP Auto Center',
    description:
      'Landing page do sistema de ordens de serviço para auto centers e oficinas. Angular e Tailwind CSS.',
    image: 'images/print-autocenter.webp',
    imageWidth: 519,
    imageHeight: 575,
    url: 'https://lp.vipautomacao.com.br/',
    tags: ['Angular', 'Tailwind'],
  },
  {
    title: 'Organize Igrejas',
    description:
      'Landing page do sistema de eventos, escalas, músicas e membros. Angular e Tailwind CSS.',
    image: 'images/print-organizeigrejas.webp',
    imageWidth: 422,
    imageHeight: 490,
    url: 'https://organizeigrejas.com.br/',
    tags: ['Angular', 'Tailwind'],
  },
  {
    title: 'Drop Vip',
    description:
      'Landing page da plataforma de dropshipping VipDrop, para produtos, anúncios e vendas. Angular e Tailwind CSS.',
    image: 'images/print-dropvip.webp',
    imageWidth: 497,
    imageHeight: 506,
    url: 'https://dropvip.com.br/',
    tags: ['Angular', 'Tailwind'],
  },
];

export const siteProjects: Project[] = [
  {
    title: 'APMA',
    description:
      'Site da Associação de Pilotos de Motocross de Assis, com eventos, projetos sociais e contato. HTML e CSS.',
    image: 'images/print-apma.webp',
    imageWidth: 960,
    imageHeight: 845,
    url: 'https://apma-nu.vercel.app/',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'Barbearia Artes',
    description:
      'Site da barbearia em Ibirarema, com serviços, Artes Store, Artes Academy e agendamento. Next.js e React.',
    image: 'images/print-barbearia.webp',
    imageWidth: 960,
    imageHeight: 845,
    url: 'https://barbearia-artes.vercel.app/',
    tags: ['Next.js', 'React'],
  },
];

export const projectGroups = [
  { title: 'Landing Pages', projects },
  { title: 'Sites', projects: siteProjects },
];
