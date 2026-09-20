/**
 * @file components/BeforeAfterSlider.demo.tsx
 * @description Example usage and demo of the video comparison slider.
 * Shows multiple variations and aspect ratios.
 */

import { useState } from "react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

// ─────────────────────────────────────────────
// Demo Component
// ─────────────────────────────────────────────

export function BeforeAfterSliderDemo(): React.ReactElement {
  const [position1, setPosition1] = useState(50);
  const [position2, setPosition2] = useState(50);
  const [position3, setPosition3] = useState(50);

  return (
    <div className="space-y-16 py-24">
      <div className="container">
        {/* Example 1: Website Redesign (16:9) */}
        <div className="space-y-4">
          <div>
            <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
              Website Redesign
            </h2>
            <p className="text-sm text-foreground/50">
              Drag the slider to compare the old and new design. Position: {Math.round(position1)}%
            </p>
          </div>
          <BeforeAfterSlider
            beforeVideo="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            afterVideo="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            beforeAlt="Old website design"
            afterAlt="New website design"
            beforeLabel="Before"
            afterLabel="After"
            aspectRatio="16 / 9"
            onPositionChange={setPosition1}
          />
        </div>

        {/* Example 2: Mobile App UI (1:1) */}
        <div className="space-y-4">
          <div>
            <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
              Mobile App UI Overhaul
            </h2>
            <p className="text-sm text-foreground/50">
              Square aspect ratio for mobile screenshots. Position: {Math.round(position2)}%
            </p>
          </div>
          <div className="max-w-sm">
            <BeforeAfterSlider
              beforeVideo="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              afterVideo="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              beforeAlt="Old mobile app"
              afterAlt="New mobile app"
              beforeLabel="v1.0"
              afterLabel="v2.0"
              aspectRatio="1 / 1"
              onPositionChange={setPosition2}
            />
          </div>
        </div>

        {/* Example 3: Dashboard Redesign (4:3) */}
        <div className="space-y-4">
          <div>
            <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
              Dashboard Redesign
            </h2>
            <p className="text-sm text-foreground/50">
              4:3 aspect ratio. Position: {Math.round(position3)}%
            </p>
          </div>
          <BeforeAfterSlider
            beforeVideo="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            afterVideo="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            beforeAlt="Old dashboard"
            afterAlt="New dashboard"
            beforeLabel="Legacy"
            afterLabel="Modern"
            aspectRatio="4 / 3"
            initialPosition={30}
            onPositionChange={setPosition3}
          />
        </div>

        {/* Example 4: No Labels */}
        <div className="space-y-4">
          <div>
            <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
              Minimal Style (No Labels)
            </h2>
            <p className="text-sm text-foreground/50">
              Clean comparison without labels. Keyboard and touch supported.
            </p>
          </div>
          <BeforeAfterSlider
            beforeVideo="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            afterVideo="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            beforeAlt="Before state"
            afterAlt="After state"
            aspectRatio="16 / 9"
          />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Placeholder Setup Guide
// ─────────────────────────────────────────────

/**
 * HOW TO USE WITH YOUR OWN VIDEOS
 *
 * Option 1: Local Images (if using webdev_add_feature with S3)
 * ─────────────────────────────────────────────────────────────
 * 1. Upload your videos using: manus-upload-file --webdev before.mp4 after.mp4
 * 2. Use the returned URLs directly:
 *
 *    <BeforeAfterSlider
 *      beforeVideo="/manus-storage/before_abc123.mp4"
 *      afterVideo="/manus-storage/after_def456.mp4"
 *      beforeAlt="Old design"
 *      afterAlt="New design"
 *      beforeLabel="Before"
 *      afterLabel="After"
 *    />
 *
 * Option 2: External video URLs
 * ─────────────────────────────────────────────────────────────
 * <BeforeAfterSlider
 *   beforeVideo="https://example.com/before.mp4"
 *   afterVideo="https://example.com/after.mp4"
 *   beforeAlt="Before"
 *   afterAlt="After"
 * />
 *
 * Video Requirements
 * ─────────────────────────────────────────────────────────────
 * <BeforeAfterSlider
 * - Both videos should use the same dimensions and timing.
 * - Use MP4 or another format supported by the target browser.
 * - The videos are muted and looped so autoplay works reliably.
 *
 * Aspect Ratios
 * ─────────────────────────────────────────────────────────────
 * - "16 / 9" (default) - Widescreen, best for full-page screenshots
 * - "4 / 3"            - Standard, good for dashboard/app UI
 * - "1 / 1"            - Square, perfect for mobile screenshots
 * - "auto"             - Matches the image's natural aspect ratio
 */
