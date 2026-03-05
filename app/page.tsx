'use client';

import { motion } from 'motion/react';
import { ArrowDown, Code, Layout, Palette, Sparkles } from 'lucide-react';

const SECTIONS = [
  {
    id: 1,
    title: "The Art of Scrolling",
    description: "Experience the fluid motion of sticky stacking. A simple yet powerful CSS technique to elevate your web design.",
    color: "bg-slate-900",
    textColor: "text-white",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Pure CSS Magic",
    description: "No heavy libraries required. Just a few lines of utility classes to create depth and engagement.",
    color: "bg-indigo-600",
    textColor: "text-white",
    icon: <Code className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Vibrant Palettes",
    description: "Use bold colors and high contrast to make each section stand out as it slides into view.",
    color: "bg-emerald-500",
    textColor: "text-white",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Modern Aesthetics",
    description: "Crafted for the next generation of web experiences. Minimal, functional, and beautiful.",
    color: "bg-stone-100",
    textColor: "text-slate-900",
    icon: <Sparkles className="w-8 h-8" />,
  },
];

export default function Home() {
  return (
    <main className="relative antialiased">
      {/* Hero / Intro Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Sticky <span className="text-indigo-600 italic">Stack</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto">
            A demonstration of the overlapping scroll effect inspired by modern editorial design.
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-400">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="text-slate-400" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Overlapping Sections */}
      <div className="relative">
        {SECTIONS.map((section, index) => (
          <section
            key={section.id}
            className={`sticky top-0 h-screen w-full flex items-center justify-center p-8 ${section.color} ${section.textColor} shadow-2xl`}
            style={{ 
              zIndex: index + 1,
            }}
          >
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="mb-6 inline-block p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  {section.icon}
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  {section.title}
                </h2>
                <p className="text-lg md:text-xl opacity-80 leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="hidden md:block aspect-square rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative"
              >
                <div className="absolute inset-0 flex items-center justify-center text-9xl font-black opacity-10 select-none">
                  0{section.id}
                </div>
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Footer / Outro */}
      <section className="h-screen flex items-center justify-center bg-slate-950 text-white p-8 text-center relative z-50">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-8">Ready to build?</h2>
          <p className="text-slate-400 mb-12">
            This effect is achieved using <code className="bg-slate-800 px-2 py-1 rounded text-indigo-400">sticky</code> positioning and careful <code className="bg-slate-800 px-2 py-1 rounded text-indigo-400">z-index</code> management.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-indigo-50 transition-colors"
          >
            Back to top
          </button>
        </div>
      </section>
    </main>
  );
}
