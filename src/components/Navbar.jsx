import React, { useState } from "react";

const Navbar = ({ activeMenu, setActiveMenu, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menus = ["Fetch", "Download Report", "User Creation"];

  const mainColor = "#59a9b4"; // main color
  const hoverColor = "#4f9cae"; // slightly darker for hover

  return (
    <nav style={{ backgroundColor: mainColor }} className="text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">Dashboard</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menus.map((menu) => (
              <button
                key={menu}
                onClick={() => setActiveMenu(menu)}
                style={{
                  backgroundColor: activeMenu === menu ? hoverColor : mainColor,
                }}
                className="px-3 py-2 rounded-lg font-medium transition-all hover:opacity-90"
              >
                {menu}
              </button>
            ))}

            {/* Logout Button */}
            <button
              onClick={onLogout}
              style={{ backgroundColor: mainColor }}
              className="ml-4 px-3 py-2 rounded-lg font-semibold transition-all hover:opacity-90"
            >
              Logout
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 px-2 pb-2">
            {menus.map((menu) => (
              <button
                key={menu}
                onClick={() => {
                  setActiveMenu(menu);
                  setIsOpen(false);
                }}
                style={{
                  backgroundColor: activeMenu === menu ? hoverColor : mainColor,
                }}
                className="block w-full text-left px-3 py-2 rounded-lg font-medium transition-all hover:opacity-90"
              >
                {menu}
              </button>
            ))}
            <button
              onClick={onLogout}
              style={{ backgroundColor: mainColor }}
              className="block w-full text-left px-3 py-2 mt-2 rounded-lg font-semibold transition-all hover:opacity-90"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
 