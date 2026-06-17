"use client";

import { useEffect, useState } from "react";
import { C, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { InsightCard } from "@/components/InsightCard";
import { CheckmarkIcon } from "@/components/CheckmarkIcon";
import { getInitials } from "@/lib/utils";

const CATEGORY_COLORS = {
  "Expert Talk": C.turquoise,
  "AI Insights": C.lemon,
  "News": C.beige,
};

/* ═══════════════════════════════════════
   Reading Progress Bar
   ═══════════════════════════════════════ */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="dd-reading-progress" style={{ width: `${progress}%` }} />;
}

/**
 * Reusable template for insight/article detail pages.
 * Editorial magazine aesthetic. Serif titles, drop caps, decorative pull quotes.
 *
 * Props:
 * - title, category, date, readTime
 * - author, authorPhoto, authorRole, authorBio
 * - image (hero/featured image)
 * - tags (string[])
 * - keyTakeaways (string[], optional)
 * - relatedArticles ({title, description, category, date, author, authorPhoto, image, href}[], optional)
 * - children (article body as JSX)
 */
export function InsightArticleTemplate({
  title,
  category,
  date,
  readTime,
  author,
  authorPhoto,
  authorRole,
  authorBio,
  image,
  tags = [],
  keyTakeaways = [],
  relatedArticles = [],
  children,
}) {
  const badgeBg = CATEGORY_COLORS[category] || C.gray;
  const initials = getInitials(author);

  return (
    <>
      <ReadingProgress />

      {/* ═══════════════════════════════════
           HERO. Editorial header
         ═══════════════════════════════════ */}
      <section style={{
        paddingTop: 72,
        background: C.white,
      }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "56px 40px 0" }}>
          {/* Breadcrumb */}
          <Reveal>
            <nav style={{ marginBottom: 40 }}>
              <span style={{ fontSize: 13, color: C.textMuted, letterSpacing: "0.02em" }}>
                <a href="/insights" style={{ color: C.seawave, textDecoration: "none", fontWeight: 500 }}>Insights</a>
                <span style={{ margin: "0 10px", color: C.border }}>/</span>
                <span>{category}</span>
              </span>
            </nav>
          </Reveal>

          {/* Meta strip */}
          <Reveal delay={0.05}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
              <span style={{
                padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS, background: badgeBg,
                fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
              }}>{category}</span>
              {date && (
                <span style={{ fontSize: 13, color: C.textMuted }}>{date}</span>
              )}
              {readTime && (
                <>
                  {date && <span style={{ color: C.border }}>|</span>}
                  <span style={{ fontSize: 13, color: C.textMuted }}>{readTime}</span>
                </>
              )}
            </div>
          </Reveal>

          {/* Title. Serif, editorial scale */}
          <Reveal delay={0.1}>
            <h1 className="dd-article-serif" style={{
              fontSize: 54, letterSpacing: "-0.025em",
              lineHeight: 1.12, maxWidth: 820, marginBottom: 32,
              color: C.black,
            }}>
              {title}
            </h1>
          </Reveal>

          {/* Author strip */}
          <Reveal delay={0.15}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16,
              paddingBottom: 36, borderBottom: `1px solid ${C.border}`,
            }}>
              {authorPhoto ? (
                <img src={authorPhoto} alt={author} style={{
                  width: 52, height: 52, borderRadius: "50%", objectFit: "cover",
                  border: `2px solid ${C.beige}`,
                }} />
              ) : (
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.lemon}, ${C.turquoise})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, fontWeight: 600, color: `${C.black}33`,
                }}>{initials}</div>
              )}
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.black }}>{author}</div>
                {authorRole && (
                  <div style={{ fontSize: 13, color: C.textMuted, marginTop: 2 }}>{authorRole}</div>
                )}
              </div>
              {/* Decorative accent line */}
              <div style={{
                marginLeft: "auto", width: 48, height: 3,
                background: C.seawave, borderRadius: 2, opacity: 0.4,
              }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════
           FEATURED IMAGE
         ═══════════════════════════════════ */}
      {image && (
        <section style={{ background: C.white }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "36px 40px 0" }}>
            <Reveal>
              <div style={{
                borderRadius: 20, overflow: "hidden",
                background: C.gray,
              }}>
                <img src={image} alt="" className="dd-article-hero-img" style={{
                  width: "100%", height: "auto", objectFit: "contain",
                  display: "block",
                }} />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════
           ARTICLE BODY + SIDEBAR
         ═══════════════════════════════════ */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "52px 40px 0" }}>
          {/* Two-column: article body + sticky sidebar */}
          <div className="dd-article-layout" style={{
            display: "flex", gap: 56, alignItems: "flex-start",
          }}>
            {/* Left column. Article text */}
            <div className="dd-article-main" style={{ flex: 1, minWidth: 0 }}>
              <Reveal>
                <div className="dd-article-body">
                  {children}
                </div>
              </Reveal>
            </div>

            {/* Right column. Sticky sidebar */}
            {keyTakeaways.length > 0 && (
              <div className="dd-article-sidebar" style={{
                width: 300, flexShrink: 0,
                position: "sticky", top: 100, alignSelf: "flex-start",
              }}>
                <Reveal delay={0.15}>
                  <div className="dd-sidebar-takeaways" style={{
                    background: C.white, borderRadius: 0, padding: "28px 28px",
                  }}>
                    <div style={{
                      fontSize: 11, fontWeight: 600, textTransform: "uppercase",
                      letterSpacing: "0.08em", color: C.seawave, marginBottom: 20,
                    }}>
                      Key takeaways
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                      {keyTakeaways.map((item, i) => (
                        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <div style={{
                            width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                            background: `${C.seawave}12`, display: "flex",
                            alignItems: "center", justifyContent: "center", marginTop: 1,
                          }}>
                            <CheckmarkIcon color={C.seawave} size={12} />
                          </div>
                          <span style={{ fontSize: 13.5, lineHeight: 1.6, color: C.textMuted }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            )}
          </div>

          {/* Below two-column: tags + author bio */}
          <div style={{ maxWidth: 820 }}>
            {tags.length > 0 && (
              <Reveal>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 40 }}>
                  {tags.map((tag) => (
                    <span key={tag} className="dd-tag-pill" style={{
                      padding: "7px 18px", borderRadius: PILL_BORDER_RADIUS,
                      background: C.gray, fontSize: 13, fontWeight: 500, color: C.textMuted,
                    }}>{tag}</span>
                  ))}
                </div>
              </Reveal>
            )}

            {authorBio && (
              <Reveal>
                <div className="dd-author-card" style={{
                  display: "flex", gap: 24, padding: "32px 32px", marginTop: 40,
                  background: C.gray, borderRadius: 16, alignItems: "flex-start",
                }}>
                  {authorPhoto ? (
                    <img src={authorPhoto} alt={author} style={{
                      width: 72, height: 72, borderRadius: "50%", objectFit: "cover",
                      flexShrink: 0, border: `2px solid ${C.beige}`,
                    }} />
                  ) : (
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%", flexShrink: 0,
                      background: `linear-gradient(135deg, ${C.lemon}, ${C.turquoise})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 24, fontWeight: 600, color: `${C.black}33`,
                    }}>{initials}</div>
                  )}
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 2 }}>{author}</div>
                    {authorRole && (
                      <div style={{ fontSize: 13, color: C.seawave, fontWeight: 500, marginBottom: 10 }}>{authorRole}</div>
                    )}
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted }}>{authorBio}</p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           RELATED ARTICLES
         ═══════════════════════════════════ */}
      {relatedArticles.length > 0 && (
        <section style={{ background: C.gray }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 40 }}>
                <h2 className="dd-article-serif" style={{
                  fontSize: 36, letterSpacing: "-0.02em",
                }}>
                  More from our team
                </h2>
                <div style={{ flex: 1, height: 1, background: C.border }} />
              </div>
            </Reveal>
            <div className="dd-insights-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
            }}>
              {relatedArticles.map((article, i) => (
                <Reveal key={article.title} delay={i * 0.06}>
                  <InsightCard {...article} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════
           CTA
         ═══════════════════════════════════ */}
      <CTASection
        heading="Want to discuss how this applies to your organization?"
        subtitle="Book a free 30-minute call. You'll leave with clarity on your next step. Not a sales pitch."
        secondaryLabel="See our services"
        secondaryHref="/services"
        image="/images/illustrations/DD-Illustration-1.png"
      />
    </>
  );
}

/* ══════════════════════════════════════════════
   Prose helper components. Editorial style
   ══════════════════════════════════════════════ */

/** Section heading within article body. Serif */
export function ArticleHeading({ children }) {
  return (
    <h2 className="dd-article-serif" style={{
      fontSize: 30, letterSpacing: "-0.015em",
      marginTop: 48, marginBottom: 18, lineHeight: 1.25, color: C.black,
    }}>{children}</h2>
  );
}

/** Question in Q&A / Expert Talk format. With decorative divider above */
export function ArticleQuestion({ children }) {
  return (
    <>
      <div className="dd-article-divider" />
      <h3 style={{
        fontSize: 21, fontWeight: 600, letterSpacing: "-0.01em",
        marginBottom: 16, lineHeight: 1.35, color: C.black,
      }}>{children}</h3>
    </>
  );
}

/** Standard body paragraph */
export function ArticleParagraph({ children }) {
  return (
    <p style={{
      fontSize: 18, lineHeight: 1.8, color: C.textMuted,
      marginBottom: 24,
    }}>{children}</p>
  );
}

/** Pull quote / highlight block. Editorial with oversized quotation mark */
export function ArticleQuote({ children }) {
  return (
    <blockquote style={{
      margin: "40px 0", padding: "36px 36px 32px 36px",
      background: C.beige, borderRadius: 0,
      borderLeft: `3px solid ${C.seawave}`,
      position: "relative",
    }}>
      {/* Decorative oversized quote mark */}
      <span className="dd-pullquote-mark" style={{
        top: 12, left: 28,
      }}>&ldquo;</span>
      {/* <div> not <p>: markdown blockquotes wrap their text in a <p>, which
          would nest <p> inside <p>. Inner paragraph inherits styling via CSS. */}
      <div className="dd-article-quote-body" style={{
        fontSize: 19, lineHeight: 1.7, fontStyle: "italic",
        color: C.black, fontWeight: 400,
        paddingTop: 8, position: "relative",
      }}>{children}</div>
    </blockquote>
  );
}

/** Lead / intro paragraph. Drop cap on first letter.
 *  Rendered as a <div> (not <p>) because MDX wraps the inner text in its own
 *  <p>; a <p> here would nest <p> inside <p> and break hydration. The inner
 *  paragraph inherits this element's typography via globals.css. */
export function ArticleLead({ children }) {
  return (
    <div className="dd-drop-cap dd-article-lead" style={{
      fontSize: 20, lineHeight: 1.75, color: C.black,
      marginBottom: 32, fontWeight: 400,
    }}>{children}</div>
  );
}
