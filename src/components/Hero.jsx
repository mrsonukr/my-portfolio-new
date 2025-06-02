import React from 'react';

const Hero = () => {
    return (
        <section
            className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url(/images/box-pattern.svg)" }}
        >
            {/* Content */}
            <div className="max-w-2xl z-10">
                <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
                    <span className="text-gray-700">Hi, I'm </span>
                    <span className="text-blue-600">S<span className="tracking-wider">o</span>nu Kumar</span>
                </h1>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">I Build More</h2>
                    <div className="text-xl font-medium text-blue-500 animate-pulse space-x-2">
                        <span className="inline-block">Responsive</span>
                        <span className="inline-block">Dynamic</span>
                        <span className="inline-block">Intuitive</span>
                        <span className="inline-block">Innovative</span>
                        <span className="inline-block">Scalable</span>
                    </div>
                </div>

                <p className="text-gray-700 text-lg mb-6">
                    Passionate about creating innovative web solutions and sharing knowledge through technical writing.
                    Specialized in modern web technologies and cloud architecture.
                </p>

                <div className="flex gap-4">
                    <a href="#" className="px-6 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition rounded-md">
                        View My Work
                    </a>
                    <a href="/documents/Resume - Sonu Kumar.pdf" className="px-6 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition rounded-md">
                        Download CV
                    </a>
                </div>
            </div>

            {/* Image */}
            <div className="relative mt-10 md:mt-0">
                
                <img
                    src="/images/me.png"
                    alt="Sonu Kumar"
                    className="block md:hidden w-64 h-auto z-10 relative"
                />
                <img
                    src="/images/me-fade.png"
                    alt="Sonu Kumar"
                    className="hidden md:block w-[400px] h-auto z-10 relative"
                />
            </div>
        </section>
    );
};

export default Hero;
