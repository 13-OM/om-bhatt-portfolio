import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 uppercase tracking-wider">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education Qualification
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            My academic journey and scholastic achievements in computer engineering and sciences.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Center Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {portfolioData.education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 relative`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-indigo-600 border-4 border-dark-900 flex items-center justify-center text-white shadow-xl shadow-indigo-600/30 z-10 hidden md:flex">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-8 rounded-3xl bg-dark-50 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-2xl relative group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl group-hover:bg-indigo-600/15 transition-all pointer-events-none" />

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-bold px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                        {edu.location && (
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                            {edu.location}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors">
                        {edu.degree}
                      </h3>

                      <h4 className="text-sm font-semibold text-gray-300 mb-4">
                        {edu.institution}
                      </h4>

                      {edu.detail && (
                        <div className="inline-block px-3.5 py-1.5 rounded-xl bg-indigo-600/10 border border-indigo-600/20 text-indigo-300 font-semibold text-xs">
                          {edu.detail}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
