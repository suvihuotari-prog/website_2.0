"use client";

import { C, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionAIAcceleratorFi() {
  return (
    <SolutionSubpageTemplate
      locale="fi"
      hero={{
        breadcrumbLabel: "Tekoälykiihdyttämö",
        badge: "Tekoälykiihdyttämö",
        frameworkBadge: "Yli 100 yritystä koulutettu",
        title: "Johtoryhmämme ei vielä näe, mitä tekoäly meille tekisi",
        subtitle: "Johtoryhmä tietää, että tekoäly on tärkeää. Yhtenäistä näkemystä siitä, mihin se sopii ja mistä aloittaa, ei vielä ole. Tekoälykiihdyttämö vie teidät 1–2 päivässä mielipiteistä yhteiseen käsitykseen: mihin tekoäly luo arvoa juuri teidän liiketoiminnassanne.",
      }}
      challenge={{
        subtitle: "Tekoälystrategiaa ei voi rakentaa, jos johtoryhmälläsi ei ole yhteistä käsitystä siitä, mitä tekoäly juuri teidän liiketoiminnallenne voi tehdä, ja mitä ei.",
        items: [
          { title: "Tekoälyhypeä ilman liiketoiminnan kytkentää", body: "Kaikilla on tekoälystä mielipiteitä, jotka pohjautuvat toimittajademoihin, uutisotsikoihin ja LinkedIn-postauksiin. Mutta kukaan ei osaa sanoa, mitä tekoäly tarkoittaa juuri teidän prosesseillenne, datallenne ja kilpailuasemallenne." },
          { title: "Ei yhteistä kieltä johtoryhmässä", body: "Myynti, operaatiot, IT ja talous näkevät tekoälyn omalla tavallaan. Yhteistä kieltä ei ole, ja kokoukset päättyvät ilman päätöstä." },
          { title: "Hankkeet käynnistyvät ilman johdon tukea", body: "Yksittäiset tiimit kokeilevat siiloissa. Pilotit lähtevät käyntiin ilman johdon tukea. Hyvät ideat kilpailevat resursseista, eivätkä rakenna toistensa päälle. Tuloksena hukattu työ ja kasvava skeptisyys." },
        ],
      }}
      steps={{
        subtitle: "Tekoälykiihdyttämö on 1–2 päivän ohjelma, toimitettu yli 100 kertaa. Teollisuusyrityksistä rahoituslaitoksiin.",
        items: [
          { step: "1", title: "Liiketoimintasi ymmärretty", desc: "Ennen työpajaa käymme läpi liiketoimintamallisi, kilpailutilanteesi ja datasi. Ohjelma rakennetaan teidän todellisuutenne ympärille, ei yleisen tekoälyteorian päälle." },
          { step: "2", title: "Mahdollisuudet kartoitettu", desc: "Tiimisi työskentelee kanssamme tunnistaakseen, missä tekoäly sopii juuri teidän liiketoimintaprosesseihinne. Oikeat käyttötapaukset nousevat omasta toiminnastanne, eivät oppikirjasta." },
          { step: "3", title: "Prioriteetit sovittu", desc: "Käyttötapaukset arvioidaan yhdessä: liiketoimintavaikutus, toteutettavuus ja datan valmius. Johtoryhmä on lopuksi yhtä mieltä siitä, mikä on tärkein ja mistä aloitetaan. Mielipiteistä päätöksiin." },
          { step: "4", title: "Seuraava askel selkeytetty", desc: "Lähdet priorisoidulla listalla tekoälymahdollisuuksista, karkeilla ROI-arvioilla ja selkeällä kuvalla siitä, miltä täysi tekoälystrategia-sprintti näyttäisi. Kun siihen olette valmiita." },
        ],
      }}
      results={{
        subtitle: "Yli 100 yritystä on käynyt tekoälykiihdyttämön. Uteliaisuudesta selkeään suuntaan.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Teollisuus & valmistus" tag="Tuotanto, laatu & toimitusketju"
              description="Teollisuusyritysten johtoryhmät ovat käyttäneet tekoälykiihdyttämöä tunnistamaan tekoälymahdollisuuksia tuotannossa, laadussa ja toimitusketjussa. Abstraktista kiinnostuksesta rahoitettuihin pilotteihin."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Finanssipalvelut" tag="Automaatio & riskienhallinta"
              description="Pankit ja rahoituslaitokset ovat saaneet johtoryhmänsä yhteen näkemykseen tekoälyprioriteeteista, oli kyse asiakaspalvelun automaatiosta, riskienhallinnasta tai regulaatioasioista."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Energia & julkiset" tag="Operaatiot & kestävyys"
              description="Energiayritykset ovat käyttäneet tekoälykiihdyttämöä kartoittaakseen tekoälysovelluksia verkko-operaatioissa, asiakaskohtaamisessa ja kestävyysraportoinnissa. Yhteinen näkemys siitä, mitä tehdään seuraavaksi."
            />
          </Reveal>
        </>,
      }}
      tools={{
        subtitle: "Työpaja etenee nopeammin, koska kartoitusviitekehys on testattu yli 100 yrityksessä.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="DataDesigner.AI" description="Tekoälymahdollisuutesi kartoitetaan tunneissa, ei päivissä. Liiketoimintasi muuntuu valmiiksi listaksi mahdollisuuksia, jotta työpaja-aika menee arviointiin ja päätöksiin, ei tyhjältä paperilta aivoriiheen." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "Johtoryhmäsi siirtyy kiinnostuksesta päätöksiin. Päivissä, ei kuukausissa.",
        items: [
          "Kartta tekoälymahdollisuuksista juuri teidän liiketoiminnallenne",
          "Priorisoitu lyhyt lista karkein ROI-arvioin",
          "Yhteinen ymmärrys ja kieli johdossa",
          "Käytännön kokemus oikeiden tekoälykäyttötapausten arvioinnista",
          "Selkeä kuva siitä, mitä täysi strategia-sprintti sisältäisi",
        ],
        timelineBadge: "1–2 päivää",
        timelineDesc: "Valmistelusta yhtenäiseen johtoryhmään",
        timelineNote: "Mihin tämä johtaa: monille tekoälykiihdyttämö on ponnahduslauta täyteen Data & AI -strategia-sprinttiin. Priorisoidusta listasta hallitusvalmiisiin liiketoimintaperusteluihin ja toteutettavaan tiekarttaan 6–8 viikossa.",
      }}
      related={{
        subtitle: "Tekoälykiihdyttämö on usein ensimmäinen askel. Tästä mennään eteenpäin.",
        children: <>
          <Reveal delay={0.05}>
            <a href="/fi/solutions/ai-strategy" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="dd-hover-lift" style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                border: `1px solid ${C.border}`, height: "100%",
              }}>
                <span style={{
                  display: "inline-block", padding: "5px 14px", borderRadius: 100,
                  border: `1px solid ${C.border}`, fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}99`,
                  marginBottom: 16,
                }}>Tekoälystrategia & tiekartta</span>
                <h3 style={{ fontSize: 19, fontWeight: 500, marginBottom: 10, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  Tiedämme, että tekoäly on tärkeää. Mutta mistä aloitamme?
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, marginBottom: 16 }}>
                  Ota prioriteetit tekoälykiihdyttämöstä ja muunna ne investointivalmiiksi liiketoimintaperusteluiksi ja vaiheittaiseksi tiekartaksi, jonka hallituksesi hyväksyy.
                </p>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.seawave }}>Lue lisää →</span>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="/fi/solutions/genai-automation" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="dd-hover-lift" style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                border: `1px solid ${C.border}`, height: "100%",
              }}>
                <span style={{
                  display: "inline-block", padding: "5px 14px", borderRadius: 100,
                  border: `1px solid ${C.border}`, fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}99`,
                  marginBottom: 16,
                }}>GenAI & prosessiautomaatio</span>
                <h3 style={{ fontSize: 19, fontWeight: 500, marginBottom: 10, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  Käsityö syö ajan, jonka tekoäly voisi säästää
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, marginBottom: 16 }}>
                  Aloita vaikuttavimpien prosessien automatisointi heti GenAI:lla. Toimiva prototyyppi 4–6 viikossa.
                </p>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.seawave }}>Lue lisää →</span>
              </div>
            </a>
          </Reveal>
        </>,
      }}
      cta={{
        heading: "30 minuutissa tiedät, onko tekoälykiihdyttämö teille oikea lähtöpiste",
        subtitle: "Varaa ilmainen keskustelu. Saat selvyyden siitä, missä johtoryhmänne on tekoälyn suhteen, ja mitä yhteisen näkemyksen saaminen vaatii.",
        image: "/images/illustrations/DD-Illustration-1.png",
        secondaryLabel: "Katso kaikki ratkaisut",
        secondaryHref: "/fi/solutions",
      }}
    />
  );
}
