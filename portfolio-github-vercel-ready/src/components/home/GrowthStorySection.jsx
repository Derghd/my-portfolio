import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import SectionLabel from '../shared/SectionLabel';

export default function GrowthStorySection() {
  return (
    <section className="px-[8vw] py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="glass-strong rounded-3xl p-10 md:p-16 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#E0F7FA]/20 via-[#EBEBFF]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#007AFF]/6 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative">
              <SectionLabel label="Growth" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                My growth as a designer
              </h2>

              <div className="mt-8 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
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
      </div>
    </section>
  );
}