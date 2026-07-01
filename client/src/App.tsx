/**
 * @file App.tsx
 * @description Root application layout shell.
 *
 * Architecture:
 * ┌─────────────────────────────────────────────┐
 * │  ThemeProvider  (global dark/light state)   │
 * │  ┌───────────────────────────────────────┐  │
 * │  │  TooltipProvider                      │  │
 * │  │  ┌─────────────────────────────────┐  │  │
 * │  │  │  ErrorBoundary                  │  │  │
 * │  │  │  ┌───────────────────────────┐  │  │  │
 * │  │  │  │  NavigationBar (sticky)   │  │  │  │
 * │  │  │  │  <Router>                 │  │  │  │
 * │  │  │  │    /  → Home              │  │  │  │
 * │  │  │  │    /* → NotFound          │  │  │  │
 * │  │  │  └───────────────────────────┘  │  │  │
 * │  │  └─────────────────────────────────┘  │  │
 * │  └───────────────────────────────────────┘  │
 * └─────────────────────────────────────────────┘
 *
 * Design: Dark Craft / Obsidian Studio
 * - defaultTheme="dark" — portfolio defaults to dark mode
 * - ThemeProvider is switchable (passes `switchable` to allow toggling)
 * - NavigationBar is rendered outside <Router> so it persists across routes
 */

import { Route, Switch }       from "wouter";
import { Toaster }             from "@/components/ui/sonner";
import { TooltipProvider }     from "@/components/ui/tooltip";
import ErrorBoundary           from "@/components/ErrorBoundary";
import { ThemeProvider }       from "@/contexts/ThemeContext";
import { NavigationBar }       from "@/components/nav/NavigationBar";
import { NAV_LINKS }           from "@/constants/portfolio";
import Home                    from "@/pages/Home";
import NotFound                from "@/pages/NotFound";

// ─────────────────────────────────────────────
// Router
// ─────────────────────────────────────────────

function Router(): React.ReactElement {
  return (
    <Switch>
      <Route path="/"    component={Home}     />
      <Route path="/404" component={NotFound} />
      {/* Catch-all fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

// ─────────────────────────────────────────────
// App
// ─────────────────────────────────────────────

/**
 * Root component.
 *
 * Layout responsibilities:
 * - Provides global theme state via ThemeProvider
 * - Renders the sticky NavigationBar above all page content
 * - Delegates page rendering to the Router
 */
function App(): React.ReactElement {
  return (
    <ErrorBoundary>
      {/*
       * ThemeProvider manages dark/light state globally.
       * It reads from localStorage on mount, falls back to system preference,
       * and defaults to "dark" if neither is available.
       */}
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          {/* Skip-to-content link for keyboard / screen-reader users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-amber-400 focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-bold focus:text-black focus:outline-none"
          >
            Skip to main content
          </a>

          {/*
           * NavigationBar is rendered at the App level (outside Router)
           * so it persists across route changes without remounting.
           * It receives the typed NavLink[] array from constants.
           */}
          <NavigationBar links={NAV_LINKS} />

          {/* Page content */}
          <Router />

          {/* Global toast notifications */}
          <Toaster position="bottom-right" />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
