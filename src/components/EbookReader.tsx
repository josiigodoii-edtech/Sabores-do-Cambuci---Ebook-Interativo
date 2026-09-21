import React, { useState } from 'react';
import { Chapter, ReaderSettings, Recipe } from '../types';
import { CHAPTERS_DATA, BOOK_METADATA } from '../data/bookContent';
import { RecipeInteractiveCard } from './RecipeInteractiveCard';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Bookmark,
  CheckCircle2,
  Clock,
  Sparkles,
  Quote,
  AlertTriangle,
  Lightbulb,
  Info,
  Edit3,
  Check,
  Share2,
  Award,
  Layers
} from 'lucide-react';
import { playOptionSelectSound, playPageTurnSound, playSuccessChime } from '../utils/soundEffects';

interface EbookReaderProps {
  currentChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  onOpenQuiz: (quizId: string) => void;
  completedQuizzes: Record<string, number>;
  cookedRecipes: string[];
  onToggleCookedRecipe: (recipeId: string) => void;
  bookmarkedSections: string[];
  onToggleBookmark: (sectionId: string) => void;
  notes: Record<string, string>;
  onSaveNote: (sectionId: string, noteText: string) => void;
  settings: ReaderSettings;
  onExploreConceptMap: () => void;
  onOpenCookMode?: (recipe: Recipe, servings: number) => void;
}

const CALLOUT_ICONS = {
  curiosity: Info,
  tip: Lightbulb,
  quote: Quote,
  'field-note': Clock,
  nutrition: Sparkles,
  alert: AlertTriangle
};

const CALLOUT_STYLES = {
  curiosity: 'bg-amber-50/80 border-amber-300 text-amber-950',
  tip: 'bg-emerald-50/80 border-emerald-300 text-emerald-950',
  quote: 'bg-stone-100/90 border-stone-400 text-stone-900 italic font-serif',
  'field-note': 'bg-teal-50/80 border-teal-300 text-teal-950',
  nutrition: 'bg-cyan-50/80 border-cyan-300 text-cyan-950',
  alert: 'bg-rose-50/80 border-rose-300 text-rose-950'
};

export const EbookReader: React.FC<EbookReaderProps> = ({
  currentChapterId,
  onSelectChapter,
  onOpenQuiz,
  completedQuizzes,
  cookedRecipes,
  onToggleCookedRecipe,
  bookmarkedSections,
  onToggleBookmark,
  notes,
  onSaveNote,
  settings,
  onExploreConceptMap,
  onOpenCookMode
}) => {
  const currentChapterIndex = CHAPTERS_DATA.findIndex(c => c.id === currentChapterId);
  const chapter: Chapter = CHAPTERS_DATA[currentChapterIndex >= 0 ? currentChapterIndex : 0];

  const [activeRecipeFilter, setActiveRecipeFilter] = useState<'all' | 'salgado' | 'doce' | 'bebida' | 'panificacao'>('all');
  const [editingNoteSectionId, setEditingNoteSectionId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState<string>('');

  const prevChapter = currentChapterIndex > 0 ? CHAPTERS_DATA[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < CHAPTERS_DATA.length - 1 ? CHAPTERS_DATA[currentChapterIndex + 1] : null;

  const handleChapterNav = (targetId: string) => {
    playPageTurnSound();
    onSelectChapter(targetId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startEditNote = (sectionId: string) => {
    playOptionSelectSound();
    setEditingNoteSectionId(sectionId);
    setNoteDraft(notes[sectionId] || '');
  };

  const handleSaveNote = (sectionId: string) => {
    playSuccessChime();
    onSaveNote(sectionId, noteDraft);
    setEditingNoteSectionId(null);
  };

  // Font scale mappings
  const fontSizeClasses = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
    xl: 'text-xl leading-relaxed'
  }[settings.fontSize];

  // Theme style classes
  const themeClasses = {
    paper: 'bg-[#fbfaf6] text-stone-900 border-stone-200',
    clean: 'bg-white text-stone-900 border-stone-200',
    night: 'bg-[#151c17] text-[#e3ece6] border-emerald-900/40'
  }[settings.theme];

  const contentBoxTheme = {
    paper: 'bg-white/80 border-stone-200/90',
    clean: 'bg-white border-stone-200',
    night: 'bg-[#1b241e] border-emerald-900/40 text-stone-200'
  }[settings.theme];

  const isQuizCompleted = chapter.quizId && completedQuizzes[chapter.quizId] !== undefined;

  const filteredRecipes = (chapter.recipes || []).filter(r =>
    activeRecipeFilter === 'all' ? true : r.category === activeRecipeFilter
  );

  return (
    <div className={`transition-colors duration-300 ${themeClasses} pb-16`}>
      {/* Chapter Carousel / Navigation Bar */}
      <div className="border-b border-stone-200/80 bg-stone-100/50 py-3 px-4 sticky top-[49px] z-30 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 overflow-x-auto pb-1 text-xs">
          {CHAPTERS_DATA.map((ch, idx) => {
            const isActive = ch.id === chapter.id;
            const isFinished = ch.quizId && completedQuizzes[ch.quizId] !== undefined;

            return (
              <button
                key={ch.id}
                onClick={() => handleChapterNav(ch.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : isFinished
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {isFinished && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                <span>
                  {idx === 0 ? 'Apresentação' : `Capítulo ${idx}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* Editorial Chapter Header */}
        <div className="text-center space-y-3 pb-8 border-b border-stone-200/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-semibold tracking-wide uppercase">
            <span>{chapter.number === 0 ? 'Abertura' : `Módulo Didático ${chapter.number}`}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {chapter.readTimeMinutes} min de leitura
            </span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-stone-900 leading-tight">
            {chapter.title}
          </h2>

          {chapter.subtitle && (
            <p className="font-serif italic text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              {chapter.subtitle}
            </p>
          )}

          {/* Institutional Credit Tag */}
          <div className="text-xs text-stone-400 pt-2">
            <span>{BOOK_METADATA.authors}</span> · <span>{BOOK_METADATA.location}</span>
          </div>
        </div>

        {/* Chapter Sections */}
        <div className="space-y-8">
          {chapter.sections.map(section => {
            const isBookmarked = bookmarkedSections.includes(section.id);
            const sectionNote = notes[section.id];
            const isEditingNote = editingNoteSectionId === section.id;

            return (
              <section
                key={section.id}
                id={`section-${section.id}`}
                className={`p-6 md:p-8 rounded-2xl border ${contentBoxTheme} shadow-2xs space-y-5 transition-all`}
              >
                {/* Section Title & Tools */}
                <div className="flex items-start justify-between gap-4 border-b border-stone-200/60 pb-3">
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-stone-900">
                    {section.title}
                  </h3>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        playOptionSelectSound();
                        onToggleBookmark(section.id);
                      }}
                      title={isBookmarked ? 'Remover dos favoritos' : 'Favoritar este trecho'}
                      aria-label="Favoritar este trecho"
                      className={`p-1.5 rounded-lg border text-xs transition-colors ${
                        isBookmarked
                          ? 'bg-amber-100 border-amber-300 text-amber-800 font-semibold'
                          : 'bg-white border-stone-200 text-stone-500 hover:bg-stone-50'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-600 text-amber-600' : ''}`} />
                    </button>

                    <button
                      onClick={() => startEditNote(section.id)}
                      title="Adicionar nota pessoal de estudo"
                      aria-label="Adicionar nota pessoal"
                      className="p-1.5 rounded-lg border bg-white border-stone-200 text-stone-500 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Section Paragraphs */}
                <div className={`space-y-4 font-serif ${fontSizeClasses} text-stone-800`}>
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Callout Box if present */}
                {section.callout && (
                  <aside
                    className={`p-4 md:p-5 rounded-xl border ${
                      CALLOUT_STYLES[section.callout.type] || CALLOUT_STYLES.tip
                    } space-y-1.5`}
                  >
                    <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                      {React.createElement(CALLOUT_ICONS[section.callout.type] || Lightbulb, {
                        className: 'w-4 h-4 shrink-0'
                      })}
                      <span>{section.callout.title}</span>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      {section.callout.text}
                    </p>
                  </aside>
                )}

                {/* Student / Reader Personal Study Note */}
                {(sectionNote || isEditingNote) && (
                  <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2 text-xs">
                    <div className="flex items-center justify-between font-bold text-amber-900">
                      <span className="flex items-center gap-1.5">
                        <Edit3 className="w-3.5 h-3.5" />
                        Minha Nota de Aprendizado LXD:
                      </span>
                      {!isEditingNote && (
                        <button
                          onClick={() => startEditNote(section.id)}
                          className="text-amber-800 hover:underline"
                        >
                          Editar
                        </button>
                      )}
                    </div>

                    {isEditingNote ? (
                      <div className="space-y-2">
                        <textarea
                          value={noteDraft}
                          onChange={(e) => setNoteDraft(e.target.value)}
                          placeholder="Digite aqui suas reflexões, ideias de receitas ou pontos chave..."
                          className="w-full p-2.5 bg-white border border-amber-300 rounded-lg text-stone-900 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                          rows={3}
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setEditingNoteSectionId(null)}
                            className="px-3 py-1 bg-white border border-stone-300 rounded-lg text-stone-600 hover:bg-stone-50"
                          >
                            Cancelar
                          </button>
                          <button
                            onClick={() => handleSaveNote(section.id)}
                            className="px-3 py-1 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 font-semibold"
                          >
                            Salvar Nota
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-stone-800 italic">
                        "{sectionNote}"
                      </p>
                    )}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* If Chapter 4: Render Interactive Recipes Section */}
        {chapter.recipes && chapter.recipes.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-stone-200">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-serif font-bold text-2xl text-stone-900">
                  Caderno de 13 Receitas Didáticas
                </h3>
                <p className="text-xs md:text-sm text-stone-600">
                  Cada receita possui calculadora interativa de porções e checklist de preparo.
                </p>
              </div>

              {/* Recipe Category Filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold">
                {(['all', 'salgado', 'doce', 'bebida', 'panificacao'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      playOptionSelectSound();
                      setActiveRecipeFilter(cat);
                    }}
                    className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                      activeRecipeFilter === cat
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {cat === 'all' ? 'Todas' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {filteredRecipes.map(recipe => (
                <RecipeInteractiveCard
                  key={recipe.id}
                  recipe={recipe}
                  isCooked={cookedRecipes.includes(recipe.id)}
                  onToggleCooked={onToggleCookedRecipe}
                  onOpenCookMode={onOpenCookMode}
                />
              ))}
            </div>
          </div>
        )}

        {/* Interactive LXD Quiz Validation Block */}
        {chapter.quizId && (
          <div className="p-6 md:p-8 bg-gradient-to-br from-emerald-800 to-teal-950 rounded-2xl text-white shadow-lg space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest font-semibold text-emerald-300 block">
                  Learning Experience Design (LXD)
                </span>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-white">
                  Validação do Aprendizado
                </h3>
                <p className="text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                  Responda ao quiz rápido de retenção para fixar os conceitos científicos e culturais do capítulo e desbloquear sua insígnia oficial!
                </p>
              </div>

              <div className="shrink-0 hidden sm:block p-3 bg-white/10 rounded-2xl border border-white/20">
                <HelpCircle className="w-8 h-8 text-emerald-200" />
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-emerald-700/60">
              <div className="text-xs text-emerald-200 flex items-center gap-1.5">
                {isQuizCompleted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Concluído! Nota: {completedQuizzes[chapter.quizId]}%</span>
                  </>
                ) : (
                  <>
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>Recompensa: Badge de Conquista Exclusiva</span>
                  </>
                )}
              </div>

              <button
                onClick={() => {
                  playOptionSelectSound();
                  if (chapter.quizId) onOpenQuiz(chapter.quizId);
                }}
                id={`btn-start-quiz-${chapter.id}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs md:text-sm rounded-xl shadow-sm transition-transform hover:scale-102"
              >
                <span>{isQuizCompleted ? 'Refazer Quiz de Retenção' : 'Iniciar Quiz Rápido'}</span>
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Concept Map Shortcut Banner */}
        <div className="p-4 bg-stone-100/80 border border-stone-200 rounded-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-teal-100 text-teal-800 rounded-lg">
              <Layers className="w-5 h-5" />
            </span>
            <div className="text-xs md:text-sm">
              <strong className="block text-stone-900">Quer visualizar as conexões conceituais deste capítulo?</strong>
              <span className="text-stone-600">Abra o Mapa Conceitual Dinâmico para ver a teia ecológica e gastronômica.</span>
            </div>
          </div>
          <button
            onClick={onExploreConceptMap}
            className="shrink-0 px-3.5 py-1.5 bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 rounded-lg text-xs font-semibold transition-colors"
          >
            Abrir Mapa
          </button>
        </div>

        {/* Bottom Pagination Controls */}
        <div className="pt-6 border-t border-stone-200 flex items-center justify-between gap-4">
          {prevChapter ? (
            <button
              onClick={() => handleChapterNav(prevChapter.id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-white text-stone-700 text-xs md:text-sm font-semibold transition-all hover:-translate-x-0.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <div className="text-left hidden sm:block">
                <span className="block text-[10px] text-stone-400 font-normal uppercase">Anterior</span>
                <span>{prevChapter.title}</span>
              </div>
              <span className="sm:hidden">Anterior</span>
            </button>
          ) : <div />}

          {nextChapter ? (
            <button
              onClick={() => handleChapterNav(nextChapter.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs md:text-sm font-semibold shadow-sm transition-all hover:translate-x-0.5"
            >
              <div className="text-right hidden sm:block">
                <span className="block text-[10px] text-emerald-200 font-normal uppercase">Próximo</span>
                <span>{nextChapter.title}</span>
              </div>
              <span className="sm:hidden">Próximo Capítulo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="text-xs text-stone-500 font-serif italic text-right">
              Fim do Livro Didático · Irmãs KAMU-SI (2026)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
