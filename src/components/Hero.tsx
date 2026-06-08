"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [showHeading, setShowHeading] = useState(true);
  const [showHero, setShowHero] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Generate enhanced particles with colors and animations
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: i % 3 === 0 ? 'from-green-400' : i % 3 === 1 ? 'from-teal-400' : 'from-purple-400',
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(generated);

    // Show heading first, then animate it away and show hero section
    const timer = setTimeout(() => {
      setShowHeading(false);
      setTimeout(() => setShowHero(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950 py-20 px-6"
      data-scroll-section
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Hero Section */}
      <div className={`w-full max-w-7xl mx-auto ${showHero ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
          
          {/* Enhanced Left Column - Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Enhanced Availability Badge */}
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-green-400/10 border border-green-400/30 backdrop-blur-sm mb-10 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-green-400 text-base font-semibold">
                  Available for new projects
                </span>
              </motion.div>

              {/* Enhanced Main Title */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-400 mb-2">Hi, I'm</span>
                <span className="relative inline-block mt-4">
                  <span className="bg-gradient-to-r from-green-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                    Shahneela
                  </span>
                  <motion.div 
                    className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-purple-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h1>

              {/* Enhanced Subtitle */}
              <p className="text-2xl text-gray-300 leading-relaxed mb-8 bg-gradient-to-r from-gray-900/50 to-transparent p-6 rounded-2xl border border-gray-800/30 hover:border-green-500/20 transition-all duration-300">
                Full Stack Developer specializing in modern web technologies. I create
                <span className="text-green-400 font-semibold"> digital experiences </span>
                that blend innovation with functionality.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#projects"
                className="group relative px-12 py-5 rounded-2xl bg-gradient-to-r from-green-400 to-teal-500 text-black font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  View My Work
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.a>

              <motion.a
                href="#contact"
                className="group relative px-12 py-5 rounded-2xl border-2 border-green-400 text-green-400 font-bold text-xl transition-all duration-300 hover:scale-105 hover:bg-green-400 hover:text-black overflow-hidden backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Contact Me
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Enhanced Tech Stack */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-400 mb-4 font-medium">Tech Stack:</p>
              <div className="flex flex-wrap gap-4">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Framer Motion", "MongoDB", "PostgreSQL"].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl text-base border border-gray-700 text-gray-300 hover:border-green-500/50 hover:text-green-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10 cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Right Column - Visual Elements with Image */}
          <div className="space-y-10">
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-green-600 via-teal-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 shadow-2xl">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-green-400 rounded-full mix-blend-soft-light filter blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full mix-blend-soft-light filter blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                </div>

                {/* Enhanced Animated Particles */}
                <div className="absolute inset-0">
                  {particles.map((particle) => (
                    <motion.div
                      key={particle.id}
                      className={`absolute rounded-full bg-gradient-to-r ${particle.color} to-transparent opacity-70`}
                      style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Enhanced Image Content */}
                <div className="relative z-10 text-center">
                  <div className="w-80 h-80 mx-auto mb-8 relative">
                    {/* Outer Glow Ring */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500 via-teal-400 to-purple-400 rounded-full opacity-60 blur-xl animate-spin-slow"></div>
                    
                    {/* Middle Gradient Ring */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-400 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }}></div>
                    
                    {/* Image Container */}
                    <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-800/80 group-hover:border-green-500/50 transition-all duration-500">
                      <div className="relative w-full h-full">
                        <Image
                          src="/image.jpg" // Update with your image path
                          alt="Shahneela - Full Stack Developer"
                          width={320}
                          height={320}
                          className={`rounded-full object-cover w-full h-full transition-all duration-700 ${
                            imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                          } group-hover:scale-105`}
                          priority
                          onLoad={() => setImageLoaded(true)}
                        />
                        
                        {/* Loading Skeleton */}
                        {!imageLoaded && (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full animate-pulse flex items-center justify-center">
                            <div className="w-16 h-16 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin"></div>
                          </div>
                        )}
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                      Innovative Developer
                    </h3>
                    <p className="text-gray-400 text-center text-lg leading-relaxed">
                      Building the future with cutting-edge technology & creative solutions
                    </p>
                  </motion.div>
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
                { number: "3+", label: "Years Exp", color: "from-green-400 to-green-600" },
                { number: "50+", label: "Projects", color: "from-teal-400 to-teal-600" },
                { number: "100%", label: "Satisfaction", color: "from-purple-400 to-purple-600" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-green-500/30 transition-all duration-300 hover:scale-105 group cursor-default"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Animated Heading Layer */}
      <AnimatePresence>
        {showHeading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-gray-900 via-black to-purple-950"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.1,
              transition: {
                duration: 0.8,
                ease: "easeInOut"
              }
            }}
          >
            <div className="relative">
              <motion.h1
                className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-purple-400 bg-clip-text text-transparent text-center relative z-10"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Welcome
              </motion.h1>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-400 blur-3xl opacity-30"
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