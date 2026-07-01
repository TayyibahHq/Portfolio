/**
 * @file components/BeforeAfterSlider.demo.tsx
 * @description Example usage and demo of the BeforeAfterSlider component.
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
            beforeImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=675&fit=crop"
            afterImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop"
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
              beforeImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop"
              afterImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop"
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
            beforeImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop"
            afterImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop"
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
            beforeImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=675&fit=crop"
            afterImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop"
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
 * HOW TO USE WITH YOUR OWN IMAGES
 *
 * Option 1: Local Images (if using webdev_add_feature with S3)
 * ─────────────────────────────────────────────────────────────
 * 1. Upload your images using: manus-upload-file --webdev before.png after.png
 * 2. Use the returned URLs directly:
 *
 *    <BeforeAfterSlider
 *      beforeImage="/manus-storage/before_abc123.png"
 *      afterImage="/manus-storage/after_def456.png"
 *      beforeAlt="Old design"
 *      afterAlt="New design"
 *      beforeLabel="Before"
 *      afterLabel="After"
 *    />
 *
 * Option 2: External URLs (Unsplash, Imgur, etc.)
 * ─────────────────────────────────────────────────────────────
 * <BeforeAfterSlider
 *   beforeImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
 *   afterImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
 *   beforeAlt="Before"
 *   afterAlt="After"
 * />
 *
 * Option 3: Data URLs (for testing)
 * ─────────────────────────────────────────────────────────────
 * <BeforeAfterSlider
 *   beforeImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%23333' width='1200' height='675'/%3E%3C/svg%3E"
 *   afterImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%23666' width='1200' height='675'/%3E%3C/svg%3E"
 *   beforeAlt="Before"
 *   afterAlt="After"
 * />
 *
 * Image Requirements
 * ─────────────────────────────────────────────────────────────
 * - Both images should be the SAME dimensions (width × height)
 * - Recommended: 1200×675px for 16:9, 1200×900px for 4:3, 400×400px for 1:1
 * - Format: PNG, JPG, WebP (any format supported by <img>)
 * - Optimize for web (compress before uploading)
 *
 * Aspect Ratios
 * ─────────────────────────────────────────────────────────────
 * - "16 / 9" (default) - Widescreen, best for full-page screenshots
 * - "4 / 3"            - Standard, good for dashboard/app UI
 * - "1 / 1"            - Square, perfect for mobile screenshots
 * - "auto"             - Matches the image's natural aspect ratio
 */
