"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionDataGovernanceFi() {
  return (
    <SolutionSubpageTemplate
      locale="fi"
      hero={{
        breadcrumbLabel: "Data Governance & laatu",
        badge: "Data Governance & laatu",
        frameworkBadge: "Todistettu viitekehys. Käytössä yli 5 organisaatiossa",
        title: "Kukaan ei omista dataamme ja se hidastaa kaikkea",
        subtitle: "Jokainen tekoälyhanke jämähtää samaan paikkaan: data ei ole valmista. Epäselvä omistajuus, epäjohdonmukainen laatu, siiloutuneet järjestelmät. Korjaa tämä kerran, niin jokainen sitä seuraava projekti etenee nopeammin, maksaa vähemmän ja tuottaa luotettavia tuloksia.",
      }}
      challenge={{
        subtitle: "Data governance kuulostaa back-office-ongelmalta. Kunnes se estää jokaisen tekoälyhankkeen, jokaisen analytiikkaprojektin ja jokaisen päätöksen joka riippuu luotettavista luvuista.",
        items: [
          { title: "Ei selkeää datan omistajuutta", body: "Kun jokin menee pieleen, kukaan ei tiedä kuka on vastuussa. Päätökset jämähtävät, korjaukset kestävät viikkoja ja vastuu pysyy epäselvänä. Samat keskustelut käydään yhä uudelleen." },
          { title: "Datan laatu joka rapauttaa luottamuksen", body: "Epäjohdonmukaisuuksia, duplikaatteja, puuttuvia arvoja. Ihmisesi ovat lakanneet luottamasta lukuihin. He rakentavat omat taulukkonsa sen sijaan että käyttäisivät järjestelmiä joihin olette sijoittaneet." },
          { title: "Tekoälyprojektit ikuisessa datasilmukassa", body: "Jokainen tekoälyhanke alkaa lauseella \"ensin pitää korjata data\". Ilman governancea valmistelet samaa dataa kerta toisensa jälkeen. Eivätkä projektit jotka siitä riippuvat koskaan lähde liikkeelle." },
        ],
      }}
      steps={{
        subtitle: "Strukturoitu lähestymistapa käytössä yli 5 organisaatiossa. Toteutetaan tyypillisesti fokusoituna aloitusprojektina noin 2 kuukauden aikana. Saat governancen, jota ihmiset oikeasti käyttävät, ei pöytälaatikkoon jäävää linjadokumenttia.",
        items: [
          { step: "1", title: "Datamaisemasi arvioituna", desc: "Olemassaoleva datamaisemasi kartoitetaan. Omistajuusaukot, laatuongelmat ja luotettavasta datasta riippuvat liiketoimintaprosessit. Näet tarkalleen missä ongelmat ovat ja mitä ne maksavat sinulle." },
          { step: "2", title: "Omistajuusmalli määriteltynä", desc: "Datan omistajuus linjataan liiketoimintaprosesseihin, ei IT-järjestelmiin. Selkeät roolit joista on järkeä ihmisille jotka niitä kantavat. Niin että vastuu on ilmeinen ja kiistat loppuvat." },
          { step: "3", title: "Laatukehys käytännönläheisenä", desc: "Laatusääntöjä, seurantaa ja parannusprosesseja, joita tiimisi oikeasti pystyy noudattamaan. Mittarit, joilla on väliä. Ei 200-sivuista linjadokumenttia, jota kukaan ei lue." },
          { step: "4", title: "Organisaatiosi käyttöönotettuna", desc: "Governance toimii vain jos ihmiset käyttävät sitä. Käyttöönottosuunnitelmat, koulutus ja governance upotettuna olemassa oleviin työnkulkuihin, niin että se pysyy projektin päätyttyä." },
        ],
      }}
      results={{
        subtitle: "Governance joka otetaan käyttöön. Ei vain dokumentoida.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Anora" logo="/images/logos/Anora_BW.png" logoHeight={22} tag="Juomateollisuus"
              description="Yhtenäinen governance 5 maan kesken yhdistymisen jälkeen. 2 dataluokkaa linjattu selkein omistajuuksin. SAP S/4HANA -muutoksen tuki governance-viitekehyksen kanssa."
              quote="Data Design auttoi meitä saamaan master datan hallintaan. Heidän selkeä lähestymistapansa teki datastamme tarkempaa ja helpommin hallittavaa."
              quoteName="Matti Nurmi"
              quoteTitle="CIO, Anora"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Helen" logo="/images/logos/Helen_BW.png" logoHeight={22} tag="Energia"
              description="Datan omistajuus linjattu liiketoimintaprosesseihin. Selkeä vastuumalli omaksuttu organisaatiossa. Sama viitekehys joka mahdollisti myöhemmin tekoäly-tiekartan etenemisen."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Neste" tag="Energia & kemia"
              description="Potentiaali lieventää 14 miljoonan euron jakeluvelvoiteraportoinnin riskejä. Datavetoinen lähestymistapa regulaatiovalvontaan koko organisaatiossa."
            />
          </Reveal>
        </>,
        footnote: "Lisäksi: Wolt. Toimittajien perehdytysprosessi ja riskienhallinta. MHYP. Governance-malli 52 metsänhoitoyhdistykselle kilpailulain mukaisesti.",
      }}
      tools={{
        subtitle: "Governance-projektisi etenee nopeammin koska dokumentointi ja laadunvalvonta on automatisoitu alusta saakka.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="Auto Data Catalog" description="Data-assettisi dokumentoituna automaattisesti. Ei manuaalista työtä. Luo liiketoimintaystävällisiä kuvauksia lukemalla metadatan työkaluista kuten Power BI. Tiimisi ymmärtää, hallitsee ja ottaa datan uudelleenkäyttöön kuluttamatta viikkoja dokumentaation kirjoittamiseen." accent={C.lemon} />
          </Reveal>
          <Reveal delay={0.1}>
            <ToolPreviewCard name="Data Quality Improver" description="Datan laatuongelmat löydettyinä ja korjattuina ennen kuin ne kasaantuvat. Automatisoitu profilointi, poikkeavuuksien tunnistus ja laatupisteytys datakuvioidesi yli. Konkreettisilla korjaussuosituksilla, ei vain hälytyksillä." accent={C.turquoise} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "Siirryt \"kukaan ei omista dataa\" -tilanteesta \"kaikki tietävät tarkalleen mistä ovat vastuussa\" -tilaan. Governancella jota tiimisi oikeasti noudattaa.",
        items: [
          "Selkeä omistajuus kartoitettuna jokaiselle dataluokalle",
          "Governance-malli joka mahdollistaa tekoälyn. Ei estä sitä",
          "Laatukehys jota tiimisi oikeasti noudattaa",
          "Muutosjohtamisen ja käyttöönoton suunnitelma",
          "Seurantanäkymät jatkuvaa laadun valvontaa varten",
        ],
        timelineBadge: "Noin 2 kuukautta",
        timelineDesc: "Kartoituksesta omaksuttuun governance-malliin",
      }}
      cta={{
        heading: "30 minuutissa tiedät, onko governance-aloitus teille oikea",
        subtitle: "Varaa ilmainen keskustelu. Saat selvyyden datahaasteistanne ja näet miten muut organisaatiot siirtyivät datan kaaoksesta governance-malliin jota tiimit oikeasti käyttävät.",
        image: "/images/illustrations/DD-Illustration-4.png",
        secondaryLabel: "Katso kaikki ratkaisut",
        secondaryHref: "/fi/solutions",
      }}
    />
  );
}
