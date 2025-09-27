"use client";

import { useRef, useEffect, useState } from 'react';

// Enhanced Animated Timeline Component
function EnhancedTimeline() {
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Lead development of responsive web applications using React, TypeScript, and Next.js. Mentored junior developers and implemented CI/CD pipelines.",
      technologies: ["React", "TypeScript", "Next.js", "Node.js"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      period: "2020 - 2022",
      description: "Developed and maintained client websites and web applications. Collaborated with UX/UI designers to implement responsive designs.",
      technologies: ["JavaScript", "React", "Vue.js", "SASS"]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "WebCraft Studio",
      period: "2019 - 2020",
      description: "Built and maintained websites for small businesses. Learned modern web development practices and frameworks.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"]
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "StartUp Ventures",
      period: "2018 - 2019",
      description: "Assisted in website development and maintenance. Gained hands-on experience with modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="max-w-4xl mx-auto">
      <div className={`relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`}>
        
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2 rounded-full"></div>
        
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 ease-out`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 transform -translate-x-1/2"></div>
            
            {/* Content card */}
            <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Updated Experience Component
export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-gray-50 dark:bg-gray-900" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <EnhancedTimeline />
      </div>
    </section>
  );
}