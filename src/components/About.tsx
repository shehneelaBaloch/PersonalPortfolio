"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaGoogle, FaRobot } from "react-icons/fa";
import { SiReplit } from "react-icons/si";

export default function About() {
  const [showHeading, setShowHeading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeading(false);
      setTimeout(() => setShowAbout(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950 w-full py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Main Content */}
      <div className={`w-full ${showAbout ? 'block' : 'hidden'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="inline-flex items-center px-4 py-1.5 bg-purple-500/10 rounded-full text-purple-400 text-sm border border-purple-500/30">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                  About Me
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight">
                Hey, I'm Shahneela 
              </h2>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-purple-400 font-semibold">full-stack developer</span> who loves turning complex problems into simple, 
                  beautiful solutions. I've been building web apps for over 3 years now, and honestly? 
                  I still get excited every time I see something I built come to life on screen.
                </p>

                <p>
                  These days, I'm super into <span className="text-green-400 font-semibold">AI and LLMs</span>. I've been working extensively with 
                  <span className="text-blue-400 font-semibold"> Google's Gemini API</span> and 
                  <span className="text-teal-400 font-semibold"> Replit AI</span> to build smarter applications. 
                  There's something magical about teaching machines to understand and help humans better.
                </p>

                <p>
                  When I'm not coding, you'll probably find me exploring new tech, contributing to open source, 
                  or sipping chai while thinking about my next project idea. I believe the best code is written 
                  with passion, and the best products are built with empathy.
                </p>
              </div>

              {/* AI Integration Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/30">
                  <FaRobot className="text-purple-400" size={16} />
                  <span className="text-sm text-gray-300">Currently exploring</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 rounded-full">
                      <FaGoogle size={12} className="text-blue-400" />
                      <span className="text-xs text-blue-400">Gemini</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-teal-500/20 rounded-full">
                      <SiReplit size={12} className="text-teal-400" />
                      <span className="text-xs text-teal-400">Replit AI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-4">
                <h4 className="text-gray-400 font-medium mb-3">Tech I work with</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "MongoDB", "Gemini API", "Replit AI"].map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-sm text-gray-300 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT - Simple Clean Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Simple Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30 bg-gray-900/50 backdrop-blur-sm">
                  <div className="w-80 h-80 md:w-96 md:h-96 relative">
                    <Image
                      src="/image.jpg"
                      alt="Shahneela"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Simple Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                </div>

                {/* Simple Social Icons Below Image */}
                <div className="flex justify-center gap-4 mt-6">
                  <a href="https://github.com/shehneelaBaloch" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/80 rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-all">
                    <FaGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/shahneelabaloch9090/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/80 rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-all">
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Heading Layer */}
      <AnimatePresence>
        {showHeading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-gray-900 via-black to-purple-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}