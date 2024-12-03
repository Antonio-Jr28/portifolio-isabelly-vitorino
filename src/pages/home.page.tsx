import React from "react";

import { Navbar } from "../components/navbar/navbar.component";
import { Hero } from "../components/hero/hero.component";
import { AboutUsSection } from "../components/about-us/about-us.componets";
import { WorksAll } from "../components/works/works-all.component";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUsSection />
      <WorksAll />
    </>
  );
};
