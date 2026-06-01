"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, PILL_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { ToolCard } from "@/components/ToolCard";
import { SolutionCard } from "@/components/SolutionCard";

/* ══════════════════════════════════════════════
   AI Tools — closer to software products
   ══════════════════════════════════════════════ */
const TOOLS = [
  {
    name: "DataDesigner.AI",
    solutionArea: "AI Strategy & Roadmap",
    tagline: "Your AI strategy drafted in hours, not months",
    description: "Translates your business goals into a concrete AI roadmap — prioritized use cases, business case drafts, and a phased plan. Built on the same framework behind 30+ board-approved strategies.",
    status: "In use with clients",
    capabilities: [
      "Maps business objectives to AI opportunities",
      "Generates prioritized use case portfolios",
      "Produces investment-ready business case drafts",
      "Follows the framework behind 30+ delivered strategies",
    ],
    accent: C.lemon,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="4" width="28" height="28" rx="6" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
        <path d="M12 18L16 14L20 16L24 12" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 24h12" stroke={C.black} strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
        <circle cx="24" cy="12" r="2" fill={C.seawave}/>
      </svg>
    ),
  },
  {
    name: "Text2SQL",
    solutionArea: "GenAI & Process Automation",
    tagline: "Anyone on your team can query your data — in plain language",
    description: "A GenAI-powered interface that lets business users ask questions of complex databases without writing SQL. Deployed for KTI Kiinteistötieto — real estate professionals now get instant answers from market data they couldn't access before.",
    status: "Deployed in production — KTI",
    capabilities: [
      "Natural language to SQL query generation",
      "Multi-source data querying",
      "Secure, role-based access controls",
      "Embeds into existing portals and applications",
    ],
    accent: C.turquoise,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="6" width="28" height="24" rx="4" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
        <path d="M10 14h8M10 18h12M10 22h6" stroke={C.black} strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <path d="M24 16l4 4-4 4" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Auto Data Catalog",
    solutionArea: "Data Governance & Quality",
    tagline: "Your data assets documented automatically — no manual effort",
    description: "Creates business-friendly descriptions of your data products and reports by extracting metadata from tools like Power BI. Your team understands, governs, and reuses data assets at scale — without spending weeks writing documentation.",
    status: "In use internally & with clients",
    capabilities: [
      "Extracts metadata from BI tools automatically",
      "Generates human-readable report descriptions",
      "Publishes documentation at scale",
      "Supports data governance and discoverability",
    ],
    accent: C.lemon,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="4" width="24" height="28" rx="4" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
        <line x1="11" y1="11" x2="25" y2="11" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="15" x2="25" y2="15" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="19" x2="20" y2="19" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M22 22l2 2 4-4" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "DataNanny",
    solutionArea: "Industrial Data Enrichment",
    tagline: "Cut equipment data cleanup from months to hours",
    description: "AI-powered enrichment for industrial equipment registers. Turns raw device names into 20+ structured technical fields — manufacturer, power, pressure, dimensions, maintenance intervals — with confidence scores and full audit trails. Deployed at Sarlin: 2,500 devices enriched in under 3 hours.",
    status: "Deployed in production — Sarlin",
    slug: "/solutions/data-nanny",
    capabilities: [
      "Parse → Search → Enrich pipeline for 20+ fields per device",
      "Human-in-the-loop review with confidence scoring",
      "AI agents for bulk consolidation and duplicate resolution",
      "Data-quality dashboards with fill rates and distributions",
    ],
    accent: C.turquoise,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="13" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
        <path d="M12 18l4 4 8-8" stroke={C.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Sales Prospector",
    solutionArea: "Customer Intelligence",
    tagline: "Your best leads found and qualified — before your team picks up the phone",
    description: "AI agents that scan LinkedIn, job ads, CRM data, and lead lists to find high-potential prospects. Qualified leads arrive scored, ranked, and ready for outreach — so your sales team talks to the right people from day one.",
    status: "In use internally",
    capabilities: [
      "Scans multiple sources — LinkedIn, job ads, CRM",
      "Scores and ranks leads by fit and timing",
      "Generates personalized outreach drafts",
      "Integrates with existing CRM workflows",
    ],
    accent: C.lemon,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="15" cy="14" r="6" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
        <path d="M6 30c0-5 4-8 9-8s9 3 9 8" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="26" cy="12" r="4" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
        <path d="M24 12h4M26 10v4" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════
   Solutions — project-based consulting
   ══════════════════════════════════════════════ */
/* Chart your path — clarity, foundation, and plan */
const SOLUTIONS_PATH = [
  {
    id: "01",
    title: "Our leadership team has scattered opinions on AI",
    slug: "/solutions/ai-accelerator",
    tag: "AI Accelerator Program",
    badge: "Best for starting",
    outcome: "Your leadership team aligns on a prioritized shortlist of AI opportunities — in days, not months.",
    timeline: "1–2 days",
  },
  {
    id: "02",
    title: "We know AI matters, but where do we start?",
    slug: "/solutions/ai-strategy",
    tag: "AI Strategy & Roadmap",
    badge: "Most popular",
    outcome: "Walk into your next board meeting with a funded AI roadmap, prioritized use cases, and clear ROI.",
    timeline: "6–8 weeks",
  },
  {
    id: "03",
    title: "We proved AI works — now how do we scale it?",
    slug: "/solutions/ai-native-transformation",
    tag: "AI-Native Transformation",
    badge: "For scale-ups",
    outcome: "A comprehensive plan that takes AI from scattered wins to your company's operating model.",
    timeline: "8–12 weeks",
  },
  {
    id: "04",
    title: "Nobody owns our data and it's slowing everything down",
    slug: "/solutions/data-governance",
    tag: "Data Governance & Quality",
    badge: "Critical enabler",
    outcome: "Fix the data foundation once — so every future AI project moves faster and delivers results you trust.",
    timeline: "Around 2 months",
  },
];

/* Start proving value — stepping stones, not standalone projects */
const SOLUTIONS_VALUE = [
  {
    id: "05",
    title: "Our pricing is leaving money on the table",
    slug: "/solutions/pricing-optimization",
    tag: "Pricing & Revenue Optimization",
    badge: "Revenue impact",
    outcome: "Every price optimized for maximum margin — automatically, daily, across your entire catalog.",
    timeline: "Pilot in 8–12 weeks",
  },
  {
    id: "06",
    title: "We don't really know our customers well enough",
    slug: "/solutions/customer-intelligence",
    tag: "Customer Intelligence",
    badge: "Sales enablement",
    outcome: "Your sales team walks into every meeting fully briefed — knowing the customer's history, open issues, and next likely need.",
    timeline: "First model in 6–10 weeks",
  },
  {
    id: "07",
    title: "We're drowning in manual work that AI should handle",
    slug: "/solutions/genai-automation",
    tag: "GenAI & Process Automation",
    badge: "Quick wins",
    outcome: "Reports ready when your team arrives, documents processed overnight, anyone querying your data in plain language.",
    timeline: "Prototype in 4–6 weeks",
  },
  {
    id: "08",
    title: "Our operations are reactive — we find problems after they hit",
    slug: "/solutions/intelligent-operations",
    tag: "Predictive Operations & Supply Chain",
    badge: "Operational excellence",
    outcome: "Catch equipment failures days in advance and recover revenue you didn't know you were losing.",
    timeline: "First model in 8–12 weeks",
  },
];

/* ══════════════════════════════════════════════
   Main Page
   ══════════════════════════════════════════════ */
export default function ProductsToolsPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="Solutions & Tools"
        blobs={2}
        image="/images/illustrations/DD-Illustration-1.png"
        title="Your AI challenge has been solved before"
        subtitle="Find the problem closest to yours. You'll see how companies like yours tackled it, what the results looked like, and what your first weeks would look like."
        primaryButton={{ label: "See solutions", href: "#solutions" }}
        secondaryButton={{ label: "Explore our tools", href: "#tools" }}
      />

      {/* ═══════════════════════════════════
           CHART YOUR PATH
         ═══════════════════════════════════ */}
      <section id="solutions" style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Chart your path
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              Know where you're going and how to get there. These solutions give you the clarity, foundation, and plan to become an AI-native organization.
            </p>
          </Reveal>
          <div className="dd-solutions-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16,
          }}>
            {SOLUTIONS_PATH.map((s, i) => (
              <SolutionCard key={s.title} solution={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           START PROVING VALUE
         ═══════════════════════════════════ */}
      <section id="prove-value" style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Start proving value
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              Every AI-native journey starts with one working solution. Pick the problem that matters most today — each one is a stepping stone, not a standalone project.
            </p>
          </Reveal>
          <div className="dd-solutions-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16,
          }}>
            {SOLUTIONS_VALUE.map((s, i) => (
              <SolutionCard key={s.title} solution={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           AI TOOLS
         ═══════════════════════════════════ */}
      <section id="tools" style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              The tools that make it faster
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              Purpose-built AI tools born from 50+ client engagements. They're the reason your project moves in weeks, not quarters — and they're built into every engagement.
            </p>
          </Reveal>

          <div className="dd-tools-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
          }}>
            {TOOLS.map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.05}>
                <ToolCard tool={tool} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           HOW THESE FIT TOGETHER
         ═══════════════════════════════════ */}
      <section className="dd-grain" style={{ background: `linear-gradient(to right, ${C.lemon}, ${C.turquoise})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "72px 40px" }}>
          <Reveal>
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            }}>
              <h2 style={{ fontSize: 40, fontWeight: 400, marginBottom: 16, letterSpacing: "-0.02em" }}>
                Every solution is an entry point. The tools make it faster. The journey connects them all.
              </h2>
              <p style={{
                fontSize: 16, lineHeight: 1.65, color: C.textMuted, maxWidth: 640, marginBottom: 32,
              }}>
                You start with the problem that matters most today. Our tools accelerate the work from day one. And as you move from a single win to enterprise-wide AI, each solution builds on the last. That's the path to AI-native — and it starts with one conversation.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <a href="/services" style={{
                  display: "inline-block", background: C.black, color: C.white,
                  padding: "14px 32px", borderRadius: PILL_BORDER_RADIUS,
                  fontWeight: 500, fontSize: 15, textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
                >See the full journey</a>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                  className="dd-btn-wipe"
                  style={{
                    display: "inline-block", background: C.white, color: C.black,
                    padding: "14px 32px", borderRadius: PILL_BORDER_RADIUS,
                    border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 15, textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >Book a call</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
