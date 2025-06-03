import React from "react";
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 dark:bg-gray-950 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Sonu Kumar</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A passionate full-stack developer creating innovative web
              solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/mrsonukr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/mrsonukr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/mrsonukr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links - Hidden on mobile, visible on md and up */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Home Page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="About Page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Projects Page"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="Contact Page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services - Hidden on mobile, visible on md and up */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Web Development</li>
              <li className="text-gray-600">UI/UX Design</li>
              <li className="text-gray-600">Mobile Development</li>
              <li className="text-gray-600">Cloud Solutions</li>
            </ul>
          </div>

          {/* Mobile Quick Links & Services - Visible only on mobile */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="Home Page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="About Page"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="Projects Page"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="Contact Page"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">Web Development</li>
                <li className="text-gray-600">UI/UX Design</li>
                <li className="text-gray-600">Mobile Development</li>
                <li className="text-gray-600">Cloud Solutions</li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:mssonukr@gmail.com"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  mssonukr@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-600">Ambala, Haryana - 133207</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© {currentYear} Sonu Kumar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
