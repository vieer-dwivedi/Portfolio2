import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATES, EDUCATION } from '../constants';
import { Award, BookOpen, MapPin } from 'lucide-react';
import { Seo } from '../components/Seo';

export const About = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen">
      <Seo 
        title="About"
        description="Learn more about Vieer Dwivedi, a Cloud & DevOps Engineer with expertise in AWS, Azure, and GCP. Discover my certifications and education history."
        canonical="/about"
      />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-5xl font-bold text-white mb-8">About Me</h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-6">
            I am a results-oriented Cloud, DevOps & MLOps Engineer with a passion for architecting 
            highly available and scalable multi-cloud infrastructures. I specialize in bridging the gap between 
            development, operations, and machine learning life cycles.
          </p>
          <p className="text-zinc-500 leading-relaxed">
            With expertise across AWS, Azure, and GCP, I help organizations achieve 99.99% uptime, 
            automate CI/CD pipelines, and implement production-grade ML models with low-latency inference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8 text-brand-blue">
              <Award size={24} />
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
            </div>
            <div className="space-y-4">
              {CERTIFICATES.map((cert) => (
                <div key={cert.name} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-brand-blue/30 transition-all flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span className="text-zinc-300 text-sm font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8 text-brand-green">
              <BookOpen size={24} />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="p-6 rounded-2xl glass border-zinc-800">
                  <h3 className="text-white font-bold mb-2">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm mb-1">
                    <MapPin size={14} />
                    {edu.institution}
                  </div>
                  <div className="text-brand-green text-xs font-mono">{edu.period}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
