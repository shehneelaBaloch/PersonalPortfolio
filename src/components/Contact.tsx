"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "👔",
      color: "hover:bg-blue-500"
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "💻",
      color: "hover:bg-gray-700"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "🐦",
      color: "hover:bg-blue-400"
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: "📧",
      color: "hover:bg-red-500"
    },
    {
      name: "Portfolio",
      url: "https://yourportfolio.com",
      icon: "🌐",
      color: "hover:bg-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6" data-scroll-section>
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.p
        className="text-lg text-center mb-16 text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Feel free to reach out to me through any of these platforms. I'm always open to discussing new opportunities and creative ideas!
      </motion.p>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-xl bg-black/40 border border-white/10 flex flex-col items-center justify-center gap-3 transition-all duration-300 ${social.color} hover:scale-105 hover:shadow-2xl`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-3xl">{social.icon}</span>
            <h3 className="text-xl font-semibold">{social.name}</h3>
            <p className="text-sm text-gray-400 text-center">Click to connect</p>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400">Let's create something amazing together! ✨</p>
      </motion.div>
    </section>
  );
}