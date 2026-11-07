import React from 'react';
import { PageType } from '../types';
import { Hero } from './Hero';
import { Layers, Cpu, Cloud, Sparkles, CheckCircle2, ArrowRight, Star } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: PageType) => void;
  onOpenLogin: () => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, onOpenLogin }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero setCurrentPage={setCurrentPage} onOpenLogin={onOpenLogin} />

      {/* Bento Grid Features Section with smooth hover effects */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Core Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Engineered for Scalability & Elegance
          </h3>
          <p className="text-slate-400 text-base">
            We deliver uncompromising software architecture, polished user interfaces, and robust cloud pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-indigo-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between shadow-xl hover:shadow-indigo-500/20 cursor-pointer">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">01. UI/UX Experience Design</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Meticulously crafted interfaces with uncompromising typographic hierarchy, smooth animations, and intuitive workflows.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between shadow-xl hover:shadow-cyan-500/20 cursor-pointer">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">02. Full-Stack Engineering</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                High-performance web applications built on React, TypeScript, and Node.js with lightning-fast response times.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-teal-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between shadow-xl hover:shadow-teal-500/20 cursor-pointer">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">03. Cloud Architecture</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Resilient, auto-scaling cloud deployments with enterprise security, automated CI/CD pipelines, and zero downtime.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with smooth hover effects */}
      <section className="py-24 px-6 lg:px-12 bg-slate-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Testimonials</h2>
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
              Trusted by Industry Leaders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-indigo-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-indigo-500/20 flex flex-col justify-between cursor-pointer">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm italic mb-6">
                  "NovaCity transformed our entire web platform. Their engineering rigor and design aesthetic are world-class."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  JD
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Jonathan Davis</div>
                  <div className="text-xs text-slate-400">CTO, Apex Dynamics</div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-cyan-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 flex flex-col justify-between cursor-pointer">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm italic mb-6">
                  "The speed of delivery and architectural resilience exceeded all our expectations. Truly exceptional team."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  SM
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Sarah Miller</div>
                  <div className="text-xs text-slate-400">VP of Product, NeuraCorp</div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-teal-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-teal-500/20 flex flex-col justify-between cursor-pointer">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm italic mb-6">
                  "Their attention to detail and user experience design helped us increase conversion rates by over 140%."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  AK
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Alex Kensington</div>
                  <div className="text-xs text-slate-400">Founder, CyberScale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto w-full text-center">
        <div className="glass-modal p-12 lg:p-16 rounded-3xl border border-indigo-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-cyan-500/10 pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 relative z-10">
            Ready to Build the Future?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-base relative z-10">
            Schedule a discovery session with our engineers and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold shadow-xl shadow-indigo-600/30 transition-all"
            >
              Contact Our Team
            </button>
            <button
              onClick={() => setCurrentPage('services')}
              className="px-8 py-4 rounded-xl glass-panel hover:bg-white/10 text-white font-semibold border border-white/20 transition-all"
            >
              View Rate Card
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
