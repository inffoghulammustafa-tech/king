import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageType } from '../types';

interface HeroProps {
  setCurrentPage: (page: PageType) => void;
  onOpenLogin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentPage, onOpenLogin }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image updated to newly generated cyberpunk cityscape */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/cyberpunk_city_bg_1794045904348.jpg"
          alt="Cyberpunk Cityscape Background"
          className="w-full h-full object-cover object-center filter brightness-90 scale-105 transform animate-in fade-in duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center flex flex-col items-center">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-6 shadow-lg shadow-indigo-500/10">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Next-Generation Digital Ecosystem & Studio</span>
        </div>

        {/* Hero headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl text-balance leading-[1.1] mb-6">
          Where Imagination Meets the <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Digital Horizon</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl text-balance mb-10 leading-relaxed font-normal">
          Crafting immersive web applications, high-performance cloud architectures, and stunning visual experiences inspired by future horizons.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => setCurrentPage('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenLogin}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel hover:bg-white/10 text-white font-semibold border border-white/20 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Get Started</span>
          </button>
        </div>

        {/* Stats strip with hover effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full max-w-4xl">
          <div className="glass-panel p-6 rounded-2xl text-center border border-white/10 shadow-xl hover:border-indigo-500/60 hover:bg-slate-900/90 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-indigo-500/20">
            <div className="text-3xl font-extrabold text-white font-mono tabular-nums mb-1">99.9%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Uptime SLA</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center border border-white/10 shadow-xl hover:border-cyan-500/60 hover:bg-slate-900/90 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-cyan-500/20">
            <div className="text-3xl font-extrabold text-cyan-400 font-mono tabular-nums mb-1">250+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Projects Shipped</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center border border-white/10 shadow-xl hover:border-indigo-400/60 hover:bg-slate-900/90 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-indigo-400/20">
            <div className="text-3xl font-extrabold text-indigo-400 font-mono tabular-nums mb-1">15+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Global Awards</div>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center border border-white/10 shadow-xl hover:border-teal-400/60 hover:bg-slate-900/90 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-teal-400/20">
            <div className="text-3xl font-extrabold text-teal-300 font-mono tabular-nums mb-1">24/7</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Dedicated Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};
