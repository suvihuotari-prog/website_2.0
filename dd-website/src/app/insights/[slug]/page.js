import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  InsightArticleTemplate,
  ArticleHeading,
  ArticleParagraph,
  ArticleLead,
  ArticleQuestion,
  ArticleQuote,
} from "@/components/InsightArticleTemplate";
import { getInsightBySlug, getAllInsights } from "@/lib/mdx";

/**
 * Dynaaminen englanninkielinen insights-artikkelin reitti.
 * URL: /insights/{slug}
 *
 * Lukee content/insights/*.en.mdx -tiedostot:
 *   - Frontmatter → InsightArticleTemplate
 *   - Body (vapaa MDX) → MDXRemote
 *
 * HUOM: Jos slug osuu olemassaolevaan staattiseen kansioon
 * (esim. /insights/clarifying-data-ownership), Next.js valitsee
 * staattisen ennen tätä dynaamista reittiä.
 */

const mdxComponents = {
  // Markdown headings → editorial components
  h2: ({ children }) => <ArticleHeading>{children}</ArticleHeading>,
  h3: ({ children }) => <ArticleQuestion>{children}</ArticleQuestion>,
  p: ({ children }) => <ArticleParagraph>{children}</ArticleParagraph>,
  blockquote: ({ children }) => <ArticleQuote>{children}</ArticleQuote>,
  // Named JSX components usable directly in MDX as <ArticleLead>, <ArticleQuote>, jne.
  ArticleLead,
  ArticleQuote: ({ children }) => <ArticleQuote>{children}</ArticleQuote>,
  ArticleQuestion: ({ children }) => <ArticleQuestion>{children}</ArticleQuestion>,
  ArticleHeading: ({ children }) => <ArticleHeading>{children}</ArticleHeading>,
  KeyInsight: ({ children }) => <ArticleQuote>{children}</ArticleQuote>,
  ul: ({ children }) => (
    <ul
      className="dd-article-list"
      style={{
        fontSize: 18,
        lineHeight: 1.8,
        color: "#444444",
        marginBottom: 24,
        marginTop: 8,
        paddingLeft: 24,
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      className="dd-article-list"
      style={{
        fontSize: 18,
        lineHeight: 1.8,
        color: "#444444",
        marginBottom: 24,
        marginTop: 8,
        paddingLeft: 24,
        listStyleType: "decimal",
        listStylePosition: "outside",
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li style={{ marginBottom: 6, paddingLeft: 6 }}>{children}</li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      style={{
        color: "#537f7b",
        textDecoration: "underline",
        textDecorationThickness: "1px",
        textUnderlineOffset: "3px",
      }}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong style={{ fontWeight: 600, color: "#000" }}>{children}</strong>
  ),
  em: ({ children }) => (
    <em style={{ fontStyle: "italic", color: "#444" }}>{children}</em>
  ),
  img: (props) => (
    <img
      {...props}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: 12,
        margin: "32px 0",
        display: "block",
      }}
    />
  ),
  figure: ({ children }) => (
    <figure style={{ margin: "32px 0" }}>{children}</figure>
  ),
  figcaption: ({ children }) => (
    <figcaption
      style={{
        fontSize: 13,
        color: "#666",
        textAlign: "center",
        marginTop: 8,
        fontStyle: "italic",
      }}
    >
      {children}
    </figcaption>
  ),
};

export function generateStaticParams() {
  return getAllInsights("en").map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const data = getInsightBySlug(params.slug, "en");
  if (!data) return {};
  return {
    title: `${data.title} | Data Design`,
    description: data.subtitle,
    alternates: { canonical: `/insights/${params.slug}` },
  };
}

export default function InsightArticlePage({ params }) {
  const data = getInsightBySlug(params.slug, "en");
  if (!data) notFound();

  return (
    <InsightArticleTemplate
      title={data.title}
      category={data.category}
      date={data.publishedAt && new Date(data.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}
      readTime={data.readTime}
      author={data.author}
      authorPhoto={data.authorPhoto}
      authorRole={data.authorRole}
      authorBio={data.authorBio}
      image={data.image}
      tags={data.tags || []}
      keyTakeaways={data.keyTakeaways || []}
    >
      <MDXRemote source={data.content} components={mdxComponents} />
    </InsightArticleTemplate>
  );
}
