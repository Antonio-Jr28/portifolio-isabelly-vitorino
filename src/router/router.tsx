import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home.page";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={"/sobre"} />
        <Route path="/formacao" element={"/formacao"} />
        <Route path="/trabalhos" element="/trabalhos" />
        <Route path="/contato" element="/contato" />
      </Routes>
    </BrowserRouter>
  );
};
