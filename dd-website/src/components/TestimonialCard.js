import { C, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { getInitials } from "@/lib/utils";

export function TestimonialCard({ quote, name, title, company, photo, logo, featured = false }) {
  const initials = getInitials(name) || "?";
  return (
    <div style={{
      background: C.white, borderRadius: CARD_BORDER_RADIUS,
      padding: featured ? "40px 36px" : "32px 28px",
      border: `1px solid ${C.border}`, height: "100%",
      display: "flex", flexDirection: "column",
      ...(featured ? { borderLeft: `4px solid ${C.seawave}` } : {}),
    }}>
      <p className={featured ? "dd-display" : undefined} style={{
        fontSize: featured ? 24 : 15,
        lineHeight: featured ? 1.55 : 1.65,
        color: C.textMuted,
        fontStyle: "italic", flex: 1, marginBottom: 24,
      }}>{"\u201C"}{quote}{"\u201D"}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {photo ? (
          <img src={photo} alt={name} style={{
            width: 40, height: 40, borderRadius: "50%", objectFit: "cover",
            flexShrink: 0, border: `1px solid ${C.border}`,
          }} />
        ) : (
          <div style={{
            width: 40, height: 40, borderRadius: "50%", background: C.gray,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 600, color: C.textMuted, flexShrink: 0,
            border: `1px solid ${C.border}`,
          }}>{initials}</div>
        )}
        <div style={{ flex: 1 }}>
          {name && <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{name}</p>}
          <p style={{ fontSize: 13, color: C.textMuted }}>{name ? `${title}, ${company}` : title}</p>
        </div>
        {logo && (
          <img src={logo} alt={company} style={{
            height: 22, width: "auto", objectFit: "contain", opacity: 0.4, flexShrink: 0,
          }} />
        )}
      </div>
    </div>
  );
}
