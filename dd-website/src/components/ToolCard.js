"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { C, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { CheckmarkIcon } from "@/components/CheckmarkIcon";

export function ToolCard({ tool }) {
  const [hovered, setHovered] = useState(false);
  const Wrapper = tool.slug ? "a" : "div";
  const wrapperProps = tool.slug ? {
    href: tool.slug,
    style: { textDecoration: "none", color: "inherit", display: "block", height: "100%" },
  } : { style: { height: "100%" } };
  return (
    <Wrapper {...wrapperProps}>
    <motion.div
      style={{
        background: C.white, border: `1px solid ${hovered ? C.black + "22" : C.border}`,
        borderLeft: `4px solid ${hovered ? tool.accent : C.border}`,
        borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        height: "100%", display: "flex", flexDirection: "column",
        cursor: tool.slug ? "pointer" : "default",
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Solution area tag */}
      {tool.solutionArea && (
        <div style={{
          display: "inline-flex", padding: "4px 12px", borderRadius: PILL_BORDER_RADIUS,
          background: `${tool.accent}66`, fontSize: 11, fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.06em",
          color: C.black, marginBottom: 14, alignSelf: "flex-start",
        }}>{tool.solutionArea}</div>
      )}

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14, background: C.gray,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.05)" : "none",
        }}>{tool.icon}</div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 3, letterSpacing: "-0.01em" }}>
            {tool.name}
          </h3>
          <p style={{ fontSize: 14, color: C.seawave, fontWeight: 500, fontStyle: "italic" }}>
            {tool.tagline}
          </p>
        </div>
      </div>

      {/* Status badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "4px 12px", borderRadius: PILL_BORDER_RADIUS,
        background: "transparent", border: `1px solid ${C.seawave}40`,
        fontSize: 11, fontWeight: 600,
        color: C.seawave, marginBottom: 14, alignSelf: "flex-start",
        textTransform: "uppercase", letterSpacing: "0.04em",
      }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.seawave }} />
        {tool.status}
      </div>

      {/* Description */}
      <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>
        {tool.description}
      </p>

      {/* Capabilities */}
      <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
        {tool.capabilities.map((c, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <CheckmarkIcon />
            <span style={{ fontSize: 13, lineHeight: 1.5, color: C.textMuted }}>{c}</span>
          </div>
        ))}
      </div>

      {/* Learn more — only for tools with a dedicated page */}
      {tool.slug && (
        <div style={{
          marginTop: 20, paddingTop: 16, borderTop: `1px solid ${C.border}`,
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 12, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.08em", color: C.black,
        }}>
          Learn more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
            style={{ transition: "transform 0.25s ease", transform: hovered ? "translateX(4px)" : "none" }}>
            <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </motion.div>
    </Wrapper>
  );
}
