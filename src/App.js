import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import GalleryDetail from "./components/GalleryDetail"; // new page
import DonatePage from "./components/DonatePage";
import AboutUsFooter from "./components/AboutUsFooter";
import ContactUs from "./components/ContactUs";

function App() {
  const [page, setPage] = useState("home");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsFooter />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/gallery/:eventId" element={<GalleryDetail />} /> */}
        <Route path="/donation" element={<DonatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
