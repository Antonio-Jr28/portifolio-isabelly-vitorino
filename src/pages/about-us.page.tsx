import React from "react";

import { Navbar } from "../components/navbar/navbar.component";
import { Hero } from "../components/hero/hero.component";
import { AboutUsSection } from "../components/about-us/about-us-section.componets";
import { AboutUs } from "../components/about-us/about-us.component";

export const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
    </>
  );
};
