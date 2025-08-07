import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

interface FoundersClubPageProps {
  onBack?: () => void;
  onPaymentClick?: () => void;
}

export function FoundersClubPage({ onBack, onPaymentClick }: FoundersClubPageProps) {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section Ultra-Asymétrique */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Colonne gauche - Texte principal désaxé */}
            <div className="lg:col-span-8 lg:col-start-1">
              {/* Social Proof floating à gauche */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 ml-0 lg:-ml-8"
              >
                
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="ml-0 lg:-ml-12"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight text-left">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent block font-[Abhaya_Libre]">
                    L'Offre Founders' Club
                  </span>
                  <span className="text-white block mt-2 ml-0 lg:ml-8 font-[Abhaya_Libre]">
                    Votre accès à vie aux Biomes AI
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl ml-0 lg:ml-4">
                  Participez à la création de la plateforme et devenez co-créateur de l'avenir de 
                  l'apprentissage de l'IA. Une opportunité unique qui ne reviendra jamais.
                </p>
              </motion.div>
            </div>

            {/* Colonne droite - Visuel flottant en haut à droite */}
            <div className="lg:col-span-4 lg:col-start-9 lg:mt-2">
              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative h-64 sm:h-80 lg:h-96 lg:mr-[-100px]"
              >
                {/* Animation des biomes en orbite */}
                <div className="absolute inset-0 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"></div>
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg"></div>
                </div>
                
                {/* Centre lumineux */}
                <div className="absolute inset-0 flex items-center justify-center translate-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-white/20 via-purple-300/30 to-cyan-300/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute w-10 h-10 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Particules flottantes */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Bénéfices avec cartes chevauchantes */}
      <section className="relative z-10 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Titre fortement désaxé */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 ml-0 lg:ml-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ce que vous obtenez
            </h2>
            <p className="text-lg text-white/80 max-w-xl">
              Une collection d'avantages exclusifs qui transformeront votre parcours dans l'IA
            </p>
          </motion.div>

          {/* Layout asymétrique avec chevauchements */}
          <div className="relative">
            {/* Carte PHARE - Accès à vie (très grande, positionnée asymétriquement) */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative z-30 w-full lg:w-3/5 lg:ml-16 mb-12 lg:mb-8 group bg-white/10 backdrop-blur-xl border border-white/40 rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-700 overflow-hidden hover:scale-105 hover:rotate-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl text-white mb-6">Accès à vie à la plateforme finale</h3>
                <p className="text-white/80 text-xl leading-relaxed">
                  L'offre exceptionnelle qui ne reviendra jamais. Une fois la plateforme lancée, 
                  vous y aurez accès pour toujours, sans jamais payer d'abonnement.
                </p>
                {/* Badge premium */}
                <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-300/30 rounded-full px-4 py-2">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-white/90 text-sm">Avantage premium</span>
                </div>
              </div>
            </motion.div>

            {/* Rangée de cartes moyennes chevauchantes */}
            <div className="relative lg:-mt-16">
              {/* Carte Co-créateur (chevauchement à droite) */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: 3 }}
                whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-20 w-full lg:w-2/5 lg:ml-auto lg:-mr-8 mb-8 group bg-white/6 backdrop-blur-xl border border-white/25 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:bg-white/12 transition-all duration-500 overflow-hidden hover:scale-105 hover:rotate-0"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-5 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl text-white mb-4">Rôle de co-créateur</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Participez aux décisions sur les biomes et fonctionnalités. Votre voix compte dans la création.
                  </p>
                </div>
              </motion.div>

              {/* Carte Accès prioritaire (légèrement chevauchante au centre) */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative z-25 w-full lg:w-2/5 lg:ml-32 lg:-mt-20 mb-8 group bg-white/7 backdrop-blur-xl border border-white/30 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:bg-white/13 transition-all duration-500 overflow-hidden hover:scale-105"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-5 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl text-white mb-4">Accès prioritaire</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Contenu en avant-première sur Discord, avant tous les autres membres.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Rangée inférieure - petites cartes échelonnées */}
            <div className="relative lg:-mt-12">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                {/* Carte Discord */}
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative z-15 w-full lg:w-1/3 lg:ml-8 lg:mt-8 group bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-5 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-500 overflow-hidden hover:scale-105"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg text-white mb-3">Discord VIP</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Communauté fermée d'experts en IA
                    </p>
                  </div>
                </motion.div>

                {/* Carte Bonus */}
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative z-15 w-full lg:w-1/3 lg:ml-auto lg:-mr-8 group bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-5 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-500 overflow-hidden hover:scale-105"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-white mb-3">Bonus exclusifs</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Prompts, templates et ressources exclusives
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOC DE CONVERSION FUSIONNÉ */}
      <section className="relative z-10 py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Effet de lumière angélique réduit */}
            <div className="absolute inset-0 -m-12">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/20 via-white/15 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-gradient-to-r from-white/20 via-purple-300/20 to-white/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Bloc principal fusionné */}
            <div className="relative z-10 bg-gradient-to-br from-purple-500/20 via-white/5 to-cyan-500/20 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Section urgence intégrée en haut */}
              <div className="bg-gradient-to-r from-red-500/30 via-orange-500/30 to-red-500/30 backdrop-blur-xl border-b border-orange-300/20 p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-orange-200 text-sm uppercase tracking-wider"> URGENT</span>
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
                  Le Founder's Club sera ouvert a partir de 100 membres dans la whitelist
                </h3>
                <p className="text-white/90 text-lg">
                  Offre limitée aux 50 premiers membres seulement
                </p>
              </div>

              {/* Section prix centrale */}
              <div className="p-6 sm:p-8 lg:p-10 text-center relative overflow-hidden">
                {/* Effet de brillance sur le prix */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 -skew-x-12"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-flex items-baseline gap-3 mb-4">
                      <span className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
                        50€
                      </span>
                      <span className="text-white/70 text-xl">seulement</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4">Accès à vie garanti</h3>
                    <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                      Prix de lancement exceptionnel. Cette offre ne reviendra jamais après le lancement officiel de la plateforme.
                    </p>
                  </div>

                  {/* CTA PRINCIPAL intégré */}
                  <div className="mb-6">
                    <Button
                      size="lg"
                      onClick={onPaymentClick}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 text-lg sm:text-xl px-12 sm:px-16 py-6 sm:py-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative overflow-hidden w-full lg:w-auto group"
                    >
                      <span className="relative z-10">🚀 Sécuriser mon accès à vie maintenant</span>
                      {/* Effet de brillance simplifié */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                    </Button>
                  </div>

                  {/* Éléments de confiance et garantie */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-6">
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-white/80">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Sécurisé par Stripe</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-white/80">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Remboursement total si le projet n'aboutit pas</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 text-white/80">
                      <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Support 24/7</span>
                    </div>
                  </div>

                  {/* Badge final de garantie */}
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-white/90">Satisfaction garantie ou remboursé</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}