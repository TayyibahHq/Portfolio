/**
 * @file components/sections/AboutSection.tsx
 * @description About / bio section with skill tags grouped by category.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Two-column layout on desktop (bio left, skills right)
 * - Skill tags use monospace font with amber border on hover
 * - Framer Motion stagger entrance
 */

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import type { AboutSectionProps, Skill } from "@/types";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

function groupSkills(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});
}

export function AboutSection({
  bio,
  skills,
}: AboutSectionProps): React.ReactElement {
  const grouped = groupSkills(skills);

  return (
    <SectionWrapper id="about" index={1} title="About">
      <div className="grid gap-16 md:grid-cols-2 md:gap-24">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <p className="text-lg leading-relaxed text-foreground/70 md:text-xl">
            {bio}
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/50">
            When I'm not pushing pixels or reviewing PRs, I'm exploring type
            design, reading about programming language theory, or brewing
            pour-over coffee with unreasonable precision.
          </p>
        </motion.div>

        {/* Skills by category */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
          className="space-y-8"
        >
          {Object.entries(grouped).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400/70">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={cn(
                      "rounded-full border border-white/10 px-3 py-1",
                      "font-mono text-xs text-foreground/60",
                      "transition-all duration-200",
                      "hover:border-amber-400/40 hover:text-amber-400/80",
                    )}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
