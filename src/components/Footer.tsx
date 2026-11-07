import React from 'react';
import { PageType } from '../types';
import { Sparkles, Github, Twitter, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
            <span>Logo</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Building the next generation of web applications, cloud infrastructure, and immersive visual experiences.
          </p>
          <div className="flex items-center gap-4 text-slate-400 pt-2">
            <a href="#github" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#twitter" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#linkedin" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#email" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer" onClick={() => setCurrentPage('services')}>
              UI/UX Experience Design
            </li>
            <li className="hover:text-white transition-colors cursor-pointer" onClick={() => setCurrentPage('services')}>
              Full-Stack Engineering
            </li>
            <li className="hover:text-white transition-colors cursor-pointer" onClick={() => setCurrentPage('services')}>
              Cloud Architecture
            </li>
            <li className="hover:text-white transition-colors cursor-pointer" onClick={() => setCurrentPage('services')}>
              AI & Generative Systems
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Newsletter</h4>
          <p className="text-sm text-slate-400 mb-4">
            Subscribe to receive updates on our latest releases and tech insights.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-lg transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>&copy; {new Date().getFullYear()} NovaCity Studio. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-slate-400">Terms of Service</a>
          <a href="#security" className="hover:text-slate-400">Security</a>
        </div>
      </div>
    </footer>
  );
};
