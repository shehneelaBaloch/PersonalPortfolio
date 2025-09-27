"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2023 - Present", role: "Full Stack Developer", company: "Freelance" },
  { year: "2022 - 2023", role: "Frontend Developer", company: "Tech Company" },
  { year: "2021 - 2022", role: "Intern", company: "Startup" },
];

export default function AnimatedTimeline() {
  return (
    <div className="relative border-l border-gray-700 pl-6 max-w-3xl mx-auto">
      {timeline.map((item, idx) => (
        <motion.div
          key={idx}
          className="mb-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute -left-3 w-6 h-6 bg-green-400 rounded-full"></div>
          <h3 className="text-xl font-semibold">{item.role}</h3>
          <p className="text-gray-400">{item.company}</p>
          <span className="text-sm text-gray-500">{item.year}</span>
        </motion.div>
      ))}
    </div>
  );
}
