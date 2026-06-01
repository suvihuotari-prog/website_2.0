"use client";

import { C, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

const COMPARISON_ROWS = [
  { left: "\"Where do we start with AI?\"", right: "\"How do we become an AI-native organization?\"" },
  { left: "Best for organizations at Level 0–1", right: "Best for organizations at Level 1–2 ready to scale" },
  { left: "Identifies first high-impact use cases", right: "Connects existing wins into an enterprise-wide plan" },
  { left: "Prioritized use case portfolio", right: "Full transformation roadmap across technology, data, people, and process" },
  { left: "Focus: what to build first", right: "Focus: how your entire organization operates with AI" },
  { left: "6–8 weeks", right: "8–12 weeks" },
  { left: "Board-ready first project proposal", right: "Board-ready multi-year transformation investment case" },
];

export default function SolutionAINativeTransformation() {
  return (
    <SolutionSubpageTemplate
      hero={{
        breadcrumbLabel: "AI-Native Transformation Plan",
        badge: "AI-Native Transformation Plan",
        title: "We've proven AI works — now how do we make it how our entire company operates?",
        subtitle: "You've run the pilots, delivered the first wins, and your board is asking what's next. You need a comprehensive plan that takes AI from a handful of projects to the operating model of your organization — across business units, data domains, and decision processes.",
      }}
      challenge={{
        subtitle: "Scaling from a few AI wins to an AI-native organization is a fundamentally different challenge than getting started. The technology is the easy part — the real blockers are people, processes, and how decisions get made.",
        items: [
          { title: "AI wins that don't connect into a bigger picture", body: "You have successful pilots and projects, but they're disconnected — different teams, different tools, different approaches. Each one works, but together they don't add up to a transformation. Nobody owns the overall AI capability, and there's no process for deciding what gets built next." },
          { title: "Your organization isn't set up to run AI at scale", body: "Who manages the models after launch? Who decides which processes get automated next? How do you handle the roles that change when AI takes over part of the work? The org chart, decision rights, and ways of working that got you here won't get you to AI-native." },
          { title: "Foundations that were optional for one project are now blocking ten", body: "Data governance, platform architecture, change management, AI literacy across the business — the things you could work around with one pilot become hard blockers when you try to scale. The technology is ready. Your organization isn't — yet." },
        ],
      }}
      steps={{
        subtitle: "A comprehensive transformation plan covering four dimensions — technology, data, people, and process. Typically delivered over 8–12 weeks. Because becoming AI-native is an organizational change, not just a technology project.",
        items: [
          { step: "1", title: "Your current state, assessed across all four dimensions", desc: "Every AI initiative, data asset, organizational capability, and business process is mapped against the four levels of AI maturity. Technology readiness is only one axis — we assess your people (skills, roles, decision rights), processes (how work flows, where AI fits), and culture (how your organization learns and adapts) with equal rigor. You see exactly where you are — not where you think you are." },
          { step: "2", title: "Your target operating model, defined", desc: "Together with your leadership team, we define what AI-native looks like for your specific organization — not just which processes AI runs, but how decisions get made, what roles change, how teams collaborate with AI, and what new capabilities you need to build internally. This becomes your north star." },
          { step: "3", title: "Your transformation plan, built across all dimensions", desc: "A phased roadmap that covers the full picture: which AI solutions to build and when, what data and platform foundations to put in place, how your organization structure and roles evolve, what capabilities to build vs. buy, and how to manage the change so people adopt rather than resist. Each phase proves value before you invest in the next." },
          { step: "4", title: "Your organization, aligned and funded", desc: "The plan is translated into the language your board needs — investment cases, risk assessment, capability requirements, and clear milestones. But also: what changes for your people, how you'll manage the transition, and who owns what. Your leadership team aligns on the full picture, not just the technology." },
        ],
      }}
      comparison={{
        heading: "What this covers that a strategy sprint doesn't",
        subtitle: "An AI Strategy Sprint finds your starting point. A Transformation Plan maps the full journey.",
        children: <>
          <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, border: `1px solid ${C.border}`, overflow: "hidden" }}>
            {/* Header row */}
            <div className="dd-comparison-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ padding: "20px 24px", background: C.gray }}>
                <h4 style={{ fontSize: 15, fontWeight: 600 }}>AI Strategy Sprint</h4>
              </div>
              <div style={{ padding: "20px 24px", background: C.lemon }}>
                <h4 style={{ fontSize: 15, fontWeight: 600 }}>AI-Native Transformation Plan</h4>
              </div>
            </div>
            {/* Data rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div key={i} className="dd-comparison-row" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                borderBottom: i < COMPARISON_ROWS.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <div style={{ padding: "16px 24px", fontSize: 14, lineHeight: 1.55, color: C.textMuted }}>{row.left}</div>
                <div style={{ padding: "16px 24px", fontSize: 14, lineHeight: 1.55, color: C.black, fontWeight: 500, background: `${C.lemon}22` }}>{row.right}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic", marginTop: 20 }}>
            Many organizations start with an AI Strategy Sprint and return for a Transformation Plan once they've proven value with their first projects. Others go straight to the Transformation Plan if they've already built momentum.
          </p>
        </>,
      }}
      results={{
        subtitle: "Organizations that moved from initial AI wins to enterprise-wide transformation.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Helen" logo="/images/logos/Helen_BW.png" logoHeight={22} tag="Energy"
              description="Started with an AI Strategy Sprint that secured C-suite approval and funding. Then expanded into a comprehensive program — AI roadmap, data governance aligned to business processes, and data ownership model adopted across the organization. AI went from a pilot initiative to an embedded capability."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Sandvik" logo="/images/logos/Sandvik_BW.png" logoHeight={20} tag="Industrial Manufacturing"
              description="500+ AI ideas narrowed to 60 high-impact use cases with a clear roadmap for AI-driven growth. Structured evaluation framework the organization continues to use independently — building internal capability to sustain the transformation beyond the engagement."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Elisa" logo="/images/logos/Elisa_BW.png" logoHeight={22} tag="Telecommunications"
              description="60+ data product ideas evaluated across 4 business areas. Data strategy with clear ownership and prioritization — connecting individual opportunities into a coherent enterprise-wide plan."
            />
          </Reveal>
        </>,
        footnote: "Team background: Our partners have led AI transformations at H&M (€200M+ revenue impact), built AI operating models at Silo AI, and shaped enterprise data strategies at Deloitte.",
      }}
      tools={{
        subtitle: "Your transformation plan builds on proven patterns, not a blank page.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="DataDesigner.AI" description="Your AI maturity assessment and opportunity landscape drafted in hours. Maps your business processes to AI opportunities across all four maturity levels — so the engagement time is spent on strategic decisions, not data gathering." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "You move from \"AI works in a few places\" to \"here's exactly how AI becomes how we operate\" — with a plan your board will fund and your organization can execute.",
        groups: [
          {
            label: "Technology & Data",
            items: [
              "AI maturity assessment across all business areas",
              "Phased AI solution roadmap with prioritized use cases",
              "Data governance and platform architecture requirements",
            ],
          },
          {
            label: "People & Organization",
            items: [
              "Target operating model — roles, decision rights, team structures for AI-native operations",
              "Capability plan — what to build internally, what to hire, what to partner on",
              "Change management approach — how to bring your people along, not leave them behind",
            ],
          },
          {
            label: "Strategy & Investment",
            items: [
              "Target state definition for AI-native operations",
              "Board-ready investment case with multi-year ROI",
              "Clear ownership, milestones, and success metrics for each phase",
            ],
          },
        ],
        timelineBadge: "8–12 weeks",
        timelineDesc: "From maturity assessment to board-ready transformation plan",
      }}
      related={{
        subtitle: "The Transformation Plan connects to your broader AI journey.",
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
                  If you're earlier in your journey, start here. Find your first high-impact use case and prove value before planning the full transformation.
                </p>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.seawave }}>Learn more →</span>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="/solutions/data-governance" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="dd-hover-lift" style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                border: `1px solid ${C.border}`, height: "100%",
              }}>
                <span style={{
                  display: "inline-block", padding: "5px 14px", borderRadius: 100,
                  border: `1px solid ${C.border}`, fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}99`,
                  marginBottom: 16,
                }}>Data Governance & Quality</span>
                <h3 style={{ fontSize: 19, fontWeight: 500, marginBottom: 10, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  Nobody owns our data and it's slowing everything down
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, marginBottom: 16 }}>
                  Governance is the foundation of every AI-native transformation. If data ownership is your blocker, start here.
                </p>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.seawave }}>Learn more →</span>
              </div>
            </a>
          </Reveal>
        </>,
      }}
      cta={{
        heading: "In 30 minutes, you'll know if your organization is ready for an AI-native transformation plan",
        subtitle: "Book a free call. You'll leave with an honest assessment of where you stand and what it would take to move from initial AI wins to an AI-native organization.",
        image: "/images/illustrations/DD-Illustration-2.png",
        secondaryLabel: "See all solutions",
        secondaryHref: "/solutions",
      }}
    />
  );
}
