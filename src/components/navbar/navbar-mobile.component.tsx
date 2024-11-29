import React, { useEffect, useState, useRef } from "react";

interface NavbarMobileProps {
  menuItems: { label: string; link: string }[];
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative md:hidden">
      <svg
        className="w-6 h-6 cursor-pointer"
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

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#8c5230] transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40 shadow-lg`}
      >
        <button
          className="text-white p-4"
          onClick={closeMenu}
        >
          ✖ Fechar
        </button>
        <ul className="p-4 space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                className="text-white hover:text-black"
                href={item.link}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};
