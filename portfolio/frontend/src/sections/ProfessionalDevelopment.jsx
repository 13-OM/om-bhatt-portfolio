import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Award, Calendar, CheckCircle2 } from 'lucide-react';

export default function ProfessionalDevelopment() {
  return (
    <section id="experience" className="py-24 bg-dark-100/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 uppercase tracking-wider">
            Experience & Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Development & Internships
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Certified technical training, internships, and skill enhancements from IBM SkillsBuild, AICTE, and IIT Bombay.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.professionalDevelopment.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-dark-50 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl group-hover:bg-indigo-600/15 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-xl border ${
                    item.type === 'Internship' 
                      ? 'bg-violet-500/10 text-violet-400 border-violet-500/20' 
                      : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                  }`}>
                    {item.type}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-indigo-400 group-hover:bg-indigo-600/10 transition-colors">
                    {item.type === 'Internship' ? <Briefcase className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>

                <h4 className="text-sm font-semibold text-gray-300 mb-4">
                  {item.provider}
                </h4>

                {item.description && (
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Badges / Meta */}
                <div className="space-y-2 mb-6">
                  {item.period && (
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.period}</span>
                    </div>
                  )}
                  {item.completionDate && (
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Completion: {item.completionDate}</span>
                    </div>
                  )}
                  {item.score && (
                    <div className="inline-block px-3 py-1 rounded-lg bg-indigo-600/10 text-indigo-300 border border-indigo-600/20 text-xs font-semibold mr-2">
                      Score: {item.score}
                    </div>
                  )}
                  {item.credits && (
                    <div className="inline-block px-3 py-1 rounded-lg bg-violet-600/10 text-violet-300 border border-violet-600/20 text-xs font-semibold">
                      Credits: {item.credits}
                    </div>
                  )}
                </div>
              </div>

              {/* Unique / Certificate ID */}
              {(item.uniqueId || item.certificateId) && (
                <div className="pt-4 border-t border-white/10 text-xs text-gray-400 font-mono break-all">
                  <span className="text-gray-400 font-sans font-medium">ID: </span>
                  {item.uniqueId || item.certificateId}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
