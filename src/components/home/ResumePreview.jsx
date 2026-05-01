import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '../shared/ScrollReveal';
import SectionLabel from '../shared/SectionLabel';
import GlassCard from '../shared/GlassCard';

const previewSections = ['Skills', 'Education', 'Experience', 'Tools', 'Certifications'];

export default function ResumePreview() {
  return (
    <section className="px-[8vw] py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionLabel label="Resume" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
            Resume
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ScrollReveal>
            <GlassCard className="p-10 text-center" hover={false}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Download My Resume</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Resume PDF placeholder — replace with Aiman's final resume file.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/resume">
                  <Button className="rounded-full px-6 h-11 text-sm font-medium gap-2 bg-primary hover:bg-primary/90 shadow-md shadow-primary/15 w-full">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </Link>
                <Link to="/resume">
                  <Button variant="outline" className="rounded-full px-6 h-11 text-sm font-medium glass border-white/40 w-full">
                    View Full Resume
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {previewSections.map((section, i) => (
                <GlassCard key={section} className="p-4 text-center">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary/50 block mb-1">
                    0{i + 1}
                  </span>
                  <p className="text-sm font-semibold text-foreground">{section}</p>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}