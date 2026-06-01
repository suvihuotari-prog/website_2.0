"use client";

import { C } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { getInitials } from "@/lib/utils";

export function TestimonialSpotlight({ quote, highlight, name, title, company, photo, logo }) {
  /* Split quote around the highlighted phrase */
  let parts = null;
  if (highlight && quote.includes(highlight)) {
    const idx = quote.indexOf(highlight);
    parts = {
      before: quote.slice(0, idx),
      hl: highlight,
      after: quote.slice(idx + highlight.length),
    };
  }

  const initials = getInitials(name);

  return (
    <Reveal>
      <div style={{
        background: C.white, borderRadius: 32, padding: 6, overflow: "hidden",
        boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
      }}>
        <div className="dd-spotlight-row" style={{
          display: "flex", gap: 0,
        }}>
          {/* Photo column */}
          <div className="dd-spotlight-photo-col" style={{
            width: 400, flexShrink: 0,
          }}>
            <div style={{
              height: "100%", minHeight: 420, borderRadius: 28, overflow: "hidden",
              background: C.gray, position: "relative",
            }}>
              {photo ? (
                <>
                  <img
                    src={photo}
                    alt={name}
                    className="dd-spotlight-photo"
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      display: "block",
                    }}
                  />
                  {/* Brand tint overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `${C.lemon}20`, mixBlendMode: "multiply",
                    pointerEvents: "none",
                  }} />
                </>
              ) : (
                <div style={{
                  width: "100%", height: "100%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: `linear-gradient(135deg, ${C.lemon}, ${C.turquoise})`,
                }}>
                  <span style={{
                    fontSize: 80, fontWeight: 600, color: "rgba(0,0,0,0.12)",
                    letterSpacing: "-0.03em",
                  }}>{initials}</span>
                </div>
              )}
            </div>
          </div>

          {/* Quote column */}
          <div style={{
            flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "48px 48px 48px 44px",
          }}>
            {/* Decorative quote mark */}
            <div style={{ marginBottom: 24 }}>
              <span style={{
                fontSize: 80, fontWeight: 400, lineHeight: 0.8,
                color: C.lemon, fontFamily: "Georgia, serif",
              }}>{"\u201C"}</span>
            </div>

            {/* Quote text */}
            <blockquote style={{
              fontSize: 24, fontWeight: 400, lineHeight: 1.5,
              color: C.black, marginBottom: 32, marginTop: -8,
              letterSpacing: "-0.01em",
            }}>
              {parts ? (
                <>
                  {parts.before}
                  <span style={{
                    background: C.lemon, padding: "2px 4px",
                    borderRadius: 4, fontWeight: 500,
                  }}>{parts.hl}</span>
                  {parts.after}
                </>
              ) : quote}
            </blockquote>

            {/* Author */}
            <div style={{
              borderTop: `1px solid ${C.border}`, paddingTop: 24,
              display: "flex", alignItems: "center", gap: 16,
            }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.black }}>
                  {name}
                </div>
                <div style={{
                  fontSize: 12, fontWeight: 600, color: C.textMuted,
                  textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 4,
                }}>
                  {title}, {company}
                </div>
              </div>
              {logo && (
                <img src={logo} alt={company} style={{
                  height: 28, width: "auto", marginLeft: "auto", opacity: 0.4,
                }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
