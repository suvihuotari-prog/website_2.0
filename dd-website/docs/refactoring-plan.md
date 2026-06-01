# Code Quality Refactoring Plan

## 1. Token Adoption (~180+ hardcoded values)

- [x] 1a. Replace `maxWidth: 1200` → `CONTAINER_MAX_WIDTH` across all pages
- [x] 1b. Replace `padding: "88px 40px"` / `"80px 40px"` → `SECTION_PADDING` across all pages
- [x] 1c. Replace `borderRadius: 20` → `CARD_BORDER_RADIUS` across all pages/components
- [x] 1d. Replace `borderRadius: 100` → `PILL_BORDER_RADIUS` across all pages/components

## 2. CSS Cleanup

- [x] 2a. Remove unused classes: `dd-modes-grid`, `dd-roles-grid`, `dd-linkedin-btn`
- [x] 2b. Add missing classes: `dd-nav-dropdown-link`, `dd-job-card`
- [x] 2c. Deduplicate grain SVG between `.dd-grain` and `.dd-grain-subtle`

## 3. Component Fixes

- [x] 3a. Remove unused CaseCard props (`description`, `testimonial`, `metric`)
- [x] 3b. Extract `getInitials()` utility to `src/lib/utils.js`, use in TestimonialSpotlight, TestimonialCard, InsightCard
- [x] 3c. Move `categoryColors` outside InsightCard component
- [x] 3d. Add CSS class `dd-hover-lift` for card hover (replace inline onMouseEnter/onMouseLeave)
- [x] 3e. Add proper alt texts to FeaturedSolutionCard, CTASection, HeroSection images
- [x] 3f. Remove unused `SPRING_TRANSITION` token

## 4. Solution Subpage Template

- [x] 4a. Create `SolutionSubpageTemplate` component extracting shared structure
- [x] 4b. Refactor all 6 solution pages to use the template

## 5. Build Verification

- [x] 5a. Run `npm run build` — zero errors, all pages generate
