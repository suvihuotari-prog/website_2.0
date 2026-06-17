"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionDataGovernance() {
  return (
    <SolutionSubpageTemplate
      hero={{
        breadcrumbLabel: "Data Governance & Quality",
        badge: "Data Governance & Quality",
        frameworkBadge: "Proven framework. Deployed across 5+ organizations",
        title: "Nobody owns our data and it's slowing everything down",
        subtitle: "Every AI initiative stalls at the same place: the data isn't ready. Unclear ownership, inconsistent quality, siloed systems. Fix this once, and every project after it moves faster, costs less, and delivers results you can trust.",
      }}
      challenge={{
        subtitle: "Data governance sounds like a back-office problem. Until it blocks every AI initiative, every analytics project, and every decision that depends on reliable numbers.",
        items: [
          { title: "No clear data ownership", body: "When something goes wrong, nobody knows who's responsible. Decisions stall, fixes take weeks, and accountability stays unclear. The same conversations happen again and again." },
          { title: "Data quality that erodes trust", body: "Inconsistencies, duplicates, missing values. Your people have stopped trusting the numbers. They build their own spreadsheets instead of using the systems you've invested in." },
          { title: "AI projects stuck in an endless data loop", body: "Every AI initiative starts with \"first we need to fix the data.\" Without governance, you're preparing the same data over and over. And the projects that depend on it never get off the ground." },
        ],
      }}
      steps={{
        subtitle: "A structured approach deployed across 5+ organizations. Typically delivered as a focused kickstart over roughly 2 months. You get governance that people actually use, not a policy document that sits on a shelf.",
        items: [
          { step: "1", title: "Your data landscape, assessed", desc: "Your existing data landscape is mapped. Ownership gaps, quality issues, and the business processes that depend on reliable data. You see exactly where the problems are and what they're costing you." },
          { step: "2", title: "Your ownership model, defined", desc: "Data ownership is aligned to business processes, not IT systems. Clear roles that make sense to the people who'll carry them. So accountability is obvious and arguments stop." },
          { step: "3", title: "Your quality framework, practical", desc: "Quality rules, monitoring, and improvement processes your teams can actually follow. Metrics that matter. Not a 200-page policy document no one reads." },
          { step: "4", title: "Your organization, adopted", desc: "Governance only works if people use it. Adoption plans, training, and governance embedded into existing workflows. So it sticks after the engagement ends." },
        ],
      }}
      results={{
        subtitle: "Governance that gets adopted. Not just documented.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Anora" logo="/images/logos/Anora_BW.png" logoHeight={22} tag="Beverages & Spirits"
              description="Unified governance across 5 countries post-merger. 2 data domains aligned with clear ownership. SAP S/4HANA transformation support with governance framework in place."
              quote="Data Design helped us take control of our master data. Their clear approach made our data more accurate and easier to manage."
              quoteName="Matti Nurmi"
              quoteTitle="CIO, Anora"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Helen" logo="/images/logos/Helen_BW.png" logoHeight={22} tag="Energy"
              description="Data ownership aligned to business processes. Clear accountability model adopted across the organization. The same framework that later enabled their AI roadmap to move forward."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Neste" tag="Energy & Chemicals"
              description="Potential to mitigate €14M in distribution obligation reporting risks. Data-driven approach to regulatory compliance monitoring across the organization."
            />
          </Reveal>
        </>,
        footnote: "Also: Wolt. Vendor on-boarding process and risk management framework. MHYP. Governance model for 52 forestry associations with competition law compliance.",
      }}
      tools={{
        subtitle: "Your governance project moves faster because the documentation and quality monitoring are automated from day one.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="Auto Data Catalog" description="Your data assets documented automatically. No manual effort. Creates business-friendly descriptions by extracting metadata from tools like Power BI. Your team understands, governs, and reuses data at scale without spending weeks writing documentation." accent={C.lemon} />
          </Reveal>
          <Reveal delay={0.1}>
            <ToolPreviewCard name="Data Quality Improver" description="Data quality issues found and fixed before they compound. Automated profiling, anomaly detection, and quality scoring across your data domains. With concrete fix recommendations, not just alerts." accent={C.turquoise} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "You move from \"nobody owns the data\" to \"everyone knows exactly what they're responsible for\". With governance your teams actually follow.",
        items: [
          "Clear ownership mapped to every data domain",
          "Governance model that enables AI. Not blocks it",
          "Quality framework your teams actually follow",
          "Change management and adoption plan",
          "Monitoring dashboards for ongoing quality tracking",
        ],
        timelineBadge: "Around 2 months",
        timelineDesc: "From assessment to adopted governance model",
      }}
      cta={{
        heading: "In 30 minutes, you'll know if a governance kickstart is right for you",
        subtitle: "Book a free call. You'll leave with clarity on your data challenges and see how other organizations moved from data chaos to a governance model their teams actually use.",
        image: "/images/illustrations/DD-Illustration-4.png",
        secondaryLabel: "See all solutions",
        secondaryHref: "/solutions",
      }}
    />
  );
}
