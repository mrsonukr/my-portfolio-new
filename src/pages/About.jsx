import React, { useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGraduationCap,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const progressBarsRef = useRef([]);
  const imageRef = useRef(null);

  const education = [
    {
      institution: "Maharishi Markandeshwar Deemed to be University",
      location: "Mullana, Ambala",
      degree: "Bachelor of Technology in Computer Science",
      period: "2023 - Present",
    },
    {
      institution: "D.K. Memorial College",
      location: "Dumari, Buxar",
      degree: "Intermediate of Science",
      period: "2019 - 2021",
    },
    {
      institution: "High School Chilahri",
      location: "Buxar",
      degree: "Matriculation",
      period: "2018 - 2019",
    },
  ];

  const skills = [
    {
      name: "React.js",
      level: "Expert",
      percentage: 90,
      category: "Frontend",
    },
    {
      name: "Node.js",
      level: "Advanced",
      percentage: 85,
      category: "Backend",
    },
    {
      name: "JavaScript",
      level: "Expert",
      percentage: 95,
      category: "Programming",
    },
    {
      name: "TypeScript",
      level: "Advanced",
      percentage: 80,
      category: "Programming",
    },
    {
      name: "HTML/CSS",
      level: "Expert",
      percentage: 90,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      level: "Expert",
      percentage: 95,
      category: "Frontend",
    },
    {
      name: "PHP",
      level: "Intermediate",
      percentage: 70,
      category: "Backend",
    },
    {
      name: "MongoDB",
      level: "Advanced",
      percentage: 85,
      category: "Backend",
    },
    {
      name: "MySQL",
      level: "Advanced",
      percentage: 80,
      category: "Backend",
    },
    {
      name: "Figma",
      level: "Expert",
      percentage: 90,
      category: "Design",
    },
    {
      name: "Adobe Photoshop",
      level: "Advanced",
      percentage: 85,
      category: "Design",
    },
    {
      name: "Video Editing",
      level: "Intermediate",
      percentage: 75,
      category: "Media",
    },
  ];

  useEffect(() => {
    // Ensure GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Education section animation
      const educationItems =
        educationRef.current.querySelectorAll(".education-item");
      gsap.fromTo(
        educationItems,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 80%",
            once: true, // This ensures animation plays only once
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            once: true, // This ensures animation plays only once
          },
        }
      );

      // Skills animation
      progressBarsRef.current.forEach((bar, index) => {
        if (bar) {
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${skills[index].percentage}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                once: true, // This ensures animation plays only once
              },
            }
          );
        }
      });

      // Contact section animation
      const contactItems = contactRef.current.querySelectorAll(".contact-item");
      gsap.fromTo(
        contactItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            once: true, // This ensures animation plays only once
          },
        }
      );
    });

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer specializing in creating
            innovative web solutions. With a strong foundation in modern
            technologies and a keen eye for design, I bring ideas to life
            through clean, efficient, and scalable code.
          </p>
          <div className="mt-8">
            <Button
              variant="primary"
              label="Download CV"
              href="/document/Resume - Sonu Kumar.pdf"
            />
          </div>
        </div>

        {/* Education Section with Image */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Education</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div ref={educationRef} className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start education-item"
                >
                  <div className="mt-1">
                    <FaGraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.degree}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {edu.location}
                    </p>
                    <p className="text-sm text-primary">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              ref={imageRef}
              className="relative flex items-center justify-center h-full md:-mt-8"
            >
              <img
                src="/images/me-fade.png"
                alt="Sonu Kumar"
                className="object-contain max-h-[400px] w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-primary">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    ref={(el) => (progressBarsRef.current[index] = el)}
                    className="h-full bg-primary rounded-full"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section ref={contactRef}>
          <h2 className="text-3xl font-bold mb-8 dark:text-white">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 contact-item">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-medium dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  mssonukr@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 contact-item">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-medium dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ambala, Haryana - 133207
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 contact-item">
              <FaPhone className="w-6 h-6 text-primary rotate-90" />
              <div>
                <h3 className="font-medium dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +91 70615 43815
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;