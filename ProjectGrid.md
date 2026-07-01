# ProjectGrid Component Documentation

## Overview

`ProjectGrid.tsx` is a production-grade, fully typed React component for displaying an interactive portfolio of projects. It features category filtering, beautiful tech badges, and an expandable case study modal.

**Location:** `client/src/components/ProjectGrid.tsx`

---

## Features

| Feature | Description |
|---------|-------------|
| **TypeScript-strict types** | `Project` interface with `category` union type (`"fullstack" \| "frontend" \| "other"`) |
| **Interactive filtering** | Button bar filters by category with smooth state transitions and Framer Motion animations |
| **Tech badge map** | Each project displays a colorful, animated badge for every technology in the stack |
| **Case study modal** | Click a project card to open a modal with Challenge vs. Solution deep dive |
| **Responsive grid** | 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop) |
| **Dark Craft design** | Amber accents, bracket motifs, monospace labels, grain texture, glass-morphism |
| **Accessibility** | ARIA labels, focus management, keyboard support (Escape to close modal) |

---

## Type Definitions

### `Project` Interface

```typescript
export type ProjectCategory = "fullstack" | "frontend" | "other";

export interface Project {
  id: string;                    // Unique identifier
  title: string;                 // Project name
  description: string;           // Short description (1-2 sentences)
  techStack: string[];           // Array of technology names
  liveUrl?: string;              // Optional link to live demo
  githubUrl?: string;            // Optional link to GitHub repo
  image?: string;                // Optional cover image URL (not yet used)
  category: ProjectCategory;     // One of: "fullstack", "frontend", "other"
  caseStudy?: {                  // Optional deep dive
    challenge: string;           // The problem faced
    solution: string;            // How it was solved
  };
}
```

### `ProjectGridProps` Interface

```typescript
interface ProjectGridProps {
  projects: Project[];           // Array of projects to display
  title?: string;                // Optional section title (default: "Featured Projects")
}
```

---

## Usage

### Basic Example

```tsx
import { ProjectGrid, type Project } from "@/components/ProjectGrid";

const MY_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "My Awesome App",
    description: "A real-time collaboration tool built with React and WebSockets.",
    techStack: ["React", "TypeScript", "WebSockets", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://myapp.com",
    githubUrl: "https://github.com/me/myapp",
    caseStudy: {
      challenge: "Needed to sync state across 50+ concurrent users without conflicts.",
      solution: "Implemented operational-transform conflict resolution on the server.",
    },
  },
  // ... more projects
];

export function MyPortfolio() {
  return <ProjectGrid projects={MY_PROJECTS} title="My Work" />;
}
```

### Integration into Existing Portfolio

If you're using the portfolio scaffold from earlier, you can integrate `ProjectGrid` into `ProjectsSection.tsx`:

```tsx
// client/src/components/sections/ProjectsSection.tsx
import { ProjectGrid } from "@/components/ProjectGrid";
import { PROJECTS } from "@/constants/portfolio";

export function ProjectsSection(): React.ReactElement {
  return (
    <SectionWrapper id="projects" index={2} title="Projects">
      <ProjectGrid projects={PROJECTS} />
    </SectionWrapper>
  );
}
```

---

## Component Breakdown

### 1. **FilterBar**

Renders the category filter buttons (All, Full-Stack, Front-End, Other).

- **Features:**
  - Smooth button animations (`whileHover`, `whileTap`)
  - Active filter highlighted with amber accent
  - `layoutId` for smooth animated underline transition

```tsx
<FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
```

### 2. **TechBadge**

Displays a single technology badge with color cycling.

- **Features:**
  - 5 color schemes that cycle through the tech stack
  - Staggered entrance animation (each badge delays by `index * 0.05`)
  - Hover scale effect

```tsx
<TechBadge tech="React" index={0} />
```

### 3. **ProjectCard**

Renders a single project card with all metadata and action buttons.

- **Features:**
  - Bracket corner accents that brighten on hover
  - Category badge and index number
  - Title, description, tech badges
  - Action buttons: Case Study, Demo, Source Code
  - Hover shadow and border glow effect

```tsx
<ProjectCard project={project} index={0} onCaseStudyClick={setSelectedProject} />
```

### 4. **CaseStudyModal**

Full-screen modal displaying Challenge vs. Solution.

- **Features:**
  - Backdrop blur and semi-transparent overlay
  - Spring-based scale-in animation
  - Close button and Escape key support
  - Tech stack display
  - Links to live demo and source code

```tsx
<CaseStudyModal
  project={selectedProject}
  isOpen={selectedProject !== null}
  onClose={() => setSelectedProject(null)}
/>
```

---

## Styling & Design

### Color System

| Element | Color | Usage |
|---------|-------|-------|
| **Active filter** | `amber-400` | Highlighted category button |
| **Hover accent** | `amber-400` | Card borders, links on hover |
| **Tech badges** | Cycling (blue, purple, cyan, pink, green) | Visual variety in tech stack |
| **Borders** | `white/10` | Subtle card and modal borders |
| **Background** | `white/[0.02-0.04]` | Card and modal backgrounds |

### Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| **Filter button** | `whileHover: scale(1.02)`, `whileTap: scale(0.98)` | 200ms |
| **Card entrance** | Fade + slide up | 400ms (staggered by 80ms) |
| **Tech badge** | Scale + fade | 300ms (staggered by 50ms per badge) |
| **Modal** | Spring scale-in | 300ms (stiffness: 300, damping: 30) |
| **Link arrow** | Translate + opacity | 150ms on hover |

### Responsive Breakpoints

```
Mobile:  1 column
Tablet:  2 columns (sm: grid-cols-2)
Desktop: 3 columns (lg: grid-cols-3)
```

---

## Customization

### Adding a New Project

```tsx
const newProject: Project = {
  id: "proj-new",
  title: "My New Project",
  description: "What it does in one sentence.",
  techStack: ["React", "TypeScript", "Tailwind"],
  category: "frontend",
  liveUrl: "https://...",
  githubUrl: "https://...",
  caseStudy: {
    challenge: "The problem I faced...",
    solution: "How I solved it...",
  },
};
```

### Changing the Filter Categories

Edit the `filters` array in `FilterBar`:

```tsx
const filters: Array<{ label: string; value: FilterCategory }> = [
  { label: "All", value: "all" },
  { label: "My Custom Category", value: "frontend" }, // Change label
  // Add more...
];
```

### Customizing Tech Badge Colors

Edit the `colors` array in `TechBadge`:

```tsx
const colors = [
  "bg-blue-400/10 border-blue-400/30 text-blue-300",
  "bg-purple-400/10 border-purple-400/30 text-purple-300",
  // Add more color combinations...
];
```

### Adjusting Card Grid Columns

Edit the grid class in `ProjectGrid`:

```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {/* Change lg:grid-cols-3 to lg:grid-cols-4 for 4 columns on large screens */}
</div>
```

---

## Accessibility

The component includes several accessibility features:

- **ARIA labels** on all interactive elements (buttons, links)
- **Semantic HTML** (`<article>`, `<button>`, `<a>`)
- **Focus management** in the modal (focus trap via Radix UI patterns)
- **Keyboard support** (Escape to close modal)
- **Color contrast** meets WCAG AA standards
- **Skip links** for keyboard navigation

---

## Performance Considerations

1. **Memoization:** `useMemo` filters projects only when `projects` or `activeFilter` changes
2. **AnimatePresence:** Framer Motion's `mode="wait"` prevents layout thrashing during filter transitions
3. **Lazy rendering:** Tech badges use staggered animations, not all rendered at once
4. **No external images:** Component doesn't load images by default (image field is optional)

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires React 18+ (for Framer Motion v12+)
- CSS Grid and Flexbox support required
- No IE11 support

---

## Demo

A complete demo with 6 sample projects is available in `ProjectGrid.demo.tsx`:

```tsx
import { ProjectGridDemo } from "@/components/ProjectGrid.demo";

export function MyPage() {
  return <ProjectGridDemo />;
}
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Cards not filtering** | Ensure `category` values match the union type: `"fullstack" \| "frontend" \| "other"` |
| **Modal won't close** | Check that `onClose` callback is properly wired to `setSelectedProject(null)` |
| **Tech badges not showing** | Verify `techStack` is an array of strings, not empty |
| **Animations feel sluggish** | Check browser performance; reduce animation duration if needed |
| **TypeScript errors** | Ensure all `Project` fields are populated (optional fields marked with `?`) |

---

## Future Enhancements

- Add project image display with lazy loading
- Implement search by project title or technology
- Add project statistics (stars, forks, downloads)
- Export projects to JSON for easy management
- Add animation preferences (respects `prefers-reduced-motion`)
- Implement infinite scroll or pagination for large project lists
