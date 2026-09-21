import React from 'react';
import { Badge } from '../types';
import { BADGES_DATA } from '../data/badgesData';
import {
  Award,
  Compass,
  TreePine,
  Landmark,
  FlaskConical,
  UtensilsCrossed,
  HeartHandshake,
  Sparkles,
  Lock,
  CheckCircle,
  X
} from 'lucide-react';

interface BadgesModalProps {
  unlockedBadgeIds: string[];
  onClose: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Compass,
  TreePine,
  Landmark,
  FlaskConical,
  UtensilsCrossed,
  HeartHandshake,
  Sparkles,
  Award
};

export const BadgesModal: React.FC<BadgesModalProps> = ({ unlockedBadgeIds, onClose }) => {
  const totalBadges = BADGES_DATA.length;
  const unlockedCount = unlockedBadgeIds.length;
  const percentage = Math.round((unlockedCount / totalBadges) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white border border-stone-200 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-amber-400 text-stone-900 rounded-xl shadow-md">
              <Award className="w-6 h-6" />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                Gamificação & Retenção LXD
              </span>
              <h3 className="font-serif font-bold text-lg md:text-xl text-white">
                Galeria de Conquistas & Insígnias
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Level Progression Banner */}
        <div className="p-4 md:p-5 bg-[#faf8f3] border-b border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <div className="flex items-center justify-between sm:justify-start gap-3">
              <span className="text-xs font-semibold text-stone-700">
                Progresso Geral de Maestria:
              </span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                {unlockedCount} de {totalBadges} Badges ({percentage}%)
              </span>
            </div>
            <div className="w-full sm:w-72 bg-stone-200 rounded-full h-2.5 mt-2 overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="text-xs text-stone-500 text-center sm:text-right">
            {unlockedCount === totalBadges ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Mestre Supremo do Cambuci!
              </span>
            ) : (
              <span>Leia os capítulos e responda os micro-quizzes para desbloquear todas as insígnias.</span>
            )}
          </div>
        </div>

        {/* Badges Grid */}
        <div className="p-5 md:p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BADGES_DATA.map(badge => {
            const isUnlocked = unlockedBadgeIds.includes(badge.id);
            const IconComponent = ICON_MAP[badge.iconName] || Award;

            return (
              <div
                key={badge.id}
                id={`badge-card-${badge.id}`}
                className={`p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-white border-amber-300 ring-2 ring-amber-400/20 shadow-xs'
                    : 'bg-stone-50/80 border-stone-200/80 opacity-60'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                    isUnlocked
                      ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-stone-900 ring-2 ring-amber-300'
                      : 'bg-stone-200 text-stone-400'
                  }`}
                >
                  {isUnlocked ? (
                    <IconComponent className="w-6 h-6" />
                  ) : (
                    <Lock className="w-5 h-5 text-stone-400" />
                  )}
                </div>

                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500">
                      {badge.category}
                    </span>
                    {isUnlocked && (
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/60">
                        Conquistada
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-snug">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs md:text-sm font-semibold rounded-xl transition-colors"
          >
            Fechar Galeria
          </button>
        </div>
      </div>
    </div>
  );
};
