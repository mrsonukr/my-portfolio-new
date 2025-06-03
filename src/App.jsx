import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import "@fontsource-variable/inter";
import { ThemeProvider } from './context/ThemeContext.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen transition-colors duration-200">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;