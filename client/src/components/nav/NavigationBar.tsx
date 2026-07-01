/**
 * @file components/nav/NavigationBar.tsx
 * @description Sticky top navigation bar with:
 *   - Smooth-scroll links (desktop + mobile)
 *   - Scroll-spy active state highlighting
 *   - Transparent → frosted-glass background transition on scroll
 *   - Hamburger menu with full-screen mobile overlay
 *   - Dark/Light mode toggle
 *
 * Design: Dark Craft / Obsidian Studio
 * - Monogram `</>` logo in amber
 * - JetBrains Mono for nav labels
 * - Amber accent for active/hover states
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useScrolled } from "@/hooks/useScrolled";
import { scrollToSection } from "@/lib/smoothScroll";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavItem } from "./NavItem";
import { HamburgerButton } from "./HamburgerButton";
import type { NavBarProps, SectionId } from "@/types";

const SECTION_IDS: SectionId[] = [
  "home",
  "about",
  "projects",
  "experience",
  "contact",
];

export function NavigationBar({ links }: NavBarProps): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeId = useScrollSpy(SECTION_IDS);
  const scrolled = useScrolled(60);

  // ── Close menu on Escape key ──────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // ── Lock body scroll when mobile menu is open ─
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // ── Trap focus inside mobile menu ─────────────
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable[0]?.focus();
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (href: SectionId): void => {
      setMenuOpen(false);
      // Defer scroll so the mobile menu close animation completes first
      setTimeout(() => scrollToSection(href), menuOpen ? 250 : 0);
    },
    [menuOpen],
  );

  const toggleMenu = useCallback((): void => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* ── Sticky Nav Bar ───────────────────────── */}
      <header
        role="banner"
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[72px]",
          "transition-all duration-300 ease-out",
          scrolled
            ? "border-b border-white/[0.06] bg-background/90 shadow-[0_1px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary navigation"
          className="container flex h-full items-center justify-between"
        >
          {/* ── Logo / Wordmark ───────────────────── */}
          <a
            href="#home"
            aria-label="Go to top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className={cn(
              "flex items-center gap-2",
              "font-mono text-sm font-bold tracking-tight",
              "transition-opacity duration-200 hover:opacity-80",
            )}
          >
            {/* Geometric </>  monogram */}
            <span
              aria-hidden="true"
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                "bg-amber-400/10 border border-amber-400/30",
                "text-amber-400 text-xs font-black",
              )}
            >
              {"</>"}
            </span>
            <span className="hidden text-foreground sm:inline">
              tayyibah<span className="text-amber-400">.</span>dev
            </span>
          </a>

          {/* ── Desktop Links ─────────────────────── */}
          <ul
            role="list"
            className="hidden items-center gap-8 md:flex"
          >
            {links.map((link) => (
              <li key={link.href}>
                <NavItem
                  link={link}
                  isActive={activeId === link.href}
                  onClick={handleNavClick}
                  variant="desktop"
                />
              </li>
            ))}
          </ul>

          {/* ── Right Controls ────────────────────── */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Hamburger — mobile only */}
            <HamburgerButton
              isOpen={menuOpen}
              onClick={toggleMenu}
              className="md:hidden"
            />
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ──────────────────── */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-40 flex flex-col",
          "bg-background/95 backdrop-blur-xl",
          "transition-all duration-300 ease-out",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        {/* Spacer for the nav bar height */}
        <div className="h-[72px] shrink-0" />

        {/* Links */}
        <ul
          role="list"
          className="flex flex-1 flex-col justify-center px-8 gap-1"
        >
          {links.map((link, i) => (
            <li
              key={link.href}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              }}
              className={cn(
                "transition-all duration-300 ease-out",
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0",
              )}
            >
              <NavItem
                link={link}
                isActive={activeId === link.href}
                onClick={handleNavClick}
                variant="mobile"
              />
            </li>
          ))}
        </ul>

        {/* Footer inside mobile menu */}
        <div className="px-8 pb-12 font-mono text-xs text-foreground/30">
          © {new Date().getFullYear()} Alex Morgan
        </div>
      </div>
    </>
  );
}
