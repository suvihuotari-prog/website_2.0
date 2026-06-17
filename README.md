# Data Design Website

Marketing website for **Data Design Oy** — a Finnish AI advisory & implementation agency. The site is structured around client problems ("here's what you're struggling with") rather than capabilities, and is built as a [Next.js](https://nextjs.org) App Router project.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **framer-motion** — scroll/entrance animations
- **lenis** — smooth scrolling
- **next/font/google** — Host Grotesk (single typeface across the site)
- **next-intl** — Finnish/English localization; the site ships a full `/fi` mirror of every page
- **MDX content** — customer stories and insights authored as bilingual `.mdx` files (`next-mdx-remote` + `gray-matter`)
- **SEO** — dynamic `sitemap.js` + `robots.js`, per-page metadata, canonical/hreflang
- Styling: **inline React styles** + a shared token module ([`dd-website/src/lib/tokens.js`](dd-website/src/lib/tokens.js)) + minimal `globals.css`. No CSS modules, no Tailwind.

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
├── README.md                 # You are here
└── dd-website/               # The Next.js app
    ├── src/
    │   ├── app/              # App Router pages incl. /fi mirror, sitemap.js, robots.js
    │   ├── components/       # Shared components (Navbar, Footer, cards, Reveal…)
    │   ├── lib/              # tokens.js (brand), mdx.js (content loader), translations.js
    │   └── i18n/             # next-intl config
    ├── content/              # Bilingual MDX: cases/*.{en,fi}.mdx, insights/*.{en,fi}.mdx
    ├── messages/             # next-intl UI strings (en, fi)
    ├── public/images/        # Logos, people photos, illustrations
    └── next.config.js        # Webflow → new 301 redirects
```

### Pages (`dd-website/src/app/`)

Every route ships in English and Finnish — the Finnish mirror lives under `/fi` (e.g. `/services` ↔ `/fi/services`).

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/solutions` | Solutions index |
| `/solutions/<slug>` | 9 solution/program subpages: `ai-strategy`, `pricing-optimization`, `customer-intelligence`, `data-governance`, `genai-automation`, `intelligent-operations`, `ai-native-transformation`, `ai-accelerator`, `inrecipe` |
| `/customer-stories` | Customer stories index |
| `/customer-stories/[slug]` | Case study (MDX-driven, ~16 stories) |
| `/insights` | Insights index |
| `/insights/[slug]` | Insight article (MDX-driven, ~16 articles) |
| `/company/about` | About |
| `/company/careers` | Careers |
| `/company/careers/senior-data-analyst` | Job posting |
| `/company/contact` | Contact |
| `/privacy-policy` | Privacy policy |

## Contact / brand details

- Booking: https://calendly.com/mika-aho-datadesign/30min
- Email: info@datadesign.fi · Phone: +358 50 442 0008
- Data Design Oy (3305752-1), Keilaniementie 1, 02150 Espoo, Finland
