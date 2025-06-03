import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">About Me</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg dark:text-gray-300">
            I'm a passionate full-stack developer with expertise in modern web technologies.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;