"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  
  {
    title: "Sassy Snail",
    desc: "A modern e-commerce web application built with React.js, featuring a sleek and responsive UI design. Developed dynamic product pages, interactive components, and optimized user experience for seamless browsing and checkout across all devices.",
    img: "/sassy.webp",
    github: "#",
    live: "https://sassysnail.netlify.app/",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "Node.js"],
    featured: true,
  },
  {
    title: "Ecommerce Platform",
    desc: "Full-stack online store with Stripe payments, inventory management, and admin dashboard. Includes user authentication, cart functionality, and order tracking.",
    img: "/eccommerce.png",
    github: "#",
    live: "https://myshopeazy.vercel.app/",
    tags: ["React", "Node.js", "Stripe", "Next.js", "MongoDB", "Tailwind", "TypeScript", "Express",],
    featured: true
  },
  {
    title: "Portfolio Website",
    desc: "Modern animated portfolio featuring GSAP animations, Framer Motion interactions, and responsive design. Optimized for performance and SEO.",
    img: "/projects/portfolio.jpg",
    github: "#",
    live: "#",
    tags: ["Next.js", "GSAP", "Framer Motion", "Tailwind"],
    featured: false
  },
  {
    title: "AI Powered Path Generator",
    desc: "An intelligent pathfinding application that utilizes AI algorithms to generate optimal routes in real-time.",
    img: "/pic2.png",
    github: "#",
    live: "#",
    tags: ["Next.js", "Gemini"],
    featured: false
  },
  {
    title: "Weather",
    desc: "Real-time weather app",
    img: "/weather.png",
    github: "#",
    live: "https://breezecheck.netlify.app/",
    tags: ["React", "API Integration", "css"],
    featured: false
  },
  {
    title: "AI Powered Code Optimizer",
    desc: "Intelligent code optimization tool that leverages AI to improve code quality and performance.",
    img: "/code.webp",
    github: "#",
    live: "https://ai-code-optimizer-ashy.vercel.app/",
    tags: ["Python", "Django", "React", "Data Visualization"],
    featured: false
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-950 overflow-hidden"
      data-scroll-section
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium mb-4 border border-green-400/30"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            MY WORK
          </motion.span>
          <motion.h2
            className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here are some of my recent projects that showcase my skills in modern web development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-green-400/30 overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: idx * 0.1
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-cyan-400 text-black text-xs font-bold rounded-full">
                    FEATURED
                  </span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Hover Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <motion.a
                    href={project.github}
                    className="p-3 bg-black/80 rounded-full hover:bg-green-400 hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="p-3 bg-black/80 rounded-full hover:bg-green-400 hover:text-black transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <FaGithub size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </motion.a>
                  </div>
                  <motion.a
                    href={project.live}
                    className="p-2 bg-gray-800/50 rounded-full hover:bg-green-400 hover:text-black transition-colors"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <FaArrowRight size={14} />
                  </motion.a>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-400 to-teal-500 text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-green-400/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}