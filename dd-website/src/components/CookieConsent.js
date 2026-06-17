"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { C, CONTAINER_MAX_WIDTH, PILL_BORDER_RADIUS } from "@/lib/tokens";

const STORAGE_KEY = "dd-cookie-consent";

// Voi laukaista uudelleen footerin "Evästeasetukset" -linkistä
export const OPEN_EVENT = "dd:open-cookie-settings";

const TEXT = {
  en: {
    message:
      "We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.",
    ok: "Ok",
    no: "No",
    privacy: "Privacy policy",
    href: "/privacy-policy",
    aria: "Cookie consent",
  },
  fi: {
    message:
      "Käytämme evästeitä varmistaaksemme, että tarjoamme sinulle parhaan mahdollisen kokemuksen verkkosivustollamme. Jos jatkat tämän sivuston käyttöä, oletamme että olet tyytyväinen siihen.",
    ok: "Ok",
    no: "Ei",
    privacy: "Tietosuojaseloste",
    href: "/fi/privacy-policy",
    aria: "Evästesuostumus",
  },
};

export function CookieConsent() {
  const pathname = usePathname() || "/";
  const lang = pathname.startsWith("/fi") ? "fi" : "en";
  const t = TEXT[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Näytä vain jos valintaa ei ole vielä tehty
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* localStorage ei käytettävissä — piilotetaan silti */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.aria}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 300,
        background: C.white,
        borderTop: `1px solid ${C.border}`,
        boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: CONTAINER_MAX_WIDTH,
          margin: "0 auto",
          padding: "20px 30px",
          display: "flex",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: C.textMuted,
            margin: 0,
            flex: "1 1 360px",
            maxWidth: 760,
          }}
        >
          {t.message}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <button
            onClick={() => choose("accepted")}
            style={{
              background: C.black,
              color: C.white,
              border: "none",
              cursor: "pointer",
              padding: "10px 28px",
              borderRadius: PILL_BORDER_RADIUS,
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "inherit",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {t.ok}
          </button>
          <button
            onClick={() => choose("declined")}
            style={{
              background: "transparent",
              color: C.black,
              border: `1px solid ${C.black}`,
              cursor: "pointer",
              padding: "10px 28px",
              borderRadius: PILL_BORDER_RADIUS,
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.black;
              e.currentTarget.style.color = C.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = C.black;
            }}
          >
            {t.no}
          </button>
          <a
            href={t.href}
            style={{
              color: C.seawave,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {t.privacy}
          </a>
        </div>
      </div>
    </div>
  );
}
