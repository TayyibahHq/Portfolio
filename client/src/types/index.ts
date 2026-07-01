/**
 * @file types/index.ts
 * @description Central TypeScript type definitions for the portfolio application.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Amber accent, near-black bg, Playfair Display + JetBrains Mono typography
 * - All interfaces are strict — no implicit `any`, no optional fields without reason
 */

// ─────────────────────────────────────────────
// Theme
// ─────────────────────────────────────────────

/** Supported color scheme modes */
export type Theme = "dark" | "light";

/** Shape of the ThemeContext value */
export interface ThemeContextValue {
  /** The currently active theme */
  theme: Theme;
  /** Toggle between dark and light */
  toggleTheme: () => void;
  /** Directly set a specific theme */
  setTheme: (theme: Theme) => void;
}

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────

/** Identifies each navigable section by its DOM id */
export type SectionId = "home" | "about" | "projects" | "showcase" | "experience" | "contact";

/** A single navigation link entry */
export interface NavLink {
  /** Human-readable label rendered in the nav */
  label: string;
  /** The target section id — used as `href="#<id>"` and for smooth-scroll */
  href: SectionId;
  /** Optional aria-label override for accessibility */
  ariaLabel?: string;
}

/** Props for the NavigationBar component */
export interface NavBarProps {
  /** Ordered list of navigation links to render */
  links: NavLink[];
}

/** Props for a single NavItem */
export interface NavItemProps {
  link: NavLink;
  /** Whether this item is currently active (section in viewport) */
  isActive: boolean;
  /** Callback when the item is clicked */
  onClick: (href: SectionId) => void;
  /** Render in mobile (vertical) or desktop (horizontal) layout */
  variant: "desktop" | "mobile";
}

// ─────────────────────────────────────────────
// Sections — Home / Hero
// ─────────────────────────────────────────────

/** Props for the HeroSection component */
export interface HeroSectionProps {
  /** Developer's full name */
  name: string;
  /** Short professional tagline */
  tagline: string;
  /** One-line role / title */
  role: string;
  /** CTA button label */
  ctaLabel: string;
  /** CTA button href */
  ctaHref: string;
}

// ─────────────────────────────────────────────
// Sections — About
// ─────────────────────────────────────────────

/** A single skill entry */
export interface Skill {
  name: string;
  /** Category for grouping (e.g. "Frontend", "Backend", "DevOps") */
  category: string;
}

/** Props for the AboutSection component */
export interface AboutSectionProps {
  /** Short bio paragraph(s) */
  bio: string;
  /** List of skills to display */
  skills: Skill[];
  /** URL to profile photo */
  avatarUrl?: string;
}

// ─────────────────────────────────────────────
// Sections — Projects
// ─────────────────────────────────────────────

/** Project category for filtering */
export type ProjectCategory = "fullstack" | "frontend" | "other";

/** A single project card */
export interface Project {
  id: string;
  title: string;
  description: string;
  /** Technology tags, e.g. ["React", "TypeScript", "Supabase"] */
  tags: string[];
  /** Live demo URL */
  liveUrl?: string;
  /** Source code URL */
  repoUrl?: string;
  /** Optional cover image URL */
  imageUrl?: string;
  /** Whether to visually highlight this as a featured project */
  featured: boolean;
  /** Category for ProjectGrid filtering */
  category?: ProjectCategory;
  /** Optional case study for modal deep dive */
  caseStudy?: {
    challenge: string;
    solution: string;
  };
}

/** Props for the ProjectsSection component */
export interface ProjectsSectionProps {
  projects: Project[];
}

/** Props for a single ProjectCard component */
export interface ProjectCardProps {
  project: Project;
  index: number;
}

// ─────────────────────────────────────────────
// Sections — Experience
// ─────────────────────────────────────────────

/** A single work experience entry */
export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  /** ISO date string, e.g. "2022-03" */
  startDate: string;
  /** ISO date string or "Present" */
  endDate: string | "Present";
  /** Bullet-point achievements / responsibilities */
  highlights: string[];
  /** Tech stack used at this role */
  technologies: string[];
  /** Optional company logo URL */
  logoUrl?: string;
}

/** Props for the ExperienceSection component */
export interface ExperienceSectionProps {
  entries: ExperienceEntry[];
}

/** Props for a single ExperienceCard */
export interface ExperienceCardProps {
  entry: ExperienceEntry;
  index: number;
}

// ─────────────────────────────────────────────
// Sections — Contact
// ─────────────────────────────────────────────

/** Contact form field values */
export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

/** A social / contact link */
export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | "website";
  url: string;
  label: string;
}

/** Props for the ContactSection component */
export interface ContactSectionProps {
  email: string;
  socialLinks: SocialLink[];
}

// ─────────────────────────────────────────────
// Sections — Showcase (Before/After)
// ─────────────────────────────────────────────

/** A single before/after showcase */
export interface BeforeAfterShowcase {
  id: string;
  title: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: "16 / 9" | "4 / 3" | "1 / 1" | "auto";
}

/** Props for a showcase section */
export interface ShowcaseSectionProps {
  showcases: BeforeAfterShowcase[];
}

// ─────────────────────────────────────────────
// Layout
// ─────────────────────────────────────────────

/** Props for the SectionWrapper layout component */
export interface SectionWrapperProps {
  /** Must match a SectionId for scroll-spy to work */
  id: SectionId;
  /** Section index number for the monospace label */
  index: number;
  /** Section display title */
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** Props for the ThemeToggle button */
export interface ThemeToggleProps {
  /** Optional extra class names */
  className?: string;
}
