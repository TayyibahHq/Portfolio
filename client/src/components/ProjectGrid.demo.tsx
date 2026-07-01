/**
 * @file components/ProjectGrid.demo.tsx
 * @description Example usage and demo data for the ProjectGrid component.
 * Copy this into a page or section to see the component in action.
 */

import { ProjectGrid, type Project } from "./ProjectGrid";

// ─────────────────────────────────────────────
// Demo Data
// ─────────────────────────────────────────────

export const DEMO_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Obsidian Design System",
    description:
      "A production-grade component library built with React, TypeScript, and Radix UI primitives. Ships with a Storybook catalogue, automated visual regression tests, and full WCAG 2.1 AA compliance.",
    techStack: ["React", "TypeScript", "Radix UI", "Storybook", "Chromatic"],
    category: "fullstack",
    liveUrl: "https://storybook.example.com",
    githubUrl: "https://github.com/example/obsidian-ds",
    caseStudy: {
      challenge:
        "The design team was managing components across 6 different repositories, leading to inconsistencies, duplicated code, and slow onboarding for new engineers. Each team had their own button component, each slightly different.",
      solution:
        "Built a centralised, versioned component library with Storybook as the single source of truth. Implemented automated visual regression testing via Chromatic to catch breaking changes before they ship. Added comprehensive TypeScript types and JSDoc comments. Now all 6 teams consume from a single, well-tested package.",
    },
  },
  {
    id: "proj-2",
    title: "Forge — Real-time Collaboration",
    description:
      "A multiplayer whiteboard application with operational-transform conflict resolution, WebSocket presence indicators, and a canvas-based drawing engine capable of rendering 10,000+ objects at 60 fps.",
    techStack: ["React", "WebSockets", "Canvas API", "Node.js", "Redis"],
    category: "fullstack",
    liveUrl: "https://forge.example.com",
    githubUrl: "https://github.com/example/forge",
    caseStudy: {
      challenge:
        "Implementing real-time collaboration at scale is hard. We needed to handle concurrent edits from 50+ users without conflicts, maintain 60 fps rendering on canvas, and sync state across a distributed backend.",
      solution:
        "Implemented operational-transform (OT) conflict resolution on the server, so concurrent edits merge cleanly. Used WebSockets for low-latency communication and Redis for session state. Optimised canvas rendering with requestAnimationFrame and spatial indexing to handle 10k+ objects without frame drops.",
    },
  },
  {
    id: "proj-3",
    title: "Meridian Analytics Dashboard",
    description:
      "An enterprise-grade analytics platform with server-side rendering, role-based access control, and a custom charting layer built on D3.js. Handles 50M+ data points with virtualised rendering.",
    techStack: ["Next.js", "D3.js", "PostgreSQL", "Prisma", "tRPC"],
    category: "fullstack",
    liveUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/example/meridian",
    caseStudy: {
      challenge:
        "Enterprise customers needed to visualise millions of data points in real-time without browser crashes. Traditional charting libraries buckled under the load, and the team needed a fast, customisable alternative.",
      solution:
        "Built a custom charting layer on D3.js with virtual rendering — only the visible data points are rendered to the DOM. Implemented server-side aggregation to reduce the dataset size before it hits the browser. Added role-based access control at the database level using Prisma middleware.",
    },
  },
  {
    id: "proj-4",
    title: "Pulsar CLI",
    description:
      "A developer productivity CLI tool that scaffolds opinionated project templates, manages environment secrets, and integrates with GitHub Actions for one-command deployments.",
    techStack: ["Node.js", "TypeScript", "Commander.js", "GitHub API"],
    category: "other",
    githubUrl: "https://github.com/example/pulsar-cli",
    caseStudy: {
      challenge:
        "Every new project started with 30 minutes of boilerplate setup: creating folders, installing dependencies, configuring ESLint, setting up CI/CD. Engineers were doing this manually, making mistakes, and wasting time.",
      solution:
        "Built a CLI tool that scaffolds a fully configured project in seconds. It creates the folder structure, installs dependencies, sets up ESLint + Prettier, and creates a GitHub Actions workflow. Developers can also manage environment secrets from the CLI, and deploy with a single command.",
    },
  },
  {
    id: "proj-5",
    title: "Pixel Perfect UI Kit",
    description:
      "A lightweight, accessible React component library focused on pixel-perfect design. Includes 40+ components, full TypeScript support, and zero external dependencies beyond React.",
    techStack: ["React", "TypeScript", "CSS Modules", "Vitest"],
    category: "frontend",
    liveUrl: "https://ui-kit.example.com",
    githubUrl: "https://github.com/example/pixel-ui",
  },
  {
    id: "proj-6",
    title: "Velocity Performance Monitor",
    description:
      "A real-time performance monitoring dashboard for web applications. Tracks Core Web Vitals, JavaScript execution time, and network waterfall charts.",
    techStack: ["React", "Web Vitals API", "Service Workers", "IndexedDB"],
    category: "frontend",
    liveUrl: "https://velocity.example.com",
    githubUrl: "https://github.com/example/velocity",
    caseStudy: {
      challenge:
        "Teams had no visibility into their application's real-world performance. They relied on synthetic lab tests, which don't capture real user conditions.",
      solution:
        "Built a performance monitoring dashboard that collects Core Web Vitals, JavaScript execution metrics, and network data from real users. Data is stored locally in IndexedDB and synced to the server in batches to minimise overhead. Teams now have a real-time view of their app's performance.",
    },
  },
];

// ─────────────────────────────────────────────
// Demo Component
// ─────────────────────────────────────────────

export function ProjectGridDemo(): React.ReactElement {
  return (
    <div className="py-24">
      <div className="container">
        <ProjectGrid projects={DEMO_PROJECTS} title="My Work" />
      </div>
    </div>
  );
}
