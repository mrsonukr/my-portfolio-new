import React, { useState } from "react";
import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaCoffee,
} from "react-icons/fa";
import { SiBuymeacoffee, SiThreads } from "react-icons/si";

import Button from "../components/ui/Button";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mblygoav', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            through any of the following channels or fill out the contact form
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-lg">
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg">
                Sorry, there was an error sending your message. Please try again or contact me directly.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-base overflow-hidden transition-colors duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                      : 'bg-primary text-black hover:bg-opacity-80'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FaEnvelope className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        mssonukr@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FaPhone className="w-6 h-6 rotate-90 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phone
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        +91 XXXXX XXXXX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Location
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        Ambala, Haryana - 133207
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  Social Profiles
                </h3>
               <div className="flex gap-4 flex-wrap">
  <a
    href="https://github.com/mrsonukr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
  >
    <FaGithub className="w-6 h-6 text-primary" />
  </a>
  <a
    href="https://linkedin.com/in/mrsonukr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
  >
    <FaLinkedin className="w-6 h-6 text-primary" />
  </a>
  <a
    href="https://instagram.com/mrsonukr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
  >
    <FaInstagram className="w-6 h-6 text-primary" />
  </a>
  <a
    href="https://facebook.com/mrsonukr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
  >
    <FaFacebookF className="w-6 h-6 text-primary" />
  </a>
  <a
    href="https://www.buymeacoffee.com/mrsonukr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
  >
    <SiBuymeacoffee className="w-6 h-6 text-primary" />
  </a>
  <a
    href="https://threads.net/@mrsonukr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
  >
    <SiThreads className="w-6 h-6 text-primary" />
  </a>
</div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Response Time
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via email directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;