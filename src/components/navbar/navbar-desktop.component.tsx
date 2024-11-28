import React from "react";

interface NavBarDesktopProps {
  menuItems: { label: string; link: string }[];
}

export const NavbarDesktop: React.FC<NavBarDesktopProps> = ({ menuItems }) => {
  return (
    <div className="hidden md:flex gap-10 items-center justify-around">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="p-4 text-white hover:text-[#8c5230]"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
