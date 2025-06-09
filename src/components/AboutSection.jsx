import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const text = textRef.current;
    const cards = cardsRef.current;

    gsap.set([heading, text, cards.children], { 
      opacity: 0,
      y: 50 
    });

    gsap.to(heading, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        once: true // This ensures animation plays only once
      }
    });

    gsap.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        once: true // This ensures animation plays only once
      }
    });

    gsap.to(cards.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: cards,
        start: "top 90%",
        once: true // This ensures animation plays only once
      }
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="text-4xl font-bold text-center mb-8 dark:text-white">
          About Me
        </h2>
        <p ref={textRef} className="text-center text-gray-600 dark:text-gray-300 mx-auto mb-12 text-lg leading-relaxed max-w-3xl">
          I'm a dedicated Computer Science Engineering student with a passion for building meaningful solutions. With over two years of practical experience, I specialize in full-stack development and UI/UX design, creating innovative projects that address real-world challenges. My journey is driven by a strong desire to learn, code, and design—constantly exploring new ways to push the limits of technology.
        </p>

        <div ref={cardsRef} className="flex flex-row flex-wrap justify-center gap-4 max-w-5xl mx-auto px-2">
          <div className="card w-[30%] min-w-[100px] max-w-[150px]">
            <div className="bg dark:bg-gray-800 dark:outline-gray-800"></div>
            <div className="blob"></div>
            <div className="relative z-10 p-4 text-center">
              <h3 className="text-2xl sm:text-4xl font-bold text-primary mb-2">2+ Years</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Experience</p>
            </div>
          </div>
          <div className="card w-[30%] min-w-[100px] max-w-[150px]">
            <div className="bg dark:bg-gray-800 dark:outline-gray-800"></div>
            <div className="blob"></div>
            <div className="relative z-10 p-4 text-center">
              <h3 className="text-2xl sm:text-4xl font-bold text-primary mb-2">15+</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Projects Completed</p>
            </div>
          </div>
          <div className="card w-[30%] min-w-[100px] max-w-[150px]">
            <div className="bg dark:bg-gray-800 dark:outline-gray-800"></div>
            <div className="blob"></div>
            <div className="relative z-10 p-4 text-center">
              <h3 className="text-2xl sm:text-4xl font-bold text-primary mb-2">10+</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Tech Stacks Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;