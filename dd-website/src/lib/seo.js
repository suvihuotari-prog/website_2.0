/**
 * SEO-apurit metadatan rakentamiseen (Next.js App Router).
 *
 * Käytä palvelinkomponenttisivuilla niin, että jokainen sivu saa oikean
 * itseensä viittaavan canonical-osoitteen. Kielivaihtoehdot (hreflang)
 * annetaan vain kun EN/FI-polut tunnetaan varmasti.
 *
 * HUOM: Vain palvelinkomponentit voivat viedä metadataa. "use client"
 * -sivut eivät, joten niille canonical hoidetaan palvelinkääreellä myöhemmin.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.datadesign.fi"
).replace(/\/$/, "");

/**
 * Rakentaa metadatan canonical- ja (valinnaisesti) hreflang-merkinnöillä.
 *
 * @param {object} opts
 * @param {string} opts.path        Sivun polku, esim. "/customer-stories".
 * @param {string} [opts.enPath]    EN-vastineen polku hreflangia varten.
 * @param {string} [opts.fiPath]    FI-vastineen polku hreflangia varten.
 * @returns {object} alternates-objekti metadataan upotettavaksi.
 */
export function buildAlternates({ path, enPath, fiPath }) {
  const alternates = { canonical: path };
  if (enPath && fiPath) {
    alternates.languages = { en: enPath, fi: fiPath };
  }
  return alternates;
}

/**
 * Self-canonical lyhyesti. Polku resolvoidaan metadataBasea vasten.
 */
export function canonical(path) {
  return { canonical: path };
}
