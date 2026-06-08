"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaReact, FaNode, FaGithub, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  
  SiExpress,
  SiVercel,
} from "react-icons/si";

const skills = [
  { icon: <SiNextdotjs className="text-white" size={32} />, name: "Next.js", level: "Expert", color: "from-white to-gray-400" },
  { icon: <FaReact className="text-cyan-400" size={32} />, name: "React", level: "Expert", color: "from-cyan-400 to-blue-500" },
  { icon: <SiTypescript className="text-blue-500" size={32} />, name: "TypeScript", level: "Advanced", color: "from-blue-500 to-blue-600" },
  { icon: <FaNode className="text-green-500" size={32} />, name: "Node.js", level: "Advanced", color: "from-green-500 to-green-600" },
  { icon: <SiMongodb className="text-green-400" size={32} />, name: "MongoDB", level: "Advanced", color: "from-green-400 to-green-500" },
  { icon: <SiTailwindcss className="text-teal-400" size={32} />, name: "Tailwind", level: "Expert", color: "from-teal-400 to-cyan-500" },
  { icon: <SiFramer className="text-pink-500" size={32} />, name: "Framer Motion", level: "Advanced", color: "from-pink-500 to-purple-500" },
  { icon: <FaGithub className="text-gray-300" size={32} />, name: "GitHub", level: "Advanced", color: "from-gray-300 to-gray-400" },
  { icon: <SiExpress className="text-gray-300" size={32} />, name: "Express.js", level: "Advanced", color: "from-gray-300 to-gray-500" },
  { icon: <SiVercel className="text-white" size={32} />, name: "Vercel", level: "Expert", color: "from-white to-gray-300" },

];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showHeading, setShowHeading] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeading(false);
      setTimeout(() => setShowSkills(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "text-green-400 bg-green-400/10 border-green-400/30";
      case "Advanced": return "text-blue-400 bg-blue-400/10 border-blue-400/30";
      case "Intermediate": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/30";
      default: return "text-gray-400 bg-gray-400/10 border-gray-400/30";
    }
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-950 w-full py-20"
      data-scroll-section
    >
      {/* Main Skills Section */}
      <div className={`w-full ${showSkills ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-flex items-center px-6 py-3 bg-green-400/10 text-green-400 rounded-full text-base font-medium mb-6 border border-green-400/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              TECHNICAL EXPERTISE
            </motion.span>
            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Skills &<br />Technologies
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Here are the technologies I work with to bring ideas to life and create exceptional digital experiences
            </motion.p>
          </motion.div>

          {/* Enhanced Skills Grid - Simplified */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="group relative bg-gradient-to-br from-gray-900/60 to-black/60 p-8 rounded-3xl border border-gray-800/50 hover:border-green-400/50 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: idx * 0.1,
                }}
                viewport={{ once: true }}
              >
                {/* Enhanced Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-cyan-400/5 to-purple-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6`}
                  >
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {skill.name}
                  </h3>

                  {/* Skill Level Badge */}
                  <div className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Footer Info */}
          <motion.div
            className="text-center mt-20 p-12 bg-gradient-to-r from-gray-900/60 to-black/60 rounded-3xl border border-gray-800/50 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Always Learning & Growing
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                I'm constantly exploring new technologies and frameworks to stay at the forefront of web development. 
                Every project is an opportunity to learn something new and push the boundaries of what's possible.
              </p>
              
              {/* Current Learning */}
              <div className="mt-8 inline-flex flex-wrap gap-4 justify-center">
                {["Three.js", "React Native", "Python", "Machine Learning"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-5 py-2 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full text-sm border border-green-400/30 text-green-400 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Heading Layer */}
      <AnimatePresence>
        {showHeading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-black via-gray-900 to-purple-950"
            initial={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -100,
              transition: {
                duration: 0.8,
                ease: "easeInOut"
              }
            }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Skills
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </section>
  );
}