import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Achievements() {
  const achievement = portfolioData.achievements[0];

  return (
    <section id="achievements" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 uppercase tracking-wider">
            Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Achievement
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            State-level recognition for programming excellence and exceptional user interface design.
          </p>
        </div>

        {/* Featured Achievement Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-dark-50 via-dark-50 to-indigo-950/40 border border-indigo-500/30 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-600/20 transition-all" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Trophy Icon Box */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-600/40 group-hover:scale-105 transition-transform">
                <Trophy className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
            </div>

            {/* Content Box */}
            <div className="md:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>State-Level Competition</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {achievement.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  {achievement.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  {achievement.date}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <h4 className="text-sm font-bold text-indigo-400 flex items-center gap-2">
                  <Award className="w-4 h-4" /> {achievement.award}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
