/**
 * @file components/BeforeAfterSlider.tsx
 * @description Interactive before/after image comparison slider with pointer events.
 *
 * Features:
 * - Pointer event tracking (mouse + touch) with clip-path animation
 * - Fully responsive and mobile-optimized
 * - Keyboard support (arrow keys to adjust)
 * - WCAG 2.1 AA accessibility compliance
 * - TypeScript-strict with comprehensive prop types
 * - Smooth animations and visual feedback
 *
 * Design: Dark Craft / Obsidian Studio
 * - Amber accent on handle, subtle grain, minimalist UI
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface BeforeAfterSliderProps {
  /** URL or path to the "before" image */
  beforeImage: string;
  /** URL or path to the "after" image */
  afterImage: string;
  /** Alt text for the before image */
  beforeAlt: string;
  /** Alt text for the after image */
  afterAlt: string;
  /** Optional: Label shown above the before image */
  beforeLabel?: string;
  /** Optional: Label shown above the after image */
  afterLabel?: string;
  /** Optional: Container aspect ratio (default: "16 / 9") */
  aspectRatio?: "16 / 9" | "4 / 3" | "1 / 1" | "auto";
  /** Optional: Initial slider position (0-100, default: 50) */
  initialPosition?: number;
  /** Optional: Callback when slider position changes */
  onPositionChange?: (position: number) => void;
  /** Optional: Custom container className */
  containerClassName?: string;
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  aspectRatio = "16 / 9",
  initialPosition = 50,
  onPositionChange,
  containerClassName,
}: BeforeAfterSliderProps): React.ReactElement {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  // ─────────────────────────────────────────────
  // Pointer event handlers
  // ─────────────────────────────────────────────

  /**
   * Calculate slider position from pointer event.
   * Returns a value between 0 and 100.
   */
  const getPositionFromPointer = useCallback(
    (clientX: number): number => {
      if (!containerRef.current) return position;

      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));

      return percentage;
    },
    [position],
  );

  /**
   * Handle pointer down (mouse or touch).
   */
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      setIsDragging(true);
      // Set pointer capture to track movement outside container
      containerRef.current?.setPointerCapture(e.pointerId);
    },
    [],
  );

  /**
   * Handle pointer move (mouse or touch).
   */
  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging) return;

      const newPosition = getPositionFromPointer(e.clientX);
      setPosition(newPosition);
      onPositionChange?.(newPosition);
    },
    [isDragging, getPositionFromPointer, onPositionChange],
  );

  /**
   * Handle pointer up (mouse or touch).
   */
  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  /**
   * Handle click anywhere on the container to move slider.
   */
  const handleContainerClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDragging) return; // Ignore if currently dragging

      const newPosition = getPositionFromPointer(e.clientX);
      setPosition(newPosition);
      onPositionChange?.(newPosition);
    },
    [isDragging, getPositionFromPointer, onPositionChange],
  );

  /**
   * Handle keyboard navigation (arrow keys).
   */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!handleRef.current?.contains(document.activeElement)) return;

      const step = 5; // 5% per arrow key press
      let newPosition = position;

      if (e.key === "ArrowLeft") {
        newPosition = Math.max(0, position - step);
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        newPosition = Math.min(100, position + step);
        e.preventDefault();
      }

      if (newPosition !== position) {
        setPosition(newPosition);
        onPositionChange?.(newPosition);
      }
    },
    [position, onPositionChange],
  );

  // Attach keyboard listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // ─────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────

  const aspectRatioClass =
    aspectRatio === "16 / 9"
      ? "aspect-video"
      : aspectRatio === "4 / 3"
        ? "aspect-[4/3]"
        : aspectRatio === "1 / 1"
          ? "aspect-square"
          : "w-full";

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onClick={handleContainerClick}
      role="region"
      aria-label="Before and after image comparison"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "group relative w-full cursor-col-resize select-none overflow-hidden rounded-2xl",
        "border border-white/[0.07] bg-black",
        aspectRatioClass,
        containerClassName,
      )}
    >
      {/* Before image (background) */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable="false"
      />

      {/* After image (clipped) */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{
          clipPath: `inset(0 0 0 ${100 - position}%)`,
        }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          className="h-full w-full object-cover"
          draggable="false"
        />
      </div>

      {/* Before label */}
      {beforeLabel && (
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-white/70 backdrop-blur-sm">
            {beforeLabel}
          </span>
        </div>
      )}

      {/* After label */}
      {afterLabel && (
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-white/70 backdrop-blur-sm">
            {afterLabel}
          </span>
        </div>
      )}

      {/* Slider handle */}
      <div
        ref={handleRef}
        role="slider"
        tabIndex={0}
        aria-label="Image comparison slider"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          "absolute top-0 bottom-0 z-20 w-1 -translate-x-1/2 transition-opacity duration-200",
          "bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0",
          isDragging ? "opacity-100" : "opacity-60 group-hover:opacity-100",
        )}
        style={{
          left: `${position}%`,
        }}
      >
        {/* Handle thumb */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "flex h-12 w-12 items-center justify-center rounded-full",
            "border-2 border-amber-400 bg-black/60 backdrop-blur-md",
            "transition-all duration-200",
            isDragging ? "scale-110" : "scale-100 group-hover:scale-105",
            "shadow-[0_0_20px_rgba(251,191,36,0.3)]",
          )}
        >
          {/* Left arrow (before) */}
          <ChevronLeft
            size={18}
            className="absolute -left-1 text-amber-400 transition-all duration-200"
            style={{
              opacity: isDragging ? 1 : 0.7,
              transform: isDragging ? "translateX(-2px)" : "translateX(0)",
            }}
            aria-hidden="true"
          />

          {/* Right arrow (after) */}
          <ChevronRight
            size={18}
            className="absolute -right-1 text-amber-400 transition-all duration-200"
            style={{
              opacity: isDragging ? 1 : 0.7,
              transform: isDragging ? "translateX(2px)" : "translateX(0)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Keyboard hint (visible on focus) */}
      <div
        className={cn(
          "absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none",
          "rounded-full border border-white/10 bg-black/40 px-3 py-1",
          "font-mono text-[10px] uppercase tracking-widest text-white/40",
          "transition-opacity duration-200",
          isDragging ? "opacity-0" : "opacity-0 group-hover:opacity-100",
        )}
      >
        Use ← → or drag to compare
      </div>
    </div>
  );
}
