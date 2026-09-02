import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download, Mail, Sparkles, Code, Cpu, Globe } from 'lucide-react';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = portfolioData.personal.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden bg-[#0a0a0f]">
      {/* Background Glow & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Computer Engineering Portfolio</span>
            </div>

            <div className="space-y-2">
              <p className="text-gray-400 font-medium text-lg tracking-wide uppercase">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
                OM <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-violet-500">BHATT</span>
              </h1>
            </div>

            {/* Animated Title Transition */}
            <div className="h-10 flex items-center">
              <span className="text-xl sm:text-2xl font-semibold text-gray-300">
                I am a{' '}
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-indigo-400 font-bold inline-block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              {portfolioData.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-sm border border-white/10 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - EXACT PERSONAL PHOTO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Animated Glow Container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-violet-600/30 rounded-3xl blur-2xl transform -rotate-3 scale-105 animate-pulse-slow pointer-events-none" />

            {/* Image Frame */}
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-[4/5] rounded-3xl p-3 bg-dark-50 border border-white/15 shadow-2xl glass-panel group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-dark-200">
                <img
                  src={portfolioData.personal.profileImage}
                  alt="Om Bhatt - Personal Photograph"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating UI Elements around photo */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-4 py-2 rounded-2xl glass-panel border border-white/15 shadow-xl flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-white">AI/ML</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-2xl glass-panel border border-white/15 shadow-xl flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-semibold text-white">Web Development</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-6 px-4 py-2 rounded-2xl glass-panel border border-white/15 shadow-xl flex items-center gap-2"
              >
                <Code className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-semibold text-white">Python</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
