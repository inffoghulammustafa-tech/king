/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType, UserProfile } from './types';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { LogsPage } from './components/LogsPage';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { DashboardModal } from './components/DashboardModal';
import { FloatingActions } from './components/FloatingActions';
import { supabase } from './lib/supabase';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('novacity_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [dashboardModalOpen, setDashboardModalOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('novacity_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('novacity_user');
    }
  }, [currentUser]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setCurrentUser({
          name: session.user.user_metadata?.full_name || 'Abdullah',
          email: session.user.email || 'Abdullahwev6@gmail.com',
          role: 'Administrator',
          joinedDate: 'November 2026',
        });
      }
    });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} onOpenLogin={() => setAuthModalOpen(true)} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'logs':
        return <LogsPage setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} onOpenLogin={() => setAuthModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentUser={currentUser}
        onOpenLogin={() => setAuthModalOpen(true)}
        onOpenDashboard={() => setDashboardModalOpen(true)}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      <FloatingActions />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
        }}
      />

      <DashboardModal
        isOpen={dashboardModalOpen}
        onClose={() => setDashboardModalOpen(false)}
        user={currentUser}
        onLogout={() => {
          setCurrentUser(null);
          supabase.auth.signOut();
        }}
      />
    </div>
  );
}
