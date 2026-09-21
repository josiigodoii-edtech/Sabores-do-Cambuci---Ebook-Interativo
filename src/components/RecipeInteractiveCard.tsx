import React, { useState } from 'react';
import { Recipe } from '../types';
import {
  Clock,
  Users,
  ChefHat,
  Check,
  Bookmark,
  Sparkles,
  Lightbulb,
  Info,
  Plus,
  Minus,
  Play,
  Wine,
  Share2,
  CheckCircle2,
  Flame
} from 'lucide-react';
import { playOptionSelectSound, playSuccessChime } from '../utils/soundEffects';

interface RecipeInteractiveCardProps {
  recipe: Recipe;
  isCooked: boolean;
  onToggleCooked: (recipeId: string) => void;
  onOpenCookMode?: (recipe: Recipe, currentServings: number) => void;
}

export const RecipeInteractiveCard: React.FC<RecipeInteractiveCardProps> = ({
  recipe,
  isCooked,
  onToggleCooked,
  onOpenCookMode
}) => {
  const [servings, setServings] = useState<number>(recipe.defaultServings);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const scaleFactor = servings / recipe.defaultServings;

  const handleServingChange = (delta: number) => {
    playOptionSelectSound();
    setServings(prev => Math.max(1, Math.min(30, prev + delta)));
  };

  const toggleIngredient = (index: number) => {
    playOptionSelectSound();
    setCheckedIngredients(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleStep = (index: number) => {
    playOptionSelectSound();
    setCompletedSteps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const formatAmount = (amount?: number) => {
    if (amount === undefined) return '';
    const scaled = amount * scaleFactor;
    return Number.isInteger(scaled) ? scaled.toString() : scaled.toFixed(1).replace('.0', '');
  };

  const difficultyColors = {
    Fácil: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Médio: 'bg-amber-100 text-amber-800 border-amber-200',
    Elaborado: 'bg-purple-100 text-purple-800 border-purple-200'
  }[recipe.difficulty || 'Fácil'];

  return (
    <article
      id={`recipe-card-${recipe.id}`}
      className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg ${
        isCooked ? 'border-emerald-400 ring-2 ring-emerald-500/20' : 'border-stone-200/90'
      }`}
    >
      {/* Visual Header with Real Gastronomic Photography */}
      <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-stone-900 group">
        {recipe.imageUrl ? (
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-800 to-stone-900 flex items-center justify-center">
            <ChefHat className="w-16 h-16 text-emerald-300/40" />
          </div>
        )}

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/90 backdrop-blur-md text-stone-900 shadow-md">
              {recipe.category}
            </span>
            {recipe.difficulty && (
              <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full border shadow-xs backdrop-blur-md ${difficultyColors}`}>
                {recipe.difficulty}
              </span>
            )}
          </div>

          {/* Cooked / Tested status badge */}
          <button
            onClick={() => {
              playSuccessChime();
              onToggleCooked(recipe.id);
            }}
            id={`btn-cook-${recipe.id}`}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md backdrop-blur-md ${
              isCooked
                ? 'bg-emerald-500 text-white ring-2 ring-white/50'
                : 'bg-white/80 hover:bg-white text-stone-900'
            }`}
          >
            {isCooked ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Preparo Concluído</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5 text-stone-700" />
                <span>Quero Cozinhar</span>
              </>
            )}
          </button>
        </div>

        {/* Bottom Title inside Image */}
        <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
          <div className="flex items-center gap-3 text-xs text-stone-200 font-medium">
            <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              {recipe.prepTime}
            </span>
            <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
              <Users className="w-3.5 h-3.5 text-emerald-300" />
              {servings} porções
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white leading-tight drop-shadow-md">
            {recipe.title}
          </h3>
        </div>
      </div>

      {/* Subtitle & Portion Controller */}
      <div className="p-5 md:p-6 bg-[#faf8f4] border-b border-stone-200/80 space-y-3">
        <p className="text-sm md:text-base text-stone-700 italic font-serif leading-relaxed">
          "{recipe.subtitle}"
        </p>

        {/* Portion Controller & Cook Mode CTA */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          {/* Servings Adjuster */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-700 uppercase tracking-wide">
              Porções:
            </span>
            <div className="flex items-center bg-white border border-stone-300 rounded-xl p-0.5 shadow-2xs">
              <button
                onClick={() => handleServingChange(-1)}
                title="Diminuir porções"
                aria-label="Diminuir porções"
                className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-100 disabled:opacity-30 transition-colors"
                disabled={servings <= 1}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-3 text-xs font-bold font-mono text-stone-900 min-w-[28px] text-center">
                {servings}
              </span>
              <button
                onClick={() => handleServingChange(1)}
                title="Aumentar porções"
                aria-label="Aumentar porções"
                className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
            <span className="text-[11px] text-stone-500 italic hidden sm:inline">
              (gramaturas recalculadas automaticamente)
            </span>
          </div>

          {/* Open Cook Mode Button */}
          {onOpenCookMode && (
            <button
              onClick={() => {
                playOptionSelectSound();
                onOpenCookMode(recipe, servings);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs rounded-xl shadow-xs transition-transform hover:scale-102"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Modo Cozinha (com Timer)</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content: Ingredients & Steps */}
      <div className="p-5 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Ingredients Column */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <h4 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              Ingredientes
            </h4>
            <span className="text-xs font-medium text-stone-500">
              {Object.values(checkedIngredients).filter(Boolean).length}/{recipe.ingredients.length} separados
            </span>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm">
            {recipe.ingredients.map((ing, idx) => {
              const isChecked = !!checkedIngredients[idx];
              return (
                <li
                  key={idx}
                  onClick={() => toggleIngredient(idx)}
                  className={`flex items-start gap-2.5 p-2.5 rounded-xl cursor-pointer transition-all border select-none ${
                    isChecked
                      ? 'bg-emerald-50/40 border-emerald-200 text-stone-400 line-through'
                      : 'bg-[#faf9f6] border-stone-200/80 text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="mt-0.5 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                  />
                  <div className="leading-snug">
                    {ing.section && (
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">
                        {ing.section}
                      </span>
                    )}
                    <span className={isChecked ? 'line-through' : 'font-medium'}>
                      {ing.amount !== undefined && (
                        <strong className="text-emerald-900 mr-1 font-semibold">
                          {formatAmount(ing.amount)} {ing.unit}
                        </strong>
                      )}
                      {ing.item}
                    </span>
                    {ing.note && (
                      <span className="text-[11px] text-stone-500 block italic mt-0.5">
                        {ing.note}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Steps Column */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <h4 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-emerald-700" />
              Modo de Preparo
            </h4>
            <span className="text-xs font-medium text-stone-500">
              {Object.values(completedSteps).filter(Boolean).length}/{recipe.steps.length} concluídos
            </span>
          </div>

          <ol className="space-y-3">
            {recipe.steps.map((step, sIdx) => {
              const isDone = !!completedSteps[sIdx];
              return (
                <li
                  key={sIdx}
                  onClick={() => toggleStep(sIdx)}
                  className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                    isDone
                      ? 'bg-stone-50 border-stone-200 text-stone-400 line-through'
                      : 'bg-white border-stone-200 text-stone-800 hover:border-emerald-300 shadow-2xs'
                  }`}
                >
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {isDone ? <Check className="w-3.5 h-3.5" /> : sIdx + 1}
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed text-stone-800">
                    {step}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Sommelier & Chef Pairing Block */}
      {recipe.pairing && (
        <div className="mx-5 md:mx-6 mb-5 p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-amber-50/50 border border-rose-200/80 flex items-center gap-3.5 text-xs md:text-sm text-stone-800">
          <span className="p-2.5 rounded-xl bg-rose-100 text-rose-800 shrink-0">
            <Wine className="w-5 h-5" />
          </span>
          <div>
            <strong className="block font-serif font-bold text-rose-950 text-sm">
              Harmonização do Sommelier & Mesa
            </strong>
            <p className="text-stone-700 leading-relaxed mt-0.5">{recipe.pairing}</p>
          </div>
        </div>
      )}

      {/* Tips and Curiosity Footer */}
      <div className="p-5 md:p-6 bg-[#faf9f5] border-t border-stone-200/80 space-y-3">
        {recipe.tip && (
          <div className="flex items-start gap-3 p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl text-xs md:text-sm text-emerald-950">
            <Lightbulb className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold text-emerald-900 mb-0.5">
                Segredo de Cozinha:
              </strong>
              <p className="leading-relaxed text-emerald-900/90">{recipe.tip}</p>
            </div>
          </div>
        )}

        {recipe.curiosity && (
          <div className="flex items-start gap-3 p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-xs md:text-sm text-amber-950">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-semibold text-amber-900 mb-0.5">
                Curiosidade da Fruta:
              </strong>
              <p className="leading-relaxed text-amber-900/90">{recipe.curiosity}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
