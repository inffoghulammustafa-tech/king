import React, { useState } from 'react';
import { PageType } from '../types';
import { Sparkles, Check, ArrowRight, Layers, Cpu, Cloud, Shield, Zap } from 'lucide-react';

interface ServicesProps {
  setCurrentPage: (page: PageType) => void;
}

export const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const services = [
    {
      id: 'ui-ux',
      title: 'UI/UX Experience Design',
      price: '$3,500+',
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      description: 'Comprehensive product design, user research, wireframing, high-fidelity prototypes, and design systems.',
      features: ['User Journey Mapping', 'Figma Design System', 'Interactive Prototypes', 'Accessibility Audit (WCAG AA)']
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Engineering',
      price: '$6,000+',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      description: 'Robust web application development using React, TypeScript, Node.js, and high-performance APIs.',
      features: ['React 19 & Vite SPA', 'Node.js / Express Backends', 'Real-time WebSockets', 'Automated Testing & CI/CD']
    },
    {
      id: 'cloud',
      title: 'Cloud Architecture & DevOps',
      price: '$4,500+',
      icon: <Cloud className="w-6 h-6 text-teal-400" />,
      description: 'Scalable cloud infrastructure setup, containerization, database provisioning, and security hardening.',
      features: ['GCP / AWS Deployment', 'Docker & Kubernetes', 'PostgreSQL / Firestore DB', '99.9% Uptime Monitoring']
    },
    {
      id: 'ai-systems',
      title: 'AI & Generative Systems',
      price: '$5,000+',
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      description: 'Integrating cutting-edge Gemini AI APIs, intelligent agents, custom prompt pipelines, and semantic search.',
      features: ['Google GenAI SDK Integration', 'Custom Agent Workflows', 'Vector Embeddings & RAG', 'Optimized Latency Budgets']
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Professional Capabilities</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          Comprehensive Services Tailored for Scale
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          From concept and design to production deployment and AI integration, we deliver excellence at every layer.
        </p>
      </div>

      {/* Services Grid with hover effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-indigo-500/60 hover:bg-slate-900/90 hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-indigo-500/20 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="text-lg font-bold text-white font-mono">{service.price}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white font-semibold text-sm transition-colors border border-slate-700/60 flex items-center justify-center gap-2"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
