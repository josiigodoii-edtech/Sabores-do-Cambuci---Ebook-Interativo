import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CookbookHero } from './components/CookbookHero';
import { CookbookCatalog } from './components/CookbookCatalog';
import { EbookReader } from './components/EbookReader';
import { ConceptMap } from './components/ConceptMap';
import { FlavorSimulator } from './components/FlavorSimulator';
import { HarvestCalendar } from './components/HarvestCalendar';
import { QuickQuizModal } from './components/QuickQuizModal';
import { BadgesModal } from './components/BadgesModal';
import { CookModeModal } from './components/CookModeModal';
import { ShoppingListModal } from './components/ShoppingListModal';
import { ReaderSettings, UserLearningState, Recipe } from './types';
import { CHAPTERS_DATA, RECIPES_DATA } from './data/bookContent';
import { BADGES_DATA } from './data/badgesData';
import { Award, BookOpen, Sparkles } from 'lucide-react';
import { playBadgeUnlockSound } from './utils/soundEffects';

const STORAGE_KEY = 'sabores_cambuci_learning_v2';

const INITIAL_LEARNING_STATE: UserLearningState = {
  completedChapters: ['apresentacao'],
  completedQuizzes: {},
  unlockedBadges: ['badge-iniciante'],
  cookedRecipes: [],
  bookmarkedSections: [],
  notes: {},
  currentChapterId: 'apresentacao'
};

const INITIAL_SETTINGS: ReaderSettings = {
  fontSize: 'base',
  theme: 'paper',
  soundAmbient: false
};

export default function App() {
  const [learningState, setLearningState] = useState<UserLearningState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore fallback
    }
    return INITIAL_LEARNING_STATE;
  });

  const [settings, setSettings] = useState<ReaderSettings>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_settings`);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore fallback
    }
    return INITIAL_SETTINGS;
  });

  // Default view is 'recipes' for immediate commercial, mouth-watering cookbook showcase!
  const [currentView, setCurrentView] = useState<'recipes' | 'reader' | 'map' | 'lab'>('recipes');

  // Modals state
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState<boolean>(false);
  const [isShoppingListOpen, setIsShoppingListOpen] = useState<boolean>(false);
  const [cookingModalRecipe, setCookingModalRecipe] = useState<{ recipe: Recipe; servings: number } | null>(null);

  const [newlyUnlockedBadgeTitle, setNewlyUnlockedBadgeTitle] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learningState));
    } catch {
      // Ignore
    }
  }, [learningState]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_settings`, JSON.stringify(settings));
    } catch {
      // Ignore
    }
  }, [settings]);

  // Overall Progress Calculation
  const totalChapters = CHAPTERS_DATA.length;
  const readChaptersCount = learningState.completedChapters.length;
  const totalQuizzes = Object.keys(CHAPTERS_DATA.map(c => c.quizId).filter(Boolean)).length;
  const passedQuizzesCount = Object.keys(learningState.completedQuizzes).length;
  const readingProgressPct = Math.min(
    100,
    Math.round(
      ((readChaptersCount / totalChapters) * 0.5 +
        (passedQuizzesCount / Math.max(1, totalQuizzes)) * 0.3 +
        (learningState.cookedRecipes.length / Math.max(1, RECIPES_DATA.length)) * 0.2) *
        100
    )
  );

  const handleSelectChapter = (chapterId: string) => {
    setLearningState(prev => {
      const completed = prev.completedChapters.includes(chapterId)
        ? prev.completedChapters
        : [...prev.completedChapters, chapterId];

      return {
        ...prev,
        currentChapterId: chapterId,
        completedChapters: completed
      };
    });
    setCurrentView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuiz = (quizId: string) => {
    setActiveQuizId(quizId);
  };

  const unlockBadge = (badgeId: string) => {
    setLearningState(prev => {
      if (prev.unlockedBadges.includes(badgeId)) return prev;

      const badge = BADGES_DATA.find(b => b.id === badgeId);
      if (badge) {
        setNewlyUnlockedBadgeTitle(badge.title);
        playBadgeUnlockSound();
        setTimeout(() => setNewlyUnlockedBadgeTitle(null), 5000);
      }

      const nextUnlocked = [...prev.unlockedBadges, badgeId];

      // Check if all other 7 badges unlocked -> trigger Kambuci de Ouro!
      if (nextUnlocked.length >= 7 && !nextUnlocked.includes('badge-mestre-ouro')) {
        nextUnlocked.push('badge-mestre-ouro');
      }

      return {
        ...prev,
        unlockedBadges: nextUnlocked
      };
    });
  };

  const handleQuizCompleted = (quizId: string, score: number, rewardBadgeId?: string) => {
    setLearningState(prev => ({
      ...prev,
      completedQuizzes: {
        ...prev.completedQuizzes,
        [quizId]: score
      }
    }));

    if (rewardBadgeId && score >= 50) {
      unlockBadge(rewardBadgeId);
    }
  };

  const handleToggleCookedRecipe = (recipeId: string) => {
    setLearningState(prev => {
      const isAlready = prev.cookedRecipes.includes(recipeId);
      const updated = isAlready
        ? prev.cookedRecipes.filter(id => id !== recipeId)
        : [...prev.cookedRecipes, recipeId];

      // If user marks first cooked recipe, award "Cozinheiro Prático" badge!
      if (!isAlready && !prev.unlockedBadges.includes('badge-culinario-ativo')) {
        setTimeout(() => unlockBadge('badge-culinario-ativo'), 400);
      }

      return {
        ...prev,
        cookedRecipes: updated
      };
    });
  };

  const handleOpenCookMode = (recipe: Recipe, currentServings?: number) => {
    setCookingModalRecipe({
      recipe,
      servings: currentServings || recipe.defaultServings
    });
  };

  const handleFinishCookMode = (recipeId: string) => {
    handleToggleCookedRecipe(recipeId);
    setCookingModalRecipe(null);
  };

  const handleToggleBookmark = (sectionId: string) => {
    setLearningState(prev => {
      const isMarked = prev.bookmarkedSections.includes(sectionId);
      return {
        ...prev,
        bookmarkedSections: isMarked
          ? prev.bookmarkedSections.filter(id => id !== sectionId)
          : [...prev.bookmarkedSections, sectionId]
      };
    });
  };

  const handleSaveNote = (sectionId: string, text: string) => {
    setLearningState(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [sectionId]: text
      }
    }));
  };

  // Featured spotlight recipe: Costela com glaze de cambuci
  const featuredRecipe = RECIPES_DATA.find(r => r.id === 'costelinha-glaze') || RECIPES_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaf6] text-stone-900 font-sans selection:bg-amber-200">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onViewChange={setCurrentView}
        unlockedBadgesCount={learningState.unlockedBadges.length}
        totalBadgesCount={BADGES_DATA.length}
        readingProgressPct={readingProgressPct}
        onOpenBadges={() => setIsBadgesModalOpen(true)}
        onOpenShoppingList={() => setIsShoppingListOpen(true)}
        shoppingListCount={learningState.cookedRecipes.length}
        settings={settings}
        onUpdateSettings={newSettings => setSettings(prev => ({ ...prev, ...newSettings }))}
      />

      {/* Badge Unlock Celebration Notification Toast */}
      {newlyUnlockedBadgeTitle && (
        <div className="fixed bottom-5 right-5 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-300 ring-4 ring-amber-400/30">
            <span className="p-2 bg-white rounded-xl shadow-xs">
              <Award className="w-6 h-6 text-amber-600" />
            </span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-900 block">
                Nova Conquista Culinária!
              </span>
              <strong className="text-sm font-serif font-bold text-white block">
                {newlyUnlockedBadgeTitle}
              </strong>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {/* VIEW 1: Commercial Interactive Cookbook (Hero + Full Catalog) */}
        {currentView === 'recipes' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
            <CookbookHero
              onNavigateToRecipes={() => {
                const el = document.getElementById('catalog-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onNavigateToReader={() => setCurrentView('reader')}
              onNavigateToMap={() => setCurrentView('map')}
              onOpenShoppingList={() => setIsShoppingListOpen(true)}
              featuredRecipe={featuredRecipe}
              onOpenCookMode={r => handleOpenCookMode(r, r.defaultServings)}
              unlockedBadgesCount={learningState.unlockedBadges.length}
            />

            <div id="catalog-section">
              <CookbookCatalog
                recipes={RECIPES_DATA}
                cookedRecipeIds={learningState.cookedRecipes}
                onToggleCooked={handleToggleCookedRecipe}
                onOpenCookMode={handleOpenCookMode}
              />
            </div>
          </div>
        )}

        {/* VIEW 2: Ebook Reader (Chapters & Stories) */}
        {currentView === 'reader' && (
          <EbookReader
            currentChapterId={learningState.currentChapterId}
            onSelectChapter={handleSelectChapter}
            onOpenQuiz={handleOpenQuiz}
            completedQuizzes={learningState.completedQuizzes}
            cookedRecipes={learningState.cookedRecipes}
            onToggleCookedRecipe={handleToggleCookedRecipe}
            bookmarkedSections={learningState.bookmarkedSections}
            onToggleBookmark={handleToggleBookmark}
            notes={learningState.notes}
            onSaveNote={handleSaveNote}
            settings={settings}
            onExploreConceptMap={() => setCurrentView('map')}
            onOpenCookMode={handleOpenCookMode}
          />
        )}

        {/* VIEW 3: Dynamic Concept Map (Flavor and Ecology Web) */}
        {currentView === 'map' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
            <ConceptMap
              onNavigateToChapter={chapterId => {
                handleSelectChapter(chapterId);
              }}
            />

            {/* Visual Guide Callout */}
            <div className="p-5 bg-emerald-50/80 border border-emerald-200 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Mapa Sensorial & Ecológico
                </span>
                <h4 className="font-serif font-bold text-base md:text-lg text-emerald-950">
                  Como a Floresta se Converte em Sabor na Mesa
                </h4>
                <p className="text-xs md:text-sm text-emerald-900/90 leading-relaxed max-w-2xl">
                  Explore os nós conceituais para entender como o ácido cítrico e os flavonoides do cambuci interagem com carnes, queijos e laticínios da gastronomia paulista.
                </p>
              </div>

              <button
                onClick={() => setCurrentView('recipes')}
                className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs md:text-sm font-semibold rounded-2xl transition-all shadow-xs"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explorar Receitas</span>
              </button>
            </div>
          </div>
        )}

        {/* VIEW 4: Flavor Lab, Chemical Pairing & Fenology */}
        {currentView === 'lab' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
            <FlavorSimulator />
            <HarvestCalendar />
          </div>
        )}
      </main>

      {/* MODALS */}

      {/* 1. Step-by-Step Cook Mode with Kitchen Timer */}
      {cookingModalRecipe && (
        <CookModeModal
          recipe={cookingModalRecipe.recipe}
          servings={cookingModalRecipe.servings}
          onClose={() => setCookingModalRecipe(null)}
          onFinishRecipe={handleFinishCookMode}
        />
      )}

      {/* 2. Feira Shopping List Modal */}
      {isShoppingListOpen && (
        <ShoppingListModal
          recipes={RECIPES_DATA}
          cookedRecipeIds={learningState.cookedRecipes}
          onClose={() => setIsShoppingListOpen(false)}
        />
      )}

      {/* 3. Badges Trophy Showcase */}
      {isBadgesModalOpen && (
        <BadgesModal
          unlockedBadgeIds={learningState.unlockedBadges}
          onClose={() => setIsBadgesModalOpen(false)}
        />
      )}

      {/* 4. Quick LXD Retention Quiz */}
      {activeQuizId && (
        <QuickQuizModal
          quizId={activeQuizId}
          onClose={() => setActiveQuizId(null)}
          onQuizCompleted={handleQuizCompleted}
        />
      )}

      {/* Commercial Gourmet Footer */}
      <footer className="mt-auto border-t border-stone-200 bg-[#f4efe4] py-8 px-4 text-stone-700 text-xs text-center space-y-2">
        <p className="font-serif italic text-stone-900 text-sm font-semibold">
          "Cozinhar é um ato de conhecimento. Saborear o cambuci é um ato de preservação viva."
        </p>
        <p className="text-stone-600">
          Livro de Receitas Interativo · Curadoria: <strong>Irmãs KAMU-SI</strong> · Pesquisa Gastronômica: <strong>ETEC Presidente Vargas (Mogi das Cruzes, SP)</strong>
        </p>
        <div className="flex items-center justify-center gap-4 text-stone-500 pt-1">
          <span>🌿 100% Nativo da Mata Atlântica</span>
          <span>·</span>
          <span>🍯 Alto Tietê & Vale do Paraíba</span>
          <span>·</span>
          <span>🍋 Acidez Cítrica Única</span>
        </div>
      </footer>
    </div>
  );
}
