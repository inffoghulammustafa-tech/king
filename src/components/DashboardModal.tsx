import React, { useState, useEffect } from 'react';
import { X, User, LogOut, Shield, Calendar, Mail, History, Database, RefreshCw } from 'lucide-react';
import { UserProfile } from '../types';
import { supabase } from '../lib/supabase';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile | null;
  onLogout: () => void;
}

interface LoginLog {
  id: string;
  email: string;
  login_time: string;
  status: string;
}

export const DashboardModal: React.FC<DashboardModalProps> = ({ isOpen, onClose, user, onLogout }) => {
  const [logs, setLogs] = useState<LoginLog[]>([]);
  const [loadingLogs, setLoadingLogs] = useState(false);

  const fetchLogs = async () => {
    setLoadingLogs(true);
    try {
      const { data, error } = await supabase
        .from('login_logs')
        .select('*')
        .order('login_time', { ascending: false })
        .limit(10);

      if (error) {
        console.warn('Error fetching logs:', error.message);
      } else if (data) {
        setLogs(data);
      }
    } catch (err: any) {
      console.warn('Logs fetch exception:', err);
    } finally {
      setLoadingLogs(false);
    }
  };

  useEffect(() => {
    if (isOpen && user) {
      fetchLogs();
    }
  }, [isOpen, user]);

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-modal rounded-3xl p-8 border border-white/20 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{user.name}</h2>
            <p className="text-xs text-indigo-400">{user.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3">
            <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
            <div className="overflow-hidden">
              <div className="text-xs text-slate-400">Email</div>
              <div className="text-xs font-semibold text-white truncate">{user.email}</div>
            </div>
          </div>
          <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Member Since</div>
              <div className="text-xs font-semibold text-white">{user.joinedDate}</div>
            </div>
          </div>
          <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Status</div>
              <div className="text-xs font-semibold text-emerald-400">Verified Supabase</div>
            </div>
          </div>
        </div>

        {/* Supabase Login History Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Supabase Login History Logs</h3>
            </div>
            <button
              onClick={fetchLogs}
              disabled={loadingLogs}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingLogs ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </div>

          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            {logs.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400">
                {loadingLogs ? 'Loading logs from Supabase...' : 'No login records found yet.'}
              </div>
            ) : (
              <div className="divide-y divide-white/10 max-h-60 overflow-y-auto">
                {logs.map((log) => (
                  <div key={log.id} className="p-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <span className="text-xs font-mono text-indigo-300 truncate">ID: {log.id}</span>
                      <span className="text-xs text-slate-300">{log.email}</span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {new Date(log.login_time).toLocaleString()}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                      {log.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            onLogout();
            onClose();
          }}
          className="w-full py-3.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-400 font-semibold text-sm border border-red-500/30 flex items-center justify-center gap-2 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};
