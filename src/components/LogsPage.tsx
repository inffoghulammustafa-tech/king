import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Sparkles, Database, RefreshCw, CheckCircle, Shield, Clock, Lock, KeyRound, Server, Cpu, HardDrive, Check } from 'lucide-react';

interface LogsPageProps {
  setCurrentPage: (page: PageType) => void;
}

interface LoginLog {
  id: string;
  email: string;
  login_time: string;
  status: string;
}

export const LogsPage: React.FC<LogsPageProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('admin_unlocked') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [logs, setLogs] = useState<LoginLog[]>([]);
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'error'>('checking');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'King295@') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_unlocked', 'true');
      setErrorMsg(null);
      checkBackendAndFetchLogs();
    } else {
      setErrorMsg('Incorrect passcode. Access denied.');
    }
  };

  const checkBackendAndFetchLogs = async () => {
    setLoading(true);
    setServerStatus('checking');
    try {
      const res = await fetch('/api/logs');
      const data = await res.json();
      if (data.logs) {
        setLogs(data.logs);
        setServerStatus('online');
      } else {
        setServerStatus('error');
      }
    } catch (err: any) {
      console.warn('Backend fetch error:', err);
      setServerStatus('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      checkBackendAndFetchLogs();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full glass-modal p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6 text-indigo-400 shadow-lg">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Backend Admin Portal</h2>
          <p className="text-xs text-slate-400 mb-6">
            Please enter the secure admin passcode to access the website backend and Supabase logs.
          </p>

          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Passcode"
                className="w-full bg-slate-900/90 border border-slate-700/60 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <KeyRound className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg transition-all"
            >
              Access Backend Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Secure Backend & Supabase Dashboard</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Backend Admin Panel
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsAuthenticated(false);
              sessionStorage.removeItem('admin_unlocked');
            }}
            className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors"
          >
            Lock Panel
          </button>
          <button
            onClick={checkBackendAndFetchLogs}
            disabled={loading}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-600/30 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Backend</span>
          </button>
        </div>
      </div>

      {/* Backend & Supabase Health Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Server className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Express Backend Server</div>
            <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Running on Port 3000</span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Supabase Database</div>
            <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Connected & Synced</span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400">Total Logged Sessions</div>
            <div className="text-sm font-bold text-white mt-0.5 font-mono tabular-nums">
              {logs.length} Recorded
            </div>
          </div>
        </div>
      </div>

      {/* Live Backend Logs Table / Cards */}
      <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white">Live Supabase Login History (`login_logs`)</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">Fetched via `/api/logs`</span>
        </div>

        {logs.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <Shield className="w-12 h-12 text-slate-600 mb-4" />
            <p className="text-slate-400 text-sm">
              {loading ? 'Fetching login records...' : 'No login records found yet.'}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {logs.map((log) => (
              <div
                key={log.id}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <div className="text-base font-semibold text-white">
                    {log.email}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{new Date(log.login_time).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{log.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
