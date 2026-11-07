import React from 'react';
import { PageType } from '../types';
import { Sparkles, Target, Users, Award, Shield } from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: PageType) => void;
}

export const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>About NovaCity Studio</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          Pioneering Digital Excellence with Passion & Precision
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Founded by a team of visionary engineers and designers, NovaCity bridges the gap between complex engineering and breathtaking aesthetic design.
        </p>
      </div>

      {/* Mission & Vision grid with hover effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-indigo-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-indigo-500/20 flex flex-col justify-between cursor-pointer">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              To empower organizations and creators with fault-tolerant, high-performance software systems and world-class digital experiences that inspire and endure.
            </p>
          </div>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 flex flex-col justify-between cursor-pointer">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-300 leading-relaxed text-base">
              To shape the future of digital interaction by combining cutting-edge cloud infrastructure with uncompromising aesthetic standards.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section with hover effects */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Leadership</h2>
          <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
            Meet the Minds Behind NovaCity
          </h3>
          <p className="text-slate-400 text-base">
            Engineers, designers, and innovators dedicated to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Elena Rostova', role: 'Chief Executive Officer', bg: 'from-indigo-500 to-purple-600' },
            { name: 'Marcus Vance', role: 'Chief Technology Officer', bg: 'from-cyan-500 to-blue-600' },
            { name: 'Aria Chen', role: 'Head of Design & UX', bg: 'from-teal-500 to-emerald-600' },
          ].map((member, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-indigo-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-indigo-500/20 text-center flex flex-col items-center cursor-pointer">
              <div className={`w-24 h-24 rounded-full bg-gradient-to-tr ${member.bg} flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-xl`}>
                {member.name.charAt(0)}
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
              <p className="text-xs font-medium text-indigo-400 mb-4">{member.role}</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Over a decade of expertise building scalable distributed systems and award-winning digital experiences.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
