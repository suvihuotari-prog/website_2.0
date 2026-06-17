import Link from "next/link";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS, CARD_BORDER_RADIUS } from "@/lib/tokens";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { getAllCases } from "@/lib/mdx";

export const metadata = {
  title: "Customer Stories | Data Design",
  description: "Real results from leading Finnish and international companies. AI strategy, data governance, customer intelligence, and predictive operations.",
  alternates: {
    canonical: "/customer-stories",
    languages: { en: "/customer-stories", fi: "/fi/customer-stories" },
  },
};

export default function CustomerStoriesPage() {
  const cases = getAllCases("en");

  // Featured: ensimmäiset 3 vahvinta (Tokmanni, Anora, Sandvik tai järjestyksen mukaan)
  const featuredCompanies = ["Tokmanni", "Anora", "Sandvik"];
  const featured = featuredCompanies
    .map((name) => cases.find((c) => c.company === name))
    .filter(Boolean);
  const rest = cases.filter((c) => !featured.includes(c));

  return (
    <>
      <HeroSection
        gradient="lemon"
        gradientRight
        badge="Customer Stories"
        title="Real results from leading companies"
        subtitle="From AI strategy to data governance, from customer intelligence to predictive operations. See how our clients turned data into measurable business impact."
      />

      {/* Featured cases */}
      {featured.length > 0 && (
        <section style={{ background: C.white }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <h2 style={{ fontSize: 36, fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 32 }}>
                Featured stories
              </h2>
            </Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
            }}>
              {featured.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.06}>
                  <StoryCard story={c} large />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All other cases */}
      {rest.length > 0 && (
        <section style={{ background: C.gray }}>
          <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>
            <Reveal>
              <h2 style={{ fontSize: 36, fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 32 }}>
                More stories
              </h2>
            </Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}>
              {rest.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.04}>
                  <StoryCard story={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Want similar results in your organization?"
        subtitle="Book a free 30-minute call. We'll discuss how AI could transform your business."
        image="/images/illustrations/DD-Illustration-3.png"
        imageSize={70}
      />
    </>
  );
}

function StoryCard({ story, large = false }) {
  return (
    <Link
      href={`/customer-stories/${story.slug}`}
      style={{
        display: "block",
        background: C.white,
        borderRadius: CARD_BORDER_RADIUS,
        border: `1px solid ${C.border}`,
        padding: large ? "32px 28px" : "24px 24px",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        height: "100%",
      }}
    >
      <div style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: PILL_BORDER_RADIUS,
        background: C.turquoise,
        fontSize: 11,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        color: C.black,
        marginBottom: 16,
      }}>
        {story.badge}
      </div>

      {story.companyLogo && (
        <img
          src={story.companyLogo}
          alt={story.company}
          style={{ height: large ? 40 : 32, marginBottom: 16, display: "block" }}
        />
      )}
      {!story.companyLogo && (
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>{story.company}</div>
      )}

      <h3 style={{
        fontSize: large ? 19 : 16,
        fontWeight: 500,
        color: C.black,
        lineHeight: 1.3,
        marginBottom: 12,
      }}>
        {story.title}
      </h3>

      <p style={{
        fontSize: 14,
        lineHeight: 1.6,
        color: C.textMuted,
        marginBottom: 16,
      }}>
        {story.subtitle}
      </p>

      <div style={{
        fontSize: 14,
        fontWeight: 500,
        color: C.seawave,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}>
        Read story
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}
