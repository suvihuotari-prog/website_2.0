import { useState, useEffect, useRef } from "react";

/* ══════════════════════════════════════════════
   DATA DESIGN — Brand Tokens (shared with services page)
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
   AI Tools — closer to software products
   ══════════════════════════════════════════════ */
const TOOLS = [
  {
    name: "DataDesigner.AI",
    tagline: "Build an initial AI strategy in hours, not months",
    description: "Our proprietary tool follows Data Design's proven framework for AI strategy — translating your business goals into a concrete AI roadmap. Used internally and with clients to accelerate the strategy phase from weeks to hours.",
    status: "In use with clients",
    capabilities: [
      "Maps business objectives to AI opportunities",
      "Generates prioritized use case portfolios",
      "Produces investment-ready business case drafts",
      "Follows our battle-tested strategy framework",
    ],
    accent: C.lemon,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="4" width="28" height="28" rx="6" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
        <path d="M12 18L16 14L20 16L24 12" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 24h12" stroke={C.black} strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
        <circle cx="24" cy="12" r="2" fill={C.seawave}/>
      </svg>
    ),
  },
  {
    name: "Text2SQL",
    tagline: "Ask questions in plain language, get answers from your data",
    description: "A GenAI-powered conversational interface and multi-agent system that lets business users query complex databases without writing SQL. Deployed for KTI Kiinteistötieto to give real estate professionals instant access to market data.",
    status: "Deployed in production — KTI",
    capabilities: [
      "Natural language to SQL query generation",
      "Multi-source data querying",
      "Secure, role-based access controls",
      "Embeds into existing portals and applications",
    ],
    accent: C.turquoise,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="6" width="28" height="24" rx="4" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
        <path d="M10 14h8M10 18h12M10 22h6" stroke={C.black} strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <path d="M24 16l4 4-4 4" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Auto Data Catalog",
    tagline: "Automatically document your data assets — no manual effort",
    description: "A GenAI-powered solution that creates business-friendly descriptions of data products and reports by extracting metadata and context from tools like Power BI. Helps organizations understand, govern, and reuse their data assets at scale.",
    status: "In use internally & with clients",
    capabilities: [
      "Extracts metadata from BI tools automatically",
      "Generates human-readable report descriptions",
      "Publishes documentation at scale",
      "Supports data governance and discoverability",
    ],
    accent: C.lemon,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="4" width="24" height="28" rx="4" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
        <line x1="11" y1="11" x2="25" y2="11" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="15" x2="25" y2="15" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="19" x2="20" y2="19" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M22 22l2 2 4-4" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Data Quality Improver",
    tagline: "Find and fix data quality issues before they compound",
    description: "AI-assisted tooling that profiles your data, identifies quality gaps, inconsistencies, and drift — then recommends concrete fixes. Turns reactive data firefighting into proactive quality management.",
    status: "In development",
    capabilities: [
      "Automated data profiling and anomaly detection",
      "Quality scoring across data domains",
      "Actionable fix recommendations",
      "Monitoring dashboards for ongoing quality tracking",
    ],
    accent: C.turquoise,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="13" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
        <path d="M12 18l4 4 8-8" stroke={C.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Sales Prospector",
    tagline: "AI agents that find and qualify your best leads",
    description: "A multi-agent GenAI system designed to automate the early stages of the B2B sales funnel. It identifies, evaluates, and engages high-potential leads by scanning LinkedIn, job ads, CRM data, and lead lists — then delivers qualified prospects to your sales team.",
    status: "In use internally",
    capabilities: [
      "Scans multiple sources — LinkedIn, job ads, CRM",
      "Scores and ranks leads by fit and timing",
      "Generates personalized outreach drafts",
      "Integrates with existing CRM workflows",
    ],
    accent: C.lemon,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="15" cy="14" r="6" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
        <path d="M6 30c0-5 4-8 9-8s9 3 9 8" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="26" cy="12" r="4" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
        <path d="M24 12h4M26 10v4" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════
   Accelerator Programs
   ══════════════════════════════════════════════ */
const ACCELERATORS = [
  {
    name: "AI Accelerator",
    tagline: "Demystify AI for your organization — fast",
    description: "A structured workshop program that takes your team from AI curiosity to concrete action. Combines hands-on training, use case identification, and business case development. Run for 100+ companies — from industrial manufacturers to financial institutions.",
    stat: "100+",
    statLabel: "companies trained",
    deliverables: [
      "Hands-on AI & GenAI training for your team",
      "Use case identification tied to your business",
      "Prioritized shortlist with ROI estimates",
      "Internal capabilities to drive AI forward",
    ],
  },
  {
    name: "Data & AI Strategy Sprint",
    tagline: "From zero to board-ready AI roadmap in 6–8 weeks",
    description: "Our most refined engagement format. A focused sprint that maps your business objectives, identifies the highest-value AI opportunities, builds investment cases, and produces a phased roadmap — complete with the business language your leadership needs to say yes.",
    stat: "30+",
    statLabel: "strategies delivered",
    deliverables: [
      "Current state assessment & gap analysis",
      "Prioritized AI use case portfolio",
      "Investment-ready business cases with ROI",
      "Phased implementation roadmap",
    ],
  },
  {
    name: "Data Governance Kickstart",
    tagline: "Build a data ownership model that actually works",
    description: "A structured program to define who owns what data, establish quality frameworks, and create governance that enables AI — not blocks it. Designed for organizations where data responsibilities are unclear and AI initiatives keep stalling because of it.",
    stat: "5+",
    statLabel: "models deployed",
    deliverables: [
      "Data ownership & responsibility mapping",
      "Practical governance model for your org",
      "Quality framework with clear metrics",
      "Change management & adoption plan",
    ],
  },
];

/* ══════════════════════════════════════════════
   Navigation (shared)
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
   Main Page
   ══════════════════════════════════════════════ */
export default function ProductsToolsPage() {
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
          .dd-hero-h1 { font-size: 40px !important; }
          .dd-tools-grid { grid-template-columns: 1fr !important; }
          .dd-accel-grid { grid-template-columns: 1fr !important; }
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
        background: `linear-gradient(180deg, ${C.turquoise}66 0%, ${C.white} 100%)`,
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px",
        }}>
          <Reveal>
            <div style={{
              display: "inline-flex", padding: "6px 18px", borderRadius: 100,
              background: "rgba(0,0,0,0.06)", fontSize: 13, fontWeight: 500,
              marginBottom: 28, color: C.black,
            }}>DD AI Labs</div>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="dd-hero-h1" style={{
              fontSize: 58, fontWeight: 400, lineHeight: 1.12, marginBottom: 24,
              letterSpacing: "-0.025em", maxWidth: 720,
            }}>
              AI tools and accelerators built from real client work
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{
              fontSize: 18, lineHeight: 1.7, maxWidth: 580, color: C.textMuted, marginBottom: 36,
            }}>
              Every tool here was born from a client engagement. They're the reusable building blocks that let us move faster — and they can accelerate your projects too.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#tools" style={{
                display: "inline-block", background: C.black, color: C.white,
                padding: "14px 32px", borderRadius: 100,
                fontWeight: 500, fontSize: 16, textDecoration: "none",
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >Explore tools</a>
              <a href="#accelerators" style={{
                display: "inline-block", background: "transparent", color: C.black,
                padding: "14px 32px", borderRadius: 100,
                border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16, textDecoration: "none",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.black; }}
              >See accelerators</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           AI TOOLS
         ═══════════════════════════════════ */}
      <section id="tools" style={{ background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              AI tools
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 600, marginBottom: 52,
            }}>
              Purpose-built tools that we use inside client engagements. Some are deployed as standalone products, others accelerate our delivery.
            </p>
          </Reveal>

          <div className="dd-tools-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
          }}>
            {TOOLS.map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.05}>
                <ToolCard tool={tool} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           ACCELERATOR PROGRAMS
         ═══════════════════════════════════ */}
      <section id="accelerators" style={{ background: C.gray }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Accelerator programs
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              Battle-tested frameworks refined over dozens of engagements. Not fixed packages — but proven structures that get you to results faster than starting from scratch.
            </p>
          </Reveal>

          <div className="dd-accel-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20,
          }}>
            {ACCELERATORS.map((acc, i) => (
              <Reveal key={acc.name} delay={i * 0.06}>
                <AcceleratorCard accelerator={acc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           HOW THESE FIT TOGETHER
         ═══════════════════════════════════ */}
      <section style={{ background: C.lemon }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 40px" }}>
          <Reveal>
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            }}>
              <h2 style={{ fontSize: 40, fontWeight: 400, marginBottom: 16, letterSpacing: "-0.02em" }}>
                Tools built for us, available for you
              </h2>
              <p style={{
                fontSize: 16, lineHeight: 1.65, color: C.textMuted, maxWidth: 640, marginBottom: 32,
              }}>
                We don't sell tools separately — they're woven into our engagements. When you work with us on AI strategy, DataDesigner.AI accelerates the process. When we build a data querying solution, Text2SQL is the foundation. You get the benefit of pre-built, tested technology without buying software.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <a href="/our-services" style={{
                  display: "inline-block", background: C.black, color: C.white,
                  padding: "14px 32px", borderRadius: 100,
                  fontWeight: 500, fontSize: 15, textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >See our services</a>
                <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-block", background: C.white, color: C.black,
                    padding: "14px 32px", borderRadius: 100,
                    border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 15, textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.black; }}
                >Book a call</a>
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

/* ══════════════════════════════════════════════
   Tool Card
   ══════════════════════════════════════════════ */
function ToolCard({ tool }) {
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
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14, background: C.gray,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>{tool.icon}</div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 3, letterSpacing: "-0.01em" }}>
            {tool.name}
          </h3>
          <p style={{ fontSize: 14, color: C.seawave, fontWeight: 500, fontStyle: "italic" }}>
            {tool.tagline}
          </p>
        </div>
      </div>

      {/* Status badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "4px 12px", borderRadius: 100,
        background: `${tool.accent}66`, fontSize: 11, fontWeight: 600,
        color: C.black, marginBottom: 14, alignSelf: "flex-start",
        textTransform: "uppercase", letterSpacing: "0.04em",
      }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.seawave }} />
        {tool.status}
      </div>

      {/* Description */}
      <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>
        {tool.description}
      </p>

      {/* Capabilities */}
      <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
        {tool.capabilities.map((c, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
              <path d="M2 7l3.5 3.5L12 4" stroke={C.seawave} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 13, lineHeight: 1.5, color: C.textMuted }}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   Accelerator Card
   ══════════════════════════════════════════════ */
function AcceleratorCard({ accelerator }) {
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
      {/* Big stat */}
      <div style={{
        width: 72, height: 72, borderRadius: 16,
        background: C.lemon, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", marginBottom: 20,
      }}>
        <span style={{ fontSize: 28, fontWeight: 700, lineHeight: 1 }}>{accelerator.stat}</span>
        <span style={{ fontSize: 10, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.04em" }}>
          {accelerator.statLabel}
        </span>
      </div>

      {/* Name + tagline */}
      <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4, letterSpacing: "-0.01em" }}>
        {accelerator.name}
      </h3>
      <p style={{ fontSize: 14, color: C.seawave, fontWeight: 500, fontStyle: "italic", marginBottom: 14 }}>
        {accelerator.tagline}
      </p>

      {/* Description */}
      <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>
        {accelerator.description}
      </p>

      {/* Deliverables */}
      <div style={{
        background: C.beige, borderRadius: 12, padding: "16px 18px",
        flex: 1,
      }}>
        <span style={{
          fontSize: 11, fontWeight: 600, textTransform: "uppercase",
          letterSpacing: "0.06em", color: C.seawave, display: "block", marginBottom: 10,
        }}>What you get</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {accelerator.deliverables.map((d, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                <path d="M2 7l3.5 3.5L12 4" stroke={C.seawave} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: C.textMuted }}>{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: 20 }}>
        <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer"
          style={{
            display: "block", textAlign: "center",
            background: hovered ? C.black : C.gray, color: hovered ? C.white : C.black,
            padding: "12px 24px", borderRadius: 100,
            fontWeight: 500, fontSize: 14, textDecoration: "none",
            transition: "all 0.25s ease",
          }}
        >Learn more →</a>
      </div>
    </div>
  );
}
