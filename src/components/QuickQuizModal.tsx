import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ChapterQuiz, QuizQuestion, QuizOption } from '../types';
import { CHAPTER_QUIZZES } from '../data/quizzesData';
import { BADGES_DATA } from '../data/badgesData';
import { CheckCircle2, XCircle, Award, ArrowRight, RotateCcw, X, Sparkles, HelpCircle } from 'lucide-react';
import { playOptionSelectSound, playSuccessChime, playBadgeUnlockSound } from '../utils/soundEffects';

interface QuickQuizModalProps {
  quizId: string;
  onClose: () => void;
  onQuizCompleted: (quizId: string, scorePercentage: number, badgeId?: string) => void;
}

export const QuickQuizModal: React.FC<QuickQuizModalProps> = ({
  quizId,
  onClose,
  onQuizCompleted
}) => {
  const quiz: ChapterQuiz | undefined = CHAPTER_QUIZZES[quizId];
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  if (!quiz) return null;

  const currentQuestion: QuizQuestion = quiz.questions[currentQuestionIdx];
  const totalQuestions = quiz.questions.length;
  const currentSelected = selectedOptions[currentQuestionIdx];

  const handleSelectOption = (option: QuizOption) => {
    if (showExplanation) return; // Prevent changing after confirmed
    playOptionSelectSound();
    setSelectedOptions(prev => ({
      ...prev,
      [currentQuestionIdx]: option.id
    }));
    setShowExplanation(true);

    if (option.isCorrect) {
      playSuccessChime();
    }
  };

  const handleNext = () => {
    playOptionSelectSound();
    if (currentQuestionIdx < totalQuestions - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setShowExplanation(false);
    } else {
      // Calculate final score
      let correctCount = 0;
      quiz.questions.forEach((q, idx) => {
        const selId = selectedOptions[idx];
        const opt = q.options.find(o => o.id === selId);
        if (opt?.isCorrect) correctCount++;
      });
      const scorePct = Math.round((correctCount / totalQuestions) * 100);
      setIsFinished(true);

      // Trigger confetti & badge unlock sound!
      if (scorePct >= 50) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
        playBadgeUnlockSound();
      }

      onQuizCompleted(quiz.id, scorePct, quiz.badgeRewardId);
    }
  };

  const handleRetry = () => {
    setSelectedOptions({});
    setCurrentQuestionIdx(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  const rewardBadge = BADGES_DATA.find(b => b.id === quiz.badgeRewardId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white border border-stone-200 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-4 md:p-5 bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-emerald-700/80 rounded-lg">
              <HelpCircle className="w-5 h-5 text-emerald-200" />
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-200 font-semibold block">
                Validação de Aprendizagem (LXD)
              </span>
              <h3 className="font-serif font-bold text-base md:text-lg text-white">
                {quiz.chapterTitle}
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

        {/* Modal Body */}
        <div className="p-5 md:p-6 overflow-y-auto flex-1 space-y-5">
          {!isFinished ? (
            <>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-100">
                <span>Questão {currentQuestionIdx + 1} de {totalQuestions}</span>
                <div className="w-32 bg-stone-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIdx + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-stone-900 text-base md:text-lg leading-snug">
                  {currentQuestion.question}
                </h4>
                {currentQuestion.context && (
                  <p className="text-xs text-stone-500 italic">
                    {currentQuestion.context}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQuestion.options.map(opt => {
                  const isSelected = currentSelected === opt.id;
                  let optStyle = 'bg-[#faf9f6] border-stone-200 text-stone-800 hover:bg-stone-100/80';

                  if (showExplanation) {
                    if (opt.isCorrect) {
                      optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20';
                    } else if (isSelected && !opt.isCorrect) {
                      optStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400/20';
                    } else {
                      optStyle = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950';
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt)}
                      disabled={showExplanation}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs md:text-sm font-medium transition-all flex items-start justify-between gap-3 ${optStyle}`}
                    >
                      <span className="leading-relaxed">{opt.text}</span>
                      {showExplanation && (
                        opt.isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : isSelected ? (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        ) : null
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback / Educational Explanation */}
              {showExplanation && (
                <div className="p-3.5 bg-stone-50 border border-stone-200/90 rounded-xl text-xs md:text-sm animate-in fade-in duration-200">
                  <div className="flex items-center gap-1.5 font-bold text-stone-800 mb-1">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Fixação Pedagógica LXD:</span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    {currentQuestion.options.find(o => o.id === currentSelected)?.explanation ||
                      currentQuestion.options.find(o => o.isCorrect)?.explanation}
                  </p>
                </div>
              )}
            </>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 ring-8 ring-emerald-50">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-stone-900 text-xl md:text-2xl">
                  Aprendizado Validado!
                </h4>
                <p className="text-sm text-stone-600">
                  Você completou a validação de retenção deste capítulo com sucesso.
                </p>
              </div>

              {/* Reward Badge Highlight */}
              {rewardBadge && (
                <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-xl text-left flex items-center gap-3.5">
                  <span className="p-3 bg-amber-500 text-white rounded-xl shadow-xs">
                    <Award className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                      Badge Conquistada!
                    </span>
                    <strong className="font-serif text-base text-stone-900 block">
                      {rewardBadge.title}
                    </strong>
                    <p className="text-xs text-stone-600 mt-0.5">
                      {rewardBadge.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
          {!isFinished ? (
            <>
              <span className="text-xs text-stone-500">
                {showExplanation ? 'Pronto para continuar' : 'Selecione uma alternativa'}
              </span>
              <button
                onClick={handleNext}
                disabled={!showExplanation}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white text-xs md:text-sm font-semibold rounded-xl transition-all"
              >
                <span>{currentQuestionIdx < totalQuestions - 1 ? 'Próxima Questão' : 'Finalizar & Resgatar Badge'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-between gap-3">
              <button
                onClick={handleRetry}
                className="flex items-center gap-1.5 px-3 py-2 border border-stone-300 hover:bg-white text-stone-700 text-xs font-medium rounded-xl transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Tentar Novamente</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs md:text-sm font-semibold rounded-xl transition-colors shadow-xs"
              >
                Retornar ao Ebook
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
