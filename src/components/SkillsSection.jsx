import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './ui/Button';
import { 
  MonitorIcon, 
  FileJson, 
  Database, 
  Server,
  Layers,
  Palette
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', percentage: 90, icon: MonitorIcon },
  { name: 'JavaScript', percentage: 85, icon: FileJson },
  { name: 'CSS', percentage: 88, icon: Palette },
  { name: 'MongoDB', percentage: 82, icon: Database },
  { name: 'Node.js', percentage: 80, icon: Server },
  { name: 'Tailwind', percentage: 92, icon: Layers },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);
  const progressBarsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const skillsContainer = skillsRef.current;

    gsap.set([content.children, skillsContainer.children], { 
      opacity: 0,
      y: 50 
    });

    // Animate content
    gsap.to(content.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate skill items and their progress bars immediately after they appear
    skills.forEach((skill, index) => {
      const skillItem = skillsContainer.children[index];
      const progressBar = progressBarsRef.current[index];
      
      gsap.to(skillItem, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: skillItem,
          start: "top 85%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            // Animate progress bar as soon as the skill item appears
            gsap.fromTo(progressBar,
              { width: '0%' },
              {
                width: `${skill.percentage}%`,
                duration: 1.5,
                ease: "power2.out",
                immediateRender: true
              }
            );
          }
        }
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-900 relative"
    >
      {/* Background Pattern and Blurred Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* SVG Dot Grid */}
        <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.1]">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
          >
            <defs>
              <pattern
                id="dotGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="2"
                  fill="currentColor"
                  className="text-gray-500 dark:text-gray-400"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#dotGrid)"
            />
          </svg>
        </div>
        {/* Blurred Circles - Adjusted Positioning */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div ref={contentRef} className="flex-1">
            <h2 className="text-4xl font-bold mb-6 dark:text-white">
              Why Hire Me For Your Next Project?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              I'm a specialist in UI/UX Design. My passion is designing & solving problems through user experience and research.
            </p>
            <Button
              variant="primary"
              label="Hire Me"
              href="/contact"
            />
          </div>

          <div ref={skillsRef} className="flex-1 w-full">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-primary font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      ref={el => progressBarsRef.current[index] = el}
                      className="h-full bg-primary rounded-full"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;