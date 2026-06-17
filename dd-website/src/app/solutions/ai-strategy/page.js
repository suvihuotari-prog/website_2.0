"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionAIStrategy() {
  return (
    <SolutionSubpageTemplate
      hero={{
        breadcrumbLabel: "AI Strategy & Roadmap",
        badge: "AI Strategy & Roadmap",
        frameworkBadge: "Proven framework. 30+ strategies delivered",
        title: "We know AI matters, but where do we start?",
        subtitle: "Too many options, no clear plan, and a board that wants answers. You need a roadmap that's been built 30+ times before. Prioritized, funded, and ready to execute in weeks, not quarters.",
      }}
      challenge={{
        subtitle: "Most organizations know AI matters. The hard part is deciding where to start. And building a case that gets leadership to act.",
        items: [
          { title: "Too many AI possibilities, no clear priority", body: "Every vendor promises transformation. Your team has a dozen ideas but no way to rank them by actual business value. The result: months of debate and no decisions." },
          { title: "Good pilots that never scale", body: "Without executive buy-in and a concrete investment case, promising pilots die in PowerPoint. You prove AI works. But can't get it funded." },
          { title: "No shared vision across the organization", body: "Sales wants one thing, operations another, IT a third. Without alignment, AI investments scatter, overlap, and compete for the same resources." },
        ],
      }}
      steps={{
        subtitle: "A battle-tested framework refined over 30+ strategy engagements. Typically delivered as a focused 6–8 week sprint that takes you from scattered ideas to a funded, executable AI roadmap.",
        items: [
          { step: "1", title: "Your value chain, mapped", desc: "Your business processes are mapped end to end. Not starting from technology, but from where your business creates and loses value today. This is the foundation everything else builds on." },
          { step: "2", title: "Your highest-impact opportunities, identified", desc: "AI opportunities are systematically scored by business impact, feasibility, and data readiness. You see exactly which bets will pay off first. And which ones to skip." },
          { step: "3", title: "Your business cases, board-ready", desc: "Every shortlisted use case gets a concrete business case: expected ROI, investment required, timeline, and dependencies. Written in the language your leadership needs to say yes." },
          { step: "4", title: "Your roadmap, ready to execute", desc: "A phased implementation plan with clear ownership, milestones, and success metrics. You walk into the board meeting with an answer, not a question." },
        ],
      }}
      results={{
        subtitle: "AI strategies that don't gather dust. They get funded and executed.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Sandvik" logo="/images/logos/Sandvik_BW.png" logoHeight={20} tag="Industrial Manufacturing"
              description="500+ AI ideas narrowed to 60 high-impact use cases. Clear roadmap for AI-driven growth adopted by leadership. Structured evaluation framework the organization continues to use independently."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Helen" logo="/images/logos/Helen_BW.png" logoHeight={22} tag="Energy"
              description="C-suite approval and funding secured for AI pilots. AI roadmap and project plan aligned with business strategy. Data ownership model adopted across the organization."
              quote="The engagement was comprehensive and professionally planned, significantly advancing our AI development."
              quoteName="Kati Kinnunen"
              quoteTitle="CDO, Helen"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Elisa" logo="/images/logos/Elisa_BW.png" logoHeight={22} tag="Telecommunications"
              description="60+ data product ideas evaluated, 15 high-value use cases selected across 4 business areas. Data strategy with clear ownership and prioritization."
            />
          </Reveal>
        </>,
      }}
      tools={{
        subtitle: "Your strategy process moves faster because the heavy lifting is already done.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="DataDesigner.AI" description="Your AI strategy drafted in hours, not months. Translates your business goals into a prioritized AI roadmap. Use cases scored, business cases drafted, and a phased plan assembled. Built on the same framework behind 30+ delivered strategies, so you start from proven patterns, not a blank page." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: 'You move from "AI curious" to "AI funded". With deliverables your board will approve and your team can execute.',
        items: [
          "Prioritized AI use case portfolio tied to business value",
          "Investment-ready business cases with clear ROI",
          "Phased implementation roadmap your team can execute",
          "Ownership model and governance framework",
          "Board-ready presentations in the language leadership needs",
        ],
        timelineBadge: "Typically 6–8 weeks",
        timelineDesc: "From kickoff to board-ready AI roadmap",
      }}
      cta={{
        heading: "In 30 minutes, you'll know if an AI strategy sprint is right for you",
        subtitle: "Book a free call. You'll leave with clarity on your situation and see how companies in your industry have moved from AI ambiguity to a funded roadmap.",
        image: "/images/illustrations/DD-Illustration-1.png",
        secondaryLabel: "See all solutions",
        secondaryHref: "/solutions",
      }}
    />
  );
}
