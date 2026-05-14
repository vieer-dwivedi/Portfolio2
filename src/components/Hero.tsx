import React from 'react';
import { motion } from 'motion/react';
import { Terminal } from './Terminal';
import { ChevronDown, Cloud, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold mb-6">
            <Zap size={12} />
            PIPELINES AT SCALE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-8">
            DevOps & <br />
            <span className="text-zinc-600">MLOps</span> Architect.
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed">
            I build the arteries of modern tech—automated, 
            resilient, and scalable infrastructure designed 
            to power the next generation of AI products.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="px-8 py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/80 transition-all shadow-lg shadow-brand-blue/20">
              View Systems
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all">
              Initiate Contact
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8 text-zinc-500 font-mono text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Cloud size={14} /> Cloud Native
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} /> Production Ready
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <Terminal />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-brand-blue/10 to-transparent blur-3xl opacity-50" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 cursor-pointer hidden md:block"
      >
        <Link to="/skills"><ChevronDown /></Link>
      </motion.div>
    </section>
  );
};
