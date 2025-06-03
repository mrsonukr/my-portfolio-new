import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const projectElements = projectsRef.current;

    projectElements.forEach((project, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top bottom-=100",
          end: "top center",
          scrub: 1,
          markers: false,
        }
      });

      tl.fromTo(project,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
      );
    });

    return () => {
      projectElements.forEach(project => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectsRef.current[index] = el}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;