/**
 * @file components/sections/HeroSection.tsx
 * @description Full-viewport hero / home section.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Left-aligned content, right-side code-as-craft signature artifact
 * - Playfair Display for the name, Inter for the tagline
 * - Amber accent on role label and CTA button
 * - Grain texture overlay, ambient glow, bracket geometry motif
 * - Staggered entrance animations via Framer Motion
 */

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/smoothScroll";
import { cn } from "@/lib/utils";
import type { HeroSectionProps } from "@/types";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  }),
};

/** Decorative code-as-craft artifact rendered in the hero right column */
function CodeArtifact(): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.4 }}
      aria-hidden="true"
      className={cn(
        "relative hidden lg:flex flex-col justify-center",
        "font-mono text-[11px] leading-relaxed",
        "select-none pointer-events-none",
      )}
    >
      {/* Outer bracket frame */}
      <div className="relative border border-white/[0.06] rounded-2xl p-8 bg-white/[0.02]">
        {/* Amber corner accents */}
        <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400/60 rounded-tl-2xl" />
        <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400/60 rounded-tr-2xl" />
        <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400/60 rounded-bl-2xl" />
        <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400/60 rounded-br-2xl" />

        {/* Code snippet */}
        <pre className="text-foreground/25 space-y-0.5">
          <span className="block text-foreground/15">{"// portfolio.config.ts"}</span>
          <span className="block">&nbsp;</span>
          <span className="block">
            <span className="text-amber-400/70">const</span>
            <span className="text-foreground/50"> engineer </span>
            <span className="text-amber-400/50">=</span>
            <span className="text-foreground/50"> {"{"}</span>
          </span>
          <span className="block">
            <span className="text-foreground/30">{"  name"}</span>
            <span className="text-foreground/20">{": "}</span>
            <span className="text-amber-400/60">{'"Tayyibah"'}</span>
            <span className="text-foreground/20">,</span>
          </span>
          <span className="block">
            <span className="text-foreground/30">{"  role"}</span>
            <span className="text-foreground/20">{": "}</span>
            <span className="text-amber-400/60">{'"Junior FS Engineer"'}</span>
            <span className="text-foreground/20">,</span>
          </span>
          <span className="block">
            <span className="text-foreground/30">{"  stack"}</span>
            <span className="text-foreground/20">{": ["}</span>
          </span>
          {["React", "TypeScript", "Tailwind"].map((s) => (
            <span key={s} className="block">
              <span className="text-foreground/20">{"    "}</span>
              <span className="text-amber-400/50">{`"${s}"`}</span>
              <span className="text-foreground/20">,</span>
            </span>
          ))}
          <span className="block">
            <span className="text-foreground/20">{"  ],"}</span>
          </span>
          <span className="block">
            {/*<span className="text-foreground/30">{"  years"}</span>
            <span className="text-foreground/20">{": "}</span>
             <span className="text-amber-400/60">1</span> 
            <span className="text-foreground/20">,</span>*/}
          </span>
          <span className="block">
            <span className="text-foreground/30">{"  open"}</span>
            <span className="text-foreground/20">{": "}</span>
            <span className="text-amber-400/60">true</span>
            <span className="text-foreground/20">,</span>
          </span>
          <span className="block">
            <span className="text-foreground/50">{"}"}</span>
            <span className="text-foreground/20">;</span>
          </span>
          <span className="block">&nbsp;</span>
          <span className="block">
            <span className="text-amber-400/40">export default</span>
            <span className="text-foreground/40"> engineer</span>
            <span className="text-foreground/20">;</span>
          </span>
        </pre>

        {/* Blinking cursor */}
        <span className="inline-block mt-3 h-3.5 w-0.5 bg-amber-400/60 animate-pulse" />
      </div>

      {/* Floating stat badges 
      <div className="absolute -top-4 -right-4 flex flex-col gap-2">
        <div className="rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-[10px] text-amber-400/70 backdrop-blur-sm">
          8+ years
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-foreground/40 backdrop-blur-sm">
          WCAG 2.1 AA
        </div>
      </div>*/}
    </motion.div>
  );
}

export function HeroSection({
  name,
  role,
  tagline,
  ctaLabel,
  ctaHref,
}: HeroSectionProps): React.ReactElement {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className={cn(
        "relative flex min-h-screen flex-col justify-center",
        "overflow-hidden",
      )}
    >
      {/* ── Grain texture overlay ─────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Ambient amber glow ───────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-amber-400/[0.04] blur-[140px]"
      />
      {/* Secondary cool glow for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[100px]"
      />

      {/* ── Vignette ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, oklch(0.10 0.008 270 / 0.7) 100%)",
        }}
      />

      <div className="container relative z-10 pt-[72px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">
          {/* Left: Content */}
          <div className="max-w-2xl">
            {/* Role label */}
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-amber-400"
            >
              {role}
            </motion.p>

            {/* Name */}
            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={cn(
                "font-serif text-6xl font-bold leading-[1.05] tracking-tight",
                "md:text-7xl lg:text-8xl",
                "text-foreground",
              )}
            >
              {name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={cn(
                "mt-6 max-w-xl text-xl leading-relaxed text-foreground/55",
                "md:text-2xl",
              )}
            >
              {tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollToSection(ctaHref as "projects")}
                className={cn(
                  "group flex items-center gap-2 rounded-full",
                  "bg-amber-400 px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-black",
                  "transition-all duration-200 ease-out",
                  "hover:bg-amber-300 hover:gap-3 active:scale-95",
                )}
              >
                {ctaLabel}
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "flex items-center gap-2 rounded-full",
                  "border border-white/15 px-6 py-3 font-mono text-sm uppercase tracking-widest text-foreground/60",
                  "transition-all duration-200 ease-out",
                  "hover:border-amber-400/40 hover:text-foreground active:scale-95",
                )}
              >
                Let's talk
              </button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-20 flex items-center gap-3"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/25">
                Scroll to explore
              </span>
              <ArrowDown
                size={12}
                aria-hidden="true"
                className="animate-bounce text-foreground/25"
              />
            </motion.div>
          </div>

          {/* Right: Code-as-craft artifact */}
          <CodeArtifact />
        </div>
      </div>
    </section>
  );
}
