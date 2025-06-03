import React, { useRef, useEffect } from "react";
import MovingText from "./ui/MovingText";
import Button from "./ui/Button";
import ScrollButton from "./ui/ScrollButton";
import { gsap } from "gsap";

const Hero = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set([contentRef.current.children, imageRef.current], {
      opacity: 0,
      y: 50,
    });

    tl.to(contentRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      clearProps: "all",
    }).to(
      imageRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        clearProps: "all",
      },
      "-=0.4"
    );
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-4 md:p-12 bg-cover bg-center overflow-hidden dark:bg-gray-900 pt-20 md:pt-0 pattern-overlay"
      style={{ backgroundImage: "url(/images/box-pattern.svg)" }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
        <div ref={contentRef} className="max-w-3xl z-10 hero-content">
          <h1 className="text-5xl md:text-[72px] font-bold leading-tight mb-4 dark:text-white flex flex-col md:flex-row md:items-center">
            <span className="whitespace-nowrap">Hi, I'm</span>
            <span className="text-primary md:ml-2 flex items-center">
              S{" "}
              <span className="sonu ml-4 mt-2 md:mt-5 w-6  h-6 md:h-8 md:w-8 "></span>
              nu Kumar
            </span>
          </h1>
          <MovingText />
          <p className="text-lg my-6 dark:text-gray-300">
            Passionate about creating innovative web solutions and sharing
            knowledge through technical writing. Specialized in modern web
            technologies and cloud architecture.
          </p>

          <div className="flex gap-4">
            <Button
              variant="primary"
              label="View My Work"
              onClick={scrollToAbout}
            />
            <Button
              variant="secondary"
              label="Download CV"
              href="/document/Resume - Sonu Kumar.pdf"
            />
          </div>
        </div>

        <div ref={imageRef} className="relative mt-10 md:mt-0">
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
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden md:block md:bottom-12">
<ScrollButton onClick={scrollToAbout} />
      </div>
    </section>
  );
};

export default Hero;
