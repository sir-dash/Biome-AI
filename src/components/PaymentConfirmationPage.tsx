import React from 'react';
// Ligne 2: Remplacer
import { motion } from 'motion/react';
// Par
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface PaymentConfirmationPageProps {
  onBack: () => void;
}

export function PaymentConfirmationPage({ onBack }: PaymentConfirmationPageProps) {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section avec retour */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'offre
          </motion.button>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Finaliser votre accès
              </span>
              <br />
              <span className="text-white">
                au Founders' Club
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Vous êtes à un clic d'obtenir votre accès à vie à la plateforme Biomes AI. 
              Rejoignez les 50 premiers membres privilégiés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Payment Section */}
      <section className="relative z-10 py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative bg-white/8 backdrop-blur-xl border border-white/30 rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl hover:bg-white/12 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl text-white mb-8">Informations de paiement</h2>
                
                {/* Mock Payment Form */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/90 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="votre.email@exemple.com"
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/90 mb-2">Numéro de carte</label>
                    <input 
                      type="text" 
                      placeholder="1234 5678 9012 3456"
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 mb-2">Expiration</label>
                      <input 
                        type="text" 
                        placeholder="MM/AA"
                        className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">CVC</label>
                      <input 
                        type="text" 
                        placeholder="123"
                        className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/90 mb-2">Nom complet</label>
                    <input 
                      type="text" 
                      placeholder="Votre nom complet"
                      className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                </div>
                
                {/* Security badges */}
                <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Sécurisé SSL</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Stripe</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Price Summary */}
              <div className="bg-white/6 backdrop-blur-xl border border-white/25 rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl text-white mb-6">Récapitulatif</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Founders' Club - Accès à vie</span>
                    <span className="text-white">50€</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">TVA incluse</span>
                    <span className="text-white/60">0€</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex items-center justify-between text-xl">
                      <span className="text-white">Total</span>
                      <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">50€</span>
                    </div>
                  </div>
                </div>
                
                {/* What's included reminder */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/80">Accès à vie à la plateforme</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/80">Discord VIP + contenu prioritaire</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/80">Rôle de co-créateur</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/80">Bonus exclusifs et templates</span>
                  </div>
                </div>
              </div>

              {/* Urgency reminder */}
              <div className="bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 backdrop-blur-xl border border-orange-300/30 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-orange-200 text-sm uppercase tracking-wider">Urgent</span>
                </div>
                <p className="text-white/90 text-sm">
                  Plus que quelques places disponibles sur les 500 premiers membres
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA with glow effect */}
      <section className="relative z-10 py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 -m-16">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 via-white/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 text-xl sm:text-2xl px-16 sm:px-20 py-8 sm:py-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative overflow-hidden w-full sm:w-auto group"
              >
                <span className="relative z-10">🔒 Finaliser le paiement - 50€</span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </Button>
              
              <p className="text-white/60 text-sm mt-6">
                💳 Paiement sécurisé par Stripe • Garantie de remboursement 30 jours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}