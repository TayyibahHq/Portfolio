/**
 * @file components/Footer.tsx
 * @description Site footer with brand identity and amber motif.
 *
 * Design: Dark Craft / Obsidian Studio
 * - Monospace text, amber dot separator, bracket motif
 */

export function Footer(): React.ReactElement {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/[0.05] py-10"
    >
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 font-mono text-[8px] font-black text-amber-400"
          >
            {"</>"}
          </span>
          <span className="font-mono text-xs text-foreground/30">
            tayyibah<span className="text-amber-400/50">.</span>dev
          </span>
        </div>

        <p className="font-mono text-xs text-foreground/20">
          © {new Date().getFullYear()} Tayyibah
          <span aria-hidden="true" className="mx-2 text-amber-400/30">·</span>
          Built with React · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
