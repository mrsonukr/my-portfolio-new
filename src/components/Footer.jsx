import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white dark:bg-gray-950 py-16 ">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
                <div className="flex-1 min-w-[250px] m-5">
                    <h2 className="mb-4 text-xl font-semibold">About Me</h2>
                    <p>
                        I'm a passionate developer building modern web applications. Let's connect and create something amazing together!
                    </p>
                </div>
                <div className="flex-1 min-w-[200px] m-5">
                    <h2 className="mb-4 text-xl font-semibold">Links</h2>
                    <ul className="list-none p-0 space-y-2">
                        <li><a href="#home" className="text-white hover:underline">Home</a></li>
                        <li><a href="#projects" className="text-white hover:underline">Projects</a></li>
                        <li><a href="#about" className="text-white hover:underline">About</a></li>
                        <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div className="flex-1 min-w-[200px] m-5">
                    <h2 className="mb-4 text-xl font-semibold">Contact</h2>
                    <p>Email: <a href="mailto:your.email@example.com" className="text-white underline">your.email@example.com</a></p>
                    <p>Location: Your City, Country</p>
                    <div className="mt-3 flex space-x-4">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">GitHub</a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">LinkedIn</a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;