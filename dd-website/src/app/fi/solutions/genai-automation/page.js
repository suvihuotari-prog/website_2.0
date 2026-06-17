"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionGenAIAutomationFi() {
  return (
    <SolutionSubpageTemplate
      locale="fi"
      hero={{
        breadcrumbLabel: "GenAI & prosessiautomaatio",
        badge: "GenAI & prosessiautomaatio",
        frameworkBadge: "Vauhditettuna omilla tekoälytyökaluillamme. Text2SQL, Auto Data Catalog",
        title: "Hukumme manuaaliseen työhön, jonka tekoäly voisi tehdä",
        subtitle: "Ihmiset käyttävät tunteja tehtäviin, jotka pitäisi tehdä minuuteissa. Dokumenttien käsittely, raporttien valmistelu, datakysymyksiin vastaaminen. Tuo työ voidaan tehdä automaattisesti, ja tiimisi voi keskittyä päätöksiin, jotka oikeasti tarvitsevat ihmistä.",
      }}
      challenge={{
        subtitle: "Tiimisi aikaa syövät rutiinityöt, jotka noudattavat selkeitä kaavoja. Juuri sellaisia töitä, joissa GenAI loistaa.",
        items: [
          { title: "Tunteja menetetty dokumenttien käsittelyyn", body: "PDF:t, laboratorioraportit, laskut, viranomaisilmoitukset. Tiimisi poimii manuaalisesti dataa dokumenteista, jotka koneiden pitäisi lukea automaattisesti. Jokainen tähän käytetty tunti on tunti pois työstä, jolla on väliä." },
          { title: "Liiketoimintakäyttäjät lukittu pois omasta datastaan", body: "Jokainen datakysymys vaatii tiketin IT:lle tai SQL-osaavalle analyytikolle. Kun vastaus saapuu, päätöksen hetki on jo mennyt, ja tiimisi on oppinut olemaan kysymättä." },
          { title: "Taitavat ihmiset toistuvassa työssä", body: "Parhaat ihmiset käyttävät merkittävästi aikaa tehtäviin, jotka toistuvat ennustettavasti. Se on kallista kapasiteettia, jonka pitäisi keskittyä harkintaan, strategiaan ja ongelmiin, joita vain ihmiset voivat ratkaista." },
        ],
      }}
      steps={{
        subtitle: "Toimiva prototyyppi viikoissa, tuotantokäyttöönotto kunnollisilla suojakaiteilla ja tiimisi koulutettuna laajentamaan ratkaisuja itsenäisesti.",
        items: [
          { step: "1", title: "Vaikuttavimmat prosessisi tunnistettuna", desc: "Manuaaliset prosessisi kartoitetaan ja järjestetään volyymin, monimutkaisuuden ja liiketoiminta-arvon mukaan. Niin että automaatio alkaa sieltä missä se tekee suurimman eron, ei sieltä missä se on helpointa." },
          { step: "2", title: "Ratkaisusi nopeasti prototyyppinä", desc: "Toimivat demonstraatiot rakennetaan viikoissa omilla työkaluilla ja viitekehyksillä. Tiimisi näkee tulokset varhaisessa vaiheessa, ei kuukausien kehityksen jälkeen." },
          { step: "3", title: "Ratkaisusi tuotannossa suojakaiteilla", desc: "Prototyypistä tuotantoon datan turvallisuudella, pääsynvalvonnalla, virheenkäsittelyllä ja integraatiolla olemassa oleviin järjestelmiisi. Rakennettu toimimaan luotettavasti, ei vain demoamaan hyvin." },
          { step: "4", title: "Tiimisi varustettuna laajentamaan sitä", desc: "Tiimisi koulutetaan käyttämään ja laajentamaan ratkaisuja. Seuraavat automatisoitavat prosessit tunnistetaan, ja rakennetaan jatkuvan parannuksen kierros, jonka omistat." },
        ],
      }}
      results={{
        subtitle: "Manuaalisia tunteja vapautettu, dataa avattu laajemmalle käyttöön ja mitattavaa liiketoimintavaikutusta tuotettu.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Solar Foods" logo="/images/logos/SolarFoods_BW.jpg" logoHeight={24} tag="Elintarviketeknologia"
              description="Automatisoitu laboratorioraporttien käsittely. PDF strukturoiduksi dataksi minuuteissa tuntien sijaan. EFSA-regulaatiovalvontajärjestelmä joka seuraa compliance-vaatimuksia automaattisesti, poistaen manuaalisen seurannan."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="KTI Kiinteistötieto" tag="Kiinteistödata"
              description="Text2SQL käyttöön kiinteistömarkkinadataan. Luonnollisen kielen kyselyt upotettu suoraan olemassa olevaan asiakasportaaliin. Kuka tahansa voi kysyä monimutkaisesta datasta ilman SQL:ää. Päätökset tapahtuvat nopeammin."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Viestimedia" logo="/images/logos/Viestimedia_BW.png" logoHeight={20} tag="Media"
              description="38% parannus asiakashankinnassa, 37% kustannussäästö, 16% CPC-lasku. Tekoälypohjainen markkinointioperaatioiden optimointi mitattavin kaupallisin vaikutuksin."
              quote="Yhteistyö Data Designin kanssa antoi meille selkeän suunnan datan käyttöön kasvun tukena. Strategia ja tiekartta keskittyvät oikeisiin liiketoimintatarpeisiin."
              quoteName="Taru Salo"
              quoteTitle="Head of Digital Development, Viestimedia"
            />
          </Reveal>
        </>,
      }}
      tools={{
        subtitle: "Automaatioprojektisi etenee nopeammin koska ydinteknologia on jo rakennettu ja tuotantotestattu.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="Text2SQL" description="Kuka tahansa tiimissäsi voi kysyä datasta. Arkikielellä. Tuotantokäytössä KTI Kiinteistötiedolla. Luonnollisen kielen SQL-generointi turvallisilla rooleihin perustuvilla pääsynvalvonnoilla jotka upotetaan olemassa oleviin portaaleihin ja sovelluksiin." accent={C.turquoise} />
          </Reveal>
          <Reveal delay={0.1}>
            <ToolPreviewCard name="Auto Data Catalog" description="Data-assettisi dokumentoituna automaattisesti. Ei manuaalista työtä. Luo liiketoimintaystävällisiä kuvauksia lukemalla metadatan työkaluista kuten Power BI. Tiimisi ymmärtää, mitä dataa on olemassa ja miten sitä käyttää, ilman viikkojen dokumentointityötä." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "Siirryt \"hukumme manuaaliseen työhön\" -tilanteesta \"toistuva on automatisoitu ja tiimimme keskittyy siihen, millä on väliä\" -tilaan.",
        items: [
          "Dokumentit käsitellään automaattisesti, ei manuaalisesti",
          "Datan pääsy arkikielellä. Ei SQL-taitoja tarvita",
          "Tunteja manuaalista työtä pelkistetty minuuteiksi",
          "Tuotantovalmiit ratkaisut kunnollisilla suojakaiteilla",
          "Tiimisi koulutettuna laajentamaan ja ylläpitämään ratkaisuja",
        ],
        timelineBadge: "Toimiva prototyyppi 4–6 viikossa",
        timelineDesc: "Prosessikartoituksesta ensimmäiseen automatisoituun työnkulkuun",
      }}
      cta={{
        heading: "30 minuutissa tiedät, mitkä manuaaliset prosessit pitäisi automatisoida ensin",
        subtitle: "Varaa ilmainen keskustelu. Saat selvyyden vaikuttavimmista automaatiomahdollisuuksistanne ja näet mitä GenAI:lla on tänään mahdollista.",
        image: "/images/illustrations/DD-Illustration-1.png",
        secondaryLabel: "Katso kaikki ratkaisut",
        secondaryHref: "/fi/solutions",
      }}
    />
  );
}
