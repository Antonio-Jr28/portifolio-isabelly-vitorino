import React from "react";

interface NavBarDesktopProps {
  menuItems: { label: string; link: string }[];
}

export const NavBarDesktop: React.FC<NavBarDesktopProps> = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="p-5 text-white hover:text-[#8c5230]"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};