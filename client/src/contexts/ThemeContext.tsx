/**
 * @file contexts/ThemeContext.tsx
 * @description Global dark/light mode state management.
 *
 * Features:
 * - Reads system preference via `prefers-color-scheme` media query on first load
 * - Persists user choice to localStorage under the key "portfolio-theme"
 * - Applies/removes the `dark` class on <html> so Tailwind's `dark:` utilities work
 * - Exposes `theme`, `toggleTheme`, and `setTheme` via context
 *
 * Design: Dark Craft / Obsidian Studio — defaults to dark theme
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import type { Theme, ThemeContextValue } from "@/types";

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

const STORAGE_KEY = "portfolio-theme" as const;
const DEFAULT_THEME: Theme = "dark";

// ─────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
ThemeContext.displayName = "ThemeContext";

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

/**
 * Determine the initial theme with the following priority:
 * 1. Persisted user preference in localStorage
 * 2. OS/browser `prefers-color-scheme` media query
 * 3. Hard-coded default (dark)
 */
function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;

  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "dark" || stored === "light") return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

/** Apply or remove the `dark` class on the root <html> element */
function applyThemeToDOM(theme: Theme): void {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
}

// ─────────────────────────────────────────────
// Provider
// ─────────────────────────────────────────────

interface ThemeProviderProps {
  children: ReactNode;
  /** Override the initial theme (useful for testing) */
  defaultTheme?: Theme;
}

export function ThemeProvider({
  children,
  defaultTheme,
}: ThemeProviderProps): ReactElement {
  const [theme, setThemeState] = useState<Theme>(() => {
    return defaultTheme ?? resolveInitialTheme();
  });

  // Sync DOM and localStorage whenever theme changes
  useEffect(() => {
    applyThemeToDOM(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((next: Theme): void => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback((): void => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// ─────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────

/**
 * Consume the ThemeContext.
 * Must be used inside a `<ThemeProvider>`.
 *
 * @example
 * const { theme, toggleTheme } = useTheme();
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (ctx === undefined) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return ctx;
}
