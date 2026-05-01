import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function WorkCard({ work }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass-strong rounded-3xl overflow-hidden group h-full flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2">
          {work.category}
        </p>
        <h3 className="text-lg font-bold text-foreground mb-2">{work.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {work.description}
        </p>
        <Link to={`/case-study/${work.slug}`} className="w-full">
          <Button
            variant="outline"
            className="rounded-full h-10 text-xs font-medium gap-2 glass border-white/40 hover:bg-primary hover:text-primary-foreground transition-all w-full"
          >
            View Work
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}