import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import VideoCommerce from "@/pages/VideoCommerce";
import QuemSomos from "@/pages/QuemSomos";
import Cases from "@/pages/Cases";
import Blog from "@/pages/Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video-commerce" element={<VideoCommerce />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
