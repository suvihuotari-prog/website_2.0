import { useState, useEffect, useRef } from "react";

const C = { gray: "#f5f5f5", beige: "#f9f7ef", white: "#ffffff", lemon: "#e6ff99", turquoise: "#caebed", seawave: "#537f7b", black: "#000000", textMuted: "#444444", border: "#e0e0e0" };

const NAV_LINKS = [
  { label: "Team and career", href: "/team-and-career" },
  { label: "Services", href: "/our-services" },
  { label: "Customer Stories", href: "/customer-stories" },
  { label: "Insights", href: "/insights" },
  { label: "Contact us", href: "/contact-us" },
];

const STATS = [
  { number: "20+", label: "Years avg. experience" },
  { number: "50+", label: "AI projects delivered" },
  { number: "30+", label: "Strategies built" },
  { number: "100+", label: "Companies trained" },
];

const BACKGROUNDS = ["Silo AI", "H&M", "Deloitte", "Bilot", "Bigdatapump", "Louhia"];

function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold }); obs.observe(el); return () => obs.disconnect(); }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (<div ref={ref} style={{ ...style, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${delay}s` }}>{children}</div>);
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
      {menuOpen && (<div className="dd-nav-mobile" style={{ display: "none", flexDirection: "column", gap: 16, padding: "24px 40px 32px", background: C.white, borderTop: `1px solid ${C.border}` }}>
        {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} style={{ color: C.black, textDecoration: "none", fontSize: 17 }}>{l.label}</a>))}
        <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer" style={{ background: C.black, color: C.white, padding: "14px 28px", borderRadius: 100, fontWeight: 500, fontSize: 16, textDecoration: "none", textAlign: "center", marginTop: 8 }}>Book a call</a>
      </div>)}
    </nav>
  );
}

export default function TeamPage() {
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
          .dd-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .dd-modes-grid { grid-template-columns: 1fr !important; }
          .dd-roles-grid { grid-template-columns: 1fr !important; }
          .dd-steps-grid { grid-template-columns: 1fr !important; }
          .dd-why-grid { grid-template-columns: 1fr !important; }
          .dd-cta-row { flex-direction: column !important; }
          .dd-cta-left { padding: 48px 32px !important; }
          .dd-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 901px) { .dd-nav-mobile { display: none !important; } }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section style={{ paddingTop: 72, background: `linear-gradient(180deg, ${C.beige} 0%, ${C.white} 100%)` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px" }}>
          <Reveal>
            <div style={{ display: "inline-flex", padding: "6px 18px", borderRadius: 100, background: "rgba(0,0,0,0.06)", fontSize: 13, fontWeight: 500, marginBottom: 28, color: C.black }}>Team & Resources</div>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="dd-hero-h1" style={{ fontSize: 58, fontWeight: 400, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.025em", maxWidth: 720 }}>
              Senior people who've built AI at scale
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 620, color: C.textMuted, marginBottom: 36 }}>
              Our team averages 20+ years of experience — from Silo AI, H&M, Deloitte, Bilot, and Bigdatapump. You work directly with the people who've shipped AI systems, not hand-offs to juniors.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: C.black, color: C.white, padding: "14px 36px", borderRadius: 100, fontWeight: 500, fontSize: 16, textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.85"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>Book a free call</a>
              <a href="/our-services" style={{ display: "inline-block", background: "transparent", color: C.black, padding: "14px 36px", borderRadius: 100, border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16, textDecoration: "none", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }} onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.black; }}>See our services</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHERE WE COME FROM */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Where we come from</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 40 }}>Data Design brings together senior practitioners from some of the most respected companies in Nordic AI and data.</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
              {BACKGROUNDS.map((name) => (
                <div key={name} style={{ padding: "10px 24px", borderRadius: 100, background: C.gray, fontSize: 15, fontWeight: 500, border: `1px solid ${C.border}` }}>{name}</div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="dd-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, background: C.gray, borderRadius: 20, border: `1px solid ${C.border}`, overflow: "hidden" }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ padding: "28px 24px", textAlign: "center", borderRight: i < 3 ? `1px solid ${C.border}` : "none" }}>
                  <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 4 }}>{s.number}</div>
                  <div style={{ fontSize: 13, color: C.textMuted, fontWeight: 400 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK WITH YOU */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>How we work with you</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>We operate in three modes — most clients use a combination.</p>
          </Reveal>
          <div className="dd-modes-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { mode: "Advisory", accent: C.lemon, desc: "We help you figure out where AI creates the most value, build compelling business cases, and design a roadmap your organization can execute.", roles: ["Senior AI Strategist", "Data & AI Lead", "Business Analyst"] },
              { mode: "Implementation", accent: C.turquoise, desc: "From proof of concept to production — we build AI solutions that deliver measurable results and get adopted by your teams.", roles: ["ML/AI Engineer", "Data Engineer", "Solution Architect"] },
              { mode: "Embedded Resources", accent: C.lemon, desc: "Sometimes the best solution is our senior person sitting inside your organization. We embed directly in your team.", roles: ["Interim CDO", "AI Lead", "Senior Consultant"] },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: C.white, borderRadius: 20, padding: "32px 28px", border: `1px solid ${C.border}`, borderTop: `3px solid ${item.accent}`, height: "100%" }}>
                  <div style={{ display: "inline-flex", padding: "6px 16px", borderRadius: 100, background: item.accent, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>{item.mode}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>{item.desc}</p>
                  <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: C.seawave, display: "block", marginBottom: 8 }}>Key roles</span>
                    {item.roles.map((role, j) => (
                      <div key={j} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.seawave, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: C.textMuted }}>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EMBED OUR EXPERTISE */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Embed our expertise in your team</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>Not every challenge needs a project. Sometimes you need experienced people integrated into your organization — for weeks or months.</p>
          </Reveal>
          <div className="dd-roles-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              {
                title: "Interim Leadership",
                desc: "Interim CDO, AI Lead, or Data Lead roles. Strategic leadership embedded in your management team. For organizations building their AI capability or navigating a transformation.",
                deliverables: ["Strategic direction and AI vision", "Board-level reporting and stakeholder management", "Team building and capability development", "Vendor and partner management"],
              },
              {
                title: "Senior Consultants",
                desc: "Experienced practitioners who join your team and work alongside your people. Deep expertise in AI strategy, data governance, or analytics — with the seniority to drive decisions.",
                deliverables: ["Hands-on expertise from day one", "Knowledge transfer to your team", "Flexibility to scale up or down", "No recruitment risk or overhead"],
              },
              {
                title: "Data & ML Engineers",
                desc: "Hands-on engineers for project delivery. Pipeline design, model development, MLOps, production deployment. For teams that need execution capacity without permanent hires.",
                deliverables: ["Production-grade engineering", "Modern data stack expertise", "MLOps and deployment capability", "Seamless integration with your workflows"],
              },
            ].map((role, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: C.gray, borderRadius: 20, padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.01em" }}>{role.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>{role.desc}</p>
                  <div style={{ background: C.beige, borderRadius: 12, padding: "16px 18px", flex: 1 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: C.seawave, display: "block", marginBottom: 10 }}>What you get</span>
                    {role.deliverables.map((d, j) => (
                      <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 7 }}>
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}><path d="M2 7l3.5 3.5L12 4" stroke={C.seawave} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span style={{ fontSize: 13, lineHeight: 1.5, color: C.textMuted }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: C.beige }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>How it works</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 600, marginBottom: 52 }}>A straightforward process from first conversation to productive engagement.</p>
          </Reveal>
          <div className="dd-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { step: "1", title: "Needs assessment", desc: "A focused conversation to understand the role, context, and what success looks like." },
              { step: "2", title: "Team matching", desc: "We match the right person from our team — based on skills, industry experience, and cultural fit." },
              { step: "3", title: "Onboarding & integration", desc: "Fast ramp-up. Our people are used to joining new environments and becoming productive quickly." },
              { step: "4", title: "Ongoing alignment", desc: "Regular check-ins to ensure the engagement is delivering value. Flexibility to adjust scope as needs evolve." },
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

      {/* WHY OUR PEOPLE */}
      <section style={{ background: C.lemon }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "88px 40px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Why our people are different</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>Not just consultants — senior practitioners who deliver from day one.</p>
          </Reveal>
          <div className="dd-why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "They've done it before", body: "Not theoretical knowledge — real experience building and shipping AI systems at companies like H&M, Silo AI, and Deloitte." },
              { title: "They speak business and tech", body: "Our people can present to your board on Monday and write production code on Tuesday. That range is rare." },
              { title: "They build your capability", body: "We don't create dependency. Our people transfer knowledge, mentor your team, and leave your organization stronger than they found it." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{ background: C.white, borderRadius: 16, padding: "28px 24px", border: `1px solid ${C.border}`, height: "100%" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
          <Reveal>
            <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontSize: 22, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic", marginBottom: 24 }}>
                "Many consultants speak 'digital language' to us. Data Design understood how to communicate with our business people."
              </p>
              <p style={{ fontSize: 15, color: C.textMuted }}>— Client executive</p>
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
                <h2 style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.02em", position: "relative" }}>Need senior AI talent in your team?</h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: C.textMuted, marginBottom: 32, position: "relative", maxWidth: 440 }}>Book a free 30-minute call. We'll discuss your needs and find the right fit — whether it's a strategic role or hands-on engineering.</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative" }}>
                  <a href="https://calendly.com/mika-aho-datadesign/30min" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: C.white, color: C.black, padding: "14px 32px", borderRadius: 100, border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 15, textDecoration: "none", transition: "all 0.2s ease" }} onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }} onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.black; }}>Book a call</a>
                  <a href="/our-services" style={{ display: "inline-block", background: C.white, color: C.black, padding: "14px 32px", borderRadius: 100, border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 15, textDecoration: "none", transition: "all 0.2s ease" }} onMouseEnter={e => { e.currentTarget.style.background = C.black; e.currentTarget.style.color = C.white; }} onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.black; }}>See our services</a>
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="280" height="240" viewBox="0 0 280 240" fill="none" style={{ opacity: 0.85 }}>
                  <g transform="translate(30, 30)">
                    <circle cx="70" cy="80" r="30" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
                    <circle cx="150" cy="80" r="30" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
                    <circle cx="110" cy="140" r="30" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
                    <path d="M95 65L125 65" stroke={C.black} strokeWidth="1" strokeDasharray="3 3"/>
                    <path d="M82 105L98 125" stroke={C.black} strokeWidth="1" strokeDasharray="3 3"/>
                    <path d="M138 105L122 125" stroke={C.black} strokeWidth="1" strokeDasharray="3 3"/>
                    <circle cx="70" cy="80" r="8" fill={C.white}/>
                    <circle cx="150" cy="80" r="8" fill={C.white}/>
                    <circle cx="110" cy="140" r="8" fill={C.white}/>
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
            <div><h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Socials</h4><div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="https://www.linkedin.com/company/data-design-oy" target="_blank" rel="noopener noreferrer" style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.5"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>LinkedIn</a>
              <a href="https://www.instagram.com/datadesign_ai_labs/" target="_blank" rel="noopener noreferrer" style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.5"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>Instagram</a>
            </div></div>
            <div><h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Contact</h4><div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="mailto:info@datadesign.fi" style={{ color: C.black, textDecoration: "none", fontSize: 15 }}>info@datadesign.fi</a>
              <a href="tel:+358504420008" style={{ color: C.black, textDecoration: "none", fontSize: 15 }}>+358 50 442 0008</a>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: C.textMuted, marginTop: 8 }}>Data Design Oy (3305752-1)<br />Keilaniementie 1,<br />02150 Espoo, Finland</p>
            </div></div>
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
