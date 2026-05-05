import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';

export default function FeaturedProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link to={`/case-study/${project.id}`} className="block h-full">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="glass-strong rounded-3xl overflow-hidden group h-full flex flex-col cursor-pointer"
        >
          {/* Image area */}
          <div className="relative overflow-hidden aspect-[16/10]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              {project.type}
            </p>
            <h3 className="text-lg font-bold tracking-tight text-foreground leading-tight">
              {project.title}
            </h3>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-primary/10 bg-primary/5 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-6">
              <Button className="rounded-full px-5 h-9 text-xs font-medium gap-1.5 bg-primary hover:bg-primary/90 shadow-md shadow-primary/15 pointer-events-none">
                View Case Study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </Link>
    </ScrollReveal>
  );
}