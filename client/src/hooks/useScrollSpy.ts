/**
 * @file hooks/useScrollSpy.ts
 * @description Tracks which section is currently in the viewport using IntersectionObserver.
 * Returns the id of the active section so the NavBar can highlight the correct link.
 *
 * Design: Dark Craft / Obsidian Studio
 */

import { useEffect, useState } from "react";
import type { SectionId } from "@/types";

/**
 * @param sectionIds - Ordered list of section ids to observe
 * @param rootMargin - IntersectionObserver rootMargin (default centres the trigger zone)
 */
export function useScrollSpy(
  sectionIds: SectionId[],
  rootMargin = "-40% 0px -55% 0px",
): SectionId {
  const [activeId, setActiveId] = useState<SectionId>(sectionIds[0]);

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin },
      );

      observer.observe(el);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds, rootMargin]);

  return activeId;
}
