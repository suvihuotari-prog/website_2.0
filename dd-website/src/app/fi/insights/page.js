"use client";

import { useState } from "react";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { InsightCard } from "@/components/InsightCard";

const ARTICLES = [
  {
    title: "Datan omistajuuden selkeyttäminen avasi oven sen tehokkaaseen käyttöön",
    description: "Suvi Huotari kertoo, miten datan omistajuuden selkeyttäminen mahdollisti datan oikean käytön.",
    category: "Expert Talk",
    author: "Suvi Huotari",
    authorPhoto: "/images/people/SuviHuotari.jpg",
    image: "/images/people/SuviHuotari.jpg",
    href: "/fi/insights/clarifying-data-ownership",
  },
  {
    title: "Personoinnin vieminen datatieteestä tuotantoon",
    description: "Amir Vaheb kertoo, miten läpinäkyvä tekoälypohjainen personointi muuttui datatieteen kokeilusta liiketoimintakriittiseksi kyvykkyydeksi.",
    category: "Expert Talk",
    author: "Amir Vaheb",
    authorPhoto: "/images/people/AmirVaheb.jpg",
    image: "/images/people/AmirVaheb_wide.jpg",
    href: "/fi/insights/taking-personalization-to-production",
  },
  {
    title: "Parempia projektipäätöksiä datalla",
    description: "Niko Föhr kertoo, miten projektien kannattavuus voidaan ennustaa jo ennen projektin alkua.",
    category: "Expert Talk",
    author: "Niko Föhr",
    authorPhoto: "/images/people/NikoFohr.jpg",
    image: "/images/people/NikoFohr_wide.jpg",
    href: "/fi/insights/better-project-decisions-with-data",
  },
  {
    title: "Näin datastrategia käännettiin liiketoiminnan kasvuksi",
    description: "Toni Haapakoski kertoo, miten datastrategia voi muuttaa yrityksen liiketoimintatavoitteet konkreettisiksi teoiksi.",
    category: "Expert Talk",
    author: "Toni Haapakoski",
    authorPhoto: "/images/people/ToniHaapakoski.jpg",
    image: "/images/people/ToniHaapakoski_wide.jpg",
    href: "/fi/insights/data-strategy-into-business-growth",
  },
  {
    title: "Tiedonhallinnan yhtenäistäminen avasi tien tekoälylle",
    description: "Jaakko Mattila kertoo, miten globaali organisaatio rakensi luottamuksen dataansa muutoksenhallinnan kautta.",
    category: "Expert Talk",
    author: "Jaakko Mattila",
    authorPhoto: "/images/people/JaakkoMattila.png",
    image: "/images/people/JaakkoMattila_wide.png",
    href: "/fi/insights/unified-data-management-for-ai",
  },
  {
    title: "Älykkäämpi alennushinnoittelu koneoppimisella",
    description: "Pekka Autere kertoo, miten koneoppiminen toi käytännön tuloksia alennushinnoitteluun.",
    category: "Expert Talk",
    author: "Pekka Autere",
    authorPhoto: "/images/people/PekkaAutere.png",
    image: "/images/people/PekkaAutere_wide.png",
    href: "/fi/insights/smarter-discount-pricing-with-ml",
  },
  {
    title: "Tekoälystrategioita mukavuusalueen ulkopuolella",
    description: "Mika Aho kertoo, miten tekoälystrategioiden toteutus vie joskus mukavuusalueen ulkopuolelle.",
    category: "Expert Talk",
    author: "Mika Aho",
    authorPhoto: "/images/people/MikaAho.jpg",
    image: "/images/people/MikaAho_wide.jpg",
    href: "/fi/insights/ai-strategies-outside-comfort-zone",
  },
  {
    title: "Yritysdata vastaa arkikielellä liiketoimintaongelmiin",
    description: "Gaurav Khullar valottaa, miten tietokantoja voi puhutella luonnollisella kielellä.",
    category: "Expert Talk",
    author: "Gaurav Khullar",
    authorPhoto: "/images/people/GauravKhullar.jpg",
    image: "/images/people/GauravKhullar_wide.jpg",
    href: "/fi/insights/making-data-speak-your-language",
  },
  {
    title: "Voiko tekoäly hinnoitella käytetyn auton paremmin kuin myyjä?",
    description: "Mika Laukkanen kertoo, miten koneoppimismalli voitti skeptisyyden ja automatisoi käytettyjen autojen hinnoittelun.",
    category: "Expert Talk",
    author: "Mika Laukkanen",
    authorPhoto: "/images/people/MikaLaukkanen.jpg",
    image: "/images/people/MikaLaukkanen_wide.jpg",
    href: "/fi/insights/ai-pricing-used-cars",
  },

  {
    title: "Tekoäly vaatii sitkeyttä: miksi harva projekti onnistuu ensimmäisellä yrittämällä",
    description: "Kun ensimmäinen toteutus ei toiminut, oli ajattelutapa uudistettava. Lopputulos ylitti alkuperäiset odotukset.",
    category: "AI Insights",
    author: "Mika Aho",
    authorPhoto: "/images/people/MikaAho.jpg",
    image: "/images/illustrations/DD-Illustration-2.png",
    href: "/fi/insights/ai-requires-persistence",
  },
  {
    title: "Älykäs tapa rakentaa tekoälyn innovaatioportfolio",
    description: "Lopeta uhkapeli tekoälyn kanssa. Ala rakentaa strategista portfoliota joka tasapainottaa riskin ja tuoton.",
    category: "AI Insights",
    author: "Mika Aho",
    authorPhoto: "/images/people/MikaAho.jpg",
    image: "/images/illustrations/DD-Illustration-3.png",
    href: "/fi/insights/smart-ai-innovation-portfolio",
  },
  {
    title: "Viisi totuutta tekoälystrategioista",
    description: "Mitä jokaisen päättäjän pitäisi ymmärtää ennen aloittamista.",
    category: "AI Insights",
    author: "Mika Aho",
    authorPhoto: "/images/people/MikaAho.jpg",
    image: "/images/illustrations/DD-Illustration-4.png",
    href: "/fi/insights/five-truths-about-ai-strategies",
  },
  {
    title: "Tekoälyavusteinen prospektointi: tunnista heti keneen ottaa yhteyttä",
    description: "Mitä jos voisit katkaista huonojen liidien kierteen ja tietää heti mitkä prospektit sopivat liiketoimintaasi?",
    category: "AI Insights",
    image: "/images/illustrations/DD-Illustration-1.png",
    href: "/fi/insights/ai-powered-prospecting",
  },

  {
    title: "Uudistimme brändimme: tässä miksi",
    description: "Lanseeraamme uudistetun brändi-identiteettimme, terävämmän positioinnin ja uusitun verkkosivuston.",
    category: "Uutiset",
    image: "/images/illustrations/DD-Illustration-2.png",
    href: "/fi/insights/updated-brand",
  },
  {
    title: "Data Design laajenee Intiaan AI Labsin avulla",
    description: "Data Design lanseeraa AI Labsin Intiassa ja vahvistaa Suomen ja Intian välistä teknologiakumppanuutta.",
    category: "Uutiset",
    image: "/images/illustrations/DD-Illustration-1.png",
    href: "/fi/insights/expands-to-india",
  },
  {
    title: "M&M Growth Partners mukaan Data Designin kasvun tueksi",
    description: "Suomalainen kasvuyhtiösijoittaja M&M Growth Partners liittyy advisor-rooliin tukemaan Data Designin kasvua.",
    category: "Uutiset",
    image: "/images/illustrations/DD-Illustration-3.png",
    href: "/fi/insights/mm-growth-partners",
  },
];

const CATEGORIES = ["Kaikki", "Expert Talk", "AI Insights", "Uutiset"];

export default function InsightsPageFi() {
  const [activeCategory, setActiveCategory] = useState("Kaikki");

  const filtered = activeCategory === "Kaikki"
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <HeroSection
        gradient="lemon"
        badge="Näkemykset"
        title="Käytännönläheistä ajattelua tekoälystä, datasta ja siitä mikä oikeasti toimii"
        subtitle="Asiantuntijapuheenvuoroja, strategianäkemyksiä ja yritysuutisia. Ihmisiltä jotka rakentavat tekoälyratkaisuja joka päivä."
      />

      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <div style={{ display: "flex", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: "10px 24px", borderRadius: PILL_BORDER_RADIUS,
                      background: isActive ? C.black : C.gray,
                      color: isActive ? C.white : C.black,
                      border: "none", cursor: "pointer",
                      fontSize: 14, fontWeight: 500,
                      transition: "all 0.2s ease",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = C.border; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = C.gray; }}
                  >{cat === "Expert Talk" ? "Expert Talks" : cat}</button>
                );
              })}
            </div>
          </Reveal>

          {featured && (
            <Reveal>
              <div style={{ marginBottom: 40 }}>
                <InsightCard {...featured} featured />
              </div>
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="dd-insights-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
            }}>
              {rest.map((article, i) => (
                <Reveal key={article.title} delay={i * 0.06}>
                  <InsightCard {...article} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        heading="Haluatko keskustella, miten tekoäly voisi toimia liiketoiminnassanne?"
        subtitle="Varaa ilmainen 30 minuutin keskustelu. Saat selvyyttä seuraavasta askeleestasi, et myyntipuhetta."
        secondaryLabel="Tutustu palveluihin"
        secondaryHref="/fi/services"
        image="/images/illustrations/DD-Illustration-1.png"
      />
    </>
  );
}
