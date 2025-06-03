import React, { useRef } from "react";
import MovingText from "./ui/MovingText";
import Button from "./ui/Button";

const Hero = () => {
  const sectionRef = useRef(null);

  return (
    <>
      {" "}
      <section
        ref={sectionRef}
        className={`relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-cover bg-center overflow-hidden dark:bg-gray-900 pt-20 md:pt-0 pattern-overlay`}
        style={{ backgroundImage: "url(/images/box-pattern.svg)" }}
      >
        {/* Content */}
        <div className="max-w-2xl z-10 hero-content">
          <h1 className="text-5xl md:text-[72px] font-bold leading-snug mb-4 dark:text-white">
            <span>Hi, I'm </span>
            <span className="text-primary">
              S <span className="sonu w-6 h-6 md:h-8 md:w-8 md:ml-0 ml-1"></span>nu Kumar
            </span>
          </h1>
          <MovingText />
          <p className="text-lg my-6 dark:text-gray-300">
            Passionate about creating innovative web solutions and sharing
            knowledge through technical writing. Specialized in modern web
            technologies and cloud architecture.
          </p>

          <div className="flex gap-4">
            <Button variant="primary" label="View My Work"  />
            <Button variant="secondary" label="Download CV" href="/document/Resume - Sonu Kumar.pdf" />
          </div>
        </div>

        {/* Image */}
        <div className="relative mt-10 md:mt-0">
          <img
            src="/images/me-fade.png"
            alt="Sonu Kumar"
            className="block md:hidden w-64 h-auto z-10 relative"
            loading="lazy"
          />
          <img
            src="/images/me-fade.png"
            alt="Sonu Kumar"
            className="hidden md:block w-[400px] h-auto z-10 relative"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
