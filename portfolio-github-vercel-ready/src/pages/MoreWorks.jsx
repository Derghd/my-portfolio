
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/shared/ScrollReveal';
import WorkCard from '../components/works/WorkCard';

const works = [
  { slug: 'mobile-app-ui', title: 'Mobile App UI Exploration', category: 'UI Design', description: 'A visual exploration of modern mobile interface patterns and interactions.', image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/0238778a7_generated_4f31b8c6.png' },
  { slug: 'web-interface-redesign', title: 'Web Interface Redesign', category: 'Web Design', description: 'A comprehensive redesign study focusing on usability and visual hierarchy.', image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/fc948b90b_generated_9cdd618e.png' },
  { slug: 'design-system-study', title: 'Design System Study', category: 'Systems Design', description: 'Building a scalable component library with consistent design tokens.', image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/00049110f_generated_387a7af8.png' },
  { slug: 'dashboard-ui-concept', title: 'Dashboard UI Concept', category: 'Product Design', description: 'A data-driven dashboard concept with focus on clarity and information density.', image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/c641ef0ed_generated_bc50e0f0.png' },
  { slug: 'user-research-study', title: 'User Research Study', category: 'UX Research', description: 'An end-to-end user research project with interviews, analysis, and insights.', image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/1e3cd71ea_generated_5eda4a52.png' },
  { slug: 'landing-page-design', title: 'Landing Page Design', category: 'Web Design', description: 'A high-conversion landing page design with strong visual storytelling.', image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/311c5ce77_generated_b39a4ce4.png' },
  { slug: 'prototype-experiment', title: 'Prototype Experiment', category: 'Prototyping', description: 'An interactive prototype exploring advanced micro-interactions and transitions.', image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/c1f9b168e_generated_2d53621a.png' },
  { slug: 'branding-visual-direction', title: 'Branding & Visual Direction', category: 'Visual Design', description: 'A branding study covering identity, typography, and visual language.', image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/bb08a7467_generated_d0b5d435.png' },
  { slug: 'frontend-practice', title: 'Front-End Practice', category: 'Development', description: 'Bridging design and code through front-end implementation projects.', image: 'https://media.db.com/images/public/69f4719cf7fe0120f3b8e695/82e8b6485_generated_2ac3223d.png' },
];

const categories = ['All', ...Array.from(new Set(works.map((w) => w.category)))];

export default function MoreWorks() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? works : works.filter((w) => w.category === active);

  return (
    <div className="pt-32 pb-20 px-[8vw]">
      {/* Background accent orbs */}
      <div className="fixed top-0 right-0 w-[60vw] h-[60vh] rounded-full bg-gradient-to-bl from-[#007AFF]/8 via-[#5856D6]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vh] rounded-full bg-gradient-to-tr from-[#E0F7FA]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10">
            A collection of projects exploring different design challenges, from UI explorations to research studies and front-end experiments.
          </p>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  active === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'glass border border-white/30 text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Works Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((work, index) => (
              <motion.div
                key={work.slug}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <WorkCard work={work} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground text-sm">No projects in this category yet.</div>
        )}
      </div>
    </div>
  );
}