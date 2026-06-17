"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionCustomerIntelligenceFi() {
  return (
    <SolutionSubpageTemplate
      locale="fi"
      hero={{
        breadcrumbLabel: "Asiakasäly",
        badge: "Asiakasäly",
        title: "Emme tunne asiakkaitamme tarpeeksi hyvin",
        subtitle: "Asiakastieto on järjestelmissä, mutta se ei palvele tiimiäsi. Pirstaleisesta tiedosta rakennetaan yhtenäinen asiakaskuva: kohdennettuja suosituksia, ennakointia asiakaspoistumasta ja yhteinen asiakasmuisti, jota koko tiimi voi käyttää.",
      }}
      challenge={{
        subtitle: "Asiakasdataa on. Se ei vain palvele tiimiäsi. Tarvitsemasi tieto on hautautunut eri järjestelmiin.",
        items: [
          { title: "Asiakasdata hajallaan järjestelmissä", body: "CRM sanoo yhtä, asiakaspalvelujärjestelmä toista. Myyjät rakentavat tiedon päihinsä, eivät järjestelmiin. Kun he lähtevät, organisaation muisti lähtee heidän mukanaan." },
          { title: "Geneeriset asiakaskohtaamiset", body: "Jokainen asiakas saa saman kokemuksen. Tiedät, että asiakkaat ovat erilaisia, mutta järjestelmäsi eivät pysty kertomaan miten ja mitä kukin oikeasti tarvitsee." },
          { title: "Asiakaspoistuma näkyy vasta jälkikäteen", body: "Kun huomaat, että asiakas on lähdössä, hän on jo tehnyt päätöksensä. Tarvitset signaaleja, jotka ennakoivat lähtöä ennen kuin on liian myöhäistä." },
        ],
      }}
      steps={{
        subtitle: "Etenemme pirstaleisesta datasta käyttökelpoiseen asiakasymmärrykseen, joka istuu tiimisi arkeen.",
        items: [
          { step: "1", title: "Asiakasdata yhdistetään", desc: "Datalähteet yhdistetään johdonmukaiseksi asiakasnäkymäksi: CRM, transaktiot, vuorovaikutukset ja tukipyynnöt. Tuloksena yksi yhteinen tietolähde, johon koko tiimi voi luottaa." },
          { step: "2", title: "Asiakasymmärrys mallinnetaan", desc: "Mallit paljastavat sen, mitä datasi jo tietää: asiakassegmentit, ostohalukkuuden, poistumariskin, asiakkaan elinkaariarvon ja seuraavan parhaan toimenpiteen. Räätälöitynä juuri sinun liiketoimintaasi." },
          { step: "3", title: "Asiakasmuisti otetaan käyttöön", desc: "GenAI-pohjainen asiakasäly antaa tiimillesi koko kontekstin ennen jokaista kokousta, puhelua tai päätöstä. Kokousvalmistautuminen automatisoituu ja raporteilla on yhtenäinen muoto. Yksikään oivallus ei jää yhden ihmisen päähän." },
          { step: "4", title: "Vaikutus mitataan ja kasvaa", desc: "Oivallukset viedään osaksi tiimisi nykyistä työtä. Raporteista seurataan, mikä siirtää lukuja. Asiakasäly tarkentuu, kun lisää dataa kertyy." },
        ],
      }}
      results={{
        subtitle: "Asiakasälytoteutuksia, joilla on mitattava liiketoimintavaikutus.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="S-Pankki" tag="Finanssipalvelut"
              description="Sisääntulevien puheluiden myynnin konversio kasvoi 3–7-kertaiseksi. Lainojen priorisointi automatisoitiin, ja myynti kasvoi merkittävästi. Asiakas-KPI saatiin johdon seurantaan."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="A-Insinöörit" logo="/images/logos/A-Insinoorit_BW.jpg" logoHeight={24} tag="Insinööripalvelut"
              description="Myyntitiimeille rakennettiin GenAI-pohjainen asiakasmuisti. Kokousvalmistautuminen automatisoitiin ja myyntiraporteille luotiin yhtenäinen muoto. Koko asiakaskonteksti on saatavilla ennen jokaista kohtaamista."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Tokmanni" logo="/images/logos/Tokmanni_BW.png" logoHeight={22} tag="Vähittäiskauppa"
              description="Suositukset kohdennettiin yksittäisen asiakkaan käyttäytymisen mukaan. Kohdennetuilla tarjouksilla 800 000 aktiiviasiakkaalle saavutettiin 256 % kasvu kuponkien käytössä."
            />
          </Reveal>
        </>,
        footnote: "Lisäksi: Konecranes. Asiakasprofiilien suunnittelu paremman myynnin ja markkinoinnin kohdentamiseen.",
      }}
      tools={{
        subtitle: "Asiakasäly-projektit etenevät nopeammin, koska Sales Prospector tuottaa kvalifioidut liidit valmiina käyttöön.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="Sales Prospector" description="Tekoälyagentit käyvät läpi LinkedInin, työpaikkailmoitukset, CRM-datan ja liidilistat, ja tuottavat ennakkoluokitellut prospektit. Liidit ovat pisteytettyjä ja valmiina yhteydenottoon. Myyntitiimi puhuu oikeiden ihmisten kanssa heti alusta." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "Siirryt hajanaisesta asiakasdatasta yhteiseen asiakaskuvaan, jota koko tiimi käyttää päivittäin.",
        items: [
          "Myyntitiimit valmistautuvat täydellä asiakaskontekstilla",
          "Suositukset, jotka on sovitettu yksittäisen asiakkaan käyttäytymiseen",
          "Poistumaennustemallit, jotka merkitsevät riskiasiakkaat ajoissa",
          "Yhtenäinen asiakasnäkymä kaikissa kohtaamispisteissä",
          "Raportointi ja kokousvalmistautuminen automatisoituina",
        ],
        timelineBadge: "Ensimmäinen malli 6–10 viikossa",
        timelineDesc: "Datan läpikäynnistä ensimmäisiin käyttökelpoisiin asiakasoivalluksiin",
      }}
      cta={{
        heading: "30 minuutissa tiedät, miten asiakasdatasta saadaan käyttökelpoista",
        subtitle: "Varaa ilmainen keskustelu. Käymme läpi, missä asiakasymmärryksenne ontuu, ja näytämme, miten samankaltaiset yritykset rakensivat hajanaisesta datasta yhtenäisen asiakaskuvan.",
        image: "/images/illustrations/DD-Illustration-3.png",
        secondaryLabel: "Katso kaikki ratkaisut",
        secondaryHref: "/fi/solutions",
      }}
    />
  );
}
