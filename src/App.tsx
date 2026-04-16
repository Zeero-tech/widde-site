import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import VideoCommerce from "@/pages/VideoCommerce";

// Reload with cache-bust if a lazy chunk 404s (stale JS after deploy)
window.addEventListener("vite:preloadError", (event: any) => {
  const chunkUrl = event?.payload?.src ?? event?.payload ?? "unknown chunk";
  const indexJs = document.querySelector<HTMLScriptElement>("script[src*='/assets/index-']")?.src ?? "unknown";
  const alreadyReloaded = new URL(window.location.href).searchParams.get("v");

  console.error(
    "[vite:preloadError] Chunk failed to load\n" +
    `  chunk:     ${chunkUrl}\n` +
    `  index.js:  ${indexJs}\n` +
    `  reloaded:  ${alreadyReloaded ? `yes (v=${alreadyReloaded})` : "no"}\n` +
    `  userAgent: ${navigator.userAgent}`
  );

  const url = new URL(window.location.href);
  if (!alreadyReloaded) {
    console.warn("[vite:preloadError] Reloading with cache-bust...");
    url.searchParams.set("v", Date.now().toString());
    window.location.replace(url.toString());
  } else {
    console.error("[vite:preloadError] Reload did not fix it — Cloudflare likely serving stale index.html from cache.");
  }
});

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video-commerce" element={<VideoCommerce />} />
    </Routes>
  );
}
