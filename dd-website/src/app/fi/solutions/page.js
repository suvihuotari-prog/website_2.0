"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, PILL_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { ToolCard } from "@/components/ToolCard";
import { SolutionCard } from "@/components/SolutionCard";

/* ══════════════════════════════════════════════
   Tekoälytyökalut: lähempänä ohjelmistotuotteita
   ══════════════════════════════════════════════ */
const TOOLS = [
  {
    name: "DataDesigner.AI",
    solutionArea: "Tekoälystrategia & tiekartta",
    tagline: "Tekoälystrategiasi luonnostellaan tunneissa, ei kuukausissa",
    description: "Muuntaa liiketoimintatavoitteet priorisoiduksi tekoäly-tiekartaksi. Rakennettu samalle viitekehykselle, jonka takana on yli 30 johdon hyväksymää strategiaa.",
    status: "Käytössä asiakkailla",
    accent: C.lemon,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="4" width="28" height="28" rx="6" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
        <path d="M12 18L16 14L20 16L24 12" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 24h12" stroke={C.black} strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
        <circle cx="24" cy="12" r="2" fill={C.seawave}/>
      </svg>
    ),
  },
  {
    name: "Text2SQL",
    solutionArea: "GenAI & prosessiautomaatio",
    tagline: "Kuka tahansa tiimissäsi voi kysyä datastasi tavallisella kielellä",
    description: "Liiketoiminnan käyttäjät voivat kysyä monimutkaisista tietokannoista ilman SQL:ää. Tuotannossa KTI Kiinteistötiedolla.",
    status: "Tuotannossa KTI:llä",
    accent: C.turquoise,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="6" width="28" height="24" rx="4" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
        <path d="M10 14h8M10 18h12M10 22h6" stroke={C.black} strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <path d="M24 16l4 4-4 4" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Auto Data Catalog",
    solutionArea: "Tiedonhallinta & laatu",
    tagline: "Datavarantosi dokumentoidaan automaattisesti, ilman käsityötä",
    description: "Tuottaa liiketoimintaystävällisen dokumentaation raporteistasi ja datatuotteistasi lukemalla metatietoa työkaluista kuten Power BI.",
    status: "Käytössä sisäisesti ja asiakkailla",
    accent: C.lemon,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="4" width="24" height="28" rx="4" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
        <line x1="11" y1="11" x2="25" y2="11" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="15" x2="25" y2="15" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="19" x2="20" y2="19" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M22 22l2 2 4-4" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "InRecipe",
    solutionArea: "Teollisen datan rikastus",
    tagline: "Lyhennä laitedatan siivous kuukausista tunteihin",
    description: "Tekoälyrikastus, joka muuntaa raa'at teollisuuslaitetiedot yli 20 jäsennellyksi kentäksi. Käytössä Sarlinilla: 2 500 laitetta alle 3 tunnissa.",
    status: "Tuotannossa Sarlinilla",
    slug: "/fi/solutions/inrecipe",
    accent: C.turquoise,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="13" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
        <path d="M12 18l4 4 8-8" stroke={C.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Sales Prospector",
    solutionArea: "Asiakasymmärrys",
    tagline: "Parhaat liidisi löydetään ja priorisoidaan ennen kuin tiimisi tarttuu puhelimeen",
    description: "Tekoälyagentit käyvät läpi LinkedInin, työpaikkailmoitukset ja CRM-datan nostaakseen esiin lupaavimmat liidit, pisteytettyinä ja yhteydenottovalmiina.",
    status: "Käytössä sisäisesti",
    accent: C.lemon,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="15" cy="14" r="6" fill={C.lemon} stroke={C.black} strokeWidth="1.2"/>
        <path d="M6 30c0-5 4-8 9-8s9 3 9 8" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="26" cy="12" r="4" fill={C.turquoise} stroke={C.black} strokeWidth="1.2"/>
        <path d="M24 12h4M26 10v4" stroke={C.black} strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════
   Ratkaisut: projektipohjainen konsultointi
   ══════════════════════════════════════════════ */
/* Suunnittele polkusi: selkeys, perusta ja suunnitelma */
const SOLUTIONS_PATH = [
  {
    id: "01",
    title: "Johtoryhmämme mielipiteet tekoälystä ovat hajallaan",
    slug: "/fi/solutions/ai-accelerator",
    tag: "Tekoälykiihdyttämö",
    badge: "Paras aloitukseen",
    outcome: "Johtoryhmäsi yhtenäistyy priorisoidusta tekoälymahdollisuuksien listasta, päivissä, ei kuukausissa.",
    timeline: "1–2 päivää",
  },
  {
    id: "02",
    title: "Tiedämme että tekoäly on tärkeää. Mutta mistä aloitamme?",
    slug: "/fi/solutions/ai-strategy",
    tag: "Tekoälystrategia & tiekartta",
    badge: "Suosituin",
    outcome: "Kävele seuraavaan johtoryhmän kokoukseen rahoitetulla tekoäly-tiekartalla, priorisoiduilla käyttötapauksilla ja selkeällä ROI:lla.",
    timeline: "6–8 viikkoa",
  },
  {
    id: "03",
    title: "Todistimme että tekoäly toimii, mutta miten viemme sen koko organisaatioon?",
    slug: "/fi/solutions/ai-native-transformation",
    tag: "Tekoäly-natiivi transformaatio",
    badge: "Laajentajille",
    outcome: "Kattava suunnitelma, joka vie tekoälyn yksittäisistä voitoista yrityksesi toimintamalliksi.",
    timeline: "8–12 viikkoa",
  },
  {
    id: "04",
    title: "Kukaan ei omista dataamme ja se hidastaa kaikkea",
    slug: "/fi/solutions/data-governance",
    tag: "Tiedonhallinta & laatu",
    badge: "Kriittinen mahdollistaja",
    outcome: "Korjaa dataperusta kerran, niin jokainen tuleva tekoälyprojekti etenee nopeammin ja tuottaa tuloksia joihin voit luottaa.",
    timeline: "Noin 2 kuukautta",
  },
];

/* Aloita arvon todistaminen: askelmia, ei erillisiä projekteja */
const SOLUTIONS_VALUE = [
  {
    id: "05",
    title: "Hinnoittelumme vuotaa rahaa",
    slug: "/fi/solutions/pricing-optimization",
    tag: "Hinnoittelun & liikevaihdon optimointi",
    badge: "Liikevaihtovaikutus",
    outcome: "Jokainen hinta optimoitu maksimaaliseen katteeseen, automaattisesti, päivittäin, koko valikoimassasi.",
    timeline: "Pilotti 8–12 viikossa",
  },
  {
    id: "06",
    title: "Emme oikeasti tunne asiakkaitamme riittävän hyvin",
    slug: "/fi/solutions/customer-intelligence",
    tag: "Asiakasymmärrys",
    badge: "Myynnin tuki",
    outcome: "Myyntitiimisi astuu jokaiseen tapaamiseen täysin valmistautuneena, tuntien asiakkaan historian, avoimet asiat ja todennäköisimmän seuraavan tarpeen.",
    timeline: "Ensimmäinen malli 6–10 viikossa",
  },
  {
    id: "07",
    title: "Hukumme käsityöhön, jonka tekoälyn pitäisi hoitaa",
    slug: "/fi/solutions/genai-automation",
    tag: "GenAI & prosessiautomaatio",
    badge: "Nopeat voitot",
    outcome: "Raportit valmiina kun tiimisi saapuu, dokumentit käsitelty yön aikana, kuka tahansa kysymässä datastasi tavallisella kielellä.",
    timeline: "Prototyyppi 4–6 viikossa",
  },
  {
    id: "08",
    title: "Toimintamme on reaktiivista, ja löydämme ongelmat vasta niiden iskettyä",
    slug: "/fi/solutions/intelligent-operations",
    tag: "Ennakoiva toiminta & toimitusketju",
    badge: "Operatiivinen huippuosaaminen",
    outcome: "Havaitse laitevikoja päiviä etukäteen ja ota takaisin liikevaihtoa, jota et tiennyt menettäväsi.",
    timeline: "Ensimmäinen malli 8–12 viikossa",
  },
];

/* ══════════════════════════════════════════════
   Pääsivu
   ══════════════════════════════════════════════ */
export default function RatkaisutPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="Ratkaisut & työkalut"
        blobs={2}
        image="/images/illustrations/DD-Illustration-1.png"
        title="Tekoälyhaasteesi on ratkaistu jo aiemmin"
        subtitle="Etsi omaasi lähimpänä oleva ongelma. Näet, miten kaltaisesi yritykset ratkaisivat sen, millaisia tulokset olivat ja miltä ensimmäiset viikkosi näyttäisivät."
        primaryButton={{ label: "Katso ratkaisut", href: "#solutions" }}
        secondaryButton={{ label: "Tutustu työkaluihin", href: "#tools" }}
      />

      {/* ═══════════════════════════════════
           ALOITA ARVON TODISTAMINEN
         ═══════════════════════════════════ */}
      <section id="solutions" style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Aloita arvon todistaminen
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              Jokainen tekoäly-natiivi matka alkaa yhdestä toimivasta ratkaisusta. Valitse ongelma, joka on tärkein juuri nyt. Jokainen niistä on askelma eikä erillinen projekti.
            </p>
          </Reveal>
          <div className="dd-solutions-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16,
          }}>
            {SOLUTIONS_VALUE.map((s, i) => (
              <SolutionCard key={s.title} solution={s} index={i} ctaLabel="Katso lisää" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           SUUNNITTELE POLKUSI
         ═══════════════════════════════════ */}
      <section id="chart-path" style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Suunnittele polkusi
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              Nämä ratkaisut antavat selkeyden, perustan ja suunnitelman tulla tekoäly-natiiviksi organisaatioksi.
            </p>
          </Reveal>
          <div className="dd-solutions-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16,
          }}>
            {SOLUTIONS_PATH.map((s, i) => (
              <SolutionCard key={s.title} solution={s} index={i} ctaLabel="Katso lisää" />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           TEKOÄLYTYÖKALUT
         ═══════════════════════════════════ */}
      <section id="tools" style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "80px 40px 88px" }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Työkalut, jotka nopeuttavat
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 640, marginBottom: 52,
            }}>
              Tarkoitukseen rakennettuja tekoälytyökaluja, jotka ovat syntyneet yli 50 asiakasprojektista ja sisältyvät jokaiseen niistä. Ne ovat syy siihen, miksi projektisi etenee viikoissa, ei kvartaaleissa.
            </p>
          </Reveal>

          <div className="dd-tools-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
          }}>
            {TOOLS.map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.05}>
                <ToolCard tool={tool} ctaLabel="Lue lisää" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           MITEN NÄMÄ NIVOUTUVAT YHTEEN
         ═══════════════════════════════════ */}
      <section className="dd-grain" style={{ background: `linear-gradient(to right, ${C.lemon}, ${C.turquoise})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "72px 40px" }}>
          <Reveal>
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            }}>
              <h2 style={{ fontSize: 40, fontWeight: 400, marginBottom: 16, letterSpacing: "-0.02em" }}>
                Jokainen ratkaisu on sisäänkäynti. Työkalut nopeuttavat. Matka yhdistää ne kaikki.
              </h2>
              <p style={{
                fontSize: 16, lineHeight: 1.65, color: C.textMuted, maxWidth: 640, marginBottom: 32,
              }}>
                Aloitat ongelmasta, joka on tärkein juuri nyt. Työkalumme nopeuttavat työtä ensimmäisestä päivästä lähtien. Kun etenet yksittäisestä voitosta koko yrityksen kattavaan tekoälyyn, jokainen ratkaisu rakentuu edellisen päälle. Se on polku tekoäly-natiiviksi, ja se alkaa yhdestä keskustelusta.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                <a href="/fi/services" style={{
                  display: "inline-block", background: C.black, color: C.white,
                  padding: "14px 32px", borderRadius: PILL_BORDER_RADIUS,
                  fontWeight: 500, fontSize: 15, textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
                >Katso koko matka</a>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                  className="dd-btn-wipe"
                  style={{
                    display: "inline-block", background: C.white, color: C.black,
                    padding: "14px 32px", borderRadius: PILL_BORDER_RADIUS,
                    border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 15, textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >Varaa keskustelu</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
