export interface WordItem {
  semester: 'First Semester' | 'Second Semester';
  module: string;
  unit: string;
  word: string;
  meaning: string;
  phonetic: string;
  phonics: string;
  example: string;
  translation: string;
  memoryTip: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  timestamp: Date;
}

export interface LearningContext {
  semester: 'First Semester' | 'Second Semester';
  module: string;
  unit: string;
  word?: string;
}

export type ActiveTabType = 'vocabulary' | 'grammar' | 'practice' | 'exam' | 'challenge';

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'ordering';
  question: string;
  options?: string[]; // Multiple choice options
  correctOptionIndex?: number;
  wordMatchPair?: { english: string[]; chinese: string[] }; // For matching
  orderingBlocks?: string[]; // For sentence ordering
  correctString: string; // Correct answer or completed sentence
  explanation: string;
  wordKeyword: string;
}
