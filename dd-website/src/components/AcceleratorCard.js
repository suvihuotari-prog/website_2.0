"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { C, CALENDLY_URL, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { CheckmarkIcon } from "@/components/CheckmarkIcon";

export function AcceleratorCard({ accelerator }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      style={{
        background: C.white, border: `1px solid ${hovered ? C.black + "22" : C.border}`,
        borderLeft: `4px solid ${hovered ? C.lemon : C.border}`,
        borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        height: "100%", display: "flex", flexDirection: "column",
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Big stat */}
      <div style={{
        display: "inline-flex", flexDirection: "row", alignItems: "center", gap: 12,
        padding: "14px 20px", borderRadius: 14,
        background: C.lemon, marginBottom: 20,
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.03)" : "none",
      }}>
        <span style={{ fontSize: 32, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}>{accelerator.stat}</span>
        <span style={{ fontSize: 11, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.3 }}>
          {accelerator.statLabel}
        </span>
      </div>

      {/* Name + tagline */}
      <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4, letterSpacing: "-0.01em" }}>
        {accelerator.name}
      </h3>
      <p style={{ fontSize: 14, color: C.seawave, fontWeight: 500, fontStyle: "italic", marginBottom: 14 }}>
        {accelerator.tagline}
      </p>

      {/* Description */}
      <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>
        {accelerator.description}
      </p>

      {/* Deliverables */}
      <div style={{
        background: C.beige, borderRadius: 12, padding: "16px 18px",
        flex: 1,
      }}>
        <span style={{
          fontSize: 11, fontWeight: 600, textTransform: "uppercase",
          letterSpacing: "0.06em", color: C.seawave, display: "block", marginBottom: 10,
        }}>What you get</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {accelerator.deliverables.map((d, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <CheckmarkIcon />
              <span style={{ fontSize: 13, lineHeight: 1.5, color: C.textMuted }}>{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: 20 }}>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
          className="dd-btn-wipe"
          style={{
            display: "block", textAlign: "center",
            padding: "12px 24px", borderRadius: PILL_BORDER_RADIUS,
            background: "transparent", color: C.black, border: `1px solid ${C.black}`,
            fontWeight: 500, fontSize: 14, textDecoration: "none",
            transition: "all 0.25s ease",
          }}
        >Learn more &rarr;</a>
      </div>
    </motion.div>
  );
}
