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
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950 w-full py-12 sm:py-16 md:py-20"
      data-scroll-section
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-10 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main About Section - Always in DOM but hidden initially */}
      <div className={`w-full ${showAbout ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center w-full">
            
            {/* Right Column - Content (Now FIRST on mobile) */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-purple-400 text-sm sm:text-base font-medium mb-4 sm:mb-6 border border-purple-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                  About Me
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                  Crafting Digital<br className="hidden sm:block" />Excellence
                </h2>
              </motion.div>

              <motion.div
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  I'm a passionate <span className="text-purple-400 font-semibold">full-stack developer</span> with expertise in creating scalable web applications, 
                  smooth animations, and modern UI/UX experiences. I love blending creativity with functionality 
                  to craft digital experiences that feel alive and intuitive.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  My approach combines <span className="text-blue-400 font-semibold">technical excellence</span> with user-centered design, ensuring every project 
                  not only works flawlessly but also delivers an exceptional user experience that drives results.
                </p>
              </motion.div>

              {/* Enhanced Skills */}
              <motion.div 
                className="pt-4 sm:pt-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base sm:text-lg font-semibold text-gray-400 mb-3 sm:mb-4">Technologies I Work With:</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Framer Motion", "MongoDB"].map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 bg-gray-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base border border-gray-800 text-gray-300 hover:border-purple-500/50 hover:text-purple-300 hover:scale-105 transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

             
            </div>

            {/* Left Column - Image & Stats (Now SECOND on mobile) */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-2">
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-800/50">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                  </div>
                  
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px sm:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
                  
                  <div className="relative z-10">
                    <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto mb-6 sm:mb-8 relative">
                      {/* Outer Glow Ring */}
                      <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full opacity-60 blur-xl animate-spin-slow"></div>
                      
                      {/* Middle Gradient Ring */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }}></div>
                      
                      {/* Image Container */}
                      <div className="absolute inset-1 sm:inset-1.5 md:inset-2 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden border-2 sm:border-3 md:border-4 border-gray-800/80 group-hover:border-purple-500/50 transition-all duration-500">
                        <div className="relative w-full h-full">
                          <Image
                            src="/image.jpg"
                            alt="Shahneela"
                            width={280}
                            height={280}
                            className="rounded-full object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            priority
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Full Stack Developer
                    </h3>
                    <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg">
                      Crafting digital experiences with modern technologies
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Stats Grid */}
              <motion.div 
                className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6"
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
                  <motion.div 
                    key={index} 
                    className="text-center p-3 sm:p-4 md:p-6 bg-gray-900/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 group cursor-default"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
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
            <div className="relative px-4 sm:px-0">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                About Me
              </motion.h1>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 blur-3xl opacity-30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.3 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}