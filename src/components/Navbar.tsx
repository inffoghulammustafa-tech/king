import React, { useState } from 'react';
import { PageType, UserProfile } from '../types';
import { User, LogOut, Menu, X, Sparkles, Database } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  currentUser: UserProfile | null;
  onOpenLogin: () => void;
  onOpenDashboard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  currentUser,
  onOpenLogin,
  onOpenDashboard,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
    { id: 'logs', label: 'Backend Admin' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
            Logo
          </span>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`whitespace-nowrap shrink-0 transition-colors relative py-1 ${
                currentPage === link.id
                  ? 'text-white font-semibold'
                  : 'hover:text-white text-slate-400'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action / User Login */}
        <div className="flex items-center gap-3 shrink-0">
          {currentUser ? (
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg border border-slate-700/60 shadow-md transition-all whitespace-nowrap shrink-0"
            >
              <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                {currentUser.name.charAt(0)}
              </div>
              <span className="hidden sm:inline">{currentUser.name}</span>
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="px-5 py-2 text-xs font-semibold text-white bg-slate-900/90 hover:bg-slate-800 rounded-lg border border-slate-700/80 shadow-lg shadow-black/20 hover:border-indigo-500/50 transition-all whitespace-nowrap shrink-0"
            >
              Login
            </button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-b border-white/10 px-6 py-5 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2 text-base font-medium transition-colors ${
                currentPage === link.id ? 'text-indigo-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          {!currentUser && (
            <button
              onClick={() => {
                onOpenLogin();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg text-center shadow-lg transition-colors"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
};
