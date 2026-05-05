
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_IMAGE = '/images/IMG_20260430_181912.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-[8vw] pt-32 pb-20">
      {/* Chromatic Orbs */}
      <div className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#007AFF]/14 via-[#5856D6]/10 to-[#E0F7FA]/12 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#E0F7FA]/25 via-[#34C5FF]/8 to-transparent blur-3xl animate-float pointer-events-none" />
      <div className="absolute top-[50%] left-[30%] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#AF52DE]/8 via-[#5856D6]/5 to-transparent blur-2xl animate-glow-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1.5 glass rounded-full mb-8"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              UX/UI Designer
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="text-gradient">Aiman</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#007AFF] via-[#5856D6] to-[#AF52DE] origin-left"
              />
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-foreground/80 font-medium leading-relaxed max-w-lg">
            I design focused digital experiences that balance clarity, usability, and visual storytelling.
          </p>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
            A UX/UI designer from Nanyang Polytechnic, exploring the intersection of human-centred design, digital products, and meaningful interaction.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-6 h-12 text-sm font-medium gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              View Featured Work
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Link to="/resume">
              <Button variant="outline" className="rounded-full px-6 h-12 text-sm font-medium gap-2 glass border-white/40 hover:bg-white/80">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full px-6 h-12 text-sm font-medium gap-2 glass border-white/40 hover:bg-white/80">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Main glass panel */}
            <div className="glass-strong rounded-3xl p-3 shadow-2xl">
              <img 
                src="\images\IMG_20260430_181912.jpg"
                alt="Design work"
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Design Portfolio</p>
                  <p className="text-[10px] text-muted-foreground">UX/UI • 2026</p>
                </div>
              </div>
            </motion.div>

            {/* Floating stats card */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-6 glass rounded-2xl p-4 shadow-lg"
            >
              <p className="text-[10px] font-medium tracking-widest uppercase text-primary">Projects</p>
              <p className="text-2xl font-bold text-foreground mt-1">12+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
