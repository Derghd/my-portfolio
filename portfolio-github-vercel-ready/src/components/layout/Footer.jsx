import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-40">
      {/* Gradient reflection */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#EBEBFF]/40 via-[#E0F7FA]/20 to-transparent pointer-events-none" />

      <div className="relative px-[8vw] py-20">
        <div className="glass-strong rounded-3xl p-10 md:p-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Aiman
              </h3>
              <p className="text-xs font-medium tracking-widest uppercase text-primary mt-2">
                UX/UI Designer
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Designing focused digital experiences with clarity, usability, and visual storytelling.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Connect
              </p>
              <div className="flex gap-3">
                <a
                  href="mailto:aiman@email.com"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Aiman. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Home', 'Featured Work', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}