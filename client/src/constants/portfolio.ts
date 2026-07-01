/**
 * @file constants/portfolio.ts
 * @description All static portfolio data — navigation links, projects, experience, skills, and social links.
 * Edit this file to personalise the portfolio without touching component logic.
 *
 * Design: Dark Craft / Obsidian Studio
 */

import type {
  NavLink,
  Project,
  ExperienceEntry,
  Skill,
  SocialLink,
  BeforeAfterShowcase,
} from "@/types";

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home",       href: "home",       ariaLabel: "Go to Home section" },
  { label: "About",      href: "about",      ariaLabel: "Go to About section" },
  { label: "Projects",   href: "projects",   ariaLabel: "Go to Projects section" },
  { label: "Showcase",   href: "showcase",   ariaLabel: "Go to Showcase section" },
  { label: "Experience", href: "experience", ariaLabel: "Go to Experience section" },
  { label: "Contact",    href: "contact",    ariaLabel: "Go to Contact section" },
] as const;

// ─────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────

export const HERO_DATA = {
  name: "Tayyibah",
  role: "Junior Front-End Engineer",
  tagline: "I build interfaces that outlast trends.",
  ctaLabel: "View My Work",
  ctaHref: "projects",  
} as const;

// ─────────────────────────────────────────────
// About
// ─────────────────────────────────────────────

export const BIO =
  "I'm a driven Full-Stack Developer equipped with a robust toolkit spanning front-end design and back-end logic. Experienced in building dynamic, user-centric applications using React, JavaScript, and modern web technologies, with a proven ability to learn new frameworks and server-side tools rapidly.";

export const SKILLS: Skill[] = [
  { name: "React",         category: "Frontend" },
  { name: "TypeScript",    category: "Frontend" },
  { name: "Next.js",       category: "Frontend" },
  { name: "Tailwind CSS",  category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js",       category: "Backend"  },
  { name: "SQL",       category: "Backend"  },
  { name: "Firebase",    category: "Backend"  },
  { name: "Docker",        category: "DevOps"   },
  { name: "CI/CD",         category: "DevOps"   },
  { name: "Figma",         category: "Design"   },
  { name: "Storybook",     category: "Design"   },
];

// ─────────────────────────────────────────────
// Projects (with ProjectGrid support)
// ─────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id:          "proj-1",
    title:       "Animal Shelter Full-Stack Web Application",
    description: "A production-grade component library built with React, TypeScript, and Radix UI primitives. Ships with a Storybook catalogue, automated visual regression tests, and full WCAG 2.1 AA compliance.",
    tags:        ["React", "TypeScript", "Radix UI", "Storybook", "Chromatic"],
    liveUrl:     "https://example.com",
    repoUrl:     "https://github.com",
    featured:    true,
    category:    "fullstack",
    caseStudy: {
      challenge: "Design teams were managing components across 6 different repositories, leading to inconsistencies and duplicated code.",
      solution: "Built a centralised, versioned component library with Storybook as the single source of truth and automated visual regression testing.",
    },
  },
  {
    id:          "proj-2",
    title:       "Forge — Real-time Collaboration",
    description: "A multiplayer whiteboard application with operational-transform conflict resolution, WebSocket presence indicators, and a canvas-based drawing engine capable of rendering 10,000+ objects at 60 fps.",
    tags:        ["React", "WebSockets", "Canvas API", "Node.js", "Redis"],
    liveUrl:     "https://example.com",
    repoUrl:     "https://github.com",
    featured:    true,
    category:    "fullstack",
    caseStudy: {
      challenge: "Implementing real-time collaboration at scale with concurrent edits from 50+ users without conflicts.",
      solution: "Implemented operational-transform conflict resolution on the server and optimised canvas rendering with requestAnimationFrame.",
    },
  },
  {
    id:          "proj-3",
    title:       "Meridian Analytics Dashboard",
    description: "An enterprise-grade analytics platform with server-side rendering, role-based access control, and a custom charting layer built on D3.js. Handles 50M+ data points with virtualised rendering.",
    tags:        ["Next.js", "D3.js", "PostgreSQL", "Prisma", "tRPC"],
    liveUrl:     "https://example.com",
    repoUrl:     "https://github.com",
    featured:    false,
    category:    "fullstack",
  },
  {
    id:          "proj-4",
    title:       "Pulsar CLI",
    description: "A developer productivity CLI tool that scaffolds opinionated project templates, manages environment secrets, and integrates with GitHub Actions for one-command deployments.",
    tags:        ["Node.js", "TypeScript", "Commander.js", "GitHub API"],
    repoUrl:     "https://github.com",
    featured:    false,
    category:    "other",
  },
  {
    id:          "proj-5",
    title:       "Pixel Perfect UI Kit",
    description: "A lightweight, accessible React component library focused on pixel-perfect design. Includes 40+ components, full TypeScript support, and zero external dependencies beyond React.",
    tags:        ["React", "TypeScript", "CSS Modules", "Vitest"],
    liveUrl:     "https://example.com",
    repoUrl:     "https://github.com",
    featured:    false,
    category:    "frontend",
  },
  {
    id:          "proj-6",
    title:       "Velocity Performance Monitor",
    description: "A real-time performance monitoring dashboard for web applications. Tracks Core Web Vitals, JavaScript execution time, and network waterfall charts.",
    tags:        ["React", "Web Vitals API", "Service Workers", "IndexedDB"],
    liveUrl:     "https://example.com",
    repoUrl:     "https://github.com",
    featured:    false,
    category:    "frontend",
  },
];

// ─────────────────────────────────────────────
// Showcase (Before/After Comparisons)
// ─────────────────────────────────────────────

export const SHOWCASES: BeforeAfterShowcase[] = [
  {
    id:           "showcase-1",
    title:        "Homepage Redesign",
    description:  "Improved conversion rate by 35% through better CTA placement and visual hierarchy.",
    beforeImage:  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=675&fit=crop",
    afterImage:   "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
    beforeAlt:    "Old homepage design",
    afterAlt:     "New homepage design",
    beforeLabel:  "Before",
    afterLabel:   "After",
    aspectRatio:  "16 / 9",
  },
  {
    id:           "showcase-2",
    title:        "Dashboard Redesign",
    description:  "Reduced cognitive load with improved data visualization and streamlined layout.",
    beforeImage:  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop",
    afterImage:   "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop",
    beforeAlt:    "Old dashboard",
    afterAlt:     "New dashboard",
    beforeLabel:  "Legacy",
    afterLabel:   "Modern",
    aspectRatio:  "4 / 3",
  },
];

// ─────────────────────────────────────────────
// Experience
// ─────────────────────────────────────────────

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id:           "exp-1",
    company:      "Vercel",
    role:         "Senior Front-End Engineer",
    startDate:    "2022-06",
    endDate:      "Present",
    highlights: [
      "Led the redesign of the deployment dashboard, reducing time-to-first-meaningful-paint by 42%.",
      "Architected a shared component library adopted by 6 product teams, eliminating 18k lines of duplicated UI code.",
      "Mentored 4 junior engineers through structured code reviews and weekly 1:1 sessions.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Turborepo"],
  },
  {
    id:           "exp-2",
    company:      "Stripe",
    role:         "Front-End Engineer II",
    startDate:    "2020-01",
    endDate:      "2022-05",
    highlights: [
      "Built the Stripe Elements v2 checkout flow, processing $2B+ in transactions in its first year.",
      "Implemented a zero-dependency animation system reducing bundle size by 34kb gzipped.",
      "Drove adoption of accessibility standards across the dashboard, achieving WCAG 2.1 AA compliance.",
    ],
    technologies: ["React", "TypeScript", "Sass", "Jest", "Playwright"],
  },
  {
    id:           "exp-3",
    company:      "Shopify",
    role:         "Front-End Engineer",
    startDate:    "2018-03",
    endDate:      "2019-12",
    highlights: [
      "Contributed to Polaris, Shopify's open-source design system with 12k+ GitHub stars.",
      "Shipped the Shopify App Bridge SDK enabling 4,000+ third-party app integrations.",
      "Reduced Lighthouse performance score variance across merchant storefronts by 28%.",
    ],
    technologies: ["React", "JavaScript", "GraphQL", "Polaris", "Ruby on Rails"],
  },
];

// ─────────────────────────────────────────────
// Contact / Social
// ─────────────────────────────────────────────

export const CONTACT_EMAIL = "hello@alexmorgan.dev";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "github",   url: "https://github.com",   label: "GitHub"   },
  { platform: "linkedin", url: "https://linkedin.com", label: "LinkedIn" },
  { platform: "twitter",  url: "https://twitter.com",  label: "Twitter"  },
];
