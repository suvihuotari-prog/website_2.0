"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CheckmarkIcon } from "@/components/CheckmarkIcon";
import { CTASection } from "@/components/CTASection";

/**
 * Shared template for all 6 solution subpages.
 *
 * Props:
 *   hero: { breadcrumbLabel, badge, frameworkBadge?, title, subtitle }
 *   challenge: { subtitle, items: [{ title, body }] }
 *   steps: { subtitle, items: [{ step, title, desc }] }
 *   comparison?: { subtitle, children }       — optional section between steps and results
 *   results: { subtitle, background?, gridColumns?, children, footnote? }
 *   applications?: { subtitle, items: [{ title, body }] } — optional "Where it applies" section
 *   tools?: { subtitle, children }          — optional section
 *   deliverables: { subtitle, items?: string[], groups?: {label, items}[], timelineBadge, timelineDesc, timelineNote? }
 *   related?: { subtitle, children }           — optional section
 *   cta: { heading, subtitle, image?, imageSize? }
 */
export function SolutionSubpageTemplate({ hero, challenge, steps, comparison, results, applications, tools, deliverables, related, cta }) {
  return (
    <>
      {/* HERO */}
      <HeroSection
        gradient="beige"
        breadcrumb={[{ label: "Solutions", href: "/solutions" }, { label: hero.breadcrumbLabel }]}
        badge={hero.badge}
        frameworkBadge={hero.frameworkBadge}
        title={hero.title}
        subtitle={hero.subtitle}
        primaryButton={{ label: "Book a free call", href: CALENDLY_URL }}
        secondaryButton={{ label: "Back to all solutions", href: "/solutions" }}
      />

      {/* THE CHALLENGE */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>The challenge</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>{challenge.subtitle}</p>
          </Reveal>
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {challenge.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: C.gray, borderRadius: 16, padding: "28px 24px", borderLeft: `4px solid ${C.lemon}`, height: "100%" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE SOLVE IT */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>How we solve it</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>{steps.subtitle}</p>
          </Reveal>
          <div className="dd-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {steps.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: C.white, borderRadius: 16, padding: "28px 24px", border: `1px solid ${C.border}`, height: "100%" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, background: C.lemon,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 700, marginBottom: 16,
                  }}>{item.step}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON (optional) */}
      {comparison && (
        <section style={{ background: C.white }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>{comparison.heading || "How this compares"}</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>{comparison.subtitle}</p>
            </Reveal>
            <Reveal delay={0.05}>
              {comparison.children}
            </Reveal>
          </div>
        </section>
      )}

      {/* PROVEN RESULTS */}
      <section className="dd-grain" style={{ background: results.background || C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Proven results</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>{results.subtitle}</p>
          </Reveal>
          <div className="dd-proof-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${results.gridColumns || 3}, 1fr)`, gap: 20 }}>
            {results.children}
          </div>
          {results.footnote && (
            <Reveal delay={0.2}>
              <div style={{ background: C.beige, borderRadius: 12, padding: "16px 20px", marginTop: 20, borderLeft: `3px solid ${C.lemon}` }}>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic" }}>{results.footnote}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* WHERE IT APPLIES (optional) */}
      {applications && (
        <section style={{ background: C.white }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Where it applies</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>{applications.subtitle}</p>
            </Reveal>
            <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {applications.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div style={{
                    background: C.gray, borderRadius: 16, padding: "28px 24px",
                    borderTop: `3px solid ${i % 2 === 0 ? C.lemon : C.turquoise}`,
                    height: "100%",
                  }}>
                    {item.icon && (
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: C.white, border: `1px solid ${C.border}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: 16,
                      }}>
                        {item.icon}
                      </div>
                    )}
                    <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TOOLS THAT ACCELERATE THIS (optional) */}
      {tools && (
        <section style={{ background: C.white }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Tools that accelerate this</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>{tools.subtitle}</p>
            </Reveal>
            <div className="dd-tools-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {tools.children}
            </div>
            <Reveal delay={0.15}>
              <div style={{ textAlign: "center", marginTop: 32 }}>
                <a href="/solutions" className="dd-link-hover" style={{ color: C.seawave, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
                  Explore all tools and accelerators →
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* WHAT YOU GET */}
      <section className="dd-grain-subtle" style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>What you get</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>{deliverables.subtitle}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "40px 36px", border: `1px solid ${C.border}` }}>
              {deliverables.groups ? (
                <div className="dd-deliverables-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
                  {deliverables.groups.map((group, gi) => (
                    <div key={gi}>
                      <h4 style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: C.black, marginBottom: 16, opacity: 0.6 }}>{group.label}</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {group.items.map((item, i) => (
                          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <CheckmarkIcon size={16} />
                            <span style={{ fontSize: 15, lineHeight: 1.55, color: C.textMuted }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="dd-deliverables-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {deliverables.items.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <CheckmarkIcon size={16} />
                      <span style={{ fontSize: 15, lineHeight: 1.55, color: C.textMuted }}>{item}</span>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 28, paddingTop: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "inline-flex", padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS, background: C.lemon, fontSize: 13, fontWeight: 600 }}>
                  {deliverables.timelineBadge}
                </div>
                <span style={{ fontSize: 14, color: C.textMuted }}>{deliverables.timelineDesc}</span>
              </div>
              {deliverables.timelineNote && (
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic", marginTop: 16 }}>
                  {deliverables.timelineNote}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED SOLUTIONS (optional) */}
      {related && (
        <section style={{ background: C.white }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Related solutions</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>{related.subtitle}</p>
            </Reveal>
            <div className="dd-related-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {related.children}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        heading={cta.heading}
        subtitle={cta.subtitle}
        image={cta.image}
        imageSize={cta.imageSize || 70}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={cta.secondaryHref}
      />
    </>
  );
}
