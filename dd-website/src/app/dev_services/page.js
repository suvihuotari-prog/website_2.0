"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { CountUp } from "@/components/CountUp";
import { TestimonialSpotlight } from "@/components/TestimonialSpotlight";
import { TestimonialCard } from "@/components/TestimonialCard";

/* ══════════════════════════════════════════════
   Data
   ══════════════════════════════════════════════ */
const STATS = [
  { number: "€200M+", label: "Revenue impact" },
  { number: "30+", label: "Board-approved roadmaps" },
  { number: "100+", label: "Companies accelerated" },
  { number: "50+", label: "AI solutions in production" },
];

const MATURITY_LEVELS = [
  {
    level: "01",
    title: "Automation",
    tagline: "AI does what a human would — faster",
    desc: "Document processing, report generation, data entry. Important, but this is digitalization with an AI layer.",
    color: C.lemon,
  },
  {
    level: "02",
    title: "Data-driven decisions",
    tagline: "AI recommends — humans decide",
    desc: "Where to invest, how to price, which customers to prioritize. Your people still make the call — but AI shows what they'd otherwise miss.",
    color: C.lemon,
  },
  {
    level: "03",
    title: "Autonomous operations",
    tagline: "AI runs the process — humans handle exceptions",
    desc: "AI manages end-to-end by default. Your team steps in only when judgment is needed. This is where real AI-native operations begin.",
    color: C.turquoise,
  },
  {
    level: "04",
    title: "Emergent business",
    tagline: "AI enables what couldn't exist without it",
    desc: "Entirely new service models, revenue streams, and business logic that simply couldn't exist without AI and data at the core.",
    color: C.seawave,
  },
];

const THREE_MODES = [
  {
    tag: "Advisory",
    color: C.lemon,
    headline: "You know exactly what to do — and why",
    lead: "Walk away with a prioritized AI roadmap, investment-ready business cases, and the confidence to move forward — in weeks, not quarters.",
    items: ["AI strategy & use case prioritization", "Business case development with clear ROI", "Data governance & ownership models", "Management workshops & training"],
    note: "30+ strategies delivered. 100+ companies trained.",
  },
  {
    tag: "Implementation",
    color: C.turquoise,
    headline: "Your AI solution is live — and delivering results",
    lead: "Go from concept to measurable impact — a working solution your teams actually use, with the data pipelines and monitoring to keep it running.",
    items: ["Custom ML & GenAI model development", "Data engineering & pipeline design", "Production deployment & MLOps", "Solution integration & change management"],
    note: "First solution in production within 1–3 months.",
  },
  {
    tag: "Embedded Resources",
    color: C.beige,
    headline: "You have senior AI expertise on your team — tomorrow",
    lead: "An experienced practitioner sits inside your organization — leading projects, building capabilities, and transferring knowledge from day one.",
    items: ["Interim CDO, AI lead, or data lead", "Senior practitioners embedded in your team", "Data engineers & ML engineers for projects", "Knowledge transfer & capability building"],
    note: "When it ends, your team is stronger than when it started.",
  },
];

const JOURNEY_PHASES = [
  {
    label: "Find your starting point",
    timeframe: "Weeks 1–4",
    heading: "You know exactly where AI creates the most value",
    description: "Your business processes are mapped, highest-impact opportunities identified, and a roadmap built that your board will approve.",
    modes: [
      { tag: "Advisory", color: C.lemon, text: "AI strategy sprint — use case discovery, prioritization, investment-ready business cases" },
    ],
    outcome: "You leave with a prioritized AI roadmap and a clear first project — approved and funded.",
  },
  {
    label: "Prove value fast",
    timeframe: "Months 1–3",
    heading: "Your first AI solution is live — and your board sees the results",
    description: "The highest-priority use case goes from concept to production. The solution connects to broader business goals while delivering measurable results.",
    modes: [
      { tag: "Implementation", color: C.turquoise, text: "First AI solution built, tested, and deployed to production" },
      { tag: "Advisory", color: C.lemon, text: "Business case refinement, stakeholder alignment, change management" },
    ],
    outcome: "You have a working system, measurable impact, and the momentum to scale further.",
  },
  {
    label: "Scale across the business",
    timeframe: "Months 3–12",
    heading: "AI spreads from one win to multiple business areas",
    description: "Multiple projects run in parallel — new use cases, new teams, new data domains. Each project builds toward enterprise-wide capability.",
    modes: [
      { tag: "Implementation", color: C.turquoise, text: "Multiple AI projects running in parallel across business areas" },
      { tag: "Embedded Resources", color: C.beige, text: "Data engineers and ML engineers accelerate your delivery capacity" },
      { tag: "Advisory", color: C.lemon, text: "Enterprise AI vision, data governance, organizational readiness" },
    ],
    outcome: "AI is working in multiple areas, your internal team is growing stronger, and the ROI compounds.",
  },
  {
    label: "AI becomes your operating model",
    timeframe: "Year 1+",
    heading: "AI isn't a project anymore — it's how your organization works",
    description: "AI runs core processes, informs every major decision, and enables business models your competitors can't replicate.",
    modes: [
      { tag: "Embedded Resources", color: C.beige, text: "Interim AI leadership shapes your organization and culture" },
      { tag: "Implementation", color: C.turquoise, text: "AI-native processes running autonomously at scale" },
      { tag: "Advisory", color: C.lemon, text: "Continuous strategy evolution as new opportunities emerge" },
    ],
    outcome: "You operate as an AI-native organization — with capabilities that couldn't exist without AI at the core.",
  },
];

const STEPS = [
  { step: "01", title: "You describe the challenge", desc: "A 30-minute call. You'll know if this is worth pursuing — and what the fastest path looks like." },
  { step: "02", title: "You leave with a plan", desc: "A focused scoping workshop — usually 1–2 days. Defined problem, clear data picture, an approach you believe in." },
  { step: "03", title: "You decide, we move", desc: "Exact scope, timeline, team, and investment. No surprises. You give the green light, results start fast." },
  { step: "04", title: "You show your board results", desc: "Something working, something measurable, and something you can present — not a report that sits on a shelf." },
];

const WHY_ITEMS = [
  { title: "You work with the people who do the work", body: "The people in your kickoff are the people who deliver. Senior practitioners with 20+ years average experience from day one.", accent: C.lemon },
  { title: "Your strategy becomes a working solution", body: "The roadmap your board approves is the one that gets built. Strategy and implementation move together.", accent: C.turquoise },
  { title: "Your projects move in weeks, not quarters", body: "Our own AI tools accelerate every phase — from analysis to prototype to production.", accent: C.lemon },
  { title: "Your investment targets the right problem first", body: "Impact is quantified before anything gets built, so you invest where it matters most.", accent: C.turquoise },
  { title: "You pay for results, not layers of management", body: "Lean team, fast decisions, direct access. Your investment goes to senior expertise — not overhead.", accent: C.lemon },
  { title: "Your team learns to run it without us", body: "Every engagement is built around co-creation and capability transfer. When it ends, you own it.", accent: C.turquoise },
];

/* ══════════════════════════════════════════════
   Maturity Level Card — horizontal, editorial
   ══════════════════════════════════════════════ */
function MaturityCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="dd-dev-maturity-card"
      style={{
        display: "flex", alignItems: "stretch", gap: 0,
        background: C.white, borderRadius: 24, overflow: "hidden",
        border: `1px solid ${C.border}`,
      }}
    >
      {/* Level number — tall accent strip */}
      <div style={{
        width: 100, flexShrink: 0,
        background: item.color,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{
          fontSize: 56, fontWeight: 700, color: item.color === C.seawave ? C.white : C.black,
          opacity: item.color === C.seawave ? 1 : 0.5, letterSpacing: "-0.03em",
        }}>{item.level}</span>
      </div>
      {/* Content */}
      <div style={{ padding: "32px 36px", flex: 1 }}>
        <h3 style={{ fontSize: 24, fontWeight: 500, marginBottom: 4, letterSpacing: "-0.01em" }}>{item.title}</h3>
        <p style={{ fontSize: 14, fontStyle: "italic", color: C.seawave, marginBottom: 14, fontWeight: 500 }}>{item.tagline}</p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: C.textMuted }}>{item.desc}</p>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   Delivery Mode — expandable accordion
   ══════════════════════════════════════════════ */
function DeliveryMode({ mode, index, isOpen, onToggle }) {
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
      {/* Header — always visible */}
      <div style={{ padding: "28px 32px", display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{
          padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS,
          background: mode.color, fontSize: 12, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.06em",
          flexShrink: 0,
        }}>{mode.tag}</div>
        <h3 style={{ fontSize: 20, fontWeight: 500, flex: 1, letterSpacing: "-0.01em" }}>{mode.headline}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            width: 36, height: 36, borderRadius: 10,
            background: isOpen ? C.lemon : C.gray,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke={C.black} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </motion.div>
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
            <div style={{ padding: "0 32px 32px", borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: C.textMuted, maxWidth: 640, marginBottom: 24 }}>
                {mode.lead}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
                {mode.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: mode.color === C.beige ? C.seawave : mode.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: C.black }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: C.seawave, fontWeight: 600, fontStyle: "italic" }}>{mode.note}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   Journey phase — vertical timeline, editorial
   ══════════════════════════════════════════════ */
function JourneyPhase({ phase, index, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const nodeColors = [C.lemon, C.lemon, C.turquoise, C.seawave];
  const nodeColor = nodeColors[index] || C.border;
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="dd-dev-journey-phase"
      style={{ display: "flex", gap: 36, position: "relative" }}
    >
      {/* Left — vertical line + node */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        width: 56, flexShrink: 0,
      }}>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 300 }}
          style={{
            width: 56, height: 56, borderRadius: "50%",
            background: isLast ? C.seawave : C.white,
            border: `3px solid ${isLast ? C.seawave : nodeColor}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontWeight: 700,
            color: isLast ? C.white : C.black,
            zIndex: 2, position: "relative",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          }}
        >{index + 1}</motion.div>
        {index < total - 1 && (
          <div style={{
            width: 2, flex: 1, marginTop: 0,
            background: C.border,
            opacity: 0.6,
          }} />
        )}
      </div>

      {/* Right — content */}
      <div style={{ paddingBottom: index < total - 1 ? 56 : 0, flex: 1, paddingTop: 6 }}>
        {/* Meta line */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <span style={{
            fontSize: 12, fontWeight: 700, color: C.textMuted,
            textTransform: "uppercase", letterSpacing: "0.08em",
            opacity: 0.5,
          }}>
            {phase.timeframe}
          </span>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.border }} />
          <span style={{ fontSize: 13, fontWeight: 500, color: C.textMuted, opacity: 0.7 }}>{phase.label}</span>
        </div>

        <h3 style={{ fontSize: 24, fontWeight: 500, marginBottom: 12, letterSpacing: "-0.015em", lineHeight: 1.3 }}>
          {phase.heading}
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textMuted, maxWidth: 580, marginBottom: 24 }}>
          {phase.description}
        </p>

        {/* Deliverables — clean checkmark list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
          {phase.modes.map((m, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{
                width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1,
                background: `${m.color === C.beige ? C.seawave : m.color}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 4" stroke={m.color === C.beige ? C.seawave : m.color === C.lemon ? C.black : m.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: C.textMuted, opacity: 0.6 }}>
                  {m.tag}
                </span>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: C.black, fontWeight: 500, marginTop: 1 }}>
                  {m.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Outcome — editorial left-border highlight */}
        <div style={{
          paddingLeft: 24, paddingTop: 4, paddingBottom: 4,
          borderLeft: `4px solid ${C.lemon}`,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.5 }}>
              <circle cx="12" cy="12" r="10" stroke={C.seawave} strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" fill={C.seawave}/>
            </svg>
            <span style={{
              fontSize: 11, fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.1em", color: C.textMuted, opacity: 0.45,
            }}>The outcome</span>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: C.black, fontWeight: 500 }}>
            {phase.outcome}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   Main Page — dev_services
   ══════════════════════════════════════════════ */
export default function DevServicesPage() {
  const [openMode, setOpenMode] = useState(0);

  /* Hero scroll parallax */
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 0.5], [0, 60]);

  return (
    <>
      {/* ═══════════════════════════════════
           SECTION 1: HERO — Cinematic, typographic
         ═══════════════════════════════════ */}
      <section ref={heroRef} className="dd-grain-drift" style={{
        paddingTop: 72,
        position: "relative", overflow: "hidden",
        background: C.white,
        minHeight: "100vh",
      }}>
        {/* Gradient blobs — asymmetric, overlapping */}
        <div style={{
          position: "absolute", top: -80, left: "-8%",
          width: "55%", height: "65%", borderRadius: "50%",
          background: C.lemon, opacity: 0.22, filter: "blur(120px)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "-5%",
          width: "40%", height: "50%", borderRadius: "50%",
          background: C.turquoise, opacity: 0.15, filter: "blur(100px)",
          pointerEvents: "none",
        }} />

        {/* Diagonal lines — directional energy */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='40' x2='40' y2='0' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }} />

        {/* Dark overlay fade-out */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute", inset: 0,
            background: C.black, pointerEvents: "none", zIndex: 5,
          }}
        />

        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
          <div style={{
            maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto",
            padding: "140px 40px 0", position: "relative", zIndex: 2,
          }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{
                display: "inline-flex", padding: "6px 18px", borderRadius: PILL_BORDER_RADIUS,
                background: "rgba(0,0,0,0.06)", fontSize: 13, fontWeight: 500,
                color: C.black, marginBottom: 28,
              }}>AI Advisory & Implementation Agency</div>
            </motion.div>

            {/* Title — large, typographic */}
            <div style={{ maxWidth: "75%", marginBottom: 32 }}>
              <AnimatedHeadline
                text="Your path from first AI win to AI-native organization"
                delay={0.2}
                staggerMs={60}
              />
            </div>

            {/* Subtitle — blur to sharp */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 19, lineHeight: 1.7, maxWidth: 640,
                color: C.black, marginBottom: 40, fontWeight: 400,
              }}
            >
              Start with a single high-impact problem. See results in weeks. Then scale AI across your business — with strategy and implementation moving together.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.0 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-block", background: C.black, color: C.white,
                  padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                  fontWeight: 500, fontSize: 16, textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
              >Book a free call</a>
              <a href="/customer-stories"
                className="dd-btn-wipe"
                style={{
                  display: "inline-block", background: "transparent", color: C.black,
                  padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                  border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                  textDecoration: "none", transition: "all 0.2s",
                }}
              >See customer stories</a>
            </motion.div>
          </div>

          {/* Stats — floating strip */}
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "64px 40px 0", position: "relative", zIndex: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{
                display: "flex", justifyContent: "space-between", gap: 20,
                marginBottom: -40,
              }}>
                {STATS.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    style={{
                      flex: 1, textAlign: "center", padding: "24px 16px",
                      background: C.white, borderRadius: 16,
                      border: `1px solid ${C.border}`,
                      boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 2 }}>
                      <CountUp value={s.number} />
                    </div>
                    <div style={{ fontSize: 12, color: C.textMuted, fontWeight: 400 }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 2: MATURITY — Horizontal cards with accent strips
         ═══════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(180deg, #f8f8f6 0%, ${C.white} 100%)`,
        paddingTop: 80,
      }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "0 40px 88px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 60, marginBottom: 52 }}>
              <h2 style={{ fontSize: 48, fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Your path to<br />AI-native
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: C.textMuted, maxWidth: 440, paddingBottom: 4 }}>
                Most organizations are at Level 1 or 2 — and that's exactly the right place to start.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {MATURITY_LEVELS.map((item, i) => (
              <MaturityCard key={i} item={item} index={i} />
            ))}
          </div>

          <Reveal delay={0.2}>
            <div style={{
              marginTop: 24, padding: "18px 28px",
              background: C.beige, borderRadius: 14,
              fontSize: 14.5, color: C.textMuted, lineHeight: 1.6,
            }}>
              You move up deliberately, proving value at each stage before scaling further.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 3: THREE WAYS — Accordion on lemon
         ═══════════════════════════════════ */}
      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Three ways to get there
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 48 }}>
              Whether you need clarity on where to start, a working solution in production, or experienced people inside your team — you choose how deep we go.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {THREE_MODES.map((mode, i) => (
              <DeliveryMode
                key={i}
                mode={mode}
                index={i}
                isOpen={openMode === i}
                onToggle={() => setOpenMode(openMode === i ? -1 : i)}
              />
            ))}
          </div>

          <Reveal delay={0.15}>
            <div style={{
              textAlign: "center", marginTop: 28, padding: "18px 28px",
              background: "rgba(255,255,255,0.65)", borderRadius: 14,
              fontSize: 14.5, color: C.textMuted, lineHeight: 1.6,
            }}>
              Most engagements start with a focused advisory phase, then move into implementation. You can also bring us in mid-journey or embed our people to accelerate.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 4: JOURNEY — Vertical timeline
         ═══════════════════════════════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Your journey to AI-native
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 56 }}>
              Every organization's path is different, but the pattern is the same — start focused, prove value, then scale deliberately.
            </p>
          </Reveal>

          <div style={{ maxWidth: 780 }}>
            {JOURNEY_PHASES.map((phase, i) => (
              <JourneyPhase key={i} phase={phase} index={i} total={JOURNEY_PHASES.length} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 5: HOW IT STARTS — Numbered steps, editorial
         ═══════════════════════════════════ */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 4, letterSpacing: "-0.02em" }}>
              Here's how it starts
            </h2>
            <p style={{ fontSize: 20, lineHeight: 1.4, color: C.textMuted, marginBottom: 56 }}>
              No procurement circus. No 40-page RFP. Just a conversation.
            </p>
          </Reveal>

          <div className="dd-steps-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
          }}>
            {STEPS.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(0,0,0,0.06)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{
                    background: C.white, borderRadius: 20, padding: "32px 24px",
                    height: "100%", position: "relative", overflow: "hidden",
                  }}
                >
                  {/* Background number */}
                  <div style={{
                    position: "absolute", top: -8, right: 8,
                    fontSize: 100, fontWeight: 700, color: C.black,
                    opacity: 0.025, pointerEvents: "none", lineHeight: 1,
                  }}>{item.step}</div>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: C.lemon, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 18, fontWeight: 700,
                    marginBottom: 20,
                  }}>{item.step}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, position: "relative" }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, position: "relative" }}>{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 6: WHY US — Bento grid with alternating accents
         ═══════════════════════════════════ */}
      <section style={{ background: C.white, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "20%", right: "3%",
          width: 300, height: 300, borderRadius: "50%",
          background: C.turquoise, opacity: 0.06, filter: "blur(80px)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              What working with us feels like
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              No surprises, no wasted months. Here's what our clients experience.
            </p>
          </Reveal>

          <div className="dd-why-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
          }}>
            {WHY_ITEMS.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} direction={i < 3 ? "left" : "right"}>
                <motion.div
                  whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(0,0,0,0.06)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{
                    background: C.gray, borderRadius: 16, padding: "28px 24px",
                    borderTop: `3px solid ${item.accent}`, height: "100%",
                    marginTop: i % 2 === 1 ? 24 : 0,
                  }}
                >
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 7: TESTIMONIALS
         ═══════════════════════════════════ */}
      <section className="dd-grain-subtle" style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em" }}>What our clients say</h2>
          </Reveal>

          <TestimonialSpotlight
            quote="The engagement was comprehensive and professionally planned, significantly advancing our AI development. The clarity of the workshops and tools was impressive."
            highlight="significantly advancing our AI development."
            name="Kati Kinnunen"
            photo="/images/people/kati_kinnunen.png"
            title="Chief Digital Officer"
            company="Helen"
            logo="/images/logos/Helen_BW.png"
          />

          <div className="dd-testimonials-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20,
          }}>
            <Reveal delay={0.1}>
              <TestimonialCard
                quote="Our loyalty customers now get offers they care about. This means more visits, more sales, and 256% more coupon use. We turned customer insights into action — and real business results."
                name="Tuomas Vihavainen"
                title="Head of Group Analytics"
                company="Tokmanni"
                logo="/images/logos/Tokmanni_BW.png"
              />
            </Reveal>
            <Reveal delay={0.17}>
              <TestimonialCard
                quote="Many consultants speak 'digital language' to us. Data Design understood how to communicate with our business people."
                title="Client executive"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 8: CTA — Custom, immersive
         ═══════════════════════════════════ */}
      <section style={{ padding: "40px 0", background: C.white }}>
        <Reveal>
          <div style={{
            display: "flex", minHeight: "clamp(520px, 55vw, 700px)", overflow: "hidden",
          }}>
            {/* Left — lemon with breathing scale */}
            <motion.div
              initial={{ scale: 0.97 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                flex: 1, position: "relative",
                background: `radial-gradient(circle at 30% 40%, #f0ffb3, ${C.lemon})`,
                borderTopRightRadius: "100%", borderBottomRightRadius: "100%",
                padding: "clamp(40px, 6vw, 80px)",
                display: "flex", flexDirection: "column", justifyContent: "center",
              }}
            >
              <div style={{ position: "relative", zIndex: 1, maxWidth: 480 }}>
                <h2 style={{ fontSize: 52, fontWeight: 400, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em" }}>
                  Not sure where to start?
                </h2>
                <p style={{ fontSize: 18, lineHeight: 1.6, color: C.textMuted, marginBottom: 40 }}>
                  In 30 minutes, you'll know your single highest-impact AI opportunity — and what it would take to make it real. No pitch, no pressure.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                    className="dd-btn-wipe"
                    style={{
                      display: "inline-block", background: C.white, color: C.black,
                      padding: "16px 36px", borderRadius: PILL_BORDER_RADIUS,
                      border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                  >Book a call</a>
                  <a href="/solutions"
                    className="dd-btn-wipe"
                    style={{
                      display: "inline-block", background: C.white, color: C.black,
                      padding: "16px 36px", borderRadius: PILL_BORDER_RADIUS,
                      border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                  >See our solutions</a>
                </div>
              </div>
            </motion.div>

            {/* Right — illustration with float */}
            <div style={{
              flex: 1, position: "relative", background: C.gray,
              borderTopLeftRadius: "100%", borderBottomLeftRadius: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div className="dd-float">
                <img src="/images/illustrations/DD-Illustration-2.png" alt="" style={{ width: "80%", height: "auto", maxWidth: 400 }} />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
