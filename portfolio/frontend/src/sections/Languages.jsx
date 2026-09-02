import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Languages as LanguagesIcon, CheckCircle2 } from 'lucide-react';

export default function Languages() {
  return (
    <section className="py-24 bg-dark-100/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 uppercase tracking-wider">
            Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Language Proficiency
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Multilingual capabilities for effective global collaboration and communication.
          </p>
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {portfolioData.languages.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-dark-50 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl group-hover:bg-indigo-600/15 transition-all pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                <LanguagesIcon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{lang.name}</h3>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Speak & Understand:</span>
                  <span className="font-semibold text-indigo-400 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    {lang.speakUnderstand}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Write:</span>
                  <span className="font-semibold text-violet-400 px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    {lang.write}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
