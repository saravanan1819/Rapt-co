import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import Newheader from "./Component/Header/Newheader";
import "./App.css";

// Existing Homepage is retained for rollback: swap NewHomepage back to Homepage.
const NewHomepage = lazy(() => import("./Pages/Homepage/NewHomepage"));
const Aboutpage = lazy(() => import("./Pages/Aboutpage/Aboutpage"));
const Servicepage = lazy(() => import("./Pages/Servicepage/Servicepage"));
const Insightspage = lazy(() => import("./Pages/Insightspage/Insightspage"));
const InsightDetail = lazy(() => import("./Pages/Insightspage/InsightDetail"));
const Contactpage = lazy(() => import("./Pages/Contactpage/Contactpage"));
const Animation = lazy(() => import("./Component/Animation"));

// Mounted once so the active pill can glide between routes instead of remounting.
const NEW_HEADER_PATHS = ["/", "/expertise", "/insights", "/about", "/contact"];

function PersistentHeader() {
  const { pathname } = useLocation();
  return NEW_HEADER_PATHS.includes(pathname) ? <Newheader /> : null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <PersistentHeader />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<NewHomepage />} />
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
