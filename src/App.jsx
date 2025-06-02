import React from 'react';
import Header from './components/Header';
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/600.css"; // Optional: Import specific weights
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
