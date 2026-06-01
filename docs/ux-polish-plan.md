# UX Polish Plan — skill.md Audit Improvements

## Status: In Progress

## Overview
Improvements identified by auditing the site against `docs/skill.md` design principles. Excludes typography changes. Focuses on color distribution, spatial composition, backgrounds, motion orchestration, hover states, and decorative details.

---

## 1. Animated Stat Counters ✅
**Files:** New `src/components/CountUp.js`, pages with stats strips (home, services, customer-stories)
- Numbers count up from 0 when scrolled into view
- Spring overshoot effect for visual punch
- Duration ~1.5s with easeOut

## 2. Varied Reveal Directions ✅
**Files:** `src/app/page.js`, `src/app/our-services/page.js`, `src/app/customer-stories/page.js`, `src/app/products-tools/page.js`, `src/app/team-and-career/page.js`, solution subpages
- Hero: badge from left, heading up, subtitle up (longer delay), buttons from scale
- Mix `"left"`, `"right"`, `"scale"` across sections instead of all "up"
- Increase stagger variety (not just mechanical 0.06 increments)

## 3. Richer Hover States ✅
**Files:** `src/components/SolutionCard.js`, `src/components/FeaturedSolutionCard.js`, `src/app/page.js`, `src/components/Footer.js`
- Solution/Featured cards: arrow rotates 45° + scales on hover
- Client name pills on home page: background shifts to lemon on hover
- Primary "Book a call" buttons: add scale(1.03) on hover
- Footer links: color transitions to seawave on hover
- "See all solutions →" type links: arrow translates right on hover

## 4. Hero Radial Gradient + Floating Decorative Shapes ✅
**Files:** `src/app/page.js`, `src/app/our-services/page.js`, `src/app/customer-stories/page.js`
- Replace linear hero gradients with radial (warm center, white edges)
- Add 1-2 floating blurred circles (lemon, turquoise, low opacity) behind hero content

## 5. Testimonial Layout Asymmetry ✅
**Files:** `src/app/page.js`
- First testimonial: full-width, large italic text, visually dominant
- Second testimonial: smaller card below — breaks the equal-grid pattern

## 6. Grain on More Surfaces ✅
**Files:** Pages with beige/gray sections
- Apply `dd-grain` to beige and gray sections (at lower opacity via a new `dd-grain-subtle` class)
- Add `dd-grain-subtle` to `globals.css`

## 7. Floating Background Blurs ✅
**Files:** `src/app/page.js`, `src/app/our-services/page.js`
- Absolutely-positioned blurred lemon/turquoise circles behind content
- Low opacity (0.15-0.25), large radius, filter blur
- 1-2 per page in key sections

## 8. Stats Strip Hierarchy ✅
**Files:** `src/app/page.js`, `src/app/our-services/page.js`, `src/app/customer-stories/page.js`
- First stat visually larger (bigger number, more padding)
- Creates hierarchy instead of 4 identical boxes

## 9. Build Verification ✅
- `npm run build` must pass with zero errors
- All 14 routes generate successfully
