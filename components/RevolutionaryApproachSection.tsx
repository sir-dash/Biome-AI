import React from 'react';

export function RevolutionaryApproachSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent px-[0px] py-[10px]">
            Une Approche Révolutionnaire
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            L'IA n'est plus une technologie du futur. C'est le présent. Et pour la maîtriser, il faut 
            comprendre ses différents écosystèmes.
          </p>
        </div>

        {/* Main features cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Apprentissage Immersif */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
              </div>
              <h3 className="text-xl sm:text-2xl mb-4 text-white group-hover:text-white/90 transition-colors duration-300">
                Apprentissage Immersif
              </h3>
              <p className="text-white/70 leading-relaxed">
                Chaque biome offre une expérience d'apprentissage unique, adaptée à votre 
                rythme et à vos objectifs.
              </p>
            </div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Progression Guidée */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl mb-4 text-white group-hover:text-white/90 transition-colors duration-300">
                Progression Accélérée
              </h3>
              <p className="text-white/70 leading-relaxed">
                Des parcours structurés qui vous mènent de débutant à avancé dans chaque domaine de 
                l'IA sans passer des heures à apprendre.
              </p>
            </div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Communauté Active */}
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl mb-4 text-white group-hover:text-white/90 transition-colors duration-300">
                Communauté Active
              </h3>
              <p className="text-white/70 leading-relaxed">
                Rejoignez une communauté passionnée d'apprenants et d'experts en IA.
              </p>
            </div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl hover:bg-white/10 transition-all duration-500 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"></div>
          </div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  6
                </div>
                <p className="text-white/70 text-sm sm:text-base">Biomes Uniques</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-white/70 text-sm sm:text-base">Outils IA</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  100+
                </div>
                <p className="text-white/70 text-sm sm:text-base">Heures de Contenu</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  ∞
                </div>
                <p className="text-white/70 text-sm sm:text-base">Possibilités</p>
              </div>
            </div>
          </div>
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}