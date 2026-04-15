import type { BlogPostFull, BlogPostMeta } from "@/types";

// Carrega todos os arquivos .md da pasta content/blog via Vite glob
const modules = import.meta.glob<{
  frontmatter: Record<string, string>;
  content: string;
}>("/src/content/blog/*.md", { eager: true });

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export function getAllPosts(): BlogPostMeta[] {
  return Object.entries(modules)
    .map(([path, mod]) => ({
      slug: mod.frontmatter.slug ?? slugFromPath(path),
      title: mod.frontmatter.title,
      date: mod.frontmatter.date,
      category: mod.frontmatter.category,
      description: mod.frontmatter.description,
      image: mod.frontmatter.image,
    }))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPostFull | null {
  const entry = Object.entries(modules).find(([path, mod]) => {
    const s = mod.frontmatter.slug ?? slugFromPath(path);
    return s === slug;
  });
  if (!entry) return null;
  const [path, mod] = entry;
  return {
    slug: mod.frontmatter.slug ?? slugFromPath(path),
    title: mod.frontmatter.title,
    date: mod.frontmatter.date,
    category: mod.frontmatter.category,
    description: mod.frontmatter.description,
    image: mod.frontmatter.image,
    content: mod.content,
  };
}
