import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import ProfessionalDevelopment from './sections/ProfessionalDevelopment';
import Achievements from './sections/Achievements';
import Languages from './sections/Languages';
import Competencies from './sections/Competencies';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ProfessionalDevelopment />
        <Achievements />
        <Languages />
        <Competencies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
