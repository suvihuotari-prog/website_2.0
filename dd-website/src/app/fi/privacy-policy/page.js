import { LegalArticle } from "@/components/LegalArticle";

export const metadata = {
  title: "Tietosuojaseloste | Data Design",
  description:
    "Miten Data Design Oy kerää, käyttää ja säilyttää henkilötietoja, kun käytät verkkosivustoamme.",
  alternates: {
    canonical: "/fi/privacy-policy",
    languages: { en: "/privacy-policy", fi: "/fi/privacy-policy" },
  },
};

const SECTIONS = [
  {
    title: "Keräämämme tiedot",
    body: [
      "Keräämme henkilötietoja kahdella tavalla. Ensinnäkin, kun vierailet verkkosivustollamme, käytämme Google Analyticsia kerätäksemme anonymisoitua tietoa, kuten käyttämäsi laitteen ja selaimen tyypin, yleisen sijaintisi (kuten maan), vierailemasi sivut ja vierailusi keston. Tämä auttaa meitä ymmärtämään, miten sivustoamme käytetään, ja parantamaan sen toimivuutta.",
      "Toiseksi, jos otat meihin yhteyttä yhteydenottolomakkeen kautta, keräämme antamasi tiedot, kuten nimesi, sähköpostiosoitteesi, yrityksesi nimen ja viestin sisällön. Nämä tiedot säilytetään turvallisesti asiakkuudenhallintajärjestelmässämme Pipedrivessä, ja niitä käytetään ainoastaan tiedusteluusi tai pyyntöösi vastaamiseen.",
      "Emme salli käyttäjien luoda tilejä tai jättää kommentteja sivustollemme, emmekä siksi kerää tai säilytä tällaisia tietoja.",
    ],
  },
  {
    title: "Käsittelyn tarkoitus ja oikeusperuste",
    body: [
      "Käsittelemme henkilötietoja kahteen päätarkoitukseen. Ensimmäinen on vastata yhteydenottolomakkeen kautta lähetettyihin tiedusteluihin. Toinen on analysoida sivuston käyttöä palveluidemme ja sivuston suorituskyvyn parantamiseksi.",
      "Käsittelyn oikeusperusteena on oikeutettu etumme ylläpitää tehokasta viestintää ja parantaa palveluitamme. Joissakin tapauksissa voimme myös tukeutua suostumukseesi EU:n yleisen tietosuoja-asetuksen (GDPR) mukaisesti.",
    ],
  },
  {
    title: "Evästeet",
    body: [
      "Verkkosivustomme käyttää evästeitä verkkoanalytiikan tukemiseen ja käyttökokemuksen parantamiseen. Evästeet ovat pieniä tekstitiedostoja, jotka tallennetaan laitteellesi ja joiden avulla voimme kerätä anonyymejä tilastoja ja varmistaa, että sivusto toimii tarkoitetulla tavalla. Joissakin tapauksissa sivustollemme upotettu kolmannen osapuolen sisältö (kuten videot tai kartat) voi myös tallentaa evästeitä laitteellesi. Voit hallita tai poistaa evästeitä selaimesi asetuksista milloin tahansa.",
    ],
  },
  {
    title: "Muilta sivustoilta upotettu sisältö",
    body: [
      "Tämän sivuston artikkelit voivat sisältää upotettua sisältöä (esim. videoita, kuvia, artikkeleita jne.). Muilta sivustoilta upotettu sisältö käyttäytyy täsmälleen samoin kuin jos vierailija olisi käynyt kyseisellä toisella sivustolla.",
      "Nämä sivustot voivat kerätä sinusta tietoja, käyttää evästeitä, upottaa kolmannen osapuolen lisäseurantaa ja seurata vuorovaikutustasi upotetun sisällön kanssa, mukaan lukien vuorovaikutuksesi seuraaminen, jos sinulla on tili kyseisellä sivustolla ja olet kirjautuneena siihen.",
    ],
  },
  {
    title: "Tietojen jakaminen ja siirrot",
    body: [
      "Voimme jakaa henkilötietojasi luotettujen palveluntarjoajien kanssa, jotka auttavat meitä ylläpitämään sivustoamme ja hoitamaan asiakassuhteita. Näihin kuuluvat Google Analytics verkkoanalytiikkaan ja Pipedrive yhteydenottopyyntöjen ja viestinnän hallintaan. Nämä palveluntarjoajat voivat käsitellä tietojasi Euroopan unionin tai Euroopan talousalueen ulkopuolella, mutta vain tiukkojen tietosuojatakeiden, kuten vakiosopimuslausekkeiden tai muiden asianmukaisten oikeudellisten mekanismien, mukaisesti GDPR:n edellyttämällä tavalla.",
    ],
  },
  {
    title: "Tietojen säilyttäminen",
    body: [
      "Säilytämme henkilötietoja vain niin kauan kuin on tarpeen tässä tietosuojaselosteessa kuvattujen tarkoitusten täyttämiseksi. Esimerkiksi yhteydenottolomakkeen kautta lähetetyt tiedot säilytetään enintään kahdentoista kuukauden ajan, ellei jatkuva viestintä ole tarpeen. Google Analyticsin kautta kerätyt tiedot säilytetään Googlen vakiosäilytysasetusten mukaisesti.",
    ],
  },
  {
    title: "Oikeutesi",
    body: [
      "GDPR:n mukaisena rekisteröitynä sinulla on oikeus pyytää pääsyä sinusta säilyttämiimme henkilötietoihin, oikeus pyytää virheellisten tietojen korjaamista ja oikeus pyytää henkilötietojesi poistamista. Sinulla voi myös olla oikeus vastustaa tietojesi käsittelyä tai pyytää kopio tiedoistasi yleisesti käytetyssä muodossa. Voit käyttää näitä oikeuksia ottamalla meihin yhteyttä alla annettujen tietojen avulla.",
    ],
  },
  {
    title: "Yhteystiedot",
    body: [
      "Jos sinulla on kysyttävää tästä tietosuojaselosteesta tai siitä, miten henkilötietojasi käsitellään, voit ottaa meihin yhteyttä sähköpostitse osoitteeseen info@datadesign.fi. Vastaamme mahdollisimman pian.",
    ],
  },
];

export default function PrivacyPolicyPageFi() {
  return (
    <LegalArticle
      badge="Tietosuoja"
      title="Tietosuojaseloste"
      effectiveDate="Voimassa alkaen: 1. kesäkuuta 2025"
      intro={'Data Design Oy ("me", "meidän") on sitoutunut suojaamaan yksityisyyttäsi. Tässä tietosuojaselosteessa kuvataan, miten keräämme, käytämme ja säilytämme henkilötietoja, kun käytät verkkosivustoamme osoitteessa https://datadesign.fi.'}
      sections={SECTIONS}
    />
  );
}
