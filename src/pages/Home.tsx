import React from 'react';
import { Hero } from '../components/Hero';
import { PipelineAnimation } from '../components/PipelineAnimation';
import { motion } from 'motion/react';
import { ArrowRight, Server, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

export const Home = () => {
  return (
    <div className="pb-20">
      <Seo 
        title="Home"
        description="Expert DevOps & MLOps Engineer specializing in AWS, Azure, GCP, Kubernetes, and automated pipelines. View my portfolio of scalable infrastructure projects."
      />
      <Hero />

      {/* Live Pipeline Simulation */}
      <section className="px-6 py-12 border-y border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <PipelineAnimation />
        </div>
      </section>
      
      {/* Quick Stats/Features */}
      <section className="px-6 py-20 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Server className="text-brand-blue" />,
              title: "Cloud Native",
              desc: "Specialized in AWS, Azure, and GCP architectures."
            },
            {
              icon: <Zap className="text-brand-green" />,
              title: "Rapid Deployment",
              desc: "CI/CD pipelines that scale from weekly to daily releases."
            },
            {
              icon: <Shield className="text-brand-blue" />,
              title: "DevSecOps",
              desc: "Security-first infrastructure with 100% audit compliance."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass border-zinc-800 shadow-xl"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto rounded-[3rem] p-12 text-center bg-gradient-to-br from-brand-blue/20 to-zinc-900 border border-brand-blue/30"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Need a custom cloud strategy?</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            From MLOps implementation to GitOps workflows, I build systems that grow with your business.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            Get In Touch <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
