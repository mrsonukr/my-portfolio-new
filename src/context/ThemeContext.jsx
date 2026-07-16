import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Function to update theme-color meta tags
const updateThemeColor = (isDark) => {
  // Remove existing theme-color meta tags
  const existingMetaTags = document.querySelectorAll('meta[name="theme-color"]');
  existingMetaTags.forEach(tag => tag.remove());

  // Create new theme-color meta tags
  const lightMeta = document.createElement('meta');
  lightMeta.name = 'theme-color';
  lightMeta.media = '(prefers-color-scheme: light)';
  lightMeta.content = isDark ? '#0f172a' : '#ffffff';

  const darkMeta = document.createElement('meta');
  darkMeta.name = 'theme-color';
  darkMeta.media = '(prefers-color-scheme: dark)';
  darkMeta.content = isDark ? '#0f172a' : '#ffffff';

  // For immediate effect, also set a general theme-color
  const generalMeta = document.createElement('meta');
  generalMeta.name = 'theme-color';
  generalMeta.content = isDark ? '#0f172a' : '#ffffff';

  // Add to document head
  document.head.appendChild(lightMeta);
  document.head.appendChild(darkMeta);
  document.head.appendChild(generalMeta);

  // For iOS Safari, also update apple-mobile-web-app-status-bar-style
  let statusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  if (!statusBarMeta) {
    statusBarMeta = document.createElement('meta');
    statusBarMeta.name = 'apple-mobile-web-app-status-bar-style';
    document.head.appendChild(statusBarMeta);
  }
  statusBarMeta.content = isDark ? 'black-translucent' : 'default';

  // For Android Chrome, update the manifest theme_color if it exists
  const manifestLink = document.querySelector('link[rel="manifest"]');
  if (manifestLink) {
    // Note: This would require a dynamic manifest, which is more complex
    // For now, we'll rely on the meta tags
  }
};

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');

    // Update theme-color meta tags for status bar
    updateThemeColor(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark: true, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};