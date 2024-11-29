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
    <div className="flex flex-row p-2 items-center justify-between h-18 w-100% shadow-xl bg-[#8C5230] md:flex-row md:justify-between md:items-center md:px-24 md:p-0 md:h-18">
      <div className="flex gap-4">
        <h1 className="text-2xl text-white">Isabelly Vitorino</h1>
      </div>
      <NavbarDesktop menuItems={menuItems} />
      <NavbarMobile menuItems={menuItems} />
    </div>
  );
};
