import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionLabel from '../components/shared/SectionLabel';
import GlassCard from '../components/shared/GlassCard';

const values = [
  { title: 'Clarity', desc: 'Designing interfaces that communicate without confusion.' },
  { title: 'Empathy', desc: 'Understanding users deeply before designing solutions.' },
  { title: 'Purpose', desc: 'Every design decision serves a meaningful goal.' },
  { title: 'Growth', desc: 'Continuously learning and improving as a designer.' },
];

export default function About() {
  return (
    <div className="pt-32 pb-20 px-[8vw]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

        </ScrollReveal>

        {/* Identity */}
        <ScrollReveal>
          <div className="glass-strong rounded-3xl p-10 md:p-16 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#007AFF]/8 via-[#EBEBFF]/12 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-8">
                Designing with clarity, empathy, and purpose.
              </h2>
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a UX/UI designer from Nanyang Polytechnic with a growing foundation in interaction design, visual storytelling, and digital product thinking. My work focuses on creating experiences that are clear, usable, inclusive, and visually refined.
                </p>
                <p>
                  As a design student at Nanyang Polytechnic, I have built a strong foundation across UX/UI design, interaction design, visual communication, and digital product thinking. My journey has been shaped by curiosity, discipline, and a willingness to keep improving through different types of projects.
                </p>
                <p>
                  Beyond design, I have also explored web coding and technical skills, including Python, CSS, Java, and HTML. This helps me understand how digital products are not only designed, but also built. By combining design thinking with technical awareness, I aim to create work that is both visually thoughtful and practically grounded.
                </p>
                <p>
                  I am still growing, but I approach every project with focus, responsibility, and a commitment to creating meaningful user experiences.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Values */}
        <ScrollReveal>
          <SectionLabel label="Core Values" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
            What drives my design
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08}>
              <GlassCard className="p-6 h-full">
                <span className="text-[10px] font-bold tracking-widest uppercase text-primary/40 block mb-3">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="glass-strong rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF]/5 via-[#EBEBFF]/8 to-[#E0F7FA]/5 pointer-events-none" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-8">Let's connect and create something meaningful.</p>
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
    </div>
  );
}