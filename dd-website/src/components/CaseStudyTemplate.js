"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CheckmarkIcon } from "@/components/CheckmarkIcon";
import { CountUp } from "@/components/CountUp";
import { TestimonialSpotlight } from "@/components/TestimonialSpotlight";
import { FeaturedSolutionCard } from "@/components/FeaturedSolutionCard";
import { CTASection } from "@/components/CTASection";

/**
 * Uudelleenkäytettävä template asiakastarinasivulle.
 * Ottaa frontmatter-datan propsina ja renderöi täyden case-sivun.
 *
 * Käytössä dynaamisessa reitissä `/cases-mdx/[slug]` ja `/fi/cases-mdx/[slug]`.
 */
export function CaseStudyTemplate({ data, locale = "en", baseHref = "/cases-mdx", bodyContent = null }) {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = data.steps?.find(s => s.id === activeStep) || data.steps?.[0];

  const t = locale === "fi" ? {
    challenge: "Haaste",
    whatWeBuilt: "Mitä rakensimme",
    results: "Tulokset",
    beyondNumbers: "Lisäksi",
    explore: "Tutustu liittyviin ratkaisuihin",
    breadcrumbCases: "Asiakastarinat",
  } : {
    challenge: "The challenge",
    whatWeBuilt: "What we built",
    results: "Results",
    beyondNumbers: "Beyond the numbers",
    explore: "Explore related solutions",
    breadcrumbCases: "Customer Stories",
  };

  // Map related solutions (slug → full data). Keskitetään lookup-taulukko
  const SOLUTION_LOOKUP = locale === "fi" ? FI_SOLUTIONS : EN_SOLUTIONS;

  return (
    <>
      {/* HERO */}
      <HeroSection
        gradient={data.gradient || "lemon"}
        gradientRight
        breadcrumb={[
          { label: t.breadcrumbCases, href: baseHref },
          { label: data.company },
        ]}
        badge={data.badge}
        image={data.companyLogo}
        title={data.title}
        subtitle={data.subtitle}
      />

      {/* KEY METRICS */}
      {data.metrics && (
        <section style={{ background: C.lemon }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "0 40px" }}>
            <Reveal delay={0.1} direction="scale">
              <div className="dd-stats-grid" style={{
                display: "grid",
                gridTemplateColumns: `repeat(${data.metrics.length}, 1fr)`,
                gap: 0,
                background: C.white, borderRadius: CARD_BORDER_RADIUS,
                border: `1px solid ${C.border}`, overflow: "hidden",
                transform: "translateY(-40px)",
              }}>
                {data.metrics.map((s, i) => (
                  <div key={i} style={{
                    padding: "32px 24px", textAlign: "center",
                    borderRight: i < data.metrics.length - 1 ? `1px solid ${C.border}` : "none",
                  }}>
                    <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 4 }}>
                      {/* "✓" ei animoidu CountUpilla */}
                      {s.number === "✓" ? "✓" : <CountUp value={s.number} />}
                    </div>
                    <div style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* CHALLENGE */}
      {data.challenges && (
        <section style={{ background: C.white }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "48px 40px 88px" }}>
            <Reveal>
              <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
                {t.challenge}
              </h2>
              {data.challengeIntro && (
                <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
                  {data.challengeIntro}
                </p>
              )}
            </Reveal>
            <div className="dd-challenge-grid" style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(data.challenges.length, 3)}, 1fr)`,
              gap: 20,
            }}>
              {data.challenges.map((item, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div style={{
                    background: C.gray, borderRadius: 16, padding: "28px 24px",
                    borderLeft: `4px solid ${C.lemon}`, height: "100%",
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SOLUTION. Interactive Steps */}
      {data.steps && (
        <section style={{ background: C.gray }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
                {t.whatWeBuilt}
              </h2>
              {data.solutionIntro && (
                <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
                  {data.solutionIntro}
                </p>
              )}
            </Reveal>
            <Reveal delay={0.1}>
              <div className="dd-solution-interactive" style={{ display: "flex", gap: 32 }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                  {data.steps.map((step) => {
                    const isActive = activeStep === step.id;
                    return (
                      <button key={step.id} onClick={() => setActiveStep(step.id)} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "20px 24px", borderRadius: CARD_BORDER_RADIUS, border: "none",
                        background: isActive ? C.white : "transparent",
                        boxShadow: isActive ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
                        cursor: "pointer", textAlign: "left", transition: "all 0.3s ease",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                          <span style={{
                            width: 40, height: 40, borderRadius: "50%",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 14, fontWeight: 700, flexShrink: 0,
                            background: isActive ? C.black : C.lemon,
                            color: isActive ? C.white : C.black, transition: "all 0.3s ease",
                          }}>{step.id}</span>
                          <span style={{ fontSize: 17, fontWeight: 500, color: isActive ? C.black : "#aaa", transition: "color 0.3s ease" }}>{step.title}</span>
                        </div>
                        {isActive && (
                          <motion.div layoutId="step-arrow" transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </motion.div>
                        )}
                      </button>
                    );
                  })}
                </div>
                <div style={{ flex: 1, minHeight: 360 }}>
                  <AnimatePresence mode="wait">
                    <motion.div key={activeStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ height: "100%" }}>
                      <div style={{ height: "100%", background: C.lemon, borderRadius: 32, padding: "48px 40px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ position: "absolute", right: -60, top: -60, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.25)", filter: "blur(60px)", pointerEvents: "none" }} />
                        <div style={{ position: "relative", zIndex: 1 }}>
                          <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS, background: "rgba(0,0,0,0.06)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: C.black, marginBottom: 20 }}>{currentStep?.tag}</span>
                          <h3 style={{ fontSize: 28, fontWeight: 500, marginBottom: 16, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{currentStep?.title}</h3>
                          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(0,0,0,0.7)" }}>{currentStep?.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* CUSTOM MDX BODY (per-case-vapaa sisältö, näkyy vain jos MDX:ssä on bodya) */}
      {bodyContent && (
        <section style={{ background: C.white }}>
          <div style={{
            maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto",
            padding: "48px 40px",
          }}>
            <div className="dd-case-body" style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
              gap: 48,
              alignItems: "start",
            }}>
              <div style={{
                fontSize: 17, lineHeight: 1.7, color: C.textMuted,
              }}>
                <p style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: C.seawave, marginBottom: 8 }}>
                  {locale === "fi" ? "Tarinan taustaa" : "Behind the story"}
                </p>
                <p style={{ fontSize: 15 }}>
                  {locale === "fi"
                    ? "Tämä osio on vapaata sisältöä joka voi vaihdella per asiakastarina. Tähän voi lisätä kuvia, taulukoita, sitaatteja tai custom-komponentteja."
                    : "This section is free-form content that can vary per case. Feel free to add images, tables, quotes, or custom components."}
                </p>
              </div>
              <article className="dd-mdx-body" style={{
                fontSize: 16, lineHeight: 1.7, color: C.black,
              }}>
                {bodyContent}
              </article>
            </div>
          </div>
        </section>
      )}

      {/* RESULTS */}
      {(data.heroStat || data.secondaryStats || data.accentStat || data.extras) && (
        <section className="dd-grain" style={{ background: C.lemon }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
                {t.results}
              </h2>
              {data.resultsIntro && (
                <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
                  {data.resultsIntro}
                </p>
              )}
            </Reveal>

            {/* Bento grid: hero stat + right column */}
            {(data.heroStat || data.secondaryStats) && (
              <div className="dd-bento-row" style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                {data.heroStat && (
                  <Reveal style={{ flex: 2, minWidth: 0 }}>
                    <div style={{ background: C.white, borderRadius: 24, padding: "56px 44px", border: `1px solid ${C.border}`, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <div style={{
                        fontSize: data.heroStat.text ? 72 : 104,
                        fontWeight: 600, letterSpacing: "-0.04em",
                        lineHeight: data.heroStat.text ? 1.1 : 1,
                        marginBottom: 16, color: C.black,
                      }}>
                        {data.heroStat.text ? data.heroStat.text : <CountUp value={data.heroStat.number} />}
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, color: C.black }}>
                        {data.heroStat.label}
                      </div>
                      {data.heroStat.description && (
                        <p style={{ fontSize: 15, lineHeight: 1.55, color: C.textMuted, maxWidth: 460 }}>
                          {data.heroStat.description}
                        </p>
                      )}
                    </div>
                  </Reveal>
                )}

                {data.secondaryStats && (
                  <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                    {data.secondaryStats.map((stat, i) => (
                      <Reveal key={i} delay={0.08 + i * 0.06} style={{ flex: 1 }}>
                        <div style={{ background: C.white, borderRadius: 24, padding: "32px 28px", border: `1px solid ${C.border}`, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                          <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 12, color: C.black }}>
                            {stat.number === "✓" ? "✓" : <CountUp value={stat.number} />}
                          </div>
                          <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6, color: C.black }}>{stat.label}</div>
                          {stat.body && (
                            <p style={{ fontSize: 13, lineHeight: 1.5, color: C.textMuted }}>{stat.body}</p>
                          )}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
            )}

            {data.accentStat && (
              <Reveal delay={0.2}>
                <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "28px 36px", border: `1px solid ${C.border}`, marginBottom: 40, display: "flex", alignItems: "center", gap: 24 }}>
                  <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, color: C.black, flexShrink: 0 }}>
                    {data.accentStat.badge}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4, color: C.black }}>
                      {data.accentStat.label}
                    </div>
                    {data.accentStat.body && (
                      <p style={{ fontSize: 14, lineHeight: 1.5, color: C.textMuted }}>{data.accentStat.body}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            )}

            {data.extras && data.extras.length > 0 && (
              <>
                <Reveal delay={0.26}>
                  <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 16, color: C.black }}>
                    {t.beyondNumbers}
                  </h3>
                </Reveal>
                <div className="dd-bento-extras" style={{ display: "flex", gap: 16 }}>
                  {data.extras.map((item, i) => (
                    <Reveal key={i} delay={0.3 + i * 0.06} style={{ flex: 1 }}>
                      <div style={{ background: C.white, borderRadius: 16, padding: "20px 24px", border: `1px solid ${C.border}`, display: "flex", gap: 10, alignItems: "center" }}>
                        <CheckmarkIcon size={16} />
                        <span style={{ fontSize: 14, lineHeight: 1.5, color: C.textMuted }}>{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* TESTIMONIAL */}
      {data.testimonial && (
        <section style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <TestimonialSpotlight
              quote={data.testimonial.quote}
              highlight={data.testimonial.highlight}
              name={data.testimonial.name}
              photo={data.testimonial.photo}
              title={data.testimonial.title}
              company={data.testimonial.company}
              logo={data.testimonial.logo}
            />
          </div>
        </section>
      )}

      {/* RELATED SOLUTIONS */}
      {data.relatedSolutions && data.relatedSolutions.length > 0 && (
        <section style={{ background: C.white }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
                {t.explore}
              </h2>
            </Reveal>
            <div className="dd-related-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {data.relatedSolutions.map((rel, i) => {
                const sol = SOLUTION_LOOKUP[rel.slug];
                if (!sol) return null;
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    <FeaturedSolutionCard solution={sol} index={i} />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {data.cta && (
        <CTASection
          heading={data.cta.heading}
          subtitle={data.cta.subtitle}
          image="/images/illustrations/DD-Illustration-3.png"
          imageSize={70}
        />
      )}
    </>
  );
}

/* ──────────────────────────────────────────────
   Related-solution lookup-taulukot
   (myöhemmin nämä kannattaa lukea solutions-MDX:istä)
   ────────────────────────────────────────────── */

const EN_SOLUTIONS = {
  "ai-strategy": {
    title: "We know AI matters, but where do we start?",
    tag: "AI Strategy",
    description: "A proven framework that takes scattered AI ideas and turns them into a prioritized, funded roadmap your board will approve.",
    slug: "/solutions/ai-strategy",
  },
  "ai-native-transformation": {
    title: "We've proven AI works. Now how do we scale it?",
    tag: "AI-Native Transformation",
    description: "From individual AI projects to AI as your operating model. Across business units, data domains, and decision processes.",
    slug: "/solutions/ai-native-transformation",
  },
  "data-governance": {
    title: "Nobody owns our data and it's slowing everything down",
    tag: "Data Governance",
    description: "Clear data ownership, scalable governance models, and the foundation every future AI initiative depends on.",
    slug: "/solutions/data-governance",
  },
  "customer-intelligence": {
    title: "We don't really know our customers well enough",
    tag: "Customer Intelligence",
    description: "Turn fragmented customer data into a complete picture. So your team knows who to prioritize, what they need, and when to act.",
    slug: "/solutions/customer-intelligence",
  },
  "pricing-optimization": {
    title: "Our pricing is leaving money on the table",
    tag: "Pricing Optimization",
    description: "Move from gut-feel pricing to AI-driven decisions that protect margins, respond to market shifts, and maximize revenue per customer.",
    slug: "/solutions/pricing-optimization",
  },
};

const FI_SOLUTIONS = {
  "ai-strategy": {
    title: "Tiedämme että tekoäly on tärkeää, mutta mistä aloitamme?",
    tag: "AI Strategy",
    description: "Todennettu viitekehys joka muuttaa hajallaan olevat tekoälyideat priorisoiduksi ja rahoitetuksi tiekartaksi, jonka hallitus hyväksyy.",
    slug: "/solutions/ai-strategy",
  },
  "ai-native-transformation": {
    title: "Olemme todistaneet että tekoäly toimii. Miten skaalaamme sen?",
    tag: "AI-Native Transformation",
    description: "Yksittäisistä tekoälyprojekteista tekoälyyn toimintamallina. Yli liiketoimintayksiköiden, data-alueiden ja päätösprosessien.",
    slug: "/solutions/ai-native-transformation",
  },
  "data-governance": {
    title: "Kukaan ei omista dataamme ja se hidastaa kaikkea",
    tag: "Data Governance",
    description: "Selkeät datan omistajuudet, skaalautuvat hallintamallit ja perusta, jota jokainen tuleva tekoälyhanke vaatii.",
    slug: "/solutions/data-governance",
  },
  "customer-intelligence": {
    title: "Emme tunne asiakkaitamme tarpeeksi hyvin",
    tag: "Customer Intelligence",
    description: "Muunna pirstaloitunut asiakasdata kokonaiskuvaksi. Niin tiimi tietää keitä priorisoida, mitä he tarvitsevat ja milloin toimia.",
    slug: "/solutions/customer-intelligence",
  },
  "pricing-optimization": {
    title: "Hinnoittelumme jättää rahaa pöydälle",
    tag: "Pricing Optimization",
    description: "Siirry tunnepohjaisesta hinnoittelusta tekoälypohjaisiin päätöksiin, jotka suojaavat katteita ja maksimoivat asiakaskohtaisen liikevaihdon.",
    slug: "/solutions/pricing-optimization",
  },
};
