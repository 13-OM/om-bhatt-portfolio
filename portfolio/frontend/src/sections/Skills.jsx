import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code2, Globe, Database, Cpu, Brain, FileSpreadsheet } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-indigo-400" />,
    skills: portfolioData.skills.programmingLanguages,
    description: "Core languages for efficient software and application engineering."
  },
  {
    title: "Web Development",
    icon: <Globe className="w-6 h-6 text-violet-400" />,
    skills: portfolioData.skills.webDevelopment,
    description: "Full-stack web technologies for responsive and dynamic web interfaces."
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-indigo-400" />,
    skills: portfolioData.skills.databases,
    description: "Relational and NoSQL database systems for secure data storage."
  },
  {
    title: "Core Computer Science",
    icon: <Cpu className="w-6 h-6 text-violet-400" />,
    skills: portfolioData.skills.coreCS,
    description: "Fundamental algorithms and data structures for optimal problem solving."
  },
  {
    title: "Machine Learning & AI",
    icon: <Brain className="w-6 h-6 text-indigo-400" />,
    skills: portfolioData.skills.machineLearning,
    description: "Predictive modeling, regression techniques, and AI applications."
  },
  {
    title: "Productivity Tools",
    icon: <FileSpreadsheet className="w-6 h-6 text-violet-400" />,
    skills: portfolioData.skills.productivity,
    description: "Office suites and professional tools for documentation and productivity."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 uppercase tracking-wider">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A comprehensive overview of my programming languages, frameworks, and core computer science knowledge.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-dark-50 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl group-hover:bg-indigo-600/15 transition-all pointer-events-none" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600/20 transition-all shadow-lg shadow-indigo-600/10">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{category.title}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{category.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 group-hover:border-indigo-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
