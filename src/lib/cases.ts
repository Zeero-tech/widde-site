import type { CasePostFull, CasePostMeta } from "@/types";

const modules = import.meta.glob<{
  frontmatter: Record<string, unknown>;
  content: string;
}>("/src/content/cases/*.md", { eager: true });

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export function getAllCases(): CasePostMeta[] {
  return Object.entries(modules).map(([path, mod]) => {
    const fm = mod.frontmatter;
    return {
      slug: (fm.slug as string) ?? slugFromPath(path),
      title: fm.title as string,
      brand: fm.brand as string,
      date: fm.date as string,
      category: fm.category as string,
      description: fm.description as string,
      image: fm.image as string | undefined,
      quote: fm.quote as string | undefined,
      quoteAuthor: fm.quoteAuthor as string | undefined,
      metrics: fm.metrics as { label: string; value: string }[] | undefined,
    };
  });
}

export function getCaseBySlug(slug: string): CasePostFull | null {
  const entry = Object.entries(modules).find(([path, mod]) => {
    const s = (mod.frontmatter.slug as string) ?? slugFromPath(path);
    return s === slug;
  });
  if (!entry) return null;
  const [path, mod] = entry;
  const fm = mod.frontmatter;
  return {
    slug: (fm.slug as string) ?? slugFromPath(path),
    title: fm.title as string,
    brand: fm.brand as string,
    date: fm.date as string,
    category: fm.category as string,
    description: fm.description as string,
    image: fm.image as string | undefined,
    quote: fm.quote as string | undefined,
    quoteAuthor: fm.quoteAuthor as string | undefined,
    metrics: fm.metrics as { label: string; value: string }[] | undefined,
    content: mod.content,
  };
}
