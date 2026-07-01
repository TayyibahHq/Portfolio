/**
 * @file components/ThemeToggle.tsx
 * @description Animated dark/light mode toggle button.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Amber accent on hover/active
 * - Sun ↔ Moon icon swap with scale + opacity animation (150ms)
 * - Uses `useTheme` from ThemeContext
 */

import { useTheme } from "@/contexts/ThemeContext";
import type { ThemeToggleProps } from "@/types";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: ThemeToggleProps): React.ReactElement {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={cn(
        // Base
        "relative flex h-9 w-9 items-center justify-center rounded-full",
        "border border-white/10 bg-white/5 backdrop-blur-sm",
        // Hover / Focus
        "transition-all duration-200 ease-out",
        "hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-400",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60",
        // Active press
        "active:scale-95",
        className,
      )}
    >
      {/* Sun icon — visible in dark mode, hidden in light */}
      <Sun
        size={16}
        aria-hidden="true"
        className={cn(
          "absolute transition-all duration-150",
          isDark
            ? "scale-100 opacity-100 rotate-0"
            : "scale-50 opacity-0 rotate-90",
        )}
      />
      {/* Moon icon — visible in light mode, hidden in dark */}
      <Moon
        size={16}
        aria-hidden="true"
        className={cn(
          "absolute transition-all duration-150",
          isDark
            ? "scale-50 opacity-0 -rotate-90"
            : "scale-100 opacity-100 rotate-0",
        )}
      />
    </button>
  );
}
