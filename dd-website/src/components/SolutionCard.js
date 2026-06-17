"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { C, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";

export function SolutionCard({ solution, index, ctaLabel = "View details" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <a href={solution.slug}
        style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div style={{
          background: C.white,
          border: `1px solid ${hovered ? C.black + "22" : C.border}`,
          borderRadius: CARD_BORDER_RADIUS,
          padding: "40px 32px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          position: "relative", overflow: "hidden",
          height: "100%", display: "flex", flexDirection: "column",
        }}
        whileHover={{
          y: -4,
          boxShadow: "0 16px 48px rgba(0,0,0,0.08)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Decorative number background */}
          {solution.id && (
            <div style={{
              position: "absolute", top: 4, right: 12,
              fontSize: 120, fontWeight: 700, color: C.black,
              opacity: 0.025, pointerEvents: "none", userSelect: "none",
              lineHeight: 1,
            }}>{solution.id}</div>
          )}

          {/* Header row: badge + duration */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: 24, position: "relative", zIndex: 1,
          }}>
            {solution.badge && (
              <span style={{
                display: "inline-block", padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS,
                background: C.lemon, fontSize: 11, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.06em", color: C.black,
              }}>{solution.badge}</span>
            )}
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 13, fontWeight: 500, color: `${C.textMuted}99`,
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {solution.timeline}
            </div>
          </div>

          {/* Service name. The big title */}
          <h3 style={{
            fontSize: 28, fontWeight: 500, marginBottom: 20,
            letterSpacing: "-0.015em", lineHeight: 1.2,
            position: "relative", zIndex: 1,
          }}>{solution.tag}</h3>

          {/* Problem. Styled as empathetic quote */}
          <div style={{
            marginBottom: 20, paddingLeft: 16,
            borderLeft: `2px solid ${C.border}`,
            position: "relative", zIndex: 1,
          }}>
            <p style={{
              fontSize: 15, lineHeight: 1.6, color: `${C.textMuted}cc`,
              fontStyle: "italic",
            }}>
              {"\u201C"}{solution.title}{"\u201D"}
            </p>
          </div>

          {/* Outcome. Bold and clear */}
          <p style={{
            fontSize: 17, lineHeight: 1.55, color: C.black,
            fontWeight: 500, flex: 1,
            position: "relative", zIndex: 1,
          }}>
            {solution.outcome}
          </p>

          {/* Footer: View details */}
          <div style={{
            marginTop: 28, display: "flex", alignItems: "center", gap: 8,
            fontSize: 12, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.08em", color: C.black,
            position: "relative", zIndex: 1,
          }}>
            {ctaLabel}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
              style={{ transition: "transform 0.25s ease", transform: hovered ? "translateX(4px)" : "none" }}>
              <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Hover decoration: lemon line at bottom */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, width: "100%", height: 3,
            background: C.lemon,
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease",
          }} />
        </motion.div>
      </a>
    </Reveal>
  );
}
