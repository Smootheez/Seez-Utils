import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { UnderConstruction } from "./pages/UnderConstruction.tsx";
import { NetherPortalCalculator } from "./pages/NetherPortalCalculator.tsx";
import { AnswerMyLove } from "./pages/answer-my-love/AnswerMyLove.tsx";
import { LoveYes } from "./pages/answer-my-love/LoveYes.tsx";
import { SVGDownloader } from "./pages/SVGDownloader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route
          path="/nether-portal-calculator"
          element={<NetherPortalCalculator />}
        />
        <Route path="/answer-my-love" element={<AnswerMyLove />} />
        <Route path="/answer-my-love/yes" element={<LoveYes />} />
        <Route path="/svg-downloader" element={<SVGDownloader />} />
        <Route path="/color-picker" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
