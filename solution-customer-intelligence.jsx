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
   Case Study Card
   ══════════════════════════════════════════════ */
function CaseCard({ company, tag, description, testimonial }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: C.white, border: `1px solid ${hovered ? C.black + "22" : C.border}`,
        borderRadius: 20, padding: "32px 28px",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.06)" : "0 1px 3px rgba(0,0,0,0.02)",
        height: "100%", display: "flex", flexDirection: "column",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        display: "inline-flex", padding: "5px 14px", borderRadius: 100,
        background: C.gray, fontSize: 11, fontWeight: 600,
        textTransform: "uppercase", letterSpacing: "0.06em",
        color: C.seawave, marginBottom: 14, alignSelf: "flex-start",
      }}>{tag}</div>
      <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{company}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>{description}</p>
      {testimonial && (
        <div style={{
          background: C.beige, borderRadius: 12, padding: "18px 20px",
          borderLeft: `3px solid ${C.lemon}`, marginTop: "auto",
        }}>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic", marginBottom: 12 }}>
            "{testimonial.quote}"
          </p>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 1 }}>{testimonial.name}</p>
            <p style={{ fontSize: 12, color: C.textMuted }}>{testimonial.title}, {testimonial.company}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════
   Main Page
   ══════════════════════════════════════════════ */
export default function SolutionCustomerIntelligence() {
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
          .dd-hero-h1 { font-size: 36px !important; }
          .dd-challenge-grid { grid-template-columns: 1fr !important; }
          .dd-steps-grid { grid-template-columns: 1fr !important; }
          .dd-proof-grid { grid-template-columns: 1fr !important; }
          .dd-deliverables-layout { grid-template-columns: 1fr !important; }
          .dd-cta-row { flex-direction: column !important; }
          .dd-cta-left { padding: 48px 32px !important; }
          .dd-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 901px) { .dd-nav-mobile { display: none !important; } }
      `}</style>

      <Navbar />

      {/* ═══════════════════════════════════
           HERO
         ═══════════════════════════════════ */}
      <section style={{
        paddingTop: 72,
        background: `linear-gradient(180deg, ${C.beige} 0%, ${C.white} 100%)`,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px" }}>
          <Reveal>
            <div style={{ marginBottom: 24 }}>
              <a href="/our-services" style={{
                color: C.textMuted, textDecoration: "none", fontSize: 14, transition: "opacity 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.6"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >Services</a>
              <span style={{ color: C.textMuted, fontSize: 14, margin: "0 8px" }}>/</span>
              <span style={{ color: C.black, fontSize: 14, fontWeight: 500 }}>Customer Intelligence</span>
            </div>
          </Reveal>
          <Reveal delay={0.03}>
            <div style={{
              display: "inline-flex", padding: "5px 14px", borderRadius: 100,
              background: "rgba(0,0,0,0.06)", fontSize: 11, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em",
              color: C.seawave, marginBottom: 20,
            }}>Customer Intelligence</div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="dd-hero-h1" style={{
              fontSize: 58, fontWeight: 400, lineHeight: 1.1, marginBottom: 24,
              letterSpacing: "-0.025em", maxWidth: 780,
            }}>
              We don't really know our customers well enough
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 620, color: C.textMuted, marginBottom: 36 }}>
              Customer data sits in your systems but isn't working for you. You need to turn fragmented information into real insight — personalized recommendations, churn predictions, and a shared customer memory your whole team can use.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-block", background: C.black, color: C.white,
                  padding: "14px 36px", borderRadius: 100,
                  fontWeight: 500, fontSize: 16, textDecoration: "none", transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >Book a free call</a>
              <a href="/our-services"
                style={{
                  display: "inline-block", background: "transparent", color: C.black,
                  padding: "14px 36px", borderRadius: 100,
                  border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.black; }}
              >Back to all services</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           THE CHALLENGE
         ═══════════════════════════════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>The challenge</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              You have customer data — but it's not working for you. The insights you need are buried across disconnected systems.
            </p>
          </Reveal>

          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              {
                title: "Customer data scattered across systems",
                body: "CRM says one thing, your support tool another. Sales reps build knowledge in their heads, not in systems. When they leave, institutional memory goes with them.",
              },
              {
                title: "Generic customer interactions",
                body: "Every customer gets the same experience. You know they're different, but your systems can't tell you how — or what each one actually needs.",
              },
              {
                title: "Churn you only see in hindsight",
                body: "By the time you notice a customer is leaving, they've already decided. You need signals that predict churn before it happens.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.gray, borderRadius: 16, padding: "28px 24px",
                  borderTop: `3px solid ${C.lemon}`, height: "100%",
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
           HOW WE SOLVE IT
         ═══════════════════════════════════ */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>How we solve it</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              From fragmented data to actionable customer insight — a systematic approach that puts intelligence into your team's daily workflows.
            </p>
          </Reveal>

          <div className="dd-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { step: "1", title: "Customer data unification", desc: "We connect your data sources into a coherent customer view — CRM, transactions, interactions, support tickets — creating a single source of truth." },
              { step: "2", title: "Insight model development", desc: "We build models that reveal what your data already knows: customer segments, purchase propensity, churn risk, lifetime value, and next-best actions." },
              { step: "3", title: "Customer memory & automation", desc: "GenAI-powered customer intelligence that gives your team instant context before every meeting, call, or decision. Automated meeting prep, standardized reports." },
              { step: "4", title: "Activation & measurement", desc: "Insights are useless if nobody acts on them. We integrate recommendations into the workflows your team already uses — and track what moves the needle." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: 16, padding: "28px 24px",
                  border: `1px solid ${C.border}`, height: "100%",
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
           PROVEN RESULTS
         ═══════════════════════════════════ */}
      <section style={{ background: C.lemon }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Proven results</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              Real customer intelligence implementations delivering measurable business impact.
            </p>
          </Reveal>

          <div className="dd-proof-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <Reveal delay={0.05}>
              <CaseCard
                company="S-Pankki"
                tag="Financial Services"
                description="3–7x increase in inbound call sales conversion. Automated loan prioritization significantly increasing sales. Customer KPI followed at C-level."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <CaseCard
                company="A-Insinöörit"
                tag="Engineering & Consulting"
                description="GenAI-powered customer memory for sales teams. Automated meeting prep and standardized sales reports. Complete customer context available before every interaction."
              />
            </Reveal>
            <Reveal delay={0.15}>
              <CaseCard
                company="Tokmanni"
                tag="Retail"
                description="AI-driven personalization engine. Personalized recommendations matched to individual behavior. 88% more coupon usage through targeted offers."
              />
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div style={{
              background: C.beige, borderRadius: 12, padding: "16px 20px",
              marginTop: 20, borderLeft: `3px solid ${C.lemon}`,
            }}>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic" }}>
                Also: Konecranes — customer profile design for better sales and marketing targeting.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           WHAT YOU GET
         ═══════════════════════════════════ */}
      <section style={{ background: C.beige }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>What you get</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              Concrete tools and models that put customer intelligence into your team's hands.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div style={{
              background: C.white, borderRadius: 20, padding: "40px 36px",
              border: `1px solid ${C.border}`,
            }}>
              <div className="dd-deliverables-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  "Sales teams prepared with complete customer context",
                  "Recommendations matched to individual behavior",
                  "Churn prediction models that flag at-risk customers early",
                  "Unified customer view across all touchpoints",
                  "Automated reporting and meeting preparation",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M2 7l3.5 3.5L12 4" stroke={C.seawave} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 15, lineHeight: 1.55, color: C.textMuted }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{
                borderTop: `1px solid ${C.border}`, marginTop: 28, paddingTop: 24,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <div style={{
                  display: "inline-flex", padding: "6px 16px", borderRadius: 100,
                  background: C.lemon, fontSize: 13, fontWeight: 600,
                }}>First model in 6–10 weeks</div>
                <span style={{ fontSize: 14, color: C.textMuted }}>From data audit to first actionable customer insights</span>
              </div>
            </div>
          </Reveal>
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
                  Ready to truly understand your customers?
                </h2>
                <p style={{
                  fontSize: 16, lineHeight: 1.6, color: C.textMuted,
                  marginBottom: 32, position: "relative", maxWidth: 440,
                }}>
                  Book a free 30-minute call. We'll discuss how to turn your customer data into actionable insight that drives sales and retention.
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
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="280" height="240" viewBox="0 0 280 240" fill="none" style={{ opacity: 0.85 }}>
                  <g transform="translate(40, 30)">
                    <circle cx="100" cy="90" r="70" fill={C.gray} stroke={C.black} strokeWidth="1.2"/>
                    <circle cx="70" cy="70" r="20" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
                    <circle cx="130" cy="70" r="16" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
                    <circle cx="100" cy="115" r="18" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
                    <path d="M70 70L100 115M130 70L100 115" stroke={C.black} strokeWidth="0.8" strokeDasharray="3 3"/>
                    <path d="M70 70L130 70" stroke={C.black} strokeWidth="0.8" strokeDasharray="3 3"/>
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
                  <a key={label} href="#" style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "opacity 0.2s" }}
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
            <span style={{ color: C.textMuted, fontSize: 14 }}>&copy; 2025 Data Design Oy. All rights reserved.</span>
            <div style={{ display: "flex", gap: 28 }}>
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(label => (
                <a key={label} href="#" style={{ color: C.black, textDecoration: "underline", fontSize: 14, textUnderlineOffset: "3px" }}>{label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
