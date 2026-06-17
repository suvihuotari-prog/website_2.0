"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionAIStrategyFi() {
  return (
    <SolutionSubpageTemplate
      locale="fi"
      hero={{
        breadcrumbLabel: "Tekoälystrategia & tiekartta",
        badge: "Tekoälystrategia & tiekartta",
        frameworkBadge: "Todistettu viitekehys. Yli 30 strategiaa toimitettu",
        title: "Tiedämme että tekoäly on tärkeää. Mutta mistä aloitamme?",
        subtitle: "Liikaa vaihtoehtoja, ei selkeää suunnitelmaa ja johto, joka haluaa vastauksia. Tarvitset tiekartan, joka on priorisoitu, rahoitettu ja valmis toteutettavaksi. Sellaisen olemme tehneet jo yli 30 kertaa.",
      }}
      challenge={{
        subtitle: "Useimmat organisaatiot tietävät tekoälyn tärkeyden. Vaikea osa on päättää mistä aloittaa. Ja rakentaa perustelut, jotka saavat johdon toimimaan.",
        items: [
          { title: "Liikaa tekoälymahdollisuuksia, ei selkeää prioriteettia", body: "Jokainen toimittaja lupaa muutoksen. Tiimilläsi on kymmeniä ideoita, mutta ei tapaa arvottaa niitä todellisen liiketoiminta-arvon mukaan. Tuloksena kuukausia keskustelua ja ei päätöksiä." },
          { title: "Hyvät pilotit, jotka eivät etene", body: "Ilman johdon sitoutumista ja konkreettista investointiperustelua lupaavat pilotit kuolevat PowerPointiin. Todistat että tekoäly toimii, mutta sitä ei saa rahoitettua." },
          { title: "Ei jaettua visiota organisaatiossa", body: "Myynti haluaa yhtä, operatiivinen toimi toista, IT kolmatta. Ilman yhteistä suuntaa tekoälyinvestoinnit hajaantuvat, päällekkäistyvät ja kilpailevat samoista resursseista." },
        ],
      }}
      steps={{
        subtitle: "Taistelussa testattu viitekehys, jota on hiottu yli 30 strategiaprojektissa. Toteutetaan tyypillisesti 6–8 viikon fokusoituna sprinttinä, joka vie hajanaisista ideoista rahoitettuun, toteutettavaan tekoäly-tiekarttaan.",
        items: [
          { step: "1", title: "Arvoketjusi kartoitettuna", desc: "Liiketoimintaprosessisi kartoitetaan päästä päähän. Ei lähtien teknologiasta, vaan siitä missä liiketoimintasi luo ja menettää arvoa tänään. Tämä on perusta jolle kaikki muu rakentuu." },
          { step: "2", title: "Vaikuttavimmat mahdollisuutesi tunnistettuna", desc: "Tekoälymahdollisuudet pisteytetään systemaattisesti liiketoimintavaikutuksen, toteutettavuuden ja datan valmiuden mukaan. Näet tarkalleen mitkä vedot kannattavat ensin. Ja mitkä jättää väliin." },
          { step: "3", title: "Liiketoimintaperustelusi johtoryhmävalmiina", desc: "Jokainen lopulliseen listaan päässyt käyttötapaus saa konkreettisen liiketoimintaperustelun: odotetun ROI:n, tarvittavan investoinnin, aikataulun ja riippuvuudet. Kirjoitettu johtosi tarvitsemalla kielellä." },
          { step: "4", title: "Tiekarttasi toteutusvalmiina", desc: "Vaiheittainen toteutussuunnitelma selkein omistuksin, virstanpylväin ja onnistumismittarein. Johtoryhmän kokoukseen menet vastauksilla, et kysymyksillä." },
        ],
      }}
      results={{
        subtitle: "Tekoälystrategioita jotka eivät jää pöytälaatikkoon. Ne rahoitetaan ja toteutetaan.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Sandvik" logo="/images/logos/Sandvik_BW.png" logoHeight={20} tag="Teollisuus"
              description="Yli 500 tekoälyideaa kavennettiin 60 korkean vaikutuksen käyttötapaukseen. Selkeä tekoälyvetoisen kasvun tiekartta omaksuttiin johdossa. Strukturoitu arviointiviitekehys jonka organisaatio käyttää itsenäisesti edelleen."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Helen" logo="/images/logos/Helen_BW.png" logoHeight={22} tag="Energia"
              description="Johdon hyväksyntä ja rahoitus saatu tekoälypiloteille. Tekoäly-tiekartta ja projektisuunnitelma linjattu liiketoimintastrategiaan. Datan omistajuusmalli omaksuttu koko organisaatiossa."
              quote="Projekti oli kattava ja ammattimaisesti suunniteltu, ja se vauhditti merkittävästi tekoälykehitystämme."
              quoteName="Kati Kinnunen"
              quoteTitle="CDO, Helen"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Elisa" logo="/images/logos/Elisa_BW.png" logoHeight={22} tag="Telekommunikaatio"
              description="Yli 60 datatuoteideaa arvioitu, 15 korkean arvon käyttötapausta valittu neljältä liiketoiminta-alueelta. Datastrategia selkein omistajuuksin ja priorisoinnein."
            />
          </Reveal>
        </>,
      }}
      tools={{
        subtitle: "Strategiaprosessisi etenee nopeammin koska raskas työ on jo tehty.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="DataDesigner.AI" description="Tekoälystrategiasi luonnostellaan tunneissa, ei kuukausissa. Muuntaa liiketoimintatavoitteesi priorisoiduksi tekoäly-tiekartaksi. Käyttötapaukset pisteytetty, liiketoimintaperustelut luonnosteltu ja vaiheittainen suunnitelma koottu. Rakennettu samalle viitekehykselle jonka takana on yli 30 toimitettua strategiaa, joten aloitat todistetuista malleista, ei tyhjältä paperilta." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: 'Siirryt "tekoälystä kiinnostuneesta" "tekoälyä rahoittavaksi". Toimituksilla, jotka johtoryhmäsi hyväksyy ja tiimisi pystyy toteuttamaan.',
        items: [
          "Priorisoitu tekoäly-käyttötapausportfolio sidottuna liiketoiminta-arvoon",
          "Investointivalmiit liiketoimintaperustelut selkein ROI:in",
          "Vaiheittainen toteutustiekartta, jonka tiimisi voi toteuttaa",
          "Omistajuusmalli ja governance-viitekehys",
          "Johtoryhmävalmiit esitykset johdon tarvitsemalla kielellä",
        ],
        timelineBadge: "Tyypillisesti 6–8 viikkoa",
        timelineDesc: "Aloituspalaverista johtoryhmävalmiiseen tekoäly-tiekarttaan",
      }}
      cta={{
        heading: "30 minuutissa tiedät onko tekoälystrategia-sprintti teille oikea",
        subtitle: "Varaa ilmainen keskustelu. Saat selvyyden tilanteestasi ja näet miten toimialallasi olevat yritykset ovat siirtyneet tekoälyn epävarmuudesta rahoitettuun tiekarttaan.",
        image: "/images/illustrations/DD-Illustration-1.png",
        secondaryLabel: "Katso kaikki ratkaisut",
        secondaryHref: "/fi/solutions",
      }}
    />
  );
}