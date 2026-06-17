/**
 * robots.txt (Next.js App Router).
 *
 * Tarjoillaan automaattisesti osoitteessa /robots.txt.
 * Sallii koko sivuston indeksoinnin ja osoittaa hakukoneet sitemapiin.
 * Kanoninen osoite tulee ympäristömuuttujasta NEXT_PUBLIC_SITE_URL
 * (sama kuin sitemap.js). Aseta se Vercelissä.
 */

const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.datadesign.fi"
).replace(/\/$/, "");

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
