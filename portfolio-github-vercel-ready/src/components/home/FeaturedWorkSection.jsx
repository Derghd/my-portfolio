
import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import FeaturedProjectCard from './FeaturedProjectCard';

const featuredProjects = [
  {
    id: 'unlocking-memories',
    title: 'Unlocking Memories, Guiding Journey',
    type: 'Dementia Aid Product Showcase',
    description: 'A UX/UI project focused on showcasing dementia aid products in a clear, supportive, and accessible way. The project explores how design can help caregivers and users understand assistive products with confidence and empathy.',
    tags: ['UX Research', 'Accessibility', 'Product Showcase', 'Caregiving', 'UI Design'],
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/686d22073_generated_1627223a.png',
  },
  {
    id: 'skillup',
    title: 'SkillUp',
    type: 'Skill Library & Community Hub',
    description: 'A digital platform concept that helps users discover skills, learn through structured resources, join a community, and participate in upskilling challenges. The project focuses on motivation, progression, and community-driven learning.',
    tags: ['Product Design', 'Community', 'Gamification', 'Learning Experience', 'UI Systems'],
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/67616339a_generated_0076cc78.png',
  },
  {
    id: 'buddyboost',
    title: 'BuddyBoost',
    type: 'Community Connection Platform',
    description: 'A platform designed to help introverts in a new country connect with people, discover local communities, and feel included. The project explores emotional safety, onboarding, inclusivity, and social confidence.',
    tags: ['Inclusive Design', 'Social UX', 'Onboarding', 'Community', 'Emotional Design'],
    image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/c556ee27e_generated_d49615d6.png',
  },
];

export default function FeaturedWorkSection() {
  return (
    <section id="featured-work" className="px-[8vw] py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionLabel label="Featured Work" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
            Selected case studies
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}