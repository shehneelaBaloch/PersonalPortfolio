"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 py-6 text-center border-t border-purple-500/30"
    >
      <p className="text-gray-400">© 2025 Shahneela. All rights reserved.</p>
    </motion.footer>
  );
}
