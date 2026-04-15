import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import matter from "gray-matter";

function markdownPlugin() {
  return {
    name: "vite-plugin-markdown",
    transform(src: string, id: string) {
      if (!id.endsWith(".md")) return;
      const { data, content } = matter(src);
      return {
        code: `export const frontmatter = ${JSON.stringify(data)};\nexport const content = ${JSON.stringify(content)};\nexport default { frontmatter, content };`,
        map: null,
      };
    },
  };
}

export default defineConfig({
  plugins: [markdownPlugin(), tailwindcss(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
  },
});
