"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CaseCard } from "@/components/CaseCard";
import { CountUp } from "@/components/CountUp";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TestimonialSpotlight } from "@/components/TestimonialSpotlight";
import { CTASection } from "@/components/CTASection";

const FEATURED_STORIES = [
  {
    company: "Tokmanni",
    logo: "/images/logos/Tokmanni_BW.png",
    logoHeight: 40,
    tag: "Customer Intelligence & Pricing",
    area: "customer",
    slug: "/customer-stories/tokmanni",
    metric: "256%",
    metricLabel: "increase in coupon usage",
    title: "Tokmanni increases customer store visits and sales with personalized recommendations",
    description: "AI-driven personalization engine delivering recommendations matched to individual behavior. 256% more coupon usage through targeted offers. 2% increase in store visits, 2% sales lift.",
    testimonial: {
      quote: "Our loyalty customers now get offers they care about. This means more visits, more sales, and 256% more coupon use. We turned customer insights into action — and real business results.",
      name: "Tuomas Vihavainen",
      title: "Head of Group Analytics",
      company: "Tokmanni",
    },
  },
  {
    company: "S-Pankki",
    tag: "Customer Intelligence",
    area: "customer",
    slug: "/customer-stories/s-pankki",
    metric: "3–7x",
    metricLabel: "sales conversion increase",
    title: "S-Pankki multiplies inbound sales conversion with AI-powered customer prioritization",
    description: "3–7x increase in inbound call sales conversion. Automated loan prioritization significantly increasing sales. Customer KPI followed at C-level across the organization.",
  },
  {
    company: "Sandvik",
    logo: "/images/logos/Sandvik_BW.png",
    tag: "AI Strategy & Roadmap",
    area: "strategy",
    slug: "/customer-stories/sandvik",
    metric: "500+",
    metricLabel: "AI ideas → 60 use cases",
    title: "Sandvik narrows 500+ AI ideas into a clear roadmap for AI-driven growth",
    description: "500+ AI ideas narrowed to 60 high-impact use cases with a clear roadmap for AI-driven growth. Structured evaluation framework that the organization continues to use independently.",
  },
];

const STORIES = [
  {
    company: "Helen",
    logo: "/images/logos/Helen_BW.png",
    logoHeight: 50,
    tag: "AI Strategy & Governance",
    area: "strategy",
    slug: "/customer-stories/helen",
    metric: "C-suite funded",
    title: "Helen secures C-suite funding for AI with a clear roadmap and data ownership model",
    description: "C-suite approval and funding for AI pilots. AI roadmap and project plan delivered. Data ownership aligned to business processes across the organization.",
    testimonial: {
      quote: "The project was comprehensive and professionally planned, significantly advancing our AI development. The clarity of the workshops and tools was impressive.",
      name: "Kati Kinnunen",
      title: "Chief Digital Officer",
      company: "Helen Sähköverkko",
    },
  },
  {
    company: "Elisa",
    logo: "/images/logos/Elisa_BW.png",
    logoHeight: 40,
    tag: "AI Strategy & Roadmap",
    area: "strategy",
    slug: "/customer-stories/elisa",
    metric: "15 use cases",
    title: "Elisa turns 60+ data product ideas into 15 high-value use cases across 4 business areas",
    description: "60+ data product ideas evaluated, 15 high-value use cases selected for development. Data strategy created across 4 business areas with clear ownership and prioritization.",
  },
  {
    company: "Kirjastopalvelu",
    tag: "Pricing & Revenue Optimization",
    area: "pricing",
    slug: "/customer-stories/kirjastopalvelu",
    metric: "15–20%",
    title: "Kirjastopalvelu increases profits 15–20% with AI-powered auction pricing",
    description: "15–20% profit increase with AI-powered auction pricing. 10%+ sales volume increase. Dynamic pricing model that adapts to real market behavior automatically.",
  },
  {
    company: "Metso",
    tag: "Predictive Operations",
    area: "operations",
    slug: "/customer-stories/metso",
    metric: "30%",
    title: "Metso improves supplier lead time prediction by 30% and scales to 5 global teams",
    description: "30% better supplier lead time prediction. 10% improvement in purchase-to-delivery estimates. Solution scaled from pilot to 5 global teams across the organization.",
  },
  {
    company: "Anora",
    logo: "/images/logos/Anora_BW.png",
    logoHeight: 30,
    tag: "Data Governance",
    area: "governance",
    slug: "/customer-stories/anora",
    metric: "5 countries",
    title: "Anora unifies data governance across 5 countries after a major merger",
    description: "Unified data governance across 5 countries post-merger. 2 data domains aligned with clear ownership. SAP S/4HANA transformation support with governance framework.",
    testimonial: {
      quote: "Data Design helped us take control of our master data. Their clear approach made our data more accurate and easier to manage.",
      name: "Matti Nurmi",
      title: "CIO",
      company: "Anora",
    },
  },
  {
    company: "Viestimedia",
    logo: "/images/logos/Viestimedia_BW.png",
    logoHeight: 35,
    tag: "AI Strategy & Marketing",
    area: "strategy",
    slug: "/customer-stories/viestimedia",
    metric: "38%",
    title: "Viestimedia improves customer acquisition by 38% with a data-driven marketing strategy",
    description: "38% improvement in customer acquisition. 37% cost reduction. 16% CPC reduction. Data-driven marketing strategy that delivered measurable results across channels.",
    testimonial: {
      quote: "Working with Data Design gave us a clear direction for using data to grow. The strategy and roadmap focus on real business needs.",
      name: "Taru Salo",
      title: "Head of Digital Development",
      company: "Viestimedia",
    },
  },
  {
    company: "A-Insinöörit",
    logo: "/images/logos/A-Insinoorit_BW.jpg",
    logoHeight: 28,
    tag: "Customer Intelligence",
    area: "customer",
    slug: "/customer-stories/a-insinorit",
    metric: "GenAI-powered",
    title: "A-Insinöörit gives sales teams GenAI-powered customer memory and automated meeting prep",
    description: "GenAI-powered customer memory for sales teams. Automated meeting prep and standardized sales reports. Complete customer context available before every interaction.",
  },
  {
    company: "Solar Foods",
    logo: "/images/logos/SolarFoods_BW.jpg",
    logoHeight: 35,
    tag: "Generative AI",
    area: "genai",
    slug: "/customer-stories/solar-foods",
    metric: "Hours → minutes",
    title: "Solar Foods automates lab reporting and regulatory monitoring with GenAI",
    description: "Automated lab report processing — from PDF to structured data. EFSA regulatory monitoring system that tracks changes automatically. Hours of manual work reduced to minutes.",
  },
  {
    company: "KTI Kiinteistötieto",
    tag: "Generative AI",
    area: "genai",
    slug: "/customer-stories/kti-kiinteistotieto",
    metric: "Text2SQL",
    title: "KTI Kiinteistötieto lets anyone query real estate data with natural language",
    description: "Text2SQL solution for complex real estate market data. Natural language queries embedded directly in the existing client portal. Anyone can query data without SQL skills.",
  },
  {
    company: "NTG",
    logo: "/images/logos/NTG_BW.png",
    logoHeight: 32,
    tag: "Supply Chain & Inventory",
    area: "operations",
    slug: "/customer-stories/ntg",
    metric: "65%",
    title: "NTG uncovers potential to capture 65% of previously lost revenue",
    description: "Lost sales analysis revealed potential to capture 65% of previously lost revenue. Theory of Constraints-based inventory replenishment model for smarter stock decisions.",
  },
  {
    company: "Neste",
    tag: "Regulatory & Compliance",
    area: "operations",
    slug: "/customer-stories/neste",
    metric: "€14M",
    title: "Neste mitigates €14M in distribution obligation reporting risks",
    description: "Potential to mitigate €14M in distribution obligation reporting risks. Data-driven approach to regulatory compliance monitoring across the organization.",
  },
  {
    company: "Wolt",
    tag: "Data Governance",
    area: "governance",
    slug: "/customer-stories/wolt",
    metric: "Scalable governance",
    title: "Wolt builds a scalable governance model for vendor on-boarding and risk management",
    description: "Vendor on-boarding process design. Risk management framework for third-party data handling. Governance model that scales with rapid growth.",
  },
  {
    company: "Konecranes",
    tag: "Customer Intelligence",
    area: "customer",
    slug: "/customer-stories/konecranes",
    metric: "Unified profiles",
    title: "Konecranes designs unified customer profiles for better sales and marketing targeting",
    description: "Customer profile design for better sales and marketing targeting. Unified view of customer data to support commercial decision-making across business units.",
  },
];

const FILTERS = [
  { key: "all", label: "All stories" },
  { key: "strategy", label: "AI Strategy" },
  { key: "customer", label: "Customer Intelligence" },
  { key: "pricing", label: "Pricing" },
  { key: "governance", label: "Data Governance" },
  { key: "genai", label: "Generative AI" },
  { key: "operations", label: "Operations & Supply Chain" },
];

export default function CustomerStoriesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? STORIES : STORIES.filter(s => s.area === activeFilter);

  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="Real results, real clients"
        titleSize={64}
        subtitleDark
        blobs={2}
        title="Customer stories"
        image="/images/illustrations/DD-Illustration-3.png"
        subtitle="Every engagement starts with a real business problem and ends with measurable impact. Here's what that looks like across industries and AI maturity levels."
        primaryButton={{ label: "Book a free call", href: CALENDLY_URL }}
        secondaryButton={{ label: "See our services", href: "/services" }}
      />

      {/* FEATURED STORIES */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 0" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Highlighted results</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 600, marginBottom: 52 }}>
              A few engagements that show what's possible.
            </p>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", paddingBottom: 88 }}>
            {FEATURED_STORIES.map((story, i) => (
              <div key={story.company} style={{
                position: "sticky",
                top: `calc(100px + ${i * 24}px)`,
                zIndex: i,
                marginBottom: 24,
              }}>
              <Reveal delay={i * 0.08}>
                <div className="dd-featured-story" style={{
                  display: "flex", overflow: "hidden",
                  background: C.white, borderRadius: 40,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                  transition: "box-shadow 0.3s ease",
                }}>
                  {/* Column 1: Metric */}
                  <div style={{
                    width: 280, flexShrink: 0,
                    padding: "40px 32px",
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start",
                    background: i === 0 ? C.lemon : C.gray,
                  }}>
                    <div style={{ fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: C.black }}>
                      {story.metric}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: `${C.black}b3`, marginTop: 12, lineHeight: 1.4 }}>
                      {story.metricLabel}
                    </div>
                  </div>

                  {/* Column 2: Context */}
                  <div style={{
                    flex: 1, padding: "40px 40px",
                    display: "flex", flexDirection: "column", justifyContent: "center",
                    borderRight: story.testimonial ? `1px solid ${C.border}` : "none",
                  }}>
                    <div style={{ marginBottom: 20 }}>
                      <span style={{
                        display: "inline-block", padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS,
                        border: `1px solid ${C.black}18`,
                        fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "0.06em", color: `${C.black}99`,
                      }}>{story.tag}</span>
                    </div>
                    {story.logo ? (
                      <img src={story.logo} alt={story.company} style={{
                        height: story.logoHeight || 28, width: "auto", objectFit: "contain", marginBottom: 12,
                        alignSelf: "flex-start",
                      }} />
                    ) : (
                      <h3 style={{ fontSize: 24, fontWeight: 500, marginBottom: 12, letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                        {story.company}
                      </h3>
                    )}
                    {story.title && (
                      <h4 style={{ fontSize: 18, fontWeight: 500, marginBottom: 12, lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                        {story.title}
                      </h4>
                    )}
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: C.textMuted }}>
                      {story.description}
                    </p>
                    {story.slug && (
                      <a href={story.slug} style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        marginTop: 20, fontSize: 13, fontWeight: 600,
                        color: C.seawave, textDecoration: "none",
                      }}>
                        Read story
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M4 8h8M9 5l3 3-3 3" stroke={C.seawave} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Column 3: Quote (only if testimonial exists) */}
                  {story.testimonial && (
                    <div style={{
                      width: 320, flexShrink: 0,
                      padding: "40px 36px",
                      display: "flex", flexDirection: "column", justifyContent: "center",
                      position: "relative",
                      background: `${C.gray}80`,
                    }}>
                      <span style={{
                        position: "absolute", top: 20, left: 28,
                        fontSize: 64, fontFamily: "Georgia, serif", lineHeight: 1,
                        color: C.turquoise,
                      }}>{"\u201C"}</span>
                      <div style={{ position: "relative", zIndex: 1, paddingTop: 16 }}>
                        <p style={{
                          fontSize: 15, fontWeight: 500, fontStyle: "italic",
                          color: C.black, lineHeight: 1.6, marginBottom: 24,
                        }}>
                          {story.testimonial.quote}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{
                            width: 40, height: 40, borderRadius: "50%",
                            background: C.white, border: `1px solid ${C.border}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 12, fontWeight: 700, color: C.textMuted, flexShrink: 0,
                          }}>{story.testimonial.name.split(" ").map(n => n[0]).join("")}</div>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: 14, fontWeight: 700, color: C.black }}>{story.testimonial.name}</span>
                            <span style={{ fontSize: 10, fontWeight: 500, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                              {story.testimonial.title}, {story.testimonial.company}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER + STORIES GRID */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 36, fontWeight: 400, marginBottom: 8, letterSpacing: "-0.02em" }}>Selected client stories</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: C.textMuted, marginBottom: 36 }}>
              A closer look at how we have helped our clients turn data and AI into measurable results.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
              {FILTERS.map(f => (
                <motion.button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  animate={{
                    background: activeFilter === f.key ? C.black : C.white,
                    color: activeFilter === f.key ? C.white : C.textMuted,
                    borderColor: activeFilter === f.key ? C.black : C.border,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: "8px 20px", borderRadius: PILL_BORDER_RADIUS, fontSize: 14, fontWeight: 500,
                    border: `1px solid ${C.border}`,
                    cursor: "pointer",
                  }}
                >{f.label}</motion.button>
              ))}
            </div>
          </Reveal>

          <div
            className="dd-stories-masonry"
            style={{ columnCount: 3, columnGap: 20 }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((story, i) => (
                <motion.div
                  key={story.company}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  style={{ breakInside: "avoid", marginBottom: 20 }}
                >
                  <CaseCard
                    company={story.company}
                    logo={story.logo}
                    logoHeight={story.logoHeight}
                    tag={story.tag}
                    title={story.title}
                    description={story.description}
                    testimonial={story.testimonial}
                    metric={story.metric}
                    slug={story.slug}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIALS */}
      <section className="dd-grain-subtle" style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em" }}>In their words</h2>
          </Reveal>

          {/* Spotlight */}
          <TestimonialSpotlight
            quote="The project was comprehensive and professionally planned, significantly advancing our AI development. The clarity of the workshops and tools was impressive."
            highlight="significantly advancing our AI development."
            name="Kati Kinnunen"
            photo="/images/people/kati_kinnunen.png"
            title="Chief Digital Officer"
            company="Helen Sähköverkko"
            logo="/images/logos/Helen_BW.png"
          />

          {/* Smaller testimonials */}
          <div className="dd-testimonials-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
            <Reveal delay={0.06}>
              <TestimonialCard
                quote="Many consultants speak 'digital language' to us. Data Design understood how to communicate with our business people."
                title="Client executive"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <TestimonialCard
                quote="Our loyalty customers now get offers they care about. This means more visits, more sales, and 88% more coupon use. We turned customer insights into action — and real business results."
                name="Tuomas Vihavainen"
                title="Head of Group Analytics"
                company="Tokmanni"
                logo="/images/logos/Tokmanni_BW.png"
              />
            </Reveal>
            <Reveal delay={0.14}>
              <TestimonialCard
                quote="Data Design helped us take control of our master data. Their clear approach made our data more accurate and easier to manage."
                name="Matti Nurmi"
                photo="/images/people/MattiNurmi.png"
                title="CIO"
                company="Anora"
                logo="/images/logos/Anora_BW.png"
              />
            </Reveal>
            <Reveal delay={0.18}>
              <TestimonialCard
                quote="Working with Data Design gave us a clear direction for using data to grow. The strategy and roadmap focus on real business needs."
                name="Taru Salo"
                photo="/images/people/TaruSalo.png"
                title="Head of Digital Development"
                company="Viestimedia"
                logo="/images/logos/Viestimedia_BW.png"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM BACKGROUND */}
      <section className="dd-grain" style={{ background: `linear-gradient(to right, ${C.lemon}, ${C.turquoise})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>The team behind these results</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Our team includes specialists with track records at some of the most demanding AI implementations in the Nordics.
            </p>
          </Reveal>
          <div className="dd-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { stat: "20+", label: "Years avg. experience", desc: "Team from Silo AI, H&M, Deloitte, Bilot, and Bigdatapump. Senior people who've built and shipped AI systems at scale." },
              { stat: "€200M+", label: "Revenue impact at H&M", desc: "Team members led the AI-based supply chain decision support system that drove over €200M in revenue increase." },
              { stat: "1-3%", label: "Fuel savings at Eniram", desc: "Team members built the system reducing fuel costs for large marine vessels by 1-3% — translating to millions annually." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06} direction={i === 0 ? "left" : i === 1 ? "up" : "right"}>
                <div style={{
                  background: C.white, borderRadius: 16, padding: "28px 24px",
                  border: `1px solid ${C.border}`, height: "100%",
                }}>
                  <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4, color: C.black }}><CountUp value={item.stat} /></div>
                  <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: C.seawave, marginBottom: 12 }}>{item.label}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Want results like these?"
        subtitle="Book a free 30-minute call. We'll discuss your challenge and show how other organizations in your situation moved forward."
        secondaryLabel="See our services"
        secondaryHref="/services"
        image="/images/illustrations/DD-Illustration-3.png"
        imageSize={70}
      />
    </>
  );
}
