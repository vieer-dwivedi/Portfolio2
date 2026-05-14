import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 px-6 relative z-10 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-2 font-mono font-bold text-xl text-white">
          <Cpu className="text-brand-blue" aria-hidden="true" />
          <span>Vieer<span className="text-brand-blue">Dwivedi</span></span>
        </Link>

        <div className="text-zinc-600 text-sm font-mono text-center">
          © {new Date().getFullYear()} DESIGNED. SYSTEMATIZED. DEPLOYED.
          <div className="mt-2 text-[10px] uppercase tracking-tighter text-zinc-800">
            DevOps | MLOps | Cloud Infrastructure | Kubernetes | Terraform
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/vieer-dwivedi" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-brand-blue transition-all" aria-label="GitHub Profile">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/vieerdwivedi/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-brand-blue transition-all" aria-label="LinkedIn Profile">
            <Linkedin size={18} />
          </a>
          <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-brand-blue transition-all" aria-label="Twitter Profile">
            <Twitter size={18} />
          </a>
          <a href="mailto:vieerdwivedi@gmail.com" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-brand-blue transition-all" aria-label="Send Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
