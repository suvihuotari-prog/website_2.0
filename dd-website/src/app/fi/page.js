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
  { number: "€200M+", label: "Asiakkaillemme tuotettua liikevaihtovaikutusta" },
  { number: "100+", label: "Onnistunutta projektia toimitettu" },
  { number: "50+", label: "Tuotannossa olevaa tekoälyratkaisua" },
  { number: "30+", label: "Johdon hyväksymää tekoäly-tiekarttaa" },
];

const FEATURED_SOLUTIONS = [
  {
    title: "Tiedämme että tekoäly on tärkeää. Mutta mistä aloitamme?",
    tag: "Tekoälystrategia & tiekartta",
    description: "Liikaa vaihtoehtoja, ei selkeää suunnitelmaa. Seuraavassa johtoryhmän kokouksessa edessäsi on priorisoitu lista tärkeimmistä tekoälymahdollisuuksista, rahoitettuna ja toteutusvalmiina.",
    slug: "/fi/solutions/ai-strategy",
  },
  {
    title: "Hukumme manuaaliseen työhön, jonka tekoäly voisi tehdä",
    tag: "GenAI & prosessiautomaatio",
    description: "Ihmiset käyttävät tunteja töihin, jotka pitäisi tehdä minuuteissa. Raportit ovat valmiina, kun tiimisi saapuu, datakyselyt onnistuvat arkikielellä ja sadat tunnit vapautuvat oikeasti merkitsevälle työlle.",
    slug: "/fi/solutions/genai-automation",
  },
  {
    title: "Emme tunne asiakkaitamme tarpeeksi hyvin",
    tag: "Asiakasäly",
    description: "Asiakastiedot ovat hajallaan eri järjestelmissä, käyttämättöminä. Myyntitiimisi astuu joka tapaamiseen täysin valmistautuneena, kun se tuntee asiakkaan historian, avoimet asiat ja seuraavan todennäköisen tarpeen.",
    slug: "/fi/solutions/customer-intelligence",
  },
];

const PARTNERS = [
  {
    name: "Mika Aho",
    title: "Toimitusjohtaja, perustajaosakas, FT",
    credential: "30+ hallituksen hyväksymää tekoäly-tiekarttaa toimitettu",
    photo: "/images/people/MikaAho.jpg",
    linkedin: "https://linkedin.com/in/mikaaho/",
  },
  {
    name: "Pekka Autere",
    title: "Partner, Senior Advisor",
    credential: "Johti tekoälypohjaista toimitusketjun optimointia: €200M+ liikevaihtovaikutus H&M:llä",
    photo: "/images/people/PekkaAutere.png",
    linkedin: "https://linkedin.com/in/pekkaautere/",
  },
  {
    name: "Toni Haapakoski",
    title: "Perustajaosakas, Senior Advisor",
    credential: "Perusti ja kasvatti Bilot Oyj:n 200+ hengen ja 27M€ liikevaihdon yritykseksi",
    photo: "/images/people/ToniHaapakoski.jpg",
    linkedin: "https://linkedin.com/in/tonihaapakoski/",
  },
  {
    name: "Jaakko Mattila",
    title: "Partner, Senior Advisor",
    credential: "Johti datastrategian ja tiedonhallintakäytäntöä Deloittella",
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

export default function HomePageFi() {
  return (
    <>
      <HeroSection
        badge="AI Advisory & Implementation Agency"
        titleSize={64}
        subtitleDark
        blobs={2}
        image="/images/illustrations/DD-Illustration-4.png"
        title="Tee tekoälystä yrityksesi tapa toimia"
        subtitle="Aloita yhdestä liiketoimintaongelmasta. Näe tulokset viikoissa, et kvartaaleissa. Kasvata sitten yksittäisestä voitosta koko yrityksen toimintatavaksi, todistamalla arvo ennen jokaista seuraavaa askelta."
        primaryButton={{ label: "Varaa ilmainen keskustelu", href: CALENDLY_URL }}
        secondaryButton={{ label: "Katso miten toimimme", href: "/fi/services" }}
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

      {/* 2. Asiakaslogot / organisaatiot */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 40, letterSpacing: "-0.02em", textAlign: "center" }}>
              Asiakkaitamme
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

      {/* 3. Millaista kanssamme on työskennellä */}
      <section className="dd-grain" style={{ background: `linear-gradient(to right, ${C.lemon}, ${C.turquoise})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Miten me toimimme
            </h2>
          </Reveal>

          <div className="dd-why-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20,
            marginTop: 40,
          }}>
            {[
              {
                title: "Teet työtä niiden kanssa, jotka tekevät työn",
                body: "Aloituspalaverin ihmiset ovat samat, jotka toimittavat. Ei välikäsiä, ei perehdytysjaksoa. Kokeneet asiantuntijat, joilla on keskimäärin 20+ vuoden kokemus, alusta saakka.",
                accent: C.lemon,
              },
              {
                title: "Strategiastasi tulee toimiva ratkaisu",
                body: "Johdon hyväksymä tiekartta on se, joka rakennetaan. Strategia ja toteutus etenevät yhdessä. Mikään ei jää hyllyyn.",
                accent: C.turquoise,
              },
              {
                title: "Etenet viikoissa, et kvartaaleissa",
                body: "Omat tekoälytyökalumme nopeuttavat jokaista vaihetta analyysistä prototyyppiin ja tuotantoon. Saat valmiiden teknologioiden nopeuden ilman ohjelmistolisenssejä.",
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

      {/* 4. Asiakaslainaukset. Mitä ihmiset sanovat */}
      <section style={{ background: C.beige }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Mitä ihmiset sanovat
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              Asiakkaidemme omat sanat siitä, miten yhteistyö meidän kanssamme sujuu ja mitä se on saanut aikaan.
            </p>
          </Reveal>

          <TestimonialSpotlight
            quote="Lojaalit asiakkaamme saavat nyt tarjouksia, joista he välittävät. Tämä tarkoittaa enemmän käyntejä, enemmän myyntiä ja 256 % enemmän kuponkien käyttöä. Muutimme asiakasymmärryksen toiminnaksi ja todellisiksi liiketoimintatuloksiksi."
            highlight="256 % enemmän kuponkien käyttöä."
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
                quote="Projekti oli kattava ja ammattimaisesti suunniteltu, ja se vauhditti merkittävästi tekoälykehitystämme. Työpajojen ja työkalujen selkeys oli vaikuttavaa."
                name="Kati Kinnunen"
                photo="/images/people/kati_kinnunen.png"
                title="Chief Digital Officer"
                company="Helen"
                logo="/images/logos/Helen_BW.png"
              />
            </Reveal>
            <Reveal delay={0.17}>
              <TestimonialCard
                quote="Data Design auttoi meitä saamaan master datan hallintaan. Heidän selkeä lähestymistapansa teki datastamme tarkempaa ja helpommin hallittavaa."
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

      {/* 5. Kuulostaako tutulta */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Kuulostaako tutulta?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 620, marginBottom: 52 }}>
              Jokaisella näistä haasteista on selkeä polku ratkaisuun ja tulos, jonka voit viedä johdolle.
            </p>
          </Reveal>
          <div className="dd-solutions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {FEATURED_SOLUTIONS.map((s, i) => (
              <FeaturedSolutionCard key={s.slug} solution={s} index={i} />
            ))}
          </div>
          <Reveal delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="/fi/solutions" className="dd-arrow-link dd-link-hover" style={{
                color: C.seawave, fontSize: 15, fontWeight: 500, textDecoration: "none",
              }}>Kaikki ratkaisut <span className="dd-arrow">{"→"}</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Tiimi / ihmiset */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Työn takana olevat ihmiset
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth: 680, marginBottom: 52 }}>
              Projektiasi johtavat samat ihmiset, jotka ovat rakentaneet tekoälystrategioita Sandvikille, optimoineet toimitusketjuja H&M:llä ja toimittaneet tuotantojärjestelmiä S-Pankille ja Metsolle.
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
                    <a href={p.linkedin} target="_blank" rel="noopener noreferrer"
                      className="dd-portrait-linkedin"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        marginTop: 12, padding: "6px 14px",
                        borderRadius: PILL_BORDER_RADIUS,
                        border: `1px solid ${C.border}`,
                        fontSize: 12, fontWeight: 500, color: C.textMuted,
                        textDecoration: "none", background: C.white,
                      }}>
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
              <a href="/fi/company/about" className="dd-arrow-link dd-link-hover" style={{
                color: C.seawave, fontSize: 15, fontWeight: 500, textDecoration: "none",
              }}>Tutustu koko tiimiin <span className="dd-arrow">{"→"}</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. CTA. Ota yhteyttä */}
      <CTASection
        heading="Ota yhteyttä"
        subtitle="30 minuutissa tiedät yhden vaikuttavimman tekoälymahdollisuutesi ja mitä sen toteuttaminen vaatisi. Ei myyntipuhetta, ei painetta."
        secondaryLabel="Katso miten toimimme"
        secondaryHref="/fi/services"
        image="/images/illustrations/DD-Illustration-4.png"
        imageSize={70}
      />
    </>
  );
}
