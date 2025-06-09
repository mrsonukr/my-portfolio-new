import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;

      setIsVisible(scrolled > viewportHeight * 0.3);

      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (winScroll / height) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dynamic theme-based colors
  const ringColor = isDark ? "#1a1a1a" : "#ffffff"; // fallback bg behind progress
  const arrowBg = isDark ? "#1f2937" : "#f3f4f6"; // gray-800 / gray-100
  const arrowColor = isDark ? "#00ff00" : "#00ff00"; // green for light/dark (primary)

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full transition-all duration-300 cursor-pointer z-40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{
        background: `conic-gradient(${arrowColor} ${scrollProgress}%, ${ringColor} ${scrollProgress}%)`,
      }}
    >
      <span
        className="absolute inset-0.5 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: arrowBg,
        }}
      >
        <ArrowUp className="w-6 h-6" style={{ color: arrowColor }} />
      </span>
    </button>
  );
};

export default ScrollToTop;