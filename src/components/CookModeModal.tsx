import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Clock,
  ChefHat,
  Sparkles,
  Volume2,
  VolumeX,
  Wine
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSuccessChime, playBadgeUnlockSound, playOptionSelectSound } from '../utils/soundEffects';

interface CookModeModalProps {
  recipe: Recipe;
  servings: number;
  onClose: () => void;
  onFinishRecipe: (recipeId: string) => void;
}

export const CookModeModal: React.FC<CookModeModalProps> = ({
  recipe,
  servings,
  onClose,
  onFinishRecipe
}) => {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  // Built-in Kitchen Timer
  const [timerSeconds, setTimerSeconds] = useState<number>(recipe.cookTimeMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const scaleFactor = servings / recipe.defaultServings;

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      if (soundEnabled) {
        playBadgeUnlockSound();
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds, soundEnabled]);

  const toggleTimer = () => {
    playOptionSelectSound();
    setIsTimerRunning(prev => !prev);
  };

  const resetTimer = (minutes: number = recipe.cookTimeMinutes) => {
    playOptionSelectSound();
    setIsTimerRunning(false);
    setTimerSeconds(minutes * 60);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleNextStep = () => {
    playOptionSelectSound();
    setCompletedSteps(prev => ({ ...prev, [currentStepIdx]: true }));
    if (currentStepIdx < recipe.steps.length - 1) {
      setCurrentStepIdx(prev => prev + 1);
    } else {
      // Finished all steps!
      playSuccessChime();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      onFinishRecipe(recipe.id);
    }
  };

  const handlePrevStep = () => {
    playOptionSelectSound();
    if (currentStepIdx > 0) {
      setCurrentStepIdx(prev => prev - 1);
    }
  };

  const formatAmount = (amount?: number) => {
    if (amount === undefined) return '';
    const scaled = amount * scaleFactor;
    return Number.isInteger(scaled) ? scaled.toString() : scaled.toFixed(1).replace('.0', '');
  };

  const isLastStep = currentStepIdx === recipe.steps.length - 1;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-[#171a17] text-stone-100 rounded-3xl w-full max-w-4xl max-h-[95vh] flex flex-col overflow-hidden shadow-2xl border border-stone-700/60 ring-1 ring-emerald-500/20">
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 bg-[#1f2420] border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Modo Cozinha Interativo
                </span>
                <span className="text-xs text-stone-400">· {servings} porções</span>
              </div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-white line-clamp-1">
                {recipe.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(prev => !prev)}
              title="Ativar/Desativar som do timer"
              aria-label="Ativar/Desativar som do timer"
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
              title="Fechar modo cozinha"
              aria-label="Fechar modo cozinha"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Progress Dots */}
        <div className="bg-stone-900 px-6 py-2 border-b border-stone-800 flex items-center justify-between text-xs">
          <span className="text-stone-400 font-medium">
            Passo {currentStepIdx + 1} de {recipe.steps.length}
          </span>
          <div className="flex items-center gap-1.5">
            {recipe.steps.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentStepIdx(idx)}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  idx === currentStepIdx
                    ? 'w-7 bg-amber-400'
                    : completedSteps[idx]
                    ? 'w-2 bg-emerald-500'
                    : 'w-2 bg-stone-700 hover:bg-stone-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Body: Active Step Display + Timer */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Active Step Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#202722] to-[#171d19] border border-stone-700 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                Instrução do Chef
              </span>
              {completedSteps[currentStepIdx] && (
                <span className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Concluído
                </span>
              )}
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed font-normal">
              {recipe.steps[currentStepIdx]}
            </p>

            {/* Chef Tip if relevant */}
            {currentStepIdx === 0 && recipe.tip && (
              <div className="p-3.5 bg-emerald-950/40 border border-emerald-800/40 rounded-2xl text-xs sm:text-sm text-emerald-200">
                <strong>💡 Dica de Ouro:</strong> {recipe.tip}
              </div>
            )}
          </div>

          {/* Quick Kitchen Companion Timer */}
          <div className="p-4 sm:p-6 bg-[#1a201c] rounded-2xl border border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-stone-800 text-amber-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">
                  Timer da Cozinha
                </span>
                <span className="font-mono font-bold text-2xl sm:text-3xl text-white tracking-widest">
                  {formatTime(timerSeconds)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTimer}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all ${
                  isTimerRunning
                    ? 'bg-amber-500 hover:bg-amber-400 text-stone-950'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {isTimerRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pausar
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Iniciar Timer
                  </>
                )}
              </button>

              <button
                onClick={() => resetTimer(recipe.cookTimeMinutes)}
                title="Reiniciar Timer"
                aria-label="Reiniciar Timer"
                className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Quick Preset Buttons */}
              <div className="hidden sm:flex items-center gap-1 border-l border-stone-700 pl-2">
                {[5, 10, 20].map(mins => (
                  <button
                    key={mins}
                    onClick={() => resetTimer(mins)}
                    className="px-2.5 py-1 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg"
                  >
                    {mins}m
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Ingredients Reference for this recipe */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Ingredientes para {servings} porções:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {recipe.ingredients.map((ing, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800/80 flex items-center justify-between"
                >
                  <span className="text-stone-300">{ing.item}</span>
                  {ing.amount !== undefined && (
                    <span className="font-bold text-amber-300">
                      {formatAmount(ing.amount)} {ing.unit}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pairing Recommendation */}
          {recipe.pairing && (
            <div className="p-4 bg-stone-900/90 border border-stone-800 rounded-2xl flex items-center gap-3 text-xs text-stone-300">
              <span className="p-2 bg-rose-950/50 text-rose-300 rounded-xl border border-rose-800/30">
                <Wine className="w-4 h-4" />
              </span>
              <div>
                <strong className="text-white block font-serif">Harmonização Sugerida para a Mesa:</strong>
                <span>{recipe.pairing}</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-4 sm:p-5 bg-[#1f2420] border-t border-stone-800 flex items-center justify-between gap-3">
          <button
            onClick={handlePrevStep}
            disabled={currentStepIdx === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-700 text-stone-300 hover:text-white hover:bg-stone-800 disabled:opacity-30 disabled:pointer-events-none text-xs sm:text-sm font-semibold transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Passo Anterior</span>
          </button>

          <button
            onClick={handleNextStep}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
          >
            <span>{isLastStep ? 'Finalizar Receita & Comemorar!' : 'Concluir Passo & Avançar'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
