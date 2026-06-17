import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { getCaseBySlug, getAllCaseSlugs } from "@/lib/mdx";

/**
 * Dynaaminen suomenkielisten asiakastarinoiden reitti.
 * URL: /fi/customer-stories/{slug}
 */
export function generateStaticParams() {
  return getAllCaseSlugs("fi").map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const data = getCaseBySlug(params.slug, "fi");
  if (!data) return {};
  return {
    title: `${data.title} | Data Design`,
    description: data.subtitle,
    alternates: { canonical: `/fi/customer-stories/${params.slug}` },
  };
}

export default function CasePageFi({ params }) {
  const data = getCaseBySlug(params.slug, "fi");
  if (!data) notFound();

  const hasBody = data.content && data.content.trim().length > 10;
  const bodyContent = hasBody ? <MDXRemote source={data.content} /> : null;

  return (
    <CaseStudyTemplate
      data={data}
      locale="fi"
      baseHref="/fi/customer-stories"
      bodyContent={bodyContent}
    />
  );
}
