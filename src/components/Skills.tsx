import React from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS } from '../constants';
import { Seo } from './Seo';

export const Skills = () => {
  return (
    <section id="skills" className="pt-32 pb-24 px-6 bg-zinc-950/50 min-h-screen">
      <Seo 
        title="Technical Skills"
        description="Explore the technical stack of Vieer Dwivedi: Kubernetes, Docker, Terraform, Jenkins, AWS, Azure, GCP, and MLOps tools."
        canonical="/skills"
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Technical Stack</h1>
            <p className="text-zinc-500 max-w-md">
              A comprehensive view of the tools and technologies I use to build robust production environments.
            </p>
          </div>
          <div className="text-brand-blue font-mono text-sm tracking-widest uppercase">
            // stack_analysis.sh
          </div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.category}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-8 rounded-2xl glass hover:border-brand-blue/30 transition-all group"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
                {group.category}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue group-hover:animate-ping" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-brand-blue hover:border-brand-blue/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
