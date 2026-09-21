import React from 'react';
import {
  UtensilsCrossed,
  BookOpen,
  Compass,
  Wine,
  Award,
  ShoppingBag,
  Type,
  Sun,
  Moon,
  Sparkles,
  Flame
} from 'lucide-react';
import { ReaderSettings } from '../types';
import { playOptionSelectSound } from '../utils/soundEffects';

interface NavbarProps {
  currentView: 'recipes' | 'reader' | 'map' | 'lab';
  onViewChange: (view: 'recipes' | 'reader' | 'map' | 'lab') => void;
  unlockedBadgesCount: number;
  totalBadgesCount: number;
  readingProgressPct: number;
  onOpenBadges: () => void;
  onOpenShoppingList: () => void;
  shoppingListCount: number;
  settings: ReaderSettings;
  onUpdateSettings: (settings: Partial<ReaderSettings>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  unlockedBadgesCount,
  totalBadgesCount,
  readingProgressPct,
  onOpenBadges,
  onOpenShoppingList,
  shoppingListCount,
  settings,
  onUpdateSettings
}) => {
  const handleView = (v: 'recipes' | 'reader' | 'map' | 'lab') => {
    playOptionSelectSound();
    onViewChange(v);
  };

  const cycleFontSize = () => {
    playOptionSelectSound();
    const sizes: ReaderSettings['fontSize'][] = ['sm', 'base', 'lg', 'xl'];
    const currentIdx = sizes.indexOf(settings.fontSize);
    const nextSize = sizes[(currentIdx + 1) % sizes.length];
    onUpdateSettings({ fontSize: nextSize });
  };

  const cycleTheme = () => {
    playOptionSelectSound();
    const themes: ReaderSettings['theme'][] = ['paper', 'clean', 'night'];
    const currentIdx = themes.indexOf(settings.theme);
    const nextTheme = themes[(currentIdx + 1) % themes.length];
    onUpdateSettings({ theme: nextTheme });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbfaf6]/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs transition-colors">
      {/* Top micro progress bar */}
      <div className="w-full bg-stone-200/60 h-1">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-emerald-600 transition-all duration-300"
          style={{ width: `${readingProgressPct}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-2">
        {/* Brand & Title */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleView('recipes')}
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 text-amber-400 flex items-center justify-center font-serif font-bold text-xl shadow-sm ring-1 ring-emerald-700/40">
            <Flame className="w-5 h-5 fill-amber-400 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800">
                Livro de Receitas Interativo
              </span>
              <span className="text-[10px] text-amber-600 font-semibold hidden sm:inline">
                · Edição Gourmet
              </span>
            </div>
            <h1 className="font-serif font-bold text-stone-900 text-lg md:text-xl leading-tight tracking-tight">
              Sabores do Cambuci
            </h1>
          </div>
        </div>

        {/* Center Commercial Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-100/90 p-1 rounded-2xl border border-stone-200/80 text-xs font-semibold">
          <button
            onClick={() => handleView('recipes')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
              currentView === 'recipes'
                ? 'bg-white text-stone-950 shadow-xs font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4 text-orange-600" />
            <span>Caderno de Receitas (13)</span>
          </button>

          <button
            onClick={() => handleView('reader')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
              currentView === 'reader'
                ? 'bg-white text-stone-950 shadow-xs font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Histórias & Segredos</span>
          </button>

          <button
            onClick={() => handleView('map')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
              currentView === 'map'
                ? 'bg-white text-stone-950 shadow-xs font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Compass className="w-4 h-4 text-teal-700" />
            <span>Mapa de Sabores</span>
          </button>

          <button
            onClick={() => handleView('lab')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all ${
              currentView === 'lab'
                ? 'bg-white text-stone-950 shadow-xs font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Wine className="w-4 h-4 text-rose-700" />
            <span>Harmonização & Guia pH</span>
          </button>
        </nav>

        {/* Right Tools: Shopping List + Badges + Reading Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Shopping List Button */}
          <button
            onClick={onOpenShoppingList}
            title="Abrir Lista de Compras da Feira"
            aria-label="Lista de Compras"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-950 border border-orange-200 transition-all font-semibold text-xs shadow-2xs"
          >
            <ShoppingBag className="w-4 h-4 text-orange-600" />
            <span className="hidden sm:inline">Compras</span>
            {shoppingListCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-orange-600 text-white font-mono text-[10px] flex items-center justify-center font-bold">
                {shoppingListCount}
              </span>
            )}
          </button>

          {/* Badges Trophy Button */}
          <button
            onClick={onOpenBadges}
            title="Ver Conquistas & Insígnias do Chef"
            aria-label="Ver Conquistas do Chef"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 text-amber-900 border border-amber-200/80 transition-all font-semibold text-xs shadow-2xs"
          >
            <Award className="w-4 h-4 text-amber-600 fill-amber-500/20" />
            <span className="font-mono font-bold">{unlockedBadgesCount}/{totalBadgesCount}</span>
            <span className="hidden sm:inline">Conquistas</span>
          </button>

          {/* Typography / Theme adjustments */}
          <div className="flex items-center gap-0.5 bg-stone-100 p-0.5 rounded-xl border border-stone-200">
            <button
              onClick={cycleFontSize}
              title={`Ajustar Tamanho da Fonte (Atual: ${settings.fontSize.toUpperCase()})`}
              aria-label="Ajustar Tamanho da Fonte"
              className="p-1.5 hover:bg-white text-stone-700 rounded-lg text-xs font-bold transition-colors flex items-center"
            >
              <Type className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={cycleTheme}
              title="Trocar Modo de Cor"
              aria-label="Trocar Modo de Cor"
              className="p-1.5 hover:bg-white text-stone-700 rounded-lg transition-colors"
            >
              {settings.theme === 'night' ? (
                <Moon className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-stone-200/70 bg-stone-50/90 px-2 py-1.5 text-xs font-semibold">
        <button
          onClick={() => handleView('recipes')}
          className={`flex items-center gap-1 px-3 py-1 rounded-xl ${
            currentView === 'recipes' ? 'bg-white text-orange-900 shadow-2xs font-bold' : 'text-stone-600'
          }`}
        >
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Receitas</span>
        </button>
        <button
          onClick={() => handleView('reader')}
          className={`flex items-center gap-1 px-3 py-1 rounded-xl ${
            currentView === 'reader' ? 'bg-white text-emerald-900 shadow-2xs font-bold' : 'text-stone-600'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Histórias</span>
        </button>
        <button
          onClick={() => handleView('map')}
          className={`flex items-center gap-1 px-3 py-1 rounded-xl ${
            currentView === 'map' ? 'bg-white text-teal-900 shadow-2xs font-bold' : 'text-stone-600'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Sabores</span>
        </button>
        <button
          onClick={() => handleView('lab')}
          className={`flex items-center gap-1 px-3 py-1 rounded-xl ${
            currentView === 'lab' ? 'bg-white text-rose-900 shadow-2xs font-bold' : 'text-stone-600'
          }`}
        >
          <Wine className="w-3.5 h-3.5" />
          <span>Harmonia</span>
        </button>
      </div>
    </header>
  );
};
