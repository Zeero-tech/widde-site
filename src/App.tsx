import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import VideoCommerce from "@/pages/VideoCommerce";

// Reload the page once if a lazy chunk fails to load (stale cache after deploy)
window.addEventListener("vite:preloadError", () => {
  if (!sessionStorage.getItem("chunk-reload")) {
    sessionStorage.setItem("chunk-reload", "1");
    window.location.reload();
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
