/**
 * Middleware on inaktivoitu siivouksen jälkeen.
 *
 * Aiempi versio matchasi /cases-intl-polkuja next-intl:llä,
 * mutta /[locale]-rakenne poistettiin siivouksessa. Tämä tiedosto
 * jää placeholderiksi jotta next-intl-paketti voidaan myöhemmin
 * aktivoida, kun siirrytään täyteen i18n-rakenteeseen.
 */
export default function middleware() {
  // Ei mitään. Kaikki pyynnöt menevät suoraan Next.js routingiin
}

export const config = {
  matcher: [],
};
