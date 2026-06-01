"use client";

import { C, CALENDLY_URL, PILL_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";

export function CTASection({ heading, subtitle, secondaryLabel = "See customer stories", secondaryHref = "/customer-stories", image, imageSize = 100, children }) {
  return (
    <section style={{ padding: "40px 0", background: C.white }}>
      <Reveal>
        <div className="dd-cta-row" style={{
          display: "flex",
          minHeight: "clamp(580px, 60vw, 780px)",
          overflow: "hidden",
        }}>
          {/* Left — Lemon */}
          <div className="dd-cta-left" style={{
            flex: 1,
            width: "50%",
            position: "relative",
            background: C.lemon,
            borderTopRightRadius: "100%",
            borderBottomRightRadius: "100%",
            padding: "clamp(40px, 6vw, 80px)",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
              <div style={{ position: "relative", zIndex: 1, maxWidth: 480 }}>
                <h2 style={{
                  fontSize: 52, fontWeight: 400, lineHeight: 1.1,
                  marginBottom: 24, letterSpacing: "-0.02em",
                }}>
                  {heading}
                </h2>
                <p style={{
                  fontSize: 18, lineHeight: 1.6, color: C.textMuted,
                  marginBottom: 40,
                }}>
                  {subtitle}
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                    className="dd-btn-wipe"
                    style={{
                      display: "inline-block", background: C.white, color: C.black,
                      padding: "16px 36px", borderRadius: PILL_BORDER_RADIUS,
                      border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                  >Book a call</a>
                  <a href={secondaryHref}
                    className="dd-btn-wipe"
                    style={{
                      display: "inline-block", background: C.white, color: C.black,
                      padding: "16px 36px", borderRadius: PILL_BORDER_RADIUS,
                      border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                      textDecoration: "none", transition: "all 0.2s ease",
                    }}
                  >{secondaryLabel}</a>
                </div>
              </div>
            </div>

          {/* Right — Gray */}
          <div className="dd-cta-right" style={{
            flex: 1,
            width: "50%",
            position: "relative",
            background: C.gray,
            borderTopLeftRadius: "100%",
            borderBottomLeftRadius: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {image ? (
              <img src={image} alt="Decorative illustration" style={imageSize === 100 ? {
                width: "100%", height: "100%",
                objectFit: "cover", position: "absolute",
                top: 0, left: 0,
              } : {
                width: `${imageSize}%`, height: "auto",
                objectFit: "contain",
              }} />
            ) : children}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
