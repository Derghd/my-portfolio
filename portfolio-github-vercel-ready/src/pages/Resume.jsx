import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, GraduationCap, Briefcase, Award, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionLabel from '../components/shared/SectionLabel';
import GlassCard from '../components/shared/GlassCard';
import SkillTile from '../components/resume/SkillTile';

const skills = [
  'UX/UI Design', 'Wireframing', 'Prototyping', 'User Research',
  'Visual Design', 'Interaction Design', 'Design Systems',
  'HTML', 'CSS', 'Python', 'Java',
];

const tools = [
  'Figma', 'Adobe Illustrator', 'Adobe Photoshop',
  'HTML/CSS', 'Python', 'Java', 'Canva', 'Notion',
];

const experience = [
  {
    title: 'UX/UI Design Student Projects',
    description: 'Completed multiple end-to-end design projects including research, wireframing, prototyping, and visual design.',
  },
  {
    title: 'Web & Interface Design Practice',
    description: 'Practiced responsive web design and interface design across various platforms and devices.',
  },
  {
    title: 'Product Design Case Studies',
    description: 'Developed comprehensive case studies showcasing design process, decisions, and outcomes.',
  },
];

const certifications = [
  'Certification Placeholder 1',
  'Certification Placeholder 2',
  'Certification Placeholder 3',
];

export default function Resume() {
  return (
    <div className="pt-32 pb-20 px-[8vw]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex justify-end mb-16">
            <Button className="rounded-full px-6 h-12 text-sm font-medium gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 w-fit">
              <Download className="w-4 h-4" />
              Download Resume PDF
            </Button>
          </div>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal>
          <SectionLabel label="Skills" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Core Skills</h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {skills.map((skill, i) => (
              <SkillTile key={skill} name={skill} index={i} />
            ))}
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <SectionLabel label="Education" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Education</h2>
          <GlassCard className="p-8 mb-16" hover={false}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Nanyang Polytechnic</h3>
                <p className="text-sm text-muted-foreground mt-1">Diploma / Design-related programme</p>
                <p className="text-xs text-primary/60 mt-2 font-medium">Currently pursuing</p>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal>
          <SectionLabel label="Experience" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Experience</h2>
          <div className="space-y-4 mb-16">
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.title} delay={i * 0.08}>
                <GlassCard className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Tools */}
        <ScrollReveal>
          <SectionLabel label="Tools" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
            {tools.map((tool, i) => (
              <ScrollReveal key={tool} delay={i * 0.04}>
                <GlassCard className="p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{tool}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal>
          <SectionLabel label="Certifications" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Certifications</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 0.08}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{cert}</p>
                      <p className="text-xs text-muted-foreground mt-1">Placeholder — add details</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}