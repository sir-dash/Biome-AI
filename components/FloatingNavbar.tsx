import React, { useState } from 'react';
import { Button } from './ui/button';

interface FloatingNavbarProps {
  currentPage?: 'home' | 'founders-club' | 'payment-confirmation';
  onNavigate?: (page: 'home' | 'founders-club') => void;
}

export function FloatingNavbar({ currentPage = 'home', onNavigate }: FloatingNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home' && onNavigate) {
      // If we're not on home page, navigate to home first, then scroll
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleNavigation = (page: 'home' | 'founders-club') => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-8 px-8 py-4">
          <button 
            onClick={() => handleNavigation('home')}
            className={`transition-all duration-300 hover:scale-105 text-sm ${
              currentPage === 'home' 
                ? 'text-white' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 text-sm"
          >
            À propos
          </button>
          <button 
            onClick={() => scrollToSection('biomes')}
            className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 text-sm"
          >
            Biomes
          </button>
          <button 
            onClick={() => scrollToSection('join')}
            className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 text-sm"
          >
            Rejoindre
          </button>
          <button 
            onClick={() => handleNavigation('founders-club')}
            className={`transition-all duration-300 hover:scale-105 text-sm ${
              currentPage === 'founders-club' 
                ? 'text-white' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Founders' Club
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-white text-sm">Biomes AI</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 p-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
          
          {isOpen && (
            <div className="border-t border-white/20 px-4 py-3 space-y-3">
              <button 
                onClick={() => handleNavigation('home')}
                className={`block transition-colors text-sm py-2 ${
                  currentPage === 'home' 
                    ? 'text-white' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-white/90 hover:text-white transition-colors text-sm py-2"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('biomes')}
                className="block text-white/90 hover:text-white transition-colors text-sm py-2"
              >
                Biomes
              </button>
              <button 
                onClick={() => scrollToSection('join')}
                className="block text-white/90 hover:text-white transition-colors text-sm py-2"
              >
                Rejoindre
              </button>
              <button 
                onClick={() => handleNavigation('founders-club')}
                className={`block transition-colors text-sm py-2 ${
                  currentPage === 'founders-club' 
                    ? 'text-white' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Founders' Club
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}