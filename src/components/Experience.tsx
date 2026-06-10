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
  FaNodeJs
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiMui,
  SiFigma
} from 'react-icons/si';

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
      icon: <FaRocket className="text-white text-xs" />
    },
    {
      id: 2,
      title: "Frontend Developer Internship",
      company: "CodeAlpha",
      period: "November 2024 - January 2025",
      description: "Built and deployed multiple interactive projects including a calculator, photo gallery, and personal portfolio using React.js and modern UI libraries. Focused on creating responsive, user-friendly interfaces with clean, reusable code. Collaborated with mentors and peers to refine design consistency, optimize performance, and enhance overall UI/UX experience.",
      technologies: ["React.js", "Bootstrap", "Material UI", "JavaScript", "Git"],
      icon: <FaCode className="text-white text-xs" />
    },
    {
      id: 3,
      title: "Web Developer Trainer",
      company: "PIITP Training Program - Mehran University",
      period: "September 2025 - November 2025",
      description: "Currently gaining seamless experience in modern web development by working with the latest technologies and frameworks. Building and deploying scalable full-stack applications using Next.js, TypeScript, and Tailwind CSS while exploring AI-based web projects that integrate intelligent features and automation.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs", "AI Integrations"],
      icon: <FaBullseye className="text-white text-xs" />
    },
    {
      id: 4,
      title: "Web Developer",
      company: "GMG Solutions Hyderabad",
      period: "July 2024 - March 2026",
      description: "Currently gaining hands-on experience in building and deploying scalable full-stack applications using Next.js, TypeScript, and Tailwind CSS. Collaborating with cross-functional teams to design modern, responsive, and high-performing web interfaces.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs"],
      icon: <FaBolt className="text-white text-xs" />
    }
  ];

  const getTechIcon = (techName: string) => {
    switch (techName.toLowerCase()) {
      case 'react':
      case 'react.js':
        return <FaReact className="text-cyan-400 text-xs shrink-0" />;
      case 'javascript':
        return <FaJs className="text-yellow-400 text-xs shrink-0" />;
      case 'css':
        return <FaCss3Alt className="text-blue-400 text-xs shrink-0" />;
      case 'bootstrap':
        return <FaBootstrap className="text-purple-400 text-xs shrink-0" />;
      case 'material ui':
        return <SiMui className="text-blue-400 text-xs shrink-0" />;
      case 'figma':
        return <SiFigma className="text-pink-400 text-xs shrink-0" />;
      case 'git':
        return <FaGitAlt className="text-orange-400 text-xs shrink-0" />;
      case 'next.js':
        return <SiNextdotjs className="text-white text-xs shrink-0" />;
      case 'typescript':
        return <SiTypescript className="text-blue-400 text-xs shrink-0" />;
      case 'tailwind css':
        return <SiTailwindcss className="text-cyan-400 text-xs shrink-0" />;
      case 'node.js':
        return <FaNodeJs className="text-green-400 text-xs shrink-0" />;
      case 'mongodb':
        return <SiMongodb className="text-green-400 text-xs shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <div ref={timelineRef} className="w-full">
      <div className="relative">

        {/* Center line — desktop only */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-cyan-500 to-purple-600 transform -translate-x-1/2 rounded-full shadow-lg shadow-green-400/20" />

        {/* Mobile/tablet left line */}
        <div className="block lg:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-cyan-500 to-purple-600 rounded-full" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative flex flex-col lg:flex-row items-start lg:items-center mb-10 sm:mb-14 lg:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Timeline dot */}
            <div className="
              absolute
              left-0 lg:left-1/2
              top-4 lg:top-1/2
              w-8 h-8
              bg-gradient-to-r from-green-400 to-cyan-500
              rounded-full
              border-2 sm:border-4 border-gray-900
              shadow-lg shadow-green-400/30
              z-10
              flex items-center justify-center
              lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2
            ">
              {exp.icon}
            </div>

            {/* Card */}
            <div className={`
              w-full lg:w-5/12
              pl-12 lg:pl-0
              ${index % 2 === 0 ? 'lg:mr-auto lg:pr-10' : 'lg:ml-auto lg:pl-10'}
            `}>
              <motion.div
                className="
                  group relative
                  bg-gradient-to-br from-gray-900/80 to-black/80
                  rounded-2xl shadow-2xl
                  hover:shadow-green-400/10
                  transition-all duration-500
                  p-4 sm:p-6 md:p-8
                  border border-gray-800/50
                  backdrop-blur-sm overflow-hidden
                "
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Shine */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="relative z-10">

                  {/* ── HEADER (stacked on all screens) ── */}
                  <div className="flex flex-col gap-1.5 mb-3 sm:mb-4">
                    <h3 className="
                      text-base sm:text-xl md:text-2xl font-bold text-white leading-snug
                      group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-cyan-400
                      group-hover:bg-clip-text group-hover:text-transparent
                      transition-all duration-300
                    ">
                      {exp.title}
                    </h3>
                    <h4 className="text-sm sm:text-base font-semibold text-cyan-400">
                      {exp.company}
                    </h4>
                    {/* Period badge — always below company, never fights title */}
                    <span className="
                      self-start
                      text-xs font-bold
                      bg-gradient-to-r from-green-500 to-cyan-500
                      text-white
                      px-3 py-1 rounded-full
                      shadow-md whitespace-nowrap
                    ">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="
                          inline-flex items-center gap-1.5
                          text-xs font-medium
                          bg-gray-800/50 text-gray-300
                          px-2 py-1 sm:px-3 sm:py-1.5
                          rounded-lg border border-gray-700/50
                          hover:border-green-400/50 hover:text-green-300
                          transition-all duration-300 cursor-default
                          backdrop-blur-sm
                        "
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </motion.span>
                    ))}
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

export default function Experience() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950 w-full py-12 sm:py-16 md:py-20"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse opacity-20" />
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500 rounded-full blur-3xl animate-pulse opacity-20" style={{ animationDelay: "2s" }} />
      </div>

      <div className="w-full relative z-10">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-green-400/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse" />
              PROFESSIONAL JOURNEY
            </motion.span>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Work<br className="sm:hidden" /> Experience
            </motion.h2>

            <motion.p
              className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My professional journey through innovative companies and challenging projects that
              shaped my expertise in modern web development
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <EnhancedTimeline />

          {/* Career summary */}
          <motion.div
            className="text-center mt-12 sm:mt-16 md:mt-20 p-5 sm:p-8 md:p-12 bg-gradient-to-r from-gray-900/60 to-black/60 rounded-2xl sm:rounded-3xl border border-gray-800/50 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-green-500 rounded-full filter blur-xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-6">
                Continuous Growth & Innovation
              </h3>
              <p className="text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                From intern to professional developer, my journey has been marked by continuous learning,
                adapting to new technologies, and delivering exceptional results for clients and teams alike.
                I'm passionate about creating digital experiences that make a difference.
              </p>

              {/* Stats */}
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
                {[
                  { number: "2+", label: "Years Experience" },
                  { number: "20+", label: "Projects" },
                  { number: "15+", label: "Technologies" },
                  { number: "100%", label: "Dedication" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </section>
  );
}