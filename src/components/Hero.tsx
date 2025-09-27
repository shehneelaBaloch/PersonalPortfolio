"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // ✅ Generate particles only on client to avoid hydration mismatch
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
    }));
    setParticles(generated);

    // Main title animation
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" }
    );

    // Background particles animation
    gsap.fromTo(
      ".particle",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.05,
        ease: "back.out(1.7)",
        delay: 0.5,
      }
    );

    // Floating animation for particles
    gsap.to(".particle", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-5, 5)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1,
    });

    // Cursor glow effect
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(".cursor-glow", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-950"
      data-scroll-section
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full bg-gradient-to-r from-green-400 to-purple-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Cursor Glow Effect */}
      <div className="cursor-glow fixed w-96 h-96 rounded-full bg-green-400/10 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/10 border border-green-400/30 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">
            Available for new projects
          </span>
        </motion.div>

        {/* Main Title */}
        <h1 className="hero-title relative text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6">
          <span className="block">Hi, I'm</span>
          <span className="relative inline-block mt-2 bg-gradient-to-r from-green-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Shahneela
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Full Stack Developer specializing in modern web technologies. I create
          digital experiences that blend innovation with functionality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-400 to-teal-500 text-black font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/25"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl border-2 border-green-400 text-green-400 font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-green-400 hover:text-black"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
