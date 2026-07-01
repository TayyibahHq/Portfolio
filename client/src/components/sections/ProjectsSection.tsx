/**
 * @file components/sections/ProjectsSection.tsx
 * @description Projects section using the ProjectGrid component.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Interactive filtering by category (All, Full-Stack, Front-End, Other)
 * - Featured projects with interface fragments
 * - Case study modals for deep dives
 */

import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionWrapper } from "@/components/SectionWrapper";
import type { ProjectsSectionProps } from "@/types";

export function ProjectsSection({
  projects,
}: ProjectsSectionProps): React.ReactElement {
  // Convert existing Project format to ProjectGrid format
  const gridProjects = projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    techStack: project.tags,
    liveUrl: project.liveUrl,
    githubUrl: project.repoUrl,
    image: project.imageUrl,
    category: (project.category || "other") as "fullstack" | "frontend" | "other",
    caseStudy: project.caseStudy,
  }));

  return (
    <SectionWrapper id="projects" index={2} title="Projects">
      <ProjectGrid projects={gridProjects} />
    </SectionWrapper>
  );
}
