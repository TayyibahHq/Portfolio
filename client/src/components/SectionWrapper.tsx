/**
 * @file components/SectionWrapper.tsx
 * @description Shared layout shell for every portfolio section.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Monospace section number label with amber accent
 * - Playfair Display section title with amber underline rule
 * - Subtle top border rule as section separator
 * - Bracket motif in section header for brand consistency
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SectionWrapperProps } from "@/types";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function SectionWrapper({
  id,
  index,
  title,
  children,
  className,
}: SectionWrapperProps): React.ReactElement {
  const paddedIndex = String(index).padStart(2, "0");

  return (
    <section
      id={id}
      aria-labelledby={`section-title-${id}`}
      className={cn("py-24 md:py-32", className)}
    >
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mb-16"
        >
          {/* Amber rule + section number */}
          <div className="mb-4 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px flex-shrink-0 w-8 bg-amber-400/50"
            />
            <p
              aria-hidden="true"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400/70"
            >
              {paddedIndex} / {title}
            </p>
          </div>

          {/* Section title */}
          <div className="flex items-end gap-4">
            <h2
              id={`section-title-${id}`}
              className={cn(
                "font-serif text-4xl font-bold leading-tight md:text-5xl",
                "text-foreground",
                "relative",
                // Amber underline accent
                "after:absolute after:-bottom-3 after:left-0 after:h-[3px] after:w-10 after:bg-amber-400 after:rounded-full",
              )}
            >
              {title}
            </h2>
            {/* Bracket motif */}
            <span
              aria-hidden="true"
              className="mb-1 font-mono text-2xl font-black text-amber-400/15 leading-none"
            >
              {"{ }"}
            </span>
          </div>
        </motion.div>

        {children}
      </div>
    </section>
  );
}
