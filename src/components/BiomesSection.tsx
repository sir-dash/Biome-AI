import React from 'react';
import { BiomeCard } from './BiomeCard';

export function BiomesSection() {
  const biomes = [
    {
      title: "🧠 Biome General AI",
      subtitle: "La Base Intelligente",
      description: "LLM (GPT, Claude), agents autonomes, IA conversationnelle, prompts avancés.",
      objective: "Comprendre les bases de l'intelligence artificielle généraliste.",
      ambiance: "Espace stellaire, interfaces holographiques, ambiance OS futuriste.",
      gradient: "bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-900/80",
    },
    {
      title: "🖼️ Biome Image",
      subtitle: "La Création Visuelle",
      description: "IA générative (Midjourney, DALL·E, Runway), style transfer, upscaling, IA dans le design/branding.",
      objective: "Maîtriser l'IA visuelle & créative.",
      ambiance: "Forêt tropicale",
      gradient: "bg-gradient-to-br from-green-900/80 via-emerald-900/80 to-teal-900/80",
    },
    {
      title: "💻 Biome Code",
      subtitle: "Le Cœur de l'IA",
      description: "Python, frameworks IA (TensorFlow, PyTorch), notebooks, scripts, API, Git.",
      objective: "Apprendre à construire des site, des web app et des applications from scratch.",
      ambiance: "Prairie florale",
      gradient: "bg-gradient-to-br from-pink-900/80 via-rose-900/80 to-red-900/80",
    },
    {
      title: "⚙️ Biome Automation",
      subtitle: "Le Réseau Intégré",
      description: "n8n, Zapier, Make, automatisations no-code avec IA intégrée, scraping, bots.",
      objective: "Automatiser des tâches business, perso ou créatives avec l'IA.",
      ambiance: "Montagne",
      gradient: "bg-gradient-to-br from-slate-900/80 via-gray-900/80 to-zinc-900/80",
    },
    {
      title: "🎙️ Biome Vocal",
      subtitle: "Le Réseau Sonore",
      description: "Clonage de voix (ElevenLabs, Descript), génération vocale réaliste et effets sonores par IA.",
      objective: "Créer des podcasts, de la prospection téléphonique, des voix off pour des vidéos, ou des assistants vocaux personnalisés.",
      ambiance: "Volcan actif",
      gradient: "bg-gradient-to-br from-orange-900/80 via-red-900/80 to-yellow-900/80",
    },
    {
      title: "🪙 Biome Business",
      subtitle: "L'Économie de l'IA",
      description: "Use cases business, vente de services IA, création de produits, stratégies no-code.",
      objective: "Générer des revenus ou intégrer les IA dans votre activité.",
      ambiance: "Océan profond, ambiance marine",
      gradient: "bg-gradient-to-br from-cyan-900/80 via-blue-900/80 to-indigo-900/80",
    }
  ];

  return (
    <section id="biomes" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Explorez les Biomes
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-2">
            Chaque biome représente un écosystème unique d'apprentissage de l'IA, 
            avec ses propres défis, outils et opportunités.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {biomes.map((biome, index) => (
            <BiomeCard key={index} {...biome} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}