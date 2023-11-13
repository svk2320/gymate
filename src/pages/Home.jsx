import React from "react";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Featured from "../sections/Featured";
import ChooseUs from "../sections/ChooseUs";
import Trainers from "../sections/Trainers";
import Testimonials from "../sections/Testimonials";
import Gallery from "../sections/Gallery";
import BMI from "../sections/BMI";
import Pricing from "../sections/Pricing";
import Blog from "../sections/Blog";
import CTABanner from "../sections/CTABanner";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BMI />
      <Pricing />
      <Blog />
      <CTABanner />
    </>
  );
};

export default Home;
