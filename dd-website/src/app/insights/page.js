"use client";

import { useState } from "react";
import { C, CALENDLY_URL, CONTAINER_MAX_WIDTH, SECTION_PADDING, PILL_BORDER_RADIUS } from "@/lib/tokens";
import { Reveal } from "@/components/Reveal";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { InsightCard } from "@/components/InsightCard";

const ARTICLES = [
  /* ── Expert Talks ── */
  {
    title: "Clarifying Data Ownership Opened the Door to Using It Effectively",
    description: "Suvi Huotari explains how clarifying data ownership made real data use possible.",
    category: "Expert Talk",
    author: "Suvi Huotari",
    authorPhoto: "/images/people/SuviHuotari.jpg",
    image: "/images/people/SuviHuotari.jpg",
    href: "/insights/clarifying-data-ownership",
  },
  {
    title: "Taking Personalization from Data Science to Production",
    description: "Amir Vaheb explains how transparent AI-driven personalization turned a data science experiment into a business-critical capability.",
    category: "Expert Talk",
    author: "Amir Vaheb",
    authorPhoto: "/images/people/AmirVaheb.jpg",
    image: "/images/people/AmirVaheb_wide.jpg",
    href: "/insights/taking-personalization-to-production",
  },
  {
    title: "Better Project Decisions with Data",
    description: "Niko Föhr explains how project profitability can be predicted already before projects begin.",
    category: "Expert Talk",
    author: "Niko Föhr",
    authorPhoto: "/images/people/NikoFohr.jpg",
    image: "/images/people/NikoFohr_wide.jpg",
    href: "/insights/better-project-decisions-with-data",
  },
  {
    title: "How a Data Strategy Was Turned into Business Growth",
    description: "Toni Haapakoski explains how a data strategy can turn a company's business goals into concrete actions.",
    category: "Expert Talk",
    author: "Toni Haapakoski",
    authorPhoto: "/images/people/ToniHaapakoski.jpg",
    image: "/images/people/ToniHaapakoski_wide.jpg",
    href: "/insights/data-strategy-into-business-growth",
  },
  {
    title: "How Unified Data Management Set the Stage for Using AI",
    description: "Jaakko Mattila explains how a global organization built trust in its data through change management.",
    category: "Expert Talk",
    author: "Jaakko Mattila",
    authorPhoto: "/images/people/JaakkoMattila.png",
    image: "/images/people/JaakkoMattila_wide.png",
    href: "/insights/unified-data-management-for-ai",
  },
  {
    title: "Smarter Discount Pricing with Machine Learning",
    description: "Pekka Autere explains how machine learning delivered practical results in discount pricing.",
    category: "Expert Talk",
    author: "Pekka Autere",
    authorPhoto: "/images/people/PekkaAutere.png",
    image: "/images/people/PekkaAutere_wide.png",
    href: "/insights/smarter-discount-pricing-with-ml",
  },
  {
    title: "AI Strategies Outside the Comfort Zone",
    description: "Mika Aho explains how implementing AI strategies sometimes takes you outside your comfort zone.",
    category: "Expert Talk",
    author: "Mika Aho",
    authorPhoto: "/images/people/MikaAho.jpg",
    image: "/images/people/MikaAho_wide.jpg",
    href: "/insights/ai-strategies-outside-comfort-zone",
  },
  {
    title: "Making Business Data Speak Your Language",
    description: "Gaurav Khullar sheds light on how to talk with databases in natural language.",
    category: "Expert Talk",
    author: "Gaurav Khullar",
    authorPhoto: "/images/people/GauravKhullar.jpg",
    image: "/images/people/GauravKhullar_wide.jpg",
    href: "/insights/making-data-speak-your-language",
  },
  {
    title: "Can AI Price a Used Car Better Than a Salesperson?",
    description: "Mika Laukkanen explains how a machine learning model overcame skepticism to successfully automate used car pricing.",
    category: "Expert Talk",
    author: "Mika Laukkanen",
    authorPhoto: "/images/people/MikaLaukkanen.jpg",
    image: "/images/people/MikaLaukkanen_wide.jpg",
    href: "/insights/ai-pricing-used-cars",
  },

  /* ── AI Insights (Blog) ── */
  {
    title: "AI Requires Persistence: Why Few Projects Succeed on the First Attempt",
    description: "When the first implementation didn't work, we had to rethink our approach. The end result exceeded our original expectations.",
    category: "AI Insights",
    author: "Mika Aho",
    authorPhoto: "/images/people/MikaAho.jpg",
    image: "/images/illustrations/DD-Illustration-2.png",
    href: "/insights/ai-requires-persistence",
  },
  {
    title: "The Smart Way to Build an AI Innovation Portfolio",
    description: "Stop gambling on AI. Start building a strategic portfolio that balances risk and reward.",
    category: "AI Insights",
    author: "Mika Aho",
    authorPhoto: "/images/people/MikaAho.jpg",
    image: "/images/illustrations/DD-Illustration-3.png",
    href: "/insights/smart-ai-innovation-portfolio",
  },
  {
    title: "Five Truths about AI Strategies",
    description: "What every decision-maker should understand before getting started.",
    category: "AI Insights",
    author: "Mika Aho",
    authorPhoto: "/images/people/MikaAho.jpg",
    image: "/images/illustrations/DD-Illustration-4.png",
    href: "/insights/five-truths-about-ai-strategies",
  },
  {
    title: "AI-Powered Prospecting: Know Who to Talk to Instantly",
    description: "What if you could break the cycle of dead-end leads and instantly know which prospects are the right fit for your business?",
    category: "AI Insights",
    image: "/images/illustrations/DD-Illustration-1.png",
    href: "/insights/ai-powered-prospecting",
  },

  /* ── News ── */
  {
    title: "We've Updated Our Brand. Here's Why",
    description: "We're excited to officially launch our refreshed brand identity, sharpened positioning, and redesigned website.",
    category: "News",
    image: "/images/illustrations/DD-Illustration-2.png",
    href: "/insights/updated-brand",
  },
  {
    title: "Data Design Expands to India with Launch of AI Labs",
    description: "Data Design launches AI Labs in India, strengthening Finland-India tech partnership.",
    category: "News",
    image: "/images/illustrations/DD-Illustration-1.png",
    href: "/insights/expands-to-india",
  },
  {
    title: "M&M Growth Partners Joins to Fuel Data Design's Growth",
    description: "Finnish growth company investor M&M Growth Partners joins to accelerate Data Design's growth in an advisory role.",
    category: "News",
    image: "/images/illustrations/DD-Illustration-3.png",
    href: "/insights/mm-growth-partners",
  },
];

const CATEGORIES = ["All", "Expert Talk", "AI Insights", "News"];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  /* Most recent article as featured */
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* HERO */}
      <HeroSection
        gradient="lemon"
        badge="Insights"
        title="Practical thinking on AI, data, and what actually works"
        subtitle="Expert talks, strategy insights, and company news. From the people who build AI solutions every day."
      />

      {/* CATEGORY FILTER + FEATURED + GRID */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: SECTION_PADDING }}>

          {/* Category tabs */}
          <Reveal>
            <div style={{ display: "flex", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: "10px 24px", borderRadius: PILL_BORDER_RADIUS,
                      background: isActive ? C.black : C.gray,
                      color: isActive ? C.white : C.black,
                      border: "none", cursor: "pointer",
                      fontSize: 14, fontWeight: 500,
                      transition: "all 0.2s ease",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = C.border; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = C.gray; }}
                  >{cat === "Expert Talk" ? "Expert Talks" : cat}</button>
                );
              })}
            </div>
          </Reveal>

          {/* Featured article */}
          {featured && (
            <Reveal>
              <div style={{ marginBottom: 40 }}>
                <InsightCard {...featured} featured />
              </div>
            </Reveal>
          )}

          {/* Article grid */}
          {rest.length > 0 && (
            <div className="dd-insights-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
            }}>
              {rest.map((article, i) => (
                <Reveal key={article.title} delay={i * 0.06}>
                  <InsightCard {...article} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Want to discuss how AI could work for your business?"
        subtitle="Book a free 30-minute call. You'll leave with clarity on your next step. Not a sales pitch."
        secondaryLabel="See our services"
        secondaryHref="/services"
        image="/images/illustrations/DD-Illustration-1.png"
      />
    </>
  );
}
