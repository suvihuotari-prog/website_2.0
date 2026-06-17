import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/**
 * Request-konfiguraatio next-intl:lle.
 *
 * Lukee käännöstiedostot kansiosta `messages/` ja syöttää ne
 * Server Componenteille palvelinrenderöintiin.
 *
 * Jos locale puuttuu URL:sta, käytetään defaultLocalea (en).
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
