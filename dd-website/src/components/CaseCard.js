"use client";

import { motion } from "framer-motion";
import { C, PILL_BORDER_RADIUS } from "@/lib/tokens";

export function CaseCard({ company, logo, logoHeight, tag, title, description, quote, quoteName, quoteTitle, slug }) {
  const Wrapper = slug ? "a" : "div";
  const wrapperProps = slug ? {
    href: slug,
    style: { textDecoration: "none", color: "inherit", display: "block" },
  } : {};

  return (
    <Wrapper {...wrapperProps}>
    <motion.div
      style={{
        background: C.white, border: `1px solid ${C.border}`,
        borderRadius: 40, padding: "32px 28px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        display: "flex", flexDirection: "column",
        breakInside: "avoid",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 16px 48px rgba(0,0,0,0.08)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Tag — right-aligned */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
        <span style={{
          display: "inline-block", padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS,
          border: `1px solid ${C.border}`,
          fontSize: 11, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.06em",
          color: `${C.black}99`,
        }}>{tag}</span>
      </div>

      {/* Company name or logo */}
      {logo ? (
        <img src={logo} alt={company} style={{
          height: logoHeight || 24, width: "auto", objectFit: "contain",
          alignSelf: "flex-start", marginBottom: 12,
        }} />
      ) : (
        <h3 style={{
          fontSize: 22, fontWeight: 500, marginBottom: 12,
          letterSpacing: "-0.01em", lineHeight: 1.3,
        }}>{company}</h3>
      )}

      {/* Title */}
      {title && (
        <h4 style={{
          fontSize: 16, fontWeight: 500, marginBottom: 10,
          lineHeight: 1.4, letterSpacing: "-0.01em",
        }}>{title}</h4>
      )}

      {/* Description */}
      {description && (
        <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted, marginBottom: quote ? 16 : 0 }}>
          {description}
        </p>
      )}

      {/* Quote */}
      {quote && (
        <div style={{
          borderTop: `1px solid ${C.border}`, paddingTop: 14, marginTop: 4,
        }}>
          <p style={{ fontSize: 13, lineHeight: 1.55, color: C.textMuted, fontStyle: "italic", marginBottom: 8 }}>
            "{quote}"
          </p>
          {quoteName && (
            <p style={{ fontSize: 12, color: C.seawave, fontWeight: 500 }}>
              — {quoteName}{quoteTitle ? `, ${quoteTitle}` : ""}
            </p>
          )}
        </div>
      )}

    </motion.div>
    </Wrapper>
  );
}
