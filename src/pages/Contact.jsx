import React from "react";
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
            <form className="space-y-6">
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
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
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
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div>
                <Button variant="primary" label="Send Message" href="#" />
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
