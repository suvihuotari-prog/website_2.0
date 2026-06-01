"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

/* Industry icons for "Where it applies" */
const IconRetail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const IconWholesale = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconIndustrial = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

const IconConsumer = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

export default function SolutionPricingOptimization() {
  return (
    <SolutionSubpageTemplate
      hero={{
        breadcrumbLabel: "Pricing & Revenue Optimization",
        badge: "Pricing & Revenue Optimization",
        title: "Our pricing is leaving money on the table",
        subtitle: "You have years of transaction data, customer behavior, and competitive signals — but your pricing still runs on spreadsheets and intuition. We build the models that turn that data into optimized prices, personalized offers, and better margins — live, in production, getting smarter every week.",
      }}
      challenge={{
        subtitle: "Pricing is one of the fastest levers for profit — but most teams can't move it fast enough.",
        items: [
          { title: "Pricing by gut feel and last year's spreadsheet", body: "Your pricing team is experienced, but they're making thousands of decisions with a handful of data points. When product catalogs run into tens of thousands of SKUs, manual rules can't keep up — and every slow decision is margin left behind." },
          { title: "Promotions that cost more than they earn", body: "Blanket discounts and one-size-fits-all campaigns spend marketing budget on customers who would have bought anyway — while missing the ones who just need the right offer. The result: lower margins and no clear signal of what actually worked." },
          { title: "No way to test before you commit", body: "Price changes go live based on assumptions. You find out what worked — and what didn't — only after the quarter closes. Without a feedback loop, every pricing decision is a one-shot bet." },
        ],
      }}
      steps={{
        subtitle: "From transaction data to running pricing models in production — typically in 8–12 weeks.",
        items: [
          { step: "1", title: "Find where the margin is hiding", desc: "We start with your transaction history, customer segments, and product catalog. The goal isn't a generic analysis — it's finding the specific pricing decisions where a model will outperform manual rules. In one engagement, this initial analysis identified a 15–20% profit uplift opportunity that the client's team hadn't been able to quantify." },
          { step: "2", title: "Build models matched to your pricing problem", desc: "There's no single pricing model. We've built auction-based dynamic pricing for wholesale, demand-driven personalized offers for retail loyalty, and predictive cost models for industrial service contracts. The model fits your business logic — not the other way around." },
          { step: "3", title: "Validate with controlled experiments", desc: "Models are tested against real data and, where possible, in controlled A/B tests before they touch production pricing. One retail engagement ran 9 months of continuous A/B testing across 800K customers to validate lift before scaling. You don't go live on faith." },
          { step: "4", title: "Run in production and improve continuously", desc: "The model runs as part of your operations — integrated into your ERP, pricing system, or campaign workflow. Performance is tracked through dashboards, and models retrain as new data flows in. We've maintained production pricing systems for over a year with ongoing optimization runs." },
        ],
      }}
      results={{
        subtitle: "Production systems with measured business impact — not proof-of-concepts gathering dust.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Tokmanni" logo="/images/logos/Tokmanni_BW.png" logoHeight={22} tag="Retail — personalized promotions"
              description="Personalized coupon offers matched to individual customer behavior across 800K active loyalty customers. 256% increase in coupon usage, 5.3% more store visits, 3.5% sales increase — with improved margins from lower average discount amounts. Validated over 9 months of continuous A/B testing. The system runs in production on Azure and now extends to promotional leaflet optimization and assortment decisions."
              quote="Our loyalty customers now get offers they care about. This means more visits, more sales, and 256% more coupon use. We turned customer insights into action — and real business results."
              quoteName="Tuomas Vihavainen"
              quoteTitle="Head of Group Analytics, Tokmanni"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Kirjastopalvelu" tag="Wholesale & Distribution — dynamic pricing"
              description="AI-powered auction pricing for a book and media wholesaler. The model optimizes dynamically based on demand patterns and inventory levels, delivering 15–20% profit increase and 10%+ sales volume growth. Built from scratch — data analysis, feature engineering, model development, and production deployment — in under six months."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Sarlin" tag="Industrial Services — contract pricing"
              description="Predictive pricing model for maintenance contracts in industrial HVAC and pumping systems. The model uses equipment data, usage patterns, and historical maintenance costs to price service agreements more accurately — replacing manual estimation with data-driven contract pricing. Built through a design sprint and pilot in 12 weeks."
            />
          </Reveal>
        </>,
      }}
      applications={{
        subtitle: "Pricing optimization works wherever you have transaction history and pricing decisions at scale.",
        items: [
          { icon: <IconRetail />, title: "Retail & E-commerce", body: "Personalized promotions, dynamic catalog pricing, assortment optimization. Best fit when you have a loyalty program or customer-level purchase data." },
          { icon: <IconWholesale />, title: "Wholesale & Distribution", body: "Auction pricing, bid optimization, demand-driven replenishment pricing. High impact when you're pricing thousands of SKUs across customer segments." },
          { icon: <IconIndustrial />, title: "Industrial & Field Services", body: "Service contract pricing, maintenance cost prediction, spare parts pricing. Works especially well when pricing depends on equipment profiles and usage data that's been collected but never modeled." },
          { icon: <IconConsumer />, title: "Consumer Goods", body: "Trade promotion optimization, channel pricing, pack-price architecture. Relevant when you're managing pricing across multiple retail partners." },
        ],
      }}
      deliverables={{
        subtitle: "A working pricing model in production — not a slide deck about what could be possible.",
        items: [
          "Pricing models built on your transaction data and business rules — not generic templates",
          "Integration into your existing pricing workflow, ERP, or campaign system",
          "A/B testing framework to validate impact before full rollout",
          "Performance dashboards tracking margin, volume, and model accuracy",
          "Ongoing model retraining and support as your data grows",
        ],
        timelineBadge: "Pilot in 8–12 weeks",
        timelineDesc: "From data audit to first optimized pricing decisions in production",
      }}
      cta={{
        heading: "In 30 minutes, you'll know where your pricing is leaking revenue",
        subtitle: "Book a free call. We'll walk through your pricing landscape and show you where similar businesses found the margin they didn't know they were missing.",
        image: "/images/illustrations/DD-Illustration-2.png",
        secondaryLabel: "See all solutions",
        secondaryHref: "/solutions",
      }}
    />
  );
}
