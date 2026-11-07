import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/923019249721?text=Hello%20Abdullah,%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 transition-transform transform hover:scale-110 group focus:outline-none"
    >
      <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-700 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
};
