"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { CountUp } from "@/components/CountUp";

const TEAM = [
  {
    name: "Mika Aho",
    role: "Toimitusjohtaja, perustajaosakas, FT",
    photo: "/images/people/MikaAho.jpg",
    description: "20+ vuotta data- ja tekoälystrategioiden muuntamista rahoitetuiksi tiekartoiksi ja toimiviksi ratkaisuiksi. Aiemmin Silo.AI:lla, Bilotilla ja Louhia Analyticsilla.",
    linkedin: "https://www.linkedin.com/in/mikaaho/",
    color: "lemon",
  },
  {
    name: "Pekka Autere",
    role: "Partner, Senior Advisor",
    photo: "/images/people/PekkaAutere.png",
    description: "Kaksi vuosikymmentä datatiedettä ja koneoppimista. Johti H&M:n toimitusketjun optimointia jonka liikevaihtovaikutus oli 200M€+. Syvä osaaminen vähittäiskaupassa, pankissa ja merenkulussa.",
    linkedin: "https://www.linkedin.com/in/pekkaautere/",
    color: "turquoise",
  },
  {
    name: "Toni Haapakoski",
    role: "Perustajaosakas, Senior Advisor",
    photo: "/images/people/ToniHaapakoski.jpg",
    description: "20+ vuotta data- ja analytiikkaosaamista. Perusti Bilot Oyj:n vuonna 2005, kasvatti yrityksen 200+ työntekijään ja 27M€ liikevaihtoon. Asiantuntija tiedonhallinnassa ja yritysarkkitehtuurissa.",
    linkedin: "https://www.linkedin.com/in/tonihaapakoski/",
    color: "lemon",
  },
  {
    name: "Jaakko Mattila",
    role: "Partner, Senior Advisor",
    photo: "/images/people/JaakkoMattila.png",
    description: "20 vuotta kokemusta konsultoinnista, valmistavasta teollisuudesta ja rahoituspalveluista. Johti datastrategian ja tiedonhallintakäytäntöä Deloittella. Pragmaattinen tapa saada data toimimaan.",
    linkedin: "https://www.linkedin.com/in/mattilajaakko/",
    color: "turquoise",
  },
  {
    name: "Suvi Huotari",
    role: "AI Advisor",
    photo: "/images/people/SuviHuotari.jpg",
    description: "Tuotantotason dataputket, modernin data-stackin osaaminen ja MLOps. Muuttaa prototyypit järjestelmiksi, jotka toimivat luotettavasti suuressa mittakaavassa.",
    color: "lemon",
  },
  {
    name: "Niko Föhr",
    role: "Senior AI Scientist",
    photo: "/images/people/NikoFohr.jpg",
    description: "Mallien kehityksestä käyttöönottoon. Käytännön kokemusta tekoälyratkaisujen toimittamisesta hinnoittelussa, asiakkuusälyssä ja ennustavissa operaatioissa.",
    color: "turquoise",
  },
  {
    name: "Amir Vaheb",
    role: "Senior AI Scientist",
    photo: "/images/people/AmirVaheb.jpg",
    description: "Yhdistää liiketoimintatavoitteet ja teknisen toteutuksen. Kokemusta tekoälyhankkeiden määrittelystä, sidosryhmien kanssa työskentelystä ja toimitusten johtamisesta.",
    color: "lemon",
  },
];

const STATS = [
  { number: "€200M+", label: "Asiakkaillemme tuotettua liikevaihtovaikutusta" },
  { number: "30+", label: "Johdon hyväksymää tekoälystrategiaa" },
  { number: "100+", label: "Vauhditettua yritystä" },
  { number: "Viikkoja", label: "Aloituksesta tuloksiin" },
];

export default function AboutPageFi() {
  return (
    <>
      <HeroSection
        gradient="lemon"
        badge="Meistä"
        title="Pikatie tekoäly-natiiviksi organisaatioksi"
        subtitle="Siirryt alkuvaiheen tekoälykokeiluista koko organisaation muutokseen. Strategisella selkeydellä, syvällä dataosaamisella ja käytännönläheisellä toteutuksella yhdessä. Projektisi on kokeneiden vetämä ja GenAI-vauhditettu alusta saakka, joten tekoälystä tulee osa toimintaanne, ei sivuhanke."
        image="/images/illustrations/DD-Illustration-1.png"
        primaryButton={{ label: "Varaa ilmainen keskustelu", href: CALENDLY_URL }}
        secondaryButton={{ label: "Tutustu palveluihin", href: "/fi/services" }}
      />

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Ihmiset tulostesi takana
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Projektiasi johtavat samat ihmiset, jotka ovat rakentaneet tekoälystrategioita Sandvikille, optimoineet toimitusketjuja H&M:llä ja toimittaneet tuotantojärjestelmiä S-Pankille ja Metsolle.
            </p>
          </Reveal>

          <div className="dd-team-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "48px 32px",
          }}>
            {TEAM.map((person, i) => {
              const initials = person.name.split(" ").map(n => n[0]).join("");
              const bgColor = person.color === "turquoise" ? C.turquoise : C.lemon;

              return (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="dd-portrait-card" style={{ display: "flex", flexDirection: "column" }}>

                    <div style={{
                      position: "relative", width: "100%", aspectRatio: "4 / 5",
                      borderRadius: 40, overflow: "hidden", marginBottom: 20,
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    }}>
                      {person.photo ? (
                        <img
                          src={person.photo} alt={person.name}
                          className="dd-portrait-img"
                          style={{
                            width: "100%", height: "100%", objectFit: "cover",
                            display: "block",
                          }}
                        />
                      ) : (
                        <div style={{
                          width: "100%", height: "100%", background: bgColor,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <span style={{
                            fontSize: 48, fontWeight: 700,
                            color: `${C.black}cc`, letterSpacing: "-0.02em",
                          }}>{initials}</span>
                        </div>
                      )}

                      {person.linkedin && (
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                          className="dd-portrait-linkedin"
                          style={{
                            position: "absolute", top: 14, right: 14,
                            width: 40, height: 40, borderRadius: "50%",
                            background: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(8px)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: `${C.black}b3`, textDecoration: "none", zIndex: 2,
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 4, lineHeight: 1.25, letterSpacing: "-0.01em" }}>
                      {person.name}
                    </h3>
                    <div style={{ marginBottom: 10 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "0.06em", color: `${C.black}66`,
                      }}>{person.role}</span>
                    </div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted }}>
                      {person.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} direction="scale">
            <div className="dd-stats-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
              background: C.gray, borderRadius: CARD_BORDER_RADIUS, border: `1px solid ${C.border}`,
              overflow: "hidden", marginTop: 48,
            }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  padding: "28px 24px", textAlign: "center",
                  borderRight: i < 3 ? `1px solid ${C.border}` : "none",
                }}>
                  <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 4 }}>
                    <CountUp value={s.number} />
                  </div>
                  <div style={{ fontSize: 13, color: C.textMuted, fontWeight: 400 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Miten me toimimme
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Ero, jonka huomaat ensimmäisestä viikosta lähtien.
            </p>
          </Reveal>
          <div className="dd-how-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
          }}>
            {[
              {
                title: "Ohitat sisäänajon",
                body: "Projektisi alkaa henkilöllä, joka on jo toimittanut tekoälyjärjestelmiä H&M:llä, Silo AI:lla ja Deloittella. Ei harjoituspyörää. Oikeaa kokemusta alusta saakka.",
                accent: C.lemon,
              },
              {
                title: "Strategiastasi tulee toimiva järjestelmä",
                body: "Sama henkilö, joka esittää johdolle maanantaina, kirjoittaa tuotantokoodia tiistaina. Mikään ei katoa konsulttitalojen väliin.",
                accent: C.turquoise,
              },
              {
                title: "Tiimisi vahvistuu, ei muutu riippuvaiseksi",
                body: "Kun projekti päättyy, organisaatiosi on valmiimpi kuin alussa. Osaamisen siirto on rakennettu jokaiseen projektiin sisään.",
                accent: C.lemon,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
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

      <CTASection
        heading="30 minuutissa tiedät sopivammeko teille"
        subtitle="Tarvitsetko strategia-sprintin, toimivan tekoälyratkaisun vai kokeneet asiantuntijat tiimisi sisään. Lähdet keskustelusta selkeys mielessäsi, et myyntipuheella."
        secondaryLabel="Avoimet työpaikat"
        secondaryHref="/fi/company/careers"
        image="/images/illustrations/DD-Illustration-1.png"
      />
    </>
  );
}
