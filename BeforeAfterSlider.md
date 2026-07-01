# BeforeAfterSlider Component Documentation

## Overview

`BeforeAfterSlider.tsx` is a production-grade, fully accessible React component for interactive before/after image comparisons. Perfect for showcasing website redesigns, UI overhauls, and visual transformations.

**Location:** `client/src/components/BeforeAfterSlider.tsx`

---

## Features

| Feature | Description |
|---------|-------------|
| **Pointer events** | Full support for mouse, touch, and pen input via `onPointerMove` |
| **Keyboard navigation** | Arrow keys (← →) adjust slider position by 5% increments |
| **Click anywhere** | Click on the image to jump the slider to that position |
| **Responsive** | Works on mobile, tablet, and desktop with touch optimization |
| **Accessibility** | WCAG 2.1 AA compliant with ARIA labels, roles, and keyboard support |
| **Smooth animations** | CSS transitions for handle scale and opacity changes |
| **Labels** | Optional before/after labels with backdrop blur |
| **Aspect ratios** | 16:9 (default), 4:3, 1:1, or auto |
| **Callbacks** | Optional `onPositionChange` to track slider position |
| **TypeScript** | Fully typed props and internal state |

---

## Type Definitions

### `BeforeAfterSliderProps` Interface

```typescript
export interface BeforeAfterSliderProps {
  /** URL or path to the "before" image (required) */
  beforeImage: string;

  /** URL or path to the "after" image (required) */
  afterImage: string;

  /** Alt text for the before image (required) */
  beforeAlt: string;

  /** Alt text for the after image (required) */
  afterAlt: string;

  /** Optional: Label shown above the before image (e.g., "Before", "v1.0") */
  beforeLabel?: string;

  /** Optional: Label shown above the after image (e.g., "After", "v2.0") */
  afterLabel?: string;

  /** Optional: Container aspect ratio (default: "16 / 9") */
  aspectRatio?: "16 / 9" | "4 / 3" | "1 / 1" | "auto";

  /** Optional: Initial slider position 0-100 (default: 50) */
  initialPosition?: number;

  /** Optional: Callback when slider position changes (0-100) */
  onPositionChange?: (position: number) => void;

  /** Optional: Custom container className */
  containerClassName?: string;
}
```

---

## Usage

### Basic Example

```tsx
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export function MyShowcase() {
  return (
    <BeforeAfterSlider
      beforeImage="/images/old-design.png"
      afterImage="/images/new-design.png"
      beforeAlt="Old website design"
      afterAlt="New website design"
      beforeLabel="Before"
      afterLabel="After"
    />
  );
}
```

### With Position Tracking

```tsx
import { useState } from "react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export function TrackingExample() {
  const [position, setPosition] = useState(50);

  return (
    <div>
      <p>Slider position: {Math.round(position)}%</p>
      <BeforeAfterSlider
        beforeImage="/images/before.png"
        afterImage="/images/after.png"
        beforeAlt="Before"
        afterAlt="After"
        onPositionChange={setPosition}
      />
    </div>
  );
}
```

### Custom Aspect Ratio

```tsx
<BeforeAfterSlider
  beforeImage="/images/mobile-before.png"
  afterImage="/images/mobile-after.png"
  beforeAlt="Old mobile app"
  afterAlt="New mobile app"
  beforeLabel="v1.0"
  afterLabel="v2.0"
  aspectRatio="1 / 1"  // Square for mobile screenshots
/>
```

### With Custom Styling

```tsx
<BeforeAfterSlider
  beforeImage="/images/before.png"
  afterImage="/images/after.png"
  beforeAlt="Before"
  afterAlt="After"
  containerClassName="rounded-lg shadow-2xl"
/>
```

---

## Image Setup Guide

### Option 1: Using manus-upload-file (Recommended)

If you're using the portfolio with `webdev_add_feature` for S3 storage:

```bash
# Upload your images
manus-upload-file --webdev before-screenshot.png after-screenshot.png

# Output:
# /manus-storage/before-screenshot_a1b2c3d4.png
# /manus-storage/after-screenshot_e5f6g7h8.png
```

Then use the returned URLs:

```tsx
<BeforeAfterSlider
  beforeImage="/manus-storage/before-screenshot_a1b2c3d4.png"
  afterImage="/manus-storage/after-screenshot_e5f6g7h8.png"
  beforeAlt="Old design"
  afterAlt="New design"
  beforeLabel="Before"
  afterLabel="After"
/>
```

### Option 2: External URLs (Unsplash, Imgur, etc.)

```tsx
<BeforeAfterSlider
  beforeImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=675"
  afterImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675"
  beforeAlt="Before"
  afterAlt="After"
/>
```

### Option 3: Local Public Files

Place images in `client/public/` and reference them:

```tsx
<BeforeAfterSlider
  beforeImage="/images/before.png"
  afterImage="/images/after.png"
  beforeAlt="Before"
  afterAlt="After"
/>
```

### Image Requirements

| Requirement | Details |
|-------------|---------|
| **Dimensions** | Both images must be the SAME width and height |
| **Recommended sizes** | 1200×675px (16:9), 1200×900px (4:3), 400×400px (1:1) |
| **Formats** | PNG, JPG, WebP, GIF, SVG (any format supported by `<img>`) |
| **Optimization** | Compress before uploading (use TinyPNG, ImageOptim, etc.) |
| **Accessibility** | Provide meaningful `beforeAlt` and `afterAlt` text |

---

## Interaction Modes

### Mouse/Trackpad

- **Drag** the handle left/right to adjust the comparison
- **Click** anywhere on the image to jump the slider to that position
- **Hover** to see the handle scale up and keyboard hint

### Touch (Mobile/Tablet)

- **Swipe** left/right on the image to adjust the comparison
- **Tap** anywhere on the image to jump the slider to that position
- Pointer capture ensures smooth tracking even when finger leaves the image

### Keyboard

- **Arrow Left (←)** moves the slider 5% to the left
- **Arrow Right (→)** moves the slider 5% to the right
- Must focus the slider handle first (Tab key to navigate)

---

## Styling & Design

### Color System

| Element | Color | Usage |
|---------|-------|-------|
| **Handle line** | `amber-400` | Vertical divider with gradient fade |
| **Handle thumb** | `border-amber-400` | Circular button with glow effect |
| **Arrows** | `amber-400` | Chevron icons on handle |
| **Labels** | `white/70` | Before/after text with backdrop blur |
| **Background** | `black` | Container background |

### Animations

| Element | Animation | Trigger |
|---------|-----------|---------|
| **Handle scale** | `scale(1.05)` | Hover or focus |
| **Handle scale** | `scale(1.10)` | While dragging |
| **Handle opacity** | `0.6 → 1.0` | Hover or focus |
| **Arrow translate** | `±2px` | While dragging |
| **Keyboard hint** | Fade in | Hover (not dragging) |

### Responsive Behavior

- **Mobile** (< 640px): Full width, touch-optimized handle (48×48px)
- **Tablet** (640px - 1024px): 90% width with padding, same handle size
- **Desktop** (> 1024px): Full width, handle remains 48×48px for easy targeting

---

## Accessibility

The component includes comprehensive accessibility features:

| Feature | Implementation |
|---------|-----------------|
| **ARIA roles** | `role="region"`, `role="slider"` |
| **ARIA labels** | `aria-label` on container and handle |
| **ARIA values** | `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |
| **Keyboard support** | Arrow keys, Tab focus, Escape (if modal) |
| **Focus management** | Visible focus ring on handle, keyboard hint |
| **Color contrast** | Amber on black meets WCAG AA standards |
| **Alt text** | Required `beforeAlt` and `afterAlt` props |
| **Semantic HTML** | Proper use of `<img>`, `<div role="slider">` |

### Screen Reader Experience

```
"Before and after image comparison region, slider, 50 percent"
"Use arrow keys to adjust, or drag to compare"
```

---

## Performance Considerations

1. **Image optimization**: Compress images before uploading
2. **Lazy loading**: Images load on-demand (no preload attribute)
3. **Pointer capture**: Efficient tracking without event bubbling
4. **CSS clip-path**: GPU-accelerated, smooth 60 fps animation
5. **No layout thrashing**: Position updates don't trigger reflows
6. **Memoization**: Callbacks wrapped in `useCallback` to prevent re-renders

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support (iOS 13+) |
| Opera | ✅ Full support |
| IE 11 | ❌ Not supported (uses CSS clip-path) |

---

## Customization

### Change Handle Color

Edit the `BeforeAfterSlider.tsx` file, find the handle div:

```tsx
// Change from amber-400 to your color
className={cn(
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "flex h-12 w-12 items-center justify-center rounded-full",
  "border-2 border-blue-400 bg-black/60 backdrop-blur-md",  // ← Change here
  // ...
)}
```

### Adjust Handle Size

```tsx
// Change from h-12 w-12 (48×48px) to your size
"flex h-16 w-16 items-center justify-center rounded-full"  // 64×64px
```

### Modify Label Position

```tsx
// Change from top-4 left-4 to top-6 right-6
<div className="absolute top-6 right-6 z-10 pointer-events-none">
```

### Disable Keyboard Hint

Remove or comment out the keyboard hint div:

```tsx
{/* Keyboard hint (visible on focus) */}
{/* <div className={...}>Use ← → or drag to compare</div> */}
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Slider not responding to touch** | Ensure `onPointerMove` is properly wired; check browser console for errors |
| **Images misaligned** | Verify both images have identical dimensions (width × height) |
| **Handle invisible** | Check that `beforeImage` and `afterImage` URLs are valid and loading |
| **Keyboard not working** | Click the handle to focus it, then use arrow keys |
| **Labels overlapping** | Adjust `beforeLabel` and `afterLabel` text length or use custom `containerClassName` |
| **Performance issues** | Compress images; check Network tab for large file sizes |
| **Mobile handle too small** | The 48×48px handle is intentionally large for touch; adjust `h-12 w-12` if needed |

---

## Examples

### Portfolio Showcase

```tsx
import { SectionWrapper } from "@/components/SectionWrapper";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export function PortfolioShowcase() {
  return (
    <SectionWrapper id="showcase" index={3} title="Website Redesign">
      <BeforeAfterSlider
        beforeImage="/manus-storage/old-site.png"
        afterImage="/manus-storage/new-site.png"
        beforeAlt="Old website design"
        afterAlt="New website design"
        beforeLabel="Before"
        afterLabel="After"
        aspectRatio="16 / 9"
      />
      <p className="mt-6 text-foreground/60">
        This redesign improved the conversion rate by 35% and reduced bounce rate by 22%.
      </p>
    </SectionWrapper>
  );
}
```

### Multiple Comparisons

```tsx
export function MultipleShowcases() {
  const showcases = [
    { before: "/before1.png", after: "/after1.png", label: "Homepage" },
    { before: "/before2.png", after: "/after2.png", label: "Dashboard" },
    { before: "/before3.png", after: "/after3.png", label: "Mobile App" },
  ];

  return (
    <div className="space-y-12">
      {showcases.map((showcase) => (
        <div key={showcase.label}>
          <h3 className="mb-4 font-serif text-xl font-bold">{showcase.label}</h3>
          <BeforeAfterSlider
            beforeImage={showcase.before}
            afterImage={showcase.after}
            beforeAlt={`${showcase.label} before`}
            afterAlt={`${showcase.label} after`}
          />
        </div>
      ))}
    </div>
  );
}
```

---

## Demo

A complete demo with multiple aspect ratios is available in `BeforeAfterSlider.demo.tsx`:

```tsx
import { BeforeAfterSliderDemo } from "@/components/BeforeAfterSlider.demo";

export function MyPage() {
  return <BeforeAfterSliderDemo />;
}
```

---

## API Reference

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `beforeImage` | `string` | ✅ | — | URL to before image |
| `afterImage` | `string` | ✅ | — | URL to after image |
| `beforeAlt` | `string` | ✅ | — | Alt text for before image |
| `afterAlt` | `string` | ✅ | — | Alt text for after image |
| `beforeLabel` | `string` | ❌ | `undefined` | Label above before image |
| `afterLabel` | `string` | ❌ | `undefined` | Label above after image |
| `aspectRatio` | `"16 / 9" \| "4 / 3" \| "1 / 1" \| "auto"` | ❌ | `"16 / 9"` | Container aspect ratio |
| `initialPosition` | `number` | ❌ | `50` | Initial slider position (0-100) |
| `onPositionChange` | `(position: number) => void` | ❌ | `undefined` | Position change callback |
| `containerClassName` | `string` | ❌ | `undefined` | Custom container class |

### Callbacks

```typescript
// Position change callback
onPositionChange?: (position: number) => void;
// position: 0 (fully before) to 100 (fully after)
```

---

## Future Enhancements

- Add vertical slider option (top/bottom comparison)
- Implement pinch-zoom on mobile
- Add animation presets (auto-play, loop)
- Support for video comparison
- Customizable handle shape and size
- Animation duration prop
- Before/after text overlay on images
