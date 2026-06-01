"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

const PARTNERS = [
  {
    name: "Mika Aho",
    role: "CEO, Co-founder, PhD",
    photo: "/images/people/MikaAho.jpg",
    description: "Business-minded AI strategist who has helped numerous clients design and implement their AI visions.",
    linkedin: "https://www.linkedin.com/in/mikaaho/",
  },
  {
    name: "Pekka Autere",
    role: "Partner, Senior Advisor",
    photo: "/images/people/PekkaAutere.png",
    description: "AI leader with 20+ years of experience, known for delivering 200M+ in revenue impact at H&M.",
    linkedin: "https://www.linkedin.com/in/pekkaautere/",
  },
  {
    name: "Toni Haapakoski",
    role: "Co-founder, Senior Advisor",
    photo: "/images/people/ToniHaapakoski.jpg",
    description: "Specialist in data strategies, governance, and enterprise architecture. Founded Bilot PLC.",
    linkedin: "https://www.linkedin.com/in/tonihaapakoski/",
  },
  {
    name: "Jaakko Mattila",
    role: "Partner, Senior Advisor",
    photo: "/images/people/JaakkoMattila.png",
    description: "Formerly leading data strategy and governance practices at Deloitte. Pragmatic approach to making data work.",
    linkedin: "https://www.linkedin.com/in/mattilajaakko/",
  },
];

const OFFICES = [
  {
    city: "Espoo",
    address: "Keilaniementie 1\n02150 Espoo, Finland",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.5!2d24.8275!3d60.1756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df5ec1f0e3b1d%3A0x1c2b4e2a6c3d5e6f!2sKeilaniementie%201%2C%2002150%20Espoo!5e0!3m2!1sen!2sfi!4v1700000000000",
    mapsLink: "https://www.google.com/maps/search/Keilaniementie+1,+02150+Espoo,+Finland",
  },
  {
    city: "Tampere",
    address: "Pellavatehtaankatu 10\n33100 Tampere, Finland",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.5!2d23.7737!3d61.4940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf5b4a0b3c1d%3A0x2a3b4c5d6e7f8a9b!2sPellavatehtaankatu%2010%2C%2033100%20Tampere!5e0!3m2!1sen!2sfi!4v1700000000000",
    mapsLink: "https://www.google.com/maps/search/Pellavatehtaankatu+10,+33100+Tampere,+Finland",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        gradient="lemon"
        badge="Contact"
        title="Let's talk about what AI can do for your business"
        subtitle="No 40-page RFP. No sales deck. Just a direct conversation with someone who's done this before."
        primaryButton={{ label: "Book a free call", href: CALENDLY_URL }}
      />

      {/* CONTACT INFO */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Get in touch
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Reach out directly or book a 30-minute call. We'll be honest about whether we can help.
            </p>
          </Reveal>

          <div className="dd-how-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          }}>
            {/* Email */}
            <Reveal delay={0}>
              <a href="mailto:info@datadesign.fi" style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div style={{
                  background: C.gray, borderRadius: CARD_BORDER_RADIUS, padding: "36px 28px",
                  border: `1px solid ${C.border}`, height: "100%",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#ccc"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, background: C.lemon,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20, fontSize: 22,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: C.black }}>Email</h3>
                  <p style={{ fontSize: 15, color: C.seawave, fontWeight: 500 }}>info@datadesign.fi</p>
                </div>
              </a>
            </Reveal>

            {/* Phone */}
            <Reveal delay={0.1}>
              <a href="tel:+358504420008" style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div style={{
                  background: C.gray, borderRadius: CARD_BORDER_RADIUS, padding: "36px 28px",
                  border: `1px solid ${C.border}`, height: "100%",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#ccc"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, background: C.turquoise,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20, fontSize: 22,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: C.black }}>Phone</h3>
                  <p style={{ fontSize: 15, color: C.seawave, fontWeight: 500 }}>+358 50 442 0008</p>
                </div>
              </a>
            </Reveal>

            {/* Book a call */}
            <Reveal delay={0.2}>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div style={{
                  background: C.gray, borderRadius: CARD_BORDER_RADIUS, padding: "36px 28px",
                  border: `1px solid ${C.border}`, height: "100%",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#ccc"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, background: C.lemon,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20, fontSize: 22,
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: C.black }}>Book a call</h3>
                  <p style={{ fontSize: 15, color: C.seawave, fontWeight: 500 }}>30 min, free, no commitment</p>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Our offices
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Data Design Oy (3305752-1)
            </p>
          </Reveal>

          <div className="dd-offices-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
          }}>
            {OFFICES.map((office, i) => (
              <Reveal key={office.city} delay={i * 0.1}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS, border: `1px solid ${C.border}`,
                  overflow: "hidden", height: "100%",
                }}>
                  {/* Map */}
                  <div style={{ width: "100%", height: 240, background: C.border, position: "relative" }}>
                    <iframe
                      src={office.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${office.city} office map`}
                    />
                  </div>

                  {/* Info */}
                  <div style={{ padding: "28px 28px 32px" }}>
                    <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>{office.city}</h3>
                    <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.7, whiteSpace: "pre-line" }}>
                      {office.address}
                    </p>
                    <a
                      href={office.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        marginTop: 16, fontSize: 14, color: C.seawave,
                        fontWeight: 500, textDecoration: "none",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Your contacts
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Reach out to any of us directly. We'll connect you with the right person for your challenge.
            </p>
          </Reveal>

          <div className="dd-partners-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
          }}>
            {PARTNERS.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <div style={{
                  background: C.gray, borderRadius: CARD_BORDER_RADIUS, padding: "32px 24px",
                  border: `1px solid ${C.border}`, textAlign: "center", height: "100%",
                  display: "flex", flexDirection: "column", alignItems: "center",
                }}>
                  {/* Photo */}
                  <div style={{
                    width: 96, height: 96, borderRadius: "50%", overflow: "hidden",
                    marginBottom: 20, border: `2px solid ${C.border}`,
                  }}>
                    <img
                      src={person.photo}
                      alt={person.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>

                  {/* Name & role */}
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4, lineHeight: 1.3 }}>
                    {person.name}
                  </h3>
                  <p style={{
                    fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.06em", color: `${C.black}66`, marginBottom: 12,
                  }}>
                    {person.role}
                  </p>

                  {/* Description */}
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted, flex: 1, marginBottom: 16 }}>
                    {person.description}
                  </p>

                  {/* LinkedIn */}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        fontSize: 13, color: C.seawave, fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* LinkedIn follow */}
          <Reveal delay={0.3}>
            <div style={{
              marginTop: 32, padding: "24px 28px", background: C.beige, borderRadius: 14,
              textAlign: "center",
            }}>
              <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6 }}>
                Follow us on{" "}
                <a href="https://www.linkedin.com/company/data-design-oy" target="_blank" rel="noopener noreferrer"
                  style={{ color: C.seawave, textDecoration: "none", fontWeight: 500 }}>
                  LinkedIn
                </a>{" "}
                for insights, case studies, and company updates.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="In 30 minutes, you'll know if we're the right fit"
        subtitle="Whether you need a strategy sprint, a working AI solution, or senior people embedded in your team — you'll leave the call with clarity, not a sales pitch."
        secondaryLabel="See our services"
        secondaryHref="/services"
        image="/images/illustrations/DD-Illustration-1.png"
      />
    </>
  );
}
