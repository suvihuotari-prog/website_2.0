"use client";

import { C, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { ToolPreviewCard } from "@/components/ToolPreviewCard";
import { SolutionSubpageTemplate } from "@/components/SolutionSubpageTemplate";

const COMPARISON_ROWS = [
  { left: "\"Mistä aloitamme tekoälyn kanssa?\"", right: "\"Miten meistä tulee tekoäly-natiivi organisaatio?\"" },
  { left: "Sopii organisaatioille tasolla 0–1", right: "Sopii organisaatioille tasolla 1–2, jotka ovat valmiita laajentamaan" },
  { left: "Tunnistaa ensimmäiset korkean vaikutuksen käyttötapaukset", right: "Yhdistää aiemmat voitot koko organisaation laajuiseksi suunnitelmaksi" },
  { left: "Priorisoitu käyttötapausportfolio", right: "Täydellinen muutostiekartta teknologian, datan, ihmisten ja prosessien yli" },
  { left: "Fokus: mitä rakentaa ensin", right: "Fokus: miten koko organisaatiosi toimii tekoälyn kanssa" },
  { left: "6–8 viikkoa", right: "8–12 viikkoa" },
  { left: "Johtoryhmävalmis ensimmäinen projektiehdotus", right: "Johtoryhmävalmis monivuotinen muutosinvestointiperustelu" },
];

export default function SolutionAINativeTransformationFi() {
  return (
    <SolutionSubpageTemplate
      locale="fi"
      hero={{
        breadcrumbLabel: "Tekoäly-natiivin muutoksen suunnitelma",
        badge: "Tekoäly-natiivin muutoksen suunnitelma",
        title: "Olemme todistaneet että tekoäly toimii. Miten siitä tehdään koko yrityksen toimintatapa?",
        subtitle: "Pilotit on ajettu, ensimmäiset voitot saavutettu, ja nyt johto kysyy mitä seuraavaksi. Tarvitset suunnitelman, joka vie tekoälyn yksittäisistä projekteista organisaatiosi toimintamalliksi. Yksiköiden, datan ja päätösprosessien läpi.",
      }}
      challenge={{
        subtitle: "Muutamasta tekoälyvoitosta tekoäly-natiiviin organisaatioon eteneminen on perustavasti erilainen haaste kuin liikkeellelähtö. Teknologia on helppo osa. Todelliset esteet ovat ihmiset, prosessit ja se, miten päätökset tehdään.",
        items: [
          { title: "Tekoälyvoitot, jotka eivät yhdisty isompaan kuvaan", body: "Käytössäsi on onnistuneita pilotteja ja projekteja, mutta ne ovat irrallaan. Eri tiimit, eri työkalut, eri lähestymistavat. Jokainen toimii, mutta yhdessä ne eivät muodosta muutosta. Kukaan ei omista kokonaista tekoälykyvykkyyttä, eikä ole prosessia päättää mitä seuraavaksi rakennetaan." },
          { title: "Organisaatiosi ei ole rakennettu pyörittämään tekoälyä laajasti", body: "Kuka hallinnoi malleja lanseerauksen jälkeen? Kuka päättää mitkä prosessit automatisoidaan seuraavaksi? Miten käsitellään roolit, jotka muuttuvat kun tekoäly ottaa osan työstä? Organisaatiokaavio, päätösoikeudet ja työtavat, jotka veivät teidät tähän, eivät vie teitä tekoäly-natiiviin." },
          { title: "Perustat, jotka olivat valinnaisia yhdelle projektille, estävät nyt kymmentä", body: "Data governance, alustaarkkitehtuuri, muutosjohtaminen, tekoälylukutaito liiketoiminnassa. Asiat, jotka pystyit kiertämään yhdellä pilotilla, muuttuvat koviksi esteiksi kun yrität viedä tekoälyn koko organisaatioon. Teknologia on valmis. Organisaatiosi ei. Vielä." },
        ],
      }}
      steps={{
        subtitle: "Kattava muutossuunnitelma, joka kattaa neljä ulottuvuutta: teknologia, data, ihmiset ja prosessit. Toimitetaan tyypillisesti 8–12 viikossa. Tekoäly-natiiviksi tuleminen on organisaatiomuutos, ei vain teknologiaprojekti.",
        items: [
          { step: "1", title: "Nykytilasi arvioituna kaikilla neljällä ulottuvuudella", desc: "Jokainen tekoälyhanke, data-assetti, organisaatiokyvykkyys ja liiketoimintaprosessi kartoitetaan tekoälyn neljää kypsyystasoa vasten. Teknologian valmius on vain yksi akseli. Arvioimme ihmisesi (taidot, roolit, päätösoikeudet), prosessisi (miten työ etenee, missä tekoäly sopii) ja kulttuurisi (miten organisaatiosi oppii ja sopeutuu) yhtä tarkasti. Näet tarkalleen missä olet, et missä luulet olevasi." },
          { step: "2", title: "Tavoitetoimintamallisi määriteltynä", desc: "Yhdessä johtoryhmäsi kanssa määrittelemme miltä tekoäly-natiivi näyttää juuri sinun organisaatiossasi. Ei vain mitä prosesseja tekoäly pyörittää, vaan miten päätökset tehdään, mitkä roolit muuttuvat, miten tiimit tekevät yhteistyötä tekoälyn kanssa ja mitä uusia kyvykkyyksiä pitää rakentaa sisäisesti. Tästä tulee pohjatähtesi." },
          { step: "3", title: "Muutossuunnitelmasi rakennettuna kaikkien ulottuvuuksien yli", desc: "Vaiheittainen tiekartta, joka kattaa koko kuvan: mitä tekoälyratkaisuja rakennetaan ja milloin, mitä data- ja alustaperustoja pitää asettaa paikoilleen, miten organisaatiorakenteesi ja roolisi kehittyvät, mitä kyvykkyyksiä rakennetaan vs. ostetaan ja miten muutosta hallitaan niin, että ihmiset omaksuvat sen eivätkä vastusta sitä. Jokainen vaihe todistaa arvon ennen kuin sijoitat seuraavaan." },
          { step: "4", title: "Organisaatiosi yhtenäisenä ja rahoitettuna", desc: "Suunnitelma käännetään kielelle, jota johtosi tarvitsee: investointiperusteet, riskiarviointi, kyvykkyysvaatimukset ja selkeät virstanpylväät. Mukaan tulee myös se, mikä muuttuu ihmisillesi, miten hallitset siirtymää ja kuka omistaa mitä. Johtoryhmäsi on yhtä mieltä koko kuvasta, ei vain teknologiasta." },
        ],
      }}
      comparison={{
        heading: "Mitä tämä kattaa, mitä strategia-sprintti ei kata",
        subtitle: "Tekoälystrategia-sprintti löytää aloituspisteesi. Muutossuunnitelma kartoittaa koko matkan.",
        children: <>
          <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, border: `1px solid ${C.border}`, overflow: "hidden" }}>
            <div className="dd-comparison-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: `1px solid ${C.border}` }}>
              <div style={{ padding: "20px 24px", background: C.gray }}>
                <h4 style={{ fontSize: 15, fontWeight: 600 }}>Tekoälystrategia-sprintti</h4>
              </div>
              <div style={{ padding: "20px 24px", background: C.lemon }}>
                <h4 style={{ fontSize: 15, fontWeight: 600 }}>Tekoäly-natiivin muutoksen suunnitelma</h4>
              </div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div key={i} className="dd-comparison-row" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                borderBottom: i < COMPARISON_ROWS.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <div style={{ padding: "16px 24px", fontSize: 14, lineHeight: 1.55, color: C.textMuted }}>{row.left}</div>
                <div style={{ padding: "16px 24px", fontSize: 14, lineHeight: 1.55, color: C.black, fontWeight: 500, background: `${C.lemon}22` }}>{row.right}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic", marginTop: 20 }}>
            Monet organisaatiot aloittavat tekoälystrategia-sprintillä ja palaavat muutossuunnitelmaan kun ovat todistaneet arvon ensimmäisillä projekteillaan. Toiset menevät suoraan muutossuunnitelmaan jos heillä on jo vauhti päällä.
          </p>
        </>,
      }}
      results={{
        subtitle: "Organisaatioita, jotka siirtyivät ensimmäisistä tekoälyvoitoista koko organisaation laajuiseen muutokseen.",
        children: <>
          <Reveal delay={0.05}>
            <CaseCard company="Helen" logo="/images/logos/Helen_BW.png" logoHeight={22} tag="Energia"
              description="Aloitettiin tekoälystrategia-sprintillä, joka varmisti johdon hyväksynnän ja rahoituksen. Sen jälkeen laajennettiin kattavaan ohjelmaan. Tekoäly-tiekartta, data governance linjattuna liiketoimintaprosesseihin ja datan omistajuusmalli omaksuttu organisaatiossa. Tekoäly siirtyi pilottihankkeesta upotetuksi kyvykkyydeksi."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <CaseCard company="Sandvik" logo="/images/logos/Sandvik_BW.png" logoHeight={20} tag="Teollisuus"
              description="Yli 500 tekoälyideaa kavennettiin 60 korkean vaikutuksen käyttötapaukseen, joille laadittiin selkeä tekoälyvetoisen kasvun tiekartta. Yhtenäinen arviointiviitekehys, jota organisaatio käyttää itsenäisesti edelleen. Sisäistä kyvykkyyttä rakennettu muutoksen ylläpitämiseksi projektin jälkeen."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <CaseCard company="Elisa" logo="/images/logos/Elisa_BW.png" logoHeight={22} tag="Telekommunikaatio"
              description="Yli 60 datatuoteideaa arvioitu neljältä liiketoiminta-alueelta. Datastrategia selkein omistajuuksin ja priorisoinnein. Yksittäiset mahdollisuudet yhdistettiin johdonmukaiseksi koko yrityksen laajuiseksi suunnitelmaksi."
            />
          </Reveal>
        </>,
        footnote: "Tiimin tausta: asiantuntijamme ovat johtaneet tekoälymuutoksia H&M:llä (yli 200 miljoonan euron liikevaihtovaikutus), rakentaneet tekoälyn toimintamalleja Silo AI:lla ja muotoilleet yritystason datastrategioita Deloittella.",
      }}
      tools={{
        subtitle: "Muutossuunnitelmasi rakentuu todistetuille malleille, ei tyhjälle paperille.",
        children: <>
          <Reveal delay={0.05}>
            <ToolPreviewCard name="DataDesigner.AI" description="Tekoälykypsyysarviointisi ja mahdollisuusmaisemasi luonnostellaan tunneissa. Työkalu kartoittaa liiketoimintaprosessisi tekoälymahdollisuuksiin kaikilla neljällä kypsyystasolla, joten projektiaika kuluu strategisiin päätöksiin eikä datan keräämiseen." accent={C.lemon} />
          </Reveal>
        </>,
      }}
      deliverables={{
        subtitle: "Siirryt \"tekoäly toimii muutamassa paikassa\" -tilanteesta \"tässä tarkalleen miten tekoälystä tulee toimintatapamme\". Suunnitelmalla, jonka johtoryhmäsi rahoittaa ja organisaatiosi voi toteuttaa.",
        groups: [
          {
            label: "Teknologia & data",
            items: [
              "Tekoälyn kypsyysarviointi kaikkien liiketoiminta-alueiden yli",
              "Vaiheittainen tekoälyratkaisujen tiekartta priorisoiduin käyttötapauksin",
              "Data governance- ja alusta-arkkitehtuurivaatimukset",
            ],
          },
          {
            label: "Ihmiset & organisaatio",
            items: [
              "Tavoitetoimintamalli: roolit, päätösoikeudet, tiimirakenteet tekoäly-natiivia toimintaa varten",
              "Kyvykkyyssuunnitelma: mitä rakennetaan sisäisesti, mitä palkataan, mitä kumppanuussopimuksin",
              "Muutosjohtamisen lähestymistapa: miten tuot ihmisesi mukaan, et jätä heitä jälkeen",
            ],
          },
          {
            label: "Strategia & investointi",
            items: [
              "Tavoitetilan määritelmä tekoäly-natiivia toimintaa varten",
              "Johtoryhmävalmis investointiperustelu monivuotisin ROI:in",
              "Selkeä omistajuus, virstanpylväät ja onnistumismittarit kullekin vaiheelle",
            ],
          },
        ],
        timelineBadge: "8–12 viikkoa",
        timelineDesc: "Kypsyysarvioinnista johtoryhmävalmiiseen muutossuunnitelmaan",
      }}
      related={{
        subtitle: "Muutossuunnitelma yhdistyy laajempaan tekoälymatkaasi.",
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
                  Tiedämme että tekoäly on tärkeää. Mutta mistä aloitamme?
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, marginBottom: 16 }}>
                  Jos olet aikaisemmin matkallasi, aloita täältä. Löydä ensimmäinen korkean vaikutuksen käyttötapaus ja todista arvo ennen kuin suunnittelet täyttä muutosta.
                </p>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.seawave }}>Lue lisää →</span>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="/fi/solutions/data-governance" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div className="dd-hover-lift" style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
                border: `1px solid ${C.border}`, height: "100%",
              }}>
                <span style={{
                  display: "inline-block", padding: "5px 14px", borderRadius: 100,
                  border: `1px solid ${C.border}`, fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.06em", color: `${C.black}99`,
                  marginBottom: 16,
                }}>Data Governance & laatu</span>
                <h3 style={{ fontSize: 19, fontWeight: 500, marginBottom: 10, lineHeight: 1.35, letterSpacing: "-0.01em" }}>
                  Kukaan ei omista dataamme ja se hidastaa kaikkea
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, marginBottom: 16 }}>
                  Governance on jokaisen tekoäly-natiivin muutoksen perusta. Jos datan omistajuus on esteesi, aloita täältä.
                </p>
                <span style={{ fontSize: 14, fontWeight: 500, color: C.seawave }}>Lue lisää →</span>
              </div>
            </a>
          </Reveal>
        </>,
      }}
      cta={{
        heading: "30 minuutissa tiedät, onko organisaatiosi valmis tekoäly-natiivin muutoksen suunnitelmaan",
        subtitle: "Varaa ilmainen keskustelu. Saat rehellisen arvion siitä, missä seisotte ja mitä vaatisi siirtyä ensimmäisistä tekoälyvoitoista tekoäly-natiiviin organisaatioon.",
        image: "/images/illustrations/DD-Illustration-2.png",
        secondaryLabel: "Katso kaikki ratkaisut",
        secondaryHref: "/fi/solutions",
      }}
    />
  );
}
