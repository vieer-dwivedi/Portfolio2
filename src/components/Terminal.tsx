import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, Cpu, Activity } from 'lucide-react';

export const Terminal = () => {
  const [logs, setLogs] = useState<string[]>([
    "$ init portfolio --user 'Vieer Dwivedi'",
    "Fetching clusters...",
    "Status: ACTIVE [Production]",
  ]);

  const pool = [
    "HEALTH_CHECK: healthy",
    "NODE_STATUS: running",
    "DB_SYNC: complete",
    "TLS_TERMINATION: success",
    "LOAD_BALANCER: processing",
    "POD_SCALING: optimal",
    "KUBERNETES_CLUSTER: stable",
    "MODEL_INFERENCE: 12ms",
    "TRAFFIC_ANALYSIS: normal",
    "LOGS_STREAMING..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, pool[Math.floor(Math.random() * pool.length)]];
        if (next.length > 10) return next.slice(next.length - 10);
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto font-mono text-xs md:text-sm shadow-2xl rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <TerminalIcon size={14} />
            <span className="text-[10px] uppercase tracking-widest font-semibold">sys_monitor</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-zinc-600">
          <div className="flex items-center gap-1.5">
            <Cpu size={12} className="animate-pulse" />
            <span className="text-[10px]">CPU: 4%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Activity size={12} />
            <span className="text-[10px]">MEM: 12GB</span>
          </div>
        </div>
      </div>
      <div className="p-6 h-[260px] overflow-hidden">
        <AnimatePresence initial={false}>
          {logs.map((line, i) => (
            <motion.div
              key={`${line}-${i}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`mb-1 ${line.startsWith('$') ? "text-brand-blue" : "text-zinc-600"}`}
            >
              <span className="text-zinc-800 mr-2">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-brand-blue align-middle"
        />
      </div>
    </div>
  );
};
