"use client";

import { motion } from "framer-motion";
import { useRef } from 'react';
import { 
  FaRocket, 
  FaCode, 
  FaBullseye, 
  FaBolt,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiMui,
  SiFigma
} from 'react-icons/si';

// Enhanced Animated Timeline Component
function EnhancedTimeline() {
  const timelineRef = useRef(null);

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Internship",
      company: "MIT Software Solutions",
      period: "May 2024 - June 2024",
      description: "Developed and deployed full-stack web applications by converting complex Figma designs into responsive, real-world interfaces. Cloned modern UI layouts with pixel-perfect precision, integrated dynamic backend APIs, and optimized performance across the stack. Delivered all assigned tasks on time while ensuring code scalability and maintainability.",
      technologies: ["React", "Javascript", "CSS", "Bootstrap", "Material UI", "Figma"],
      icon: <FaRocket className="text-white text-sm" />
    },
    {
      id: 2,
      title: "Frontend Developer Internship",
      company: "CodeAlpha",
      period: "November 2024 - January 2025",
      description: "Built and deployed multiple interactive projects including a calculator, photo gallery, and personal portfolio using React.js and modern UI libraries. Focused on creating responsive, user-friendly interfaces with clean, reusable code. Collaborated with mentors and peers to refine design consistency, optimize performance, and enhance overall UI/UX experience.",
      technologies: ["React.js", "Bootstrap", "Material UI", "JavaScript", "Git"],
      icon: <FaCode className="text-white text-sm" />
    },
    {
      id: 3,
      title: "Web Developer Trainer",
      company: "PIITP Training Program - Mehran University",
      period: "September 2025 - November 2025 (3 months Training)",
      description: "Currently gaining seamless experience in modern web development by working with the latest technologies and frameworks. Building and deploying scalable full-stack applications using Next.js, TypeScript, and Tailwind CSS while exploring AI-based web projects that integrate intelligent features and automation.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs", "AI Integrations"],
      icon: <FaBullseye className="text-white text-sm" />
    },
    {
      id: 4,
      title: "Web Developer",
      company: "GMG Solutions Hyderabad",
      period: "July 2025 - Present",
      description: "Currently gaining hands-on experience in building and deploying scalable full-stack applications using Next.js, TypeScript, and Tailwind CSS. Collaborating with cross-functional teams to design modern, responsive, and high-performing web interfaces.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs"],
      icon: <FaBolt className="text-white text-sm" />
    }
  ];

  return (
    <div ref={timelineRef} className="w-full">
      <div className="relative">
        {/* Enhanced Timeline line */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-400 via-cyan-500 to-purple-600 transform -translate-x-1/2 rounded-full shadow-lg shadow-green-400/20"></div>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`relative flex flex-col lg:flex-row items-center mb-20 ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Enhanced Timeline dot with icon */}
            <div className="absolute left-8 lg:left-1/2 w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full border-4 border-gray-900 shadow-lg shadow-green-400/30 z-10 transform -translate-x-1/2 flex items-center justify-center">
              {exp.icon}
            </div>
            
            {/* Enhanced Content card */}
            <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} ml-20 lg:ml-0`}>
              <motion.div 
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl shadow-2xl hover:shadow-2xl hover:shadow-green-400/10 transition-all duration-500 p-8 border border-gray-800/50 backdrop-blur-sm overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-cyan-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  {/* Header with Icon and Period */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-1">{exp.company}</h4>
                    </div>
                    <span className="text-sm font-bold bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIndex) => {
                      // Map technology names to icons
                      const getTechIcon = (techName: string) => {
                        switch(techName.toLowerCase()) {
                          case 'react':
                          case 'react.js':
                            return <FaReact className="inline mr-2 text-cyan-400" />;
                          case 'javascript':
                            return <FaJs className="inline mr-2 text-yellow-400" />;
                          case 'css':
                            return <FaCss3Alt className="inline mr-2 text-blue-400" />;
                          case 'bootstrap':
                            return <FaBootstrap className="inline mr-2 text-purple-400" />;
                          case 'material ui':
                            return <SiMui className="inline mr-2 text-blue-400" />;
                          case 'figma':
                            return <SiFigma className="inline mr-2 text-pink-400" />;
                          case 'git':
                            return <FaGitAlt className="inline mr-2 text-orange-400" />;
                          case 'next.js':
                            return <SiNextdotjs className="inline mr-2 text-white" />;
                          case 'typescript':
                            return <SiTypescript className="inline mr-2 text-blue-400" />;
                          case 'tailwind css':
                            return <SiTailwindcss className="inline mr-2 text-cyan-400" />;
                          case 'node.js':
                            return <FaNodeJs className="inline mr-2 text-green-400" />;
                          case 'mongodb':
                            return <SiMongodb className="inline mr-2 text-green-400" />;
                          default:
                            return null;
                        }
                      };
                      
                      return (
                        <motion.span
                          key={techIndex}
                          className="text-sm font-medium bg-gray-800/50 text-gray-300 px-4 py-2 rounded-xl border border-gray-700/50 hover:border-green-400/50 hover:text-green-300 transition-all duration-300 cursor-default backdrop-blur-sm inline-flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Optimized Experience Component
export default function Experience() {
  const sectionRef = useRef(null);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950 w-full py-20"
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-flex items-center px-6 py-3 bg-green-400/10 text-green-400 rounded-full text-base font-medium mb-6 border border-green-400/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              PROFESSIONAL JOURNEY
            </motion.span>
            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Work<br />Experience
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My professional journey through innovative companies and challenging projects that shaped my expertise in modern web development
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <EnhancedTimeline />

          {/* Career Summary */}
          <motion.div
            className="text-center mt-20 p-12 bg-gradient-to-r from-gray-900/60 to-black/60 rounded-3xl border border-gray-800/50 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Continuous Growth & Innovation
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                From intern to professional developer, my journey has been marked by continuous learning, 
                adapting to new technologies, and delivering exceptional results for clients and teams alike.
                I'm passionate about creating digital experiences that make a difference.
              </p>
              
              {/* Quick Stats */}
              <div className="mt-8 flex flex-wrap justify-center gap-8">
                {[
                  { number: "2+", label: "Years Experience" },
                  { number: "20+", label: "Projects" },
                  { number: "15+", label: "Technologies" },
                  { number: "100%", label: "Dedication" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
    </section>
  );
}