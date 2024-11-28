import { Link } from "react-router-dom";
import React from "react";
import { NavbarDesktop } from "./navbar-desktop.component";
import { NavbarMobile } from "./navbar-mobile.component";

export const Navbar = () => {
  const menuItems = [
    { label: "Sobre mim", link: "/sobre" },
    { label: "Formação", link: "/formacao" },
    { label: "Trabalhos", link: "/trabalhos" },
    { label: "Contato", link: "/contato" },
  ];
  return (
    <div className="flex flex-col items-center justify-around p-4 h-18 w-100% shadow-xl bg-[#bf9075] md:flex-row md:justify-around md:items-center md:px-24 md:h-10  ">
      <NavbarDesktop menuItems={menuItems} />
      <NavbarMobile menuItems={menuItems} />
    </div>
  );
};
