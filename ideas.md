# Portfolio Design Brainstorm

## Three Stylistic Approaches

### 1. Editorial Brutalism
A raw, typographically-driven layout inspired by editorial print design. High-contrast black/white with a single electric accent. Oversized type, tight grids, and deliberate asymmetry.
**Probability:** 0.07

### 2. Quiet Luxury / Swiss Minimalism
Restrained, spacious, and precise. Monochromatic with warm off-white tones, a single deep ink color, and razor-sharp micro-typography. Feels like a high-end design studio portfolio.
**Probability:** 0.04

### 3. Dark Craft / Obsidian Studio
A dark-first, deeply textured interface with a near-black background, warm amber/gold accents, and a mix of serif display type and clean monospace. Feels like a premium creative agency — confident, atmospheric, and technical.
**Probability:** 0.09

---

## Chosen Approach: Dark Craft / Obsidian Studio

### Design Movement
Dark editorial meets artisan craft — inspired by high-end creative agency sites (Locomotive, Resn, Active Theory) with a warm, human touch.

### Core Principles
1. **Depth over flatness** — layered backgrounds, subtle grain, glows, and shadows create a sense of physical space.
2. **Typographic contrast** — a bold serif display font paired with clean monospace for code/labels, and a neutral sans for body.
3. **Restraint with purpose** — every element earns its place; negative space is a design tool.
4. **Amber as the soul** — a single warm amber/gold accent color unifies all interactive and highlight states.

### Color Philosophy
- Background: near-black `oklch(0.10 0.008 270)` — not pure black, slightly warm
- Surface: `oklch(0.15 0.008 270)` — card/panel backgrounds
- Foreground: `oklch(0.92 0.005 80)` — warm off-white, never pure white
- Accent: `oklch(0.78 0.16 75)` — warm amber/gold, the signature brand color
- Muted: `oklch(0.45 0.01 270)` — subdued labels and secondary text

### Layout Paradigm
Asymmetric, full-bleed sections with a left-anchored content column. Navigation is a slim top bar. Sections use staggered reveals. No centered hero — content is left-aligned with generous right breathing room.

### Signature Elements
1. **Amber underline accent** — a thin amber line under active nav items and section headings
2. **Monospace labels** — small ALL-CAPS monospace labels prefix each section ("01 / ABOUT", "02 / PROJECTS")
3. **Grain texture overlay** — a subtle SVG noise filter applied globally at low opacity

### Interaction Philosophy
Interactions feel deliberate and physical. Links have a slow amber fill on hover. The hamburger menu slides in with a dark overlay. Theme toggle has a satisfying flip animation.

### Animation
- Section entrances: fade-up with 40px translate, 500ms ease-out, staggered 80ms per child
- Nav links: amber underline expands left-to-right on hover, 200ms ease-out
- Hamburger: morphs to X with a 200ms rotation
- Theme toggle: icon swaps with a 150ms scale bounce
- Scroll-linked: nav background transitions from transparent to `bg-surface/90 backdrop-blur` on scroll

### Typography System
- **Display**: `Playfair Display` (serif) — headings, hero name, section titles
- **Body**: `Inter` (sans) — paragraphs, descriptions
- **Label/Code**: `JetBrains Mono` (monospace) — section numbers, tags, code snippets
- Scale: 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 / 96px

### Brand Essence
A senior engineer's portfolio that feels like a creative studio — for clients and employers who value both craft and depth.
**Personality**: Confident · Atmospheric · Precise

### Brand Voice
Headlines are declarative and specific. CTAs are direct, never generic.
- "I build interfaces that outlast trends."
- "Let's make something worth shipping."
- Ban: "Welcome to my portfolio", "Get started today"

### Wordmark & Logo
A geometric monogram mark — a bold `< />` bracket motif in amber on a dark circle, representing code-as-craft.

### Signature Brand Color
`oklch(0.78 0.16 75)` — Warm Amber Gold

---

## Style Decisions
- Nav transitions from transparent to `bg-surface/90 backdrop-blur-xl` after 60px scroll
- Section numbers use JetBrains Mono in amber at 11px ALL-CAPS
- All body text is `oklch(0.78 0.01 80)` (warm off-white, not pure white) for reduced eye strain
- Project cards use a subtle border + inner glow on hover, no hard drop shadows
- Mobile menu is a full-screen dark overlay with staggered link entrances
- Every major viewport includes one visible code-as-craft signature artifact: bracket geometry, monogram construction, amber rulework, or technical diagramming
- Project presentations include a visual interface fragment artifact for each featured project
- Brand placeholders are banned: contact, social, and identity details must feel real and specific
- Bracket motif `{ }` recurs as a system-wide signature in section headers, card corners, and footer
