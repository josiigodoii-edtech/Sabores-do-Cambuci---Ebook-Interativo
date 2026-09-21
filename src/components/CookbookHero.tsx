import React from 'react';
import { Recipe } from '../types';
import {
  UtensilsCrossed,
  BookOpen,
  Sparkles,
  ShoppingBag,
  Compass,
  Award,
  Clock,
  Users,
  Flame,
  ChevronRight
} from 'lucide-react';
import { playOptionSelectSound } from '../utils/soundEffects';

interface CookbookHeroProps {
  onNavigateToRecipes: () => void;
  onNavigateToReader: () => void;
  onNavigateToMap: () => void;
  onOpenShoppingList: () => void;
  featuredRecipe: Recipe;
  onOpenCookMode: (recipe: Recipe) => void;
  unlockedBadgesCount: number;
}

export const CookbookHero: React.FC<CookbookHeroProps> = ({
  onNavigateToRecipes,
  onNavigateToReader,
  onNavigateToMap,
  onOpenShoppingList,
  featuredRecipe,
  onOpenCookMode,
  unlockedBadgesCount
}) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b251d] via-[#151c17] to-[#0e1310] text-white border border-stone-800 shadow-2xl p-6 sm:p-10 mb-8">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Commercial Hero Copy */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Livro de Receitas Interativo · Edição Gourmet</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Sabores do Cambuci
          </h1>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-light">
            Descubra os segredos gastronômicos da joia verde da Mata Atlântica. Treze criações irresistíveis, do salgado suculento à sobremesa aveludada, com porções dinâmicas e harmonizações de chef.
          </p>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap gap-2 text-xs text-stone-300">
            <span className="px-3 py-1 bg-white/10 rounded-lg border border-white/15">
              🌿 13 Receitas Testadas
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-lg border border-white/15">
              🍷 Harmonizações com Vinhos
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-lg border border-white/15">
              ⏱️ Timer de Cozinha Integrado
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-lg border border-white/15">
              🏆 Conquistas do Chef
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                playOptionSelectSound();
                onNavigateToRecipes();
              }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm rounded-2xl shadow-lg transition-transform hover:scale-102"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Ver Todas as Receitas</span>
            </button>

            <button
              onClick={() => {
                playOptionSelectSound();
                onNavigateToReader();
              }}
              className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-2xl border border-white/20 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ler Histórias & Segredos</span>
            </button>

            <button
              onClick={() => {
                playOptionSelectSound();
                onOpenShoppingList();
              }}
              className="flex items-center gap-2 px-4 py-3 bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white font-medium text-sm rounded-2xl border border-stone-700 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Lista de Compras</span>
            </button>
          </div>
        </div>

        {/* Right Column: Featured Recipe Spotlight Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-700/80 shadow-2xl group">
            <div className="h-64 sm:h-72 w-full overflow-hidden relative">
              <img
                src={featuredRecipe.imageUrl || 'https://images.unsplash.com/photo-1621996346565-e3d5d6281290?auto=format&fit=crop&w=800&q=80'}
                alt={featuredRecipe.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <span className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-stone-950 font-bold text-[10px] uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                <Flame className="w-3 h-3 fill-current" />
                Receita Destaque do Chef
              </span>
            </div>

            <div className="p-5 bg-[#171d18] space-y-3">
              <div>
                <h3 className="text-xl font-serif font-bold text-white leading-snug">
                  {featuredRecipe.title}
                </h3>
                <p className="text-xs text-stone-300 italic mt-1 line-clamp-2">
                  "{featuredRecipe.subtitle}"
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-400 border-t border-stone-800 pt-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {featuredRecipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    {featuredRecipe.yield}
                  </span>
                </div>

                <button
                  onClick={() => onOpenCookMode(featuredRecipe)}
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold text-xs group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Cozinhar Agora</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
