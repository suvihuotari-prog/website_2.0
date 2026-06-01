"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { CountUp } from "@/components/CountUp";

const TEAM = [
  {
    name: "Mika Aho",
    role: "CEO, Co-founder, PhD",
    photo: "/images/people/MikaAho.jpg",
    description: "20+ years turning data and AI strategies into funded roadmaps and working solutions. Previously at Silo.AI, Bilot, and Louhia Analytics.",
    linkedin: "https://www.linkedin.com/in/mikaaho/",
    color: "lemon",
  },
  {
    name: "Pekka Autere",
    role: "Partner, Senior Advisor",
    photo: "/images/people/PekkaAutere.png",
    description: "Two decades in data science and ML. Led H&M supply chain optimization delivering 200M€+ in revenue impact. Deep expertise in retail, banking, and maritime.",
    linkedin: "https://www.linkedin.com/in/pekkaautere/",
    color: "turquoise",
  },
  {
    name: "Toni Haapakoski",
    role: "Co-founder, Senior Advisor",
    photo: "/images/people/ToniHaapakoski.jpg",
    description: "20+ years in data and analytics. Founded Bilot PLC in 2005, grew it to 200+ employees and €27M revenue. Specialist in data governance and enterprise architecture.",
    linkedin: "https://www.linkedin.com/in/tonihaapakoski/",
    color: "lemon",
  },
  {
    name: "Jaakko Mattila",
    role: "Partner, Senior Advisor",
    photo: "/images/people/JaakkoMattila.png",
    description: "20 years across consulting, manufacturing, and financial services. Led Data Strategy and Governance at Deloitte. Pragmatic approach to making data work.",
    linkedin: "https://www.linkedin.com/in/mattilajaakko/",
    color: "turquoise",
  },
  {
    name: "Suvi Huotari",
    role: "AI Advisor",
    photo: "/images/people/SuviHuotari.jpg",
    description: "Production-grade data pipelines, modern data stack expertise, and MLOps. Turns prototypes into systems that run reliably at scale.",
    color: "lemon",
  },
  {
    name: "Niko Föhr",
    role: "Senior AI Scientist",
    photo: "/images/people/NikoFohr.jpg",
    description: "From model development to deployment. Hands-on experience shipping AI solutions across pricing, customer intelligence, and predictive operations.",
    color: "turquoise",
  },
  {
    name: "Amir Vaheb",
    role: "Senior AI Scientist",
    photo: "/images/people/AmirVaheb.jpg",
    description: "Bridges the gap between business goals and technical execution. Experienced in scoping AI engagements, stakeholder alignment, and delivery management.",
    color: "lemon",
  },
];

const STATS = [
  { number: "€200M+", label: "Revenue impact created for clients" },
  { number: "30+", label: "AI strategies approved by boards" },
  { number: "100+", label: "Companies accelerated" },
  { number: "Weeks", label: "From kickoff to results" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        gradient="lemon"
        badge="About Us"
        title="Your shortcut to becoming an AI-native organization"
        subtitle="You go from early AI experiments to enterprise-wide transformation — with strategic clarity, deep data expertise, and hands-on delivery working together. Your project is senior-led and GenAI-accelerated from day one, so AI becomes part of how you operate — not just a side initiative."
        image="/images/illustrations/DD-Illustration-1.png"
        primaryButton={{ label: "Book a free call", href: CALENDLY_URL }}
        secondaryButton={{ label: "See our services", href: "/services" }}
      />

      {/* MEET THE TEAM */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              The people behind your results
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Your project is led by the same people who've built AI strategies for Sandvik, optimized supply chains at H&M, and shipped production systems for S-Pankki and Metso.
            </p>
          </Reveal>

          <div className="dd-team-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "48px 32px",
          }}>
            {TEAM.map((person, i) => {
              const initials = person.name.split(" ").map(n => n[0]).join("");
              const bgColor = person.color === "turquoise" ? C.turquoise : C.lemon;

              return (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="dd-portrait-card" style={{ display: "flex", flexDirection: "column" }}>

                    {/* Portrait frame — 4:5 tall poster */}
                    <div style={{
                      position: "relative", width: "100%", aspectRatio: "4 / 5",
                      borderRadius: 40, overflow: "hidden", marginBottom: 20,
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    }}>
                      {person.photo ? (
                        <img
                          src={person.photo} alt={person.name}
                          className="dd-portrait-img"
                          style={{
                            width: "100%", height: "100%", objectFit: "cover",
                            display: "block",
                          }}
                        />
                      ) : (
                        /* Colored tile with large initials */
                        <div style={{
                          width: "100%", height: "100%", background: bgColor,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <span style={{
                            fontSize: 48, fontWeight: 700,
                            color: `${C.black}cc`, letterSpacing: "-0.02em",
                          }}>{initials}</span>
                        </div>
                      )}

                      {/* LinkedIn — floats in, visible on hover */}
                      {person.linkedin && (
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                          className="dd-portrait-linkedin"
                          style={{
                            position: "absolute", top: 14, right: 14,
                            width: 40, height: 40, borderRadius: "50%",
                            background: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(8px)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: `${C.black}b3`, textDecoration: "none", zIndex: 2,
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Text content — no box, sits cleanly below */}
                    <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 4, lineHeight: 1.25, letterSpacing: "-0.01em" }}>
                      {person.name}
                    </h3>
                    <div style={{ marginBottom: 10 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "0.06em", color: `${C.black}66`,
                      }}>{person.role}</span>
                    </div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted }}>
                      {person.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Stats strip */}
          <Reveal delay={0.2} direction="scale">
            <div className="dd-stats-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              background: C.gray, borderRadius: CARD_BORDER_RADIUS, border: `1px solid ${C.border}`,
              overflow: "hidden", marginTop: 48,
            }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  padding: "28px 24px", textAlign: "center",
                  borderRight: i < 3 ? `1px solid ${C.border}` : "none",
                }}>
                  <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 4 }}>
                    <CountUp value={s.number} />
                  </div>
                  <div style={{ fontSize: 13, color: C.textMuted, fontWeight: 400 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              What working with us feels like
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              The difference you notice from the first week.
            </p>
          </Reveal>
          <div className="dd-how-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          }}>
            {[
              {
                title: "You skip the ramp-up",
                body: "Your engagement starts with someone who's already shipped AI systems at H&M, Silo AI, and Deloitte. No training wheels — real experience from day one.",
                accent: C.lemon,
              },
              {
                title: "Your strategy becomes a working system",
                body: "The same person who presents to your board on Monday writes production code on Tuesday. Nothing gets lost in translation between firms.",
                accent: C.turquoise,
              },
              {
                title: "Your team gets stronger, not dependent",
                body: "When the engagement ends, your organization is more capable than when it started. Knowledge transfer is built into how every project runs.",
                accent: C.lemon,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
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

      {/* CTA */}
      <CTASection
        heading="In 30 minutes, you'll know if we're the right fit"
        subtitle="Whether you need a strategy sprint, a working AI solution, or senior people embedded in your team — you'll leave the call with clarity, not a sales pitch."
        secondaryLabel="See open positions"
        secondaryHref="/company/careers"
        image="/images/illustrations/DD-Illustration-1.png"
      />
    </>
  );
}
