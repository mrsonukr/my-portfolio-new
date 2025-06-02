import React, { useState, useCallback, memo } from "react";
import ToggleSwitch from "./ui/ToggleSwitch";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 text-black">
      <div className="flex justify-between items-center p-3 md:px-8">
        <h1 className="text-[32px] font-bold">mrsonukr.</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <label className="hamburger w-6 h-6">
            <input
              type="checkbox"
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-slate-600">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:underline transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ToggleSwitch />
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "pb-4 max-h-64 opacity-100" : "pb-0 max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 text-slate-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={toggleMenu}
                className="block hover:text-black transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
