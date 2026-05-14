import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Github, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 font-mono font-bold text-xl text-white">
          <Cpu className="text-brand-blue" />
          <span>Vieer<span className="text-brand-blue">Dwivedi</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.href}
                className={`text-sm font-medium transition-colors ${isActive(link.href) ? 'text-brand-blue' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 border-l border-zinc-800 pl-8 ml-2"
          >
            <a href="https://github.com/vieer-dwivedi" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/vieerdwivedi/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t-0 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 ${isActive(link.href) ? 'text-brand-blue' : 'text-zinc-400 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
