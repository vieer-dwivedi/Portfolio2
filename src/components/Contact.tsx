import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send, MapPin } from 'lucide-react';
import { Seo } from './Seo';

export const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-24 px-6 min-h-screen">
      <Seo 
        title="Contact"
        description="Get in touch with Vieer Dwivedi for DevOps consulting, MLOps strategy, or infrastructure optimization projects."
        canonical="/contact"
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold text-white mb-8 tracking-tight">Let's build something scalable.</h1>
            <p className="text-zinc-500 text-lg mb-12 max-w-md">
              Whether you're looking to automate your infrastructure, optimize ML workflows, 
              or just talk shop about Kubernetes, I'm always open to interesting projects.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-brand-blue/50 transition-all">
                  <Mail className="text-brand-blue" size={20} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Email</div>
                  <div className="text-white font-medium">vieerdwivedi@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-brand-blue/50 transition-all">
                  <MapPin className="text-brand-blue" size={20} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Location</div>
                  <div className="text-white font-medium">UAE / Remote</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-3xl glass backdrop-blur-xl border-zinc-800 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors placeholder:text-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors placeholder:text-zinc-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Subject</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                  <option>Infrastructure Modernization</option>
                  <option>MLOps Strategy</option>
                  <option>CI/CD Optimization</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your system architecture..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors placeholder:text-zinc-700 resize-none"
                />
              </div>

              <button className="w-full py-4 bg-brand-blue hover:bg-brand-blue/80 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-blue/20">
                Transmit Packet
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
