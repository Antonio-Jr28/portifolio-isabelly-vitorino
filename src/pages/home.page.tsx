import React from "react";

import { Navbar } from "../components/navbar/navbar.component";
import { Hero } from "../components/hero/hero.component";
import { AboutUsSection } from "../components/about-us/about-us-section.componets";
import { WorksSection } from "../components/works/works-section.component";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUsSection />
      <WorksSection />
    </>
  );
};
