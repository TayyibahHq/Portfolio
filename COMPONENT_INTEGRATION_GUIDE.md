# Component Integration Guide

This guide shows how to integrate the **ProjectGrid** and **BeforeAfterSlider** components into your portfolio.

---

## Quick Reference

| Component | File | Purpose | Import |
|-----------|------|---------|--------|
| **ProjectGrid** | `client/src/components/ProjectGrid.tsx` | Interactive project showcase with filtering | `import { ProjectGrid, type Project } from "@/components/ProjectGrid"` |
| **BeforeAfterSlider** | `client/src/components/BeforeAfterSlider.tsx` | Before/after image comparison | `import { BeforeAfterSlider } from "@/components/BeforeAfterSlider"` |

---

## Integration: ProjectGrid

### Step 1: Add Projects to Constants

Edit `client/src/constants/portfolio.ts`:

```typescript
import type { Project } from "@/components/ProjectGrid";

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory sync.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "fullstack",
    liveUrl: "https://myshop.com",
    githubUrl: "https://github.com/me/myshop",
    caseStudy: {
      challenge: "Needed to handle 10k+ concurrent users during flash sales.",
      solution: "Implemented Redis caching and database query optimization.",
    },
  },
  // ... more projects
];
```

### Step 2: Use in a Section Component

Create or update `client/src/components/sections/ProjectsSection.tsx`:

```tsx
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PROJECTS } from "@/constants/portfolio";

export function ProjectsSection(): React.ReactElement {
  return (
    <SectionWrapper id="projects" index={2} title="Projects">
      <ProjectGrid projects={PROJECTS} />
    </SectionWrapper>
  );
}
```

### Step 3: Add to Home Page

Update `client/src/pages/Home.tsx`:

```tsx
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <div>
      {/* ... other sections ... */}
      <ProjectsSection />
      {/* ... more sections ... */}
    </div>
  );
}
```

---

## Integration: BeforeAfterSlider

### Step 1: Create a Showcase Section

Create `client/src/components/sections/ShowcaseSection.tsx`:

```tsx
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SectionWrapper } from "@/components/SectionWrapper";

export function ShowcaseSection(): React.ReactElement {
  return (
    <SectionWrapper id="showcase" index={3} title="Website Redesign">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Redesign 1 */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold text-foreground">
            Homepage Overhaul
          </h3>
          <BeforeAfterSlider
            beforeImage="/manus-storage/homepage-before.png"
            afterImage="/manus-storage/homepage-after.png"
            beforeAlt="Old homepage design"
            afterAlt="New homepage design"
            beforeLabel="Before"
            afterLabel="After"
            aspectRatio="16 / 9"
          />
          <p className="text-sm text-foreground/50">
            Improved conversion rate by 35% through better CTA placement and visual hierarchy.
          </p>
        </div>

        {/* Redesign 2 */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold text-foreground">
            Dashboard Redesign
          </h3>
          <BeforeAfterSlider
            beforeImage="/manus-storage/dashboard-before.png"
            afterImage="/manus-storage/dashboard-after.png"
            beforeAlt="Old dashboard"
            afterAlt="New dashboard"
            beforeLabel="Legacy"
            afterLabel="Modern"
            aspectRatio="16 / 9"
          />
          <p className="text-sm text-foreground/50">
            Reduced cognitive load with improved data visualization and layout.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
```

### Step 2: Add to Home Page

Update `client/src/pages/Home.tsx`:

```tsx
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";

export default function Home() {
  return (
    <div>
      {/* ... other sections ... */}
      <ShowcaseSection />
      {/* ... more sections ... */}
    </div>
  );
}
```

### Step 3: Upload Your Images

```bash
# Upload before/after screenshots
manus-upload-file --webdev homepage-before.png homepage-after.png dashboard-before.png dashboard-after.png

# Output:
# /manus-storage/homepage-before_a1b2c3d4.png
# /manus-storage/homepage-after_e5f6g7h8.png
# /manus-storage/dashboard-before_i9j0k1l2.png
# /manus-storage/dashboard-after_m3n4o5p6.png
```

Then update the URLs in `ShowcaseSection.tsx`.

---

## Combined Example: Full Portfolio Page

Here's how to use both components together in a complete portfolio page:

```tsx
// client/src/pages/Home.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ShowcaseSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
```

---

## Data Flow Diagram

```
constants/portfolio.ts
  ├── PROJECTS (Project[])
  │   └── ProjectsSection
  │       └── ProjectGrid (filters, displays, modals)
  │
  └── CONTACT_EMAIL, SOCIAL_LINKS
      └── ContactSection

components/sections/ShowcaseSection.tsx
  └── BeforeAfterSlider (before/after images)
      └── Home page
```

---

## Customization Checklist

### ProjectGrid

- [ ] Update `PROJECTS` array in `constants/portfolio.ts` with your projects
- [ ] Add `caseStudy` objects for projects you want to highlight
- [ ] Adjust grid columns: `sm:grid-cols-2 lg:grid-cols-3` in `ProjectsSection.tsx`
- [ ] Change filter categories if needed (edit `FilterBar` in `ProjectGrid.tsx`)
- [ ] Customize tech badge colors (edit `colors` array in `TechBadge`)

### BeforeAfterSlider

- [ ] Upload your before/after images: `manus-upload-file --webdev before.png after.png`
- [ ] Update image URLs in `ShowcaseSection.tsx`
- [ ] Adjust aspect ratios: `"16 / 9"` (default), `"4 / 3"`, `"1 / 1"`, or `"auto"`
- [ ] Customize labels: `beforeLabel="Before"` → `beforeLabel="v1.0"`
- [ ] Add position tracking with `onPositionChange` callback if needed

---

## Navigation Integration

Both components are automatically included in the sticky navigation. The nav links are defined in `constants/portfolio.ts`:

```typescript
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },  // ← ProjectGrid section
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
```

If you add a new section (e.g., Showcase), update the nav:

```typescript
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Showcase", href: "#showcase" },  // ← New section
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
```

---

## Styling & Theming

Both components inherit the Dark Craft / Obsidian Studio theme from `index.css`:

- **Primary color**: Amber (`oklch(0.78 0.16 75)`)
- **Background**: Near-black (`oklch(0.141 0.005 285.823)`)
- **Text**: Warm off-white (`oklch(0.85 0.005 65)`)
- **Fonts**: Playfair Display (serif), JetBrains Mono (monospace)

To customize globally, edit `client/src/index.css`:

```css
:root {
  --primary: oklch(0.78 0.16 75);  /* Amber */
  --background: oklch(0.141 0.005 285.823);  /* Near-black */
  --foreground: oklch(0.85 0.005 65);  /* Warm off-white */
}
```

---

## Performance Tips

### ProjectGrid

- Limit projects to 10-15 for optimal performance
- Use `useMemo` in parent if you're computing projects dynamically
- Lazy-load project images if list is very long

### BeforeAfterSlider

- Compress images before uploading (target: < 500KB each)
- Use WebP format for better compression
- Avoid very large dimensions (1200×675px is ideal)
- Preload images in parent component if needed:

```tsx
useEffect(() => {
  const img1 = new Image();
  const img2 = new Image();
  img1.src = beforeImage;
  img2.src = afterImage;
}, [beforeImage, afterImage]);
```

---

## Troubleshooting

### ProjectGrid Not Filtering

- Ensure `category` values in projects match: `"fullstack" | "frontend" | "other"`
- Check browser console for TypeScript errors

### BeforeAfterSlider Not Responding

- Verify image URLs are correct and loading (check Network tab)
- Ensure both images have identical dimensions
- Test on mobile with touch events

### Navigation Links Not Working

- Ensure section IDs match nav links: `<section id="projects">` ↔ `href="#projects"`
- Check that `useScrollSpy` hook is active in `NavigationBar.tsx`

### Styling Issues

- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Verify Tailwind CSS is building correctly: `npm run build`
- Check that `index.css` is imported in `main.tsx`

---

## Next Steps

1. **Personalize content**: Update `constants/portfolio.ts` with your own data
2. **Add images**: Upload before/after screenshots for BeforeAfterSlider
3. **Test responsiveness**: Check on mobile, tablet, and desktop
4. **Optimize performance**: Compress images, lazy-load if needed
5. **Deploy**: Use the Publish button in the Management UI

---

## Additional Resources

- **ProjectGrid Documentation**: See `ProjectGrid.md`
- **BeforeAfterSlider Documentation**: See `BeforeAfterSlider.md`
- **Portfolio README**: See `README.md`
- **Design System**: See `client/src/index.css` for color tokens and typography

---

## Support

For issues or questions:

1. Check the component documentation files
2. Review the demo files (`ProjectGrid.demo.tsx`, `BeforeAfterSlider.demo.tsx`)
3. Inspect browser console for errors
4. Verify TypeScript compilation: `npm run check`
