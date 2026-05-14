import React from 'react';
import { motion } from 'motion/react';
import { Box, CheckCircle2, Play, Settings, ShieldCheck, Zap } from 'lucide-react';

const stages = [
  { id: 'build', name: 'BUILD', icon: <Box size={20} />, color: '#3b82f6' },
  { id: 'test', name: 'TEST', icon: <ShieldCheck size={20} />, color: '#10b981' },
  { id: 'deploy', name: 'DEPLOY', icon: <Zap size={20} />, color: '#8b5cf6' },
];

export const PipelineAnimation = () => {
  return (
    <div className="w-full py-12 px-6 flex flex-col items-center">
      <div className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-2">
        <Settings size={12} className="animate-spin" />
        Live CI/CD Pipeline
      </div>

      <div className="relative flex items-center justify-between w-full max-w-4xl gap-4">
        {/* Connector Line Background */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2" />

        {/* Animated Progress Line */}
        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-green to-purple-500 -translate-y-1/2 origin-left"
          animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {stages.map((stage, i) => (
          <div key={stage.id} className="relative z-10 flex flex-col items-center">
            <motion.div
              animate={{
                borderColor: [
                  'transparent',
                  stage.color,
                  'transparent'
                ],
                backgroundColor: [
                  '#09090b',
                  '#09090b',
                  '#09090b'
                ],
                scale: [1, 1.1, 1]
              }}
              transition={{
                delay: i * 2,
                duration: 2,
                repeat: Infinity
              }}
              className="w-16 h-16 rounded-2xl bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center text-zinc-500 shadow-2xl relative"
            >
              <motion.div
                animate={{
                  color: ['#71717a', stage.color, '#71717a']
                }}
                transition={{
                  delay: i * 2,
                  duration: 2,
                  repeat: Infinity
                }}
              >
                {stage.icon}
              </motion.div>

              {/* Status Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  delay: i * 2 + 1.5,
                  duration: 0.5,
                  repeat: Infinity
                }}
                className="absolute -top-2 -right-2 text-brand-green bg-zinc-950 rounded-full"
              >
                <CheckCircle2 size={16} />
              </motion.div>
            </motion.div>
            
            <motion.span
              animate={{
                color: ['#52525b', '#ffffff', '#52525b']
              }}
              transition={{
                delay: i * 2,
                duration: 2,
                repeat: Infinity
              }}
              className="mt-4 font-mono text-[10px] tracking-widest font-bold"
            >
              {stage.name}
            </motion.span>
          </div>
        ))}
      </div>

      <div className="mt-16 flex gap-12">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Main Branch: Passing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Uptime: 99.99%</span>
        </div>
      </div>
    </div>
  );
};
