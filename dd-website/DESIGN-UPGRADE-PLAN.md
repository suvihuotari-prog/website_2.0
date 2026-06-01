# UX/UI Design Upgrade Plan

## Context

The Data Design website is structurally complete (10 routes, shared components, Next.js App Router) but visually generic. Auditing against `docs/skill.md` reveals several gaps: single safe font, flat solid backgrounds, basic fade-up animations, predictable symmetric layouts, and minimal hover interactions. The site looks "clean" but not *memorable*.

The brand's Finnish consulting identity (measured, analytical, anti-hype) doesn't mean boring — it means **refined editorial with bold punctuation**. Think: Nordic design magazine, not SaaS template.

## Implementation Steps

### [x] 1. Typography: Display + Body Pairing
Add Host Grotesk Bold as display font for H1/H2 headings. Keep DM Sans for body.
- `src/app/layout.js` — Host_Grotesk via next/font/google, weight 700, --font-display variable
- `src/app/globals.css` — h1, h2, .dd-hero-h1 use var(--font-display) with font-weight: 700
- All page hero H1s and section H2s use Host Grotesk Bold. Card H3s stay DM Sans.

### [x] 2. Background Depth: Grain Texture + Richer Gradients
Add subtle SVG noise texture overlay to colored sections. Richer hero gradients.
- `src/app/globals.css` — .dd-grain noise texture overlay utility class
- Hero gradients: diagonal 175deg, sharper lemon→white contrast
- Lemon sections (client proof, "how we deliver", solution proven results): dd-grain class applied
- CTA blob: organic borderRadius with dd-grain overlay

### [x] 3. Color Boldness: Dominant-Accent Hierarchy
Use lemon more surgically. Let white dominate, lemon punches when it appears.
- Card accent borders: bold 4px left stripe (seawave on hover) replaces thin top border
- Tags/badges: transparent bg with seawave border instead of gray fill
- Proof callouts: 4px seawave left border
- Hero gradients: stronger contrast (lemon → white at 65%, fewer middle tones)
- Tool status badges: transparent with border instead of colored fill

### [x] 4. Motion: Orchestrated Reveals + Rich Hover States
Upgrade Reveal component. Creative hover interactions on cards and buttons.
- `src/components/Reveal.js` — direction variants (up, left, right, scale), 0.7s duration
- `src/app/globals.css` — nav link underline slide-in, button wipe fill from left
- `src/components/Navbar.js` — dd-nav-link class on nav links
- `src/components/Footer.js` — dd-nav-link on footer links, seawave color transition on socials
- All card components — richer hover: stronger lift (-4px), bigger shadow, arrow rotation, icon scale
- Pages — choreographed stagger delays (badge→h1→subtitle→buttons)

### [x] 5. Spatial Composition: Break the Grid
Introduce asymmetry and visual interest in key moments.
- Hero: left-aligned text instead of centered, diagonal gradient
- Stats: first stat featured larger (fontSize 44 vs 32)
- Why cards: masonry offset (odd cards shifted down 24px)
- Testimonials: featured first quote spans full width with larger text
- CTA blob: organic SVG shape (60% 40% / 50% 50%)

### [x] 6. Detail Polish
Small touches that signal design intentionality.
- Custom text selection color (lemon bg, black text)
- Styled scrollbar (thin 8px, seawave thumb, gray track)
- Nav link hover underlines (slide in from left)
- Footer link hover: color transition to seawave
- Button wipe fill animation on outline buttons
