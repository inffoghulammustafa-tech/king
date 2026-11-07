import React, { useState } from 'react';
import { MessageCircle, Server, CheckCircle2 } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  const testBackend = async () => {
    setTesting(true);
    setStatusMsg(null);
    try {
      const res = await fetch('/api/logs');
      const data = await res.json();
      if (data.logs) {
        setStatusMsg(`Backend Online! (${data.logs.length} logs synced)`);
      } else {
        setStatusMsg('Backend connected successfully.');
      }
    } catch (err) {
      setStatusMsg('Backend error connecting.');
    } finally {
      setTesting(false);
      setTimeout(() => setStatusMsg(null), 4000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {statusMsg && (
        <div className="glass-panel px-4 py-2.5 rounded-xl border border-indigo-500/40 text-xs font-semibold text-white shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{statusMsg}</span>
        </div>
      )}

      <div className="flex items-center gap-3">
        {/* Backend Server Test Button */}
        <button
          onClick={testBackend}
          disabled={testing}
          aria-label="Test Backend Server & Supabase"
          className="w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-2xl shadow-indigo-600/50 transition-transform transform hover:scale-110 group focus:outline-none relative"
        >
          <Server className={`w-6 h-6 ${testing ? 'animate-bounce' : ''}`} />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-700 pointer-events-none">
            Test Backend & Supabase
          </span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923019249721?text=Hello%20Abdullah,%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 transition-transform transform hover:scale-110 group focus:outline-none relative"
        >
          <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-slate-700 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};
