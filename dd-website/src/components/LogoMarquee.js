"use client";

import { C, PILL_BORDER_RADIUS } from "@/lib/tokens";

/**
 * Auto-scrolling logo strip with CSS-only infinite marquee.
 * Duplicates logos to create seamless loop. Pauses on hover.
 *
 * Props:
 *   logos: [{ name, logo }]
 *   speed: seconds for one full cycle (default 40)
 *   direction: "left" | "right" (default "left")
 */
export function LogoMarquee({ logos, speed = 40, direction = "left" }) {
  const animName = direction === "right" ? "ddMarqueeRight" : "ddMarquee";

  // Duplicate logos for seamless loop
  const doubled = [...logos, ...logos];

  return (
    <div
      className="dd-marquee-row"
      style={{
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="dd-marquee-track"
        style={{
          display: "flex",
          gap: 12,
          width: "max-content",
          animation: `${animName} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((client, i) => (
          <div
            key={i}
            style={{
              background: C.white,
              borderRadius: PILL_BORDER_RADIUS,
              padding: client.logo ? "8px 20px" : "10px 24px",
              fontSize: 14,
              fontWeight: 500,
              color: C.black,
              border: `1px solid ${C.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {client.logo ? (
              <img
                src={client.logo}
                alt={client.name}
                style={{ height: 22, width: "auto", objectFit: "contain" }}
              />
            ) : (
              client.name
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
