import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import "./App.css";

const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const Aboutpage = lazy(() => import("./Pages/Aboutpage/Aboutpage"));
const Servicepage = lazy(() => import("./Pages/Servicepage/Servicepage"));
const Insightspage = lazy(() => import("./Pages/Insightspage/Insightspage"));
const InsightDetail = lazy(() => import("./Pages/Insightspage/InsightDetail"));
const Contactpage = lazy(() => import("./Pages/Contactpage/Contactpage"));
const Animation = lazy(() => import("./Component/Animation"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/expertise" element={<Servicepage />} />
          <Route path="/insights" element={<Insightspage />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/animation" element={<Animation />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
