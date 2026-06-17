"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionGenAIAutomation() {
  return (
    <SolutionSubpageTemplate
      hero={{
        breadcrumbLabel: "GenAI & Process Automation",
        badge: "GenAI & Process Automation",
        frameworkBadge: "Accelerated by our own AI tools. Text2SQL, Auto Data Catalog",
        title: "We're drowning in manual work that AI should handle",
        subtitle: "Your people spend hours on tasks that should take minutes. Processing documents, preparing reports, answering data questions. Imagine that work done automatically, and your team focused on the decisions that actually need them.",
      }}
      challenge={{
        subtitle: "Your team's capacity is being consumed by repetitive work that follows predictable patterns. Exactly the kind of work GenAI excels at.",
        items: [
          { title: "Hours lost to document processing", body: "PDFs, lab reports, invoices, regulatory filings. Your team manually extracts data from documents that machines should read automatically. Every hour spent on this is an hour lost to work that matters." },
          { title: "Business users locked out of their own data", body: "Every data question requires a ticket to IT or a SQL-savvy analyst. By the time the answer arrives, the decision moment has passed. And your team has learned not to ask." },
          { title: "Skilled people doing repetitive work", body: "Your best people spend significant time on tasks that follow predictable patterns. That's expensive capacity that should be focused on judgment, strategy, and the problems only humans can solve." },
        ],
      }}
      steps={{
        subtitle: "Working prototype in weeks, production deployment with proper guardrails, and your team trained to extend the solutions themselves.",
        items: [
          { step: "1", title: "Your highest-impact processes, identified", desc: "Your manual processes are mapped and ranked by volume, complexity, and business value. So automation starts where it makes the biggest difference, not where it's easiest." },
          { step: "2", title: "Your solution, prototyped fast", desc: "Working demonstrations built in weeks using our existing tools and frameworks. Your team sees results early. Not after months of development." },
          { step: "3", title: "Your solution, in production with guardrails", desc: "From prototype to production with data security, access controls, error handling, and integration with your existing systems. Built to run reliably, not just to demo well." },
          { step: "4", title: "Your team, equipped to extend it", desc: "Your team is trained to use and extend the solutions. The next processes to automate are identified. Building a continuous improvement cycle you own." },
        ],
      }}
      results={{
        subtitle: "Manual hours reclaimed, data democratized, and measurable business impact delivered.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Solar Foods" logo="/images/logos/SolarFoods_BW.jpg" logoHeight={24} tag="Food Technology"
              description="Automated lab report processing. PDF to structured data in minutes instead of hours. EFSA regulatory monitoring system that tracks compliance requirements automatically, eliminating manual monitoring."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="KTI Kiinteistötieto" tag="Real Estate Data"
              description="Text2SQL deployed for real estate market data. Natural language queries embedded directly in the existing client portal. Anyone can query complex data without SQL. Decisions happen faster."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Viestimedia" logo="/images/logos/Viestimedia_BW.png" logoHeight={20} tag="Media"
              description="38% improvement in customer acquisition, 37% cost reduction, 16% CPC reduction. AI-powered optimization of marketing operations delivering measurable commercial impact."
              quote="Working with Data Design gave us a clear direction for using data to grow. The strategy and roadmap focus on real business needs."
              quoteName="Taru Salo"
              quoteTitle="Head of Digital Development, Viestimedia"
            />
          </Reveal>
        </>,
      }}
      tools={{
        subtitle: "Your automation project moves faster because the core technology is already built and production-tested.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="Text2SQL" description="Anyone on your team can query your data. In plain language. Deployed in production at KTI Kiinteistötieto. Natural language to SQL generation with secure, role-based access controls that embed into your existing portals and applications." accent={C.turquoise} />
          </Reveal>
          <Reveal delay={0.1}>
            <ToolPreviewCard name="Auto Data Catalog" description="Your data assets documented automatically. No manual effort. Creates business-friendly descriptions by extracting metadata from tools like Power BI. Your team understands what data exists and how to use it. Without weeks of documentation work." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "You move from \"we're drowning in manual work\" to \"the tedious is automated and our team focuses on what matters.\"",
        items: [
          "Documents processed automatically, not manually",
          "Plain-language access to your data. No SQL skills needed",
          "Hours of manual work reduced to minutes",
          "Production-ready solutions with proper guardrails",
          "Your team trained to extend and maintain the solutions",
        ],
        timelineBadge: "Working prototype in 4–6 weeks",
        timelineDesc: "From process audit to first automated workflow",
      }}
      cta={{
        heading: "In 30 minutes, you'll know which manual processes should be automated first",
        subtitle: "Book a free call. You'll leave with clarity on your highest-impact automation opportunities and see what's possible with GenAI today.",
        image: "/images/illustrations/DD-Illustration-1.png",
        secondaryLabel: "See all solutions",
        secondaryHref: "/solutions",
      }}
    />
  );
}
