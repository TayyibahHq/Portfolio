/**
 * @file lib/smoothScroll.ts
 * @description Smooth-scroll utility that accounts for the sticky navbar height.
 *
 * Design: Dark Craft / Obsidian Studio
 */

import type { SectionId } from "@/types";

/** Height of the sticky navbar in pixels — must match the nav's `h-*` class */
const NAV_OFFSET = 72;

/**
 * Smoothly scrolls to the section with the given id,
 * offsetting for the sticky navigation bar.
 */
export function scrollToSection(id: SectionId): void {
  const el = document.getElementById(id);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

  window.scrollTo({ top, behavior: "smooth" });
}
