import React from 'react';
import { Search, Target, Lightbulb, Palette, Sparkles } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';
import SectionLabel from '../shared/SectionLabel';
import GlassCard from '../shared/GlassCard';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Understand users, goals, and context',
    color: 'from-[#007AFF]/20 to-[#007AFF]/5',
  },
  {
    icon: Target,
    title: 'Define',
    description: 'Identify pain points and opportunity areas',
    color: 'from-[#5856D6]/20 to-[#5856D6]/5',
  },
  {
    icon: Lightbulb,
    title: 'Ideate',
    description: 'Explore flows, concepts, and interaction patterns',
    color: 'from-[#E0F7FA]/60 to-[#007AFF]/10',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Create wireframes, interfaces, and prototypes',
    color: 'from-[#EBEBFF]/60 to-[#5856D6]/10',
  },
  {
    icon: Sparkles,
    title: 'Refine',
    description: 'Test, improve, and polish the experience',
    color: 'from-[#007AFF]/15 to-[#E0F7FA]/30',
  },
];

export default function DesignProcessSection() {
  return (
    <section className="px-[8vw] py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionLabel label="Design Process" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
            How I approach design
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.08}>
              <GlassCard className="p-6 h-full relative overflow-hidden">
                {/* Step gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-50 pointer-events-none`} />

                <div className="relative">
                  {/* Step number */}
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary/40 mb-4 block">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}