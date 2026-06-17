/**
 * MDX-apufunktiot
 *
 * Lukee content/cases/*.{en|fi}.mdx -tiedostot ja palauttaa frontmatterin
 * sekä body-sisällön. Käytetään dynaamisissa reiteissä.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASES_DIR = path.join(process.cwd(), "content", "cases");
const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");
const PUBLIC_DIR = path.join(process.cwd(), "public");

/**
 * Ratkaise /images-polku tiedostopäätteestä riippumatta.
 *
 * Jos frontmatter viittaa esim. /images/logos/X.png mutta levyllä on
 * vain X.jpg, palautetaan se. Näin sama nimi toimii millä tahansa
 * tuetulla kuvapäätteellä eikä tarkkaa päätettä tarvitse ylläpitää.
 * Ajetaan vain buildissa (palvelinpuolella), joten ei runtime-kustannusta.
 */
function resolveImagePath(p) {
  if (typeof p !== "string" || !p.startsWith("/images/")) return p;
  const abs = path.join(PUBLIC_DIR, p);
  if (fs.existsSync(abs)) return p; // tarkka tiedosto löytyy sellaisenaan
  const dir = path.dirname(abs);
  if (!fs.existsSync(dir)) return p;
  const baseNoExt = path.basename(p).replace(/\.[^.]+$/, "");
  const match = fs
    .readdirSync(dir)
    .find((f) => f.replace(/\.[^.]+$/, "") === baseNoExt);
  return match ? path.posix.join(path.posix.dirname(p), match) : p;
}

/** Käy frontmatter-objekti läpi ja ratkaise kaikki /images-polut. */
function resolveImages(value) {
  if (typeof value === "string") return resolveImagePath(value);
  if (Array.isArray(value)) return value.map(resolveImages);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, resolveImages(v)])
    );
  }
  return value;
}

/**
 * Lue kaikki case-tiedostot tietyllä localella.
 */
export function getAllCases(locale = "en") {
  if (!fs.existsSync(CASES_DIR)) return [];

  const files = fs.readdirSync(CASES_DIR).filter(f =>
    f.endsWith(`.${locale}.mdx`)
  );

  return files.map(filename => {
    const filePath = path.join(CASES_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    return { ...resolveImages(data), content, filename };
  });
}

/**
 * Etsi yksittäinen case slugin perusteella.
 */
export function getCaseBySlug(slug, locale = "en") {
  const cases = getAllCases(locale);
  return cases.find(c => c.slug === slug) || null;
}

/**
 * Palauta kaikki slug:t generateStaticParams-funktiota varten.
 */
export function getAllCaseSlugs(locale = "en") {
  return getAllCases(locale).map(c => c.slug);
}

/**
 * Lue kaikki insight-tiedostot tietyllä localella.
 */
export function getAllInsights(locale = "en") {
  if (!fs.existsSync(INSIGHTS_DIR)) return [];

  const files = fs.readdirSync(INSIGHTS_DIR).filter(f =>
    f.endsWith(`.${locale}.mdx`)
  );

  return files.map(filename => {
    const filePath = path.join(INSIGHTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    return { ...resolveImages(data), content, filename };
  });
}

/**
 * Etsi yksittäinen insight slugin perusteella.
 */
export function getInsightBySlug(slug, locale = "en") {
  const insights = getAllInsights(locale);
  return insights.find(i => i.slug === slug) || null;
}
