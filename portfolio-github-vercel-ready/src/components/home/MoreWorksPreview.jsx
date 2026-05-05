import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '../shared/ScrollReveal';
import SectionLabel from '../shared/SectionLabel';

export default function MoreWorksPreview() {
  return (
    <section className="px-[8vw] py-20">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <SectionLabel label="More Projects" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Explore more of my work
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto mb-10">
            Beyond the featured case studies, I have worked on a range of projects exploring different design challenges and approaches.
          </p>
          <Link to="/more-works">
            <Button className="rounded-full px-8 h-12 text-sm font-medium gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              View All Works
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}