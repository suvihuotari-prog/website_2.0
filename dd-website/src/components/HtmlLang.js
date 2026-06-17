"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Asettaa <html lang> -attribuutin polun perusteella.
 *
 * Sivustolla on yksi juuri-layout (lang="en"), eikä erillistä [locale]-
 * segmenttiä. /fi-reiteillä kielen pitää silti olla "fi", jotta hakukoneet
 * tunnistavat sisällön suomenkieliseksi. Tämä komponentti päivittää
 * document-elementin kielen asiakkaalla. Googlebot suorittaa JS:n ja näkee
 * oikean kielen. Komponentti ei renderöi mitään näkyvää.
 */
export function HtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname && pathname.startsWith("/fi") ? "fi" : "en";
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [pathname]);

  return null;
}
