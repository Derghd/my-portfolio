import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '../shared/ScrollReveal';

export default function ContactPreview() {
  return (
    <section className="px-[8vw] py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF]/5 via-[#EBEBFF]/10 to-[#E0F7FA]/5 pointer-events-none" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Let's work together
              </h2>
              <p className="text-muted-foreground text-base max-w-md mx-auto mb-10">
                Have a project in mind or want to connect? I'd love to hear from you.
              </p>
              <Link to="/contact">
                <Button className="rounded-full px-8 h-12 text-sm font-medium gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}