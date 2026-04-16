import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import VideoCommerce from "@/pages/VideoCommerce";

// Reload with cache-bust if a lazy chunk 404s (stale JS after deploy)
window.addEventListener("vite:preloadError", () => {
  const url = new URL(window.location.href);
  if (!url.searchParams.get("v")) {
    url.searchParams.set("v", Date.now().toString());
    window.location.replace(url.toString());
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
