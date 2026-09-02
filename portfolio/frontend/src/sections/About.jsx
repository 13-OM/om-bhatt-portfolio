import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Code, Brain, Rocket, ShieldCheck, Terminal } from 'lucide-react';

const highlightCards = [
  {
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    title: "Computer Engineering",
    description: "Currently pursuing B.E./B.Tech with strong foundational knowledge in computer science and engineering principles."
  },
  {
    icon: <Brain className="w-6 h-6 text-violet-400" />,
    title: "AI & Machine Learning",
    description: "Hands-on experience in Applied AI, machine learning regression models, and intelligent automation systems."
  },
  {
    icon: <Code className="w-6 h-6 text-indigo-400" />,
    title: "Web Development",
    description: "Building responsive, modern web applications using HTML, CSS, JavaScript, PHP, and modern frameworks."
  },
  {
    icon: <Rocket className="w-6 h-6 text-violet-400" />,
    title: "Practical Projects",
    description: "Developed diverse applications including Telegram bots, LSB Steganography tools, and NGO platforms."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-100/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Innovative Solutions with Passion
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Dedicated to continuous learning and delivering impactful software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Narrative Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">
              A Motivated Computer Engineering Student & Developer
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
              {portfolioData.summary}
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              With a strong academic background including a Diploma in Computer Engineering (CGPA 9.15) and ongoing B.E. studies at Government Engineering College, Dahod, I thrive on solving complex technical challenges. My certifications span across IBM SkillsBuild, AICTE, and IIT Bombay programs, reflecting my dedication to mastering emerging technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-dark-50 border border-white/10">
                <div className="text-2xl font-bold text-indigo-400">9.15</div>
                <div className="text-xs text-gray-400 mt-1">Diploma CGPA</div>
              </div>
              <div className="p-4 rounded-2xl bg-dark-50 border border-white/10">
                <div className="text-2xl font-bold text-indigo-400">8.60</div>
                <div className="text-xs text-gray-400 mt-1">Sem 3 SPI (B.E.)</div>
              </div>
            </div>
          </motion.div>

          {/* Cards Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlightCards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-50 border border-white/10 hover:border-indigo-500/40 transition-all group hover:-translate-y-1 shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
