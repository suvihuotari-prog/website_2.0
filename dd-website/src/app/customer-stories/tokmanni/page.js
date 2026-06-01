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

const METRICS = [
  { number: "256%", label: "Increase in coupon usage" },
  { number: "2%", label: "Increase in store visits" },
  { number: "2%", label: "Increase in sales" },
  { number: "Lower", label: "Average discount amounts" },
];

const CHALLENGES = [
  {
    title: "Low coupon redemption despite an active loyalty app",
    body: "Tokmanni's mobile app distributed discount coupons to loyalty customers, but redemption rates stayed low. Generic offers didn't give customers a reason to act.",
  },
  {
    title: "No internal AI or personalization capability",
    body: "The team lacked the machine learning expertise and infrastructure to build a recommendation engine. Every customer received the same offers regardless of their behavior.",
  },
  {
    title: "No way to match offers to individual preferences",
    body: "Customer purchase data existed but wasn't being used to personalize the experience. Discounts were broad instead of targeted — costing more and converting less.",
  },
];

const STEPS = [
  {
    id: 1,
    title: "Customer data analysis",
    tag: "The Foundation",
    desc: "Analyzed purchasing patterns across Tokmanni's loyalty base to understand what drives individual buying decisions and identify high-potential customer segments.",
  },
  {
    id: 2,
    title: "ML model development",
    tag: "The Brain",
    desc: "Built machine learning models for product recommendations and dynamic per-customer discount pricing — matching the right offer to the right person at the right time.",
  },
  {
    id: 3,
    title: "GenAI-powered product summaries",
    tag: "The Magic",
    desc: "Used generative AI to create tailored product descriptions for different customer segments, making offers more relevant and engaging.",
  },
  {
    id: 4,
    title: "Integration & gradual rollout",
    tag: "The Scale",
    desc: "Integrated with existing systems and business rules. A/B testing validated performance before scaling. MLOps infrastructure ensures the models stay accurate over time.",
  },
];

const RESULT_EXTRAS = [
  "Scalable recommendation engine serving all loyalty customers",
  "MLOps infrastructure for continuous model improvement",
];

const RELATED_SOLUTIONS = [
  {
    title: "We don't really know our customers well enough",
    tag: "Customer Intelligence",
    description: "Turn fragmented customer data into a complete picture — so your team knows who to prioritize, what they need, and when to act.",
    slug: "/solutions/customer-intelligence",
  },
  {
    title: "Our pricing is leaving money on the table",
    tag: "Pricing Optimization",
    description: "Move from gut-feel pricing to AI-driven decisions that protect margins, respond to market shifts, and maximize revenue per customer.",
    slug: "/solutions/pricing-optimization",
  },
];

export default function TokmanniStory() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = STEPS.find(s => s.id === activeStep);

  return (
    <>
      {/* HERO */}
      <HeroSection
        gradient="lemon"
        gradientRight
        breadcrumb={[
          { label: "Customer Stories", href: "/customer-stories" },
          { label: "Tokmanni" },
        ]}
        badge="Customer Intelligence & Pricing"
        image="/images/logos/Tokmanni_BW.png"
        title="Tokmanni increases customer store visits and sales with personalized recommendations"
        subtitle="Personalized offers that actually engage customers — turning loyalty data into higher visits, more sales, and smarter discounts."
      />

      {/* ═══════════════════════════════════
           KEY METRICS
         ═══════════════════════════════════ */}
      <section style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "0 40px" }}>
          <Reveal delay={0.1} direction="scale">
            <div className="dd-stats-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              background: C.white, borderRadius: CARD_BORDER_RADIUS,
              border: `1px solid ${C.border}`, overflow: "hidden",
              transform: "translateY(-40px)",
            }}>
              {METRICS.map((s, i) => (
                <div key={i} style={{
                  padding: "32px 24px", textAlign: "center",
                  borderRight: i < 3 ? `1px solid ${C.border}` : "none",
                }}>
                  <div style={{
                    fontSize: 40, fontWeight: 600,
                    letterSpacing: "-0.02em", marginBottom: 4,
                  }}>
                    <CountUp value={s.number} />
                  </div>
                  <div style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           THE CHALLENGE
         ═══════════════════════════════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "48px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              The challenge
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              Tokmanni had a popular loyalty app with millions of users — but standard discount coupons weren't driving the engagement or visits the business needed.
            </p>
          </Reveal>

          <div className="dd-challenge-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          }}>
            {CHALLENGES.map((item, i) => (
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

      {/* ═══════════════════════════════════
           THE SOLUTION — Interactive Process
         ═══════════════════════════════════ */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              What we built
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              An AI-driven personalization engine that matches the right offer to the right customer — from data analysis through production deployment.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="dd-solution-interactive" style={{
              display: "flex", gap: 32,
            }}>
              {/* Left — step navigation */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                {STEPS.map((step) => {
                  const isActive = activeStep === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "20px 24px", borderRadius: CARD_BORDER_RADIUS, border: "none",
                        background: isActive ? C.white : "transparent",
                        boxShadow: isActive ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
                        cursor: "pointer", textAlign: "left",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <span style={{
                          width: 40, height: 40, borderRadius: "50%",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 14, fontWeight: 700, flexShrink: 0,
                          background: isActive ? C.black : C.lemon,
                          color: isActive ? C.white : C.black,
                          transition: "all 0.3s ease",
                        }}>{step.id}</span>
                        <span style={{
                          fontSize: 17, fontWeight: 500,
                          color: isActive ? C.black : "#aaa",
                          transition: "color 0.3s ease",
                        }}>{step.title}</span>
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

              {/* Right — animated content card */}
              <div style={{ flex: 1, minHeight: 360 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: "100%" }}
                  >
                    <div style={{
                      height: "100%", background: C.lemon, borderRadius: 32,
                      padding: "48px 40px", position: "relative", overflow: "hidden",
                      display: "flex", flexDirection: "column", justifyContent: "center",
                    }}>
                      {/* Decorative blob */}
                      <div style={{
                        position: "absolute", right: -60, top: -60,
                        width: 220, height: 220, borderRadius: "50%",
                        background: "rgba(255,255,255,0.25)", filter: "blur(60px)",
                        pointerEvents: "none",
                      }} />

                      <div style={{ position: "relative", zIndex: 1 }}>
                        <span style={{
                          display: "inline-block", padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS,
                          background: "rgba(0,0,0,0.06)", fontSize: 11, fontWeight: 700,
                          textTransform: "uppercase", letterSpacing: "0.06em",
                          color: C.black, marginBottom: 20,
                        }}>{currentStep?.tag}</span>

                        <h3 style={{
                          fontSize: 28, fontWeight: 500, marginBottom: 16,
                          letterSpacing: "-0.02em", lineHeight: 1.2,
                        }}>{currentStep?.title}</h3>

                        <p style={{
                          fontSize: 17, lineHeight: 1.7, color: "rgba(0,0,0,0.7)",
                        }}>{currentStep?.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           RESULTS & IMPACT
         ═══════════════════════════════════ */}
      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Results
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              AI-powered personalization that delivers measurable business impact — more visits, more sales, and smarter discounting.
            </p>
          </Reveal>

          {/* Bento grid: hero stat + right column */}
          <div className="dd-bento-row" style={{
            display: "flex", gap: 16, marginBottom: 16,
          }}>
            {/* Hero stat — 256% */}
            <Reveal style={{ flex: 2, minWidth: 0 }}>
              <div style={{
                background: C.white, borderRadius: 24, padding: "56px 44px",
                border: `1px solid ${C.border}`, height: "100%",
                display: "flex", flexDirection: "column", justifyContent: "center",
              }}>
                <div style={{
                  fontSize: 104, fontWeight: 600, letterSpacing: "-0.04em",
                  lineHeight: 1, marginBottom: 16, color: C.black,
                }}>
                  <CountUp value="256%" />
                </div>
                <div style={{
                  fontSize: 20, fontWeight: 600, marginBottom: 8, color: C.black,
                }}>Increase in mobile coupon usage</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: C.textMuted, maxWidth: 400 }}>
                  Personalized offers matched to individual buying behavior — relevant coupons customers actually want to use.
                </p>
              </div>
            </Reveal>

            {/* Right column — stacked */}
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              <Reveal delay={0.08} style={{ flex: 1 }}>
                <div style={{
                  background: C.white, borderRadius: 24, padding: "32px 28px",
                  border: `1px solid ${C.border}`, height: "100%",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                }}>
                  <div style={{
                    fontSize: 56, fontWeight: 600, letterSpacing: "-0.03em",
                    lineHeight: 1, marginBottom: 12, color: C.black,
                  }}>
                    <CountUp value="2%" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6, color: C.black }}>
                    Increase in store visits
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: C.textMuted }}>
                    Physical store visits from app users driven by relevant offers
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.14} style={{ flex: 1 }}>
                <div style={{
                  background: C.white, borderRadius: 24, padding: "32px 28px",
                  border: `1px solid ${C.border}`, height: "100%",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                }}>
                  <div style={{
                    fontSize: 56, fontWeight: 600, letterSpacing: "-0.03em",
                    lineHeight: 1, marginBottom: 12, color: C.black,
                  }}>
                    <CountUp value="2%" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6, color: C.black }}>
                    Increase in sales
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: C.textMuted }}>
                    Sales lift among mobile app customers across all categories
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Lower discounts — accent card */}
          <Reveal delay={0.2}>
            <div style={{
              background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "28px 36px",
              border: `1px solid ${C.border}`, marginBottom: 40,
              display: "flex", alignItems: "center", gap: 24,
            }}>
              <div style={{
                fontSize: 40, fontWeight: 600, letterSpacing: "-0.03em",
                lineHeight: 1, color: C.black, flexShrink: 0,
              }}>Lower</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4, color: C.black }}>
                  Average discount amounts
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: C.textMuted }}>
                  Smarter targeting means smaller discounts drive better results
                </p>
              </div>
            </div>
          </Reveal>

          {/* Qualitative — beyond the numbers */}
          <Reveal delay={0.26}>
            <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 16, color: C.black }}>
              Beyond the numbers
            </h3>
          </Reveal>
          <div className="dd-bento-extras" style={{ display: "flex", gap: 16 }}>
            {RESULT_EXTRAS.map((item, i) => (
              <Reveal key={i} delay={0.3 + i * 0.06} style={{ flex: 1 }}>
                <div style={{
                  background: C.white, borderRadius: 16, padding: "20px 24px",
                  border: `1px solid ${C.border}`,
                  display: "flex", gap: 10, alignItems: "center",
                }}>
                  <CheckmarkIcon size={16} />
                  <span style={{ fontSize: 14, lineHeight: 1.5, color: C.textMuted }}>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           CLIENT TESTIMONIAL
         ═══════════════════════════════════ */}
      <section style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <TestimonialSpotlight
            quote="Our loyalty customers now get offers they care about. This means more visits, more sales, and 256% more coupon use. We turned customer insights into action — and real business results."
            highlight="256% more coupon use."
            name="Tuomas Vihavainen"
            photo="/images/people/MikaAho.jpg"
            title="Head of Group Analytics"
            company="Tokmanni"
            logo="/images/logos/Tokmanni_BW.png"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════
           RELATED SOLUTIONS
         ═══════════════════════════════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Explore related solutions
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              The approaches behind these results — available for your business too.
            </p>
          </Reveal>

          <div className="dd-related-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
          }}>
            {RELATED_SOLUTIONS.map((solution, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <FeaturedSolutionCard solution={solution} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready for similar results?"
        subtitle="Book a free 30-minute call. We'll discuss how personalization and AI-driven pricing could work for your business."
        image="/images/illustrations/DD-Illustration-3.png"
        imageSize={70}
      />
    </>
  );
}
