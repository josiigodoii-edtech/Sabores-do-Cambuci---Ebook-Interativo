export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  prepTime: string;
  cookTimeMinutes: number;
  yield: string;
  defaultServings: number;
  category: 'salgado' | 'doce' | 'bebida' | 'panificacao';
  difficulty?: 'Fácil' | 'Médio' | 'Elaborado';
  imageUrl?: string;
  pairing?: string;
  tags: string[];
  ingredients: {
    item: string;
    amount?: number;
    unit?: string;
    note?: string;
    section?: string;
  }[];
  steps: string[];
  tip: string;
  curiosity: string;
  imageAlt?: string;
}

export interface ChapterSection {
  id: string;
  title: string;
  content: string[];
  callout?: {
    type: 'curiosity' | 'tip' | 'quote' | 'field-note' | 'nutrition' | 'alert';
    title: string;
    text: string;
  };
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  readTimeMinutes: number;
  sections: ChapterSection[];
  recipes?: Recipe[];
  quizId?: string;
}

export interface ConceptNode {
  id: string;
  label: string;
  category: 'botanica' | 'historia' | 'culinaria' | 'ciencia' | 'socioambiental';
  description: string;
  relatedChapterId: string;
  keyFact: string;
  x: number;
  y: number;
}

export interface ConceptEdge {
  source: string;
  target: string;
  label: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
  unlockedAt?: string;
  requiredChapterId?: string;
  requiredQuizScore?: number;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  context?: string;
  options: QuizOption[];
}

export interface ChapterQuiz {
  id: string;
  chapterId: string;
  chapterTitle: string;
  badgeRewardId: string;
  questions: QuizQuestion[];
}

export interface ReaderSettings {
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  theme: 'paper' | 'clean' | 'night';
  soundAmbient: boolean;
}

export interface UserLearningState {
  completedChapters: string[];
  completedQuizzes: Record<string, number>; // quizId -> score percentage
  unlockedBadges: string[];
  cookedRecipes: string[];
  bookmarkedSections: string[];
  notes: Record<string, string>; // sectionId -> note text
  currentChapterId: string;
}
