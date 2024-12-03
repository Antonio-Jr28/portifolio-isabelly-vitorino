import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home.page";
import { AboutUsPage } from "../pages/about-us.page";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutUsPage />} />
        <Route path="/trabalhos" element="/trabalhos" />
        <Route path="/contato" element="/contato" />
      </Routes>
    </BrowserRouter>
  );
};
