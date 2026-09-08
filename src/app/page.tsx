'use client';

import { useState } from 'react';
import { Code, Palette, Globe, ExternalLink, Github, Mail, Linkedin, Twitter, ChevronRight, Star, Layers, Smartphone, Server, Database, ArrowUpRight } from 'lucide-react';

const skills = [
  { name: 'React / Next.js', level: 95, color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', level: 90, color: 'from-blue-400 to-indigo-500' },
  { name: 'Node.js', level: 88, color: 'from-green-400 to-emerald-500' },
  { name: 'Python', level: 85, color: 'from-yellow-400 to-orange-500' },
  { name: 'UI/UX Design', level: 92, color: 'from-pink-400 to-rose-500' },
  { name: 'Database Design', level: 82, color: 'from-purple-400 to-violet-500' },
];

const projects = [
  { title: 'E-Commerce Platform', desc: 'Full-stack marketplace with Stripe payments, real-time inventory, and admin dashboard.', tech: ['Next.js', 'Prisma', 'Stripe'], color: 'from-violet-500/20 to-purple-500/20', border: 'hover:border-violet-500/40' },
  { title: 'AI Chat Application', desc: 'Real-time messaging app with AI-powered responses, voice notes, and end-to-end encryption.', tech: ['React', 'OpenAI', 'WebSocket'], color: 'from-cyan-500/20 to-blue-500/20', border: 'hover:border-cyan-500/40' },
  { title: 'Finance Dashboard', desc: 'Interactive analytics dashboard with real-time charts, portfolio tracking, and alerts.', tech: ['TypeScript', 'D3.js', 'PostgreSQL'], color: 'from-emerald-500/20 to-green-500/20', border: 'hover:border-emerald-500/40' },
  { title: 'Social Media App', desc: 'Instagram-style platform with stories, reels, direct messages, and recommendation engine.', tech: ['React Native', 'Firebase', 'ML'], color: 'from-pink-500/20 to-rose-500/20', border: 'hover:border-pink-500/40' },
  { title: 'Project Management', desc: 'Kanban-style task manager with team collaboration, time tracking, and automated workflows.', tech: ['Next.js', 'Redis', 'GraphQL'], color: 'from-amber-500/20 to-orange-500/20', border: 'hover:border-amber-500/40' },
  { title: 'Health & Fitness', desc: 'Workout planner with AI-generated routines, progress tracking, and nutrition logging.', tech: ['React', 'Node.js', 'MongoDB'], color: 'from-teal-500/20 to-cyan-500/20', border: 'hover:border-teal-500/40' },
];

const services = [
  { icon: Layers, title: 'Full-Stack Development', desc: 'End-to-end web applications built with modern frameworks and best practices.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Cross-platform mobile applications with native performance and beautiful UI.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Stunning interfaces designed for conversion, accessibility, and user delight.' },
  { icon: Server, title: 'Backend & APIs', desc: 'Scalable server architectures, REST/GraphQL APIs, and database design.' },
];

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Delivered beyond expectations. The attention to detail and code quality was outstanding.', avatar: '👩‍💼' },
  { name: 'Michael Chen', role: 'CTO, ScaleUp', text: 'One of the most talented developers I\'ve worked with. Highly recommend for any project.', avatar: '👨‍💻' },
  { name: 'Emma Williams', role: 'Founder, DesignCo', text: 'Transformed our vision into reality. The UI/UX work was absolutely world-class.', avatar: '👩‍🎨' },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [formSent, setFormSent] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Ayan Portfolio</span>
          </h1>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {['About', 'Skills', 'Projects', 'Services', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors duration-200 relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          <a href="#contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-purple-400 text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Available for freelance
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-[1] tracking-tight mb-6">
              Hi, I&apos;m
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Ayan Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
              Full-stack developer & designer crafting premium digital experiences. I turn complex ideas into elegant, performant applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2">
                View My Work <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border border-white/10 px-7 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-all">
                Get In Touch
              </a>
            </div>
            <div className="flex gap-4 mt-8">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#contact" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-12 px-6 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{ n: '50+', l: 'Projects Done' }, { n: '30+', l: 'Happy Clients' }, { n: '5+', l: 'Years Exp.' }, { n: '99%', l: 'Satisfaction' }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{s.n}</div>
              <div className="text-sm text-gray-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-3">Skills & Expertise</h3>
          <p className="text-gray-500 mb-12">Technologies I work with daily</p>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.04] transition-all">
                <div className="flex justify-between mb-3">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`} style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-3">Featured Projects</h3>
          <p className="text-gray-500 mb-12">A selection of my recent work</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i}
                className={`group relative bg-gradient-to-br ${project.color} border border-white/[0.06] ${project.border} rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold group-hover:text-white transition-colors">{project.title}</h4>
                  <ArrowUpRight className={`w-5 h-5 text-gray-500 transition-all duration-300 ${hoveredProject === i ? 'text-white translate-x-0.5 -translate-y-0.5' : ''}`} />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-3 text-center">What I Do</h3>
          <p className="text-gray-500 mb-12 text-center">Services I offer to bring your ideas to life</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-purple-500/30 hover:bg-white/[0.04] hover:scale-[1.02] transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h4 className="font-bold mb-2">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Client Reviews</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t.avatar}</span>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-10">
            <h3 className="text-4xl font-bold mb-3 text-center">Let&apos;s Work Together</h3>
            <p className="text-gray-500 text-center mb-10">Have a project in mind? Drop me a message and I&apos;ll get back within 24 hours.</p>
            {formSent ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">Message Sent!</h4>
                <p className="text-gray-400 mb-4">I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setFormSent(false)} className="text-purple-400 underline text-sm">Send another</button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={e => { e.preventDefault(); setFormSent(true); }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all" />
                  <input type="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all" />
                </div>
                <input type="text" placeholder="Project Type (e.g., Web App, Mobile App)" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all" />
                <textarea placeholder="Tell me about your project..." rows={5} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all resize-none" />
                <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-[1.01] transition-all">
                  Send Message ✨
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-lg">Ayan Portfolio</span>
          <div className="flex gap-4">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all">
                <Icon className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">© 2025 Ayan Portfolio. Built with <span className="text-purple-400">Heaven AI</span></p>
        </div>
      </footer>
    </main>
  );
}
