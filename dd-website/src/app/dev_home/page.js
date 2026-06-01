"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ParallaxCard } from "@/components/ParallaxCard";
import { FeaturedSolutionCard } from "@/components/FeaturedSolutionCard";
import { CountUp } from "@/components/CountUp";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TestimonialSpotlight } from "@/components/TestimonialSpotlight";
import { CTASection } from "@/components/CTASection";

/* ══════════════════════════════════════════════
   Data (same as home page)
   ══════════════════════════════════════════════ */
const STATS = [
  { number: "€200M+", label: "Revenue impact created for clients" },
  { number: "50+", label: "AI solutions running in production" },
  { number: "30+", label: "Board-approved AI roadmaps" },
  { number: "Weeks", label: "From first call to measurable results" },
];

const FEATURED_SOLUTIONS = [
  {
    title: "We know AI matters, but where do we start?",
    tag: "AI Strategy & Roadmap",
    description: "Too many options, no clear plan. Imagine walking into your next board meeting with a prioritized shortlist of your highest-impact AI opportunities — funded and ready to execute.",
    slug: "/solutions/ai-strategy",
  },
  {
    title: "We're drowning in manual work that AI should handle",
    tag: "GenAI & Process Automation",
    description: "Your people spend hours on tasks that should take minutes. Imagine reports ready when your team arrives, anyone querying your data in plain language, and hundreds of hours reclaimed for work that actually matters.",
    slug: "/solutions/genai-automation",
  },
  {
    title: "We don't really know our customers well enough",
    tag: "Customer Intelligence",
    description: "Your customer data sits across disconnected systems — useful to no one. Imagine your sales team walking into every meeting fully briefed — knowing the customer's history, open issues, and next likely need.",
    slug: "/solutions/customer-intelligence",
  },
];

const PARTNERS = [
  {
    name: "Mika Aho",
    title: "CEO, Co-founder, PhD",
    credential: "30+ board-approved AI roadmaps delivered",
    photo: "/images/people/MikaAho_wide.jpg",
    linkedin: "https://linkedin.com/in/mikaaho/",
  },
  {
    name: "Pekka Autere",
    title: "Partner, Senior Advisor",
    credential: "Led AI-based supply chain optimization — €200M+ revenue impact at H&M",
    photo: "/images/people/PekkaAutere_wide.png",
    linkedin: "https://linkedin.com/in/pekkaautere/",
  },
  {
    name: "Toni Haapakoski",
    title: "Co-founder, Senior Advisor",
    credential: "Founded and grew Bilot PLC to 200+ people and €27M revenue",
    photo: "/images/people/ToniHaapakoski_wide.jpg",
    linkedin: "https://linkedin.com/in/tonihaapakoski/",
  },
  {
    name: "Jaakko Mattila",
    title: "Partner, Senior Advisor",
    credential: "Led Data Strategy and Governance practice at Deloitte",
    photo: "/images/people/JaakkoMattila_wide.png",
    linkedin: "https://linkedin.com/in/mattilajaakko/",
  },
];

const CLIENTS = [
  { name: "Helen", logo: "/images/logos/Helen_BW.png" },
  { name: "Tokmanni", logo: "/images/logos/Tokmanni_BW.png" },
  { name: "Veikkaus", logo: "/images/logos/Veikkaus_BW.png" },
  { name: "KSS Energia", logo: "/images/logos/KSS_Energia_BW.png" },
  { name: "Elisa", logo: "/images/logos/Elisa_BW.png" },
  { name: "Solar Foods", logo: "/images/logos/SolarFoods_BW.jpg" },
  { name: "Sandvik", logo: "/images/logos/Sandvik_BW.png" },
  { name: "Anora", logo: "/images/logos/Anora_BW.png" },
  { name: "Nordic Tyre Group", logo: "/images/logos/NTG_BW.png" },
  { name: "A-Insinöörit", logo: "/images/logos/A-Insinoorit_BW.jpg" },
  { name: "Sitowise", logo: "/images/logos/Sitowise_BW.png" },
  { name: "Viestimedia", logo: "/images/logos/Viestimedia_BW.png" },
  { name: "Sarlin", logo: "/images/logos/Sarlin_BW.png" },
  { name: "Koja", logo: "/images/logos/Koja_BW.png" },
  { name: "Eurofins", logo: "/images/logos/Eurofins_BW.png" },
  { name: "Suomen Messut", logo: "/images/logos/SuomenMessut_BW.jpg" },
  { name: "DIMECC", logo: "/images/logos/DIMECC_BW.png" },
  { name: "KiraHub", logo: "/images/logos/KiraHub_BW.png" },
];

const CLIENTS_ROW1 = CLIENTS.slice(0, 9);
const CLIENTS_ROW2 = CLIENTS.slice(9);

/* ══════════════════════════════════════════════
   Portrait card with scroll-triggered desaturation
   ══════════════════════════════════════════════ */
function PortraitCard({ person, large = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className={`dd-portrait-card dd-portrait-reveal ${isInView ? "in-view" : ""}`}
      style={{
        background: C.gray, borderRadius: CARD_BORDER_RADIUS, overflow: "hidden",
        height: "100%", display: "flex", flexDirection: "column",
      }}
    >
      <div style={{
        height: large ? 340 : 280, background: C.gray, overflow: "hidden", position: "relative",
      }}>
        <img
          src={person.photo}
          alt={person.name}
          className="dd-portrait-img"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
        />
      </div>
      <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{person.name}</h3>
        <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 10 }}>{person.title}</p>
        <p style={{ fontSize: 12.5, lineHeight: 1.5, color: C.seawave, fontWeight: 500, flex: 1 }}>{person.credential}</p>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="dd-portrait-linkedin"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            marginTop: 12, padding: "6px 14px",
            borderRadius: PILL_BORDER_RADIUS,
            border: `1px solid ${C.border}`,
            fontSize: 12, fontWeight: 500, color: C.textMuted,
            textDecoration: "none", background: C.white,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   Main Page — Experimentation
   ══════════════════════════════════════════════ */
export default function ExperimentationPage() {
  /* ── Hero entrance overlay ── */
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════
           SECTION 1: HERO — Cinematic Entrance
         ═══════════════════════════════════ */}
      <section className="dd-grain-drift" style={{
        paddingTop: 72,
        position: "relative", overflow: "hidden",
        background: C.white,
        minHeight: "100vh",
      }}>
        {/* Layered gradient blobs */}
        <div style={{
          position: "absolute", top: -100, left: "-5%",
          width: "60%", height: "70%", borderRadius: "50%",
          background: C.lemon, opacity: 0.25, filter: "blur(120px)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, right: "5%",
          width: "35%", height: "45%", borderRadius: "50%",
          background: C.turquoise, opacity: 0.18, filter: "blur(100px)",
          pointerEvents: "none",
        }} />

        {/* Diagonal line pattern (SVG, very faint) */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='40' x2='40' y2='0' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }} />

        {/* Dark overlay that fades out */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute", inset: 0,
            background: C.black, pointerEvents: "none", zIndex: 5,
          }}
        />

        <div style={{
          maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto",
          padding: "120px 40px 48px",
          position: "relative", zIndex: 2,
        }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              display: "inline-flex", padding: "6px 18px", borderRadius: PILL_BORDER_RADIUS,
              background: "rgba(0,0,0,0.06)",
              fontSize: 13, fontWeight: 500, color: C.black, marginBottom: 28,
            }}>AI Advisory & Implementation Agency</div>
          </motion.div>

          {/* Title — word-by-word reveal */}
          <div style={{ maxWidth: "70%", marginBottom: 32 }}>
            <AnimatedHeadline
              text="Become an AI-native organization"
              delay={0.2}
              staggerMs={70}
            />
          </div>

          {/* Subtitle — blur to sharp */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 18, lineHeight: 1.7, maxWidth: 640,
              color: C.black, marginBottom: 36, fontWeight: 400,
            }}
          >
            Start with one business problem. See results in weeks. Then scale AI from a single win to how your entire company operates — proving value at every step before you take the next.
          </motion.p>

          {/* Buttons — spring bounce */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.9 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-block", background: C.black, color: C.white,
                padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                fontWeight: 500, fontSize: 16, textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.03)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
            >Book a free call</a>
            <a href="/services"
              className="dd-btn-wipe"
              style={{
                display: "inline-block", background: "transparent", color: C.black,
                padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                textDecoration: "none", transition: "all 0.2s",
              }}
            >See how it works</a>
          </motion.div>
        </div>

        {/* Illustration — floating between hero and next section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute", bottom: -60, right: "5%",
            width: 320, zIndex: 10, pointerEvents: "none",
          }}
        >
          <img src="/images/illustrations/DD-Illustration-4.png" alt="" style={{ width: "100%", height: "auto" }} />
        </motion.div>

        {/* Stats bar — overlapping card bridging hero and next section */}
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "48px 40px 0", position: "relative", zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="dd-stats-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              background: C.white, borderRadius: CARD_BORDER_RADIUS,
              border: `1px solid ${C.border}`, overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
              marginBottom: -48,
            }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  style={{
                    padding: "28px 24px", textAlign: "center",
                    borderRight: i < 3 ? `1px solid ${C.border}` : "none",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    fontSize: i === 0 ? 40 : 30,
                    fontWeight: i === 0 ? 700 : 600,
                    letterSpacing: "-0.02em", marginBottom: 4,
                  }}>
                    <CountUp value={s.number} />
                  </div>
                  <div style={{ fontSize: 13, color: C.textMuted, fontWeight: 400 }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 2: SOUND FAMILIAR — Diagonal cards
         ═══════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(175deg, #f5f5f5 0%, #f0f0ec 100%)",
        paddingTop: 48, /* extra top for overlapping stats bar */
      }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          {/* Side-by-side header */}
          <div className="dd-exp-header-split" style={{
            display: "flex", alignItems: "flex-end", gap: 40, marginBottom: 20,
          }}>
            <Reveal>
              <h2 style={{ fontSize: 48, fontWeight: 400, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
                Sound familiar?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 500, paddingBottom: 6 }}>
                Every one of these challenges has a clear path to resolution — with results you can show your board.
              </p>
            </Reveal>
          </div>

          {/* Decorative lemon line */}
          <Reveal delay={0.15}>
            <div style={{ width: "60%", height: 1, background: C.lemon, marginBottom: 48 }} />
          </Reveal>

          {/* Cards — diagonal rhythm */}
          <div className="dd-solutions-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
          }}>
            {FEATURED_SOLUTIONS.map((s, i) => {
              const directions = ["left", "up", "right"];
              const offsets = [0, 48, 0];
              return (
                <Reveal key={s.slug} delay={i * 0.1} direction={directions[i]}>
                  <div style={{ marginTop: offsets[i] }}>
                    <motion.div
                      whileHover={{ rotateZ: i === 0 ? 1 : i === 2 ? -1 : 0, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <FeaturedSolutionCard solution={s} index={0} />
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="/solutions" className="dd-arrow-link dd-link-hover" style={{
                color: C.seawave, fontSize: 15, fontWeight: 500, textDecoration: "none",
              }}>See all solutions <span className="dd-arrow">{"\u2192"}</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 3: PEOPLE — Editorial portrait gallery
         ═══════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(180deg, ${C.white} 0%, #f9f9f7 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative circle behind portraits */}
        <div style={{
          position: "absolute", top: 120, left: "8%",
          width: 300, height: 300, borderRadius: "50%",
          background: C.lemon, opacity: 0.08, filter: "blur(80px)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING, position: "relative", zIndex: 1 }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              The people behind the work
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 680, marginBottom: 52 }}>
              Your engagement is led by the same people who've built AI strategies for Sandvik, optimized supply chains at H&M, and shipped production systems for S-Pankki and Metso.
            </p>
          </Reveal>

          {/* Magazine-style asymmetric grid: 55/45 top row, offset bottom row */}
          <div className="dd-exp-portrait-grid" style={{
            display: "grid",
            gridTemplateColumns: "55fr 45fr",
            gap: 20,
          }}>
            {/* Row 1 — large + standard */}
            <Reveal delay={0.05}>
              <PortraitCard person={PARTNERS[0]} large />
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ marginTop: 40 }}>
                <PortraitCard person={PARTNERS[1]} />
              </div>
            </Reveal>

            {/* Row 2 — offset right */}
            <Reveal delay={0.2}>
              <div style={{ marginLeft: 40 }}>
                <PortraitCard person={PARTNERS[2]} />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <PortraitCard person={PARTNERS[3]} />
            </Reveal>
          </div>

          <Reveal delay={0.35}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="/company/about" className="dd-arrow-link dd-link-hover" style={{
                color: C.seawave, fontSize: 15, fontWeight: 500, textDecoration: "none",
              }}>Meet the full team <span className="dd-arrow">{"\u2192"}</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 4: WHAT WORKING WITH US FEELS LIKE — Overlapping cards
         ═══════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(165deg, #f5f5f5 0%, #f7f5ef 100%)",
      }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              What working with us feels like
            </h2>
          </Reveal>

          <div className="dd-exp-why-grid" style={{
            display: "flex", justifyContent: "center",
            marginTop: 48, position: "relative",
          }}>
            {[
              {
                title: "You work with the people who do the work",
                body: "The people in your kickoff are the people who deliver. No hand-offs, no ramp-up time — senior practitioners with 20+ years average experience from day one.",
                accent: C.lemon,
                rotate: -1.5,
              },
              {
                title: "Your strategy becomes a working solution",
                body: "The roadmap your board approves is the one that gets built. Strategy and implementation move together — so nothing ends up as a shelf document.",
                accent: C.turquoise,
                rotate: 0,
              },
              {
                title: "Your projects move in weeks, not quarters",
                body: "Our own AI tools accelerate every phase — from analysis to prototype to production. You get the speed of pre-built technology without buying software.",
                accent: C.lemon,
                rotate: 1.5,
              },
            ].map((item, i) => (
              <ParallaxCard key={i} speed={i === 1 ? 1 : 0.93}>
                <motion.div
                  className="dd-card-tilt"
                  initial={{ rotateZ: item.rotate }}
                  whileHover={{ rotateZ: 0, y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{
                    background: C.white, borderRadius: 16, padding: "28px 24px",
                    borderTop: `3px solid ${item.accent}`,
                    width: 340, minHeight: 240,
                    marginLeft: i > 0 ? -16 : 0,
                    boxShadow: `0 ${4 + i * 2}px ${16 + i * 4}px rgba(0,0,0,${0.04 + i * 0.01})`,
                    position: "relative", zIndex: 3 - i,
                  }}
                >
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </motion.div>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 5: CLIENT PROOF — Marquee logos + testimonials
         ═══════════════════════════════════ */}
      <section className="dd-grain" style={{
        background: `linear-gradient(to right, ${C.lemon}, ${C.turquoise})`,
      }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{
              fontSize: 48, fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em",
              textAlign: "center",
            }}>Results from organizations like yours</h2>
          </Reveal>

          {/* Two-row marquee — opposite directions */}
          <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 10 }}>
            <LogoMarquee logos={CLIENTS_ROW1} speed={35} direction="left" />
            <LogoMarquee logos={CLIENTS_ROW2} speed={30} direction="right" />
          </div>

          {/* Spotlight testimonial */}
          <TestimonialSpotlight
            quote="Our loyalty customers now get offers they care about. This means more visits, more sales, and 256% more coupon use. We turned customer insights into action — and real business results."
            highlight="256% more coupon use."
            name="Tuomas Vihavainen"
            photo="/images/people/MikaAho.jpg"
            title="Head of Group Analytics"
            company="Tokmanni"
            logo="/images/logos/Tokmanni_BW.png"
          />

          {/* Smaller testimonials */}
          <div className="dd-testimonials-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20,
          }}>
            <Reveal delay={0.1}>
              <TestimonialCard
                quote="The engagement was comprehensive and professionally planned, significantly advancing our AI development. The clarity of the workshops and tools was impressive."
                name="Kati Kinnunen"
                photo="/images/people/kati_kinnunen.png"
                title="Chief Digital Officer"
                company="Helen"
                logo="/images/logos/Helen_BW.png"
              />
            </Reveal>
            <Reveal delay={0.17}>
              <TestimonialCard
                quote="Data Design helped us take control of our master data. Their clear approach made our data more accurate and easier to manage."
                name="Matti Nurmi"
                photo="/images/people/MattiNurmi.png"
                title="CIO"
                company="Anora"
                logo="/images/logos/Anora_BW.png"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SECTION 6: CTA — Enhanced with float animation
         ═══════════════════════════════════ */}
      <CTASection
        heading="Not sure where to start?"
        subtitle="In 30 minutes, you'll know your single highest-impact AI opportunity — and what it would take to make it real. No pitch, no pressure."
        secondaryLabel="See how it works"
        secondaryHref="/services"
        image="/images/illustrations/DD-Illustration-4.png"
        imageSize={70}
      />
    </>
  );
}
