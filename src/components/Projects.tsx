import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Database, Server, Workflow } from 'lucide-react';
import { Seo } from './Seo';

export const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-24 px-6 relative min-h-screen">
      <Seo 
        title="Portfolio Projects"
        description="View DevOps and MLOps projects by Vieer Dwivedi, featuring multi-cloud infrastructure automation and zero-downtime deployments."
        canonical="/projects"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">Featured Projects</h1>
        <p className="text-zinc-500 mb-16 max-w-2xl">
          A selection of automated infrastructure and MLOps systems deployed for enterprise-grade applications.
        </p>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="group p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-brand-blue/30 transition-all flex flex-col"
            >
              <div className="mb-8 p-4 rounded-2xl bg-zinc-950 w-fit border border-zinc-800 group-hover:border-brand-blue/30 transition-colors">
                {project.type === 'DevOps' ? (
                  <Server className="text-brand-blue" size={24} />
                ) : project.type === 'MLOps' ? (
                  <Workflow className="text-brand-green" size={24} />
                ) : (
                  <Database className="text-brand-blue" size={24} />
                )}
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-brand-blue transition-colors mb-4">
                {project.title}
              </h3>
              
              <p className="text-zinc-500 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-zinc-950 rounded border border-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    {t}
                  </span>
                ))}
              </div>

              <a href="#" className="flex items-center gap-2 text-white font-semibold group/link">
                Review Case Study 
                <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
