/**
 * @file hooks/useScrolled.ts
 * @description Returns true once the page has scrolled past a given threshold.
 * Used to transition the NavBar from transparent to opaque.
 *
 * Design: Dark Craft / Obsidian Studio
 */

import { useEffect, useState } from "react";

/**
 * @param threshold - Pixel offset from top before returning `true` (default 60px)
 */
export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > threshold);
    };

    // Check on mount in case the page is already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
