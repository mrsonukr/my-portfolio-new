import React, { useState, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleSwitch from "./ui/ToggleSwitch";
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30">
      <div className="flex justify-between items-center p-3 md:px-8">
        <Link to="/" className="text-[32px] font-bold text-black dark:text-white">
        mrsonukr.
        </Link>

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
                className="line line-top-bottom dark:stroke-white"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line dark:stroke-white" d="M7 16 27 16" />
            </svg>
          </label>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-primary '
                      : 'text-black dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ToggleSwitch checked={isDark} onChange={toggleTheme} />
        </nav>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={toggleMenu}
                className={`block transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-primary font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <ToggleSwitch 
              checked={isDark} 
              onChange={toggleTheme} 
              className="block md:hidden"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);