# Data Design Website

Marketing website for **Data Design Oy** — a Finnish AI advisory & implementation agency. The site is structured around client problems ("here's what you're struggling with") rather than capabilities, and is built as a [Next.js](https://nextjs.org) App Router project.

> **Live design conventions, brand tokens, copy voice, and client proof points live in [CLAUDE.md](CLAUDE.md).** Read it before changing content or styling.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **framer-motion** — scroll/entrance animations
- **lenis** — smooth scrolling
- **next/font/google** — DM Sans (body), Host Grotesk (display), DM Serif Display (serif)
- Styling: **inline React styles** + a shared token module ([`dd-website/src/lib/tokens.js`](dd-website/src/lib/tokens.js)) + minimal `globals.css`. No CSS modules, no Tailwind.
- Deployed on **Vercel**.

## Getting started

The Next.js app lives in the [`dd-website/`](dd-website/) subdirectory.

```bash
cd dd-website
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Repository layout

```
.
├── CLAUDE.md                 # Project guide: brand, voice, proof points, design patterns
├── README.md                 # You are here
├── dd-website/               # The Next.js app (deployable)
│   ├── src/
│   │   ├── app/              # App Router pages (see Pages below)
│   │   ├── components/       # ~25 shared components (Navbar, Footer, cards, Reveal…)
│   │   ├── lib/tokens.js     # Brand colors, layout constants, nav links, Calendly URL
│   │   └── app/globals.css   # Global resets and CSS variables
│   ├── public/images/        # Logos, people photos, illustrations
│   └── docs/                 # In-app planning docs (design upgrade, refactoring)
├── docs/                     # Copy & reference docs (services copy, copy rules, design skill)
└── *.jsx                     # Original standalone prototypes — see note below
```

### Pages (`dd-website/src/app/`)

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/solutions` | Solutions index |
| `/solutions/ai-strategy` | Solution: AI strategy |
| `/solutions/pricing-optimization` | Solution: pricing optimization |
| `/solutions/customer-intelligence` | Solution: customer intelligence |
| `/solutions/data-governance` | Solution: data governance |
| `/solutions/genai-automation` | Solution: GenAI & automation |
| `/solutions/intelligent-operations` | Solution: intelligent operations |
| `/solutions/ai-native-transformation` | Solution: AI-native transformation |
| `/solutions/ai-accelerator` | Accelerator program |
| `/solutions/data-nanny` | Data Nanny tool |
| `/customer-stories` | Customer stories index |
| `/customer-stories/tokmanni` | Case study: Tokmanni |
| `/insights` | Insights index |
| `/insights/clarifying-data-ownership` | Insight article |
| `/company/about` | About |
| `/company/careers` | Careers |
| `/company/careers/senior-data-analyst` | Job posting |
| `/company/contact` | Contact |

Routes prefixed `dev_` (e.g. `dev_home`, `dev_services`) are work-in-progress drafts, not linked from navigation.

### A note on the root-level `.jsx` files

The files at the repo root — [`services-page.jsx`](services-page.jsx), [`home-page.jsx`](home-page.jsx), `solution-*.jsx`, etc. — are the **original single-file prototypes** the project started from. The live implementation has since been built out and componentized under [`dd-website/src/`](dd-website/src/). The prototypes are kept as design reference; **the app in `dd-website/` is the source of truth.**

## Deployment

The app is deployed on Vercel. Because the Next.js project lives in the `dd-website/` subdirectory (not the repo root), the Vercel project's **Root Directory** must be set to `dd-website`.

## Contact / brand details

- Booking: https://calendly.com/mika-aho-datadesign/30min
- Email: info@datadesign.fi · Phone: +358 50 442 0008
- Data Design Oy (3305752-1), Keilaniementie 1, 02150 Espoo, Finland
