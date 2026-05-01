import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import SectionLabel from '../shared/SectionLabel';

export default function IdentitySection() {
  return (
    <section className="px-[8vw] py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Accent gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#007AFF]/8 via-[#EBEBFF]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative">
              <SectionLabel label="Who I Am" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Designing with clarity, empathy, and purpose.
              </h2>
              <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
                I am a UX/UI designer from Nanyang Polytechnic with a growing foundation in interaction design, visual storytelling, and digital product thinking. My work focuses on creating experiences that are clear, usable, inclusive, and visually refined. Through school projects, self-learning, and technical exploration, I continue to grow as a designer who can think across research, interface design, and front-end implementation.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}