"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionCustomerIntelligence() {
  return (
    <SolutionSubpageTemplate
      hero={{
        breadcrumbLabel: "Customer Intelligence",
        badge: "Customer Intelligence",
        title: "We don't really know our customers well enough",
        subtitle: "Customer data sits in your systems but isn't working for you. You need to turn fragmented information into real insight — personalized recommendations, churn predictions, and a shared customer memory your whole team can use.",
      }}
      challenge={{
        subtitle: "You have customer data — but it's not working for you. The insights you need are buried across disconnected systems.",
        items: [
          { title: "Customer data scattered across systems", body: "CRM says one thing, your support tool another. Sales reps build knowledge in their heads, not in systems. When they leave, institutional memory goes with them." },
          { title: "Generic customer interactions", body: "Every customer gets the same experience. You know they're different, but your systems can't tell you how — or what each one actually needs." },
          { title: "Churn you only see in hindsight", body: "By the time you notice a customer is leaving, they've already decided. You need signals that predict churn before it happens." },
        ],
      }}
      steps={{
        subtitle: "From fragmented data to actionable customer insight — a systematic approach that puts intelligence into your team's daily workflows.",
        items: [
          { step: "1", title: "Your customer data, unified", desc: "Your data sources are connected into a coherent customer view — CRM, transactions, interactions, support tickets — creating a single source of truth your whole team can rely on." },
          { step: "2", title: "Your customer insights, modeled", desc: "Models reveal what your data already knows: customer segments, purchase propensity, churn risk, lifetime value, and next-best actions — tailored to your business context." },
          { step: "3", title: "Your customer memory, activated", desc: "GenAI-powered customer intelligence gives your team instant context before every meeting, call, or decision. Automated meeting prep and standardized reports — so no insight stays trapped in someone's head." },
          { step: "4", title: "Your impact, measured and growing", desc: "Insights are integrated into the workflows your team already uses. Dashboards track what moves the needle — so your customer intelligence gets sharper every week." },
        ],
      }}
      results={{
        subtitle: "Real customer intelligence implementations delivering measurable business impact.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="S-Pankki" tag="Financial Services"
              description="3–7x increase in inbound call sales conversion. Automated loan prioritization significantly increasing sales. Customer KPI followed at C-level."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="A-Insinöörit" logo="/images/logos/A-Insinoorit_BW.jpg" logoHeight={24} tag="Engineering & Consulting"
              description="GenAI-powered customer memory for sales teams. Automated meeting prep and standardized sales reports. Complete customer context available before every interaction."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Tokmanni" logo="/images/logos/Tokmanni_BW.png" logoHeight={22} tag="Retail"
              description="AI-driven personalization engine matched to individual customer behavior. 256% more coupon usage through targeted offers across 800K active customers."
            />
          </Reveal>
        </>,
        footnote: "Also: Konecranes — customer profile design for better sales and marketing targeting.",
      }}
      tools={{
        subtitle: "Your customer intelligence projects move faster because the heavy lifting is already done.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="Sales Prospector" description="AI agents that scan LinkedIn, job ads, CRM data, and lead lists to find high-potential prospects. Qualified leads arrive scored, ranked, and ready for outreach — so your sales team talks to the right people from day one." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "You move from scattered customer data to a shared intelligence layer your whole team uses daily.",
        items: [
          "Sales teams prepared with complete customer context",
          "Recommendations matched to individual behavior",
          "Churn prediction models that flag at-risk customers early",
          "Unified customer view across all touchpoints",
          "Automated reporting and meeting preparation",
        ],
        timelineBadge: "First model in 6–10 weeks",
        timelineDesc: "From data audit to first actionable customer insights",
      }}
      cta={{
        heading: "In 30 minutes, you'll know how to turn your customer data into a competitive advantage",
        subtitle: "Book a free call. You'll leave with clarity on your customer intelligence gaps and see how similar businesses turned fragmented data into real insight.",
        image: "/images/illustrations/DD-Illustration-3.png",
        secondaryLabel: "See all solutions",
        secondaryHref: "/solutions",
      }}
    />
  );
}
