"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CheckmarkIcon } from "@/components/CheckmarkIcon";
import { CTASection } from "@/components/CTASection";

const ImagePlaceholder = ({ label, ratio = "16 / 9", minHeight }) => (
  <div style={{
    width: "100%",
    aspectRatio: minHeight ? undefined : ratio,
    minHeight,
    borderRadius: 16,
    border: `1px dashed ${C.border}`,
    background: `repeating-linear-gradient(135deg, ${C.gray}, ${C.gray} 10px, ${C.white} 10px, ${C.white} 20px)`,
    display: "flex", alignItems: "center", justifyContent: "center",
    color: C.textMuted, fontSize: 12, fontWeight: 600,
    textTransform: "uppercase", letterSpacing: "0.08em",
    textAlign: "center", padding: 16,
  }}>
    {label}
  </div>
);

const SectionTitle = ({ eyebrow, title, subtitle, maxWidth = 640 }) => (
  <Reveal>
    {eyebrow && (
      <div style={{
        display: "inline-block", padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS,
        background: "rgba(0,0,0,0.06)", fontSize: 11, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.06em",
        color: C.seawave, marginBottom: 16,
      }}>{eyebrow}</div>
    )}
    <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>{title}</h2>
    {subtitle && (
      <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth, marginBottom: 52 }}>{subtitle}</p>
    )}
  </Reveal>
);

export default function InRecipePageFi() {
  return (
    <>
      <HeroSection
        gradient="lemon"
        breadcrumb={[{ label: "Ratkaisut", href: "/fi/solutions" }, { label: "Teollinen dataenrichment" }]}
        badge="InRecipe · Teollinen dataenrichment"
        frameworkBadge="Rakennettu DD AI Labsissa. Tuotantokäytössä Sarlinilla"
        title="Laitedatan siivous kuukausista tunteihin"
        subtitle="Vajavaiset laiterekisterit vuotavat hiljaa katetta. Väärin hinnoiteltuja tarjouksia, vääriä varaosia, reaktiivista kunnossapitoa. InRecipe rikastaa laiterekisterisi automaattisesti, jotta tiimisi rakentaa tarjouksia, suunnittelee kunnossapitoa ja raportoi datalla johon voi oikeasti luottaa."
        primaryButton={{ label: "Varaa ilmainen keskustelu", href: CALENDLY_URL }}
        secondaryButton={{ label: "Takaisin kaikkiin ratkaisuihin", href: "/fi/solutions" }}
      />

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Ongelma"
            title="Pirstoutuneen teollisen datan hiljainen hinta"
            subtitle="Sata puuttuvaa tietoa ei näy yhdessäkään raportissa. Se näkyy tarjouksessa, joka lähtee väärin, insinöörissä, joka kaivaa tietoa tuntikausia, ja katteessa, joka katoaa hiljaa."
          />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { title: "Vajavainen data", body: "Valmistaja, teho, paine, mitat. Tekniset kentät puuttuvat tai ovat epäjohdonmukaisia rekisterissäsi." },
              { title: "Manuaalinen haku", body: "Tiimit käyttävät tunteja kaivaen tietoja teknisistä asiakirjoista, toimittajaportaaleista ja vanhoista PDF:istä laitetietojen palauttamiseksi." },
              { title: "Vajavaiset osaluettelot", body: "Huoltotarjoukset ja varaosasuunnitelmat rakentuvat arvailulle. Koska pohjadata ei tue muuta." },
              { title: "Menetetty kate", body: "Väärin hinnoiteltuja tarjouksia, vääriä osia tilattuna, viivästynyttä kunnossapitoa. Jokainen pirstoutunut tieto syö katetta." },
            ].map((item, i, arr) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{
                  background: C.gray, borderRadius: 16, padding: "28px 22px",
                  borderTop: `3px solid ${i === arr.length - 1 ? C.seawave : C.lemon}`,
                  height: "100%",
                  position: "relative",
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: C.seawave,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    marginBottom: 12,
                  }}>{`Vaihe ${i + 1}`}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Mitä saat"
            title="Vajavaisista rekistereistä strukturoituun asset-dataan"
            subtitle="InRecipe muuntaa raa'at laiteluettelot rikkaiksi, yhtenäisiksi tietueiksi. Tuloksena älykkäämpi kunnossapito, parempi hankinta ja dataan perustuvat päätökset."
          />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "Puhdas master data tuhansien tietueiden tasolla", body: "10 000 laitetietuetta yhtenäistetty tunneissa. Työ, joka aiemmin vei oman ihmisen kuukausia." },
              { title: "Tarkat huoltotarjoukset", body: "Huoltopäällikkö lataa laiteluettelon ja saa täydelliset tekniset tiedot minuuteissa. Leikkaa tarjouksen valmisteluajan noin 80 %." },
              { title: "Varaosien kartoitus", body: "Huoltopäällikkö valitsee laitetyypin ja näkee heti kunnossapidon tarvitsemat varaosat. Poistaa tuntien manuaalisen luettelohaun per tarjous.", badge: "Tulossa" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "32px 28px", border: `1px solid ${C.border}`,
                  height: "100%", position: "relative",
                }}>
                  {item.badge && (
                    <span style={{
                      position: "absolute", top: 20, right: 20,
                      padding: "4px 10px", borderRadius: PILL_BORDER_RADIUS,
                      background: C.turquoise, fontSize: 10, fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.08em", color: C.black,
                    }}>{item.badge}</span>
                  )}
                  <ImagePlaceholder label={`Kuvitus · ${item.title}`} minHeight={140} />
                  <h3 style={{ fontSize: 20, fontWeight: 500, marginTop: 20, marginBottom: 10, letterSpacing: "-0.01em" }}>{item.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Miten toimii"
            title="Raa'asta laitenimestä 20+ strukturoituun kenttään"
            subtitle="Tekoäly tunnistaa valmistajan, mallin, laitetyypin, segmentin, mitat ja yli 20 kenttää. Pelkästään laitenimestä. Jokainen sääntö on AI-generoitu ja mukautettu rekisteriisi."
          />
          <div style={{
            display: "grid", gridTemplateColumns: "minmax(0, 1fr) 40px minmax(0, 2.4fr) 40px minmax(0, 1fr)",
            gap: 0, alignItems: "stretch",
          }} className="dd-pipeline-grid">
            <Reveal>
              <div style={{
                background: C.beige, borderRadius: CARD_BORDER_RADIUS,
                padding: "24px 20px", border: `1px solid ${C.border}`,
                display: "flex", flexDirection: "column", justifyContent: "center",
                height: "100%",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Raaka syöte</div>
                <code style={{
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                  fontSize: 14, lineHeight: 1.5, color: C.black,
                  background: C.white, padding: "12px 14px", borderRadius: 10,
                  border: `1px solid ${C.border}`, display: "block",
                  wordBreak: "break-word",
                }}>Compair L15-10A K1 ruuvikompressori</code>
              </div>
            </Reveal>
            <div className="dd-pipeline-arrow" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: C.seawave, fontSize: 24 }}>→</div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { label: "Tunnista", desc: "Poimi tunnetut kuviot laitenimistä ja koodeista." },
                { label: "Hae", desc: "Etsi tekniset tiedot valmistajien tietokannoista ja datalehdistä." },
                { label: "Rikasta", desc: "Täytä puuttuvat kentät, yhtenäistä kategoriat ja yksiköt." },
              ].map((step, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <div style={{
                    background: C.seawave, borderRadius: CARD_BORDER_RADIUS,
                    padding: "22px 18px", color: C.white, height: "100%",
                    display: "flex", flexDirection: "column", gap: 8,
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8, background: C.lemon,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: C.black, fontWeight: 700, fontSize: 14, marginBottom: 4,
                    }}>{i + 1}</div>
                    <h4 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{step.label}</h4>
                    <p style={{ fontSize: 13, lineHeight: 1.55, margin: 0, opacity: 0.88 }}>{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="dd-pipeline-arrow" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: C.seawave, fontSize: 24 }}>→</div>

            <Reveal delay={0.3}>
              <div style={{
                background: C.gray, borderRadius: CARD_BORDER_RADIUS,
                padding: "22px 20px", border: `1px solid ${C.border}`,
                height: "100%", fontSize: 13, lineHeight: 1.7,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Strukturoitu tulos</div>
                {[
                  ["Valmistaja", "Ingersoll Rand"],
                  ["Teho", "15 kW"],
                  ["Paine", "10 bar"],
                  ["Jännite", "400 V"],
                  ["Kapasiteetti", "2.4 m³/min"],
                  ["Paino", "345 kg"],
                  ["Huoltoväli", "12 kk"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8, borderBottom: `1px dashed ${C.border}`, padding: "4px 0" }}>
                    <span style={{ color: C.textMuted }}>{k}</span>
                    <span style={{ fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
                <div style={{ color: C.textMuted, fontSize: 12, marginTop: 8, fontStyle: "italic" }}>…ja 13+ muuta kenttää</div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <p style={{ textAlign: "center", fontSize: 13, color: C.textMuted, fontStyle: "italic", marginTop: 32 }}>
              Kaikki tekoälyllä. Mukaan lukien sääntöjen generointi.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Todiste"
            title="Case Sarlin: 2 500 laitetta rikastettu alle 3 tunnissa"
          />
          <div className="dd-case-layout" style={{
            display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32,
            alignItems: "stretch",
          }}>
            <Reveal>
              <div style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS,
                padding: "36px 32px", border: `1px solid ${C.border}`, height: "100%",
              }}>
                <img src="/images/logos/Sarlin_BW.png" alt="Sarlin" style={{ height: 28, marginBottom: 20 }} />
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Haaste</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  Sarlinilla oli 2 500 laitteen rekisteri minimaalisella strukturoidulla datalla. Laitenimet olivat olemassa, mutta valmistaja, teho, tyyppiluokitus ja muut tekniset yksityiskohdat puuttuivat tai olivat epäjohdonmukaisia. Tämä vaikutti huoltosopimusten hinnoitteluun, varaosasuunnitteluun ja raportoinnin tarkkuuteen.
                </p>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Mitä otimme käyttöön</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Rikastimme jokaisen laitteen 17 uudella teknisellä kentällä",
                    "Yhtenäistimme laitetyypit, kategoriat ja valmistajat koko rekisterissä",
                    "Luottamuspisteet jotta asiantuntijat saattoivat keskittää tarkastuksen epävarmoihin tuloksiin",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <CheckmarkIcon size={16} />
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: C.textMuted }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
                <ImagePlaceholder label="Kuva · Sarlinin kenttäinsinööri" ratio="4 / 3" />
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "24px 22px", border: `1px solid ${C.border}`, flex: 1,
                }}>
                  {[
                    { k: "2 500", v: "laitetta rikastettu alle 3 tunnissa" },
                    { k: "17", v: "uutta teknistä kenttää per laite" },
                    { k: "50 %", v: "tarkkuusparannus huoltosopimusten hinnoittelun ML-mallissa" },
                    { k: "Live", v: "datan laadun mittaristot täyttöasteille ja luottamukselle" },
                  ].map((s, i) => (
                    <div key={i} style={{
                      display: "flex", gap: 14, alignItems: "baseline",
                      padding: "10px 0",
                      borderBottom: i < 3 ? `1px solid ${C.border}` : "none",
                    }}>
                      <div style={{ fontSize: 22, fontWeight: 500, color: C.seawave, minWidth: 70, letterSpacing: "-0.01em" }}>{s.k}</div>
                      <div style={{ fontSize: 13.5, lineHeight: 1.55, color: C.textMuted }}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Ennen & jälkeen"
            title="Mikä muuttuu rekisterissäsi"
          />
          <div className="dd-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <Reveal>
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.textMuted, marginBottom: 16 }}>Tänään</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Manuaaliset päivitykset etsimällä teknisistä asiakirjoista, verkkosivuilta ja tuoteluetteloista.",
                    "Laitetyypit ja kategoriat epäjohdonmukaisia rekisterissä.",
                    "Ei näkyvyyttä datan laatuun tai täydellisyyteen.",
                    "Duplikaattivalmistajia ja epäjohdonmukainen nimentä (esim. \"Gardner Denver\" vs \"Gardener D.\").",
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: C.gray, borderRadius: 12,
                      padding: "16px 18px", fontSize: 14.5, lineHeight: 1.55, color: C.textMuted,
                    }}>{item}</div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.seawave, marginBottom: 16 }}>InRecipen kanssa</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Automaattinen rikastus valmistajalle, mallille, teholle, paineelle, jännitteelle ja muille. Pelkästään laitenimestä.",
                    "Vakioitu taksonomia linjattuna toimintamalliisi.",
                    "Reaaliaikaiset datan laadun mittaristot täyttöasteiden ja luottamuspisteiden seurantaan.",
                    "Tekoälyagentit yhdistävät ja normalisoivat arvot koko rekisterissä, päättelyn kanssa lokitettuna.",
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: C.seawave, color: C.white, borderRadius: 12,
                      padding: "16px 18px", fontSize: 14.5, lineHeight: 1.55,
                      display: "flex", gap: 10, alignItems: "flex-start",
                    }}>
                      <div style={{ color: C.lemon, fontWeight: 700, marginTop: 1 }}>✓</div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Kenelle"
            title="Kuka tarvitsee strukturoitua asset-dataa?"
            subtitle="InRecipe on rakennettu organisaatioille, jotka elävät ja kuolevat laiterekisterinsä laadulla."
          />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              {
                title: "Palvelu- ja jälkimarkkinayhtiöt",
                situation: "Ylläpitävät tuhansia laitteita vajavaisilla teknisillä tiedoilla.",
                need: "Strukturoitu, rikastettu laitedata raportointiin ja sopimushinnoitteluun.",
                outcome: "Nopeammat tarjoukset, paremmat katteet, luotettava raportointi.",
              },
              {
                title: "Teollisuusjakelijat",
                situation: "Laajat tuotekatalogit useilta toimittajilta. Epäjohdonmukaista laite- ja master dataa järjestelmien välillä.",
                need: "Yhtenäistetyt, puhtaat katalogit tehokasta toimintaa varten.",
                outcome: "Puhtaat katalogit, vähemmän duplikaatteja, tehokas hankinta.",
              },
              {
                title: "Tuotantolaitokset",
                situation: "Sisäiset kunnossapito-organisaatiot vanhoine laiterekistereineen täynnä aukkoja.",
                need: "Luotettava asset-data kunnossapidon suunnitteluun.",
                outcome: "Proaktiivinen kunnossapidon suunnittelu ja varaosien optimointi.",
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "28px 24px", border: `1px solid ${C.border}`,
                  height: "100%", display: "flex", flexDirection: "column", gap: 14,
                }}>
                  <ImagePlaceholder label={`Ikoni · ${p.title}`} minHeight={72} />
                  <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em", margin: 0 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>{p.situation}</p>
                  <div style={{ fontSize: 13.5, lineHeight: 1.55, color: C.textMuted }}>
                    <strong style={{ color: C.black }}>Tarve:</strong> {p.need}
                  </div>
                  <div style={{
                    marginTop: "auto", background: C.lemon,
                    padding: "10px 14px", borderRadius: PILL_BORDER_RADIUS,
                    fontSize: 13, fontWeight: 600, color: C.black, textAlign: "center",
                  }}>{p.outcome}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle eyebrow="Avainominaisuudet" title="Mitä alustassa on" />
          <div className="dd-features-split" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40, alignItems: "center" }}>
            <Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {[
                  { title: "Räätälöitävissä olevat rikastetut kentät", body: "Oletuskentät kattavat valmistajan, mallin, laitetyypin, laitekategorian, teollisuussegmentin, mitat, painon, huoltovälin ja muut. Täysin räätälöitävissä taksonomiaasi." },
                  { title: "Teollinen rikastusputki", body: "Poimii automaattisesti tehon (kW), paineen (bar), jännitteen, jäähdytystyypin, voitelun ja muut. Suoraan laitenimistä." },
                  { title: "Esikoulutettu teollisuusdatalla", body: "Esikoulutettu teollisuuskompressoreilla, ilmankäsittelyllä, kuivaajilla ja muilla. Helposti laajennettavissa muihin laitedomaineihin." },
                ].map((f, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${i % 2 === 0 ? C.lemon : C.turquoise}`, paddingLeft: 18 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, margin: 0 }}>{f.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ImagePlaceholder label="Kuvakaappaus · AI-ehdotusten tarkastelu-UI" ratio="16 / 11" />
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: C.beige }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Luottamus"
            title="Ihminen mukana, ei mustaa laatikkoa"
            subtitle="Tekoäly ehdottaa, ihminen hyväksyy. Tuotantojärjestelmiisi ei tehdä automaattisia, jäljittämättömiä muutoksia."
          />
          <div className="dd-trust-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32, alignItems: "start" }}>
            <Reveal>
              <ImagePlaceholder label="Kuvakaappaus · Kenttäkohtainen tarkastelu päättelyllä" ratio="4 / 3" />
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { title: "Luottamuspisteytys", body: "Jokainen rikastettu kenttä saa luottamuspisteen. Asiantuntijasi tarkastavat vain sen mikä on tärkeää." },
                  { title: "Datan alkuperä", body: "Läpinäkyvä päättely suoraan datalähteestä. Esim. linkitetyt valmistajien tuoteluettelot." },
                  { title: "Täysi jäljitettävyys", body: "Täydellinen käsittelyhistoria ja LLM:n päättely lokitettu läpinäkyvyyden vuoksi." },
                ].map((t, i) => (
                  <div key={i} style={{
                    background: C.white, borderRadius: CARD_BORDER_RADIUS,
                    padding: "22px 24px", border: `1px solid ${C.border}`,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{t.title}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>{t.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Sisäänrakennetut AI-agentit"
            title="Älykäs konsolidointi rekisterin yli"
            subtitle="Rivikohtaisen rikastuksen lisäksi. Agentit löytävät ja korjaavat duplikaatit, epäjohdonmukaisuudet ja perinteisen nimennän tuhansien tietueiden yli."
          />
          <div className="dd-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <Reveal>
              <div style={{
                background: C.gray, borderRadius: CARD_BORDER_RADIUS,
                padding: "28px 28px", border: `1px solid ${C.border}`, height: "100%",
              }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Massaoperaatiot</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>
                  Konsolidoi manuaalisesti tai automaattisesti duplikaattikentät ja normalisoi arvot tuhansien tietueiden yli välittömästi.
                </p>
                <ImagePlaceholder label="Kuvakaappaus · Arvojen massanormalisointi" ratio="16 / 9" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{
                background: C.gray, borderRadius: CARD_BORDER_RADIUS,
                padding: "28px 28px", border: `1px solid ${C.border}`, height: "100%",
              }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Älykäs päättely</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>
                  Agentit eivät vain muuta nimiä. Ne lokittavat päättelyn (esim. toteamalla, että Zander integroitiin Parkerin suodatusyksikköön).
                </p>
                <ImagePlaceholder label="Kuvakaappaus · Valmistajien standardointiagentti" ratio="16 / 9" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Näkyvyys"
            title="Näe datasi laatu yhdellä silmäyksellä"
            subtitle="Näe kenttien täyttöasteet ja datajakaumat yhdestä näkymästä. Datan laatu on selkeä, ja poikkeavuudet kalustossasi erottuvat heti."
          />
          <div className="dd-features-split" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32, alignItems: "center" }}>
            <Reveal>
              <ImagePlaceholder label="Kuvakaappaus · Datan laadun mittaristo" ratio="16 / 10" />
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "22px 24px", border: `1px solid ${C.border}` }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>Täyttöasteet</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>Näe heti mitkä tekniset kentät puuttuvat tuhansista tietueista.</p>
                </div>
                <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "22px 24px", border: `1px solid ${C.border}` }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>Jakaumat</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>Seuraa jakaumia. Teho, paine, paino. Ja huomaa poikkeavuudet kalustossasi.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle eyebrow="Liiketoiminta-arvo" title="Miten se luo arvoa" />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { title: "Nopeampi datan siivous", body: "Muunna tuhansia tietueita tunneissa, ei kuukausissa. Niin, että tiimisi keskittyy korkean arvon työhön datan syötön sijaan." },
              { title: "Korkeampi datan laatu", body: "Yhtenäistetyt kategoriat ja luottamuspisteet tarkoittavat, että voit vihdoin luottaa raportteihisi ja tehdä päätökset oikealla datalla." },
              { title: "Parempi kunnossapito & hankinta", body: "Tarkka laitedata tarjouksiin ja varaosatilauksiin johtaa parempiin katteisiin ja vähemmän kalliisiin yllätyksiin kentällä." },
              { title: "Kustannustehokas tekoäly", body: "Kohdistetut AI-kutsut yhdistettynä ihmistarkastukseen. Maksat lisäarvosta. Et tarpeettomasta käsittelystä." },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "28px 28px", border: `1px solid ${C.border}`, height: "100%",
                }}>
                  <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, margin: 0 }}>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Käyttöönotto"
            title="Kaksi tapaa ajaa sitä"
            subtitle="Aloita kertaluonteisella siivouksella. Tai upota rikastus data-alustaasi niin, että jokainen uusi laite tulee rekisteriin puhtaana."
          />
          <div className="dd-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              {
                title: "Itsenäinen siivoustyökalu",
                body: "Lataa laiterekisterit, rikasta ja yhtenäistä, vie puhdas data ulos.",
                bestFor: "Kertaluonteiset tai jaksottaiset master data -projektit. Välitön triage.",
                bg: C.gray,
                accent: C.lemon,
              },
              {
                title: "Upotettuna asset management -prosesseihin",
                body: "Integroi rikastus suoraan olemassa olevaan data-alustaasi. Uudet rekisteriin tulevat laitteet rikastetaan, kategorisoidaan ja linkitetään automaattisesti.",
                bestFor: "Jatkuva, automatisoitu data governance ja perusta tekoälykäyttötapauksille.",
                bg: C.seawave,
                accent: C.turquoise,
                dark: true,
              },
            ].map((d, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  background: d.bg, borderRadius: CARD_BORDER_RADIUS,
                  padding: "32px 32px", border: d.dark ? "none" : `1px solid ${C.border}`,
                  color: d.dark ? C.white : C.black, height: "100%",
                  display: "flex", flexDirection: "column", gap: 16,
                }}>
                  <h3 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>{d.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: d.dark ? "rgba(255,255,255,0.85)" : C.textMuted }}>{d.body}</p>
                  <div style={{
                    marginTop: "auto",
                    background: d.accent,
                    color: C.black,
                    padding: "12px 16px", borderRadius: 12,
                    fontSize: 13.5, lineHeight: 1.5,
                  }}>
                    <strong>Sopii:</strong> {d.bestFor}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle eyebrow="Turvallisuus" title="Yritystason turvallisuus ja hallinta" />
          <div className="dd-security-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { title: "Sinun datasi, sinun hallinnassasi", body: "Käyttöönotto saatavilla omassa paikallisessa ympäristössäsi." },
              { title: "Konttipohjainen eristys", body: "Docker-pohjainen käyttöönotto varmistaa puhtaan, turvallisen ja eristetyn toiminnan." },
              { title: "Täydellinen jäljitettävyys", body: "Jokainen AI-päätös, lähdelinkki ja luottamuspiste lokitettu pysyvästi." },
              { title: "Ihminen mukana", body: "Tekoäly toimii neuvonantajana. Ei automaattisia kirjauksia tuotanto-ERP:hen ilman asiantuntijan hyväksyntää." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "24px 22px", border: `1px solid ${C.border}`, height: "100%",
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: 2, background: C.seawave, marginBottom: 14,
                  }} />
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: C.textMuted, margin: 0 }}>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Tiekartta"
            title="Rakennettu perustalle. Laajenee ylöspäin"
            subtitle="Teollinen dataenrichment on perusta. Seuraavaksi tulevat kyvykkyydet rakentuvat samalle strukturoidulle asset-rekisterille."
          />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              {
                title: "Varaosien & nimikkeiden kartoitus",
                body: "Rakenna ristikkäisviittaukset sisäisten koodien, toimittajakoodien ja valmistajan osien välillä. Tunnista automaattisesti tarvittavat varaosat jokaiselle laitteelle.",
                bg: C.gray,
              },
              {
                title: "Hintarikastus",
                body: "Jäsennä toimittajien hintaluettelot strukturoiduksi dataksi, sovita ne perusrekisterin kautta ja päivitä laitteiden hinnoittelu automaattisesti.",
                bg: C.turquoise,
              },
              {
                title: "Korvaavien osien tunnistus",
                body: "Ehdota vaihtoehtoisia osia kun hinnat nousevat, toimitusajat pitenevät tai saatavuus laskee.",
                bg: C.lemon,
              },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: r.bg, borderRadius: CARD_BORDER_RADIUS,
                  padding: "28px 24px", height: "100%",
                }}>
                  <div style={{
                    fontSize: 10, fontWeight: 700, color: C.seawave,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    marginBottom: 12,
                  }}>Tulossa</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{r.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <div style={{
              marginTop: 20,
              background: C.seawave, color: C.white,
              borderRadius: CARD_BORDER_RADIUS,
              padding: "20px 28px", textAlign: "center",
              fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em",
            }}>
              Teollinen dataenrichment. Perusta
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dd-grain-subtle" style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Pilottikumppanuus"
            title="Molemmat puolet sijoittavat, molemmat puolet voittavat"
            subtitle="Jaettu sitoumus arvon todistamiseen oikealla datallanne. Pilotin jälkeen pidät kaiken rikastetun datan. Ei lukitusta."
          />

          <div className="dd-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
            <Reveal>
              <div style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS,
                padding: "28px 28px", border: `1px solid ${C.border}`, height: "100%",
              }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 16, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.06em" }}>Sinä saat</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Laiterekisterisi rikastettuna valitsemillasi täydellisillä teknisillä spesifikaatioilla, tarkistettuna alasi asiantuntemuksen avulla.",
                    "Mitattavan parannuksen datan laadussa, joka vaikuttaa suoraan kunnossapitotarjouksiin, varaosasuunnitteluun ja raportointiin.",
                    "Edustavan laiteotoksen käsittely päästä päähän, tarkkuus mitattuna omaa referenssidataasi vasten.",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <CheckmarkIcon size={16} />
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: C.textMuted }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{
                background: C.seawave, borderRadius: CARD_BORDER_RADIUS,
                padding: "28px 28px", color: C.white, height: "100%",
              }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 16, color: C.lemon, textTransform: "uppercase", letterSpacing: "0.06em" }}>Me saamme</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Todellista teollisuusdataa rikastusmoottoriemme testaamiseen ja terävöittämiseen uusilla laitekategorioilla ja valmistajilla.",
                    "Referenssi-casen mitattavin tuloksin ja oikeuden käyttää johdettuja, ei-luottamuksellisia oivalluksia tuotteen parantamiseen.",
                    "Omistettua Data Designin tuotekehitystä. Tuo kustannus pysyy meidän puolellamme, ei sinun.",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ color: C.lemon, fontWeight: 700, marginTop: 2, fontSize: 14 }}>✓</div>
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.88)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div style={{
              background: C.white, borderRadius: CARD_BORDER_RADIUS,
              padding: "28px 32px", border: `1px solid ${C.border}`,
              display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "center",
            }} className="dd-pilot-investment">
              <div style={{ borderLeft: `4px solid ${C.seawave}`, paddingLeft: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Sinun investointisi</div>
                <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", color: C.black, lineHeight: 1.1 }}>3 000 – 8 000 €</div>
                <div style={{ fontSize: 13, color: C.textMuted, marginTop: 4 }}>rekisterin koosta riippuen</div>
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted }}>
                Kattaa konfiguraation, taksonomian linjaustyöpajan, tekoälykäsittelyn kustannukset ja tarkistustuen. Data Design sijoittaa erikseen tuotekehitykseen. Tuo kustannus on meidän. <strong style={{ color: C.black }}>Pilottimaksu hyvitetään ensimmäisten 6 kuukauden jatkuvaa alustankäyttöä vastaan.</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="dd-scope-strip" style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 16,
            }}>
              {[
                { k: "4–6 viikkoa", v: "Pilotin kesto" },
                { k: "50–500 laitetta", v: "Tyypillinen aineiston koko" },
                { k: "Todennettu rikastus + referenssi-case", v: "Tulos" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: C.white, borderRadius: 12,
                  padding: "16px 18px", border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: C.black, marginBottom: 4 }}>{s.k}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        heading="30 minuutissa tiedät sopiiko InRecipe rekisteriisi"
        subtitle="Varaa ilmainen keskustelu. Tuo halutessasi näyte laiterekisteristäsi. Näytämme miltä rikastus näyttää oikealla datallasi, ei diaesityksissä."
        image="/images/illustrations/DD-Illustration-2.png"
        secondaryLabel="Katso kaikki ratkaisut"
        secondaryHref="/fi/solutions"
      />

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.dd-pipeline-grid) { grid-template-columns: 1fr !important; gap: 16px !important; }
          :global(.dd-pipeline-arrow) { display: none !important; }
          :global(.dd-case-layout) { grid-template-columns: 1fr !important; }
          :global(.dd-compare-grid) { grid-template-columns: 1fr !important; }
          :global(.dd-features-split) { grid-template-columns: 1fr !important; }
          :global(.dd-trust-grid) { grid-template-columns: 1fr !important; }
          :global(.dd-security-grid) { grid-template-columns: 1fr 1fr !important; }
          :global(.dd-pilot-investment) { grid-template-columns: 1fr !important; gap: 20px !important; }
          :global(.dd-scope-strip) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
