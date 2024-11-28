import { link } from "fs";
import React from "react";
import { NavBarDesktop } from "./navbar-desktop.component";

export const Navbar = () => {
  const menuItems = [
    { label: "Sobre mim", link: "/sobre" },
    { label: "Formação", link: "/formacao" },
    { label: "Trabalhos", link: "/trabalhos" },
    { label: "Contato", link: "/contato" },
  ];
  return (
    <div className="flex flex-col items-center justify-around p-4 h-24 w-100% shadow-xl bg-[#bf9075] md:flex-row md:justify-around md:items-center md:px-24 md:h-10  ">
      <NavBarDesktop menuItems={menuItems} />
    </div>
  );
};
