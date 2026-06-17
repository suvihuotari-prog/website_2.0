"use client";

import { C, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CheckmarkIcon } from "@/components/CheckmarkIcon";

const YOUR_WEEK = [
  {
    day: "Ma",
    title: "Avaat uuden asiakkaan hinnoitteluhaasteen",
    desc: "Vähittäiskauppias haluaa ymmärtää, miksi katteet rapautuvat tietyissä kategorioissa. Käyt läpi datan, kartoitat lähteet ja luonnostelet analyyttisen lähestymistavan ennen ensimmäistä työpajaa.",
  },
  {
    day: "Ti",
    title: "Rakennat tarinan jota data kertoo",
    desc: "SQL, Python, visualisointi. Yhdistät datasettejä joita muut eivät pystyneet yhdistämään. Kuvio on selvä: kausittaiset kysyntämuutokset eivät näy heidän nykyisessä raportoinnissaan.",
  },
  {
    day: "Ke",
    title: "Esittelet johtoryhmälle",
    desc: "Ei koontinäytön läpikäynti, vaan suositus. Selität, mitä löysit, mitä se tarkoittaa liikevaihdolle ja mitä heidän pitäisi tehdä seuraavaksi. He kysyvät kysymyksiä, ja sinulla on vastaukset.",
  },
  {
    day: "To",
    title: "Pareilet kokeneen konsultin kanssa datastrategiaa",
    desc: "Energiayhtiö tarvitsee ymmärtää datamaisemansa. Arvioit datan laadun eri järjestelmissä, kartoitat omistajuusaukot ja autat rakentamaan tiedonhallintamallin.",
  },
  {
    day: "Pe",
    title: "Hiotat mallia tiimisi kanssa",
    desc: "Asiakassegmentointiprojekti tarvitsee terävämpiä klustereita. Käyt lähestymistavan läpi ML-insinöörin kanssa, iteroit ominaisuuksia ja tarkistat liiketoimintalogiikkaa vasten.",
  },
];

const THRIVE_IF = [
  "Ajattelet SQL:ssä ja osaat navigoida missä tahansa tietokannassa, ei vain siisteissä",
  "Näet liiketoimintakysymyksen jokaisen datakyselyn takana",
  "Pystyt selittämään tilastollisen löydöksen toimitusjohtajalle ilman, että tyhmennät sitä",
  "Olet työskennellyt visualisointityökaluilla kuten Tableau tai Power BI, ja tiedät, milloin yksinkertainen taulukko on parempi",
  "Taustallasi on tutkinto kvantitatiivisella alalla ja useampi vuosi käytännön analyytikkokokemusta",
  "Olet tottunut esittelemään johtotasolle, et vain lähettämään raportteja",
];

const NOT_FOR_YOU = [
  "Pidät mieluummin näyttöruudun takana. Tämä rooli on asiakasrajapinnassa alusta saakka",
  "Haluat kapean erikoistumisen. Täällä työskentelet eri toimialoilla ja ongelmatyypeillä",
  "Tarvitset kuukausia sisäänajoa. Saat tukea, mutta etenemme nopeasti",
];

const WHAT_YOU_GET = [
  {
    title: "Oivalluksesi päätyvät johtoryhmän pöytään",
    body: "Et vain pyörittele numeroita. Esittelet löydöksiä johtajille, jotka tekevät investointipäätöksiä työsi pohjalta. Analyysisi näkyy päätöksenteon pohjana, ei arkistokaapissa.",
    accent: C.lemon,
  },
  {
    title: "Opit harjoittelijoiden sijaan käytännön osaajilta",
    body: "Mentorisi tulevat Silo AI:sta, H&M:stä, Deloittesta ja Bilotista, ja heillä on keskimäärin 20+ vuoden kokemus. He työskentelevät rinnallasi projekteissa, eivät tarkista työtäsi etäältä.",
    accent: C.turquoise,
  },
  {
    title: "Joka kvartaali kasvattaa sinua",
    body: "Vähittäiskaupan hinnoittelu, energiayhtiön tiedonhallinta, pankin asiakasäly, valmistavan teollisuuden operaatiot. Ratkaiset perustavaa laatua olevia ongelmia ja kasvat nopeammin kuin missään yhden toimialan roolissa.",
    accent: C.lemon,
  },
  {
    title: "Näet kokonaiskuvan. Et vain dataketuna",
    body: "Työskentelet tekoälystrategistien, ML-insinöörien ja liiketoimintakonsulttien rinnalla. Ymmärrät miten analyysisi sopii laajempiin tekoälyratkaisuihin. Ja minne urasi voi seuraavaksi mennä.",
    accent: C.turquoise,
  },
];

export default function SeniorDataAnalystPageFi() {
  return (
    <>
      <HeroSection
        gradient="beige"
        breadcrumb={[
          { label: "Ura", href: "/fi/company/careers" },
          { label: "Senior Data Analyst" },
        ]}
        badge="Kokoaikainen / Espoo, Tampere tai etänä"
        title="Käännät datan päätöksiksi, jotka päätyvät johtoryhmän pöydälle"
        subtitle="Ei koontinäyttöjä, jotka pölyttyvät. Ei raportteja, joita kukaan ei lue. Toimitat oivalluksia, jotka muuttavat sitä, miten yritykset investoivat, hinnoittelevat ja kasvavat, ja esittelet ne ihmisille, jotka päättävät."
        primaryButton={{ label: "Hae nyt", href: "mailto:info@datadesign.fi?subject=Hakemus: Senior Data Analyst" }}
        secondaryButton={{ label: "Tutustu tiimiin", href: "/fi/company/about" }}
      />

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Mitä tämä rooli oikeasti on
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: C.textMuted, maxWidth: 700, marginBottom: 0 }}>
              Istut datan ja liiketoimintapäätösten välissä. Asiakkaat tuovat sotkuisia datasettejä, epäselviä kysymyksiä ja isoja kunnianhimoja. Selvität, mitä data oikeasti sanoo. Muotoilet sen selkeäksi tarinaksi ja esität sen niille, jotka toimivat sen pohjalta: hinnoittelutiimeille, johtajille, johtoryhmille.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              marginTop: 40, padding: "28px 32px", background: C.beige, borderRadius: 16,
              borderLeft: `4px solid ${C.seawave}`, maxWidth: 700,
            }}>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: C.black }}>
                Vähittäiskauppias epäilee, että kategoriahinnoittelu vuotaa rahaa. Yhdistät heidän myyntidatansa kilpailusignaalien ja kausimallien kanssa, löydät aukon ja käyt johtoryhmän läpi, mitä muuttaa. Numeroilla, jotka he voivat viedä suoraan tuloslaskelmaansa.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Viikko tässä roolissa
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Kaksi viikkoa ei näytä samalta. Tältä tyypillinen viikko voisi näyttää.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {YOUR_WEEK.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: 16, padding: "24px 28px",
                  display: "flex", gap: 20, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                    background: i === 2 ? C.lemon : C.gray,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, color: C.black,
                    textTransform: "uppercase", letterSpacing: "0.04em",
                  }}>{item.day}</div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6, lineHeight: 1.35 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <div className="dd-thrive-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div>
              <Reveal>
                <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
                  Menestyt täällä jos...
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, marginBottom: 36 }}>
                  Välitämme enemmän siitä, miten ajattelet, kuin siitä, mitä työkaluja olet käyttänyt. Tässä on, mitä tämän roolin parhailla ihmisillä on yhteistä.
                </p>
              </Reveal>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {THRIVE_IF.map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <CheckmarkIcon />
                      <span style={{ fontSize: 15, lineHeight: 1.6, color: C.black }}>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal delay={0.15}>
                <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.01em", marginTop: 8 }}>
                  Tämä rooli ei todennäköisesti ole sinulle jos...
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: C.textMuted, marginBottom: 28 }}>
                  Rehellinen on parempi kuin aikasi tuhlaaminen. Tällä roolilla on tietty muoto.
                </p>
              </Reveal>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {NOT_FOR_YOU.map((item, i) => (
                  <Reveal key={i} delay={0.2 + i * 0.06}>
                    <div style={{
                      display: "flex", gap: 12, alignItems: "flex-start",
                      padding: "14px 18px", background: C.gray, borderRadius: 12,
                    }}>
                      <span style={{ color: C.textMuted, fontSize: 16, flexShrink: 0, marginTop: 1 }}>,</span>
                      <span style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.35}>
                <div style={{ marginTop: 40 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Työkalupakkisi</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["SQL", "Python", "Tableau", "Power BI", "Excel", "BigQuery", "dbt", "Jupyter"].map((tool) => (
                      <span key={tool} style={{
                        padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS,
                        background: C.gray, fontSize: 13, fontWeight: 500, color: C.black,
                      }}>{tool}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Miltä urasi täällä näyttää
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Kasvat nopeammin, kun työ on oikeaa, asiakkaat ovat vaativia ja tiimi ympärilläsi on tehnyt sen jo.
            </p>
          </Reveal>

          <div className="dd-benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {WHAT_YOU_GET.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                  borderTop: `3px solid ${item.accent}`, height: "100%",
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em" }}>
              Yksityiskohdat
            </h2>
          </Reveal>

          <div className="dd-details-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { label: "Sijainti", value: "Espoo (Keilaniemi), Tampere tai etänä", note: "Asiakaskäyntejä tarpeen mukaan" },
              { label: "Tyyppi", value: "Kokoaikainen, vakituinen", note: "Joustava työaika" },
              { label: "Kieli", value: "Englanti vaaditaan", note: "Suomi on plussa paikallisten asiakkaiden kanssa" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  background: C.gray, borderRadius: 14, padding: "24px 24px",
                }}>
                  <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}55`, display: "block", marginBottom: 8 }}>{item.label}</span>
                  <p style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>{item.value}</p>
                  <p style={{ fontSize: 13, color: C.textMuted }}>{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dd-grain-subtle" style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "88px 40px", textAlign: "center" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Valmis työhön, joka päätyy johtoryhmän pöytään?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: C.textMuted, maxWidth: 560, margin: "0 auto 40px" }}>
              Lähetä meille lyhyt viesti itsestäsi ja linkki LinkedIniin tai CV:hen. Saatekirjettä ei tarvita. Näemme mieluummin, miten ajattelet, kuin miten kirjoitat virallisia hakemuksia.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:info@datadesign.fi?subject=Hakemus: Senior Data Analyst"
                style={{
                  display: "inline-block", background: C.black, color: C.white,
                  padding: "16px 40px", borderRadius: PILL_BORDER_RADIUS, fontWeight: 500, fontSize: 16,
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >Hae. Info@datadesign.fi</a>
              <a href="/fi/company/about"
                className="dd-btn-wipe"
                style={{
                  display: "inline-block", background: "transparent", color: C.black,
                  padding: "16px 36px", borderRadius: PILL_BORDER_RADIUS,
                  border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                  textDecoration: "none", transition: "all 0.2s",
                }}
              >Tutustu tiimiin</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
