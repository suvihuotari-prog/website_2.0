# Data Design Website — Project Guide

## What This Is

Website rebuild for **Data Design Oy** — a Finnish AI advisory & implementation agency. We're restructuring the site from capability-based ("here's what we do") to solution-oriented ("here's what you're struggling with"). The site is now a built-out **Next.js 15 (App Router) / React 19** application living in `dd-website/`, with ~20 routes and ~25 shared components. New pages should follow the established patterns.

See `README.md` for the tech stack, how to run it, and the full route map.

## Source of Truth

The **live implementation** is the Next.js app under `dd-website/src/`:

- `dd-website/src/app/` — App Router pages (one folder per route)
- `dd-website/src/components/` — shared components (Navbar, Footer, Reveal, all card patterns)
- `dd-website/src/lib/tokens.js` — brand colors (`C`), layout constants, `NAV_LINKS`, `CALENDLY_URL`

When building or editing pages, **reuse the existing components and tokens** rather than reinventing them.

The standalone `.jsx` files at the repo root (`services-page.jsx`, `home-page.jsx`, `products-tools.jsx`, `solution-*.jsx`, `team-page.jsx`) are the **original single-file prototypes** the project started from. They are kept for design reference only — they are *not* the live code and may be out of date relative to `dd-website/src/`.

## Brand Identity

### Colors
```
Lemon:     #e6ff99  — Primary accent, hero gradients, badges, highlights
Turquoise: #caebed  — Secondary accent, alternating card tops, status badges
Sea Wave:  #537f7b  — Text accent, tags, checkmarks, links
Beige:     #f9f7ef  — Warm backgrounds, proof callouts
Gray:      #f5f5f5  — Section backgrounds, card backgrounds
White:     #ffffff  — Card surfaces, primary background
Black:     #000000  — Text, buttons, headings
Text Muted:#444444  — Body text, descriptions
Border:    #e0e0e0  — Card borders, dividers
```

### Typography
- **Font:** DM Sans (Google Fonts) — 400, 500, 600, 700 weights
- **Headings:** 400 weight (thin/light feel), uppercase for hero only, -0.02em letter-spacing
- **Section titles:** 48px, weight 400
- **Body:** 14–17px, line-height 1.6–1.7
- **Tags/badges:** 11–12px, uppercase, 0.06em letter-spacing, weight 600

### Design Language
- **Buttons:** Black pill (border-radius: 100), white text, hover opacity 0.85. Secondary: transparent with black border, inverts on hover.
- **Cards:** White background, 1px border (#e0e0e0), border-radius 20px, subtle hover lift (translateY -2 to -4px), shadow on hover
- **Section backgrounds alternate:** white → gray → lemon → white → beige → gray
- **Scroll reveal:** IntersectionObserver-based fade-up (24px translateY), staggered delays per item
- **Responsive breakpoint:** 900px — desktop nav becomes hamburger, grids collapse to 1 column
- **No emojis in body text.** Minimal bold. No bullet-point lists in prose — use styled checkmark rows instead.

### Tone of Voice
- **Finnish consulting sensibility** — measured, analytical, concrete. Not American marketing hype.
- **Anti-hype positioning** — "We solve business problems with AI" not "Revolutionize your enterprise with cutting-edge AI"
- **Honest and direct** — "We'll be honest about whether we can help" / "No 40-page RFP. Just a conversation."
- **Client language, not tech jargon** — Business problems as headlines, not technology categories

## Site Architecture

All routes live under `dd-website/src/app/`. See `README.md` for the full table.

### Pages Built
- **Home** (`/`)
- **Services** (`/services`)
- **Solutions index** (`/solutions`) + **9 solution/program subpages** (see slugs below)
- **Customer Stories** (`/customer-stories`) + case study (`/customer-stories/tokmanni`)
- **Insights** (`/insights`) + article (`/insights/clarifying-data-ownership`)
- **Company**: About (`/company/about`), Careers (`/company/careers`) + a job posting
  (`/company/careers/senior-data-analyst`), Contact (`/company/contact`)

Routes prefixed `dev_` (e.g. `dev_home`, `dev_services`, `dev_solutions`, `dev_customer-stories`) are work-in-progress drafts not linked from navigation.

### Still To Do / Refine
- Polish the `dev_*` drafts and either promote or remove them.
- Replace any remaining placeholder assets; expand customer stories and insights with more entries.

### Solution Subpage Slugs
Linked from the solutions index and services page:
- `/solutions/ai-strategy` — "We know AI matters, but where do we start?"
- `/solutions/pricing-optimization` — "Our pricing is leaving money on the table"
- `/solutions/customer-intelligence` — "We don't really know our customers well enough"
- `/solutions/data-governance` — "Nobody owns our data and it's slowing everything down"
- `/solutions/genai-automation` — "We're drowning in manual work that AI should handle"
- `/solutions/intelligent-operations` — "Our operations are reactive — we find problems after they hit"
- `/solutions/ai-native-transformation` — AI-native transformation
- `/solutions/ai-accelerator` — AI Accelerator program
- `/solutions/data-nanny` — Data Nanny tool

## Offering Structure (Three Tiers)

### 1. Services (project-based consulting) — Services Page
Entry point is always a **business problem**, not a capability. Six solution areas, each backed by real client proof. Two delivery modes: Advisory + Implementation. Light mention of resource sales.

### 2. Tools & Accelerators — Products & Tools Page
**AI Tools** (closer to software): DataDesigner.AI, Text2SQL, Auto Data Catalog, Data Quality Improver, Sales Prospector. Positioned as accelerators inside engagements, not standalone SaaS.

**Accelerator Programs** (reusable frameworks): AI Accelerator (100+ companies), Data & AI Strategy Sprint (30+ delivered), Data Governance Kickstart (5+ deployed). Not fixed packages — proven structures that get refined per client.

### 3. Resources (staff augmentation) — Light on Services, Detail on Team Page
- Interim leadership (CDO, AI lead, data lead)
- Senior consultants embedded in client teams
- Data engineers / ML engineers for project work

On services page this appears as: *"Sometimes the best solution is our senior person sitting inside your organization."* with a link to the Team page.

## Key Client Proof Points

Use these when building subpages or case study content. Numbers are verified from the sales deck and proof points document.

### Strategy & Roadmap
- **Sandvik:** 500+ AI ideas → 60 high-impact use cases, clear roadmap for AI-driven growth
- **Helen:** C-suite approval and funding for AI pilots, AI roadmap and project plan
- **Elisa:** 60+ data product ideas, 15 high-value use cases selected, 4 business areas with data strategy
- **Veikkaus:** AI strategy for revenue growth and efficiency
- **Motonet:** Data strategy for international expansion, board used results in analysis
- **30+ strategies delivered** across industries

### Pricing & Revenue
- **Kirjastopalvelu:** 15–20% profit increase, 10%+ sales volume increase with AI-powered auction pricing
- **Tokmanni:** 88% increase in mobile coupon usage, 2% increase in store visits, 2% sales lift

### Customer Intelligence
- **S-Pankki:** 3–7x increase in inbound call sales conversion, automated loan prioritization significantly increasing sales, customer KPI followed at C-level
- **A-Insinöörit:** GenAI-powered customer memory, automated meeting prep, standardized sales reports
- **Konecranes:** Customer profile design for better sales & marketing
- **Tokmanni:** Personalized recommendation engine

### Data Governance
- **Anora:** Unified governance across 5 countries post-merger, 2 data domains aligned, SAP S/4HANA transformation support
- **Helen:** Data ownership aligned to business processes
- **Wolt:** Vendor on-boarding process, risk management
- **MHYP:** Governance model for 52 forestry associations, competition law compliance
- **Neste:** Potential to mitigate €14M in distribution obligation reporting risks

### GenAI & Automation
- **Solar Foods:** Automated lab report processing (PDF → structured data) + EFSA regulatory monitoring
- **KTI Kiinteistötieto:** Text2SQL for real estate market data, embedded in existing portal
- **Viestimedia:** 38% improvement in customer acquisition, 37% cost reduction, 16% CPC reduction

### Predictive Operations & Supply Chain
- **Metso:** 30% better supplier lead time prediction, 10% improvement in purchase-to-delivery estimates, scaled to 5 global teams
- **NTG:** Lost sales analysis — potential to capture 65% of previously lost revenue, ToC-based inventory replenishment
- **H&M (team background):** Over €200M revenue increase by AI-based supply chain decision support
- **Eniram (team background):** 1–3% fuel cost reduction for large marine vessels (millions annually)

### Cross-cutting
- **100+ companies** in AI accelerators
- **50+ AI projects** delivered
- **Team from** Silo AI, Louhia, Bilot, H&M, Deloitte, Bigdatapump
- **Avg. team experience:** 20+ years

## Key Testimonials

> "Many consultants speak 'digital language' to us. Data Design understood how to communicate with our business people."
— Client executive

> "The project was comprehensive and professionally planned, significantly advancing our AI development. The clarity of the workshops and tools was impressive."
— Kati Kinnunen, Chief Digital Officer, Helen Sähköverkko

> "Our loyalty customers now get offers they care about. This means more visits, more sales, and 88% more coupon use. We turned customer insights into action — and real business results."
— Tuomas Vihavainen, Head of Group Analytics, Tokmanni

> "Data Design helped us take control of our master data. Their clear approach made our data more accurate and easier to manage."
— Matti Nurmi, CIO, Anora

> "Working with Data Design gave us a clear direction for using data to grow. The strategy and roadmap focus on real business needs."
— Taru Salo, Head of Digital Development, Viestimedia

## Positioning / Differentiation

**One-liner:** Data Design is a senior-led, GenAI-native full-stack data & AI partner that moves clients from strategy to production faster than traditional consultancies.

**Core differentiators (use in "Why Data Design" sections):**
1. **Senior people, not junior pyramids** — team from Silo AI, H&M, Deloitte, Bilot, Bigdatapump. 20+ years avg.
2. **Boardroom to codebase** — speaks to CEO/CFO/CDO AND delivers working systems
3. **GenAI-native** — embedded in how DD designs, delivers, and accelerates every engagement
4. **Business process first** — starts from value chain, maps data flows, quantifies impact, then builds
5. **Lean structure** — no overhead-heavy pricing, no 8-layer governance, senior people from day one
6. **Co-creation** — develops with client, builds internal capabilities, not a black box

**Compared to big consultancies (Solita, Reaktor, Big 4):** No junior pyramids, no overhead, senior people only.
**Compared to small AI boutiques:** Not just 2 engineers hacking notebooks — has strategic credibility + scale.

## Design Patterns to Reuse

### Shared Components (`dd-website/src/components/`)
Reuse these — don't reinvent. Key ones:
- `Navbar` — fixed, blur-on-scroll, hamburger at 900px (nav defined in `lib/tokens.js` → `NAV_LINKS`)
- `Reveal` — scroll-triggered fade-up animation wrapper
- `Footer` — multi-column grid with logo, nav links, socials, contact
- `HeroSection`, `CTASection`, `TestimonialSpotlight`, `LogoMarquee`, `SmoothScroll`, `CountUp`
- Card components: `SolutionCard`, `FeaturedSolutionCard`, `ToolCard`, `AcceleratorCard`, `CaseCard`, `TestimonialCard`, `InsightCard`, `ParallaxCard`
- Templates: `SolutionSubpageTemplate`, `InsightArticleTemplate`

### Card Patterns
- **Solution card** — tag + framework badge + problem title + description + proof callout (beige, left border) + checkmark outcomes + timeline + arrow
- **Why card** — gray background, colored top border (alternating lemon/turquoise), title + body
- **Tool card** — icon + name + tagline + status badge + description + capabilities
- **Accelerator card** — big stat number + name + tagline + description + "What you get" deliverables in beige box + CTA button
- **Testimonial card** — italic quote + name + title + company
- **Step card** — numbered lemon badge + title + description

### Section Rhythm
Hero (gradient) → Content (white/gray alternating) → Lemon accent section → More content → Beige testimonials → Gray CTA → Gray footer

### Hero Patterns
- Services: lemon gradient, uppercase heading, stats strip below
- Products: turquoise gradient, "DD AI Labs" badge, normal case heading
- Subpages should pick one of these or a beige variant

## Technical Notes

- **Next.js 15 App Router + React 19.** App lives in `dd-website/`.
- **Styling:** inline React styles + shared tokens in `src/lib/tokens.js` + a minimal `globals.css`. No CSS modules, no Tailwind.
- **Animation:** `framer-motion` (entrance/scroll animations) and `lenis` (smooth scrolling), plus the `Reveal` component (IntersectionObserver fade-up) for simpler cases.
- **Fonts:** loaded via `next/font/google` in `src/app/layout.js` — DM Sans (body), Host Grotesk (display), DM Serif Display (serif).
- **Responsive:** single breakpoint at 900px.
- All links and contact info: calendly.com/mika-aho-datadesign/30min, info@datadesign.fi, +358 50 442 0008
- Company: Data Design Oy (3305752-1), Keilaniementie 1, 02150 Espoo, Finland
- Socials: LinkedIn (data-design-oy), Instagram (datadesign_ai_labs)

## What to Build Next

The core site (home, services, solutions + subpages, customer stories, insights, company pages) and shared components are **built**. Remaining work:

1. **Promote or remove the `dev_*` drafts** (`dev_home`, `dev_services`, `dev_solutions`, `dev_customer-stories`) — decide which become the real pages.
2. **Expand content** — more customer stories and insight articles using `CaseCard` / `InsightCard` and the `InsightArticleTemplate`.
3. **Resource sales detail** — surface interim leadership / embedded consultants more prominently (currently a light mention).
4. **Replace any remaining placeholder assets** with final DD/client/team imagery.
5. **Visual + code polish** — see the planning docs: `dd-website/DESIGN-UPGRADE-PLAN.md`, `dd-website/docs/refactoring-plan.md`, `docs/ux-polish-plan.md`.
