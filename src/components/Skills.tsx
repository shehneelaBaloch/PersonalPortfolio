"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNode, FaGithub, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiGraphql,
  SiExpress,
  SiVercel,
} from "react-icons/si";

const skills = [
  { icon: <SiNextdotjs className="text-white" size={32} />, name: "Next.js", level: 95, color: "from-white to-gray-400" },
  { icon: <FaReact className="text-cyan-400" size={32} />, name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
  { icon: <SiTypescript className="text-blue-500" size={32} />, name: "TypeScript", level: 85, color: "from-blue-500 to-blue-600" },
  { icon: <FaNode className="text-green-500" size={32} />, name: "Node.js", level: 88, color: "from-green-500 to-green-600" },
  { icon: <SiMongodb className="text-green-400" size={32} />, name: "MongoDB", level: 82, color: "from-green-400 to-green-500" },
  { icon: <SiTailwindcss className="text-teal-400" size={32} />, name: "Tailwind", level: 95, color: "from-teal-400 to-cyan-500" },
  { icon: <SiFramer className="text-pink-500" size={32} />, name: "Framer Motion", level: 80, color: "from-pink-500 to-purple-500" },
  { icon: <FaGithub className="text-gray-300" size={32} />, name: "GitHub", level: 85, color: "from-gray-300 to-gray-400" },
  { icon: <SiGraphql className="text-pink-400" size={32} />, name: "GraphQL", level: 75, color: "from-pink-400 to-red-500" },
  { icon: <FaAws className="text-orange-400" size={32} />, name: "AWS", level: 70, color: "from-orange-400 to-yellow-500" },
  { icon: <SiExpress className="text-gray-300" size={32} />, name: "Express.js", level: 85, color: "from-gray-300 to-gray-500" },
  { icon: <SiVercel className="text-white" size={32} />, name: "Vercel", level: 90, color: "from-white to-gray-300" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-950 overflow-hidden"
      data-scroll-section
    >
      {/* ✅ Static background (no random on server) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

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
            TECHNICAL EXPERTISE
          </motion.span>
          <motion.h2
            className="text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here are the technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 hover:border-green-400/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: idx * 0.1,
              }}
              viewport={{ once: true }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: 0.5 + idx * 0.1,
                    }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-green-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Always Learning & Growing
          </h3>
          <p className="text-gray-400 text-lg">
            I'm constantly exploring new technologies and frameworks to stay at
            the forefront of web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
