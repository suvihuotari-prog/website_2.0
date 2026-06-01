import { useState, useEffect, useRef } from "react";

const C = { gray: "#f5f5f5", beige: "#f9f7ef", white: "#ffffff", lemon: "#e6ff99", turquoise: "#caebed", seawave: "#537f7b", black: "#000000", textMuted: "#444444", border: "#e0e0e0" };

const NAV_LINKS = [
  { label: "Team and career", href: "/team-and-career" },
  { label: "Services", href: "/our-services" },
  { label: "Customer Stories", href: "/customer-stories" },
  { label: "Insights", href: "/insights" },
  { label: "Contact us", href: "/contact-us" },
];

function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{ ...style, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s` }}>
      {children}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(255,255,255,0.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent", transition: "all 0.3s ease" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="/" style={{ textDecoration: "none", color: C.black, fontSize: 22, fontWeight: 400 }}><span>DGI</span><span style={{ marginLeft: 10 }}>data design</span></a>
        <div className="dd-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} style={{ color: C.black, textDecoration: "none", fontSize: 15, fontWeight: 400, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.5"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>{l.label}</a>))}
          <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer" style={{ background: C.black, color: C.white, padding: "11px 28px", borderRadius: 100, fontWeight: 500, fontSize: 15, textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>Book a call</a>
        </div>
        <button className="dd-nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">{menuOpen ? <path d="M6 6l14 14M20 6L6 20" stroke={C.black} strokeWidth="2" strokeLinecap="round" /> : <><line x1="3" y1="7" x2="23" y2="7" stroke={C.black} strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="13" x2="23" y2="13" stroke={C.black} strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="19" x2="23" y2="19" stroke={C.black} strokeWidth="2" strokeLinecap="round" /></>}</svg>
        </button>
      </div>
      {menuOpen && (
        <div className="dd-nav-mobile" style={{ display: "none", flexDirection: "column", gap: 16, padding: "24px 40px 32px", background: C.white, borderTop: `1px solid ${C.border}` }}>
          {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} style={{ color: C.black, textDecoration: "none", fontSize: 17 }}>{l.label}</a>))}
          <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer" style={{ background: C.black, color: C.white, padding: "14px 28px", borderRadius: 100, fontWeight: 500, fontSize: 16, textDecoration: "none", textAlign: "center", marginTop: 8 }}>Book a call</a>
        </div>
      )}
    </nav>
  );
}

function CaseCard({ company, tag, description, testimonial }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ background: C.white, border: `1px solid ${hovered ? C.black + "22" : C.border}`, borderRadius: 20, padding: "32px 28px", transition: "all 0.3s ease", transform: hovered ? "translateY(-2px)" : "none", boxShadow: hovered ? "0 8px 30px rgba(0,0,0,0.06)" : "0 1px 3px rgba(0,0,0,0.02)", height: "100%", display: "flex", flexDirection: "column" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: C.gray, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: C.seawave, marginBottom: 14, alignSelf: "flex-start" }}>{tag}</div>
      <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{company}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>{description}</p>
      {testimonial && (
        <div style={{ background: C.beige, borderRadius: 12, padding: "18px 20px", borderLeft: `3px solid ${C.lemon}`, marginTop: "auto" }}>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic", marginBottom: 12 }}>"{testimonial.quote}"</p>
          <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 1 }}>{testimonial.name}</p>
          <p style={{ fontSize: 12, color: C.textMuted }}>{testimonial.title}, {testimonial.company}</p>
        </div>
      )}
    </div>
  );
}

export default function SolutionGenAIAutomation() {
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
          .dd-tools-grid { grid-template-columns: 1fr !important; }
          .dd-deliverables-layout { grid-template-columns: 1fr !important; }
          .dd-cta-row { flex-direction: column !important; }
          .dd-cta-left { padding: 48px 32px !important; }
          .dd-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 901px) { .dd-nav-mobile { display: none !important; } }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section style={{ paddingTop: 72, background: `linear-gradient(180deg, ${C.lemon} 0%, ${C.lemon}bb 45%, ${C.white} 100%)` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px" }}>
          <Reveal>
            <div style={{ marginBottom: 24 }}>
              <a href="/our-services" style={{ color: C.textMuted, textDecoration: "none", fontSize: 14, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.6"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>Services</a>
              <span style={{ color: C.textMuted, fontSize: 14, margin: "0 8px" }}>/</span>
              <span style={{ color: C.black, fontSize: 14, fontWeight: 500 }}>GenAI & Process Automation</span>
            </div>
          </Reveal>
          <Reveal delay={0.03}>
            <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "rgba(0,0,0,0.06)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: C.seawave, marginBottom: 14 }}>GenAI & Process Automation</div>
          </Reveal>
          <Reveal delay={0.04}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 100, background: `${C.lemon}88`, fontSize: 11, fontWeight: 500, color: C.black, marginBottom: 20, marginLeft: 8 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z" fill={C.seawave}/></svg>
              Accelerated by our own AI tools — Text2SQL, Auto Data Catalog
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="dd-hero-h1" style={{ fontSize: 58, fontWeight: 400, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.025em", maxWidth: 780 }}>
              We're drowning in manual work that AI should handle
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 620, color: C.textMuted, marginBottom: 36 }}>
              Your people spend hours on tasks that generative AI could handle in minutes — processing documents, preparing reports, answering data questions. It's time to automate the tedious and free your team for work that matters.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: C.black, color: C.white, padding: "14px 36px", borderRadius: 100, fontWeight: 500, fontSize: 16, textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>Book a free call</a>
              <a href="/our-services" style={{ display: "inline-block", background: "transparent", color: C.black, padding: "14px 36px", borderRadius: 100, border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16, textDecoration: "none", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }} onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.black; }}>Back to all services</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>The challenge</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>Your team's capacity is being eaten by repetitive work that follows predictable patterns — exactly the kind of work GenAI excels at.</p>
          </Reveal>
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "Hours lost to document processing", body: "PDFs, lab reports, invoices, regulatory filings — your team manually extracts data from documents that machines should read automatically." },
              { title: "Business users locked out of their own data", body: "Every data question requires a ticket to IT or a SQL-savvy analyst. By the time the answer arrives, the decision moment has passed." },
              { title: "Repetitive work eating skilled capacity", body: "Your best people spend significant time on tasks that follow predictable patterns. That's capacity that should be focused on judgment and strategy." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: C.gray, borderRadius: 16, padding: "28px 24px", borderTop: `3px solid ${C.lemon}`, height: "100%" }}>
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
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>How we solve it</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>Fast prototyping, production-grade deployment, and your team trained to extend the solutions themselves.</p>
          </Reveal>
          <div className="dd-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { step: "1", title: "Process mapping & automation audit", desc: "We identify which manual processes are highest-impact candidates for GenAI automation — based on volume, complexity, and business value." },
              { step: "2", title: "Solution design & prototyping", desc: "Fast prototyping using our existing tools and frameworks. Working demonstrations in weeks, not months. Your team sees results early." },
              { step: "3", title: "Production deployment", desc: "From prototype to production with proper guardrails — data security, access controls, error handling, and integration with your existing systems." },
              { step: "4", title: "Training & scaling", desc: "We train your team to use and extend the solutions. Then identify the next processes to automate — building a continuous improvement cycle." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: C.white, borderRadius: 16, padding: "28px 24px", border: `1px solid ${C.border}`, height: "100%" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: C.lemon, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{item.step}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROVEN RESULTS */}
      <section style={{ background: `${C.turquoise}44` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Proven results</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>GenAI automation delivering measurable impact — not just demos.</p>
          </Reveal>
          <div className="dd-proof-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <Reveal delay={0.05}>
              <CaseCard company="Solar Foods" tag="Food Technology" description="Automated lab report processing — PDF to structured data. EFSA regulatory monitoring system that tracks compliance requirements automatically." />
            </Reveal>
            <Reveal delay={0.1}>
              <CaseCard company="KTI Kiinteistötieto" tag="Real Estate Data" description="Text2SQL deployed for real estate market data. Natural language queries embedded in existing portal. Business users access complex data without SQL." />
            </Reveal>
            <Reveal delay={0.15}>
              <CaseCard company="Viestimedia" tag="Media"
                description="38% improvement in customer acquisition. 37% cost reduction. 16% CPC reduction. AI-powered optimization of marketing operations."
                testimonial={{ quote: "Working with Data Design gave us a clear direction for using data to grow. The strategy and roadmap focus on real business needs.", name: "Taru Salo", title: "Head of Digital Development", company: "Viestimedia" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED TOOLS */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Tools that accelerate this</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>Our own GenAI tools — born from client engagements — power the automation solutions we build.</p>
          </Reveal>
          <div className="dd-tools-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <Reveal delay={0.05}>
              <div style={{ background: C.gray, borderRadius: 16, padding: "24px 22px", height: "100%" }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: C.turquoise, marginBottom: 14 }} />
                <h4 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>Text2SQL</h4>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>Ask questions in plain language, get answers from your data. Deployed in production at KTI Kiinteistötieto.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ background: C.gray, borderRadius: 16, padding: "24px 22px", height: "100%" }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: C.lemon, marginBottom: 14 }} />
                <h4 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>Auto Data Catalog</h4>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>Automatically document your data assets — no manual effort. GenAI-powered metadata extraction and documentation at scale.</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a href="/products-tools" style={{ color: C.seawave, fontSize: 15, fontWeight: 500, textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.6"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>Explore all tools and accelerators →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ background: C.beige }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>What you get</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>Production-ready automation that your team can use and extend.</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div style={{ background: C.white, borderRadius: 20, padding: "40px 36px", border: `1px solid ${C.border}` }}>
              <div className="dd-deliverables-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {["Documents processed automatically, not manually", "Plain-language access to data — no SQL needed", "Hours of manual work reduced to minutes", "Production-ready solutions with proper guardrails", "Training for your team to extend and maintain"].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}><path d="M2 7l3.5 3.5L12 4" stroke={C.seawave} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontSize: 15, lineHeight: 1.55, color: C.textMuted }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 28, paddingTop: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ display: "inline-flex", padding: "6px 16px", borderRadius: 100, background: C.lemon, fontSize: 13, fontWeight: 600 }}>Working prototype in 4–6 weeks</div>
                <span style={{ fontSize: 14, color: C.textMuted }}>From process audit to first automated workflow</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <Reveal>
            <div className="dd-cta-row" style={{ display: "flex", minHeight: 420, position: "relative", overflow: "hidden" }}>
              <div className="dd-cta-left" style={{ flex: 1, position: "relative", padding: "72px 60px", display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2 }}>
                <div style={{ position: "absolute", top: 0, left: -80, bottom: 0, right: "20%", background: C.lemon, borderRadius: "0 50% 50% 0", zIndex: -1 }} />
                <h2 style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.02em", position: "relative" }}>Ready to automate the tedious?</h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: C.textMuted, marginBottom: 32, position: "relative", maxWidth: 440 }}>Book a free 30-minute call. We'll identify the highest-impact automation opportunities in your organization and show you what's possible.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative" }}>
                  <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: C.white, color: C.black, padding: "14px 32px", borderRadius: 100, border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 15, textDecoration: "none", transition: "all 0.2s ease" }} onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }} onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.black; }}>Book a call</a>
                  <a href="/customer-stories" style={{ display: "inline-block", background: C.white, color: C.black, padding: "14px 32px", borderRadius: 100, border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 15, textDecoration: "none", transition: "all 0.2s ease" }} onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }} onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.black; }}>See customer stories</a>
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="280" height="240" viewBox="0 0 280 240" fill="none" style={{ opacity: 0.85 }}>
                  <g transform="translate(30, 30)">
                    <rect x="10" y="20" width="90" height="120" rx="10" fill={C.white} stroke={C.black} strokeWidth="1.2"/>
                    <rect x="20" y="35" width="50" height="6" rx="3" fill={C.gray}/><rect x="20" y="48" width="70" height="6" rx="3" fill={C.gray}/><rect x="20" y="61" width="40" height="6" rx="3" fill={C.gray}/><rect x="20" y="74" width="60" height="6" rx="3" fill={C.gray}/>
                    <path d="M110 80L140 80" stroke={C.seawave} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3"/>
                    <path d="M136 76l6 4-6 4" stroke={C.seawave} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="150" y="40" width="60" height="80" rx="10" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
                    <rect x="162" y="55" width="36" height="10" rx="3" fill={C.white}/><rect x="162" y="72" width="36" height="10" rx="3" fill={C.white}/><rect x="162" y="89" width="36" height="10" rx="3" fill={C.white}/>
                  </g>
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.gray, padding: "60px 40px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="dd-footer-grid" style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 48 }}>
            <div><span style={{ fontSize: 28, fontWeight: 400, color: C.black }}>DGI <span style={{ marginLeft: 8 }}>data design</span></span></div>
            <div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{["Home", "Team and Career", "Services", "Customer Stories", "Insights", "Contact"].map(label => (<a key={label} href="#" style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.5"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>{label}</a>))}</div></div>
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Socials</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="https://www.linkedin.com/company/data-design-oy" target="_blank" rel="noopener noreferrer" style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.5"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>LinkedIn</a>
                <a href="https://www.instagram.com/datadesign_ai_labs/" target="_blank" rel="noopener noreferrer" style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.5"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>Instagram</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Contact</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="mailto:info@datadesign.fi" style={{ color: C.black, textDecoration: "none", fontSize: 15 }}>info@datadesign.fi</a>
                <a href="tel:+358504420008" style={{ color: C.black, textDecoration: "none", fontSize: 15 }}>+358 50 442 0008</a>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: C.textMuted, marginTop: 8 }}>Data Design Oy (3305752-1)<br />Keilaniementie 1,<br />02150 Espoo, Finland</p>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ color: C.textMuted, fontSize: 14 }}>&copy; 2025 Data Design Oy. All rights reserved.</span>
            <div style={{ display: "flex", gap: 28 }}>{["Privacy Policy", "Terms of Service", "Cookies Settings"].map(label => (<a key={label} href="#" style={{ color: C.black, textDecoration: "underline", fontSize: 14, textUnderlineOffset: "3px" }}>{label}</a>))}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
