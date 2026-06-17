"use client";

import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

export default function SolutionIntelligentOperationsFi() {
  return (
    <SolutionSubpageTemplate
      locale="fi"
      hero={{
        breadcrumbLabel: "Ennakoiva operatiivinen toiminta & toimitusketju",
        badge: "Ennakoiva operatiivinen toiminta & toimitusketju",
        title: "Toimintamme on reaktiivista. Löydämme ongelmat vasta kun ne iskevät",
        subtitle: "Sammutat tulipaloja sen sijaan, että ehkäisisit niitä. Toimittajien viiveet, laiterikot tai varastojen sokeat pisteet. Tiimisi voisi tietää ongelmista päiviä ennen kuin ne iskevät, ei tunteja jälkeen.",
      }}
      challenge={{
        subtitle: "Reaktiivinen toiminta maksaa enemmän, jättää mahdollisuuksia käyttämättä ja polttaa parhaita ihmisiäsi. Data tämän ehkäisyyn on jo olemassa. Sitä vain ei käytetä.",
        items: [
          { title: "Yllätyksiä jotka olisi pitänyt nähdä tulossa", body: "Laiterikkoja, toimittajien viiveitä, kysyntäpiikkejä. Tiimisi saa tietää, kun se on jo kriisi. Siihen mennessä korjauksen kustannus on moninkertaistunut ja vaihtoehdot kapeutuneet." },
          { title: "Varastopäätökset keskiarvojen perusteella", body: "Varastoidaan liikaa sitä mikä ei myy, liian vähän sitä mikä myy. Keskiarvopohjainen täydennys ohittaa kuviot, jotka piilevät datassasi. Ja liikevaihdon joka piilee niissä kuvioissa." },
          { title: "Manuaalinen valvonta, joka ei kasva tarpeiden mukana", body: "Operatiivinen tiimisi tuijottaa koontinäyttöjä ja taulukoita toivoen huomaavansa poikkeavuudet. Tuo lähestymistapa ei toimi laajassa mittakaavassa eikä pysty tunnistamaan hienovaraisia signaaleja, jotka ennustavat huomisen ongelmia." },
        ],
      }}
      steps={{
        subtitle: "Reaktiivisesta tulipalojen sammuttamisesta ennakoivaan ennaltaehkäisyyn. Systemaattinen lähestymistapa, joka todistaa arvon yhdellä alueella, ja laajenee sitten koko toimintasi kattavaksi.",
        items: [
          { step: "1", title: "Operatiivinen datasi arvioituna", desc: "Operatiivinen datasi. Toimitusketju, laitteet, logistiikka, varasto. Analysoidaan tunnistaaksemme missä ennustemallit voivat ehkäistä kalleimmat yllätykset. Näet tarkalleen missä suurimmat riskit ja mahdollisuudet ovat." },
          { step: "2", title: "Ennustemallisi rakennettuina", desc: "Mallit räätälöidään toiminnoillesi: toimitusajan ennustaminen, kysynnän ennustaminen, poikkeavuuksien tunnistus, ennakoiva kunnossapito. Rakennettu datallesi, tarkistettu toimintaympäristöäsi vasten." },
          { step: "3", title: "Operatiivinen tiimisi varustettuna", desc: "Mallit syöttävät suoraan olemassa oleviin työkaluihisi ja päätöksentekoprosesseihisi. Hälytyksiä, seurantanäkymiä ja suosituksia, joiden perusteella tiimisi voi toimia heti. Ei uusia järjestelmiä opeteltavaksi." },
          { step: "4", title: "Lähestymistapasi laajennettu", desc: "Kun arvo on todistettu yhdellä alueella, lähestymistapa laajenee yli liiketoimintayksiköiden ja maantieteiden. Rakennat systemaattista ennakoivan toiminnan kyvykkyyttä, ei kertaluonteista projektia." },
        ],
      }}
      results={{
        subtitle: "Operatiivisia tiimejä jotka siirtyivät reagoinnista ennaltaehkäisyyn. Mitattavin vaikutuksin.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Metso" tag="Teollisuuslaitteet"
              description="30 % parempi toimitusajan ennustaminen toimittajille. 10 % parannus tilausta-toimitukseen arvioissa. Ratkaisu alkoi pilottina ja laajeni viiteen globaaliin tiimiin organisaatiossa."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="NTG" logo="/images/logos/NTG_BW.png" logoHeight={22} tag="Tukkukauppa & jakelu"
              description="Menetettyjen myyntien analyysi paljasti potentiaalin saada takaisin 65 % aiemmin menetetystä liikevaihdosta. Theory of Constraints -pohjainen varaston täydennysmalli. Älykkäämmät varastopäätökset todellisten kysyntäkuvioiden pohjalta."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Neste" tag="Energia & kemia"
              description="Potentiaali lieventää 14 miljoonan euron jakeluvelvoiteraportoinnin riskejä. Datavetoinen lähestymistapa regulaatiovalvontaan koko organisaatiossa."
            />
          </Reveal>
        </>,
        footnote: "Tiimin tausta: H&M. Tiimin jäsenet johtivat tekoälypohjaista toimitusketjun päätöksentukijärjestelmää, joka tuotti yli 200 miljoonan euron liikevaihtovaikutuksen. Eniram. 1–3 % polttoainekustannussäästö suurille merialuksille, mikä vastaa miljoonia euroja vuodessa.",
      }}
      deliverables={{
        subtitle: "Siirryt tulipalojen sammuttamisesta ehkäisyyn. Malleilla jotka oppivat kun lisää dataa kertyy.",
        items: [
          "Viat ennustetaan ennen kuin ne aiheuttavat seisokkia",
          "Menetetty liikevaihto napattu älykkäämmin varastopäätöksin",
          "Siirtymä reaktiivisesta tulipalojen sammutuksesta proaktiiviseen ennaltaehkäisyyn",
          "Mallit, jotka paranevat jatkuvasti uuden datan myötä",
          "Integraatio olemassa oleviin operatiivisiin työkaluihin ja seurantanäkymiin",
        ],
        timelineBadge: "Analyysi + ensimmäinen malli 8–12 viikossa",
        timelineDesc: "Data-arvioinnista käyttöönotettuun ennustemalliin",
      }}
      cta={{
        heading: "30 minuutissa tiedät, missä ennakoiva tekoäly voi estää kalleimmat yllätyksesi",
        subtitle: "Varaa ilmainen keskustelu. Saat selvyyden operatiivisista riskeistänne ja näet miten muut yritykset siirtyivät reaktiivisesta ennakoivaan.",
        image: "/images/illustrations/DD-Illustration-2.png",
        secondaryLabel: "Katso kaikki ratkaisut",
        secondaryHref: "/fi/solutions",
      }}
    />
  );
}
