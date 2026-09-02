import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
                OM
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                PORTFOLIO <span className="text-indigo-500">WEBSITE</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              {portfolioData.summary}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills & Tech</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Featured Projects</a></li>
              <li><a href="#education" className="hover:text-indigo-400 transition-colors">Education</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Portfolio</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#experience" className="hover:text-indigo-400 transition-colors">Professional Development</a></li>
              <li><a href="#achievements" className="hover:text-indigo-400 transition-colors">Achievements</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact Me</a></li>
              <li><a href={portfolioData.personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Download Resume</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Om Bhatt. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
