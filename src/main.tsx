import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { UnderConstruction } from "./pages/UnderConstruction.tsx";
import { NetherPortalCalculator } from "./pages/NetherPortalCalculator.tsx";

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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
