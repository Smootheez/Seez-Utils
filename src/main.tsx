import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { ExampleToolPage } from "./pages/ExampleToolPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exampletoolpage" element={<ExampleToolPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
