import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
// Ligne 4: Remplacer
import { motion } from 'motion/react';
// Par
import { motion } from 'framer-motion';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface WaitlistSectionProps {
  onFoundersClubClick?: () => void;
}

export function WaitlistSection({ onFoundersClubClick }: WaitlistSectionProps) {
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState(0); // Real count only
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Fetch current waitlist count on component mount
  useEffect(() => {
    fetchWaitlistCount();
  }, []);

  const fetchWaitlistCount = async () => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-993e1db3/waitlist/count`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setMembers(data.count); // Real count only
      }
    } catch (error) {
      console.error('Error fetching waitlist count:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-993e1db3/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: '🎉 Parfait ! Vous êtes maintenant sur la waitlist.', type: 'success' });
        setEmail('');
        setMembers(data.count); // Update count with real number
      } else {
        setMessage({ text: data.error || 'Une erreur est survenue', type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setMessage({ text: 'Erreur de connexion. Veuillez réessayer.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="join" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent m-[0px] px-[0px] py-[10px] font-[Abhaya_Libre]">
            Rejoignez l'Aventure
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Soyez parmi les premiers à explorer les biomes de l'IA et à façonner l'avenir de l'apprentissage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl text-white mb-2">Waitlist Exclusive</h3>
              <p className="text-sm sm:text-base text-white/70 px-2">
                Recevez les actualités et les avancées du projet
              </p>
            </div>

            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="votre.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 rounded-xl text-sm sm:text-base"
                required
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none rounded-xl px-6 sm:px-8 py-3 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Inscription...
                  </div>
                ) : (
                  "S'inscrire"
                )}
              </Button>
            </div>

            {/* Message feedback */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-3 rounded-xl ${
                  message.type === 'success' 
                    ? 'bg-green-500/20 border border-green-400/30 text-green-200' 
                    : 'bg-red-500/20 border border-red-400/30 text-red-200'
                }`}
              >
                {message.text}
              </motion.div>
            )}

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-xs sm:text-sm">
                  {members > 100 
                    ? `${members.toLocaleString('fr-FR')} membres déjà inscrits`
                    : "Soyez parmi les premiers à vous inscrire"
                  }
                </span>
              </div>
            </div>
          </form>

          {/* Bonus section */}
          <div className="mt-6 sm:mt-8 pt-6 border-t border-white/20">
            <div className="text-center">
              <p className="text-white/80 mb-4 text-sm sm:text-base">Rejoignez le Founders' Club pour 50€ et obtenez un accès à vie</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 max-w-2xl mx-auto mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <p className="text-white/90 text-xs sm:text-sm">
                    ✨ Accès Discord VIP
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <p className="text-white/90 text-xs sm:text-sm">
                    🚀 Contenu exclusif anticipé, mis à jour au fur et à mesure
                  </p>
                </div>
              </div>
              <Button
                onClick={onFoundersClubClick}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 border-none rounded-xl px-6 sm:px-8 py-3 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Découvrir l'offre Founders' Club
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}