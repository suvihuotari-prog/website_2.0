"use client";

import { C, SECTION_PADDING } from "@/lib/tokens";
import { HeroSection } from "@/components/HeroSection";
import { Reveal } from "@/components/Reveal";

const EMAIL = "info@datadesign.fi";

/** Turn a plain string into JSX, linking the contact email as a mailto. */
function linkify(text) {
  const parts = text.split(EMAIL);
  if (parts.length === 1) return text;
  const out = [];
  parts.forEach((part, i) => {
    out.push(part);
    if (i < parts.length - 1) {
      out.push(
        <a
          key={i}
          href={`mailto:${EMAIL}`}
          style={{ color: C.seawave, fontWeight: 500, textDecoration: "none" }}
        >
          {EMAIL}
        </a>
      );
    }
  });
  return out;
}

/**
 * Static legal / policy page layout.
 * @param {string} badge - small hero label
 * @param {string} title - page title
 * @param {string} effectiveDate - shown as hero subtitle
 * @param {string} intro - lead paragraph
 * @param {{title: string, body: string[]}[]} sections
 */
export function LegalArticle({ badge, title, effectiveDate, intro, sections }) {
  return (
    <>
      <HeroSection
        gradient="beige"
        badge={badge}
        title={title}
        titleSize={52}
        subtitle={effectiveDate}
        subtitleDark
      />
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: SECTION_PADDING }}>
          <Reveal>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: C.textMuted, marginBottom: 8 }}>
              {linkify(intro)}
            </p>
            {sections.map((s) => (
              <div key={s.title} style={{ marginTop: 40 }}>
                <h2
                  style={{
                    fontSize: 26,
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                    marginBottom: 16,
                    color: C.black,
                  }}
                >
                  {s.title}
                </h2>
                {s.body.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 16,
                      lineHeight: 1.8,
                      color: C.textMuted,
                      marginBottom: 16,
                    }}
                  >
                    {linkify(para)}
                  </p>
                ))}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
