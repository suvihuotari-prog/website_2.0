"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { C } from "@/lib/tokens";

export function ToolPreviewCard({ name, description, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      style={{
        background: C.white, border: `1px solid ${hovered ? C.black + "22" : C.border}`,
        borderLeft: `4px solid ${hovered ? accent : C.border}`,
        borderRadius: 16, padding: "24px 22px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        height: "100%",
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 8, height: 8, borderRadius: 2, background: accent, marginBottom: 14,
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.5)" : "none",
      }} />
      <h4 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{name}</h4>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>{description}</p>
    </motion.div>
  );
}
