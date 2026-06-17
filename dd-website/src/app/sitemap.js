import { getAllCases, getAllInsights } from "@/lib/mdx";

/**
 * Dynaaminen sitemap (Next.js App Router).
 *
 * Tarjoillaan automaattisesti osoitteessa /sitemap.xml.
 * Kattaa staattiset sivut (EN + FI) sekä MDX-pohjaiset asiakastarinat ja
 * näkemykset molemmilla kielillä. Slugit luetaan frontmatterista (@/lib/mdx),
 * joten ne pysyvät synkassa generateStaticParams-funktioiden kanssa.
 *
 * Kanoninen osoite luetaan ympäristömuuttujasta NEXT_PUBLIC_SITE_URL.
 * Aseta se Vercelissä (esim. https://www.datadesign.fi). Oletus on varalla.
 */

const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.datadesign.fi"
).replace(/\/$/, "");

// Staattiset reitit ilman kieliprefixiä. FI-versio on sama polku /fi-etuliitteellä.
const STATIC_PATHS = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions/ai-strategy", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/pricing-optimization", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/customer-intelligence", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/data-governance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/genai-automation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/intelligent-operations", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/ai-native-transformation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/ai-accelerator", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solutions/inrecipe", priority: 0.7, changeFrequency: "monthly" },
  { path: "/customer-stories", priority: 0.8, changeFrequency: "weekly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  { path: "/company/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/company/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/company/careers/senior-data-analyst", priority: 0.5, changeFrequency: "monthly" },
  { path: "/company/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
];

// Rakentaa EN- ja FI-merkinnät samalle polulle, hreflang-vaihtoehdot mukana.
function localizedEntries({ path, priority, changeFrequency }, lastModified) {
  const en = `${BASE_URL}${path}`;
  const fi = `${BASE_URL}/fi${path}`;
  const languages = { en, fi };
  return [
    { url: en, lastModified, changeFrequency, priority, alternates: { languages } },
    { url: fi, lastModified, changeFrequency, priority, alternates: { languages } },
  ];
}

// MDX-päiväyksestä Date-objekti, jos kelvollinen.
function toDate(value) {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

export default function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_PATHS.flatMap((p) => localizedEntries(p, now));

  const caseEntries = ["en", "fi"].flatMap((locale) =>
    getAllCases(locale)
      .filter((c) => c.slug)
      .map((c) => ({
        url: `${BASE_URL}${locale === "fi" ? "/fi" : ""}/customer-stories/${c.slug}`,
        lastModified: toDate(c.publishedAt || c.date) || now,
        changeFrequency: "monthly",
        priority: 0.6,
      }))
  );

  const insightEntries = ["en", "fi"].flatMap((locale) =>
    getAllInsights(locale)
      .filter((i) => i.slug)
      .map((i) => ({
        url: `${BASE_URL}${locale === "fi" ? "/fi" : ""}/insights/${i.slug}`,
        lastModified: toDate(i.publishedAt || i.date) || now,
        changeFrequency: "monthly",
        priority: 0.6,
      }))
  );

  return [...staticEntries, ...caseEntries, ...insightEntries];
}
