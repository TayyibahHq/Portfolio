/**
 * @file components/sections/ExperienceSection.tsx
 * @description Work experience timeline section.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Vertical timeline with amber dot connector
 * - Company name in Playfair Display, role in Inter
 * - Highlight bullets with amber left-border
 * - Technology tags in monospace
 */

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import type { ExperienceCardProps, ExperienceSectionProps } from "@/types";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/** Format "2022-06" → "Jun 2022" */
function formatDate(date: string | "Present"): string {
  if (date === "Present") return "Present";
  const [year, month] = date.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function ExperienceCard({
  entry,
  index,
}: ExperienceCardProps): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE_OUT, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-1.5 h-3 w-3 rounded-full",
          "border-2 border-amber-400 bg-background",
          "shadow-[0_0_8px_rgba(251,191,36,0.4)]",
        )}
      />

      {/* Connector line (except last item) */}
      <span
        aria-hidden="true"
        className="absolute left-[5px] top-4 h-full w-px bg-white/[0.08]"
      />

      {/* Header */}
      <div className="mb-4">
        <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl">
          {entry.company}
        </h3>
        <p className="mt-0.5 text-base text-foreground/60">{entry.role}</p>
        <p className="mt-1 font-mono text-xs text-foreground/35">
          {formatDate(entry.startDate)} — {formatDate(entry.endDate)}
        </p>
      </div>

      {/* Highlights */}
      <ul role="list" className="mb-5 space-y-2">
        {entry.highlights.map((highlight, i) => (
          <li
            key={i}
            className={cn(
              "border-l-2 border-white/10 pl-4 text-sm leading-relaxed text-foreground/55",
              "transition-colors duration-200 hover:border-amber-400/40 hover:text-foreground/70",
            )}
          >
            {highlight}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {entry.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-foreground/40"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function ExperienceSection({
  entries,
}: ExperienceSectionProps): React.ReactElement {
  return (
    <SectionWrapper id="experience" index={3} title="Experience">
      <div className="space-y-16">
        {entries.map((entry, i) => (
          <ExperienceCard key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
