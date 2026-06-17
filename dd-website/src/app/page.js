"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { FeaturedSolutionCard } from "@/components/FeaturedSolutionCard";
import { CountUp } from "@/components/CountUp";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TestimonialSpotlight } from "@/components/TestimonialSpotlight";

const STATS = [
  { number: "€200M+", label: "Revenue impact created for clients" },
  { number: "100+", label: "Successful projects delivered" },
  { number: "50+", label: "AI solutions running in production" },
  { number: "30+", label: "Board-approved AI roadmaps" },
];

const FEATURED_SOLUTIONS = [
  {
    title: "We know AI matters, but where do we start?",
    tag: "AI Strategy & Roadmap",
    description: "Too many options, no clear plan. Imagine walking into your next board meeting with a prioritized shortlist of your highest-impact AI opportunities, funded and ready to execute.",
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
    description: "Your customer data sits across disconnected systems, useful to no one. Imagine your sales team walking into every meeting fully briefed, knowing the customer's history, open issues, and next likely need.",
    slug: "/solutions/customer-intelligence",
  },
];

const PARTNERS = [
  {
    name: "Mika Aho",
    title: "CEO, Co-founder, PhD",
    credential: "30+ board-approved AI roadmaps delivered",
    photo: "/images/people/MikaAho.jpg",
    linkedin: "https://linkedin.com/in/mikaaho/",
  },
  {
    name: "Pekka Autere",
    title: "Partner, Senior Advisor",
    credential: "Led AI-based supply chain optimization, €200M+ revenue impact at H&M",
    photo: "/images/people/PekkaAutere.png",
    linkedin: "https://linkedin.com/in/pekkaautere/",
  },
  {
    name: "Toni Haapakoski",
    title: "Co-founder, Senior Advisor",
    credential: "Founded and grew Bilot PLC to 200+ people and €27M revenue",
    photo: "/images/people/ToniHaapakoski.jpg",
    linkedin: "https://linkedin.com/in/tonihaapakoski/",
  },
  {
    name: "Jaakko Mattila",
    title: "Partner, Senior Advisor",
    credential: "Led Data Strategy and Governance practice at Deloitte",
    photo: "/images/people/JaakkoMattila.png",
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

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="AI Advisory & Implementation Agency"
        titleSize={64}
        subtitleDark
        blobs={2}
        image="/images/illustrations/DD-Illustration-4.png"
        title="Become an AI-native organization"
        subtitle="Start with one business problem. See results in weeks. Then scale AI from a single win to how your entire company operates, proving value at every step before you take the next."
        primaryButton={{ label: "Book a free call", href: CALENDLY_URL }}
        secondaryButton={{ label: "See how it works", href: "/services" }}
      >
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "48px 40px 80px" }}>
          <Reveal delay={0.15} direction="scale">
            <div className="dd-stats-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              background: C.white, borderRadius: CARD_BORDER_RADIUS,
              border: `1px solid ${C.border}`, overflow: "hidden",
            }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  padding: "28px 24px", textAlign: "center",
                  borderRight: i < STATS.length - 1 ? `1px solid ${C.border}` : "none",
                }}>
                  <div style={{
                    fontSize: 36,
                    fontWeight: 600,
                    letterSpacing: "-0.02em", marginBottom: 4,
                  }}>
                    <CountUp value={s.number} />
                  </div>
                  <div style={{ fontSize: 13, color: C.textMuted, fontWeight: 400 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </HeroSection>

      {/* 2. Our clients (logos) */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em", textAlign: "center" }}>
              Our clients
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="dd-clients-row" style={{
              display: "flex", justifyContent: "center", gap: 12,
              flexWrap: "wrap", alignItems: "center",
            }}>
              {CLIENTS.map((client, i) => (
                <div key={i} style={{
                  background: C.white, borderRadius: PILL_BORDER_RADIUS,
                  padding: client.logo ? "8px 20px" : "10px 24px",
                  fontSize: 14, fontWeight: 500,
                  color: C.black, border: `1px solid ${C.border}`,
                  transition: "all 0.3s ease", cursor: "default",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.lemon; e.currentTarget.style.borderColor = C.lemon; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.white; e.currentTarget.style.borderColor = C.border; }}
                >
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} style={{ height: 22, width: "auto", objectFit: "contain" }} />
                  ) : client.name}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. What working with us feels like */}
      <section className="dd-grain" style={{ background: `linear-gradient(to right, ${C.lemon}, ${C.turquoise})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              What working with us feels like
            </h2>
          </Reveal>

          <div className="dd-why-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
            marginTop: 40,
          }}>
            {[
              {
                title: "You work with the people who do the work",
                body: "The people in your kickoff are the people who deliver. No hand-offs, no ramp-up time. Senior practitioners with 20+ years average experience from day one.",
                accent: C.lemon,
              },
              {
                title: "Your strategy becomes a working solution",
                body: "The roadmap your board approves is the one that gets built. Strategy and implementation move together. Nothing ends up as a shelf document.",
                accent: C.turquoise,
              },
              {
                title: "Your projects move in weeks, not quarters",
                body: "Our own AI tools accelerate every phase: from analysis to prototype to production. You get the speed of pre-built technology without buying software.",
                accent: C.lemon,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: 16, padding: "28px 24px",
                  borderTop: `3px solid ${item.accent}`,
                  height: "100%",
                }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What people say */}
      <section style={{ background: C.beige }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              What people say
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              In our clients' own words: what working with us feels like, and what it has produced.
            </p>
          </Reveal>

          <TestimonialSpotlight
            quote="Our loyalty customers now get offers they care about. This means more visits, more sales, and 256% more coupon use. We turned customer insights into action and real business results."
            highlight="256% more coupon use."
            name="Tuomas Vihavainen"
            title="Head of Group Analytics"
            company="Tokmanni"
            logo="/images/logos/Tokmanni_BW.png"
          />

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

      {/* 5. Sound familiar? */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Sound familiar?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              Every one of these challenges has a clear path to resolution, with results you can show your board.
            </p>
          </Reveal>
          <div className="dd-solutions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {FEATURED_SOLUTIONS.map((s, i) => (
              <FeaturedSolutionCard key={s.slug} solution={s} index={i} />
            ))}
          </div>
          <Reveal delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="/solutions" className="dd-arrow-link dd-link-hover" style={{
                color: C.seawave, fontSize: 15, fontWeight: 500, textDecoration: "none",
              }}>See all solutions <span className="dd-arrow">{"→"}</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. The people behind the work */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              The people behind the work
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 680, marginBottom: 52 }}>
              Your engagement is led by the same people who've built AI strategies for Sandvik, optimized supply chains at H&M, and shipped production systems for S-Pankki and Metso.
            </p>
          </Reveal>

          <div className="dd-partners-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div className="dd-portrait-card" style={{
                  background: C.gray, borderRadius: CARD_BORDER_RADIUS, overflow: "hidden",
                  height: "100%", display: "flex", flexDirection: "column",
                }}>
                  <div style={{ height: 280, background: C.gray, overflow: "hidden", position: "relative" }}>
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="dd-portrait-img"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                    />
                  </div>
                  <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 10 }}>{p.title}</p>
                    <p style={{ fontSize: 12.5, lineHeight: 1.5, color: C.seawave, fontWeight: 500, flex: 1 }}>{p.credential}</p>
                    <a
                      href={p.linkedin}
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
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="/company/about" className="dd-arrow-link dd-link-hover" style={{
                color: C.seawave, fontSize: 15, fontWeight: 500, textDecoration: "none",
              }}>Meet the full team <span className="dd-arrow">{"→"}</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. CTA. Get in touch */}
      <CTASection
        heading="Get in touch"
        subtitle="In 30 minutes, you'll know your single highest-impact AI opportunity and what it would take to make it real. No pitch, no pressure."
        secondaryLabel="See how it works"
        secondaryHref="/services"
        image="/images/illustrations/DD-Illustration-4.png"
        imageSize={70}
      />
    </>
  );
}
