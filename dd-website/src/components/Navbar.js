"use client";

import { useState, useEffect, useRef } from "react";
import { C, NAV_LINKS, CALENDLY_URL, CONTAINER_MAX_WIDTH, PILL_BORDER_RADIUS } from "@/lib/tokens";

const FlagFI = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" style={{ borderRadius: 2, display: "block" }}>
    <rect width="22" height="16" fill="#fff" />
    <rect x="6" y="0" width="4" height="16" fill="#003580" />
    <rect x="0" y="6" width="22" height="4" fill="#003580" />
  </svg>
);

const FlagEN = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" style={{ borderRadius: 2, display: "block", overflow: "hidden" }}>
    <rect width="22" height="16" fill="#012169" />
    <path d="M0 0L22 16M22 0L0 16" stroke="#fff" strokeWidth="3" />
    <path d="M0 0L22 16M22 0L0 16" stroke="#C8102E" strokeWidth="1.5" />
    <rect x="0" y="6" width="22" height="4" fill="#fff" />
    <rect x="8.5" y="0" width="5" height="16" fill="#fff" />
    <rect x="0" y="6.75" width="22" height="2.5" fill="#C8102E" />
    <rect x="9.25" y="0" width="3.5" height="16" fill="#C8102E" />
  </svg>
);

const Chevron = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, display: "inline-block" }}>
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "0 30px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 72,
      }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/images/logos/DD-Logo-Horizontal.png" alt="Data Design" style={{ height: 30, width: "auto" }} />
        </a>
        <div className="dd-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {NAV_LINKS.map((l) =>
            l.children ? (
              /* Dropdown menu item */
              <div
                key={l.label}
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: "relative" }}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="dd-nav-link"
                  style={{
                    color: C.black, fontSize: 15, fontWeight: 400,
                    background: "none", border: "none", cursor: "pointer",
                    display: "inline-flex", alignItems: "center",
                    padding: 0, fontFamily: "inherit",
                  }}
                >
                  {l.label}
                  <Chevron />
                </button>
                {dropdownOpen && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 8px)", right: 0,
                    background: C.white, borderRadius: 14, padding: "8px 0",
                    border: `1px solid ${C.border}`,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                    minWidth: 180, zIndex: 200,
                  }}>
                    {l.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="dd-nav-dropdown-link"
                        style={{
                          display: "block", padding: "10px 20px",
                          color: C.black, textDecoration: "none",
                          fontSize: 14, fontWeight: 400,
                          transition: "background 0.15s ease",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = C.gray}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Regular link */
              <a key={l.href} href={l.href} className="dd-nav-link" style={{
                color: C.black, textDecoration: "none", fontSize: 15, fontWeight: 400,
              }}>{l.label}</a>
            )
          )}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            style={{
              background: C.black, color: C.white, padding: "11px 28px",
              borderRadius: PILL_BORDER_RADIUS, fontWeight: 500, fontSize: 15, textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Book a call</a>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 8 }}>
            <button
              onClick={() => setLang("en")}
              style={{
                background: "none", border: "none", cursor: "pointer", padding: 3,
                opacity: lang === "en" ? 1 : 0.35, transition: "opacity 0.2s",
                borderRadius: 3,
                outline: lang === "en" ? `2px solid ${C.seawave}` : "2px solid transparent",
              }}
              aria-label="English"
              title="English"
            ><FlagEN /></button>
            <button
              onClick={() => setLang("fi")}
              style={{
                background: "none", border: "none", cursor: "pointer", padding: 3,
                opacity: lang === "fi" ? 1 : 0.35, transition: "opacity 0.2s",
                borderRadius: 3,
                outline: lang === "fi" ? `2px solid ${C.seawave}` : "2px solid transparent",
              }}
              aria-label="Suomi"
              title="Suomi"
            ><FlagFI /></button>
          </div>
        </div>
        <button className="dd-nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: "none", background: "none", border: "none", cursor: "pointer", padding: 8,
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {menuOpen
              ? <path d="M6 6l14 14M20 6L6 20" stroke={C.black} strokeWidth="2" strokeLinecap="round" />
              : <>
                  <line x1="3" y1="7" x2="23" y2="7" stroke={C.black} strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="13" x2="23" y2="13" stroke={C.black} strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="19" x2="23" y2="19" stroke={C.black} strokeWidth="2" strokeLinecap="round" />
                </>}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="dd-nav-mobile" style={{
          display: "none", flexDirection: "column", gap: 16, padding: "24px 40px 32px",
          background: C.white, borderTop: `1px solid ${C.border}`,
        }}>
          {NAV_LINKS.map((l) =>
            l.children ? (
              <div key={l.label} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ color: C.textMuted, fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {l.label}
                </span>
                {l.children.map((child) => (
                  <a key={child.href} href={child.href} style={{
                    color: C.black, textDecoration: "none", fontSize: 17, paddingLeft: 16,
                  }}>{child.label}</a>
                ))}
              </div>
            ) : (
              <a key={l.href} href={l.href} style={{ color: C.black, textDecoration: "none", fontSize: 17 }}>{l.label}</a>
            )
          )}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            style={{
              background: C.black, color: C.white, padding: "14px 28px",
              borderRadius: PILL_BORDER_RADIUS, fontWeight: 500, fontSize: 16, textDecoration: "none",
              textAlign: "center", marginTop: 8,
            }}
          >Book a call</a>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
            <button
              onClick={() => setLang("en")}
              style={{
                background: "none", border: "none", cursor: "pointer", padding: 4,
                opacity: lang === "en" ? 1 : 0.35, transition: "opacity 0.2s",
                borderRadius: 3,
                outline: lang === "en" ? `2px solid ${C.seawave}` : "2px solid transparent",
              }}
              aria-label="English"
              title="English"
            ><FlagEN /></button>
            <button
              onClick={() => setLang("fi")}
              style={{
                background: "none", border: "none", cursor: "pointer", padding: 4,
                opacity: lang === "fi" ? 1 : 0.35, transition: "opacity 0.2s",
                borderRadius: 3,
                outline: lang === "fi" ? `2px solid ${C.seawave}` : "2px solid transparent",
              }}
              aria-label="Suomi"
              title="Suomi"
            ><FlagFI /></button>
          </div>
        </div>
      )}
    </nav>
  );
}
