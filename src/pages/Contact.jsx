import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Mail, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ScrollReveal from '../components/shared/ScrollReveal';
import SectionLabel from '../components/shared/SectionLabel';
import GlassCard from '../components/shared/GlassCard';
import { toast } from 'sonner';

const socials = [
  { icon: Mail, label: 'Email', value: 'aiman@email.com', href: 'mailto:aiman@email.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/aiman', href: '#' },
  { icon: Globe, label: 'Portfolio', value: 'aiman.design', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success('Message sent! Thank you for reaching out.');
    setForm({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  };

  return (
    <div className="pt-32 pb-20 px-[8vw]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16">
            Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <GlassCard className="p-8 md:p-10" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="h-12 rounded-xl bg-white/50 border-white/30 focus:border-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="h-12 rounded-xl bg-white/50 border-white/30 focus:border-primary/30"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="h-12 rounded-xl bg-white/50 border-white/30 focus:border-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="min-h-[160px] rounded-xl bg-white/50 border-white/30 focus:border-primary/30 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="rounded-full px-8 h-12 text-sm font-medium gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 w-full sm:w-auto"
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  <GlassCard className="p-6 flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <social.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-primary/50">{social.label}</p>
                      <p className="text-sm font-semibold text-foreground mt-0.5">{social.value}</p>
                    </div>
                  </GlassCard>
                </a>
              ))}

              <div className="glass-strong rounded-3xl p-6 mt-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 via-[#EBEBFF]/8 to-transparent pointer-events-none" />
                <div className="relative">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Open to opportunities
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    I'm currently looking for internship and freelance opportunities in UX/UI design. Let's create something meaningful together.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}