"use client";

import { useState } from "react";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialSpotlight } from "@/components/TestimonialSpotlight";
import { TestimonialCard } from "@/components/TestimonialCard";

const JOURNEY_PHASES = [
  {
    label: "Löydä lähtöpiste",
    timeframe: "Viikot 1–4",
    heading: "Tiedät tarkalleen, missä tekoäly luo eniten arvoa",
    description: "Liiketoimintaprosessisi on kartoitettu, vaikuttavimmat mahdollisuudet tunnistettu ja tiekartta laadittu johdon hyväksyttäväksi. Lopetat arvailun ja aloitat selkeydellä.",
    modes: [
      { tag: "Neuvonanto", color: C.lemon, text: "Strategiasprintti, käyttötapausten kartoitus ja priorisointi, sijoituskelpoiset liiketoimintatapaukset" },
    ],
    outcome: "Lähdet mukaan priorisoidulla tiekartalla ja selkeällä ensimmäisellä projektilla, hyväksyttynä ja rahoitettuna.",
    organization: "Johto on yhtä mieltä prioriteeteista. Tiimi, joka tulee omistamaan ensimmäisen projektin, on tunnistettu.",
  },
  {
    label: "Todista arvo nopeasti",
    timeframe: "Kuukaudet 1–3",
    heading: "Ensimmäinen tekoälyratkaisusi on tuotannossa, ja johtoryhmäsi näkee tulokset",
    description: "Tärkeimmäksi priorisoitu käyttötapaus etenee konseptista tuotantoon. Ratkaisu kytkeytyy laajempiin liiketoimintatavoitteisiin ja tuottaa mitattavia tuloksia, jotka organisaatiosi näkee.",
    modes: [
      { tag: "Toteutus", color: C.turquoise, text: "Ensimmäinen tekoälyratkaisu rakennettu, testattu ja viety tuotantoon" },
      { tag: "Neuvonanto", color: C.lemon, text: "Liiketoimintatapauksen viimeistely, sidosryhmien sitouttaminen, muutoksenhallinta" },
    ],
    outcome: "Järjestelmä toimii, vaikutus näkyy mittareissa, ja vauhtia riittää seuraavaan vaiheeseen.",
    organization: "Liiketoiminnan käyttäjät työskentelevät tekoälyn tuottaman datan kanssa päivittäin. Tiimisi ymmärtää mitä tekoälyratkaisun rakentaminen ja ylläpito vaatii. Skeptikot alkavat kiinnittää huomiota.",
  },
  {
    label: "Laajenna koko liiketoimintaan",
    timeframe: "Kuukaudet 3–12",
    heading: "Tekoäly leviää yhdestä voitosta useille liiketoiminta-alueille",
    description: "Kun ensimmäinen voitto on todistettu, laajennat. Useita projekteja kulkee rinnakkain. Uudet käyttötapaukset, uudet tiimit, uudet data-alueet. Jokainen projekti rakentaa kohti koko organisaation laajuista kyvykkyyttä, ei yksittäisten kokeilujen kokoelmaa.",
    modes: [
      { tag: "Toteutus", color: C.turquoise, text: "Useita tekoälyprojekteja rinnakkain eri liiketoiminta-alueilla" },
      { tag: "Resurssit", color: C.beige, text: "Datainsinöörit ja koneoppimisasiantuntijat nopeuttavat toimituskapasiteettia" },
      { tag: "Neuvonanto", color: C.lemon, text: "Yritystason tekoälyvisio, tiedonhallinta, organisaation valmius" },
    ],
    outcome: "Tekoäly toimii useilla alueilla, sisäinen tiimisi vahvistuu, ja ROI kertyy.",
    organization: "Tiedonhallinta on paikoillaan. Roolit kehittyvät. Osa ihmisistä johtaa nyt tekoälyprosesseja sen sijaan, että tekisivät työtä käsin. Käytössä on toistettava tapa arvioida, rakentaa ja julkaista tekoälyratkaisuja. Sisäinen kyvykkyys kasvaa.",
  },
  {
    label: "Tekoälystä tulee toimintamalli",
    timeframe: "Vuosi 1+",
    heading: "Tekoäly ei ole enää projekti. Se on tapa jolla organisaatiosi toimii",
    description: "Tekoäly ajaa ydinprosesseja, tukee jokaista isoa päätöstä ja mahdollistaa liiketoimintamalleja, joita kilpailijasi eivät pysty kopioimaan. Tiimisi omistaa sen.",
    modes: [
      { tag: "Resurssit", color: C.beige, text: "Interim-tekoälyjohto muokkaa organisaatiotasi ja kulttuuriasi" },
      { tag: "Toteutus", color: C.turquoise, text: "Tekoäly-natiivit prosessit toimivat itsenäisesti, isossa mittakaavassa" },
      { tag: "Neuvonanto", color: C.lemon, text: "Jatkuva strategian evoluutio uusien mahdollisuuksien myötä" },
    ],
    outcome: "Toimitte tekoäly-natiivina organisaationa. Kyvykkyyksillä joita ei voisi olla ilman ydinosaamisena olevaa tekoälyä.",
    organization: "Tekoäly on kaikkien työkalu, ei pelkkä datatiimin projekti. Päätösoikeudet ovat selvät. Uusilta työntekijöiltä odotetaan tekoälyn käyttöä alusta saakka. Toimintamallisi on muuttunut perustavalla tavalla. Ja kilpailijasi ajavat edelleen pilotteja.",
  },
];

function JourneySection() {
  const [active, setActive] = useState(0);
  const phase = JOURNEY_PHASES[active];

  return (
    <section style={{ background: C.white }}>
      <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
        <Reveal>
          <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
            Matkasi tekoäly-natiiviksi
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
            Jokaisen organisaation polku on erilainen, mutta kuvio on sama. Aloita fokusoidusti, todista arvo, laajenna harkitusti.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ position: "relative", marginBottom: 40 }}>
            <div style={{
              position: "absolute", top: 20, left: "6%", right: "6%", height: 3,
              background: C.border, borderRadius: 2, zIndex: 0,
            }} />
            <div style={{
              position: "absolute", top: 20, left: "6%", height: 3,
              width: `${(active / (JOURNEY_PHASES.length - 1)) * 88}%`,
              background: `linear-gradient(to right, ${C.lemon}, ${C.seawave})`,
              borderRadius: 2, zIndex: 1, transition: "width 0.5s ease",
            }} />

            <div className="dd-journey-phases" style={{
              display: "grid", gridTemplateColumns: `repeat(${JOURNEY_PHASES.length}, 1fr)`,
              position: "relative", zIndex: 2,
            }}>
              {JOURNEY_PHASES.map((p, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      display: "flex", flexDirection: "column", alignItems: "center",
                      padding: "0 8px", fontFamily: "inherit",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div style={{
                      width: isActive ? 42 : 36, height: isActive ? 42 : 36,
                      borderRadius: "50%",
                      background: isActive ? C.seawave : isPast ? C.lemon : C.white,
                      border: `3px solid ${isActive ? C.seawave : isPast ? C.lemon : C.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, fontWeight: 700,
                      color: isActive ? C.white : isPast ? C.black : C.textMuted,
                      marginBottom: 12, transition: "all 0.3s ease",
                      boxShadow: isActive ? "0 4px 16px rgba(83,127,123,0.25)" : "0 2px 6px rgba(0,0,0,0.04)",
                    }}>{i + 1}</div>

                    <span style={{
                      fontSize: 13, fontWeight: isActive ? 600 : 400,
                      color: isActive ? C.black : C.textMuted,
                      textAlign: "center", lineHeight: 1.3,
                      transition: "all 0.3s ease",
                    }}>{p.label}</span>

                    <span style={{
                      fontSize: 11, color: isActive ? C.seawave : `${C.black}44`,
                      marginTop: 4, fontWeight: 500, transition: "all 0.3s ease",
                    }}>{p.timeframe}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            key={active}
            style={{
              background: C.gray, borderRadius: 24, padding: "40px 36px",
              border: `1px solid ${C.border}`,
              animation: "ddFadeUp 0.35s ease",
            }}
          >
            <h3 style={{
              fontSize: 26, fontWeight: 400, marginBottom: 14,
              letterSpacing: "-0.01em", lineHeight: 1.3,
            }}>{phase.heading}</h3>
            <p style={{
              fontSize: 15, lineHeight: 1.65, color: C.textMuted,
              maxWidth: 720, marginBottom: 28,
            }}>{phase.description}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {phase.modes.map((mode, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  padding: "16px 20px", background: C.white, borderRadius: 14,
                  border: `1px solid ${C.border}`,
                }}>
                  <span style={{
                    padding: "4px 12px", borderRadius: PILL_BORDER_RADIUS, background: mode.color,
                    fontSize: 11, fontWeight: 600, textTransform: "uppercase",
                    letterSpacing: "0.06em", whiteSpace: "nowrap", flexShrink: 0,
                  }}>{mode.tag}</span>
                  <span style={{ fontSize: 14, lineHeight: 1.55, color: C.textMuted }}>{mode.text}</span>
                </div>
              ))}
            </div>

            <div style={{
              padding: "18px 22px", background: C.beige, borderRadius: 12,
              borderLeft: `3px solid ${C.seawave}`,
            }}>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: C.black, fontWeight: 500 }}>
                {phase.outcome}
              </p>
            </div>

            {phase.organization && (
              <div style={{ marginTop: 16 }}>
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}55`, display: "block", marginBottom: 6 }}>Organisaatiossanne</span>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted }}>
                  {phase.organization}
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ServicesPageFi() {
  return (
    <>
      <HeroSection
        badge="Tekoälyn neuvonanto- ja toteutuskumppani"
        titleSize={64}
        subtitleDark
        blobs={2}
        image="/images/illustrations/DD-Illustration-2.png"
        title="Polkusi ensimmäisestä voitosta tekoälyvetoiseen liiketoimintaan"
        subtitle="Aloita yhdestä konkreettisesta ongelmasta. Tuloksia viikoissa, ei kvartaaleissa. Yksittäinen voitto laajenee koko liiketoiminnan toimintatavaksi. Strategia ja toteutus kulkevat yhdessä, eivät erillään."
        primaryButton={{ label: "Varaa ilmainen keskustelu", href: CALENDLY_URL }}
        secondaryButton={{ label: "Tutustu asiakastarinoihin", href: "/fi/customer-stories" }}
      />

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Askeleesi tekoäly-natiiviksi</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 680, marginBottom: 56 }}>
              Useimmat näkevät tekoälyn vain työn automatisointina. Se on vasta ensimmäinen askel. Muutos alkaa, kun tekoäly tekee päätöksiä, pyörittää prosesseja ja avaa liiketoimintamalleja, joita ilman sitä ei olisi.
            </p>
          </Reveal>

          <div className="dd-path-timeline" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, position: "relative" }}>
              <div className="dd-path-line" style={{
                position: "absolute", top: 24, left: "calc(12.5% + 12px)", right: "calc(12.5% + 12px)", height: 3,
                background: `linear-gradient(to right, ${C.lemon}, ${C.seawave})`,
                borderRadius: 2, zIndex: 0,
              }} />

              {[
                {
                  level: "1",
                  title: "Automatisointi",
                  tagline: "Tekoäly tekee sen, minkä ihminen tekisi, mutta nopeammin",
                  desc: "Dokumenttien käsittely, raporttien luonti ja datansyöttö hoituu automaattisesti. Tärkeää, mutta tämä on digitalisaatiota tekoälykerroksen kanssa.",
                  people: "Pieni tiimi pyörittää tekoälyprojekteja. Muu organisaatio katsoo sivusta.",
                  outcome: "Tiimisi lakkaa tekemästä työtä, jonka koneen pitäisi tehdä.",
                },
                {
                  level: "2",
                  title: "Datavetoiset päätökset",
                  tagline: "Tekoäly suosittelee. Ihminen päättää",
                  desc: "Mihin sijoittaa, miten hinnoitella, mitkä asiakkaat priorisoida. Ihmiset tekevät yhä päätökset. Tekoäly näyttää sen, mitä ei muuten huomattaisi.",
                  people: "Liiketoimintatiimit alkavat luottaa tekoälyn tuotoksiin ja käyttää niitä päivittäisissä päätöksissä. Dataosaaminen kasvaa.",
                  outcome: "Parempia päätöksiä, koska näet sen mikä ennen jäi näkymättömiin.",
                },
                {
                  level: "3",
                  title: "Autonomiset operaatiot",
                  tagline: "Tekoäly ajaa prosessia. Ihmiset hoitavat poikkeukset",
                  desc: "Tekoäly hoitaa kokonaisuuden oletuksena. Tiimisi astuu kuvaan vain, kun harkintaa tarvitaan. Tästä alkaa todellinen tekoäly-natiivi toiminta.",
                  people: "Roolit siirtyvät työn tekemisestä tekoälyn ohjaamiseen. Syntyy uusia kyvykkyyksiä: valvonta, poikkeustenhallinta, jatkuva parantaminen.",
                  outcome: "Prosessit toimivat ilman väliintuloa. Tiimisi keskittyy työhön, joka oikeasti vaatii ihmistä.",
                },
                {
                  level: "4",
                  title: "Uudet liiketoimintamallit",
                  tagline: "Tekoäly mahdollistaa sen, mitä ei voisi olla ilman sitä",
                  desc: "Uusia palvelumalleja, tulovirtoja ja liiketoimintalogiikkaa. Sellaisia, jotka eivät ilman tekoälyä ja dataa olisi mahdollisia.",
                  people: "Tekoälyajattelu on osa sitä, miten koko organisaatio innovoi, päättää ja toimii. Se ei ole enää funktio. Se on kyvykkyys, jota kaikki käyttävät.",
                  outcome: "Teet jotain, mitä kilpailijasi eivät pysty tekemään.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.15} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1, flex: 1 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: i === 0 ? C.lemon : i === 3 ? C.seawave : C.white,
                    border: `3px solid ${i <= 1 ? C.lemon : C.seawave}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, fontWeight: 700, color: i === 3 ? C.white : C.black,
                    flexShrink: 0, marginBottom: 20,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}>{item.level}</div>

                  <div style={{
                    background: C.gray, borderRadius: 14, padding: "22px 20px",
                    width: "100%", flex: 1,
                    display: "flex", flexDirection: "column",
                    borderTop: `3px solid ${i <= 1 ? C.lemon : C.seawave}`,
                  }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, lineHeight: 1.3 }}>{item.title}</h3>
                    <p style={{ fontSize: 12, fontStyle: "italic", color: C.seawave, marginBottom: 12, minHeight: 34 }}>{item.tagline}</p>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: C.textMuted, marginBottom: 14, minHeight: 108 }}>{item.desc}</p>
                    <div style={{ marginBottom: 14, padding: "10px 12px", background: C.beige, borderRadius: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}55`, display: "block", marginBottom: 4 }}>Organisaatiossa</span>
                      <p style={{ fontSize: 12.5, lineHeight: 1.5, color: C.textMuted }}>{item.people}</p>
                    </div>
                    <p style={{ fontSize: 12.5, lineHeight: 1.5, color: C.seawave, fontWeight: 500 }}>{item.outcome}</p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>

          <Reveal delay={0.25}>
            <div style={{ textAlign: "center", marginTop: 32, padding: "20px 28px", background: C.beige, borderRadius: 14 }}>
              <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6 }}>
                Useimmat ovat tasolla 1 tai 2. Siitä kannattaa aloittaa. Etene harkitusti, todista arvo joka vaiheessa, vasta sitten seuraavalle tasolle.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Kolme tapaa päästä perille</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Tarvitsetko selkeyttä alkuun, toimivan ratkaisun tuotantoon vai kokeneen osaajan tiimiisi?
            </p>
          </Reveal>

          <div className="dd-delivery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            <Reveal delay={0.05}>
              <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "40px 32px", border: `1px solid ${C.border}`, height: "100%" }}>
                <div style={{ display: "inline-flex", padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS, background: C.lemon, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>Neuvonanto</div>
                <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 14, letterSpacing: "-0.01em" }}>Tiedät tarkalleen, mitä tehdä ja miksi</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  Lähdet mukaan priorisoidulla tekoäly-tiekartalla, sijoituskelpoisilla liiketoimintatapauksilla ja varmuudella siitä mitä tehdä seuraavaksi. Viikoissa, ei kvartaaleissa.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {["Tekoälystrategia & käyttötapausten priorisointi", "Liiketoimintatapausten kehitys selkeällä ROI:lla", "Tiedonhallinta & omistajuusmallit", "Teknologia-arvio & arkkitehtuuri", "Johdon työpajat & koulutus"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 7, height: 7, borderRadius: 2, background: C.black, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "18px 20px", background: C.beige, borderRadius: 12 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}66`, marginBottom: 12 }}>Todistetut muodot</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <p style={{ fontSize: 13, lineHeight: 1.55, color: C.textMuted }}>
                      <strong style={{ color: C.black }}>Data & AI Strategy Sprint</strong>. Nollasta hallitusvalmiiseen tekoäly-tiekarttaan 6–8 viikossa. 30+ toimitettua.
                    </p>
                    <p style={{ fontSize: 13, lineHeight: 1.55, color: C.textMuted }}>
                      <strong style={{ color: C.black }}>Tekoälykiihdyttämö</strong>. Johtoryhmäsi uteliaisuudesta valmiuteen 1–2 päivässä. 100+ yritystä koulutettu. <a href="/fi/solutions/ai-accelerator" className="dd-link-hover" style={{ color: C.seawave, fontWeight: 500, textDecoration: "none" }}>Lue lisää →</a>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "40px 32px", border: `1px solid ${C.border}`, height: "100%" }}>
                <div style={{ display: "inline-flex", padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS, background: C.turquoise, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>Toteutus</div>
                <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 14, letterSpacing: "-0.01em" }}>Tekoälyratkaisusi on tuotannossa ja tuottaa tuloksia</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  Etene konseptista mitattavaan vaikutukseen. Toimiva ratkaisu, jota tiimisi oikeasti käyttää. Dataputket ja seuranta pitävät sen käynnissä.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {["Räätälöity ML- & GenAI-mallikehitys", "Datainsinöörityö & putkien suunnittelu", "Tuotantokäyttöönotto & MLOps", "Ratkaisun integrointi & muutoksenhallinta", "Jatkuva tuki & mallien valvonta"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 7, height: 7, borderRadius: 2, background: C.black, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: C.seawave, fontWeight: 500 }}>
                  Tyypillinen aikataulu: ensimmäinen ratkaisu tuotannossa 1–3 kuukaudessa.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "40px 32px", border: `1px solid ${C.border}`, height: "100%" }}>
                <div style={{ display: "inline-flex", padding: "6px 16px", borderRadius: PILL_BORDER_RADIUS, background: C.beige, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>Resurssit</div>
                <h3 style={{ fontSize: 22, fontWeight: 400, marginBottom: 14, letterSpacing: "-0.01em" }}>Saat seniorin tekoälyosaajan tiimiisi jo huomenna</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  Kokenut osaaja istuu organisaationne sisällä. Vetää projekteja, rakentaa kyvykkyyttä ja siirtää osaamista alusta saakka. Kun projekti päättyy, tiimisi on vahvempi kuin alussa.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Interim CDO, AI-johtaja tai datajohtaja", "Senior-asiantuntijat tiimisi sisällä", "Data- & ML-insinöörit projekteihin", "Osaamisen siirto & kyvykkyyden rakennus", "Joustavat sopimusmallit"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 7, height: 7, borderRadius: 2, background: C.black, flexShrink: 0, marginTop: 6 }} />
                      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/fi/company/about" className="dd-link-hover" style={{ display: "inline-block", marginTop: 20, fontSize: 14, color: C.seawave, fontWeight: 500, textDecoration: "none" }}>Tutustu tiimiimme →</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 32, padding: "20px 28px", background: "rgba(255,255,255,0.7)", borderRadius: 14 }}>
              <p style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6 }}>
                Useimmat projektit alkavat fokusoidulla neuvonantovaiheella ja siirtyvät sitten toteutukseen. Voit ottaa meidät mukaan matkan keskeltä, jos jo tiedät mitä rakennetaan, tai upottaa ihmisemme nopeuttamaan sitä, minkä olet jo aloittanut.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <JourneySection />

      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Näin se alkaa</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 600, marginBottom: 52 }}>
              Aloitat suoralla keskustelulla, et monimutkaisella hankintaprosessilla tai 40-sivuisella tarjouspyynnöllä.
            </p>
          </Reveal>

          <div className="dd-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { step: "1", title: "Kuvailet haasteen", desc: "30 minuutin puhelu, jossa kerrot mitä yrität ratkaista. Tiedät, onko sen tavoittelu vaivan arvoista, ja miltä nopein polku näyttää." },
              { step: "2", title: "Lähdet mukaan suunnitelmalla", desc: "Fokusoitu määrittelytyöpaja, yleensä 1–2 päivää. Lähdet pois määritellyllä ongelmalla, selkeällä käsityksellä datastanne ja lähestymistavalla, johon uskot." },
              { step: "3", title: "Päätät, me toimimme", desc: "Näet tarkan laajuuden, aikataulun, tiimin ja sijoituksen. Ei yllätyksiä. Annat vihreän valon, ja tulokset alkavat nopeasti." },
              { step: "4", title: "Näytät johdolle tuloksia", desc: "Käsissäsi on jotain toimivaa, jotain mitattavaa ja jotain esitettävää. Ei raporttia, joka jää hyllyyn." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.15} direction="scale">
                <div style={{ background: C.white, borderRadius: 16, padding: "28px 24px", height: "100%" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: C.lemon, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{item.step}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.white, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", right: "5%", width: 280, height: 280, borderRadius: "50%", background: C.turquoise, opacity: 0.07, filter: "blur(70px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>Miten me toimimme</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52 }}>
              Näin asiakkaamme kuvaavat yhteistyötä.
            </p>
          </Reveal>

          <div className="dd-why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "Tutustut tekijöihin jo aloituspalaverissa", body: "Aloituspalaverin ihmiset ovat samat, jotka toimittavat. Jokaisessa projektissa on mukana kokenut tiimi alusta saakka. Käytännön asiantuntijoita, joilla on keskimäärin yli 20 vuoden kokemus tekoälyn rakentamisesta ja viemisestä tuotantoon.", accent: C.lemon },
              { title: "Strategia ja toteutus saman tiimin käsissä", body: "Johdon hyväksymä tiekartta on sama, joka toteutetaan. Strategian luoja ja toteuttaja kulkevat yhdessä. Mikään ei katoa konsulttitalojen väliin.", accent: C.turquoise },
              { title: "Etenet nopeammin kuin perinteisesti", body: "Omat tekoälytyökalumme nopeuttavat jokaista vaihetta analyysistä prototyyppiin ja tuotantoon. Hyödyt valmiista teknologiasta ilman lisenssimaksuja.", accent: C.lemon },
              { title: "Investointi suuntautuu sinne, missä arvo syntyy", body: "Vaikutus mitataan ennen kuin mitään rakennetaan. Investoit sinne, missä se tuottaa eniten. Aloita liiketoimintaprosessista, kartoita arvo, sitten rakenna. Ei toisinpäin.", accent: C.turquoise },
              { title: "Investointi menee tekemiseen, ei rakenteisiin", body: "Pieni tiimi, nopeat päätökset, suora yhteys tekijöihin. Investointisi menee kokeneen tiimin osaamiseen ja toimitukseen, ei yleiskuluihin.", accent: C.lemon },
              { title: "Tiimisi oppii pyörittämään ratkaisua ilman meitä", body: "Jokainen projekti rakennetaan yhteistyön ja osaamisen siirron ympärille. Kun projekti päättyy, omistat sekä ratkaisun että osaamisen, etkä jää meistä riippuvaiseksi.", accent: C.turquoise },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05} direction={i < 3 ? "left" : "right"}>
                <div style={{
                  background: C.gray, borderRadius: 16, padding: "28px 24px",
                  borderTop: `3px solid ${item.accent}`, height: "100%",
                }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dd-grain-subtle" style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 48, letterSpacing: "-0.02em" }}>Mitä asiakkaamme sanovat</h2>
          </Reveal>

          <TestimonialSpotlight
            quote="Lojaalit asiakkaamme saavat nyt tarjouksia joista he välittävät. Tämä tarkoittaa enemmän käyntejä, enemmän myyntiä ja 256 % enemmän kuponkien käyttöä. Muutimme asiakasymmärryksen toiminnaksi. Ja todellisiksi liiketoimintatuloksiksi."
            highlight="256 % enemmän kuponkien käyttöä."
            name="Tuomas Vihavainen"
            title="Head of Group Analytics"
            company="Tokmanni"
            logo="/images/logos/Tokmanni_BW.png"
          />

          <div className="dd-testimonials-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
            <Reveal delay={0.1}>
              <TestimonialCard
                quote="Projekti oli kattava ja ammattimaisesti suunniteltu, ja se vauhditti merkittävästi tekoälykehitystämme. Työpajojen ja työkalujen selkeys oli vaikuttavaa."
                name="Kati Kinnunen"
                title="Chief Digital Officer"
                company="Helen"
                logo="/images/logos/Helen_BW.png"
              />
            </Reveal>
            <Reveal delay={0.17}>
              <TestimonialCard
                quote="Monet konsultit puhuvat meille 'digikieltä'. Data Design ymmärsi miten viestiä liiketoiminta-ihmistemme kanssa."
                title="Asiakkaan johtaja"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        heading="Et tiedä mistä aloittaa?"
        subtitle="30 minuutissa tiedät vaikuttavimman tekoälymahdollisuutesi ja sen, mitä toteuttaminen vaatii. Ei myyntipuhetta, ei painetta."
        secondaryLabel="Tutustu ratkaisuihin"
        secondaryHref="/fi/solutions"
        image="/images/illustrations/DD-Illustration-2.png"
        imageSize={80}
      />
    </>
  );
}
