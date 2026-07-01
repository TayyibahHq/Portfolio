/**
 * @file pages/Home.tsx
 * @description Single-page portfolio — composes all section components.
 *
 * Design: Dark Craft / Obsidian Studio
 * - All sections rendered in sequence with consistent spacing
 * - Data sourced from constants/portfolio.ts
 */

import { HeroSection }       from "@/components/sections/HeroSection";
import { AboutSection }      from "@/components/sections/AboutSection";
import { ProjectsSection }   from "@/components/sections/ProjectsSection";
import { ShowcaseSection }   from "@/components/sections/ShowcaseSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection }    from "@/components/sections/ContactSection";
import { Footer }            from "@/components/Footer";

import {
  HERO_DATA,
  BIO,
  SKILLS,
  PROJECTS,
  SHOWCASES,
  EXPERIENCE,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
} from "@/constants/portfolio";

export default function Home(): React.ReactElement {
  return (
    <main id="main-content">
      <HeroSection
        name={HERO_DATA.name}
        role={HERO_DATA.role}
        tagline={HERO_DATA.tagline}
        ctaLabel={HERO_DATA.ctaLabel}
        ctaHref={HERO_DATA.ctaHref}
      />

      <AboutSection bio={BIO} skills={SKILLS} />

      <ProjectsSection projects={PROJECTS} />

      <ShowcaseSection showcases={SHOWCASES} />

      <ExperienceSection entries={EXPERIENCE} />

      <ContactSection email={CONTACT_EMAIL} socialLinks={SOCIAL_LINKS} />

      <Footer />
    </main>
  );
}
