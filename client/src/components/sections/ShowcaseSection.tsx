/**
 * @file components/sections/ShowcaseSection.tsx
 * @description Showcase section with before/after image comparisons.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Uses BeforeAfterSlider for interactive comparisons
 * - Responsive grid layout with descriptions
 */

import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SectionWrapper } from "@/components/SectionWrapper";
import type { ShowcaseSectionProps } from "@/types";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function ShowcaseSection({
  showcases,
}: ShowcaseSectionProps): React.ReactElement {
  return (
    <SectionWrapper id="showcase" index={3} title="Showcase">
      <div className="grid gap-12 lg:grid-cols-2">
        {showcases.map((showcase, index) => (
          <motion.div
            key={showcase.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE_OUT, delay: index * 0.1 }}
            className="space-y-4"
          >
            {/* Title */}
            <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl">
              {showcase.title}
            </h3>

            {/* Description */}
            {showcase.description && (
              <p className="text-sm leading-relaxed text-foreground/50 md:text-base">
                {showcase.description}
              </p>
            )}

            {/* Slider */}
            <BeforeAfterSlider
              beforeImage={showcase.beforeImage}
              afterImage={showcase.afterImage}
              beforeAlt={showcase.beforeAlt}
              afterAlt={showcase.afterAlt}
              beforeLabel={showcase.beforeLabel}
              afterLabel={showcase.afterLabel}
              aspectRatio={showcase.aspectRatio || "16 / 9"}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
