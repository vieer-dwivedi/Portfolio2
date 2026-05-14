import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Seo } from './Seo';

export const Experience = () => {
  return (
    <section id="experience" className="pt-32 pb-24 px-6 bg-zinc-950 min-h-screen">
      <Seo 
        title="Professional Experience"
        description="Professional trajectory of Vieer Dwivedi in Cloud Engineering, DevOps, and MLOps at V2 Solutions and others."
        canonical="/experience"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4 text-center">Career Path</h1>
        <p className="text-zinc-500 text-center mb-20 max-w-xl mx-auto">
          Over 4 years of experience delivering robust infrastructure and automated pipelines globally.
        </p>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-brand-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-3xl glass border-zinc-800 hover:border-brand-blue/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
                </div>
                <div className="text-brand-blue text-sm font-semibold mb-6 uppercase tracking-wider">{exp.company}</div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-zinc-500 text-sm flex gap-3 leading-relaxed">
                      <span className="text-brand-blue font-bold mt-1.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
