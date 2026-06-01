import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════
   DATA DESIGN — Brand Tokens
   ══════════════════════════════════════════════ */
const C = {
  gray: "#f5f5f5",
  beige: "#f9f7ef",
  white: "#ffffff",
  lemon: "#e6ff99",
  turquoise: "#caebed",
  seawave: "#537f7b",
  black: "#000000",
  textMuted: "#444444",
  border: "#e0e0e0",
};

/* ══════════════════════════════════════════════
   Solution Areas — business problems, not tech categories
   ══════════════════════════════════════════════ */
const SOLUTIONS = [
  {
    title: "We know AI matters, but where do we start?",
    slug: "/solutions/ai-strategy",
    tag: "AI Strategy & Roadmap",
    framework: "Proven framework — 30+ strategies delivered",
    description: "Too many options, no clear plan. We cut through the noise, identify your highest-impact AI opportunities, and build investment-ready business cases that get board approval — so you move forward with confidence.",
    proof: "Sandvik: 500+ ideas narrowed to 60 high-impact use cases. Helen: C-suite approval and funding for AI pilots. Elisa: 60+ data product ideas, 15 selected for development.",
    outcomes: [
      "Prioritized AI portfolio tied to business value",
      "Business cases that get board-level buy-in",
      "Phased roadmap your team can actually execute",
    ],
    timeline: "Typically 6–8 weeks",
  },
  {
    title: "Our pricing is leaving money on the table",
    slug: "/solutions/pricing-optimization",
    tag: "Pricing & Revenue Optimization",
    description: "Manual pricing can't keep up. We build AI models that find the optimal price point — balancing competitiveness with profitability — so you capture revenue you're currently missing.",
    proof: "Kirjastopalvelu: 15–20% profit increase with AI-powered auction pricing. Tokmanni: 88% more coupon usage, 2% sales lift through personalized offers.",
    outcomes: [
      "Dynamic pricing that adapts to real behavior",
      "Personalized offers that drive conversion",
      "Measurable profit lift, reduced manual effort",
    ],
    timeline: "Pilot in 8–12 weeks",
  },
  {
    title: "We don't really know our customers well enough",
    slug: "/solutions/customer-intelligence",
    tag: "Customer Intelligence",
    description: "Customer data sits in your systems but isn't working for you. We turn fragmented information into real insight — personalized recommendations, churn predictions, and a shared customer memory your whole team can use.",
    proof: "S-Pankki: 3–7x increase in inbound call sales conversion. Tokmanni: AI-driven personalization engine. A-Insinöörit: GenAI-powered customer memory for sales teams.",
    outcomes: [
      "Sales teams prepared with complete customer context",
      "Recommendations matched to individual behavior",
      "Predict who's leaving before they leave",
    ],
    timeline: "First model in 6–10 weeks",
  },
  {
    title: "Nobody owns our data and it's slowing everything down",
    slug: "/solutions/data-governance",
    tag: "Data Governance & Quality",
    framework: "Proven framework — deployed across 5+ organizations",
    description: "Unclear ownership, inconsistent quality, siloed systems — your data problems are blocking every AI initiative. We build practical governance models that get adopted, not just documented.",
    proof: "Anora: unified governance across 5 countries post-merger. Helen: data ownership aligned to business processes. Wolt: vendor on-boarding process and risk management.",
    outcomes: [
      "Clear ownership across every data domain",
      "Governance that enables AI, not blocks it",
      "Quality frameworks your teams actually follow",
    ],
    timeline: "Around 2 months",
  },
  {
    title: "We're drowning in manual work that AI should handle",
    slug: "/solutions/genai-automation",
    tag: "GenAI & Process Automation",
    framework: "Accelerated by our own AI tools — Text2SQL, Auto Data Catalog",
    description: "Your people spend hours on tasks that generative AI could handle in minutes — processing documents, preparing reports, answering data questions. We build solutions that automate the tedious and free your team for work that matters.",
    proof: "Solar Foods: automated lab report processing and regulatory monitoring. KTI: natural language queries over complex real estate data. Viestimedia: 38% improvement in customer acquisition, 37% cost reduction.",
    outcomes: [
      "Documents processed automatically, not manually",
      "Plain-language access to data — no SQL needed",
      "Hours of manual work reduced to minutes",
    ],
    timeline: "Working prototype in 4–6 weeks",
  },
  {
    title: "Our operations are reactive — we find problems after they hit",
    slug: "/solutions/intelligent-operations",
    tag: "Predictive Operations & Supply Chain",
    description: "You're firefighting instead of preventing. Whether it's network alarms, equipment failures, or supply chain blind spots — we build AI that spots trouble early so teams act before impact.",
    proof: "Metso: 30% better lead time prediction, solution scaled to 5 global teams. NTG: potential to capture 65% of previously lost revenue. Neste: potential to mitigate €14M in reporting risks.",
    outcomes: [
      "Predict failures before they cause downtime",
      "Capture lost revenue with smarter inventory",
      "Shift from firefighting to prevention",
    ],
    timeline: "Analysis + first model in 8–12 weeks",
  },
];

/* ══════════════════════════════════════════════
   Stats bar data
   ══════════════════════════════════════════════ */
const STATS = [
  { number: "50+", label: "AI projects delivered" },
  { number: "30+", label: "AI strategies built" },
  { number: "100+", label: "Companies in AI accelerators" },
  { number: "20+", label: "Years avg. team experience" },
];

/* ══════════════════════════════════════════════
   Navigation
   ══════════════════════════════════════════════ */
const NAV_LINKS = [
  { label: "Team and career", href: "/team-and-career" },
  { label: "Services", href: "/our-services" },
  { label: "Customer Stories", href: "/customer-stories" },
  { label: "Insights", href: "/insights" },
  { label: "Contact us", href: "/contact-us" },
];

/* ══════════════════════════════════════════════
   Scroll Reveal
   ══════════════════════════════════════════════ */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════
   Navbar
   ══════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 72,
      }}>
        <a href="/" style={{ textDecoration: "none", color: C.black, fontSize: 22, fontWeight: 400 }}>
          <span>DGI</span><span style={{ marginLeft: 10 }}>data design</span>
        </a>
        <div className="dd-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{
              color: C.black, textDecoration: "none", fontSize: 15, fontWeight: 400,
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.5"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >{l.label}</a>
          ))}
          <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer"
            style={{
              background: C.black, color: C.white, padding: "11px 28px",
              borderRadius: 100, fontWeight: 500, fontSize: 15, textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Book a call</a>
        </div>
        <button className="dd-nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: "none", background: "none", border: "none", cursor: "pointer", padding: 8,
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {menuOpen
              ? <path d="M6 6l14 14M20 6L6 20" stroke={C.black} strokeWidth="2" strokeLinecap="round" />
              : <>
                  <line x1="3" y1="7" x2="23" y2="7" stroke={C.black} strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="13" x2="23" y2="13" stroke={C.black} strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="19" x2="23" y2="19" stroke={C.black} strokeWidth="2" strokeLinecap="round" />
                </>}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="dd-nav-mobile" style={{
          display: "none", flexDirection: "column", gap: 16, padding: "24px 40px 32px",
          background: C.white, borderTop: `1px solid ${C.border}`,
        }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ color: C.black, textDecoration: "none", fontSize: 17 }}>{l.label}</a>
          ))}
          <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer"
            style={{
              background: C.black, color: C.white, padding: "14px 28px",
              borderRadius: 100, fontWeight: 500, fontSize: 16, textDecoration: "none",
              textAlign: "center", marginTop: 8,
            }}
          >Book a call</a>
        </div>
      )}
    </nav>
  );
}

/* ══════════════════════════════════════════════
   Solution Card
   ══════════════════════════════════════════════ */
function SolutionCard({ solution, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <a href={solution.slug}
        style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{
          background: C.white,
          border: `1px solid ${hovered ? C.black + "22" : C.border}`,
          borderRadius: 20, padding: "32px 28px",
          transition: "all 0.3s ease",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.07)" : "0 1px 3px rgba(0,0,0,0.02)",
          position: "relative", overflow: "hidden",
          height: "100%", display: "flex", flexDirection: "column",
        }}>
          {/* Tag */}
          <div style={{
            display: "inline-flex", padding: "5px 14px", borderRadius: 100,
            background: C.gray, fontSize: 11, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.06em",
            color: C.seawave, marginBottom: 14, alignSelf: "flex-start",
          }}>{solution.tag}</div>

          {/* Framework badge — only if present */}
          {solution.framework && (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 12px", borderRadius: 100,
              background: `${C.lemon}88`, fontSize: 11, fontWeight: 500,
              color: C.black, marginBottom: 14, alignSelf: "flex-start",
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z" fill={C.seawave}/>
              </svg>
              {solution.framework}
            </div>
          )}

          {/* Business problem title */}
          <h3 style={{
            fontSize: 20, fontWeight: 600, marginBottom: 12,
            letterSpacing: "-0.01em", lineHeight: 1.3, paddingRight: 40,
          }}>{solution.title}</h3>

          {/* Description */}
          <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 14 }}>
            {solution.description}
          </p>

          {/* Proof — beige callout */}
          <div style={{
            background: C.beige, borderRadius: 10, padding: "12px 14px",
            marginBottom: 16, borderLeft: `3px solid ${C.lemon}`,
          }}>
            <p style={{ fontSize: 12.5, lineHeight: 1.55, color: C.textMuted, fontStyle: "italic" }}>
              {solution.proof}
            </p>
          </div>

          {/* Outcomes */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
            {solution.outcomes.map((o, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                  <path d="M2 7l3.5 3.5L12 4" stroke={C.seawave} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: C.textMuted }}>{o}</span>
              </div>
            ))}
          </div>

          {/* Timeline + arrow */}
          <div style={{
            borderTop: `1px solid ${C.border}`, marginTop: 16, paddingTop: 14,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontSize: 12, color: C.seawave, fontWeight: 500 }}>
              ⏱ {solution.timeline}
            </span>
            <div style={{
              width: 28, height: 28, borderRadius: 7,
              background: hovered ? C.lemon : C.gray,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.25s ease",
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M9 5l3 3-3 3" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

/* ══════════════════════════════════════════════
   Main Page
   ══════════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <div style={{ background: C.white, color: C.black, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; font-family: 'DM Sans', -apple-system, sans-serif; background: ${C.white}; }
        html { scroll-behavior: smooth; }
        @media (max-width: 900px) {
          .dd-nav-desktop { display: none !important; }
          .dd-nav-hamburger { display: block !important; }
          .dd-nav-mobile { display: flex !important; }
          .dd-solutions-grid { grid-template-columns: 1fr !important; }
          .dd-hero-h1 { font-size: 40px !important; }
          .dd-delivery-grid { grid-template-columns: 1fr !important; }
          .dd-testimonials-grid { grid-template-columns: 1fr !important; }
          .dd-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .dd-cta-row { flex-direction: column !important; }
          .dd-cta-left { padding: 48px 32px !important; }
          .dd-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .dd-why-grid { grid-template-columns: 1fr !important; }
          .dd-steps-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) { .dd-nav-mobile { display: none !important; } }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════
           HERO
         ═══════════════════════════════════ */}
      <section style={{
        paddingTop: 72,
        background: `linear-gradient(180deg, ${C.lemon} 0%, ${C.lemon}bb 45%, ${C.beige} 80%, ${C.white} 100%)`,
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "100px 40px 48px",
          textAlign: "center",
        }}>
          <Reveal>
            <div style={{
              display: "inline-flex", padding: "6px 18px", borderRadius: 100,
              background: "rgba(0,0,0,0.06)", fontSize: 13, fontWeight: 500,
              marginBottom: 28, color: C.black,
            }}>AI Advisory & Implementation Agency</div>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="dd-hero-h1" style={{
              fontSize: 64, fontWeight: 400, lineHeight: 1.1, marginBottom: 32,
              letterSpacing: "-0.025em", textTransform: "uppercase",
              maxWidth: 840, margin: "0 auto 32px",
            }}>
              We solve business problems with AI — from strategy to production
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{
              color: C.black, fontSize: 18, lineHeight: 1.7, maxWidth: 640,
              margin: "0 auto 36px", fontWeight: 400,
            }}>
              Senior-led. GenAI-native. No junior pyramids, no 8-layer governance circus.
              We speak to your CEO, CFO, and CDO — and then actually deliver what we promise.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-block", background: C.black, color: C.white,
                  padding: "14px 36px", borderRadius: 100,
                  fontWeight: 500, fontSize: 16, textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >Book a free call</a>
              <a href="/customer-stories"
                style={{
                  display: "inline-block", background: "transparent", color: C.black,
                  padding: "14px 36px", borderRadius: 100,
                  border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.black; }}
              >See customer stories</a>
            </div>
          </Reveal>
        </div>

        {/* Stats strip */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 40px 80px" }}>
          <Reveal delay={0.15}>
            <div className="dd-stats-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              background: C.white, borderRadius: 20,
              border: `1px solid ${C.border}`, overflow: "hidden",
            }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  padding: "28px 24px", textAlign: "center",
                  borderRight: i < 3 ? `1px solid ${C.border}` : "none",
                }}>
                  <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 4 }}>
                    {s.number}
                  </div>
                  <div style={{ fontSize: 13, color: C.textMuted, fontWeight: 400 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SOUND FAMILIAR? — Solution cards
         ═══════════════════════════════════ */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em",
            }}>Sound familiar?</h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52,
            }}>
              These are the challenges our clients bring to us. Each one leads to a focused engagement with real, measurable results.
            </p>
          </Reveal>
          <div className="dd-solutions-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16,
          }}>
            {SOLUTIONS.map((s, i) => (
              <SolutionCard key={s.title} solution={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           WHY DATA DESIGN
         ═══════════════════════════════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em",
            }}>Why Data Design?</h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              We operate in a rare space between the big consultancies and small AI boutiques. Here's what that means for you.
            </p>
          </Reveal>

          <div className="dd-why-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          }}>
            {[
              {
                title: "Senior people, not junior pyramids",
                body: "Our team averages 20+ years of experience — from Silo AI, H&M, Deloitte, Bilot, and Bigdatapump. You work directly with the people who've built and shipped AI systems at scale. No hand-offs to juniors.",
                accent: C.lemon,
              },
              {
                title: "Boardroom to codebase",
                body: "Most AI firms are either strategy-heavy or execution-only. We do both — building business cases that get C-suite approval, then actually delivering the solution. Your AI strategy doesn't end up as a shelf document.",
                accent: C.turquoise,
              },
              {
                title: "GenAI-native, not GenAI-bolted-on",
                body: "GenAI isn't an add-on for us — it's embedded in how we design, deliver, and accelerate every engagement. From automated document processing to AI strategy tools, we use what we sell.",
                accent: C.lemon,
              },
              {
                title: "Business process first, technology second",
                body: "We start from your business process, map value drivers, model data flows, identify AI leverage points, and quantify impact — before writing a single line of code. That's why our solutions stick.",
                accent: C.turquoise,
              },
              {
                title: "No overhead-heavy pricing",
                body: "No 8-layer governance circus. No months of discovery before anything happens. Lean structure, fast decisions, senior people from day one. You pay for expertise, not overhead.",
                accent: C.lemon,
              },
              {
                title: "Co-creation, not black boxes",
                body: "We develop solutions with you, not behind closed doors. Structured frameworks and well-defined methodologies — while building your internal capabilities so you're not dependent on us forever.",
                accent: C.turquoise,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{
                  background: C.gray, borderRadius: 16, padding: "28px 24px",
                  borderTop: `3px solid ${item.accent}`,
                  height: "100%",
                }}>
                  <h3 style={{
                    fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35,
                  }}>{item.title}</h3>
                  <p style={{
                    fontSize: 14, lineHeight: 1.65, color: C.textMuted,
                  }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           HOW WE DELIVER — Advisory + Implementation
         ═══════════════════════════════════ */}
      <section style={{ background: C.lemon }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em",
            }}>How we deliver</h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              Regardless of the problem, our work falls into two modes — and most engagements combine both.
            </p>
          </Reveal>

          <div className="dd-delivery-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
          }}>
            <Reveal delay={0.05}>
              <div style={{
                background: C.white, borderRadius: 20, padding: "40px 32px",
                border: `1px solid ${C.border}`, height: "100%",
              }}>
                <div style={{
                  display: "inline-flex", padding: "6px 16px", borderRadius: 100,
                  background: C.lemon, fontSize: 12, fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20,
                }}>Advisory</div>
                <h3 style={{ fontSize: 26, fontWeight: 400, marginBottom: 14, letterSpacing: "-0.01em" }}>
                  Design the right plan
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  We help you figure out where AI creates the most value, build compelling business cases, and design a roadmap your organization can actually execute.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["AI strategy & use case prioritization", "Business case development", "Data governance & ownership models",
                    "Technology assessment & architecture", "Management workshops & training programs",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 7, height: 7, borderRadius: 2, background: C.black, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{
                background: C.white, borderRadius: 20, padding: "40px 32px",
                border: `1px solid ${C.border}`, height: "100%",
              }}>
                <div style={{
                  display: "inline-flex", padding: "6px 16px", borderRadius: 100,
                  background: C.turquoise, fontSize: 12, fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20,
                }}>Implementation</div>
                <h3 style={{ fontSize: 26, fontWeight: 400, marginBottom: 14, letterSpacing: "-0.01em" }}>
                  Build and deploy the solution
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  From proof of concept to production at scale — we develop AI solutions that deliver measurable results and actually get adopted by your teams.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Custom ML & GenAI model development", "Data engineering & pipeline design",
                    "Production deployment & MLOps", "Solution integration & change management",
                    "Ongoing support & model monitoring",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 7, height: 7, borderRadius: 2, background: C.black, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div style={{
              textAlign: "center", marginTop: 32, padding: "20px 28px",
              background: "rgba(255,255,255,0.7)", borderRadius: 14,
            }}>
              <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6 }}>
                Most projects start with a focused advisory phase to define the right approach, then move into hands-on implementation. We can also join mid-journey if you already know what needs building.
              </p>
            </div>
          </Reveal>

          {/* Resources mention */}
          <Reveal delay={0.2}>
            <div style={{
              marginTop: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
              padding: "24px 28px", background: C.white, borderRadius: 14,
              border: `1px solid ${C.border}`,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: C.beige,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="8" cy="8" r="4" stroke={C.black} strokeWidth="1.2" fill={C.lemon}/>
                  <circle cx="15" cy="9" r="3" stroke={C.black} strokeWidth="1.2" fill={C.turquoise}/>
                  <path d="M2 20c0-3.5 2.5-5.5 6-5.5 1.5 0 2.8.4 3.8 1" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M12 20c0-2.8 1.8-4 4-4s4 1.2 4 4" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6 }}>
                  <strong style={{ color: C.black }}>Sometimes the best solution is our senior person sitting inside your organization.</strong> We embed experienced AI leads, data engineers, and senior consultants directly in your team — from interim CDO roles to hands-on project delivery.{" "}
                  <a href="/team-and-career" style={{ color: C.seawave, fontWeight: 500 }}>Meet our team →</a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           HERE'S HOW IT STARTS
         ═══════════════════════════════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em",
            }}>Here's how it starts</h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 600, marginBottom: 52,
            }}>
              No procurement circus. No 40-page RFP. Just a conversation.
            </p>
          </Reveal>

          <div className="dd-steps-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
          }}>
            {[
              { step: "1", title: "Free 30-min call", desc: "Tell us what you're trying to solve. We'll be honest about whether we can help — and how." },
              { step: "2", title: "Scoping workshop", desc: "A focused session to define the problem, map the data, and outline the approach. Usually 1–2 days." },
              { step: "3", title: "Proposal & kickoff", desc: "A clear plan with scope, team, timeline, and investment. No surprises. We start fast." },
              { step: "4", title: "Results, not reports", desc: "We deliver working solutions, not slide decks. With measurable outcomes you can show your board." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.gray, borderRadius: 16, padding: "28px 24px",
                  height: "100%",
                }}>
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

      {/* ═══════════════════════════════════
           TESTIMONIALS
         ═══════════════════════════════════ */}
      <section style={{ background: C.beige }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em",
            }}>What our clients say</h2>
          </Reveal>
          <div className="dd-testimonials-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20,
          }}>
            {[
              {
                quote: "Many consultants speak 'digital language' to us. Data Design understood how to communicate with our business people.",
                name: "",
                title: "Client executive",
                company: "",
              },
              {
                quote: "The project was comprehensive and professionally planned, significantly advancing our AI development. The clarity of the workshops and tools was impressive.",
                name: "Kati Kinnunen",
                title: "Chief Digital Officer",
                company: "Helen Sähköverkko",
              },
              {
                quote: "Our loyalty customers now get offers they care about. This means more visits, more sales, and 88% more coupon use. We turned customer insights into action — and real business results.",
                name: "Tuomas Vihavainen",
                title: "Head of Group Analytics",
                company: "Tokmanni",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div style={{
                  background: C.white, borderRadius: 20,
                  padding: "32px 28px", border: `1px solid ${C.border}`,
                  height: "100%", display: "flex", flexDirection: "column",
                }}>
                  <p style={{
                    fontSize: 15, lineHeight: 1.65, color: C.textMuted,
                    fontStyle: "italic", flex: 1, marginBottom: 24,
                  }}>"{t.quote}"</p>
                  <div>
                    {t.name && <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{t.name}</p>}
                    <p style={{ fontSize: 13, color: C.textMuted }}>
                      {t.name ? `${t.title}, ${t.company}` : t.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           CTA
         ═══════════════════════════════════ */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <Reveal>
            <div className="dd-cta-row" style={{
              display: "flex", minHeight: 420, position: "relative", overflow: "hidden",
            }}>
              <div className="dd-cta-left" style={{
                flex: 1, position: "relative", padding: "72px 60px",
                display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2,
              }}>
                <div style={{
                  position: "absolute", top: 0, left: -80, bottom: 0, right: "20%",
                  background: C.lemon, borderRadius: "0 50% 50% 0", zIndex: -1,
                }} />
                <h2 style={{
                  fontSize: 44, fontWeight: 400, lineHeight: 1.15,
                  marginBottom: 20, letterSpacing: "-0.02em", position: "relative",
                }}>
                  Not sure where to start?
                </h2>
                <p style={{
                  fontSize: 16, lineHeight: 1.6, color: C.textMuted,
                  marginBottom: 32, position: "relative", maxWidth: 400,
                }}>
                  Book a free 30-minute call. We'll help you figure out the highest-impact AI opportunity for your business — no strings attached.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative" }}>
                  <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-block", background: C.white, color: C.black,
                      padding: "14px 32px", borderRadius: 100,
                      border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 15,
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }}
                    onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.black; }}
                  >Book a call</a>
                  <a href="/customer-stories"
                    style={{
                      display: "inline-block", background: C.white, color: C.black,
                      padding: "14px 32px", borderRadius: 100,
                      border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 15,
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }}
                    onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.black; }}
                  >See customer stories</a>
                </div>
              </div>
              <div style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* Placeholder for DD illustration */}
                <svg width="280" height="240" viewBox="0 0 280 240" fill="none" style={{ opacity: 0.85 }}>
                  <g transform="translate(30, 40)">
                    <path d="M10 170 L110 210 L220 170 L220 162 L110 202 L10 162 Z" fill={C.gray} stroke={C.black} strokeWidth="1.2"/>
                    <path d="M10 162 L110 202 L220 162 L110 122 Z" fill={C.white} stroke={C.black} strokeWidth="1.2"/>
                    <path d="M20 132 L110 168 L210 132 L210 125 L110 161 L20 125 Z" fill={C.gray} stroke={C.black} strokeWidth="1.2"/>
                    <path d="M20 125 L110 161 L210 125 L110 88 Z" fill={C.white} stroke={C.black} strokeWidth="1.2"/>
                    <path d="M50 60 L50 105 Q50 118 65 122 L78 125 Q90 128 90 115 L90 72 Q90 58 78 55 L65 52 Q50 50 50 60 Z"
                      fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
                    <path d="M115 45 Q115 28 132 24 L158 20 Q175 17 175 34 L175 60"
                      fill="none" stroke={C.black} strokeWidth="1.2"/>
                    <path d="M115 45 L115 85 Q115 102 132 106 L158 109 Q175 111 175 94 L175 60"
                      fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
                  </g>
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           FOOTER
         ═══════════════════════════════════ */}
      <footer style={{ background: C.gray, padding: "60px 40px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="dd-footer-grid" style={{
            display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1.5fr",
            gap: 48, marginBottom: 48,
          }}>
            <div>
              <span style={{ fontSize: 28, fontWeight: 400, color: C.black }}>
                DGI <span style={{ marginLeft: 8 }}>data design</span>
              </span>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Home", "Team and Career", "Services", "Customer Stories", "Insights", "Contact"].map(label => (
                  <a key={label} href="#" style={{
                    color: C.black, textDecoration: "none", fontSize: 15, transition: "opacity 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.5"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >{label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Socials</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="https://www.linkedin.com/company/data-design-oy" target="_blank" rel="noopener noreferrer"
                  style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.5"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >LinkedIn</a>
                <a href="https://www.instagram.com/datadesign_ai_labs/" target="_blank" rel="noopener noreferrer"
                  style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.5"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >Instagram</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Contact</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="mailto:info@datadesign.fi" style={{ color: C.black, textDecoration: "none", fontSize: 15 }}>info@datadesign.fi</a>
                <a href="tel:+358504420008" style={{ color: C.black, textDecoration: "none", fontSize: 15 }}>+358 50 442 0008</a>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: C.textMuted, marginTop: 8 }}>
                  Data Design Oy (3305752-1)<br />
                  Keilaniementie 1,<br />
                  02150 Espoo, Finland
                </p>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: `1px solid ${C.border}`, paddingTop: 24,
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: 16,
          }}>
            <span style={{ color: C.textMuted, fontSize: 14 }}>© 2025 Data Design Oy. All rights reserved.</span>
            <div style={{ display: "flex", gap: 28 }}>
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(label => (
                <a key={label} href="#" style={{
                  color: C.black, textDecoration: "underline", fontSize: 14, textUnderlineOffset: "3px",
                }}>{label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
