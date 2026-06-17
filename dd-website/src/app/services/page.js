"use client";

import { useState } from "react";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialSpotlight } from "@/components/TestimonialSpotlight";
import { TestimonialCard } from "@/components/TestimonialCard";

/* ══════════════════════════════════════════════
   Journey phases. Interactive timeline
   ══════════════════════════════════════════════ */
const JOURNEY_PHASES = [
  {
    label: "Find your starting point",
    timeframe: "Weeks 1–4",
    heading: "You know exactly where AI creates the most value",
    description: "Your business processes are mapped, highest-impact opportunities identified, and a roadmap built that your board will approve. You stop guessing and start with clarity.",
    modes: [
      { tag: "Advisory", color: C.lemon, text: "AI strategy sprint. Use case discovery, prioritization, investment-ready business cases" },
    ],
    outcome: "You leave with a prioritized AI roadmap and a clear first project. Approved and funded.",
    organization: "Leadership is aligned on AI priorities. The team that will own the first project is identified.",
  },
  {
    label: "Prove value fast",
    timeframe: "Months 1–3",
    heading: "Your first AI solution is live. And your board sees the results",
    description: "The highest-priority use case goes from concept to production. The solution connects to broader business goals while delivering measurable results your organization can see.",
    modes: [
      { tag: "Implementation", color: C.turquoise, text: "First AI solution built, tested, and deployed to production" },
      { tag: "Advisory", color: C.lemon, text: "Business case refinement, stakeholder alignment, change management" },
    ],
    outcome: "You have a working system, measurable impact, and the momentum to scale further.",
    organization: "Business users are working with AI outputs daily. Your team understands what it takes to build and maintain an AI solution. Skeptics start paying attention.",
  },
  {
    label: "Scale across the business",
    timeframe: "Months 3–12",
    heading: "AI spreads from one win to multiple business areas",
    description: "With the first win proven, you expand. Multiple projects run in parallel. New use cases, new teams, new data domains. Each project builds toward an enterprise-wide capability, not a collection of disconnected experiments.",
    modes: [
      { tag: "Implementation", color: C.turquoise, text: "Multiple AI projects running in parallel across business areas" },
      { tag: "Embedded Resources", color: C.beige, text: "Data engineers and ML engineers accelerate your delivery capacity" },
      { tag: "Advisory", color: C.lemon, text: "Enterprise AI vision, data governance, organizational readiness" },
    ],
    outcome: "AI is working in multiple areas, your internal team is growing stronger, and the ROI compounds.",
    organization: "Data governance is in place. Roles are evolving. Some people now manage AI processes instead of doing the work manually. You have a repeatable way to evaluate, build, and launch AI solutions. Internal capability is growing.",
  },
  {
    label: "AI becomes your operating model",
    timeframe: "Year 1+",
    heading: "AI isn't a project anymore. It's how your organization works",
    description: "AI runs core processes, informs every major decision, and enables business models your competitors can't replicate. Your team owns it.",
    modes: [
      { tag: "Embedded Resources", color: C.beige, text: "Interim AI leadership shapes your organization and culture" },
      { tag: "Implementation", color: C.turquoise, text: "AI-native processes running autonomously at scale" },
      { tag: "Advisory", color: C.lemon, text: "Continuous strategy evolution as new opportunities emerge" },
    ],
    outcome: "You operate as an AI-native organization. With capabilities that couldn't exist without AI at the core.",
    organization: "AI is everyone's tool, not the data team's project. Decision rights are clear. New hires are expected to work with AI from day one. Your operating model has fundamentally changed. And your competitors are still running pilots.",
  },
];

function JourneySection() {
  const [active, setActive] = useState(0);
  const phase = JOURNEY_PHASES[active];

  return (
    <section style={{ background: C.white }}>
      <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
        <Reveal>
          <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
            Your journey to AI-native
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
            Every organization's path is different, but the pattern is the same. Start focused, prove value, then scale deliberately.
          </p>
        </Reveal>

        {/* Phase selector. Interactive timeline */}
        <Reveal delay={0.1}>
          <div style={{ position: "relative", marginBottom: 40 }}>
            {/* Connecting line */}
            <div style={{
              position: "absolute", top: 20, left: "6%", right: "6%", height: 3,
              background: C.border, borderRadius: 2, zIndex: 0,
            }} />
            {/* Progress fill */}
            <div style={{
              position: "absolute", top: 20, left: "6%", height: 3,
              width: `${(active / (JOURNEY_PHASES.length - 1)) * 88}%`,
              background: `linear-gradient(to right, ${C.lemon}, ${C.seawave})`,
              borderRadius: 2, zIndex: 1, transition: "width 0.5s ease",
            }} />

            <div className="dd-journey-phases" style={{
              display: "grid", gridTemplateColumns: `repeat(${JOURNEY_PHASES.length}, 1fr)`,
              position: "relative", zIndex: 2,
            }}>
              {JOURNEY_PHASES.map((p, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      display: "flex", flexDirection: "column", alignItems: "center",
                      padding: "0 8px", fontFamily: "inherit",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* Node */}
                    <div style={{
                      width: isActive ? 42 : 36, height: isActive ? 42 : 36,
                      borderRadius: "50%",
                      background: isActive ? C.seawave : isPast ? C.lemon : C.white,
                      border: `3px solid ${isActive ? C.seawave : isPast ? C.lemon : C.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, fontWeight: 700,
                      color: isActive ? C.white : isPast ? C.black : C.textMuted,
                      marginBottom: 12, transition: "all 0.3s ease",
                      boxShadow: isActive ? "0 4px 16px rgba(83,127,123,0.25)" : "0 2px 6px rgba(0,0,0,0.04)",
                    }}>{i + 1}</div>

                    {/* Label */}
                    <span style={{
                      fontSize: 13, fontWeight: isActive ? 600 : 400,
                      color: isActive ? C.black : C.textMuted,
                      textAlign: "center", lineHeight: 1.3,
                      transition: "all 0.3s ease",
                    }}>{p.label}</span>

                    {/* Timeframe */}
                    <span style={{
                      fontSize: 11, color: isActive ? C.seawave : `${C.black}44`,
                      marginTop: 4, fontWeight: 500, transition: "all 0.3s ease",
                    }}>{p.timeframe}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Phase detail panel */}
        <Reveal delay={0.15}>
          <div
            key={active}
            style={{
              background: C.gray, borderRadius: 24, padding: "40px 36px",
              border: `1px solid ${C.border}`,
              animation: "ddFadeUp 0.35s ease",
            }}
          >
            {/* Heading */}
            <h3 style={{
              fontSize: 26, fontWeight: 400, marginBottom: 14,
              letterSpacing: "-0.01em", lineHeight: 1.3,
            }}>{phase.heading}</h3>
            <p style={{
              fontSize: 15, lineHeight: 1.65, color: C.textMuted,
              maxWidth: 720, marginBottom: 28,
            }}>{phase.description}</p>

            {/* Active delivery modes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {phase.modes.map((mode, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  padding: "16px 20px", background: C.white, borderRadius: 14,
                  border: `1px solid ${C.border}`,
                }}>
                  <span style={{
                    padding: "4px 12px", borderRadius: PILL_BORDER_RADIUS, background: mode.color,
                    fontSize: 11, fontWeight: 600, textTransform: "uppercase",
                    letterSpacing: "0.06em", whiteSpace: "nowrap", flexShrink: 0,
                  }}>{mode.tag}</span>
                  <span style={{ fontSize: 14, lineHeight: 1.55, color: C.textMuted }}>{mode.text}</span>
                </div>
              ))}
            </div>

            {/* Outcome */}
            <div style={{
              padding: "18px 22px", background: C.beige, borderRadius: 12,
              borderLeft: `3px solid ${C.seawave}`,
            }}>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: C.black, fontWeight: 500 }}>
                {phase.outcome}
              </p>
            </div>

            {/* Your organization */}
            {phase.organization && (
              <div style={{ marginTop: 16 }}>
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}55`, display: "block", marginBottom: 6 }}>Your organization</span>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted }}>
                  {phase.organization}
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="AI Advisory & Implementation Agency"
        titleSize={64}
        subtitleDark
        blobs={2}
        image="/images/illustrations/DD-Illustration-2.png"
        title="Your path from first AI win to AI-native organization"
        subtitle="Start with a single high-impact problem. See results in weeks. Then scale AI across your business. With strategy and implementation moving together, not apart."
        primaryButton={{ label: "Book a free call", href: CALENDLY_URL }}
        secondaryButton={{ label: "See customer stories", href: "/customer-stories" }}
      />

      {/* YOUR PATH TO AI-NATIVE */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Your path to AI-native</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 680, marginBottom: 56 }}>
              Most organizations think AI means automating what humans already do. That's just level one. The real transformation happens when AI starts making decisions, running processes, and enabling business models that couldn't exist without it.
            </p>
          </Reveal>

          {/* Horizontal timeline */}
          <div className="dd-path-timeline" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, position: "relative" }}>
              {/* Connecting line */}
              <div className="dd-path-line" style={{
                position: "absolute", top: 24, left: "calc(12.5% + 12px)", right: "calc(12.5% + 12px)", height: 3,
                background: `linear-gradient(to right, ${C.lemon}, ${C.seawave})`,
                borderRadius: 2, zIndex: 0,
              }} />

              {[
                {
                  level: "1",
                  title: "Automation",
                  tagline: "AI does what a human would. Faster",
                  desc: "Document processing, report generation, data entry. Handled automatically. Important, but this is digitalization with an AI layer.",
                  people: "A small team runs AI projects. The rest of the organization watches from a distance.",
                  outcome: "Your team stops doing work a machine should handle.",
                },
                {
                  level: "2",
                  title: "Data-driven decisions",
                  tagline: "AI recommends. Humans decide",
                  desc: "Where to invest, how to price, which customers to prioritize. Your people still make the call. But AI shows what they'd otherwise miss.",
                  people: "Business teams start trusting and using AI outputs in their daily decisions. Data literacy grows.",
                  outcome: "Better decisions because you see what was previously invisible.",
                },
                {
                  level: "3",
                  title: "Autonomous operations",
                  tagline: "AI runs the process. Humans handle exceptions",
                  desc: "AI manages end-to-end by default. Your team steps in only when judgment is needed. This is where real AI-native operations begin.",
                  people: "Roles shift from doing the work to managing AI that does the work. New capabilities emerge: AI oversight, exception handling, continuous improvement.",
                  outcome: "Processes run without human intervention. Your team focuses on the work that actually requires them.",
                },
                {
                  level: "4",
                  title: "Emergent business",
                  tagline: "AI enables what couldn't exist without it",
                  desc: "Entirely new service models, revenue streams, and business logic that simply couldn't exist without AI and data at the core.",
                  people: "AI thinking is embedded in how the entire organization innovates, decides, and operates. It's no longer a function. It's a capability everyone uses.",
                  outcome: "You do something your competitors can't do at all.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.15} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1, flex: 1 }}>
                  {/* Node circle */}
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: i === 0 ? C.lemon : i === 3 ? C.seawave : C.white,
                    border: `3px solid ${i <= 1 ? C.lemon : C.seawave}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 700, color: i === 3 ? C.white : C.black,
                    flexShrink: 0, marginBottom: 20,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}>{item.level}</div>

                  {/* Card content */}
                  <div style={{
                    background: C.gray, borderRadius: 14, padding: "22px 20px",
                    width: "100%", flex: 1,
                    borderTop: `3px solid ${i <= 1 ? C.lemon : C.seawave}`,
                  }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, lineHeight: 1.3 }}>{item.title}</h3>
                    <p style={{ fontSize: 12, fontStyle: "italic", color: C.seawave, marginBottom: 12 }}>{item.tagline}</p>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: C.textMuted, marginBottom: 14 }}>{item.desc}</p>
                    <div style={{ marginBottom: 14, padding: "10px 12px", background: C.beige, borderRadius: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}55`, display: "block", marginBottom: 4 }}>Your people</span>
                      <p style={{ fontSize: 12.5, lineHeight: 1.5, color: C.textMuted }}>{item.people}</p>
                    </div>
                    <p style={{ fontSize: 12.5, lineHeight: 1.5, color: C.seawave, fontWeight: 500 }}>{item.outcome}</p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>

          <Reveal delay={0.25}>
            <div style={{ textAlign: "center", marginTop: 32, padding: "20px 28px", background: C.beige, borderRadius: 14 }}>
              <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6 }}>
                Most organizations are at Level 1 or 2. And that's exactly the right place to start. You move up deliberately, proving value at each stage before scaling further.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THREE WAYS TO GET THERE */}
      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Three ways to get there</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Whether you need clarity on where to start, a working solution in production, or experienced people inside your team. You choose how deep we go.
            </p>
          </Reveal>

          <div className="dd-delivery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <Reveal delay={0.05}>
              <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "40px 32px", border: `1px solid ${C.border}`, height: "100%" }}>
                <div style={{ display: "inline-flex", padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS, background: C.lemon, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>Advisory</div>
                <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 14, letterSpacing: "-0.01em" }}>You know exactly what to do. And why</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  Walk away with a prioritized AI roadmap, investment-ready business cases, and the confidence to move forward. In weeks, not quarters.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {["AI strategy & use case prioritization", "Business case development with clear ROI", "Data governance & ownership models", "Technology assessment & architecture", "Management workshops & training"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 7, height: 7, borderRadius: 2, background: C.black, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                {/* Proven formats */}
                <div style={{ padding: "18px 20px", background: C.beige, borderRadius: 12 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}66`, marginBottom: 12 }}>Proven formats</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <p style={{ fontSize: 13, lineHeight: 1.55, color: C.textMuted }}>
                      <strong style={{ color: C.black }}>Data & AI Strategy Sprint</strong>. From zero to board-ready AI roadmap in 6–8 weeks. 30+ delivered.
                    </p>
                    <p style={{ fontSize: 13, lineHeight: 1.55, color: C.textMuted }}>
                      <strong style={{ color: C.black }}>AI Accelerator Program</strong>. Your leadership team goes from AI-curious to AI-ready in 1–2 days. 100+ companies trained. <a href="/solutions/ai-accelerator" className="dd-link-hover" style={{ color: C.seawave, fontWeight: 500, textDecoration: "none" }}>Learn more →</a>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "40px 32px", border: `1px solid ${C.border}`, height: "100%" }}>
                <div style={{ display: "inline-flex", padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS, background: C.turquoise, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>Implementation</div>
                <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 14, letterSpacing: "-0.01em" }}>Your AI solution is live. And delivering results</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  Go from concept to measurable impact. A working solution your teams actually use, with the data pipelines and monitoring to keep it running.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {["Custom ML & GenAI model development", "Data engineering & pipeline design", "Production deployment & MLOps", "Solution integration & change management", "Ongoing support & model monitoring"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 7, height: 7, borderRadius: 2, background: C.black, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: C.seawave, fontWeight: 500 }}>
                  Typical timeline: First solution in production within 1–3 months.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "40px 32px", border: `1px solid ${C.border}`, height: "100%" }}>
                <div style={{ display: "inline-flex", padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS, background: C.beige, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>Embedded Resources</div>
                <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 14, letterSpacing: "-0.01em" }}>You have senior AI expertise on your team. Tomorrow</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  An experienced practitioner sits inside your organization. Leading projects, building capabilities, and transferring knowledge from day one. When the engagement ends, your team is stronger than when it started.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Interim CDO, AI lead, or data lead", "Senior practitioners embedded in your team", "Data engineers & ML engineers for projects", "Knowledge transfer & capability building", "Flexible engagement models"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 7, height: 7, borderRadius: 2, background: C.black, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/company/about" className="dd-link-hover" style={{ display: "inline-block", marginTop: 20, fontSize: 14, color: C.seawave, fontWeight: 500, textDecoration: "none" }}>Meet our team →</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 32, padding: "20px 28px", background: "rgba(255,255,255,0.7)", borderRadius: 14 }}>
              <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6 }}>
                Most engagements start with a focused advisory phase, then move into implementation. You can also bring us in mid-journey if you already know what needs building. Or embed our people to accelerate what you've already started.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* YOUR JOURNEY TO AI-NATIVE */}
      <JourneySection />

      {/* HERE'S HOW IT STARTS */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Here's how it starts</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 600, marginBottom: 52 }}>
              No procurement circus. No 40-page RFP. Just a conversation.
            </p>
          </Reveal>

          <div className="dd-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { step: "1", title: "You describe the challenge", desc: "A 30-minute call where you walk us through what you're trying to solve. You'll know if this is worth pursuing. And what the fastest path looks like." },
              { step: "2", title: "You leave with a plan", desc: "A focused scoping workshop. Usually 1–2 days. You walk out with a defined problem, a clear data picture, and an approach you believe in." },
              { step: "3", title: "You decide, we move", desc: "You see exact scope, timeline, team, and investment. No surprises. You give the green light, results start fast." },
              { step: "4", title: "You show your board results", desc: "You have something working, something measurable, and something you can present. Not a report that sits on a shelf." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.15} direction="scale">
                <div style={{ background: C.white, borderRadius: 16, padding: "28px 24px", height: "100%" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: C.lemon, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{item.step}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WORKING WITH US FEELS LIKE */}
      <section style={{ background: C.white, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", right: "5%", width: 280, height: 280, borderRadius: "50%", background: C.turquoise, opacity: 0.07, filter: "blur(70px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em",
            }}>What working with us feels like</h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              No surprises, no wasted months. Here's what our clients experience.
            </p>
          </Reveal>

          <div className="dd-why-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          }}>
            {[
              { title: "You work with the people who do the work", body: "The people in your kickoff are the people who deliver. Every project is senior-led from day one. Practitioners with 20+ years average experience who've built and shipped AI at scale.", accent: C.lemon },
              { title: "Your strategy becomes a working solution", body: "The roadmap your board approves is the one that gets built. Strategy and implementation move together. So nothing gets lost in translation between firms.", accent: C.turquoise },
              { title: "Your projects move in weeks, not quarters", body: "Our own AI tools accelerate every phase. From analysis to prototype to production. You get the speed of pre-built technology without buying software.", accent: C.lemon },
              { title: "Your investment targets the right problem first", body: "Impact is quantified before anything gets built, so you invest where it matters most. Start from the business process, map the value, then build. Not the other way around.", accent: C.turquoise },
              { title: "You pay for results, not layers of management", body: "Lean team, fast decisions, direct access to the people doing the work. Your investment goes to senior expertise and delivery. Not overhead.", accent: C.lemon },
              { title: "Your team learns to run it without us", body: "Every engagement is built around co-creation and capability transfer. When it ends, you own the solution and the skills. Not a dependency.", accent: C.turquoise },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05} direction={i < 3 ? "left" : "right"}>
                <div style={{
                  background: C.gray, borderRadius: 16, padding: "28px 24px",
                  borderTop: `3px solid ${item.accent}`, height: "100%",
                }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="dd-grain-subtle" style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em" }}>What our clients say</h2>
          </Reveal>

          {/* Featured testimonial. Spotlight */}
          <TestimonialSpotlight
            quote="Our loyalty customers now get offers they care about. This means more visits, more sales, and 256% more coupon use. We turned customer insights into action. And real business results."
            highlight="256% more coupon use."
            name="Tuomas Vihavainen"
            title="Head of Group Analytics"
            company="Tokmanni"
            logo="/images/logos/Tokmanni_BW.png"
          />

          {/* Smaller testimonials */}
          <div className="dd-testimonials-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20,
          }}>
            <Reveal delay={0.1}>
              <TestimonialCard
                quote="The engagement was comprehensive and professionally planned, significantly advancing our AI development. The clarity of the workshops and tools was impressive."
                name="Kati Kinnunen"
                title="Chief Digital Officer"
                company="Helen"
                logo="/images/logos/Helen_BW.png"
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

      {/* CTA */}
      <CTASection
        heading="Not sure where to start?"
        subtitle="In 30 minutes, you'll know your single highest-impact AI opportunity. And what it would take to make it real. No pitch, no pressure."
        secondaryLabel="See our solutions"
        secondaryHref="/solutions"
        image="/images/illustrations/DD-Illustration-2.png"
        imageSize={80}
      />
    </>
  );
}
