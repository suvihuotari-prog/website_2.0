/**
 * URL-käännöskartta englannin ja suomen välillä.
 *
 * Lisää jokainen sivu tähän kun sitä luodaan molemmilla kielillä.
 * Kielenvaihtaja Navbarissa lukee tämän kartan ja vie käyttäjän
 * suoraan saman sisällön vastaavalle kieliversiolle.
 */

// EN-polku → FI-polku
const EN_TO_FI = {
  // Etusivu
  "/": "/fi",

  // Pääsivut
  "/services": "/fi/services",
  "/solutions": "/fi/solutions",
  "/customer-stories": "/fi/customer-stories",
  "/insights": "/fi/insights",
  "/company/about": "/fi/company/about",
  "/company/careers": "/fi/company/careers",
  "/company/contact": "/fi/company/contact",
  "/privacy-policy": "/fi/privacy-policy",

  // Solutions-alasivut (sama slug molemmissa kielissä)
  "/solutions/ai-strategy": "/fi/solutions/ai-strategy",
  "/solutions/ai-accelerator": "/fi/solutions/ai-accelerator",
  "/solutions/ai-native-transformation": "/fi/solutions/ai-native-transformation",
  "/solutions/customer-intelligence": "/fi/solutions/customer-intelligence",
  "/solutions/data-governance": "/fi/solutions/data-governance",
  "/solutions/genai-automation": "/fi/solutions/genai-automation",
  "/solutions/intelligent-operations": "/fi/solutions/intelligent-operations",
  "/solutions/pricing-optimization": "/fi/solutions/pricing-optimization",
  "/solutions/inrecipe": "/fi/solutions/inrecipe",

  // Careers-alasivut
  "/company/careers/senior-data-analyst": "/fi/company/careers/senior-data-analyst",

  // ─────────────────────────────────────────────
  // Insights-artikkelit (sama slug molemmissa kielissä)
  // ─────────────────────────────────────────────
  "/insights/clarifying-data-ownership": "/fi/insights/clarifying-data-ownership",
  "/insights/ai-requires-persistence": "/fi/insights/ai-requires-persistence",
  "/insights/ai-strategies-outside-comfort-zone": "/fi/insights/ai-strategies-outside-comfort-zone",
  "/insights/better-project-decisions-with-data": "/fi/insights/better-project-decisions-with-data",
  "/insights/data-strategy-into-business-growth": "/fi/insights/data-strategy-into-business-growth",
  "/insights/unified-data-management-for-ai": "/fi/insights/unified-data-management-for-ai",
  "/insights/smarter-discount-pricing-with-ml": "/fi/insights/smarter-discount-pricing-with-ml",
  "/insights/taking-personalization-to-production": "/fi/insights/taking-personalization-to-production",
  "/insights/ai-pricing-used-cars": "/fi/insights/ai-pricing-used-cars",
  "/insights/making-data-speak-your-language": "/fi/insights/making-data-speak-your-language",
  "/insights/ai-powered-prospecting": "/fi/insights/ai-powered-prospecting",
  "/insights/five-truths-about-ai-strategies": "/fi/insights/five-truths-about-ai-strategies",
  "/insights/smart-ai-innovation-portfolio": "/fi/insights/smart-ai-innovation-portfolio",
  "/insights/updated-brand": "/fi/insights/updated-brand",
  "/insights/expands-to-india": "/fi/insights/expands-to-india",
  "/insights/mm-growth-partners": "/fi/insights/mm-growth-partners",

  // ─────────────────────────────────────────────
  // Asiakastarinat (eri slug eri kielillä — Webflow-perintö)
  // ─────────────────────────────────────────────
  "/customer-stories/anora-master-data-governance-model":
    "/fi/customer-stories/anora-tehostaa-liiketoimintaa-paremmalla-tiedonhallinnalla",

  "/customer-stories/ai-driven-innovation-accelerates-product-development":
    "/fi/customer-stories/tekoaly-vauhdittaa-tuotekehitysta-sandvikilla",

  "/customer-stories/helen-establishes-clear-data-ownership-to-drive-energy-innovation":
    "/fi/customer-stories/helen-loi-selkean-datan-omistajuusmallin-energiainnovaatioiden-tueksi",

  "/customer-stories/a-unified-customer-memory-for-sales-and-project-teams-with-genai":
    "/fi/customer-stories/a-insinoorit-sai-yhteisen-asiakasmuistin-myynti-ja-projektitiimeille",

  "/customer-stories/haaga-helias-sales-teams-took-ai-into-their-daily-work-with-practical-training":
    "/fi/customer-stories/haaga-helian-myyntitiimit-ottivat-tekoalyn-arjen-tyokaluksi-kaytannonlaheisella-valmennuksella",

  "/customer-stories/kss-energia-clarifies-data-governance-and-connects-data-to-the-business":
    "/fi/customer-stories/kss-energia-selkeyttaa-datanhallinnan-ja-kytkee-datan-osaksi-liiketoimintaa",

  "/customer-stories/kss-energia-prioritizes-data-investments-and-builds-a-path-toward-a-data-driven-operating-model":
    "/fi/customer-stories/kss-energia-priorisoi-datainvestoinnit-ja-rakentaa-polun-datavetoiseen-toimintamalliin",

  "/customer-stories/machine-manufacturer-achieves-better-lead-time-predictions-with-ai":
    "/fi/customer-stories/konevalmistaja-otti-toimitusajat-haltuun-tekoalylla",

  "/customer-stories/mhyp-strengthens-data-collaboration-with-a-unified-data-governance-model":
    "/fi/customer-stories/mhyp-vahvistaa-datayhteistyota-yhtenaisilla-data-governance-periaatteilla",

  "/customer-stories/sarlin-enhances-operations-with-clear-digitalization-strategy":
    "/fi/customer-stories/sarlin-tehostaa-toimintaa-selkealla-digitalisaatiostrategialla",

  "/customer-stories/tokmanni-increases-customer-store-visits-and-sales-with-personalized-recommendations":
    "/fi/customer-stories/tokmanni-sai-asiakkaat-liikkeelle-raataloidyilla-tarjouksilla",

  "/customer-stories/utility-company-mitigates-eu10m-risk-with-better-data-governance":
    "/fi/customer-stories/energiayhtio-vahvisti-tiedonhallintaa-toimitusketju-tehostui",

  "/customer-stories/veikkaus-plans-ai-future-to-boost-revenue-and-efficiency":
    "/fi/customer-stories/veikkaus-panostaa-tekoalyyn-tavoitteena-kasvu-ja-tehostaminen",

  "/customer-stories/viestimedia-drives-customer-centric-growth-with-new-data-strategy":
    "/fi/customer-stories/viestimedia-rakentaa-asiakaslahtoista-kasvua-uudella-datastrategialla",

  "/customer-stories/wholesaler-targets-lost-revenue-with-inventory-strategy":
    "/fi/customer-stories/menetettyjen-kauppojen-analyysi-paljasti-miljoonien-potentiaalin",
};

// Käännetään käänteinen kartta automaattisesti (FI → EN)
const FI_TO_EN = Object.fromEntries(
  Object.entries(EN_TO_FI).map(([en, fi]) => [fi, en])
);

/**
 * Etsi annetun URL-polun käännös toiselle kielelle.
 *
 * @param {string} pathname - Nykyinen URL-polku
 * @param {"en" | "fi"} targetLang - Kohdekieli
 * @returns {string} Käännetty URL-polku, tai juuri jos käännöstä ei löydy
 */
export function translatePath(pathname, targetLang) {
  // Jos olemme jo oikealla kielellä, palauta sama polku
  const currentIsFi = pathname.startsWith("/fi");
  if (targetLang === "fi" && currentIsFi) return pathname;
  if (targetLang === "en" && !currentIsFi) return pathname;

  // Etsi käännös taulukosta
  if (targetLang === "fi") {
    return EN_TO_FI[pathname] || "/fi";
  } else {
    return FI_TO_EN[pathname] || "/";
  }
}
