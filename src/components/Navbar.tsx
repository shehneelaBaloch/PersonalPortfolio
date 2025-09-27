"use client";

import { motion } from "framer-motion";

const links = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full bg-black/30 backdrop-blur-lg shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          Shahneela
        </h1>
        <div className="space-x-6 hidden md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-purple-400 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 transition"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
