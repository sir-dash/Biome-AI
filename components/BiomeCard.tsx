import React from 'react';
import { motion } from 'motion/react';

interface BiomeCardProps {
  title: string;
  subtitle: string;
  description: string;
  objective: string;
  ambiance: string;
  gradient: string;
  icon: string;
  index: number;
}

export function BiomeCard({ title, subtitle, description, objective, ambiance, gradient, icon, index }: BiomeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden ${gradient}`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"></div>
        </div>
        
        {/* Floating icon */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-2xl sm:text-4xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          {icon}
        </div>
        
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl mb-2 text-white group-hover:text-white/90 transition-colors duration-300 pr-8 sm:pr-12">
            {title}
          </h3>
          <h4 className="text-base sm:text-lg text-white/80 mb-4">
            {subtitle}
          </h4>
          
          <p className="text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs sm:text-sm text-white/90">
                <span className="text-white">Objectif :</span> {objective}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-xs sm:text-sm text-white/90">
                <span className="text-white">Ambiance :</span> {ambiance}
              </p>
            </div>
          </div>
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
}