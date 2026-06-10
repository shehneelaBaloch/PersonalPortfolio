"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaGlobe, FaDownload, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [showHeading, setShowHeading] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeading(false);
      setTimeout(() => setShowContact(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Simple copy to clipboard function
  const copyEmail = () => {
    navigator.clipboard.writeText("balochshahneela378@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLinkedIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/shahneelabaloch9090/", "_blank", "noopener,noreferrer");
  };

  const handleGitHub = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.open("https://github.com/shehneelaBaloch", "_blank", "noopener,noreferrer");
  };

  
  const handlePortfolio = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.open("https://shahneelabalochportfolio.vercel.app/", "_blank", "noopener,noreferrer");
  };

  const handleResume = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const resumePath = "/ShehneelaZeendpurResume.pdf";
    window.open(resumePath, "_blank", "noopener,noreferrer");
  };

  const handleWhatsApp = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.open("https://wa.me/923192038817", "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950 w-full py-20"
    >
      <div className={`w-full ${showContact ? 'block' : 'hidden'}`}>
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
              LET'S CONNECT
            </motion.span>
            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Get In<br />Touch
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to bring your ideas to life? Let's discuss your project and create something extraordinary together.
              I'm always open to new opportunities and creative collaborations.
            </motion.p>
          </motion.div>

          {/* Social Links Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* LinkedIn */}
            <motion.div
              onClick={handleLinkedIn}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <FaLinkedin className="text-white" size={28} />
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Professional network</p>
              </div>
            </motion.div>

            {/* GitHub */}
            <motion.div
              onClick={handleGitHub}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/25 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <FaGithub className="text-white" size={28} />
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
                <p className="text-gray-400 text-sm">Code & projects</p>
              </div>
            </motion.div>

         
           
             
          

            {/* Email - Simple display without mailto */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-700 shadow-lg">
                <FaEnvelope className="text-white" size={28} />
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 text-sm break-all">balochshahneela378@gmail.com</p>
                <button
                  onClick={copyEmail}
                  className="mt-3 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-green-400 text-sm font-semibold transition-all duration-300"
                >
                  {copied ? "✅ Copied!" : "📋 Copy Email"}
                </button>
              </div>
            </div>

            {/* Portfolio */}
            <motion.div
              onClick={handlePortfolio}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <FaGlobe className="text-white" size={28} />
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Portfolio</h3>
                <p className="text-gray-400 text-sm">My work</p>
              </div>
            </motion.div>

            {/* Resume */}
            <motion.div
              onClick={handleResume}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-700 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <FaDownload className="text-white" size={28} />
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Resume</h3>
                <p className="text-gray-400 text-sm">Download CV</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Info & CTA */}
          <motion.div
            className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-gray-900/60 to-black/60 rounded-3xl border border-gray-800/50 backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm currently available for freelance work and new opportunities. 
                Let's discuss how we can work together to bring your vision to life.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Response Time</div>
                  <div className="text-lg font-bold text-green-400">Within 24 Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Availability</div>
                  <div className="text-lg font-bold text-cyan-400">Open for Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Location</div>
                  <div className="text-lg font-bold text-purple-400">Remote Worldwide</div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <motion.button
                onClick={handleWhatsApp}
                className="group inline-flex items-center gap-4 px-12 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl font-bold text-lg text-white shadow-2xl shadow-green-400/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/40 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="w-6 h-6" />
                Start Conversation
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg">
              Let's create something amazing together! ✨
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animated Heading */}
      <AnimatePresence>
        {showHeading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-gray-900 via-black to-purple-950"
            initial={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -100,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Contact
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
    </section>
  );
}