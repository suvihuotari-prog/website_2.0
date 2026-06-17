import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { getCaseBySlug, getAllCaseSlugs } from "@/lib/mdx";

/**
 * Dynaaminen englanninkielisten asiakastarinoiden reitti.
 * URL: /customer-stories/{slug}
 *
 * Lukee content/cases/*.en.mdx -tiedostot:
 *   - Frontmatter → CaseStudyTemplate-komponenttiin
 *   - Body (vapaa MDX) → renderöidään MDXRemote:lla erilliseen osioon
 */
export function generateStaticParams() {
  return getAllCaseSlugs("en").map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const data = getCaseBySlug(params.slug, "en");
  if (!data) return {};
  return {
    title: `${data.title} | Data Design`,
    description: data.subtitle,
    alternates: { canonical: `/customer-stories/${params.slug}` },
  };
}

export default function CasePage({ params }) {
  const data = getCaseBySlug(params.slug, "en");
  if (!data) notFound();

  // Renderöi body vain jos siinä on muuta kuin tyhjää
  const hasBody = data.content && data.content.trim().length > 10;
  const bodyContent = hasBody ? <MDXRemote source={data.content} /> : null;

  return (
    <CaseStudyTemplate
      data={data}
      locale="en"
      baseHref="/customer-stories"
      bodyContent={bodyContent}
    />
  );
}
