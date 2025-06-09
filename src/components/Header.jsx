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
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-[55]">
      {/* Professional Blur Background */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/20"></div>
      
      {/* Content */}
      <div className="relative flex justify-between items-center p-3 md:px-8">
        <Link to="/" className="text-[32px] font-bold text-black dark:text-white relative z-10">
          mrsonukr.
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden relative z-10">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 relative z-10">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`transition-all duration-300 px-3 py-2 rounded-lg relative ${
                    isActive(link.href)
                      ? 'text-primary font-semibold'
                      : 'text-black dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-white/20 dark:hover:bg-gray-800/20'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-4 p-1 rounded-full">
            <ToggleSwitch checked={isDark} onChange={toggleTheme} />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Mobile Menu Glass Background */}
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-white/20 dark:border-gray-800/20"></div>
        
        {/* Mobile Menu Content */}
        <div className="relative px-4 pb-4 pt-2 space-y-3">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                to={link.href}
                onClick={toggleMenu}
                className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-primary font-semibold bg-primary/10 border border-primary/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-white/30 dark:hover:bg-gray-800/30'
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
          
          {/* Mobile Theme Toggle */}
          <div className="pt-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </span>
              <ToggleSwitch 
                checked={isDark} 
                onChange={toggleTheme}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);