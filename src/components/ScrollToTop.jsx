import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Show button after scrolling past 30% of viewport height
      setIsVisible(scrolled > viewportHeight * 0.3);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (winScroll / height) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary transition-all duration-300 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      onClick={scrollToTop}
      style={{
        background: `conic-gradient(var(--green) ${scrollProgress}%, #1a1a1a ${scrollProgress}%)`,
      }}
    >
      <span className="absolute inset-0.5 rounded-full bg-gray-900 dark:bg-gray-800 flex items-center justify-center">
        <ArrowUp className="w-6 h-6 text-primary" />
      </span>
    </button>
  );
};

export default ScrollToTop;