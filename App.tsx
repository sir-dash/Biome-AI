import React, { useState, useEffect } from 'react';
import { FloatingNavbar } from './components/FloatingNavbar';
import { HeroSection } from './components/HeroSection';
import { BiomesSection } from './components/BiomesSection';
import { RevolutionaryApproachSection } from './components/RevolutionaryApproachSection';
import { WaitlistSection } from './components/WaitlistSection';
import { FoundersClubPage } from './components/FoundersClubPage';
import { StripePaymentForm } from './components/StripePaymentForm';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'founders-club' | 'payment-confirmation'>('home');

  // Scroll to top when page changes (except for founders-club to avoid animation)
  useEffect(() => {
    if (currentPage !== 'founders-club') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Instant scroll to top for founders-club to avoid animation
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPage]);

  const handleFoundersClubClick = () => {
    setCurrentPage('founders-club');
  };

  const handlePaymentClick = () => {
    setCurrentPage('payment-confirmation');
  };

  const handleNavigation = (page: 'home' | 'founders-club') => {
    setCurrentPage(page);
  };

  const renderBackground = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Dense starfield - Small stars */}
      <div className="absolute inset-0">
        {[...Array(300)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute w-px h-px bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${1.5 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Medium stars */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Large bright stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-1 h-1 bg-white/80 rounded-full shadow-white/50 shadow-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${3 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
            style={{
              left: '0%',
              top: `${20 + Math.random() * 60}%`,
              animation: `shootingStar ${8 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 10}s`,
              transform: 'rotate(-25deg)',
              transformOrigin: 'left center'
            }}
          />
        ))}
      </div>

      {/* Distant twinkling stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={`distant-${i}`}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: `${0.5 + Math.random() * 1}px`,
              height: `${0.5 + Math.random() * 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fade ${4 + Math.random() * 6}s infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Colored nebula stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const colors = ['bg-blue-300/40', 'bg-purple-300/40', 'bg-cyan-300/40', 'bg-pink-300/40'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={`nebula-${i}`}
              className={`absolute w-0.5 h-0.5 ${color} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `glow ${3 + Math.random() * 4}s infinite`,
                animationDelay: `${Math.random() * 7}s`
              }}
            />
          );
        })}
      </div>
    </div>
  );

  const renderAnimationStyles = () => (
    <style jsx>{`
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
      }
      
      @keyframes sparkle {
        0%, 100% { 
          opacity: 0.4; 
          transform: scale(0.8);
        }
        25% { 
          opacity: 0.8; 
          transform: scale(1.1);
        }
        50% { 
          opacity: 1; 
          transform: scale(1.3);
        }
        75% { 
          opacity: 0.8; 
          transform: scale(1.1);
        }
      }
      
      @keyframes shootingStar {
        0% {
          opacity: 0;
          transform: translateX(-100px) translateY(50px) rotate(-25deg);
          width: 0px;
        }
        10% {
          opacity: 1;
          width: 60px;
        }
        80% {
          opacity: 1;
          width: 80px;
        }
        100% {
          opacity: 0;
          transform: translateX(calc(100vw + 200px)) translateY(-100px) rotate(-25deg);
          width: 0px;
        }
      }
      
      @keyframes fade {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.6; }
      }
      
      @keyframes glow {
        0%, 100% { 
          opacity: 0.3;
          filter: brightness(1);
        }
        50% { 
          opacity: 0.8;
          filter: brightness(1.5);
        }
      }
    `}</style>
  );

  if (currentPage === 'payment-confirmation') {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {renderBackground()}
        <div className="relative z-10">
          <FloatingNavbar 
            currentPage={currentPage} 
            onNavigate={handleNavigation}
          />
          <StripePaymentForm 
            onBack={() => setCurrentPage('founders-club')} 
          />
        </div>
        {renderAnimationStyles()}
      </div>
    );
  }

  if (currentPage === 'founders-club') {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {renderBackground()}
        <div className="relative z-10">
          <FloatingNavbar 
            currentPage={currentPage} 
            onNavigate={handleNavigation}
          />
          <FoundersClubPage 
            onBack={() => setCurrentPage('home')}
            onPaymentClick={handlePaymentClick}
          />
        </div>
        {renderAnimationStyles()}
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {renderBackground()}
      
      {/* Main content */}
      <div className="relative z-10">
        <FloatingNavbar 
          currentPage={currentPage} 
          onNavigate={handleNavigation}
        />
        <HeroSection onFoundersClubClick={handleFoundersClubClick} />
        <BiomesSection />
        <RevolutionaryApproachSection />
        <WaitlistSection onFoundersClubClick={handleFoundersClubClick} />
        
        {/* Footer */}
        <footer className="py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/60 text-sm sm:text-base px-2">
              © 2025 Biomes AI. Une nouvelle façon d'apprendre l'intelligence artificielle.
            </p>
          </div>
        </footer>
      </div>

      {renderAnimationStyles()}
    </div>
  );
}