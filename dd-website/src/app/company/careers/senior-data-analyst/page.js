"use client";

import { C, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CheckmarkIcon } from "@/components/CheckmarkIcon";

/* ══════════════════════════════════════════════
   Data
   ══════════════════════════════════════════════ */
const YOUR_WEEK = [
  {
    day: "Mon",
    title: "You unpack a new client's pricing challenge",
    desc: "A retailer wants to understand why margins are eroding in certain categories. You scope the data, map the sources, and sketch your analytical approach before the first workshop.",
  },
  {
    day: "Tue",
    title: "You build the story the data is telling",
    desc: "SQL, Python, visualization — you connect datasets others couldn't combine. The pattern is clear: seasonal demand shifts are invisible in their current reporting.",
  },
  {
    day: "Wed",
    title: "You present to a leadership team",
    desc: "Not a dashboard walkthrough — a recommendation. You explain what you found, what it means for revenue, and what they should do next. They ask questions. You have answers.",
  },
  {
    day: "Thu",
    title: "You pair with a senior consultant on a data strategy",
    desc: "An energy company needs to understand their data landscape. You assess data quality across systems, map ownership gaps, and help build the governance model.",
  },
  {
    day: "Fri",
    title: "You refine a model with your team",
    desc: "A customer segmentation project needs sharper clusters. You review the approach with an ML engineer, iterate on features, and validate against business logic.",
  },
];

const THRIVE_IF = [
  "You think in SQL and can navigate any database — not just the clean ones",
  "You see the business question behind every data request",
  "You can explain a statistical finding to a CEO without dumbing it down",
  "You've worked with visualization tools like Tableau or Power BI — and know when a simple table is better",
  "You have a degree in a quantitative field and several years of hands-on analyst work",
  "You're comfortable presenting to executives, not just sending them a report",
];

const NOT_FOR_YOU = [
  "You prefer staying behind the screen — this role is client-facing from day one",
  "You want a narrow specialization — here, you'll work across industries and problem types",
  "You need months of onboarding — you'll have support, but we move quickly",
];

const WHAT_YOU_GET = [
  {
    title: "Your insights reach the boardroom",
    body: "You don't just crunch numbers. You present findings to executives who make investment decisions based on your work. Your analysis shows up in board materials, not filing cabinets.",
    accent: C.lemon,
  },
  {
    title: "You learn from practitioners, not managers",
    body: "Your mentors come from Silo AI, H&M, Deloitte, and Bilot. 20+ years average experience — and they're working alongside you on projects, not reviewing your work from a distance.",
    accent: C.turquoise,
  },
  {
    title: "Every quarter stretches you",
    body: "Retail pricing, energy data governance, banking customer intelligence, manufacturing operations — you'll solve fundamentally different problems and grow faster than in any single-industry role.",
    accent: C.lemon,
  },
  {
    title: "You see the full picture — not just the data layer",
    body: "You'll work alongside AI strategists, ML engineers, and business consultants. You'll understand how your analysis fits into broader AI solutions — and where your career can go next.",
    accent: C.turquoise,
  },
];

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */
export default function SeniorDataAnalystPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        gradient="beige"
        breadcrumb={[
          { label: "Careers", href: "/company/careers" },
          { label: "Senior Data Analyst" },
        ]}
        badge="Full-time / Espoo, Tampere, or Remote"
        title="You turn data into decisions that boards act on"
        subtitle="Not dashboards that gather dust. Not reports nobody reads. You deliver insights that change how companies invest, price, and grow — and you present them to the people who decide."
        primaryButton={{ label: "Apply now", href: "mailto:info@datadesign.fi?subject=Application: Senior Data Analyst" }}
        secondaryButton={{ label: "Meet the team", href: "/company/about" }}
      />

      {/* THE ROLE IN A NUTSHELL */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              What this role is really about
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: C.textMuted, maxWidth: 700, marginBottom: 0 }}>
              You sit at the intersection of data and business decisions. Clients come with messy datasets, unclear questions, and big ambitions. You figure out what the data actually says, shape it into a clear story, and present it to people who need to act on it — pricing teams, executives, boards.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              marginTop: 40, padding: "28px 32px", background: C.beige, borderRadius: 16,
              borderLeft: `4px solid ${C.seawave}`, maxWidth: 700,
            }}>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: C.black }}>
                Imagine a retailer who suspects they're leaving money on the table with their category pricing. You connect their sales data with competitive signals and seasonal patterns, find the gap, and walk their leadership team through what to change — with numbers they can take straight to their P&L.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* A WEEK IN THIS ROLE */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              A week in this role
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              No two weeks look the same — but here's what a typical one might feel like.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {YOUR_WEEK.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: 16, padding: "24px 28px",
                  display: "flex", gap: 20, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                    background: i === 2 ? C.lemon : C.gray,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, color: C.black,
                    textTransform: "uppercase", letterSpacing: "0.04em",
                  }}>{item.day}</div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, lineHeight: 1.35 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* YOU'LL THRIVE HERE IF */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <div className="dd-thrive-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div>
              <Reveal>
                <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
                  You'll thrive here if...
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, marginBottom: 36 }}>
                  We care more about how you think than what tools you've used. But here's what the best people in this role have in common.
                </p>
              </Reveal>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {THRIVE_IF.map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <CheckmarkIcon />
                      <span style={{ fontSize: 15, lineHeight: 1.6, color: C.black }}>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal delay={0.15}>
                <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.01em", marginTop: 8 }}>
                  This role probably isn't for you if...
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: C.textMuted, marginBottom: 28 }}>
                  Honest is better than wasting your time. This role has a specific shape.
                </p>
              </Reveal>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {NOT_FOR_YOU.map((item, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.06}>
                    <div style={{
                      display: "flex", gap: 12, alignItems: "flex-start",
                      padding: "14px 18px", background: C.gray, borderRadius: 12,
                    }}>
                      <span style={{ color: C.textMuted, fontSize: 16, flexShrink: 0, marginTop: 1 }}>—</span>
                      <span style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Tech stack */}
              <Reveal delay={0.35}>
                <div style={{ marginTop: 40 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Your toolkit</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["SQL", "Python", "Tableau", "Power BI", "Excel", "BigQuery", "dbt", "Jupyter"].map((tool) => (
                      <span key={tool} style={{
                        padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS,
                        background: C.gray, fontSize: 13, fontWeight: 500, color: C.black,
                      }}>{tool}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              What your career looks like here
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              You grow faster when the work is real, the clients are senior, and the team around you has done it before.
            </p>
          </Reveal>

          <div className="dd-benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {WHAT_YOU_GET.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                  borderTop: `3px solid ${item.accent}`, height: "100%",
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICALITIES */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em" }}>
              The details
            </h2>
          </Reveal>

          <div className="dd-details-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { label: "Location", value: "Espoo (Keilaniemi), Tampere, or remote", note: "Client visits as needed" },
              { label: "Type", value: "Full-time, permanent", note: "Flexible hours" },
              { label: "Language", value: "English required", note: "Finnish is a plus for local client work" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  background: C.gray, borderRadius: 14, padding: "24px 24px",
                }}>
                  <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}55`, display: "block", marginBottom: 8 }}>{item.label}</span>
                  <p style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>{item.value}</p>
                  <p style={{ fontSize: 13, color: C.textMuted }}>{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dd-grain-subtle" style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px", textAlign: "center" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Ready to do work that reaches the boardroom?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: C.textMuted, maxWidth: 560, margin: "0 auto 40px" }}>
              Send us a short message about yourself and a link to your LinkedIn or CV. No cover letter needed — we'd rather see how you think than how you write formal applications.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:info@datadesign.fi?subject=Application: Senior Data Analyst"
                style={{
                  display: "inline-block", background: C.black, color: C.white,
                  padding: "16px 40px", borderRadius: PILL_BORDER_RADIUS, fontWeight: 500, fontSize: 16,
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >Apply — info@datadesign.fi</a>
              <a href="/company/about"
                className="dd-btn-wipe"
                style={{
                  display: "inline-block", background: "transparent", color: C.black,
                  padding: "16px 36px", borderRadius: PILL_BORDER_RADIUS,
                  border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                  textDecoration: "none", transition: "all 0.2s",
                }}
              >Meet the team</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
