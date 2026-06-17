"use client";

import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CheckmarkIcon } from "@/components/CheckmarkIcon";
import { CTASection } from "@/components/CTASection";

/* ──────────────────────────────────────────────
   Small helpers local to this page
   ────────────────────────────────────────────── */
const ImagePlaceholder = ({ label, ratio = "16 / 9", minHeight }) => (
  <div style={{
    width: "100%",
    aspectRatio: minHeight ? undefined : ratio,
    minHeight,
    borderRadius: 16,
    border: `1px dashed ${C.border}`,
    background: `repeating-linear-gradient(135deg, ${C.gray}, ${C.gray} 10px, ${C.white} 10px, ${C.white} 20px)`,
    display: "flex", alignItems: "center", justifyContent: "center",
    color: C.textMuted, fontSize: 12, fontWeight: 600,
    textTransform: "uppercase", letterSpacing: "0.08em",
    textAlign: "center", padding: 16,
  }}>
    {label}
  </div>
);

const SectionTitle = ({ eyebrow, title, subtitle, maxWidth = 640 }) => (
  <Reveal>
    {eyebrow && (
      <div style={{
        display: "inline-block", padding: "5px 14px", borderRadius: PILL_BORDER_RADIUS,
        background: "rgba(0,0,0,0.06)", fontSize: 11, fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "0.06em",
        color: C.seawave, marginBottom: 16,
      }}>{eyebrow}</div>
    )}
    <h2 style={{ fontSize: 48, fontWeight: 400, marginBottom: 12, letterSpacing: "-0.02em" }}>{title}</h2>
    {subtitle && (
      <p style={{ fontSize: 17, lineHeight: 1.6, color: C.textMuted, maxWidth, marginBottom: 52 }}>{subtitle}</p>
    )}
  </Reveal>
);

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function InRecipePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        gradient="lemon"
        breadcrumb={[{ label: "Solutions", href: "/solutions" }, { label: "Industrial Data Enrichment" }]}
        badge="InRecipe · Industrial Data Enrichment"
        frameworkBadge="Built on DD AI Labs. Production-deployed at Sarlin"
        title="Cut equipment data cleanup from months to hours"
        subtitle="Incomplete device registers quietly drain margin. Mispriced quotes, wrong spare parts, reactive maintenance. InRecipe enriches your equipment register automatically, so your team builds quotes, plans maintenance, and reports on data they can actually trust."
        primaryButton={{ label: "Book a free call", href: CALENDLY_URL }}
        secondaryButton={{ label: "Back to all solutions", href: "/solutions" }}
      />

      {/* THE SILENT COST */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="The problem"
            title="The silent cost of disconnected industrial data"
            subtitle="One missing spec rarely feels critical. But the effects cascade. From the engineer who can't find it, to the quote that goes out wrong, to the margin that quietly disappears."
          />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { title: "Incomplete data", body: "Manufacturer, power rating, pressure, dimensions. Technical fields are missing or inconsistent across your register." },
              { title: "Manual search", body: "Teams spend hours digging through spec sheets, supplier portals, and old PDFs to recover device details." },
              { title: "Incomplete BOMs", body: "Maintenance quotes and spare-part plans are built on guesswork. Because the underlying data won't support anything else." },
              { title: "Lost margin", body: "Mispriced quotes, wrong parts ordered, delayed maintenance. Each disconnected record erodes the number at the bottom." },
            ].map((item, i, arr) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{
                  background: C.gray, borderRadius: 16, padding: "28px 22px",
                  borderTop: `3px solid ${i === arr.length - 1 ? C.seawave : C.lemon}`,
                  height: "100%",
                  position: "relative",
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: C.seawave,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    marginBottom: 12,
                  }}>{`Stage ${i + 1}`}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT DOES. 3 VALUE PROPS */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="What you get"
            title="Incomplete registers into structured asset data"
            subtitle="InRecipe transforms raw equipment lists into rich, standardized records. Enabling smarter maintenance, better procurement, and data-driven decisions."
          />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              {
                title: "Clean master data at scale",
                body: "10,000 device records standardized in hours. A job that used to take a dedicated person months.",
              },
              {
                title: "Accurate maintenance quotes",
                body: "A service manager uploads a device list and gets complete technical specs in minutes. Cutting quote preparation time by ~80%.",
              },
              {
                title: "Spare part mapping",
                body: "A service manager selects a device type and instantly sees the spare parts needed for maintenance. Eliminating hours of manual catalog searching per quote.",
                badge: "Coming soon",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "32px 28px", border: `1px solid ${C.border}`,
                  height: "100%", position: "relative",
                }}>
                  {item.badge && (
                    <span style={{
                      position: "absolute", top: 20, right: 20,
                      padding: "4px 10px", borderRadius: PILL_BORDER_RADIUS,
                      background: C.turquoise, fontSize: 10, fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.08em", color: C.black,
                    }}>{item.badge}</span>
                  )}
                  <ImagePlaceholder label={`Illustration · ${item.title}`} minHeight={140} />
                  <h3 style={{ fontSize: 20, fontWeight: 500, marginTop: 20, marginBottom: 10, letterSpacing: "-0.01em" }}>{item.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="How it works"
            title="From raw device name to 20+ structured fields"
            subtitle="AI identifies manufacturer, model, device type, segment, dimensions and 20+ fields. From just a device name. Every rule is AI-generated and adapted to your register."
          />

          {/* Pipeline */}
          <div style={{
            display: "grid", gridTemplateColumns: "minmax(0, 1fr) 40px minmax(0, 2.4fr) 40px minmax(0, 1fr)",
            gap: 0, alignItems: "stretch",
          }} className="dd-pipeline-grid">
            {/* Raw input */}
            <Reveal>
              <div style={{
                background: C.beige, borderRadius: CARD_BORDER_RADIUS,
                padding: "24px 20px", border: `1px solid ${C.border}`,
                display: "flex", flexDirection: "column", justifyContent: "center",
                height: "100%",
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Raw input</div>
                <code style={{
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                  fontSize: 14, lineHeight: 1.5, color: C.black,
                  background: C.white, padding: "12px 14px", borderRadius: 10,
                  border: `1px solid ${C.border}`, display: "block",
                  wordBreak: "break-word",
                }}>Compair L15-10A K1 ruuvikompressori</code>
              </div>
            </Reveal>
            <div className="dd-pipeline-arrow" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: C.seawave, fontSize: 24 }}>→</div>

            {/* Middle steps */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { label: "Parse", desc: "Extract known patterns from device names and codes." },
                { label: "Search", desc: "Look up specs in manufacturer databases and datasheets." },
                { label: "Enrich", desc: "Fill missing fields, standardize categories and units." },
              ].map((step, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <div style={{
                    background: C.seawave, borderRadius: CARD_BORDER_RADIUS,
                    padding: "22px 18px", color: C.white, height: "100%",
                    display: "flex", flexDirection: "column", gap: 8,
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8, background: C.lemon,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: C.black, fontWeight: 700, fontSize: 14, marginBottom: 4,
                    }}>{i + 1}</div>
                    <h4 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{step.label}</h4>
                    <p style={{ fontSize: 13, lineHeight: 1.55, margin: 0, opacity: 0.88 }}>{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="dd-pipeline-arrow" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: C.seawave, fontSize: 24 }}>→</div>

            {/* Structured output */}
            <Reveal delay={0.3}>
              <div style={{
                background: C.gray, borderRadius: CARD_BORDER_RADIUS,
                padding: "22px 20px", border: `1px solid ${C.border}`,
                height: "100%", fontSize: 13, lineHeight: 1.7,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Structured output</div>
                {[
                  ["Manufacturer", "Ingersoll Rand"],
                  ["Power", "15 kW"],
                  ["Pressure", "10 bar"],
                  ["Voltage", "400 V"],
                  ["Capacity", "2.4 m³/min"],
                  ["Weight", "345 kg"],
                  ["Maintenance", "12 months"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8, borderBottom: `1px dashed ${C.border}`, padding: "4px 0" }}>
                    <span style={{ color: C.textMuted }}>{k}</span>
                    <span style={{ fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
                <div style={{ color: C.textMuted, fontSize: 12, marginTop: 8, fontStyle: "italic" }}>…and 13+ more fields</div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <p style={{ textAlign: "center", fontSize: 13, color: C.textMuted, fontStyle: "italic", marginTop: 32 }}>
              All powered by AI. Including rule generation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CASE SARLIN */}
      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Proof"
            title="Case Sarlin: 2,500 devices enriched in under 3 hours"
          />
          <div className="dd-case-layout" style={{
            display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32,
            alignItems: "stretch",
          }}>
            <Reveal>
              <div style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS,
                padding: "36px 32px", border: `1px solid ${C.border}`, height: "100%",
              }}>
                <img src="/images/logos/Sarlin_BW.png" alt="Sarlin" style={{ height: 28, marginBottom: 20 }} />
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>The challenge</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: C.textMuted, marginBottom: 24 }}>
                  Sarlin maintained a register of 2,500 devices with minimal structured data. Device names existed, but manufacturer, power rating, type classification, and other technical details were largely missing or inconsistent. This impacted maintenance contract pricing, spare-part planning, and reporting accuracy.
                </p>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>What we deployed</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Enriched each device with 17 new technical fields",
                    "Standardized device types, categories and manufacturers across the entire register",
                    "Confidence scores so domain experts could focus review on uncertain results",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <CheckmarkIcon size={16} />
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: C.textMuted }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
                <ImagePlaceholder label="Photo · Sarlin field engineer" ratio="4 / 3" />
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "24px 22px", border: `1px solid ${C.border}`, flex: 1,
                }}>
                  {[
                    { k: "2,500", v: "devices enriched in under 3 hours" },
                    { k: "17", v: "new technical fields added per device" },
                    { k: "50%", v: "accuracy improvement in the maintenance contract pricing ML model" },
                    { k: "Live", v: "data-quality dashboards tracking fill rates and confidence" },
                  ].map((s, i) => (
                    <div key={i} style={{
                      display: "flex", gap: 14, alignItems: "baseline",
                      padding: "10px 0",
                      borderBottom: i < 3 ? `1px solid ${C.border}` : "none",
                    }}>
                      <div style={{ fontSize: 22, fontWeight: 500, color: C.seawave, minWidth: 70, letterSpacing: "-0.01em" }}>{s.k}</div>
                      <div style={{ fontSize: 13.5, lineHeight: 1.55, color: C.textMuted }}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Before & after"
            title="What changes in your register"
          />
          <div className="dd-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <Reveal>
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.textMuted, marginBottom: 16 }}>Today</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Manual updates by searching spec sheets, websites, and product catalogs.",
                    "Device types and categories inconsistent across the register.",
                    "No visibility into data quality or completeness.",
                    "Duplicate manufacturers and inconsistent naming (e.g., \"Gardner Denver\" vs \"Gardener D.\").",
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: C.gray, borderRadius: 12,
                      padding: "16px 18px", fontSize: 14.5, lineHeight: 1.55, color: C.textMuted,
                    }}>{item}</div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: C.seawave, marginBottom: 16 }}>With InRecipe</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Automatic enrichment of manufacturer, model, power, pressure, voltage, and more. From just the device name.",
                    "Standardized taxonomy aligned to your operational model.",
                    "Live data-quality dashboards tracking fill rates and confidence scores.",
                    "AI agents merge and normalize values across the entire register, with reasoning logged.",
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: C.seawave, color: C.white, borderRadius: 12,
                      padding: "16px 18px", fontSize: 14.5, lineHeight: 1.55,
                      display: "flex", gap: 10, alignItems: "flex-start",
                    }}>
                      <div style={{ color: C.lemon, fontWeight: 700, marginTop: 1 }}>✓</div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO NEEDS THIS */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Who it's for"
            title="Who needs structured asset data?"
            subtitle="InRecipe is built for organizations that live and die by the quality of their equipment register."
          />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              {
                title: "Service & aftermarket companies",
                situation: "Maintain thousands of devices with incomplete technical data.",
                need: "Structured, enriched device data for reporting and contract pricing.",
                outcome: "Faster quotes, better margins, reliable reporting.",
              },
              {
                title: "Industrial distributors",
                situation: "Wide item catalogs from multiple suppliers. Inconsistent device and master data across systems.",
                need: "Standardized, clean catalogs to operate efficiently.",
                outcome: "Clean catalogs, fewer duplicates, efficient procurement.",
              },
              {
                title: "Production plants",
                situation: "In-house maintenance organizations with legacy equipment registers full of gaps.",
                need: "Reliable asset data for maintenance planning.",
                outcome: "Proactive maintenance planning and spare-part optimization.",
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "28px 24px", border: `1px solid ${C.border}`,
                  height: "100%", display: "flex", flexDirection: "column", gap: 14,
                }}>
                  <ImagePlaceholder label={`Icon · ${p.title}`} minHeight={72} />
                  <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em", margin: 0 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>{p.situation}</p>
                  <div style={{ fontSize: 13.5, lineHeight: 1.55, color: C.textMuted }}>
                    <strong style={{ color: C.black }}>Need:</strong> {p.need}
                  </div>
                  <div style={{
                    marginTop: "auto", background: C.lemon,
                    padding: "10px 14px", borderRadius: PILL_BORDER_RADIUS,
                    fontSize: 13, fontWeight: 600, color: C.black, textAlign: "center",
                  }}>{p.outcome}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES + UI SCREENSHOT */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle eyebrow="Key features" title="What's inside the platform" />
          <div className="dd-features-split" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40, alignItems: "center" }}>
            <Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {[
                  {
                    title: "Customizable enriched fields",
                    body: "Default fields cover manufacturer, model, device type, equipment category, industrial segment, dimensions, weight, maintenance interval, and more. Fully customizable to your taxonomy.",
                  },
                  {
                    title: "Industrial enrichment pipeline",
                    body: "Automatically extracts power (kW), pressure (bar), voltage, cooling type, lubrication, and more. Straight from device names.",
                  },
                  {
                    title: "Pre-trained on industrial data",
                    body: "Pre-trained on industrial compressors, air treatment, dryers, and more. Easily extensible to other device domains.",
                  },
                ].map((f, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${i % 2 === 0 ? C.lemon : C.turquoise}`, paddingLeft: 18 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, margin: 0 }}>{f.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ImagePlaceholder label="Screenshot · Review AI suggestions UI" ratio="16 / 11" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST & AUDITABILITY */}
      <section style={{ background: C.beige }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Trust"
            title="Human-in-the-loop, not black box"
            subtitle="AI suggests, humans approve. No automatic, untraceable changes are pushed to your production systems."
          />
          <div className="dd-trust-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32, alignItems: "start" }}>
            <Reveal>
              <ImagePlaceholder label="Screenshot · Field-by-field review with reasoning" ratio="4 / 3" />
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  {
                    title: "Confidence scoring",
                    body: "Every enriched field gets a confidence score. Your experts review only what matters.",
                  },
                  {
                    title: "Data provenance",
                    body: "Transparent reasoning directly from the data origin. E.g., linked manufacturer product catalogs.",
                  },
                  {
                    title: "Full auditability",
                    body: "Complete processing history and LLM reasoning are logged for transparency.",
                  },
                ].map((t, i) => (
                  <div key={i} style={{
                    background: C.white, borderRadius: CARD_BORDER_RADIUS,
                    padding: "22px 24px", border: `1px solid ${C.border}`,
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{t.title}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>{t.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BUILT-IN AI AGENTS */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Built-in AI agents"
            title="Intelligent consolidation across the register"
            subtitle="Beyond row-level enrichment. Agents find and fix duplicates, inconsistencies, and legacy naming across thousands of records."
          />
          <div className="dd-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <Reveal>
              <div style={{
                background: C.gray, borderRadius: CARD_BORDER_RADIUS,
                padding: "28px 28px", border: `1px solid ${C.border}`, height: "100%",
              }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Bulk operations</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>
                  Manually or automatically consolidate duplicate fields and normalize values across thousands of records instantly.
                </p>
                <ImagePlaceholder label="Screenshot · Bulk value normalization" ratio="16 / 9" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{
                background: C.gray, borderRadius: CARD_BORDER_RADIUS,
                padding: "28px 28px", border: `1px solid ${C.border}`, height: "100%",
              }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Intelligent reasoning</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, marginBottom: 20 }}>
                  Agents don't just change names. They log the reasoning (e.g. noting that Zander was integrated into Parker's filtration division).
                </p>
                <ImagePlaceholder label="Screenshot · Manufacturer standardization agent" ratio="16 / 9" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DATA QUALITY VISIBILITY */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Visibility"
            title="See your data quality at a glance"
            subtitle="Visualize field fill rates and data distributions to get a complete picture of data quality. And spot anomalies in your fleet."
          />
          <div className="dd-features-split" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32, alignItems: "center" }}>
            <Reveal>
              <ImagePlaceholder label="Screenshot · Data-quality dashboard" ratio="16 / 10" />
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "22px 24px", border: `1px solid ${C.border}` }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>Fill rates</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>Instantly see which technical fields are missing across thousands of records.</p>
                </div>
                <div style={{ background: C.white, borderRadius: CARD_BORDER_RADIUS, padding: "22px 24px", border: `1px solid ${C.border}` }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>Distributions</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>Track distributions. Power, pressure, weight. And spot anomalies in your fleet.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="dd-grain" style={{ background: C.lemon }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle eyebrow="Business value" title="How it creates value" />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              {
                title: "Faster data cleanup",
                body: "Transform thousands of records in hours, not months. So your team focuses on high-value work instead of data entry.",
              },
              {
                title: "Higher data quality",
                body: "Standardized categories and confidence scores mean you can finally trust your reports and make decisions on real data.",
              },
              {
                title: "Better maintenance & procurement",
                body: "Accurate device data for quotes and spare-part ordering leads to better margins and fewer costly surprises in the field.",
              },
              {
                title: "Cost-efficient AI",
                body: "Targeted AI calls paired with human review. You pay for value added. Not for unnecessary processing.",
              },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "28px 28px", border: `1px solid ${C.border}`, height: "100%",
                }}>
                  <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, margin: 0 }}>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT MODELS */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Deployment"
            title="Two ways to run it"
            subtitle="Start with a one-off cleanup. Or embed enrichment into your data platform so every new device enters the register clean."
          />
          <div className="dd-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              {
                title: "Stand-alone cleanup tool",
                body: "Upload equipment registers, enrich and standardize, export clean data.",
                bestFor: "One-time or periodic master-data improvement projects. Immediate triage.",
                bg: C.gray,
                accent: C.lemon,
              },
              {
                title: "Embedded in asset management workflows",
                body: "Integrate enrichment directly into your existing data platform. New devices entering the register are automatically enriched, categorized, and linked.",
                bestFor: "Continuous, automated data governance and foundation for AI use cases.",
                bg: C.seawave,
                accent: C.turquoise,
                dark: true,
              },
            ].map((d, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  background: d.bg, borderRadius: CARD_BORDER_RADIUS,
                  padding: "32px 32px", border: d.dark ? "none" : `1px solid ${C.border}`,
                  color: d.dark ? C.white : C.black, height: "100%",
                  display: "flex", flexDirection: "column", gap: 16,
                }}>
                  <h3 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>{d.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: d.dark ? "rgba(255,255,255,0.85)" : C.textMuted }}>{d.body}</p>
                  <div style={{
                    marginTop: "auto",
                    background: d.accent,
                    color: C.black,
                    padding: "12px 16px", borderRadius: 12,
                    fontSize: 13.5, lineHeight: 1.5,
                  }}>
                    <strong>Best for:</strong> {d.bestFor}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE SECURITY */}
      <section style={{ background: C.gray }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle eyebrow="Security" title="Enterprise-grade security and control" />
          <div className="dd-security-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { title: "Your data, your control", body: "Deployment available within your own local environment." },
              { title: "Containerized isolation", body: "Docker-based deployment ensures clean, secure, isolated operation." },
              { title: "Complete audit trails", body: "Every AI decision, source link, and confidence score is permanently logged." },
              { title: "Human-in-the-loop", body: "AI acts as an advisor. No automatic writes to production ERPs without expert approval." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div style={{
                  background: C.white, borderRadius: CARD_BORDER_RADIUS,
                  padding: "24px 22px", border: `1px solid ${C.border}`, height: "100%",
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: 2, background: C.seawave, marginBottom: 14,
                  }} />
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: C.textMuted, margin: 0 }}>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT ROADMAP */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Roadmap"
            title="Built on a foundation. Extending upward"
            subtitle="Industrial data enrichment is the foundation. The capabilities coming next all build on the same structured asset registry."
          />
          <div className="dd-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              {
                title: "Spare part & item mapping",
                body: "Build a cross-reference between internal codes, supplier codes, and manufacturer parts. Automatically identify required spare parts for each device.",
                bg: C.gray,
              },
              {
                title: "Price enrichment",
                body: "Parse supplier price lists into structured data, match via the foundational registry, and refresh device pricing automatically.",
                bg: C.turquoise,
              },
              {
                title: "Substitute identification",
                body: "Suggest alternative parts when prices rise, lead times increase, or availability drops.",
                bg: C.lemon,
              },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: r.bg, borderRadius: CARD_BORDER_RADIUS,
                  padding: "28px 24px", height: "100%",
                }}>
                  <div style={{
                    fontSize: 10, fontWeight: 700, color: C.seawave,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    marginBottom: 12,
                  }}>Coming soon</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{r.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: C.textMuted, margin: 0 }}>{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <div style={{
              marginTop: 20,
              background: C.seawave, color: C.white,
              borderRadius: CARD_BORDER_RADIUS,
              padding: "20px 28px", textAlign: "center",
              fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em",
            }}>
              Industrial Data Enrichment. The foundation
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILOT PARTNERSHIP */}
      <section className="dd-grain-subtle" style={{ background: `linear-gradient(to right, ${C.beige}, ${C.lemon})` }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
          <SectionTitle
            eyebrow="Pilot partnership"
            title="Both sides invest, both sides win"
            subtitle="A shared commitment to proving the value on your real data. After the pilot, you keep all enriched data. No lock-in."
          />

          <div className="dd-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
            <Reveal>
              <div style={{
                background: C.white, borderRadius: CARD_BORDER_RADIUS,
                padding: "28px 28px", border: `1px solid ${C.border}`, height: "100%",
              }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 16, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.06em" }}>You get</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Your equipment register enriched with complete technical specifications of your choice, validated against your domain expertise.",
                    "A measurable improvement in data quality that directly impacts maintenance quoting, spare-part planning, and reporting.",
                    "A representative device sample processed end-to-end, with accuracy measured against your own golden dataset.",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <CheckmarkIcon size={16} />
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: C.textMuted }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{
                background: C.seawave, borderRadius: CARD_BORDER_RADIUS,
                padding: "28px 28px", color: C.white, height: "100%",
              }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 16, color: C.lemon, textTransform: "uppercase", letterSpacing: "0.06em" }}>We get</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Real-world industrial data to validate and sharpen our enrichment engine across new device categories and manufacturers.",
                    "A reference case with measurable results, and the right to use derived, non-confidential insights to improve the product.",
                    "Dedicated Data Design product development. That cost stays on our side, not yours.",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ color: C.lemon, fontWeight: 700, marginTop: 2, fontSize: 14 }}>✓</div>
                      <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.88)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Investment strip */}
          <Reveal delay={0.2}>
            <div style={{
              background: C.white, borderRadius: CARD_BORDER_RADIUS,
              padding: "28px 32px", border: `1px solid ${C.border}`,
              display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "center",
            }} className="dd-pilot-investment">
              <div style={{ borderLeft: `4px solid ${C.seawave}`, paddingLeft: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Your investment</div>
                <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", color: C.black, lineHeight: 1.1 }}>3,000 – 8,000 €</div>
                <div style={{ fontSize: 13, color: C.textMuted, marginTop: 4 }}>depending on register size</div>
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.65, color: C.textMuted }}>
                Covers configuration, a taxonomy-alignment workshop, AI processing costs, and validation support. Data Design invests separately in product development. That cost is ours. <strong style={{ color: C.black }}>The pilot fee is credited toward your first 6 months of continued platform use.</strong>
              </div>
            </div>
          </Reveal>

          {/* Scope strip */}
          <Reveal delay={0.28}>
            <div className="dd-scope-strip" style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 16,
            }}>
              {[
                { k: "4–6 weeks", v: "Pilot duration" },
                { k: "50–500 devices", v: "Typical dataset size" },
                { k: "Validated enrichment + reference case", v: "Outcome" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: C.white, borderRadius: 12,
                  padding: "16px 18px", border: `1px solid ${C.border}`,
                }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: C.black, marginBottom: 4 }}>{s.k}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: C.seawave, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="In 30 minutes, you'll know if InRecipe fits your register"
        subtitle="Book a free call. Bring a sample of your equipment register if you want. We'll show you what enrichment looks like on your actual data, no slideware."
        image="/images/illustrations/DD-Illustration-2.png"
        secondaryLabel="See all solutions"
        secondaryHref="/solutions"
      />

      {/* Responsive tweaks (scoped via inline styles isn't possible. Piggyback off shared classes where we can) */}
      <style jsx>{`
        @media (max-width: 900px) {
          :global(.dd-pipeline-grid) { grid-template-columns: 1fr !important; gap: 16px !important; }
          :global(.dd-pipeline-arrow) { display: none !important; }
          :global(.dd-case-layout) { grid-template-columns: 1fr !important; }
          :global(.dd-compare-grid) { grid-template-columns: 1fr !important; }
          :global(.dd-features-split) { grid-template-columns: 1fr !important; }
          :global(.dd-trust-grid) { grid-template-columns: 1fr !important; }
          :global(.dd-security-grid) { grid-template-columns: 1fr 1fr !important; }
          :global(.dd-pilot-investment) { grid-template-columns: 1fr !important; gap: 20px !important; }
          :global(.dd-scope-strip) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
