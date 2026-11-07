import React, { useState } from 'react';
import { PageType } from '../types';
import { Sparkles, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  setCurrentPage: (page: PageType) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          Let's Build Something Exceptional Together
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Have a project in mind or want to explore a collaboration? Reach out and our team will respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-indigo-500/60 hover:bg-slate-900/90 hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Fill out the form or reach us directly through our offices or email channels.
            </p>
            <div className="flex flex-col gap-6 text-sm">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span>Abdullahwev6@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span>03019249721</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>742 Evergreen Terrace, Silicon Valley, CA</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-xs text-slate-400">
            Available Monday through Friday, 9:00 AM – 6:00 PM PST.
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 hover:border-cyan-500/60 transition-all shadow-xl">
          {submitted ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
              <p className="text-slate-300 max-w-md text-sm mb-8">
                Thank you for reaching out. Our engineering team will review your message and get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Collaboration"
                  className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project requirements..."
                  className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
