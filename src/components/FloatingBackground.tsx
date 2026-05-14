import React from 'react';
import { motion } from 'motion/react';

const techTags = [
  'AWS EKS', 'Azure AKS', 'Terraform', 'Kubernetes', 'MLflow', 
  'Jenkins', 'ArgoCD', 'Docker', 'Lambda', 'EC2', 'S3', 
  'IAM', 'VPC', 'CloudFront', 'Route53', 'Vault', 'Snyk'
];

export const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
      {techTags.map((tag, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: 0 
          }}
          animate={{ 
            x: [
              Math.random() * 100 + '%', 
              Math.random() * 100 + '%', 
              Math.random() * 100 + '%'
            ],
            y: [
              Math.random() * 100 + '%', 
              Math.random() * 100 + '%', 
              Math.random() * 100 + '%'
            ],
            opacity: [0, 1, 1, 0],
            rotate: [0, 45, 0, -45, 0]
          }}
          transition={{ 
            duration: 20 + Math.random() * 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute font-mono text-sm md:text-2xl font-bold whitespace-nowrap text-white"
        >
          {tag}
        </motion.div>
      ))}
    </div>
  );
};
