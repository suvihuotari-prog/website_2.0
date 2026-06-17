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
 * Dynaaminen suomenkielinen insights-artikkelin reitti.
 * URL: /fi/insights/{slug}
 *
 * Lukee content/insights/*.fi.mdx -tiedostot ja renderöi InsightArticleTemplateen.
 */

const mdxComponents = {
  h2: ({ children }) => <ArticleHeading>{children}</ArticleHeading>,
  h3: ({ children }) => <ArticleQuestion>{children}</ArticleQuestion>,
  p: ({ children }) => <ArticleParagraph>{children}</ArticleParagraph>,
  blockquote: ({ children }) => <ArticleQuote>{children}</ArticleQuote>,
  ArticleLead,
  ArticleQuote: ({ children }) => <ArticleQuote>{children}</ArticleQuote>,
  ArticleQuestion: ({ children }) => <ArticleQuestion>{children}</ArticleQuestion>,
  ArticleHeading: ({ children }) => <ArticleHeading>{children}</ArticleHeading>,
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
  return getAllInsights("fi").map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const data = getInsightBySlug(params.slug, "fi");
  if (!data) return {};
  return {
    title: `${data.title} | Data Design`,
    description: data.subtitle,
    alternates: { canonical: `/fi/insights/${params.slug}` },
  };
}

export default function InsightArticlePageFi({ params }) {
  const data = getInsightBySlug(params.slug, "fi");
  if (!data) notFound();

  return (
    <InsightArticleTemplate
      title={data.title}
      category={data.category}
      date={data.publishedAt && new Date(data.publishedAt).toLocaleDateString("fi-FI", {
        day: "numeric",
        month: "short",
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
