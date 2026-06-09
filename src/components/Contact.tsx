"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, MouseEvent, ReactNode } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaGlobe, FaDownload } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
  hoverColor: string;
  description: string;
  isDownload: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function Contact() {
  const [showHeading, setShowHeading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // Show heading first, then animate it away and show contact section
    const timer = setTimeout(() => {
      setShowHeading(false);
      // Small delay before showing contact section
      setTimeout(() => setShowContact(true), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle resume download
  const handleResumeDownload = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/ShehneelaZeendpurResume.pdf';
    link.download = 'Shehneela_Baloch_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shahneelabaloch9090/",
      icon: <FaLinkedin className="text-white" size={28} />,
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-2xl hover:shadow-blue-500/25",
      description: "Professional network",
      isDownload: false
    },
    {
      name: "GitHub",
      url: "https://github.com/shehneelaBaloch",
      icon: <FaGithub className="text-white" size={28} />,
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-2xl hover:shadow-gray-500/25",
      description: "Code & projects",
      isDownload: false
    },
    {
      name: "Twitter",
      url: "https://twitter.com/",
      icon: <FaTwitter className="text-white" size={28} />,
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-2xl hover:shadow-blue-500/25",
      description: "Follow me",
      isDownload: false
    },
    {
      name: "Email",
      url: "mailto:shahneelakhadi@gmail.com",
      icon: <FaEnvelope className="text-white" size={28} />,
      color: "from-red-500 to-red-700",
      hoverColor: "hover:shadow-2xl hover:shadow-red-500/25",
      description: "Direct message",
      isDownload: false
    },
    {
      name: "Portfolio",
      url: "https://shahneelabalochportfolio.vercel.app/",
      icon: <FaGlobe className="text-white" size={28} />,
      color: "from-purple-500 to-purple-700",
      hoverColor: "hover:shadow-2xl hover:shadow-purple-500/25",
      description: "My work",
      isDownload: false
    },
    {
      name: "Resume",
      url: "#",
      icon: <FaDownload className="text-white" size={28} />,
      color: "from-green-500 to-green-700",
      hoverColor: "hover:shadow-2xl hover:shadow-green-500/25",
      description: "Download CV",
      isDownload: true,
      onClick: handleResumeDownload
    }
  ];

  const handleCardClick = (social: SocialLink) => {
    if (social.isDownload && social.onClick) {
      social.onClick({} as MouseEvent<HTMLDivElement>);
    } else if (social.url && social.url !== '#') {
      window.open(social.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950 w-full py-20"
      data-scroll-section
    >
      {/* Main Contact Section - Always in DOM but hidden initially */}
      <div className={`w-full ${showContact ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          {/* Enhanced Header */}
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

          {/* Enhanced Social Links Grid */}
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-500 ${social.hoverColor} overflow-hidden cursor-pointer`}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(social)}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative z-10 p-4 rounded-2xl bg-gradient-to-r ${social.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {social.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {social.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {social.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Contact Info & CTA */}
          <motion.div
            className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-gray-900/60 to-black/60 rounded-3xl border border-gray-800/50 backdrop-blur-sm relative overflow-hidden"
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
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm currently available for freelance work and new opportunities. 
                Let's discuss how we can work together to bring your vision to life.
              </p>

              {/* Quick Contact Info */}
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

              {/* Primary CTA Button */}
              <motion.button
                onClick={() => window.open('https://wa.me/923192038817', '_blank', 'noopener,noreferrer')}
                className="group inline-flex items-center gap-4 px-12 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl font-bold text-lg text-white shadow-2xl shadow-green-400/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/40 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="w-6 h-6" />
                Start Conversation
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </motion.button>
            </div>
          </motion.div>

          {/* Footer Note */}
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

      {/* Background Elements */}
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