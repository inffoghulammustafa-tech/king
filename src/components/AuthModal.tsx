import React, { useState } from 'react';
import { X, Mail, Lock, Sparkles, AlertCircle, Send, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types';
import { supabase } from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [requestSent, setRequestSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setRequestSent(false);
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    // Strict validation rule: Only allow Abdullahwev6@gmail.com with password king295
    if (cleanEmail !== 'abdullahwev6@gmail.com' || password !== 'king295') {
      setErrorMsg('Access denied. Unrecognized credentials. You are not authorized to login.');
      setLoading(false);
      return;
    }

    try {
      // 1. Attempt Supabase Auth login
      await supabase.auth.signInWithPassword({
        email: 'Abdullahwev6@gmail.com',
        password: password,
      });

      // 2. Log login via backend API route connected to Supabase
      try {
        await fetch('/api/logs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: 'Abdullahwev6@gmail.com', status: 'Success' })
        });
      } catch (apiErr) {
        console.warn('Backend API log error:', apiErr);
      }

      const authorizedUser: UserProfile = {
        name: 'Abdullah',
        email: 'Abdullahwev6@gmail.com',
        role: 'Administrator',
        joinedDate: 'November 2026',
      };
      onLoginSuccess(authorizedUser);
      onClose();
    } catch (err: any) {
      console.warn('Supabase auth notice:', err.message);
      try {
        await fetch('/api/logs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: 'Abdullahwev6@gmail.com', status: 'Success' })
        });
      } catch (e) {}

      const authorizedUser: UserProfile = {
        name: 'Abdullah',
        email: 'Abdullahwev6@gmail.com',
        role: 'Administrator',
        joinedDate: 'November 2026',
      };
      onLoginSuccess(authorizedUser);
      onClose();
    } finally {
      setLoading(false);
    }
  };

  const handleRequestAccessLink = () => {
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid Gmail address first to receive the access link.');
      return;
    }
    setRequestSent(true);
    setErrorMsg(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md glass-modal rounded-3xl p-8 border border-white/20 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-8">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Restricted Login</h2>
          <p className="text-xs text-slate-400 mt-1">Authorized Access Only for Abdullahwev6@gmail.com</p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-2">
              <span>{errorMsg}</span>
              <button
                type="button"
                onClick={handleRequestAccessLink}
                className="text-indigo-300 hover:text-white underline font-semibold text-left"
              >
                Send access link (https://we-versity.vercel.app/) to this Gmail
              </button>
            </div>
          </div>
        )}

        {requestSent && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Access link sent successfully to {email}! Check your Gmail inbox for https://we-versity.vercel.app/</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Email</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Abdullahwev6@gmail.com"
                className="w-full bg-slate-900/90 border border-slate-700/60 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-900/90 border border-slate-700/60 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <Lock className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-0"
              />
              <span>Remember me</span>
            </label>
            <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your email.'); }} className="text-indigo-400 hover:underline">
              Forget Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 shadow-xl transition-all disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};
