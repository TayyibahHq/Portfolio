/**
 * @file components/nav/NavItem.tsx
 * @description Reusable navigation link for desktop and mobile layouts.
 */

import { cn } from "@/lib/utils";
import type { NavItemProps } from "@/types";

export function NavItem({
  link,
  isActive,
  onClick,
  variant,
}: NavItemProps): React.ReactElement {
  const isDesktop = variant === "desktop";

  return (
    <a
      href={`#${link.href}`}
      aria-label={link.ariaLabel ?? link.label}
      aria-current={isActive ? "page" : undefined}
      onClick={(event) => {
        event.preventDefault();
        onClick(link.href);
      }}
      className={cn(
        "group relative block rounded-full transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60",
        isDesktop
          ? "px-2 py-1.5 text-sm font-medium uppercase tracking-[0.2em] text-foreground/80"
          : "px-0 py-4 text-2xl font-semibold text-foreground/80",
        isActive ? "text-amber-400" : "hover:text-amber-400",
      )}
    >
      <span className="relative">
        {link.label}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-amber-400 transition-transform duration-200",
            "group-hover:scale-x-100",
            isActive && "scale-x-100",
          )}
        />
      </span>
    </a>
  );
}
