/**
 * @file components/ProjectGrid.tsx
 * @description Interactive project grid with category filtering and case study modal.
 *
 * Features:
 * - TypeScript-strict Project interface with category union type
 * - Filter button bar (All, Full-Stack, Front-End, Other) with smooth state transitions
 * - Responsive card grid with tech badge map and action links
 * - Expandable case study modal (Challenge vs. Solution deep dive)
 * - Framer Motion animations for card entrance and modal reveal
 *
 * Design: Dark Craft / Obsidian Studio
 * - Amber accent on hover, bracket motifs, monospace labels
 * - Subtle grain texture, layered depth, glass-morphism effects
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type ProjectCategory = "fullstack" | "frontend" | "other";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  category: ProjectCategory;
  /** Challenge vs. Solution for the case study modal */
  caseStudy?: {
    challenge: string;
    solution: string;
  };
}

type FilterCategory = ProjectCategory | "all";

// ─────────────────────────────────────────────
// Filter Button Bar
// ─────────────────────────────────────────────

interface FilterBarProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

function FilterBar({ activeFilter, onFilterChange }: FilterBarProps): React.ReactElement {
  const filters: Array<{ label: string; value: FilterCategory }> = [
    { label: "All", value: "all" },
    { label: "Full-Stack", value: "fullstack" },
    { label: "Front-End", value: "frontend" },
    { label: "Other", value: "other" },
  ];

  return (
    <div className="mb-10 flex flex-wrap items-center gap-3">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "relative rounded-full px-4 py-2 font-mono text-sm uppercase tracking-widest",
            "transition-all duration-200 ease-out",
            activeFilter === filter.value
              ? "border-amber-400 bg-amber-400/15 text-amber-400 border"
              : "border border-white/10 bg-white/[0.03] text-foreground/60 hover:border-white/20 hover:text-foreground/80",
          )}
        >
          {filter.label}
          {activeFilter === filter.value && (
            <motion.span
              layoutId="active-filter"
              className="absolute inset-0 rounded-full border border-amber-400/50 bg-amber-400/5"
              style={{ pointerEvents: "none" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Tech Badge
// ─────────────────────────────────────────────

interface TechBadgeProps {
  tech: string;
  index: number;
}

function TechBadge({ tech, index }: TechBadgeProps): React.ReactElement {
  const colors = [
    "bg-blue-400/10 border-blue-400/30 text-blue-300",
    "bg-purple-400/10 border-purple-400/30 text-purple-300",
    "bg-cyan-400/10 border-cyan-400/30 text-cyan-300",
    "bg-pink-400/10 border-pink-400/30 text-pink-300",
    "bg-green-400/10 border-green-400/30 text-green-300",
  ];

  const colorClass = colors[index % colors.length];

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={cn(
        "inline-block rounded-full border px-2.5 py-0.5",
        "font-mono text-[11px] font-medium uppercase tracking-widest",
        "transition-all duration-200 hover:scale-105",
        colorClass,
      )}
    >
      {tech}
    </motion.span>
  );
}

// ─────────────────────────────────────────────
// Case Study Modal
// ─────────────────────────────────────────────

interface CaseStudyModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

function CaseStudyModal({
  project,
  isOpen,
  onClose,
}: CaseStudyModalProps): React.ReactElement {
  if (!project.caseStudy) return <></>;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "fixed inset-4 z-50 flex flex-col rounded-2xl",
              "border border-white/10 bg-background/95 backdrop-blur-xl",
              "overflow-y-auto md:inset-12 md:max-h-[80vh]",
            )}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 p-6 md:p-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-foreground/40">
                  Case Study
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  "border border-white/10 bg-white/[0.03]",
                  "text-foreground/50 transition-all duration-200",
                  "hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-400",
                )}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-8 p-6 md:p-8">
              {/* Challenge */}
              <div>
                <h3 className="mb-3 flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                  <span className="text-amber-400">→</span> Challenge
                </h3>
                <p className="leading-relaxed text-foreground/60">
                  {project.caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="mb-3 flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                  <span className="text-amber-400">→</span> Solution
                </h3>
                <p className="leading-relaxed text-foreground/60">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-amber-400/70">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <TechBadge key={tech} tech={tech} index={i} />
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex items-center gap-2 rounded-full",
                      "border border-amber-400/30 bg-amber-400/10 px-4 py-2",
                      "font-mono text-sm uppercase tracking-widest text-amber-400",
                      "transition-all duration-200 hover:border-amber-400/60 hover:bg-amber-400/20",
                    )}
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    View Live
                    <ArrowRight
                      size={12}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-2 rounded-full",
                      "border border-white/10 bg-white/[0.03] px-4 py-2",
                      "font-mono text-sm uppercase tracking-widest text-foreground/60",
                      "transition-all duration-200 hover:border-white/20 hover:text-foreground/80",
                    )}
                  >
                    <Github size={14} aria-hidden="true" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────
// Project Card
// ─────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
  onCaseStudyClick: (project: Project) => void;
}

function ProjectCard({
  project,
  index,
  onCaseStudyClick,
}: ProjectCardProps): React.ReactElement {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        "group relative flex flex-col rounded-2xl",
        "border border-white/[0.07] bg-white/[0.02]",
        "p-6 md:p-7",
        "transition-all duration-300 ease-out",
        "hover:border-amber-400/25 hover:bg-white/[0.04]",
        "hover:shadow-[0_0_60px_-16px_rgba(251,191,36,0.15)]",
      )}
    >
      {/* Bracket corner accents */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400/20 rounded-tl-xl transition-colors duration-300 group-hover:border-amber-400/50"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400/20 rounded-br-xl transition-colors duration-300 group-hover:border-amber-400/50"
      />

      {/* Category badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-block rounded-full border border-amber-400/20 bg-amber-400/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-amber-400/70">
          {project.category === "fullstack"
            ? "Full-Stack"
            : project.category === "frontend"
              ? "Front-End"
              : "Other"}
        </span>
        <span className="font-mono text-[10px] text-foreground/25 uppercase tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 font-serif text-xl font-bold text-foreground md:text-2xl">
        {project.title}
      </h3>

      {/* Description */}
      <p className="flex-1 text-sm leading-relaxed text-foreground/50 md:text-base">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="my-5 flex flex-wrap gap-2">
        {project.techStack.map((tech, i) => (
          <TechBadge key={tech} tech={tech} index={i} />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.05] pt-5">
        {/* Case Study button (if available) */}
        {project.caseStudy && (
          <button
            onClick={() => onCaseStudyClick(project)}
            className={cn(
              "group/cta flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest",
              "text-amber-400/70 transition-colors duration-200 hover:text-amber-400",
            )}
          >
            Case Study
            <ArrowRight
              size={11}
              aria-hidden="true"
              className="opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-150 group-hover/cta:opacity-100 group-hover/cta:translate-y-0 group-hover/cta:translate-x-0"
            />
          </button>
        )}

        {/* Live Demo link */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
            className={cn(
              "group/link flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest",
              "text-foreground/40 transition-colors duration-200 hover:text-amber-400",
            )}
          >
            <ExternalLink size={11} aria-hidden="true" />
            Demo
            <ArrowRight
              size={10}
              aria-hidden="true"
              className="opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-150 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0"
            />
          </a>
        )}

        {/* GitHub link */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code of ${project.title}`}
            className={cn(
              "flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest",
              "text-foreground/40 transition-colors duration-200 hover:text-amber-400",
            )}
          >
            <Github size={11} aria-hidden="true" />
            Source
          </a>
        )}
      </div>
    </motion.article>
  );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

interface ProjectGridProps {
  projects: Project[];
  /** Optional title above the filter bar */
  title?: string;
}

export function ProjectGrid({
  projects,
  title = "Featured Projects",
}: ProjectGridProps): React.ReactElement {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <div>
      {/* Title */}
      {title && (
        <h2 className="mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h2>
      )}

      {/* Filter bar */}
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Project grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onCaseStudyClick={setSelectedProject}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full py-12 text-center"
            >
              <p className="font-mono text-sm uppercase tracking-widest text-foreground/30">
                No projects in this category
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Case study modal */}
      <CaseStudyModal
        project={selectedProject || projects[0]}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
