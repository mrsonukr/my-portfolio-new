import React, { useState, useCallback, memo, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const [activeIndicatorStyle, setActiveIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  // Update active indicator position based on current route
  const updateActiveIndicator = () => {
    if (!navRef.current) return;

    const navItems = navRef.current.querySelectorAll('a[data-nav-item]');
    const currentPath = location.pathname;
    let isActive = false;

    navItems.forEach((item) => {
      const href = item.getAttribute('href');
      if (href === currentPath || (currentPath === '/' && href === '/')) {
        const rect = item.getBoundingClientRect();
        const parentRect = navRef.current.getBoundingClientRect();
        setActiveIndicatorStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
          opacity: 1
        });
        isActive = true;
      }
    });

    // Hide indicator if no item is active
    if (!isActive) {
      setActiveIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  };

  useEffect(() => {
    updateActiveIndicator();

    // Update indicator on route change
    const handleRouteChange = () => {
      setTimeout(updateActiveIndicator, 0);
    };

    handleRouteChange();
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* iOS Liquid Glass Background */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/70 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}></div>
      
      {/* Content */}
      <div className="relative flex justify-between items-center p-4 md:px-8 md:py-4">
        <Link to="/" className="text-[32px] font-bold text-white relative z-10 transition-all duration-300 hover:scale-105">
          mrsonu.
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
                className="line line-top-bottom stroke-white"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line stroke-white" d="M7 16 27 16" />
            </svg>
          </label>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 relative z-10" ref={navRef}>
          <div className="flex items-center bg-[#1F2937] backdrop-blur-sm rounded-full p-1 gap-1 relative">
            {/* iOS Liquid Effect - Active Indicator */}
            <div
              className="absolute top-1 h-[calc(100%-0.5rem)] bg-white rounded-full transition-[left,width,opacity] duration-300 ease-out pointer-events-none"
              style={{
                left: `${activeIndicatorStyle.left}px`,
                width: `${activeIndicatorStyle.width}px`,
                opacity: activeIndicatorStyle.opacity
              }}
            />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-nav-item
                className={`flex items-center px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative z-10 ${
                  isActive(link.href)
                    ? 'text-black'
                    : 'text-slate-300 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Mobile Menu iOS Glass Background */}
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-2xl"></div>
        
        {/* Mobile Menu Content */}
        <div className="relative px-4 pb-6 pt-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                to={link.href}
                onClick={toggleMenu}
                className={`block px-4 py-3.5 rounded-2xl transition-all duration-300 backdrop-blur-sm ${
                  isActive(link.href)
                    ? 'text-black font-semibold bg-white'
                    : 'text-slate-300 hover:text-primary bg-[#1F2937]'
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default memo(Header);