"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";

/* ══════════════════════════════════════════════
   Solutions data — clean card format
   ══════════════════════════════════════════════ */
const SOLUTIONS_PATH = [
  { id: "01", title: "Our leadership team has scattered opinions on AI", slug: "/solutions/ai-accelerator", tag: "AI Accelerator Program", badge: "Best for starting", outcome: "Your leadership team aligns on a prioritized shortlist of AI opportunities — in days, not months.", timeline: "1–2 days" },
  { id: "02", title: "We know AI matters, but where do we start?", slug: "/solutions/ai-strategy", tag: "AI Strategy & Roadmap", badge: "Most popular", outcome: "Walk into your next board meeting with a funded AI roadmap, prioritized use cases, and clear ROI.", timeline: "6–8 weeks" },
  { id: "03", title: "We proved AI works — now how do we scale it?", slug: "/solutions/ai-native-transformation", tag: "AI-Native Transformation", badge: "For scale-ups", outcome: "A comprehensive plan that takes AI from scattered wins to your company's operating model.", timeline: "8–12 weeks" },
  { id: "04", title: "Nobody owns our data and it's slowing everything down", slug: "/solutions/data-governance", tag: "Data Governance & Quality", badge: "Critical enabler", outcome: "Fix the data foundation once — so every future AI project moves faster and delivers results you trust.", timeline: "Around 2 months" },
];

const SOLUTIONS_VALUE = [
  { id: "05", title: "Our pricing is leaving money on the table", slug: "/solutions/pricing-optimization", tag: "Pricing & Revenue Optimization", badge: "Revenue impact", outcome: "Every price optimized for maximum margin — automatically, daily, across your entire catalog.", timeline: "Pilot in 8–12 weeks" },
  { id: "06", title: "We don't really know our customers well enough", slug: "/solutions/customer-intelligence", tag: "Customer Intelligence", badge: "Sales enablement", outcome: "Your sales team walks into every meeting fully briefed — knowing the customer's history, open issues, and next likely need.", timeline: "First model in 6–10 weeks" },
  { id: "07", title: "We're drowning in manual work that AI should handle", slug: "/solutions/genai-automation", tag: "GenAI & Process Automation", badge: "Quick wins", outcome: "Reports ready when your team arrives, documents processed overnight, anyone querying your data in plain language.", timeline: "Prototype in 4–6 weeks" },
  { id: "08", title: "Our operations are reactive — we find problems after they hit", slug: "/solutions/intelligent-operations", tag: "Predictive Operations & Supply Chain", badge: "Operational excellence", outcome: "Catch equipment failures days in advance and recover revenue you didn't know you were losing.", timeline: "First model in 8–12 weeks" },
];

/* ══════════════════════════════════════════════
   Tools data — streamlined for showcase
   ══════════════════════════════════════════════ */
const TOOLS = [
  {
    name: "DataDesigner.AI",
    area: "AI Strategy",
    tagline: "Your AI strategy drafted in hours, not months",
    description: "Translates your business goals into a concrete AI roadmap — prioritized use cases, business case drafts, and a phased plan.",
    status: "In use with clients",
    accent: C.lemon,
    capabilities: ["Maps objectives to AI opportunities", "Prioritized use case portfolios", "Investment-ready business cases", "Framework behind 30+ strategies"],
  },
  {
    name: "Text2SQL",
    area: "GenAI Automation",
    tagline: "Anyone can query your data — in plain language",
    description: "Business users ask questions of complex databases without writing SQL. Deployed for KTI — real estate professionals get instant answers from market data.",
    status: "Deployed in production",
    accent: C.turquoise,
    capabilities: ["Natural language to SQL", "Multi-source data querying", "Role-based access controls", "Embeds into existing portals"],
  },
  {
    name: "Auto Data Catalog",
    area: "Data Governance",
    tagline: "Your data assets documented automatically",
    description: "Creates business-friendly descriptions by extracting metadata from tools like Power BI. Governs and reuses data assets at scale.",
    status: "In use with clients",
    accent: C.lemon,
    capabilities: ["Extracts metadata from BI tools", "Human-readable descriptions", "Documentation at scale", "Data governance support"],
  },
  {
    name: "Data Quality Improver",
    area: "Data Governance",
    tagline: "Quality issues found and fixed before they compound",
    description: "Profiles your data, identifies quality gaps and drift, then recommends concrete fixes. Proactive quality management.",
    status: "In development",
    accent: C.turquoise,
    capabilities: ["Automated profiling & anomaly detection", "Quality scoring across domains", "Actionable fix recommendations", "Ongoing quality dashboards"],
  },
  {
    name: "Sales Prospector",
    area: "Customer Intelligence",
    tagline: "Your best leads found before your team picks up the phone",
    description: "AI agents scan LinkedIn, job ads, CRM data to find high-potential prospects. Leads arrive scored, ranked, and ready for outreach.",
    status: "In use internally",
    accent: C.lemon,
    capabilities: ["Scans LinkedIn, job ads, CRM", "Scores & ranks by fit and timing", "Personalized outreach drafts", "CRM integration"],
  },
];

/* ══════════════════════════════════════════════
   Anchor navigation pills
   ══════════════════════════════════════════════ */
const ANCHORS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Prove Value", href: "#prove-value" },
  { label: "Tools", href: "#tools" },
];

/* ══════════════════════════════════════════════
   Solution card — clean, scannable
   ══════════════════════════════════════════════ */
function DevSolutionCard({ solution, index, direction = "up" }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const dirMap = { left: { x: -40, y: 0 }, right: { x: 40, y: 0 }, up: { x: 0, y: 30 } };
  const from = dirMap[direction] || dirMap.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...from }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href={solution.slug}
        style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{
            background: C.white, borderRadius: CARD_BORDER_RADIUS,
            padding: "40px 32px", position: "relative", overflow: "hidden",
            border: `1px solid ${hovered ? `${C.black}22` : C.border}`,
            height: "100%", display: "flex", flexDirection: "column",
            boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          }}
        >
          {/* Background number */}
          <div style={{
            position: "absolute", top: 4, right: 12,
            fontSize: 120, fontWeight: 700, color: C.black,
            opacity: 0.025, pointerEvents: "none", lineHeight: 1,
          }}>{solution.id}</div>

          {/* Badge + timeline row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, position: "relative", zIndex: 1 }}>
            <span style={{
              display: "inline-block", padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS,
              background: C.lemon, fontSize: 11, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.06em",
            }}>{solution.badge}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: `${C.textMuted}99` }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/><path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {solution.timeline}
            </span>
          </div>

          {/* Tag as title */}
          <h3 style={{ fontSize: 28, fontWeight: 500, marginBottom: 20, letterSpacing: "-0.015em", lineHeight: 1.2, position: "relative", zIndex: 1 }}>
            {solution.tag}
          </h3>

          {/* Problem as quote */}
          <div style={{ marginBottom: 20, paddingLeft: 16, borderLeft: `2px solid ${C.border}`, position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: `${C.textMuted}cc`, fontStyle: "italic" }}>
              {"\u201C"}{solution.title}{"\u201D"}
            </p>
          </div>

          {/* Outcome */}
          <p style={{ fontSize: 17, lineHeight: 1.55, color: C.black, fontWeight: 500, flex: 1, position: "relative", zIndex: 1 }}>
            {solution.outcome}
          </p>

          {/* Footer */}
          <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", position: "relative", zIndex: 1 }}>
            View details
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ transition: "transform 0.25s ease", transform: hovered ? "translateX(4px)" : "none" }}>
              <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Hover lemon line */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, width: "100%", height: 3,
            background: C.lemon, transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left", transition: "transform 0.3s ease",
          }} />
        </motion.div>
      </a>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   Tool card — expandable spotlight
   ══════════════════════════════════════════════ */
function ToolSpotlight({ tool, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      style={{
        background: C.white, borderRadius: 20, overflow: "hidden",
        border: `1px solid ${isOpen ? `${C.black}22` : C.border}`,
        cursor: "pointer",
      }}
      whileHover={!isOpen ? { y: -2, boxShadow: "0 8px 32px rgba(0,0,0,0.06)" } : {}}
      onClick={onToggle}
    >
      {/* Header */}
      <div style={{ padding: "24px 28px", display: "flex", alignItems: "center", gap: 16 }}>
        {/* Accent dot */}
        <div style={{
          width: 44, height: 44, borderRadius: 12, background: tool.accent,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3v14M3 10h14" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" opacity={isOpen ? 0 : 0.6} style={{ transition: "opacity 0.3s" }} />
            <path d="M3 10h14" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" opacity={isOpen ? 0.6 : 0} style={{ transition: "opacity 0.3s" }} />
          </svg>
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 2 }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.01em" }}>{tool.name}</h3>
            <span style={{
              padding: "3px 10px", borderRadius: PILL_BORDER_RADIUS,
              background: `${tool.accent}66`, fontSize: 10, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em",
            }}>{tool.area}</span>
          </div>
          <p style={{ fontSize: 14, color: C.seawave, fontWeight: 500, fontStyle: "italic" }}>{tool.tagline}</p>
        </div>

        {/* Status */}
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "4px 12px", borderRadius: PILL_BORDER_RADIUS,
          border: `1px solid ${C.seawave}40`,
          fontSize: 11, fontWeight: 600, color: C.seawave,
          textTransform: "uppercase", letterSpacing: "0.04em",
          flexShrink: 0,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.seawave }} />
          {tool.status}
        </div>
      </div>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 28px 28px", borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: C.textMuted, maxWidth: 640, marginBottom: 20 }}>
                {tool.description}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {tool.capabilities.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: tool.accent === C.lemon ? C.seawave : tool.accent, flexShrink: 0 }} />
                    <span style={{ fontSize: 13.5, lineHeight: 1.5, color: C.black }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   Main Page — dev_solutions
   ══════════════════════════════════════════════ */
export default function DevSolutionsPage() {
  const [openTool, setOpenTool] = useState(0);

  /* Hero scroll parallax */
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef, offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 0.5], [0, 50]);

  return (
    <>
      {/* ═══════════════════════════════════
           HERO — Cinematic, with anchor nav
         ═══════════════════════════════════ */}
      <section ref={heroRef} className="dd-grain-drift" style={{
        paddingTop: 72, position: "relative", overflow: "hidden",
        background: C.white, minHeight: "90vh",
      }}>
        {/* Gradient blobs */}
        <div style={{ position: "absolute", top: -60, right: "10%", width: "45%", height: "55%", borderRadius: "50%", background: C.turquoise, opacity: 0.15, filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: "40%", height: "50%", borderRadius: "50%", background: C.lemon, opacity: 0.2, filter: "blur(100px)", pointerEvents: "none" }} />

        {/* Diagonal lines */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.025, backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='40' x2='40' y2='0' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "40px 40px" }} />

        {/* Dark overlay fade-out */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ position: "absolute", inset: 0, background: C.black, pointerEvents: "none", zIndex: 5 }}
        />

        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "120px 40px 0", position: "relative", zIndex: 2 }}>
            {/* Split layout: text left, illustration right */}
            <div className="dd-dev-sol-hero" style={{ display: "flex", alignItems: "center", gap: 40 }}>
              <div style={{ flex: 1 }}>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div style={{
                    display: "inline-flex", padding: "6px 18px", borderRadius: PILL_BORDER_RADIUS,
                    background: "rgba(0,0,0,0.06)", fontSize: 13, fontWeight: 500, color: C.black, marginBottom: 28,
                  }}>Solutions & Tools</div>
                </motion.div>

                <AnimatedHeadline
                  text="Your AI challenge has been solved before"
                  delay={0.2}
                  staggerMs={65}
                  style={{ fontSize: 58, maxWidth: 600, marginBottom: 28 }}
                />

                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 520, color: C.black, marginBottom: 36, fontWeight: 400 }}
                >
                  Find the problem closest to yours. You'll see how companies like yours tackled it, what the results looked like, and what your first weeks would look like.
                </motion.p>

                {/* Anchor nav pills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "flex", gap: 10 }}
                >
                  {ANCHORS.map((a, i) => (
                    <a key={i} href={a.href}
                      className="dd-btn-wipe"
                      style={{
                        display: "inline-block", padding: "12px 28px",
                        borderRadius: PILL_BORDER_RADIUS, fontSize: 14, fontWeight: 500,
                        textDecoration: "none", color: C.black,
                        background: i === 0 ? C.lemon : "transparent",
                        border: `1px solid ${i === 0 ? C.lemon : C.black}`,
                        transition: "all 0.2s",
                      }}
                    >{a.label}</a>
                  ))}
                </motion.div>
              </div>

              {/* Illustration — overlapping, floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ flex: 0.6, display: "flex", justifyContent: "center" }}
              >
                <div className="dd-float" style={{ position: "relative" }}>
                  <img src="/images/illustrations/DD-Illustration-1.png" alt="" style={{ width: "100%", maxWidth: 400, height: "auto" }} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Spacer for overlap into next section */}
        <div style={{ height: 60 }} />
      </section>

      {/* ═══════════════════════════════════
           CHART YOUR PATH — 2x2 staggered grid
         ═══════════════════════════════════ */}
      <section id="solutions" style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <div className="dd-dev-sol-section-header" style={{ display: "flex", alignItems: "flex-end", gap: 40, marginBottom: 52 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.seawave, marginBottom: 12 }}>01 / Plan</div>
                <h2 style={{ fontSize: 48, fontWeight: 400, letterSpacing: "-0.02em" }}>Chart your path</h2>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: C.textMuted, maxWidth: 440, paddingBottom: 4 }}>
                Know where you're going and how to get there. These solutions give you the clarity, foundation, and plan to become an AI-native organization.
              </p>
            </div>
          </Reveal>

          {/* 2x2 grid with staggered vertical offset */}
          <div className="dd-dev-sol-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {SOLUTIONS_PATH.map((s, i) => (
              <div key={s.slug} style={{ marginTop: i % 2 === 1 ? 32 : 0 }}>
                <DevSolutionCard solution={s} index={i} direction={i % 2 === 0 ? "left" : "right"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           START PROVING VALUE — darker tone, different rhythm
         ═══════════════════════════════════ */}
      <section id="prove-value" style={{ background: `linear-gradient(175deg, #f5f5f5 0%, #f0f0ec 100%)` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <div className="dd-dev-sol-section-header" style={{ display: "flex", alignItems: "flex-end", gap: 40, marginBottom: 52 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.seawave, marginBottom: 12 }}>02 / Deliver</div>
                <h2 style={{ fontSize: 48, fontWeight: 400, letterSpacing: "-0.02em" }}>Start proving value</h2>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: C.textMuted, maxWidth: 440, paddingBottom: 4 }}>
                Every AI-native journey starts with one working solution. Pick the problem that matters most today — each one is a stepping stone, not a standalone project.
              </p>
            </div>
          </Reveal>

          {/* 2x2 grid — offset inverted from section above */}
          <div className="dd-dev-sol-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {SOLUTIONS_VALUE.map((s, i) => (
              <div key={s.slug} style={{ marginTop: i % 2 === 0 ? 32 : 0 }}>
                <DevSolutionCard solution={s} index={i} direction={i % 2 === 0 ? "right" : "left"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           TOOLS — Accordion spotlight
         ═══════════════════════════════════ */}
      <section id="tools" style={{ background: C.white, position: "relative", overflow: "hidden" }}>
        {/* Subtle decorative blob */}
        <div style={{ position: "absolute", top: "15%", left: "-8%", width: 300, height: 300, borderRadius: "50%", background: C.lemon, opacity: 0.06, filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div className="dd-dev-sol-section-header" style={{ display: "flex", alignItems: "flex-end", gap: 40, marginBottom: 52 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.seawave, marginBottom: 12 }}>03 / Accelerate</div>
                <h2 style={{ fontSize: 48, fontWeight: 400, letterSpacing: "-0.02em" }}>The tools that make it faster</h2>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: C.textMuted, maxWidth: 440, paddingBottom: 4 }}>
                Purpose-built AI tools born from 50+ client engagements. Built into every engagement.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {TOOLS.map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.04}>
                <ToolSpotlight
                  tool={tool}
                  isOpen={openTool === i}
                  onToggle={() => setOpenTool(openTool === i ? -1 : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           CTA — Gradient with grain, centered
         ═══════════════════════════════════ */}
      <section className="dd-grain" style={{ background: `linear-gradient(135deg, ${C.lemon} 0%, ${C.turquoise} 100%)` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
          >
            <h2 style={{ fontSize: 44, fontWeight: 400, marginBottom: 16, letterSpacing: "-0.02em", maxWidth: 720 }}>
              Every solution is an entry point. The tools make it faster. The journey connects them all.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: C.textMuted, maxWidth: 600, marginBottom: 36 }}>
              You start with the problem that matters most today. Our tools accelerate the work from day one. And as you move from a single win to enterprise-wide AI, each solution builds on the last.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <a href="/services" style={{
                display: "inline-block", background: C.black, color: C.white,
                padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                fontWeight: 500, fontSize: 16, textDecoration: "none",
                transition: "all 0.2s ease",
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
              >See the full journey</a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                className="dd-btn-wipe"
                style={{
                  display: "inline-block", background: C.white, color: C.black,
                  padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                  border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                  textDecoration: "none", transition: "all 0.2s",
                }}
              >Book a call</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
