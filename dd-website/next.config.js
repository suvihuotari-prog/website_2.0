/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();
const createNextIntlPlugin = require("next-intl/plugin");

// next-intl plugin: viittaa request-konfiguraatioon
const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

/**
 * 301-redirectit vanhoista Webflow-URLeista nykyisiin URLeihin.
 *
 * Jokaista vanhaa URLia kohti yksi pari: source (Webflow), destination (nyt).
 * permanent: true → 301 (SEO-arvo siirtyy uuteen URLiin muutamassa viikossa).
 *
 * Lähde: Webflow-sitemap (2025–2026). Kun lisäät uuden sivun ja vanha URL
 * on indeksoitu Googlessa, lisää tähän.
 */
const WEBFLOW_REDIRECTS = [
  // ─────────────────────────────────────────────
  // EN-pääsivut
  // ─────────────────────────────────────────────
  { source: "/our-services", destination: "/services", permanent: true },
  { source: "/service", destination: "/services", permanent: true },
  { source: "/team-and-career", destination: "/company/about", permanent: true },
  { source: "/contact-us", destination: "/company/contact", permanent: true },
  { source: "/ai-labs", destination: "/services", permanent: true },
  { source: "/dd-labs", destination: "/services", permanent: true },
  { source: "/policy", destination: "/", permanent: true },

  // ─────────────────────────────────────────────
  // FI-pääsivut (Webflow käytti suomenkielisiä polkuja)
  // ─────────────────────────────────────────────
  { source: "/fi/palvelut", destination: "/fi/services", permanent: true },
  { source: "/fi/service", destination: "/fi/services", permanent: true },
  { source: "/fi/tiimi-ja-ura", destination: "/fi/company/about", permanent: true },
  { source: "/fi/ota-yhteytta", destination: "/fi/company/contact", permanent: true },
  { source: "/fi/asiakastarinat", destination: "/fi/customer-stories", permanent: true },
  { source: "/fi/nakemykset", destination: "/fi/insights", permanent: true },
  { source: "/fi/ai-labs", destination: "/fi/services", permanent: true },
  { source: "/fi/dd-labs", destination: "/fi/services", permanent: true },
  { source: "/fi/policy", destination: "/fi", permanent: true },

  // ─────────────────────────────────────────────
  // Työpaikat: /jobs/{slug} → /company/careers/{slug}
  // ─────────────────────────────────────────────
  {
    source: "/jobs/senior-data-analyst",
    destination: "/company/careers/senior-data-analyst",
    permanent: true,
  },
  {
    source: "/jobs/trainee-machine-learning-and-generative-ai",
    destination: "/company/careers",
    permanent: true,
  },
  {
    source: "/fi/jobs/senior-data-analyst",
    destination: "/fi/company/careers/senior-data-analyst",
    permanent: true,
  },
  {
    source: "/fi/jobs/harjoittelija-koneoppiminen-generatiivinen-tekoaly",
    destination: "/fi/company/careers",
    permanent: true,
  },
  // Kaikki muut vanhat /jobs/-URLit → uraindeksi
  { source: "/jobs/:slug*", destination: "/company/careers", permanent: true },
  { source: "/fi/jobs/:slug*", destination: "/fi/company/careers", permanent: true },

  // ─────────────────────────────────────────────
  // Insights — EN (Webflow käytti pitkiä otsikko-slugeja)
  // ─────────────────────────────────────────────
  {
    source: "/insights/how-unified-data-management-set-the-stage-for-using-ai",
    destination: "/insights/unified-data-management-for-ai",
    permanent: true,
  },
  {
    source: "/insights/ai-powered-prospecting-know-who-to-talk-to-instantly",
    destination: "/insights/ai-powered-prospecting",
    permanent: true,
  },
  {
    source: "/insights/ai-requires-persistence-why-few-projects-succeed-on-the-first-attempt",
    destination: "/insights/ai-requires-persistence",
    permanent: true,
  },
  {
    source: "/insights/ai-strategies-outside-the-comfort-zone",
    destination: "/insights/ai-strategies-outside-comfort-zone",
    permanent: true,
  },
  {
    source: "/insights/better-project-decisions-with-data-predicted-margin-improved-by-60-percent",
    destination: "/insights/better-project-decisions-with-data",
    permanent: true,
  },
  {
    source: "/insights/clarifying-data-ownership-opened-the-door-to-using-it-effectively",
    destination: "/insights/clarifying-data-ownership",
    permanent: true,
  },
  {
    source: "/insights/data-design-expands-to-india-with-launch-of-ai-labs",
    destination: "/insights/expands-to-india",
    permanent: true,
  },
  {
    source: "/insights/how-a-data-strategy-was-turned-into-business-growth",
    destination: "/insights/data-strategy-into-business-growth",
    permanent: true,
  },
  {
    source: "/insights/how-machine-learning-is-changing-used-car-pricing",
    destination: "/insights/ai-pricing-used-cars",
    permanent: true,
  },
  {
    source: "/insights/taking-personalization-from-data-science-to-production",
    destination: "/insights/taking-personalization-to-production",
    permanent: true,
  },
  {
    source: "/insights/making-business-data-speak-your-language",
    destination: "/insights/making-data-speak-your-language",
    permanent: true,
  },
  {
    source: "/insights/mm-growth-partners-joins-to-fuel-data-designs-growth",
    destination: "/insights/mm-growth-partners",
    permanent: true,
  },
  {
    source: "/insights/smarter-discount-pricing-with-machine-learning",
    destination: "/insights/smarter-discount-pricing-with-ml",
    permanent: true,
  },
  {
    source: "/insights/the-smart-way-to-build-an-ai-innovation-portfolio",
    destination: "/insights/smart-ai-innovation-portfolio",
    permanent: true,
  },
  {
    source: "/insights/weve-updated-our-brand",
    destination: "/insights/updated-brand",
    permanent: true,
  },
  // Kirjastopalvelu-huutokauppa-artikkelia ei ole nykyisellä sivulla — ohjataan
  // lähimpään hinnoittelu-aiheiseen artikkeliin
  {
    source: "/insights/winning-the-blind-auction-how-ai-optimized-pricing-and-boosted-margins-by-20",
    destination: "/insights/smarter-discount-pricing-with-ml",
    permanent: true,
  },

  // ─────────────────────────────────────────────
  // Insights — FI (suomenkielisistä Webflow-slugeista)
  // ─────────────────────────────────────────────
  {
    source: "/fi/insights/a-companys-global-decision-making-was-transformed-by-a-unified-approach-to-data-management-setting-the-stage-for-using-ai",
    destination: "/fi/insights/unified-data-management-for-ai",
    permanent: true,
  },
  {
    source: "/fi/insights/tiedonhallinnan-yhtenaistaminen-avasi-tien-tekoalylle",
    destination: "/fi/insights/unified-data-management-for-ai",
    permanent: true,
  },
  {
    source: "/fi/insights/tekoaly-tekee-myynnin-prospektoinnista-tehokasta",
    destination: "/fi/insights/ai-powered-prospecting",
    permanent: true,
  },
  {
    source: "/fi/insights/tekoaly-vaatii-sitkeytta-miksi-harva-projekti-onnistuu-ensimmaisella-yrittamalla",
    destination: "/fi/insights/ai-requires-persistence",
    permanent: true,
  },
  {
    source: "/fi/insights/tekoalystrategioita-epamukavuusalueella",
    destination: "/fi/insights/ai-strategies-outside-comfort-zone",
    permanent: true,
  },
  {
    source: "/fi/insights/parempia-projektipaatoksia-datan-avulla-ennustettu-kate-parani-60-prosenttia",
    destination: "/fi/insights/better-project-decisions-with-data",
    permanent: true,
  },
  {
    source: "/fi/insights/datan-omistajuuden-selkeyttaminen-avasi-oven-sen-hyodyntamiselle",
    destination: "/fi/insights/clarifying-data-ownership",
    permanent: true,
  },
  {
    source: "/fi/insights/data-design-expands-to-india-with-launch-of-ai-labs",
    destination: "/fi/insights/expands-to-india",
    permanent: true,
  },
  {
    source: "/fi/insights/viisi-totuutta-tekoalystrategioista",
    destination: "/fi/insights/five-truths-about-ai-strategies",
    permanent: true,
  },
  {
    source: "/fi/insights/nain-datastrategia-kaannettiin-liiketoiminnan-kasvuksi",
    destination: "/fi/insights/data-strategy-into-business-growth",
    permanent: true,
  },
  {
    source: "/fi/insights/voiko-tekoaly-hinnoitella-kaytetyn-auton-paremmin-kuin-myyja",
    destination: "/fi/insights/ai-pricing-used-cars",
    permanent: true,
  },
  {
    source: "/fi/insights/kun-personoinnista-tuli-osa-liiketoimintaa",
    destination: "/fi/insights/taking-personalization-to-production",
    permanent: true,
  },
  {
    source: "/fi/insights/yritysdata-vastaa-arkikielella-liiketoimintaongelmiin",
    destination: "/fi/insights/making-data-speak-your-language",
    permanent: true,
  },
  {
    source: "/fi/insights/mm-growth-partners-joins-to-fuel-data-designs-growth",
    destination: "/fi/insights/mm-growth-partners",
    permanent: true,
  },
  {
    source: "/fi/insights/smarter-discount-pricing-with-machine-learning",
    destination: "/fi/insights/smarter-discount-pricing-with-ml",
    permanent: true,
  },
  {
    source: "/fi/insights/tekoalyportfolion-rakentaminen",
    destination: "/fi/insights/smart-ai-innovation-portfolio",
    permanent: true,
  },
  {
    source: "/fi/insights/weve-updated-our-brand",
    destination: "/fi/insights/updated-brand",
    permanent: true,
  },
  {
    source: "/fi/insights/winning-the-blind-auction-how-ai-optimized-pricing-and-boosted-margins-by-20",
    destination: "/fi/insights/smarter-discount-pricing-with-ml",
    permanent: true,
  },
];

const nextConfig = {
  // Sallitaan .md ja .mdx -tiedostot sivuna
  pageExtensions: ["js", "jsx", "md", "mdx"],

  async redirects() {
    return WEBFLOW_REDIRECTS;
  },
};

module.exports = withNextIntl(withMDX(nextConfig));
