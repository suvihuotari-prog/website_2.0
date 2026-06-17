"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";

const OPENINGS = [
  {
    title: "Harjoittelijat (ML, GenAI)",
    category: "Data & AI",
    type: "Osa-aikainen",
    locations: ["Espoo (Keilaniemi)", "Tampere", "Etänä"],
    description: "Pääset oikeisiin asiakasprojekteihin alusta saakka. Työskentelet kokeneiden asiantuntijoiden rinnalla ML- ja GenAI-ratkaisujen parissa. Opit tekemällä, et katsomalla.",
  },
  {
    title: "Senior Data Analyst",
    category: "Data & AI",
    type: "Kokoaikainen",
    locations: ["Espoo (Keilaniemi)", "Tampere", "Etänä"],
    description: "Muunna monimutkainen data oivalluksiksi, jotka ohjaavat liiketoimintapäätöksiä. Työskentelet suoraan asiakkaiden kanssa muuntaen heidän datansa suosituksiksi joita he toteuttavat.",
    href: "/fi/company/careers/senior-data-analyst",
  },
];

export default function CareersPageFi() {
  return (
    <>
      <HeroSection
        gradient="lemon"
        badge="Ura"
        title="Työsi päätyy tuotantoon. Ei diakokoelmaan"
        subtitle="Aloitatko tekoälyuraasi vai etsitkö seuraavaa vaativaa haastetta. Omistat oikeita projekteja oikeiden asiakkaiden kanssa. Ei pengillä istumista, ei sisäistä turhaa työtä. Vain merkityksellistä työtä, joka tekee näkyvän eron."
        primaryButton={{ label: "Avoimet työpaikat", href: "#openings" }}
        secondaryButton={{ label: "Tutustu tiimiin", href: "/fi/company/about" }}
      />

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Miltä urasi täällä näyttää
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Kasvat nopeammin kun jokainen projekti on oikea ja jokainen mentori on tehnyt sen jo aiemmin.
            </p>
          </Reveal>
          <div className="dd-how-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          }}>
            {[
              {
                title: "Omistat lopputuloksen, et vain tehtävää",
                body: "Olet vastuussa oikeista asiakastoimituksista alusta saakka. Ei varjorooleja tai havainnointijaksoja. Sinä osallistut, opit ja näet vaikutuksen.",
                accent: C.lemon,
              },
              {
                title: "Opit ihmisiltä jotka ovat tehneet sen",
                body: "Mentorisi ovat rakentaneet tekoälyä H&M:llä, Silo AI:lla ja Deloittella. Suora pääsy 20+ vuoden kokemukseen, ilman johtokerroksia välissä.",
                accent: C.turquoise,
              },
              {
                title: "Kasvat nopeammin koska joka projekti on erilainen",
                body: "Vähittäiskauppa, energia, pankki, teollisuus. Ratkaiset perustavaa laatua olevia ongelmia eri toimialoilla ja tekoälyn kypsyystasoilla. Kaksi kvartaalia ei näytä samalta.",
                accent: C.lemon,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: C.gray, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                  border: `1px solid ${C.border}`, borderTop: `3px solid ${item.accent}`,
                  height: "100%",
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Avoimet työpaikat
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Kasvatamme tiimiämme ihmisillä jotka haluavat tehdä merkityksellistä työtä tekoälyn ja liiketoiminnan risteyksessä.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {OPENINGS.map((job, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 32px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: 32,
                }}
                  className="dd-job-card"
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                      <span style={{
                        padding: "4px 14px", borderRadius: PILL_BORDER_RADIUS, background: C.lemon,
                        fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
                      }}>{job.category}</span>
                      <span style={{
                        padding: "4px 14px", borderRadius: PILL_BORDER_RADIUS, background: C.turquoise,
                        fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
                      }}>{job.type}</span>
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, letterSpacing: "-0.01em" }}>{job.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, marginBottom: 10 }}>{job.description}</p>
                    <p style={{ fontSize: 13, color: C.seawave, fontWeight: 500 }}>
                      {job.locations.join(" / ")}
                    </p>
                  </div>
                  <a href={job.href || `mailto:info@datadesign.fi?subject=Hakemus: ${job.title}`}
                    style={{
                      display: "inline-block", background: C.black, color: C.white,
                      padding: "12px 28px", borderRadius: PILL_BORDER_RADIUS, fontWeight: 500, fontSize: 14,
                      textDecoration: "none", transition: "opacity 0.2s", whiteSpace: "nowrap", flexShrink: 0,
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >{job.href ? "Tutustu" : "Hae"}</a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div style={{
              marginTop: 32, padding: "24px 28px", background: C.beige, borderRadius: 14,
              textAlign: "center",
            }}>
              <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6 }}>
                Eikö rooliasi listalla? Olemme aina kiinnostuneita kokeneista data- ja tekoälyammattilaisista. Lähetä avoin hakemus osoitteeseen{" "}
                <a href="mailto:info@datadesign.fi" style={{ color: C.seawave, textDecoration: "none", fontWeight: 500 }}>info@datadesign.fi</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        heading="30 minuutissa tiedät sopivammeko teille"
        subtitle="Etsitpä seuraavaa uravalintaasi tai olet vain kiinnostunut työskentelystä kanssamme, varaa puhelu ja keskustellaan."
        secondaryLabel="Tutustu tiimiin"
        secondaryHref="/fi/company/about"
        image="/images/illustrations/DD-Illustration-1.png"
      />
    </>
  );
}
