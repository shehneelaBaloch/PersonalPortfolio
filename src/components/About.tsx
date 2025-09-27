"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 max-w-6xl mx-auto flex items-center"
      data-scroll-section
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column - Image & Stats */}
        <div className="space-y-8">
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Full Stack Developer</h3>
              <p className="text-gray-400 text-center">
                Crafting digital experiences with modern technologies
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-3 gap-4"
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
              <div key={index} className="text-center p-4 bg-gray-900 rounded-xl border border-gray-800">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full text-purple-400 text-sm font-medium mb-4 border border-purple-500/30">
              About Me
            </span>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Crafting Digital Excellence
            </h2>
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I'm a passionate full-stack developer with expertise in creating scalable web applications, 
            smooth animations, and modern UI/UX experiences. I love blending creativity with functionality 
            to craft digital experiences that feel alive and intuitive.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My approach combines technical excellence with user-centered design, ensuring every project 
            not only works flawlessly but also delivers an exceptional user experience that drives results.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-3 pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Framer Motion"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 rounded-full text-sm border border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div 
            className="pt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium text-white overflow-hidden">
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}