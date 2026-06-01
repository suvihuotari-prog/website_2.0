"use client";

import { C, CONTAINER_MAX_WIDTH } from "@/lib/tokens";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Customer Stories", href: "/customer-stories" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/company/about" },
  { label: "Careers", href: "/company/careers" },
  { label: "Contact", href: "/company/contact" },
];

export function Footer() {
  return (
    <footer style={{ background: C.gray, padding: "60px 40px 40px" }}>
      <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto" }}>
        <div className="dd-footer-grid" style={{
          display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1.5fr",
          gap: 48, marginBottom: 48,
        }}>
          <div>
            <a href="/" style={{ textDecoration: "none" }}>
              <img src="/images/logos/DD-Logo-Short.png" alt="Data Design" style={{ height: 150, width: "auto" }} />
            </a>
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FOOTER_LINKS.map(link => (
                <a key={link.label} href={link.href} className="dd-footer-link" style={{
                  color: C.black, textDecoration: "none", fontSize: 15,
                }}>{link.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Socials</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="https://www.linkedin.com/company/data-design-oy" target="_blank" rel="noopener noreferrer"
                style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "color 0.25s ease" }}
                onMouseEnter={e => e.currentTarget.style.color = C.seawave}
                onMouseLeave={e => e.currentTarget.style.color = C.black}
              >LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="mailto:info@datadesign.fi" style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "color 0.25s ease" }}
                onMouseEnter={e => e.currentTarget.style.color = C.seawave}
                onMouseLeave={e => e.currentTarget.style.color = C.black}
              >info@datadesign.fi</a>
              <a href="tel:+358504420008" style={{ color: C.black, textDecoration: "none", fontSize: 15, transition: "color 0.25s ease" }}
                onMouseEnter={e => e.currentTarget.style.color = C.seawave}
                onMouseLeave={e => e.currentTarget.style.color = C.black}
              >+358 50 442 0008</a>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: C.textMuted, marginTop: 8 }}>
                Data Design Oy (3305752-1)<br />
                Keilaniementie 1<br />
                02150 Espoo<br />
                Finland
              </p>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: `1px solid ${C.border}`, paddingTop: 24,
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <span style={{ color: C.textMuted, fontSize: 14 }}>&copy; 2026 Data Design Oy. All rights reserved.</span>
          <div style={{ display: "flex", gap: 28 }}>
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(label => (
              <a key={label} href="#" style={{
                color: C.black, textDecoration: "underline", fontSize: 14, textUnderlineOffset: "3px",
              }}>{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
