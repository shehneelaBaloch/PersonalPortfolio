"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function About() {
  const [showHeading, setShowHeading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    // Show heading first, then animate it away and show about section
    const timer = setTimeout(() => {
      setShowHeading(false);
      // Small delay before showing about section
      setTimeout(() => setShowAbout(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf'; // This will be the filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950 w-full"
      data-scroll-section
    >
      {/* Main About Section - Always in DOM but hidden initially */}
      <div className={`w-full ${showAbout ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
            {/* Left Column - Image & Stats */}
            <div className="space-y-10">
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-800/50">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-72 h-72 mx-auto mb-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full animate-spin-slow"></div>
                      <div className="absolute inset-3 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-800">
                        <Image
                          src="/image.jpg" // Update this path
                          alt="Shahneela"
                          width={280}
                          height={280}
                          className="rounded-full object-cover w-full h-full"
                          priority
                        />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Full Stack Developer
                    </h3>
                    <p className="text-gray-400 text-center text-lg">
                      Crafting digital experiences with modern technologies
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Stats Grid */}
              <motion.div 
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  { number: "3+", label: "Years Experience" },
                  { number: "50+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-purple-400 text-base font-medium mb-6 border border-purple-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                  About Me
                </span>
                <h2 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                  Crafting Digital<br />Excellence
                </h2>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm a passionate <span className="text-purple-400 font-semibold">full-stack developer</span> with expertise in creating scalable web applications, 
                  smooth animations, and modern UI/UX experiences. I love blending creativity with functionality 
                  to craft digital experiences that feel alive and intuitive.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  My approach combines <span className="text-blue-400 font-semibold">technical excellence</span> with user-centered design, ensuring every project 
                  not only works flawlessly but also delivers an exceptional user experience that drives results.
                </p>
              </motion.div>

              {/* Enhanced Skills */}
              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-400 mb-4">Technologies I Work With:</h4>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Framer Motion", "MongoDB", ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-5 py-3 bg-gray-900/60 backdrop-blur-sm rounded-xl text-base border border-gray-800 text-gray-300 hover:border-purple-500/50 hover:text-purple-300 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div 
                className="pt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
               
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Heading Layer - Only this animates */}
      <AnimatePresence>
        {showHeading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-gray-900 via-black to-purple-950"
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
              className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              About Me
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}