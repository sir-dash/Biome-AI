import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "motion/react";

interface HeroSectionProps {
  onFoundersClubClick?: () => void;
}

export function HeroSection({ onFoundersClubClick }: HeroSectionProps) {
  const [email, setEmail] = useState('');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to the waitlist section
    const waitlistSection = document.getElementById('join');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleJoinClick = () => {
    // Scroll to the waitlist section
    const waitlistSection = document.getElementById('join');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,200,255,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,120,200,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,255,120,0.2),transparent_70%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Glowing headline with fade-in animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)"
          }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            filter: { duration: 2 }
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 sm:mb-6 leading-tight text-white"
        >
          <motion.span 
            initial={{ filter: "drop-shadow(0 0 0px rgba(255,255,255,0))" }}
            animate={{ filter: "drop-shadow(0 0 30px rgba(255,255,255,0.5))" }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent font-[Abhaya_Libre] animate-glow-pulse"
          >
            Explorez les Biomes de l'IA
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2"
        >
          Maîtrisez tous les aspects de l'IA. Un biome à la fois. Transformez cette puissance en un levier de croissance et de rentabilité.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4 sm:gap-6 justify-center items-center"
        >
          <form onSubmit={handleWaitlistSubmit} className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl w-full max-w-lg">
            <Input
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-none text-white placeholder:text-white/60 flex-1 min-w-0"
              type="email"
              required
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none rounded-xl px-3 sm:px-4 py-2 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap text-xs sm:text-sm flex-shrink-0"
            >
              Rejoindre
            </Button>
          </form>

          <Button
            variant="outline"
            onClick={onFoundersClubClick}
            className="bg-white/10 backdrop-blur-xl border-white/30 text-white hover:bg-white/20 rounded-xl px-6 sm:px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-xs sm:w-auto text-sm"
          >
            Découvrir l'offre Founders' Club
          </Button>
        </motion.div>
      </div>
    </section>
  );
}