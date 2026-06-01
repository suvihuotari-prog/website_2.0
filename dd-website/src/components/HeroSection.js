"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, PILL_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";

export function HeroSection({
  gradient = "lemon",
  badge,
  title,
  titleSize = 58,
  titleUppercase = false,
  subtitle,
  subtitleDark = false,
  primaryButton,
  secondaryButton,
  breadcrumb,
  frameworkBadge,
  blobs = 1,
  image,
  gradientRight = false,
  children,
}) {
  const gradientColor = gradient === "beige" ? C.beige : gradient === "turquoise" ? C.turquoise : C.lemon;
  const hasChildren = !!children;
  const gradientPos = gradientRight ? "70% 50%" : "30% 20%";

  return (
    <section style={{
      paddingTop: 72,
      background: `radial-gradient(ellipse at ${gradientPos}, ${gradientColor} 0%, ${C.white} 70%)`,
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative blobs */}
      {blobs >= 2 && (
        <div style={{ position: "absolute", top: 100, right: "8%", width: 280, height: 280, borderRadius: "50%", background: gradient === "beige" ? C.turquoise : C.lemon, opacity: 0.12, filter: "blur(80px)", pointerEvents: "none" }} />
      )}
      <div style={{ position: "absolute", [blobs >= 2 ? "bottom" : "top"]: blobs >= 2 ? 40 : 80, [blobs >= 2 ? "left" : "right"]: blobs >= 2 ? "15%" : "10%", width: blobs >= 2 ? 200 : 220, height: blobs >= 2 ? 200 : 220, borderRadius: "50%", background: C.turquoise, opacity: 0.1, filter: `blur(${blobs >= 2 ? 60 : 60}px)`, pointerEvents: "none" }} />

      <div className={image ? "dd-hero-split" : undefined} style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: hasChildren ? "100px 40px 48px" : "100px 40px 80px", ...(image ? { display: "flex", alignItems: "center", gap: 40 } : {}) }}>
       <div style={image ? { flex: 1, minWidth: 0 } : {}}>
        {/* Breadcrumb */}
        {breadcrumb && (
          <Reveal>
            <div style={{ marginBottom: 24 }}>
              {breadcrumb.map((item, i) => (
                <span key={i}>
                  {i > 0 && <span style={{ color: C.textMuted, fontSize: 14, margin: "0 8px" }}>/</span>}
                  {item.href ? (
                    <a href={item.href} className="dd-link-hover" style={{ color: C.textMuted, textDecoration: "none", fontSize: 14 }}>{item.label}</a>
                  ) : (
                    <span style={{ color: C.black, fontSize: 14, fontWeight: 500 }}>{item.label}</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {/* Badge */}
        {badge && (
          <Reveal delay={breadcrumb ? 0.03 : 0} direction="left">
            <div style={{
              display: "inline-flex", padding: breadcrumb ? "5px 14px" : "6px 18px", borderRadius: PILL_BORDER_RADIUS,
              background: "rgba(0,0,0,0.06)",
              fontSize: breadcrumb ? 11 : 13, fontWeight: breadcrumb ? 600 : 500,
              textTransform: breadcrumb ? "uppercase" : "none",
              letterSpacing: breadcrumb ? "0.06em" : "normal",
              color: breadcrumb ? C.seawave : C.black,
              marginBottom: breadcrumb ? (frameworkBadge ? 14 : 20) : 28,
            }}>{badge}</div>
          </Reveal>
        )}

        {/* Framework badge (solution subpages) */}
        {frameworkBadge && (
          <Reveal delay={0.05}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: PILL_BORDER_RADIUS, background: `${C.lemon}88`, fontSize: 11, fontWeight: 500, color: C.black, marginBottom: 20, marginLeft: 8 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z" fill={C.seawave}/></svg>
              {frameworkBadge}
            </div>
          </Reveal>
        )}

        {/* Title */}
        <Reveal delay={breadcrumb ? 0.08 : 0.08}>
          <h1 className="dd-hero-h1" style={{
            fontSize: titleSize, fontWeight: 400, lineHeight: 1.1,
            marginBottom: titleSize >= 64 ? 32 : 24,
            letterSpacing: "-0.025em", maxWidth: titleSize >= 64 ? 840 : 780,
            textTransform: titleUppercase ? "uppercase" : "none",
          }}>{title}</h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={breadcrumb ? 0.14 : 0.18}>
          <p style={{
            fontSize: 18, lineHeight: 1.7, maxWidth: 640,
            color: subtitleDark ? C.black : C.textMuted,
            marginBottom: 36, fontWeight: 400,
          }}>{subtitle}</p>
        </Reveal>

        {/* Buttons */}
        {(primaryButton || secondaryButton) && (
          <Reveal delay={breadcrumb ? 0.22 : 0.3} direction="scale">
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-start" }}>
              {primaryButton && (
                <a href={primaryButton.href} target={primaryButton.href?.startsWith("http") ? "_blank" : undefined} rel={primaryButton.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "inline-block", background: C.black, color: C.white,
                    padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                    fontWeight: 500, fontSize: 16, textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
                >{primaryButton.label}</a>
              )}
              {secondaryButton && (
                <a href={secondaryButton.href}
                  className="dd-btn-wipe"
                  style={{
                    display: "inline-block", background: "transparent", color: C.black,
                    padding: "14px 36px", borderRadius: PILL_BORDER_RADIUS,
                    border: `1px solid ${C.black}`, fontWeight: 500, fontSize: 16,
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                >{secondaryButton.label}</a>
              )}
            </div>
          </Reveal>
        )}
       </div>
       {image && (
         <Reveal delay={0.2} direction="scale">
           <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
             <img src={image} alt="Decorative illustration" style={{ width: "100%", maxWidth: 520, height: "auto" }} />
           </div>
         </Reveal>
       )}
      </div>

      {/* Optional children (stats strip, etc.) */}
      {children}
    </section>
  );
}
