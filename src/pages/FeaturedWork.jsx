
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionLabel from '../components/shared/SectionLabel';
import GlassCard from '../components/shared/GlassCard';

const projects = [
  {
    id: 'unlocking-memories',
    title: 'Unlocking Memories, Guiding Journey',
    type: 'Dementia Aid Product Showcase',
    description: 'A UX/UI project focused on showcasing dementia aid products in a clear, supportive, and accessible way. The project explores how design can help caregivers and users understand assistive products with confidence and empathy.',
    tags: ['UX Research', 'Accessibility', 'Product Showcase', 'Caregiving', 'UI Design'],
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/686d22073_generated_1627223a.png',
    details: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Duration', value: 'Academic Project' },
      { label: 'Tools', value: 'Figma, Adobe Illustrator' },
      { label: 'Focus', value: 'Accessibility & Caregiving' },
    ],
  },
  {
    id: 'skillup',
    title: 'SkillUp',
    type: 'Skill Library & Community Hub',
    description: 'A digital platform concept that helps users discover skills, learn through structured resources, join a community, and participate in upskilling challenges. The project focuses on motivation, progression, and community-driven learning.',
    tags: ['Product Design', 'Community', 'Gamification', 'Learning Experience', 'UI Systems'],
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/67616339a_generated_0076cc78.png',
    details: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Duration', value: 'Academic Project' },
      { label: 'Tools', value: 'Figma, Prototyping' },
      { label: 'Focus', value: 'Gamification & Community' },
    ],
  },
  {
    id: 'buddyboost',
    title: 'BuddyBoost',
    type: 'Community Connection Platform',
    description: 'A platform designed to help introverts in a new country connect with people, discover local communities, and feel included. The project explores emotional safety, onboarding, inclusivity, and social confidence.',
    tags: ['Inclusive Design', 'Social UX', 'Onboarding', 'Community', 'Emotional Design'],
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/c556ee27e_generated_d49615d6.png',
    details: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Duration', value: 'Academic Project' },
      { label: 'Tools', value: 'Figma, User Research' },
      { label: 'Focus', value: 'Inclusivity & Social UX' },
    ],
  },
];

export default function FeaturedWork() {
  return (
    <div className="pt-32 pb-20 px-[8vw]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <SectionLabel label="Featured Work" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-20">
            A deep look into my most significant UX/UI design projects, showcasing my process, thinking, and design decisions.
          </p>
        </ScrollReveal>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div id={project.id} className="scroll-mt-32">
                <GlassCard className="overflow-hidden" hover={false}>
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                      {project.type}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-6">
                      {project.title}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
                      {project.description}
                    </p>

                    {/* Project details grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {project.details.map((detail) => (
                        <div key={detail.label} className="glass rounded-2xl p-4">
                          <p className="text-[10px] font-bold tracking-widest uppercase text-primary/50 mb-1">
                            {detail.label}
                          </p>
                          <p className="text-sm font-semibold text-foreground">{detail.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-primary/10 bg-primary/5 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}