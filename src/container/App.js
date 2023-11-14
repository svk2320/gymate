import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";

import Contact from "../pages/Contact";

// import { AuthContextProvider } from "./context/AuthContext";
import Classes from "../pages/Classes";
import Price from "../pages/Price";
import Blog from "../pages/Blog";
import Schedule from "../pages/Schedule/Schedule";
import Monday from "../pages/Schedule/Monday";
import Tuesday from "../pages/Schedule/Tuesday";
import Wednesday from "../pages/Schedule/Wednesday";
import Thursday from "../pages/Schedule/Thursday";
import Friday from "../pages/Schedule/Friday";
import Saturday from "../pages/Schedule/Saturday";
import Sunday from "../pages/Schedule/Sunday";
import Gallery from "../pages/Gallery/Gallery";
import GalleryPage1 from "../pages/Gallery/GalleryPage1";
import GalleryPage2 from "../pages/Gallery/GalleryPage2";
import About from "../pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="classes" element={<Classes />} />
          <Route path="pricing" element={<Price />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />

          <Route path="schedule" element={<Schedule />}>
            <Route path="monday" element={<Monday />} />
            <Route path="tuesday" element={<Tuesday />} />
            <Route path="wednesday" element={<Wednesday />} />
            <Route path="thursday" element={<Thursday />} />
            <Route path="friday" element={<Friday />} />
            <Route path="saturday" element={<Saturday />} />
            <Route path="sunday" element={<Sunday />} />
          </Route>

          <Route path="gallery" element={<Gallery />}>
            <Route path="page-1" element={<GalleryPage1 />} />
            <Route path="page-2" element={<GalleryPage2 />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
