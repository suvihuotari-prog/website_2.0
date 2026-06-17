import { defineRouting } from "next-intl/routing";

/**
 * Locale-routing-konfiguraatio
 *
 * - locales: tuetut kielet (en = englanti, fi = suomi)
 * - defaultLocale: oletuskieli. Englanninkielisillä URL:eilla EI ole prefiksiä
 * - localePrefix: 'as-needed'. Vain ei-default locale saa prefiksin
 *
 * Lopputulos:
 *   EN: /customer-stories/...      (ei prefiksiä)
 *   FI: /fi/customer-stories/...   (fi-prefiksi)
 *
 * Tämä vastaa Webflow'n nykyistä rakennetta → SEO säilyy.
 */
export const routing = defineRouting({
  locales: ["en", "fi"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
