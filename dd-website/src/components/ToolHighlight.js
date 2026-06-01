"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { C, CARD_BORDER_RADIUS } from "@/lib/tokens";

export function ToolHighlight({ tool }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      style={{
        background: C.white, border: `1px solid ${hovered ? C.black + "22" : C.border}`,
        borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        height: "100%", display: "flex", flexDirection: "column", alignItems: "center",
        textAlign: "center",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 16px 48px rgba(0,0,0,0.08)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 56, height: 56, borderRadius: 14, background: C.gray,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16,
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.08) rotate(-3deg)" : "none",
      }}>{tool.icon}</div>
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6, letterSpacing: "-0.01em" }}>
        {tool.name}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: C.textMuted }}>
        {tool.tagline}
      </p>
    </motion.div>
  );
}
