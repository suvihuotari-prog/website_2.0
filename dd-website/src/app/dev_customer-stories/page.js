"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, PILL_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CTASection } from "@/components/CTASection";

/* ══════════════════════════════════════════════
   Data
   ══════════════════════════════════════════════ */
const FEATURED = [
  {
    company: "Tokmanni",
    logo: "/images/logos/Tokmanni_BW.png",
    logoHeight: 36,
    tag: "Customer Intelligence & Pricing",
    slug: "/customer-stories/tokmanni",
    metric: "256%",
    metricLabel: "increase in coupon usage",
    title: "Personalized recommendations that customers actually use",
    description: "AI-driven personalization engine delivering recommendations matched to individual behavior across 800K active loyalty customers. 5.3% more store visits, 3.5% sales increase — validated over 9 months of continuous A/B testing.",
    quote: "Our loyalty customers now get offers they care about. This means more visits, more sales, and 256% more coupon use.",
    quoteName: "Tuomas Vihavainen",
    quoteRole: "Head of Group Analytics, Tokmanni",
    accent: C.lemon,
  },
  {
    company: "S-Pankki",
    tag: "Customer Intelligence",
    slug: "/customer-stories/s-pankki",
    metric: "3–7x",
    metricLabel: "sales conversion increase",
    title: "AI-powered customer prioritization that multiplies inbound sales",
    description: "Automated loan prioritization significantly increasing sales. Customer KPI followed at C-level across the organization. Inbound call conversion multiplied through intelligent routing.",
    accent: C.turquoise,
  },
  {
    company: "Sandvik",
    logo: "/images/logos/Sandvik_BW.png",
    tag: "AI Strategy & Roadmap",
    slug: "/customer-stories/sandvik",
    metric: "500+",
    metricLabel: "AI ideas → 60 use cases",
    title: "From 500 ideas to a clear roadmap for AI-driven growth",
    description: "Structured evaluation framework that narrowed 500+ AI ideas to 60 high-impact use cases. The organization continues to use the framework independently — building momentum beyond the engagement.",
    accent: C.seawave,
  },
];

const STORIES = [
  { company: "Helen", logo: "/images/logos/Helen_BW.png", logoHeight: 50, tag: "AI Strategy & Governance", area: "strategy", slug: "/customer-stories/helen", metric: "C-suite funded", description: "C-suite approval and funding for AI pilots. AI roadmap and project plan delivered. Data ownership aligned to business processes.", quote: "The project was comprehensive and professionally planned, significantly advancing our AI development.", quoteName: "Kati Kinnunen", quoteRole: "Chief Digital Officer, Helen Sähköverkko" },
  { company: "Elisa", logo: "/images/logos/Elisa_BW.png", logoHeight: 40, tag: "AI Strategy & Roadmap", area: "strategy", slug: "/customer-stories/elisa", metric: "15 use cases", description: "60+ data product ideas evaluated, 15 high-value use cases selected for development across 4 business areas." },
  { company: "Kirjastopalvelu", tag: "Pricing & Revenue", area: "pricing", slug: "/customer-stories/kirjastopalvelu", metric: "15–20%", description: "Profit increase with AI-powered auction pricing. 10%+ sales volume increase. Dynamic pricing that adapts to real market behavior." },
  { company: "Metso", tag: "Predictive Operations", area: "operations", slug: "/customer-stories/metso", metric: "30%", description: "Better supplier lead time prediction. 10% improvement in purchase-to-delivery estimates. Scaled from pilot to 5 global teams." },
  { company: "Anora", logo: "/images/logos/Anora_BW.png", logoHeight: 30, tag: "Data Governance", area: "governance", slug: "/customer-stories/anora", metric: "5 countries", description: "Unified data governance across 5 countries post-merger. 2 data domains aligned with clear ownership.", quote: "Data Design helped us take control of our master data. Their clear approach made our data more accurate and easier to manage.", quoteName: "Matti Nurmi", quoteRole: "CIO, Anora" },
  { company: "Viestimedia", logo: "/images/logos/Viestimedia_BW.png", logoHeight: 35, tag: "AI Strategy & Marketing", area: "strategy", slug: "/customer-stories/viestimedia", metric: "38%", description: "Improvement in customer acquisition. 37% cost reduction. 16% CPC reduction. Data-driven marketing that delivered.", quote: "Working with Data Design gave us a clear direction for using data to grow.", quoteName: "Taru Salo", quoteRole: "Head of Digital Development, Viestimedia" },
  { company: "A-Insinöörit", logo: "/images/logos/A-Insinoorit_BW.jpg", logoHeight: 28, tag: "Customer Intelligence", area: "customer", slug: "/customer-stories/a-insinorit", metric: "GenAI", description: "GenAI-powered customer memory for sales teams. Automated meeting prep and standardized sales reports." },
  { company: "Solar Foods", logo: "/images/logos/SolarFoods_BW.jpg", logoHeight: 35, tag: "Generative AI", area: "genai", slug: "/customer-stories/solar-foods", metric: "Hours → min", description: "Automated lab report processing — PDF to structured data. EFSA regulatory monitoring. Hours of manual work eliminated." },
  { company: "KTI", tag: "Generative AI", area: "genai", slug: "/customer-stories/kti-kiinteistotieto", metric: "Text2SQL", description: "Natural language queries for complex real estate market data, embedded directly in the existing client portal." },
  { company: "NTG", logo: "/images/logos/NTG_BW.png", logoHeight: 32, tag: "Supply Chain", area: "operations", slug: "/customer-stories/ntg", metric: "65%", description: "Lost sales analysis revealed potential to capture 65% of previously lost revenue. ToC-based inventory replenishment." },
  { company: "Neste", tag: "Regulatory & Compliance", area: "operations", slug: "/customer-stories/neste", metric: "€14M", description: "Potential to mitigate €14M in distribution obligation reporting risks through data-driven compliance monitoring." },
  { company: "Wolt", tag: "Data Governance", area: "governance", slug: "/customer-stories/wolt", metric: "Scalable", description: "Vendor on-boarding process design. Risk management framework for third-party data. Governance that scales with rapid growth." },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "strategy", label: "Strategy" },
  { key: "customer", label: "Customer Intelligence" },
  { key: "pricing", label: "Pricing" },
  { key: "governance", label: "Governance" },
  { key: "genai", label: "GenAI" },
  { key: "operations", label: "Operations" },
];

const HEADLINE_STATS = [
  { value: "€200M+", label: "Revenue impact" },
  { value: "50+", label: "AI solutions shipped" },
  { value: "100+", label: "Companies accelerated" },
  { value: "30+", label: "Board-approved roadmaps" },
];

/* ══════════════════════════════════════════════
   Hero stat — animated counter on dark bg
   ══════════════════════════════════════════════ */
function HeroStat({ value, label, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: "center" }}
    >
      <div style={{
        fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em",
        color: C.lemon, lineHeight: 1, marginBottom: 6,
      }}>
        <CountUp value={value} />
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, color: "#ffffff88", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   Featured story — magazine spread
   ══════════════════════════════════════════════ */
function FeaturedStory({ story, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="dd-dev-cs-featured" style={{
        display: "flex", flexDirection: isEven ? "row" : "row-reverse",
        gap: 0, overflow: "hidden",
        borderRadius: 24,
        border: `1px solid ${C.border}`,
        background: C.white,
        minHeight: 400,
      }}>
        {/* Metric panel */}
        <div style={{
          width: "38%", flexShrink: 0,
          background: index === 0 ? C.black : index === 1 ? C.gray : `${C.seawave}08`,
          display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center",
          padding: "48px 36px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Decorative diagonal lines */}
          <div style={{
            position: "absolute", inset: 0, opacity: index === 0 ? 0.04 : 0.02,
            backgroundImage: `repeating-linear-gradient(
              ${isEven ? "45deg" : "-45deg"},
              transparent, transparent 20px,
              ${index === 0 ? "#ffffff" : C.black} 20px,
              ${index === 0 ? "#ffffff" : C.black} 21px
            )`,
            pointerEvents: "none",
          }} />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            style={{ position: "relative", textAlign: "center" }}
          >
            <div className="dd-article-serif" style={{
              fontSize: 80, lineHeight: 1,
              color: index === 0 ? C.lemon : C.black,
              marginBottom: 12, letterSpacing: "-0.04em",
            }}>
              {story.metric}
            </div>
            <div style={{
              fontSize: 13, fontWeight: 500, letterSpacing: "0.02em",
              color: index === 0 ? "#ffffff99" : C.textMuted,
              maxWidth: 180, lineHeight: 1.4,
            }}>
              {story.metricLabel}
            </div>
          </motion.div>
        </div>

        {/* Content panel */}
        <div style={{
          flex: 1, padding: "44px 44px",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{
              padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS,
              border: `1px solid ${C.border}`,
              fontSize: 11, fontWeight: 600, textTransform: "uppercase",
              letterSpacing: "0.06em", color: C.textMuted,
            }}>{story.tag}</span>
          </div>

          {story.logo ? (
            <img src={story.logo} alt={story.company} style={{
              height: story.logoHeight || 28, width: "auto", objectFit: "contain",
              alignSelf: "flex-start", marginBottom: 16, filter: "grayscale(100%)",
            }} />
          ) : (
            <h3 style={{ fontSize: 26, fontWeight: 600, marginBottom: 16, letterSpacing: "-0.01em" }}>
              {story.company}
            </h3>
          )}

          <h3 className="dd-article-serif" style={{
            fontSize: 26, lineHeight: 1.25, marginBottom: 16,
            letterSpacing: "-0.02em", maxWidth: 460,
          }}>
            {story.title}
          </h3>

          <p style={{ fontSize: 15, lineHeight: 1.7, color: C.textMuted, maxWidth: 460, marginBottom: 20 }}>
            {story.description}
          </p>

          {story.quote && (
            <div style={{
              borderTop: `1px solid ${C.border}`, paddingTop: 20, marginTop: "auto",
            }}>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic", marginBottom: 8 }}>
                &ldquo;{story.quote}&rdquo;
              </p>
              {story.quoteName && (
                <p style={{ fontSize: 12, fontWeight: 600, color: C.seawave }}>
                  &mdash; {story.quoteName}, <span style={{ fontWeight: 400 }}>{story.quoteRole}</span>
                </p>
              )}
            </div>
          )}

          {story.slug && (
            <a href={story.slug} className="dd-arrow-link" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              marginTop: story.quote ? 16 : "auto", paddingTop: story.quote ? 0 : 0,
              fontSize: 13, fontWeight: 600,
              color: C.seawave, textDecoration: "none",
            }}>
              Read the full story
              <span className="dd-arrow">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8h8M9 5l3 3-3 3" stroke={C.seawave} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   Story card — masonry item
   ══════════════════════════════════════════════ */
function StoryCard({ story }) {
  const hasQuote = !!story.quote;

  return (
    <a href={story.slug || "#"} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <motion.div
        className="dd-dev-cs-card"
        style={{
          background: C.white, borderRadius: 20,
          border: `1px solid ${C.border}`,
          overflow: "hidden",
          position: "relative",
        }}
        whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Metric bar at top */}
        <div style={{
          padding: "20px 24px 16px",
          borderBottom: `1px solid ${C.border}`,
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
        }}>
          <span className="dd-article-serif" style={{
            fontSize: 36, color: C.black, letterSpacing: "-0.03em", lineHeight: 1,
          }}>
            {story.metric}
          </span>
          <span style={{
            padding: "4px 12px", borderRadius: PILL_BORDER_RADIUS,
            background: C.gray, fontSize: 10, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.06em", color: C.textMuted,
          }}>{story.tag}</span>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 24px 24px" }}>
          {story.logo ? (
            <img src={story.logo} alt={story.company} style={{
              height: story.logoHeight || 22, width: "auto", objectFit: "contain",
              marginBottom: 12, filter: "grayscale(100%)", opacity: 0.7,
            }} />
          ) : (
            <h4 style={{
              fontSize: 16, fontWeight: 600, marginBottom: 12,
              color: C.black, letterSpacing: "-0.01em",
            }}>{story.company}</h4>
          )}

          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted, marginBottom: hasQuote ? 16 : 0 }}>
            {story.description}
          </p>

          {hasQuote && (
            <div style={{
              borderTop: `1px solid ${C.border}`, paddingTop: 14, marginTop: 4,
            }}>
              <p style={{
                fontSize: 13, lineHeight: 1.55, color: C.textMuted,
                fontStyle: "italic", marginBottom: 8,
              }}>
                &ldquo;{story.quote}&rdquo;
              </p>
              <p style={{ fontSize: 11, fontWeight: 600, color: C.seawave }}>
                &mdash; {story.quoteName}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </a>
  );
}

/* ══════════════════════════════════════════════
   Main Page
   ══════════════════════════════════════════════ */
export default function DevCustomerStoriesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? STORIES : STORIES.filter(s => s.area === activeFilter);

  /* Hero parallax */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, 80]);

  return (
    <>
      {/* ═══════════════════════════════════
           HERO — Dark, typographic, authoritative
         ═══════════════════════════════════ */}
      <section ref={heroRef} style={{
        paddingTop: 72,
        background: C.black,
        position: "relative", overflow: "hidden",
        minHeight: "85vh",
      }}>
        {/* Subtle diagonal lines */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent, transparent 40px,
            #ffffff 40px, #ffffff 41px
          )`,
          pointerEvents: "none",
        }} />

        {/* Lemon accent glow — top left */}
        <div style={{
          position: "absolute", top: "-15%", left: "-8%",
          width: "45%", height: "50%", borderRadius: "50%",
          background: C.lemon, opacity: 0.04, filter: "blur(120px)",
          pointerEvents: "none",
        }} />

        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
          <div style={{
            maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto",
            padding: "120px 40px 0", position: "relative", zIndex: 2,
          }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                marginBottom: 36,
              }}>
                <div style={{ width: 32, height: 2, background: C.lemon }} />
                <span style={{
                  fontSize: 12, fontWeight: 600, textTransform: "uppercase",
                  letterSpacing: "0.1em", color: C.lemon,
                }}>Customer Stories</span>
              </div>
            </motion.div>

            {/* Title — large serif on dark */}
            <motion.h1
              className="dd-article-serif"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 72, lineHeight: 1.05, letterSpacing: "-0.03em",
                color: C.white, maxWidth: 700, marginBottom: 28,
              }}
            >
              Results that reached
              <br />
              the boardroom
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                fontSize: 18, lineHeight: 1.7, color: "#ffffff99",
                maxWidth: 540, marginBottom: 48,
              }}
            >
              Every engagement starts with a real business problem and ends with measurable impact. Not slide decks — production systems your teams use every day.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 80 }}
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-block", background: C.lemon, color: C.black,
                  padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                  fontWeight: 600, fontSize: 15, textDecoration: "none",
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
              >Book a free call</a>
              <a href="/services"
                style={{
                  display: "inline-block", background: "transparent", color: C.white,
                  padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                  border: "1px solid #ffffff33", fontWeight: 500, fontSize: 15,
                  textDecoration: "none", transition: "border-color 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#ffffff88"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#ffffff33"; }}
              >See our services</a>
            </motion.div>

            {/* Stats strip */}
            <div style={{
              display: "flex", justifyContent: "space-between", gap: 20,
              paddingTop: 40, borderTop: "1px solid #ffffff12",
              paddingBottom: 80,
            }}>
              {HEADLINE_STATS.map((s, i) => (
                <HeroStat key={i} value={s.value} label={s.label} delay={0.8 + i * 0.1} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
           FEATURED — Magazine spreads
         ═══════════════════════════════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 52 }}>
              <h2 className="dd-article-serif" style={{
                fontSize: 42, letterSpacing: "-0.02em",
              }}>
                Highlighted results
              </h2>
              <div style={{ flex: 1, height: 1, background: C.border }} />
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {FEATURED.map((story, i) => (
              <FeaturedStory key={story.company} story={story} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           GRID — Filterable masonry
         ═══════════════════════════════════ */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
              <div>
                <h2 className="dd-article-serif" style={{
                  fontSize: 42, letterSpacing: "-0.02em", marginBottom: 8,
                }}>
                  All client stories
                </h2>
                <p style={{ fontSize: 16, color: C.textMuted, lineHeight: 1.6 }}>
                  A closer look at how we turn data and AI into measurable results.
                </p>
              </div>

              {/* Filter tabs */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {FILTERS.map(f => (
                  <motion.button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    whileTap={{ scale: 0.97 }}
                    animate={{
                      background: activeFilter === f.key ? C.black : C.white,
                      color: activeFilter === f.key ? C.white : C.textMuted,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      padding: "7px 16px", borderRadius: PILL_BORDER_RADIUS,
                      fontSize: 13, fontWeight: 500,
                      border: `1px solid ${C.border}`,
                      cursor: "pointer",
                    }}
                  >{f.label}</motion.button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="dd-dev-cs-masonry" style={{ columnCount: 3, columnGap: 20 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((story, i) => (
                <motion.div
                  key={story.company}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  style={{ breakInside: "avoid", marginBottom: 20 }}
                >
                  <StoryCard story={story} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           TESTIMONIALS — Dark, editorial
         ═══════════════════════════════════ */}
      <section style={{
        background: C.black,
        position: "relative", overflow: "hidden",
      }}>
        {/* Subtle lemon glow */}
        <div style={{
          position: "absolute", bottom: "-20%", right: "5%",
          width: "40%", height: "60%", borderRadius: "50%",
          background: C.lemon, opacity: 0.03, filter: "blur(100px)",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto",
          padding: "88px 40px", position: "relative", zIndex: 1,
        }}>
          <Reveal>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 56,
            }}>
              <div style={{ width: 32, height: 2, background: C.lemon }} />
              <span style={{
                fontSize: 12, fontWeight: 600, textTransform: "uppercase",
                letterSpacing: "0.1em", color: C.lemon,
              }}>In their words</span>
            </div>
          </Reveal>

          {/* Large featured quote */}
          <Reveal delay={0.1}>
            <div style={{ marginBottom: 64 }}>
              <p className="dd-article-serif" style={{
                fontSize: 36, lineHeight: 1.35, color: C.white,
                maxWidth: 800, marginBottom: 28, fontStyle: "italic",
                letterSpacing: "-0.015em",
              }}>
                &ldquo;The project was comprehensive and professionally planned, significantly advancing our AI development. The clarity of the workshops and tools was impressive.&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <img src="/images/people/kati_kinnunen.png" alt="Kati Kinnunen" style={{
                  width: 48, height: 48, borderRadius: "50%", objectFit: "cover",
                  border: `2px solid ${C.lemon}33`,
                }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.white }}>Kati Kinnunen</div>
                  <div style={{ fontSize: 12, color: "#ffffff66" }}>Chief Digital Officer, Helen Sähköverkko</div>
                </div>
                <img src="/images/logos/Helen_BW.png" alt="Helen" style={{
                  height: 28, width: "auto", marginLeft: "auto", opacity: 0.3,
                  filter: "invert(1)",
                }} />
              </div>
            </div>
          </Reveal>

          {/* Smaller quotes grid */}
          <div className="dd-dev-cs-quotes" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24,
          }}>
            {[
              { quote: "Many consultants speak 'digital language' to us. Data Design understood how to communicate with our business people.", name: null, role: "Client executive" },
              { quote: "Data Design helped us take control of our master data. Their clear approach made our data more accurate and easier to manage.", name: "Matti Nurmi", role: "CIO, Anora", photo: "/images/people/MattiNurmi.png" },
              { quote: "Working with Data Design gave us a clear direction for using data to grow. The strategy and roadmap focus on real business needs.", name: "Taru Salo", role: "Head of Digital Development, Viestimedia", photo: "/images/people/TaruSalo.png" },
            ].map((t, i) => (
              <Reveal key={i} delay={0.15 + i * 0.06}>
                <div style={{
                  padding: "28px 24px",
                  borderLeft: `2px solid ${[C.lemon, C.turquoise, C.seawave][i]}`,
                }}>
                  <p style={{
                    fontSize: 14.5, lineHeight: 1.65, color: "#ffffffcc",
                    fontStyle: "italic", marginBottom: 20,
                  }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {t.photo && (
                      <img src={t.photo} alt={t.name} style={{
                        width: 32, height: 32, borderRadius: "50%", objectFit: "cover",
                        border: "1px solid #ffffff22",
                      }} />
                    )}
                    <div>
                      {t.name && <div style={{ fontSize: 13, fontWeight: 600, color: "#ffffffdd" }}>{t.name}</div>}
                      <div style={{ fontSize: 11, color: "#ffffff66" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           TEAM BACKGROUND — Lemon accent
         ═══════════════════════════════════ */}
      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 className="dd-article-serif" style={{
              fontSize: 42, marginBottom: 12, letterSpacing: "-0.02em",
            }}>
              The team behind these results
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 48 }}>
              Senior practitioners with track records at the most demanding AI implementations in the Nordics.
            </p>
          </Reveal>

          <div className="dd-dev-cs-team" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { stat: "20+", label: "Years avg. experience", desc: "Team from Silo AI, H&M, Deloitte, Bilot, and Bigdatapump. Senior people who've built and shipped AI systems at scale." },
              { stat: "€200M+", label: "Revenue impact at H&M", desc: "Team members led the AI-based supply chain decision support system that drove over €200M in revenue increase." },
              { stat: "1–3%", label: "Fuel savings at Eniram", desc: "Team members built the system reducing fuel costs for large marine vessels — translating to millions in annual savings." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  background: C.white, borderRadius: 20, padding: "32px 28px",
                  border: `1px solid ${C.border}`, height: "100%",
                }}>
                  <div className="dd-article-serif" style={{
                    fontSize: 40, letterSpacing: "-0.03em", marginBottom: 4, color: C.black, lineHeight: 1,
                  }}>
                    <CountUp value={item.stat} />
                  </div>
                  <div style={{
                    fontSize: 12, fontWeight: 600, textTransform: "uppercase",
                    letterSpacing: "0.04em", color: C.seawave, marginBottom: 14,
                  }}>{item.label}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           CTA
         ═══════════════════════════════════ */}
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
