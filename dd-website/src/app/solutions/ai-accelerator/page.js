"use client";

import { C, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionAIAccelerator() {
  return (
    <SolutionSubpageTemplate
      hero={{
        breadcrumbLabel: "AI Accelerator Program",
        badge: "AI Accelerator Program",
        frameworkBadge: "100+ companies trained",
        title: "Our leadership team doesn't really understand what AI can do for us",
        subtitle: "Your team knows AI matters — but they can't agree on where it applies, what's realistic, and what to do first. In 1–2 days, your leadership goes from scattered opinions to a shared understanding of exactly where AI creates value in your business.",
      }}
      challenge={{
        subtitle: "You can't build an AI strategy when your leadership team doesn't share a common understanding of what AI can — and can't — do for your specific business.",
        items: [
          { title: "AI hype without business grounding", body: "Everyone has opinions about AI, shaped by vendor demos, news headlines, and LinkedIn posts. But nobody can articulate what AI means for your specific business processes, your data, and your competitive position." },
          { title: "No shared language across the leadership team", body: "Sales, operations, IT, and finance all see AI differently. Without a common framework, conversations circle without reaching decisions — and months pass with nothing happening." },
          { title: "AI initiatives that start without leadership alignment", body: "Individual teams experiment in silos. Pilots launch without executive sponsorship. Good ideas compete for resources instead of building on each other. The result: wasted effort and growing skepticism." },
        ],
      }}
      steps={{
        subtitle: "A structured 1–2 day program delivered 100+ times — from industrial manufacturers to financial institutions. Your leadership team leaves aligned, energized, and ready to act.",
        items: [
          { step: "1", title: "Your business context, understood", desc: "Before the workshop, your business model, competitive landscape, and existing data assets are analyzed. The program is built around your reality — not generic AI theory." },
          { step: "2", title: "Your AI opportunities, mapped", desc: "Your team works hands-on to identify where AI applies to your specific business processes. Real use cases emerge from your own operations — not from a textbook." },
          { step: "3", title: "Your priorities, agreed", desc: "Use cases are evaluated together — by business impact, feasibility, and data readiness. Your leadership team aligns on what matters most and what to pursue first. No more scattered opinions." },
          { step: "4", title: "Your next step, clear", desc: "You leave with a prioritized shortlist of AI opportunities, rough ROI estimates, and a clear picture of what a full AI strategy sprint would look like — if and when you're ready for it." },
        ],
      }}
      results={{
        subtitle: "100+ companies have used this program to go from AI curiosity to concrete direction.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Industrial & Manufacturing" tag="Production, Quality & Supply Chain"
              description="Leadership teams across industrial manufacturers have used the Accelerator to identify AI opportunities in production, quality, and supply chain — moving from abstract interest to funded pilot proposals."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Financial Services" tag="Automation & Risk Management"
              description="Banks and financial institutions have aligned their leadership teams on AI priorities — from customer-facing automation to risk management and regulatory compliance."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Energy & Utilities" tag="Operations & Sustainability"
              description="Energy companies have used the program to map AI applications across grid operations, customer engagement, and sustainability reporting — building the shared vision needed to move forward."
            />
          </Reveal>
        </>,
      }}
      tools={{
        subtitle: "Your workshop moves faster because the opportunity mapping framework is already built.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="DataDesigner.AI" description="Your AI opportunities mapped in hours, not days. Translates your business context into a structured opportunity landscape — so workshop time is spent on evaluation and decision-making, not brainstorming from scratch." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "Your leadership team goes from \"AI is interesting\" to \"here's exactly what we should do\" — in days, not months.",
        items: [
          "AI opportunity map specific to your business",
          "Prioritized shortlist with rough ROI estimates",
          "Shared understanding and common language across leadership",
          "Hands-on experience evaluating real AI use cases",
          "Clear picture of what a full strategy sprint would involve",
        ],
        timelineBadge: "1–2 days",
        timelineDesc: "From preparation to aligned leadership team",
        timelineNote: "Where this leads: Many organizations use the Accelerator as a launchpad for a full Data & AI Strategy Sprint — moving from a prioritized shortlist to board-ready business cases and an executable roadmap in 6–8 weeks.",
      }}
      related={{
        subtitle: "The Accelerator is often the first step. Here's where it leads.",
        children: <>
          <Reveal delay={0.05}>
            <a href="/solutions/ai-strategy" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="dd-hover-lift" style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                border: `1px solid ${C.border}`, height: "100%",
              }}>
                <span style={{
                  display: "inline-block", padding: "5px 14px", borderRadius: 100,
                  border: `1px solid ${C.border}`, fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}99`,
                  marginBottom: 16,
                }}>AI Strategy & Roadmap</span>
                <h3 style={{ fontSize: 19, fontWeight: 500, marginBottom: 10, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  We know AI matters, but where do we start?
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, marginBottom: 16 }}>
                  Take the priorities from the Accelerator and turn them into investment-ready business cases and a phased roadmap your board will approve.
                </p>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.seawave }}>Learn more →</span>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="/solutions/genai-automation" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="dd-hover-lift" style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                border: `1px solid ${C.border}`, height: "100%",
              }}>
                <span style={{
                  display: "inline-block", padding: "5px 14px", borderRadius: 100,
                  border: `1px solid ${C.border}`, fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}99`,
                  marginBottom: 16,
                }}>GenAI & Process Automation</span>
                <h3 style={{ fontSize: 19, fontWeight: 500, marginBottom: 10, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  We're drowning in manual work that AI should handle
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, marginBottom: 16 }}>
                  Start automating high-impact processes immediately with GenAI — working prototype in 4–6 weeks.
                </p>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.seawave }}>Learn more →</span>
              </div>
            </a>
          </Reveal>
        </>,
      }}
      cta={{
        heading: "In 30 minutes, you'll know if an AI Accelerator is the right starting point",
        subtitle: "Book a free call. You'll leave with clarity on where your leadership team stands and what it would take to get everyone aligned on AI.",
        image: "/images/illustrations/DD-Illustration-1.png",
        secondaryLabel: "See all solutions",
        secondaryHref: "/solutions",
      }}
    />
  );
}
