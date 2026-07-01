/**
 * @file components/nav/HamburgerButton.tsx
 * @description Animated hamburger ↔ X toggle button for the mobile menu.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Three bars morph into an X via CSS transforms (200ms ease-out)
 * - Amber hover state
 */

import { cn } from "@/lib/utils";

interface HamburgerButtonProps {
  /** Whether the mobile menu is currently open */
  isOpen: boolean;
  /** Toggle callback */
  onClick: () => void;
  className?: string;
}

export function HamburgerButton({
  isOpen,
  onClick,
  className,
}: HamburgerButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className={cn(
        "flex h-9 w-9 flex-col items-center justify-center gap-[5px]",
        "rounded-full border border-white/10 bg-white/5 backdrop-blur-sm",
        "transition-all duration-200 hover:border-amber-400/40 hover:bg-amber-400/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60",
        "active:scale-95",
        className,
      )}
    >
      {/* Top bar */}
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-4 bg-current transition-all duration-200 ease-out",
          isOpen && "translate-y-[6px] rotate-45",
        )}
      />
      {/* Middle bar */}
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-4 bg-current transition-all duration-200 ease-out",
          isOpen && "opacity-0 scale-x-0",
        )}
      />
      {/* Bottom bar */}
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-4 bg-current transition-all duration-200 ease-out",
          isOpen && "-translate-y-[6px] -rotate-45",
        )}
      />
    </button>
  );
}
