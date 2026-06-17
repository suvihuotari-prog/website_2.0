"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

const IconRetail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);
const IconWholesale = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconIndustrial = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);
const IconConsumer = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.seawave} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

export default function SolutionPricingOptimizationFi() {
  return (
    <SolutionSubpageTemplate
      locale="fi"
      hero={{
        breadcrumbLabel: "Hinnoittelu & liikevaihdon optimointi",
        badge: "Hinnoittelu & liikevaihdon optimointi",
        title: "Emme saa hinnoittelusta kaikkea irti",
        subtitle: "Vuosien transaktiodataa, asiakaskäyttäytymistä ja kilpailusignaaleja löytyy jo. Mutta hinnoittelet edelleen Excelissä ja vaistolla. Rakennamme mallit, jotka muuttavat datan optimoiduiksi hinnoiksi, kohdennetuiksi tarjouksiksi ja paremmiksi katteiksi. Mallit toimivat tuotannossa heti ja parantuvat datan kertyessä.",
      }}
      challenge={{
        subtitle: "Hinnoittelu on nopein tapa nostaa katetta. Silti useimmat tiimit eivät pysy mukana.",
        items: [
          { title: "Hinnoittelu mututuntumalla ja viime vuoden taulukolla", body: "Hinnoittelutiimisi on kokenut, mutta se tekee tuhansia päätöksiä muutaman datapisteen varassa. Kun tuotekatalogissa on kymmeniä tuhansia tuotteita, manuaaliset säännöt eivät pysy perässä. Jokainen hidas päätös syö katetta." },
          { title: "Kampanjat, jotka maksavat enemmän kuin tuottavat", body: "Yleisalennukset ja samaa kaikille -kampanjat kuluttavat markkinointibudjettia asiakkaisiin, jotka olisivat ostaneet muutenkin. Samalla ohitetaan ne, jotka olisivat tarvinneet vain oikean tarjouksen. Tuloksena alemmat katteet eikä selkeää tietoa siitä, mikä toimi." },
          { title: "Ei tapaa testata ennen päätöstä", body: "Hintamuutokset menevät tuotantoon oletusten pohjalta. Tieto siitä, mikä toimi ja mikä ei, tulee vasta kvartaaliraportin jälkeen. Ilman jatkuvaa palautetta jokainen hinnoittelupäätös jää yhdeksi laukaukseksi." },
        ],
      }}
      steps={{
        subtitle: "Etenemme transaktiodatasta tuotannossa toimiviin hinnoittelumalleihin tyypillisesti 8–12 viikossa.",
        items: [
          { step: "1", title: "Selvitetään mistä katetta vuotaa", desc: "Aloitamme transaktiohistoriastasi, asiakassegmenteistäsi ja tuotekatalogistasi. Tavoite ei ole yleinen analyysi vaan ne konkreettiset hinnoittelupäätökset, joissa malli toimii käsin tehtyjä sääntöjä paremmin. Yhdessä projektissa alkuanalyysi paljasti 15–20 % katepotentiaalin, jota asiakas ei ollut itse pystynyt mittaamaan." },
          { step: "2", title: "Rakennetaan mallit, jotka sopivat hinnoitteluusi", desc: "Yhtä ainoaa hinnoittelumallia ei ole. Olemme rakentaneet huutokauppapohjaista dynaamista hinnoittelua tukkukauppaan, kysyntälähtöisiä kohdennettuja tarjouksia vähittäiskaupan kanta-asiakkuuteen ja ennakoivia kustannusmalleja teolliseen palvelusopimukseen. Malli sopii liiketoimintalogiikkaasi, ei toisinpäin." },
          { step: "3", title: "Vahvistetaan vaikutus testaamalla", desc: "Mallit testataan oikealla datalla ja mahdollisuuksien mukaan kontrolloiduilla A/B-testeillä ennen kuin ne siirretään tuotantoon. Yhdessä vähittäiskauppaprojektissa teimme 9 kuukautta jatkuvaa A/B-testausta 800 000 asiakkaalla varmistaaksemme vaikutuksen ennen laajempaa käyttöönottoa. Tuotantoon ei mennä uskon varassa." },
          { step: "4", title: "Otetaan käyttöön ja parannellaan jatkuvasti", desc: "Malli toimii osana arkeasi, integroituna ERP-järjestelmään, hinnoittelujärjestelmään tai kampanjavirtaan. Suorituskykyä seurataan raporteista, ja mallit koulutetaan uudelleen uuden datan kertyessä. Olemme ylläpitäneet tuotantohinnoittelujärjestelmiä yli vuoden ja parannelleet niitä jatkuvasti." },
        ],
      }}
      results={{
        subtitle: "Tuotantojärjestelmiä mitattavin liiketoimintavaikutuksin. Ei pöytälaatikkoon jääneitä kokeiluja.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Tokmanni" logo="/images/logos/Tokmanni_BW.png" logoHeight={22} tag="Vähittäiskauppa. Kohdennetut kampanjat"
              description="Kohdennetut kuponkitarjoukset 800 000 aktiiviselle kanta-asiakkaalle. 256 % kasvu kuponkien käytössä, 5,3 % lisää käyntejä myymälässä ja 3,5 % myynnin kasvu, samalla kun keskialennukset pienenivät ja katteet paranivat. Vaikutus varmistettiin 9 kuukauden jatkuvalla A/B-testauksella. Järjestelmä toimii tuotannossa Azuressa ja laajenee nyt mainosesitteiden optimointiin ja valikoimapäätöksiin."
              quote="Lojaalit asiakkaamme saavat nyt tarjouksia, joista he välittävät. Tämä tarkoittaa enemmän käyntejä, enemmän myyntiä ja 256 % enemmän kuponkien käyttöä. Muutimme asiakasymmärryksen toiminnaksi ja todellisiksi liiketoimintatuloksiksi."
              quoteName="Tuomas Vihavainen"
              quoteTitle="Head of Group Analytics, Tokmanni"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Kirjastopalvelu" tag="Tukkukauppa. Dynaaminen hinnoittelu"
              description="Toteutimme tekoälypohjaisen huutokauppahinnoittelun kirja- ja mediatukkurille. Malli optimoi hintoja dynaamisesti kysyntäkuvioiden ja varastotasojen mukaan ja tuotti 15–20 % katekasvun sekä yli 10 % myynnin kasvun. Toteutimme kokonaisuuden alusta loppuun: data-analyysi, muuttujien valinta, mallin kehitys ja tuotantoon vieminen alle kuudessa kuukaudessa."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Sarlin" tag="Teollisuuspalvelut. Sopimushinnoittelu"
              description="Rakensimme ennakoivan hinnoittelumallin huolto- ja pumppausjärjestelmäsopimuksiin. Malli käyttää laitedataa, käyttömalleja ja historiallisia huoltokustannuksia hinnoitellakseen palvelusopimukset tarkemmin. Käsin tehty arviointi korvautui dataan perustuvalla sopimushinnoittelulla. Kokonaisuus rakennettiin määrittelytyöpajan ja pilotin kautta 12 viikossa."
            />
          </Reveal>
        </>,
      }}
      applications={{
        subtitle: "Hinnoittelun optimointi toimii kaikkialla, missä on transaktiohistoriaa ja hinnoittelupäätöksiä isossa kokoluokassa.",
        items: [
          { icon: <IconRetail />, title: "Vähittäiskauppa & verkkokauppa", body: "Kohdennetut kampanjat, dynaaminen katalogihinnoittelu ja valikoiman optimointi. Toimii parhaiten, kun käytössä on kanta-asiakasohjelma tai asiakaskohtaista ostodataa." },
          { icon: <IconWholesale />, title: "Tukkukauppa & jakelu", body: "Huutokauppahinnoittelu, tarjousten optimointi ja kysyntälähtöinen täydennyshinnoittelu. Suuri vaikutus, kun hinnoittelet tuhansia tuotteita asiakassegmenttien kesken." },
          { icon: <IconIndustrial />, title: "Teollisuus & kenttäpalvelut", body: "Palvelusopimusten hinnoittelu, huoltokustannusten ennakointi ja varaosahinnoittelu. Toimii erityisen hyvin, kun hinnoittelu riippuu laiteprofiileista ja käyttödatasta, jota on kerätty mutta ei mallinnettu." },
          { icon: <IconConsumer />, title: "Kuluttajatuotteet", body: "Kampanjaoptimointi, kanavakohtainen hinnoittelu ja pakkaus-hinta-arkkitehtuuri. Sopii erityisen hyvin, kun hallitset hinnoittelua useiden vähittäismyyjäkumppaneiden kesken." },
        ],
      }}
      deliverables={{
        subtitle: "Toimiva hinnoittelumalli tuotannossa, ei diaesitystä siitä, mikä voisi olla mahdollista.",
        items: [
          "Hinnoittelumallit rakennettuna teidän transaktiodatastanne ja liiketoimintasäännöistänne, ei valmiista pohjista",
          "Integraatio olemassa olevaan hinnoitteluvirtaan, ERP-järjestelmään tai kampanjajärjestelmään",
          "A/B-testikehys, jolla vaikutus vahvistetaan ennen täyttä käyttöönottoa",
          "Näkymät katteen, myyntimäärien ja mallin tarkkuuden seurantaan",
          "Jatkuva mallien uudelleenkoulutus ja tuki datan kertyessä",
        ],
        timelineBadge: "Pilotti 8–12 viikossa",
        timelineDesc: "Datan läpikäynnistä ensimmäisiin optimoituihin hintapäätöksiin tuotannossa",
      }}
      cta={{
        heading: "30 minuutissa tiedät, missä hinnoittelussa jää katetta saamatta",
        subtitle: "Varaa ilmainen keskustelu. Käymme hinnoittelutilanteesi läpi ja näytämme, mistä samankaltaiset yritykset löysivät katteen, jota eivät tienneet menettävänsä.",
        image: "/images/illustrations/DD-Illustration-2.png",
        secondaryLabel: "Katso kaikki ratkaisut",
        secondaryHref: "/fi/solutions",
      }}
    />
  );
}
