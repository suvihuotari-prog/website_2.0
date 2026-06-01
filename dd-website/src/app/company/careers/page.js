"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

const OPENINGS = [
  {
    title: "Trainees (ML, GenAI)",
    category: "Data & AI",
    type: "Part-time",
    locations: ["Espoo (Keilaniemi)", "Tampere", "Remote"],
    description: "Join real client projects from day one. You'll work alongside senior practitioners on ML and GenAI solutions — learning by doing, not by watching.",
  },
  {
    title: "Senior Data Analyst",
    category: "Data & AI",
    type: "Full-time",
    locations: ["Espoo (Keilaniemi)", "Tampere", "Remote"],
    description: "Turn complex data into insights that drive business decisions. You'll work directly with clients, translating their data into recommendations they act on.",
    href: "/company/careers/senior-data-analyst",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        gradient="lemon"
        badge="Careers"
        title="Your work ships to production — not to a slide deck"
        subtitle="Whether you're starting your AI career or looking for your next senior challenge, you'll own real projects with real clients. No bench time, no internal busywork — just meaningful work that makes a visible difference."
        primaryButton={{ label: "See open positions", href: "#openings" }}
        secondaryButton={{ label: "Meet the team", href: "/company/about" }}
      />

      {/* WHY JOIN US */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              What your career looks like here
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              You grow faster when every project is real and every mentor has done it before.
            </p>
          </Reveal>
          <div className="dd-how-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          }}>
            {[
              {
                title: "You own the outcome, not just a task",
                body: "You're responsible for real client deliverables from the start. No shadow roles or observation periods — you contribute, you learn, you see the impact.",
                accent: C.lemon,
              },
              {
                title: "You learn from people who've done it",
                body: "Your mentors have built AI at H&M, Silo AI, and Deloitte. Direct access to 20+ years of experience — no layers of management in between.",
                accent: C.turquoise,
              },
              {
                title: "You grow faster because every project is different",
                body: "Retail, energy, banking, manufacturing — you solve fundamentally different problems across industries and AI maturity levels. No two quarters look the same.",
                accent: C.lemon,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: C.gray, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                  border: `1px solid ${C.border}`, borderTop: `3px solid ${item.accent}`,
                  height: "100%",
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section id="openings" style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Current openings
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              We're growing our team with people who want to do meaningful work at the intersection of AI and business.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {OPENINGS.map((job, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 32px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: 32,
                }}
                  className="dd-job-card"
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                      <span style={{
                        padding: "4px 14px", borderRadius: PILL_BORDER_RADIUS, background: C.lemon,
                        fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
                      }}>{job.category}</span>
                      <span style={{
                        padding: "4px 14px", borderRadius: PILL_BORDER_RADIUS, background: C.turquoise,
                        fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
                      }}>{job.type}</span>
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, letterSpacing: "-0.01em" }}>{job.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, marginBottom: 10 }}>{job.description}</p>
                    <p style={{ fontSize: 13, color: C.seawave, fontWeight: 500 }}>
                      {job.locations.join(" / ")}
                    </p>
                  </div>
                  <a href={job.href || `mailto:info@datadesign.fi?subject=Application: ${job.title}`}
                    style={{
                      display: "inline-block", background: C.black, color: C.white,
                      padding: "12px 28px", borderRadius: PILL_BORDER_RADIUS, fontWeight: 500, fontSize: 14,
                      textDecoration: "none", transition: "opacity 0.2s", whiteSpace: "nowrap", flexShrink: 0,
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >{job.href ? "View role" : "Apply"}</a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div style={{
              marginTop: 32, padding: "24px 28px", background: C.beige, borderRadius: 14,
              textAlign: "center",
            }}>
              <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6 }}>
                Don't see your role listed? We're always interested in experienced data and AI practitioners. Send an open application to{" "}
                <a href="mailto:info@datadesign.fi" style={{ color: C.seawave, textDecoration: "none", fontWeight: 500 }}>info@datadesign.fi</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="In 30 minutes, you'll know if we're the right fit"
        subtitle="Whether you're exploring your next career move or curious about working with us — book a call and let's talk."
        secondaryLabel="Meet the team"
        secondaryHref="/company/about"
        image="/images/illustrations/DD-Illustration-1.png"
      />
    </>
  );
}
