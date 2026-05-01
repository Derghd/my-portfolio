import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../shared/BackToTop';

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[40vh] -right-[20vw] w-[80vw] h-[80vh] rounded-full bg-gradient-to-br from-[#007AFF]/8 via-[#5856D6]/6 to-[#EBEBFF]/12 blur-3xl animate-glow-pulse" />
        <div className="absolute -bottom-[30vh] -left-[20vw] w-[60vw] h-[60vh] rounded-full bg-gradient-to-tr from-[#E0F7FA]/20 via-[#34C5FF]/6 to-transparent blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40vh] left-[50vw] w-[40vw] h-[40vh] rounded-full bg-gradient-to-br from-[#5856D6]/4 via-[#AF52DE]/3 to-transparent blur-3xl animate-glow-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}