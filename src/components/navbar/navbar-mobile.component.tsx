import { memoryUsage } from "process";
import React, { useEffect, useState, useRef } from "react";

interface NavbarMobileProps {
  menuItems: { label: string; link: string }[];
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsmenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsmenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains?.(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="md:hidden cursor-pointer" ref={menuRef}>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
      {isMenuOpen && (
        <div className="absolut top-16 left-0 right-0 bg-[#8c5230] z-10 border rounded-md shadow-md">
          <ul className="flex flex-row items-center md:flex-row md:items-center gap-4 p-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  className="text-white hover:text-[#8c5230]"
                  href={item.link}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
