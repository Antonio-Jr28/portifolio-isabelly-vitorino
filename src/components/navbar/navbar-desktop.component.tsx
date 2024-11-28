import React from "react";

interface NavBarDesktopProps {
  menuItems: { label: string; link: string }[];
}

export const NavbarDesktop: React.FC<NavBarDesktopProps> = ({ menuItems }) => {
  return (
    <div className="hidden md:flex gap-6 items-center justify-around">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="p-2 text-white py-8 items-center hover:text-[#8c5230] hover:bg-white"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
