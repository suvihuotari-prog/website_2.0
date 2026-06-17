"use client";

import { C, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { getInitials } from "@/lib/utils";

const CATEGORY_COLORS = {
  "Expert Talk": C.turquoise,
  "AI Insights": C.lemon,
  "News": C.beige,
};

export function InsightCard({ title, description, category, date, author, authorPhoto, image, href, featured = false }) {
  const badgeBg = CATEGORY_COLORS[category] || C.gray;

  const initials = getInitials(author);

  if (featured) {
    return (
      <a href={href || "#"} style={{ textDecoration: "none", display: "block" }}>
        <div
          className="dd-insight-featured dd-hover-lift"
          style={{
            display: "flex", gap: 0, background: C.white,
            borderRadius: 24, border: `1px solid ${C.border}`, overflow: "hidden",
          }}
        >
          {/* Image */}
          <div className="dd-insight-featured-img" style={{
            width: "45%", minHeight: 340, background: C.gray, flexShrink: 0,
            position: "relative", overflow: "hidden",
          }}>
            {image && (
              <img src={image} alt={title} style={{
                width: "100%", height: "100%", objectFit: "cover",
                display: "block",
              }} />
            )}
          </div>

          {/* Content */}
          <div style={{ flex: 1, padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{
                padding: "4px 14px", borderRadius: PILL_BORDER_RADIUS, background: badgeBg,
                fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
                color: C.black,
              }}>{category}</span>
              {date && <span style={{ fontSize: 13, color: C.textMuted }}>{date}</span>}
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12, lineHeight: 1.3, letterSpacing: "-0.02em", color: C.black }}>
              {title}
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
              {description}
            </p>
            {author && (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {authorPhoto ? (
                  <img src={authorPhoto} alt={author} style={{
                    width: 36, height: 36, borderRadius: "50%", objectFit: "cover",
                    border: `1px solid ${C.border}`,
                  }} />
                ) : (
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%", background: C.turquoise,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 600, color: C.black,
                    border: `1px solid ${C.border}`,
                  }}>{initials}</div>
                )}
                <span style={{ fontSize: 14, fontWeight: 500, color: C.black }}>{author}</span>
              </div>
            )}
          </div>
        </div>
      </a>
    );
  }

  /* Regular card */
  const isExpertTalk = category === "Expert Talk";

  return (
    <a href={href || "#"} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <div className="dd-hover-lift" style={{
        background: C.white, borderRadius: CARD_BORDER_RADIUS, border: `1px solid ${C.border}`,
        overflow: "hidden", height: "100%",
        display: "flex", flexDirection: "column",
      }}
      >
        {/* Image area */}
        <div style={{
          height: isExpertTalk ? 240 : 180, background: C.gray,
          overflow: "hidden", position: "relative",
        }}>
          {image && (
            <img
              src={image} alt={title}
              className={isExpertTalk ? "dd-spotlight-photo" : undefined}
              style={{
                width: "100%", height: "100%",
                objectFit: isExpertTalk ? "cover" : "contain",
                objectPosition: isExpertTalk ? "top" : "center",
                display: "block",
                padding: isExpertTalk ? 0 : 20,
              }}
            />
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span style={{
              padding: "4px 12px", borderRadius: PILL_BORDER_RADIUS, background: badgeBg,
              fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
              color: C.black,
            }}>{category}</span>
            {date && <span style={{ fontSize: 12, color: C.textMuted }}>{date}</span>}
          </div>
          <h3 style={{
            fontSize: 17, fontWeight: 600, marginBottom: 8, lineHeight: 1.35,
            letterSpacing: "-0.01em", color: C.black,
          }}>{title}</h3>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted, flex: 1 }}>
            {description}
          </p>

          {/* Author row */}
          {author && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16, paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
              {authorPhoto ? (
                <img src={authorPhoto} alt={author} style={{
                  width: 28, height: 28, borderRadius: "50%", objectFit: "cover",
                  border: `1px solid ${C.border}`,
                }} />
              ) : (
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", background: C.turquoise,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 600, color: C.black,
                }}>{initials}</div>
              )}
              <span style={{ fontSize: 13, fontWeight: 500, color: C.black }}>{author}</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
