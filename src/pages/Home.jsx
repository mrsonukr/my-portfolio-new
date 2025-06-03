import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <Footer />
    </>
  );
};

export default Home;