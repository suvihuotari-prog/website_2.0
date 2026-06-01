"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { C, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";

export function FeaturedSolutionCard({ solution, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.06}>
      <a href={solution.slug}
        style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div style={{
          background: C.white,
          border: `1px solid ${hovered ? C.black + "22" : C.border}`,
          borderLeft: `4px solid ${hovered ? C.seawave : C.border}`,
          borderRadius: CARD_BORDER_RADIUS, padding: "32px 28px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          height: "100%", display: "flex", flexDirection: "column",
        }}
        whileHover={{
          y: -4,
          boxShadow: "0 16px 48px rgba(0,0,0,0.08)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Tag */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{
              display: "inline-flex", padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS,
              background: "transparent", border: `1px solid ${C.seawave}40`,
              fontSize: 11, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.06em",
              color: C.seawave,
            }}>{solution.tag}</div>
            {solution.logo && (
              <img src={solution.logo} alt={`${solution.tag} logo`} style={{
                height: 24, width: "auto", objectFit: "contain", opacity: 0.6,
              }} />
            )}
          </div>

          {/* Business problem title */}
          <h3 style={{
            fontSize: 20, fontWeight: 600, marginBottom: 12,
            letterSpacing: "-0.01em", lineHeight: 1.3, paddingRight: 40,
          }}>{solution.title}</h3>

          {/* Description */}
          <p style={{ fontSize: 14, lineHeight: 1.65, color: C.textMuted, marginBottom: 20, flex: 1 }}>
            {solution.description}
          </p>

          {/* Arrow */}
          <div style={{
            display: "flex", justifyContent: "flex-end", alignItems: "center",
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: hovered ? C.lemon : C.gray,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.25s ease",
              transform: hovered ? "translateX(3px)" : "none",
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                style={{ transition: "transform 0.25s ease", transform: hovered ? "rotate(-45deg)" : "none" }}>
                <path d="M4 8h8M9 5l3 3-3 3" stroke={C.black} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </a>
    </Reveal>
  );
}
