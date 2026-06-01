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
   Stats bar data
   ══════════════════════════════════════════════ */
const STATS = [
  { number: "50+", label: "AI projects delivered" },
  { number: "30+", label: "AI strategies built" },
  { number: "100+", label: "Companies in AI accelerators" },
  { number: "20+", label: "Years avg. team experience" },
];

/* ══════════════════════════════════════════════
   Featured solutions (3 most impactful)
   ══════════════════════════════════════════════ */
const FEATURED_SOLUTIONS = [
  {
    title: "We know AI matters, but where do we start?",
    tag: "AI Strategy & Roadmap",
    description: "Too many options, no clear plan. We identify your highest-impact AI opportunities and build investment-ready business cases that get board approval.",
    slug: "/solutions/ai-strategy",
  },
  {
    title: "We don't really know our customers well enough",
    tag: "Customer Intelligence",
    description: "Customer data sits in your systems but isn't working for you. We turn fragmented information into real insight your whole team can use.",
    slug: "/solutions/customer-intelligence",
  },
  {
    title: "We're drowning in manual work that AI should handle",
    tag: "GenAI & Process Automation",
    description: "Your people spend hours on tasks that generative AI could handle in minutes. We build solutions that automate the tedious and free your team for work that matters.",
    slug: "/solutions/genai-automation",
  },
];

/* ══════════════════════════════════════════════
   Client names for proof strip
   ══════════════════════════════════════════════ */
const CLIENT_NAMES = [
  "Sandvik", "Helen", "Elisa", "Tokmanni", "Metso",
  "S-Pankki", "Anora", "Neste", "Wolt", "Konecranes",
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
   Featured Solution Card (condensed for home page)
   ══════════════════════════════════════════════ */
function FeaturedSolutionCard({ solution, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.06}>
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
          height: "100%", display: "flex", flexDirection: "column",
        }}>
          {/* Tag */}
          <div style={{
            display: "inline-flex", padding: "5px 14px", borderRadius: 100,
            background: C.gray, fontSize: 11, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.06em",
            color: C.seawave, marginBottom: 14, alignSelf: "flex-start",
          }}>{solution.tag}</div>

          {/* Business problem title */}
          <h3 style={{
            fontSize: 20, fontWeight: 600, marginBottom: 12,
            letterSpacing: "-0.01em", lineHeight: 1.3, paddingRight: 40,
          }}>{solution.title}</h3>

          {/* Description */}
          <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20, flex: 1 }}>
            {solution.description}
          </p>

          {/* Arrow */}
          <div style={{
            display: "flex", justifyContent: "flex-end", alignItems: "center",
          }}>
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
   Tool Highlight Card (condensed for home page)
   ══════════════════════════════════════════════ */
function ToolHighlight({ tool }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: C.white, border: `1px solid ${hovered ? C.black + "22" : C.border}`,
        borderRadius: 20, padding: "32px 28px",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.06)" : "0 1px 3px rgba(0,0,0,0.02)",
        height: "100%", display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 56, height: 56, borderRadius: 14, background: C.gray,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16,
      }}>{tool.icon}</div>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6, letterSpacing: "-0.01em" }}>
        {tool.name}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: C.textMuted }}>
        {tool.tagline}
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════
   Main Page
   ══════════════════════════════════════════════ */
export default function HomePage() {
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
          .dd-solutions-grid { grid-template-columns: 1fr !important; }
          .dd-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .dd-why-grid { grid-template-columns: 1fr !important; }
          .dd-clients-row { flex-wrap: wrap !important; }
          .dd-testimonials-grid { grid-template-columns: 1fr !important; }
          .dd-tools-row { grid-template-columns: 1fr !important; }
          .dd-steps-grid { grid-template-columns: 1fr 1fr !important; }
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
              Your AI partner from strategy to production
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{
              color: C.black, fontSize: 18, lineHeight: 1.7, maxWidth: 640,
              margin: "0 auto 36px", fontWeight: 400,
            }}>
              Senior-led. GenAI-native. We solve business problems with AI — from boardroom to codebase. No junior pyramids, no 8-layer governance circus.
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
              <a href="/our-services"
                style={{
                  display: "inline-block", background: "transparent", color: C.black,
                  padding: "14px 36px", borderRadius: 100,
                  border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16, textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.black; }}
              >See our services</a>
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
           WHAT WE SOLVE — Featured solutions
         ═══════════════════════════════════ */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em",
            }}>Business problems we solve</h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52,
            }}>
              We start from your challenge, not from technology. Each engagement is focused on measurable results.
            </p>
          </Reveal>
          <div className="dd-solutions-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
          }}>
            {FEATURED_SOLUTIONS.map((s, i) => (
              <FeaturedSolutionCard key={s.slug} solution={s} index={i} />
            ))}
          </div>
          <Reveal delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="/our-services" style={{
                color: C.seawave, fontSize: 15, fontWeight: 500,
                textDecoration: "none", transition: "opacity 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >{"See all solutions \u2192"}</a>
            </div>
          </Reveal>
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
            }}>Why companies choose us</h2>
          </Reveal>

          <div className="dd-why-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
            marginTop: 40,
          }}>
            {[
              {
                title: "Senior people, not junior pyramids",
                body: "Team from Silo AI, H&M, Deloitte. 20+ years average experience. You work with the people who\u2019ve built AI at scale.",
                accent: C.lemon,
              },
              {
                title: "Boardroom to codebase",
                body: "We build business cases that get C-suite approval, then actually deliver the solution. Strategy doesn\u2019t end up as a shelf document.",
                accent: C.turquoise,
              },
              {
                title: "GenAI-native",
                body: "GenAI is embedded in how we design, deliver, and accelerate every engagement. We use what we sell.",
                accent: C.lemon,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
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
           CLIENT PROOF
         ═══════════════════════════════════ */}
      <section style={{ background: C.lemon }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em",
              textAlign: "center",
            }}>Trusted by leading companies</h2>
          </Reveal>

          {/* Client name strip */}
          <Reveal delay={0.05}>
            <div className="dd-clients-row" style={{
              display: "flex", justifyContent: "center", gap: 12,
              flexWrap: "wrap", marginBottom: 48,
            }}>
              {CLIENT_NAMES.map((name, i) => (
                <div key={i} style={{
                  background: C.white, borderRadius: 100,
                  padding: "10px 24px", fontSize: 14, fontWeight: 500,
                  color: C.black, border: `1px solid ${C.border}`,
                }}>{name}</div>
              ))}
            </div>
          </Reveal>

          {/* Featured testimonials */}
          <div className="dd-testimonials-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
          }}>
            {[
              {
                quote: "The project was comprehensive and professionally planned, significantly advancing our AI development. The clarity of the workshops and tools was impressive.",
                name: "Kati Kinnunen",
                title: "Chief Digital Officer",
                company: "Helen",
              },
              {
                quote: "Our loyalty customers now get offers they care about. This means more visits, more sales, and 88% more coupon use. We turned customer insights into action \u2014 and real business results.",
                name: "Tuomas Vihavainen",
                title: "Head of Group Analytics",
                company: "Tokmanni",
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.07 + 0.1}>
                <div style={{
                  background: C.white, borderRadius: 20,
                  padding: "32px 28px", border: `1px solid ${C.border}`,
                  height: "100%", display: "flex", flexDirection: "column",
                }}>
                  <p style={{
                    fontSize: 15, lineHeight: 1.65, color: C.textMuted,
                    fontStyle: "italic", flex: 1, marginBottom: 24,
                  }}>{"\u201C"}{t.quote}{"\u201D"}</p>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{t.name}</p>
                    <p style={{ fontSize: 13, color: C.textMuted }}>
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           OUR TOOLS (brief)
         ═══════════════════════════════════ */}
      <section style={{ background: C.beige }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em",
            }}>AI tools built from real client work</h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 600, marginBottom: 52,
            }}>
              Every tool we use was born from a client engagement. They accelerate our delivery — and your results.
            </p>
          </Reveal>

          <div className="dd-tools-row" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
          }}>
            {[
              {
                name: "DataDesigner.AI",
                tagline: "AI strategy in hours, not months",
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
                tagline: "Plain language access to your data",
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
                tagline: "Automated data documentation",
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
            ].map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.06}>
                <ToolHighlight tool={tool} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="/products-tools" style={{
                color: C.seawave, fontSize: 15, fontWeight: 500,
                textDecoration: "none", transition: "opacity 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >{"Explore all tools \u2192"}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           HOW IT STARTS
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
              { step: "1", title: "Free 30-min call", desc: "Tell us what you\u2019re trying to solve. We\u2019ll be honest about whether we can help \u2014 and how." },
              { step: "2", title: "Scoping workshop", desc: "A focused session to define the problem, map the data, and outline the approach. Usually 1\u20132 days." },
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
                {/* Placeholder illustration */}
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
            <span style={{ color: C.textMuted, fontSize: 14 }}>{"\u00A9"} 2025 Data Design Oy. All rights reserved.</span>
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
