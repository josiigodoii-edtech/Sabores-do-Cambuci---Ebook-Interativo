import React, { useState, useMemo } from 'react';
import { Recipe } from '../types';
import { RecipeInteractiveCard } from './RecipeInteractiveCard';
import {
  UtensilsCrossed,
  Search,
  SlidersHorizontal,
  Flame,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Heart
} from 'lucide-react';
import { playOptionSelectSound } from '../utils/soundEffects';

interface CookbookCatalogProps {
  recipes: Recipe[];
  cookedRecipeIds: string[];
  onToggleCooked: (recipeId: string) => void;
  onOpenCookMode: (recipe: Recipe, servings: number) => void;
}

export const CookbookCatalog: React.FC<CookbookCatalogProps> = ({
  recipes,
  cookedRecipeIds,
  onToggleCooked,
  onOpenCookMode
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Todas as Receitas', icon: '🍽️' },
    { id: 'doce', label: 'Sobremesas & Doces', icon: '🍮' },
    { id: 'salgado', label: 'Pratos Salgados', icon: '🍲' },
    { id: 'bebida', label: 'Drinks & Sucos', icon: '🍹' },
    { id: 'conserva', label: 'Geleias & Conservas', icon: '🍯' }
  ];

  const difficulties = ['all', 'Fácil', 'Médio', 'Elaborado'];

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // Category filter
      if (selectedCategory !== 'all' && recipe.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'all' && recipe.difficulty !== selectedDifficulty) {
        return false;
      }
      // Saved / Cooked filter
      if (showSavedOnly && !cookedRecipeIds.includes(recipe.id)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = recipe.title.toLowerCase().includes(query);
        const matchesSubtitle = recipe.subtitle.toLowerCase().includes(query);
        const matchesIngredients = recipe.ingredients.some(i => i.item.toLowerCase().includes(query));
        const matchesTags = recipe.tags?.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSubtitle && !matchesIngredients && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [recipes, selectedCategory, selectedDifficulty, showSavedOnly, searchQuery, cookedRecipeIds]);

  return (
    <section className="space-y-6">
      {/* Category Tabs & Quick Search */}
      <div className="p-4 sm:p-6 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                playOptionSelectSound();
                setSelectedCategory(cat.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[240px] max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar por prato ou ingrediente (ex: brigadeiro, peixe, queijo)..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 hover:bg-stone-100/80 focus:bg-white border border-stone-200 rounded-2xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Difficulty Selector */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl text-xs font-semibold">
              {difficulties.map(diff => (
                <button
                  key={diff}
                  onClick={() => {
                    playOptionSelectSound();
                    setSelectedDifficulty(diff);
                  }}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    selectedDifficulty === diff
                      ? 'bg-white text-stone-950 shadow-xs font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {diff === 'all' ? 'Dificuldade: Todas' : diff}
                </button>
              ))}
            </div>

            {/* Saved Toggle */}
            <button
              onClick={() => {
                playOptionSelectSound();
                setShowSavedOnly(prev => !prev);
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-semibold transition-all border ${
                showSavedOnly
                  ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                  : 'bg-stone-100 hover:bg-stone-200 border-transparent text-stone-700'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-700" />
              <span>Salvas ({cookedRecipeIds.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Count & Current Filter Info */}
      <div className="flex items-center justify-between px-2 text-xs text-stone-500 font-medium">
        <span>
          Exibindo <strong>{filteredRecipes.length}</strong> de <strong>{recipes.length}</strong> receitas gourmet testadas
        </span>
        {cookedRecipeIds.length > 0 && (
          <span className="text-emerald-700 font-semibold">
            ✨ {cookedRecipeIds.length} receitas marcadas para preparar
          </span>
        )}
      </div>

      {/* Recipes Cards Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-3">
          <UtensilsCrossed className="w-12 h-12 text-stone-300 mx-auto" />
          <h4 className="font-serif font-bold text-stone-800 text-lg">
            Nenhuma receita encontrada
          </h4>
          <p className="text-stone-500 text-sm max-w-sm mx-auto">
            Tente buscar com outro termo ou redefinir os filtros de categoria e dificuldade.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedDifficulty('all');
              setSearchQuery('');
              setShowSavedOnly(false);
            }}
            className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredRecipes.map(recipe => (
            <RecipeInteractiveCard
              key={recipe.id}
              recipe={recipe}
              isCooked={cookedRecipeIds.includes(recipe.id)}
              onToggleCooked={onToggleCooked}
              onOpenCookMode={onOpenCookMode}
            />
          ))}
        </div>
      )}
    </section>
  );
};
