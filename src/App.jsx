import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import "./App.css";

const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const Aboutpage = lazy(() => import("./Pages/Aboutpage/Aboutpage"));
const Servicepage = lazy(() => import("./Pages/Servicepage/Servicepage"));
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
          <Route path="/insights" element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/animation" element={<Animation />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
