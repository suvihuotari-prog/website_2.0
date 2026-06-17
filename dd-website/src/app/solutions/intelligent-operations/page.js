"use client";

import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionIntelligentOperations() {
  return (
    <SolutionSubpageTemplate
      hero={{
        breadcrumbLabel: "Predictive Operations & Supply Chain",
        badge: "Predictive Operations & Supply Chain",
        title: "Our operations are reactive. We find problems after they hit",
        subtitle: "You're firefighting instead of preventing. Whether it's supplier delays, equipment failures, or inventory blind spots. Imagine your team knowing about problems days before they hit, not hours after.",
      }}
      challenge={{
        subtitle: "Reactive operations cost more, miss opportunities, and burn out your best people. The data to prevent this already exists. It's just not being used.",
        items: [
          { title: "Surprises you should have seen coming", body: "Equipment failures, supplier delays, demand spikes. Your team finds out when it's already a crisis. By then, the cost of fixing it has multiplied and the options have narrowed." },
          { title: "Inventory decisions based on averages", body: "Stocking too much of what doesn't sell, too little of what does. Average-based replenishment misses the patterns hiding in your data. And the revenue hiding in those patterns." },
          { title: "Manual monitoring that doesn't scale", body: "Your operations team watches dashboards and spreadsheets, hoping to catch anomalies. That approach doesn't scale. And it can't catch the subtle signals that predict tomorrow's problems." },
        ],
      }}
      steps={{
        subtitle: "From reactive firefighting to predictive prevention. A systematic approach that proves value in one area, then scales across your operations.",
        items: [
          { step: "1", title: "Your operational data, assessed", desc: "Your operational data. Supply chain, equipment, logistics, inventory. Is analyzed to identify where predictive models can prevent the most costly surprises. You see exactly where the biggest risks and opportunities are." },
          { step: "2", title: "Your predictive models, built", desc: "Models are tailored to your operations: lead time prediction, demand forecasting, anomaly detection, predictive maintenance. Whatever drives the most value. Built on your data, validated against your reality." },
          { step: "3", title: "Your operations team, equipped", desc: "Models feed directly into your existing tools and decision processes. Alerts, dashboards, and recommendations your team can act on immediately. No new systems to learn." },
          { step: "4", title: "Your approach, scaled", desc: "Once proven in one area, the approach scales across business units and geographies. You build a systematic predictive operations capability. Not a one-off project." },
        ],
      }}
      results={{
        subtitle: "Operations teams that went from reacting to preventing. With measurable impact.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Metso" tag="Industrial Equipment"
              description="30% better supplier lead time prediction. 10% improvement in purchase-to-delivery estimates. Solution started as a pilot and scaled to 5 global teams across the organization."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="NTG" logo="/images/logos/NTG_BW.png" logoHeight={22} tag="Wholesale & Distribution"
              description="Lost sales analysis revealed potential to capture 65% of previously lost revenue. Theory of Constraints-based inventory replenishment model. Smarter stock decisions based on real demand patterns."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Neste" tag="Energy & Chemicals"
              description="Potential to mitigate €14M in distribution obligation reporting risks. Data-driven approach to regulatory compliance monitoring across the organization."
            />
          </Reveal>
        </>,
        footnote: "Team background: H&M. Team members led AI-based supply chain decision support driving €200M+ in revenue increase. Eniram. 1–3% fuel cost reduction for large marine vessels, translating to millions annually.",
      }}
      deliverables={{
        subtitle: "You move from firefighting to prevention. With models that get smarter as more data flows through them.",
        items: [
          "Failures predicted before they cause downtime",
          "Lost revenue captured with smarter inventory decisions",
          "Shift from reactive firefighting to proactive prevention",
          "Scalable models that improve continuously with more data",
          "Integration with existing operational tools and dashboards",
        ],
        timelineBadge: "Analysis + first model in 8–12 weeks",
        timelineDesc: "From data assessment to deployed predictive model",
      }}
      cta={{
        heading: "In 30 minutes, you'll know where predictive AI can prevent your most costly surprises",
        subtitle: "Book a free call. You'll leave with clarity on your operational risks and see how other companies moved from reactive to predictive.",
        image: "/images/illustrations/DD-Illustration-2.png",
        secondaryLabel: "See all solutions",
        secondaryHref: "/solutions",
      }}
    />
  );
}
