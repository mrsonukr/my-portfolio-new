import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Contact Me</h1>
        <div className="max-w-lg">
          <p className="text-lg mb-8 dark:text-gray-300">
            Let's connect! Feel free to reach out through any of the following channels.
          </p>
          <div className="space-y-4 dark:text-gray-300">
            <p>Email: your.email@example.com</p>
            <p>Location: Your City, Country</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;