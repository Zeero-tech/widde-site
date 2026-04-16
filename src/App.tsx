import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import VideoCommerce from "@/pages/VideoCommerce";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video-commerce" element={<VideoCommerce />} />
    </Routes>
  );
}
