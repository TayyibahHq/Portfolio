/**
 * @file components/sections/ContactSection.tsx
 * @description Contact section with email CTA and social links.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Large amber email link as the primary CTA
 * - Social icon links in a horizontal row
 * - Availability status badge
 * - Bracket motif and amber rulework for brand consistency
 */

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import type { ContactSectionProps, SocialLink } from "@/types";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const PLATFORM_ICONS: Record<SocialLink["platform"], React.ElementType> = {
  github:   Github,
  linkedin: Linkedin,
  twitter:  Twitter,
  email:    Mail,
  website:  Globe,
};

export function ContactSection({
  email,
  socialLinks,
}: ContactSectionProps): React.ReactElement {
  return (
    <SectionWrapper id="contact" index={4} title="Contact">
      <div className="grid gap-16 md:grid-cols-[1fr_auto]">
        {/* Left: content */}
        <div className="max-w-xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="mb-8 inline-flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
              Available for new projects
            </span>
          </motion.div>

          {/* Intro copy */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.05 }}
            className="mb-10 text-lg leading-relaxed text-foreground/55 md:text-xl"
          >
            I'm always open to interesting conversations, freelance projects, and
            full-time opportunities. If you have something worth building,{" "}
            <span className="text-foreground/80">let's make something worth shipping.</span>
          </motion.p>

          {/* Email CTA */}
          <motion.a
            href={`mailto:${email}`}
            aria-label={`Send email to ${email}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.1 }}
            className={cn(
              "group inline-flex items-center gap-3",
              "font-serif text-2xl font-bold text-foreground md:text-3xl",
              "transition-colors duration-200 hover:text-amber-400",
              "relative",
              "after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-amber-400",
              "after:transition-all after:duration-300 after:ease-out",
              "after:w-0 hover:after:w-full",
            )}
          >
            <Mail
              size={24}
              aria-hidden="true"
              className="text-amber-400 transition-transform duration-200 group-hover:rotate-[-8deg] shrink-0"
            />
            {email}
          </motion.a>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.2 }}
            className="mt-10 flex items-center gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = PLATFORM_ICONS[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full",
                    "border border-white/10 bg-white/[0.03]",
                    "text-foreground/45 transition-all duration-200",
                    "hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-400",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60",
                    "active:scale-95",
                  )}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right: decorative bracket artifact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
          aria-hidden="true"
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center w-32 h-32">
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400/25 rounded-tl-xl" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400/25 rounded-br-xl" />
            <span className="font-mono text-4xl font-black text-amber-400/10">{"<>"}</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
