import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  MessageSquare, 
  GraduationCap, 
  Award, 
  Trophy, 
  Volume2, 
  BookOpenCheck,
  Compass,
  Smile,
  Zap,
  CalendarCheck,
  Sparkles,
  Map,
  Compass as CompassIcon,
  HelpCircle,
  Footprints,
  Star
} from 'lucide-react';
import { VOCABULARY_LIST } from './data/vocabulary';
import { LearningContext, ActiveTabType } from './types';
import { t } from './utils/translation';

// Import modular panels
import VocabExplorer from './components/VocabExplorer';
import GrammarLab from './components/GrammarLab';
import PracticeArena from './components/PracticeArena';
import TutorChat from './components/TutorChat';
import ExamSuite from './components/ExamSuite';
import FavoriteWords from './components/FavoriteWords';
import MistakeBook from './components/MistakeBook';

export default function App() {
  // Master selection context
  const [selectedContext, setSelectedContext] = useState<LearningContext>({
    semester: 'First Semester',
    module: 'Getting to Know Each Other',
    unit: 'My Future',
    word: 'want',
  });

  // Dual TTS Mode selector (Gemini AI TTS with automatic Local Voice fallback if 10-requests quota limit is reached)
  const [voiceEngine, setVoiceEngine] = useState<'gemini' | 'browser'>('browser');
  const [hasAutoBypassed, setHasAutoBypassed] = useState(false);

  // Default to game map view so kids see the beautiful map pathways at the start of app!
  const [activeTab, setActiveTab] = useState<ActiveTabType | 'map' | 'favorites' | 'mistakes'>('map');

  // History stack to support the "← 返回上一页" button
  const [tabHistory, setTabHistory] = useState<(ActiveTabType | 'map' | 'favorites' | 'mistakes')[]>(['map']);

  // Learning progress growth system state
  const [learnedWords, setLearnedWords] = useState<string[]>([]);
  const [completedGrammar, setCompletedGrammar] = useState<string[]>([]);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);
  const [completedReviews, setCompletedReviews] = useState<string[]>([]);
  const [favoriteWords, setFavoriteWords] = useState<string[]>([]);
  const [mistakeBook, setMistakeBook] = useState<any[]>([]);
  const [learningStreak, setLearningStreak] = useState<number>(1);

  // Celebrating badges overlay modal trigger
  const [celebratingBadge, setCelebratingBadge] = useState<any | null>(null);

  // Toast / alert message state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active warm-up state to ensure voice synthesizers are ready
  const [isWarmedUp, setIsWarmedUp] = useState(false);

  // Load historical persistent states from local storage on first mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('toby_learning_growth_v2');
      if (saved) {
        const data = JSON.parse(saved);
        if (Array.isArray(data.learnedWords)) setLearnedWords(data.learnedWords);
        if (Array.isArray(data.completedGrammar)) setCompletedGrammar(data.completedGrammar);
        if (Array.isArray(data.completedQuizzes)) setCompletedQuizzes(data.completedQuizzes);
        if (Array.isArray(data.completedReviews)) setCompletedReviews(data.completedReviews);
        if (Array.isArray(data.favoriteWords)) setFavoriteWords(data.favoriteWords);
        if (Array.isArray(data.mistakeBook)) setMistakeBook(data.mistakeBook);
        if (typeof data.learningStreak === 'number') setLearningStreak(data.learningStreak);
        
        // Restore last learning session context seamlessly!
        if (data.selectedContext) {
          setSelectedContext(data.selectedContext);
        }
      }
    } catch (e) {
      console.warn("Could not load persistent state", e);
    }
  }, []);

  // Daily Streak calculations upon login/visit
  useEffect(() => {
    try {
      const saved = localStorage.getItem('toby_learning_growth_v2');
      let currentStreak = 1;
      const todayStr = new Date().toISOString().split('T')[0];
      
      if (saved) {
        const data = JSON.parse(saved);
        if (data.lastActiveDate) {
          const lastDate = new Date(data.lastActiveDate);
          const today = new Date(todayStr);
          const diffTime = Math.abs(today.getTime() - lastDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) {
            currentStreak = (data.learningStreak || 0) + 1;
          } else if (diffDays === 0) {
            currentStreak = data.learningStreak || 1;
          } else {
            currentStreak = 1;
          }
        } else {
          currentStreak = 1;
        }
      }
      setLearningStreak(currentStreak);
      
      // Save last active day as today safely
      const existing = saved ? JSON.parse(saved) : {};
      localStorage.setItem('toby_learning_growth_v2', JSON.stringify({
        ...existing,
        learningStreak: currentStreak,
        lastActiveDate: todayStr
      }));
    } catch (e) {
      console.warn("Streak engine load failed", e);
    }
  }, []);

  // Sync state helpers to protect local storage integrity
  const handleToggleLearnedWord = (word: string) => {
    setLearnedWords((prev) => {
      const updated = prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word];
      localStorage.setItem('toby_learning_growth_v2', JSON.stringify({
        learnedWords: updated,
        completedGrammar,
        completedQuizzes,
        completedReviews,
        favoriteWords,
        mistakeBook,
        learningStreak,
        selectedContext
      }));
      return updated;
    });
  };

  const handleToggleFavoriteWord = (word: string) => {
    setFavoriteWords((prev) => {
      const updated = prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word];
      localStorage.setItem('toby_learning_growth_v2', JSON.stringify({
        learnedWords,
        completedGrammar,
        completedQuizzes,
        completedReviews,
        favoriteWords: updated,
        mistakeBook,
        learningStreak,
        selectedContext
      }));
      return updated;
    });
  };

  const handleCompleteGrammar = (unitName: string) => {
    setCompletedGrammar((prev) => {
      if (prev.includes(unitName)) return prev;
      const updated = [...prev, unitName];
      localStorage.setItem('toby_learning_growth_v2', JSON.stringify({
        learnedWords,
        completedGrammar: updated,
        completedQuizzes,
        completedReviews,
        favoriteWords,
        mistakeBook,
        learningStreak,
        selectedContext
      }));
      return updated;
    });
  };

  const handleCompleteQuiz = (unitName: string) => {
    setCompletedQuizzes((prev) => {
      if (prev.includes(unitName)) return prev;
      const updated = [...prev, unitName];
      localStorage.setItem('toby_learning_growth_v2', JSON.stringify({
        learnedWords,
        completedGrammar,
        completedQuizzes: updated,
        completedReviews,
        favoriteWords,
        mistakeBook,
        learningStreak,
        selectedContext
      }));
      return updated;
    });
  };

  const handleCompleteReview = (unitName: string) => {
    setCompletedReviews((prev) => {
      if (prev.includes(unitName)) return prev;
      const updated = [...prev, unitName];
      localStorage.setItem('toby_learning_growth_v2', JSON.stringify({
        learnedWords,
        completedGrammar,
        completedQuizzes,
        completedReviews: updated,
        favoriteWords,
        mistakeBook,
        learningStreak,
        selectedContext
      }));
      return updated;
    });
  };

  const handleAddMistake = (mistake: {
    question: string;
    options?: string[];
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
    wordKeyword: string;
  }) => {
    setMistakeBook((prev) => {
      const filtered = prev.filter((m) => m.question !== mistake.question);
      const updated = [
        {
          id: Math.random().toString(36).substring(2, 9),
          ...mistake,
          unit: selectedContext.unit
        },
        ...filtered
      ];
      localStorage.setItem('toby_learning_growth_v2', JSON.stringify({
        learnedWords,
        completedGrammar,
        completedQuizzes,
        completedReviews,
        favoriteWords,
        mistakeBook: updated,
        learningStreak,
        selectedContext
      }));
      return updated;
    });
  };

  const handleRemoveMistake = (id: string) => {
    setMistakeBook((prev) => {
      const updated = prev.filter((m) => m.id !== id);
      localStorage.setItem('toby_learning_growth_v2', JSON.stringify({
        learnedWords,
        completedGrammar,
        completedQuizzes,
        completedReviews,
        favoriteWords,
        mistakeBook: updated,
        learningStreak,
        selectedContext
      }));
      return updated;
    });
  };

  const badgesList = [
    { id: 'vocab_beginner', title: '🥉 Vocabulary Beginner', desc: 'Learn 20 words (学习掌握 20 个单词)', target: 20, current: learnedWords.length, unlocked: learnedWords.length >= 20, emoji: '🥉' },
    { id: 'vocab_explorer', title: '🥈 Vocabulary Explorer', desc: 'Learn 50 words (学习掌握 50 个单词)', target: 50, current: learnedWords.length, unlocked: learnedWords.length >= 50, emoji: '🥈' },
    { id: 'vocab_master', title: '🥇 Vocabulary Master', desc: 'Learn 100 words (学习掌握 100 个单词)', target: 100, current: learnedWords.length, unlocked: learnedWords.length >= 100, emoji: '🥇' },
    { id: 'grammar_hero', title: '🏰 Grammar Hero', desc: 'Complete 4 or more grammar rule challenges (守护城堡语法秘籍课)', target: 4, current: completedGrammar.length, unlocked: completedGrammar.length >= 4, emoji: '🏰' },
    { id: 'quiz_champion', title: '🚀 Quiz Champion', desc: 'Conquer active vocabulary unit quizzes (攻克单元答题关卡)', target: 1, current: completedQuizzes.length, unlocked: completedQuizzes.length >= 1, emoji: '🚀' },
    { id: 'english_warrior', title: '🏆 English Warrior', desc: 'Achieve vocabulary, grammar, and test milestones (词汇初级解锁+完成语法+通过Quiz)', target: 3, current: (learnedWords.length >= 20 ? 1 : 0) + (completedGrammar.length >= 4 ? 1 : 0) + (completedQuizzes.length >= 1 ? 1 : 0), unlocked: learnedWords.length >= 20 && completedGrammar.length >= 4 && completedQuizzes.length >= 1, emoji: '🏆' }
  ];

  // Listener to trigger badge unlock celebration
  useEffect(() => {
    const unlockedIds = badgesList.filter(b => b.unlocked).map(b => b.id);
    const saved = localStorage.getItem('toby_seen_badges_v2');
    let previouslySeen: string[] = [];
    if (saved) {
      try { previouslySeen = JSON.parse(saved); } catch (e) {}
    }
    
    const newUnlocks = unlockedIds.filter(id => !previouslySeen.includes(id));
    if (newUnlocks.length > 0) {
      const firstNewBadge = badgesList.find(b => b.id === newUnlocks[0]);
      if (firstNewBadge) {
        setCelebratingBadge(firstNewBadge);
        const updatedSeen = [...previouslySeen, firstNewBadge.id];
        localStorage.setItem('toby_seen_badges_v2', JSON.stringify(updatedSeen));
        
        // Trigger multi confetti
        import('canvas-confetti').then((m) => {
          m.default({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
        });
        
        speakText(`Superb! You unlocked a brand new achievement badge! ${firstNewBadge.title}! You are super awesome!`);
      }
    }
  }, [learnedWords.length, completedGrammar.length, completedQuizzes.length]);

  const navigateToTab = (tab: ActiveTabType | 'map' | 'favorites' | 'mistakes') => {
    if (activeTab === tab) return;
    setTabHistory((prev) => [...prev, tab]);
    setActiveTab(tab);

    let tabVoice = "";
    switch (tab) {
      case 'map': tabVoice = "Returning to study map"; break;
      case 'vocabulary': tabVoice = "Entering vocabulary kingdom"; break;
      case 'grammar': tabVoice = "Entering grammar castle"; break;
      case 'practice': tabVoice = "Entering practice arena"; break;
      case 'exam': tabVoice = "Entering review planet"; break;
      case 'chat': tabVoice = "Let's chat with Toby"; break;
      case 'favorites': tabVoice = "Entering word notebook"; break;
      case 'mistakes': tabVoice = "Entering mistakes book"; break;
    }
    if (tabVoice) speakText(tabVoice);
  };

  const handleGoBack = () => {
    if (tabHistory.length > 1) {
      const newHistory = [...tabHistory];
      newHistory.pop(); // remove current active tab
      const prevTab = newHistory[newHistory.length - 1];
      setTabHistory(newHistory);
      setActiveTab(prevTab);
      speakText("Going back");
    } else {
      // Fallback
      setTabHistory(['map']);
      setActiveTab('map');
      speakText("Returning to study map");
    }
  };

  const handleReturnToMap = () => {
    navigateToTab('map');
  };

  // Load distinct lists from database to populate selectors dynamically
  const semesters = ['First Semester', 'Second Semester'] as const;

  const filteredModulesAndUnits = VOCABULARY_LIST.reduce((acc, item) => {
    if (!acc[item.semester]) {
      acc[item.semester] = {};
    }
    if (!acc[item.semester][item.module]) {
      acc[item.semester][item.module] = [];
    }
    if (!acc[item.semester][item.module].includes(item.unit)) {
      acc[item.semester][item.module].push(item.unit);
    }
    return acc;
  }, {} as Record<string, Record<string, string[]>>);

  const activeModules = Object.keys(filteredModulesAndUnits[selectedContext.semester] || {});
  const activeUnits = filteredModulesAndUnits[selectedContext.semester][selectedContext.module] || [];

  // Get all unique units of the current selected semester in order (across all modules)
  const allSemesterUnits = Object.values(filteredModulesAndUnits[selectedContext.semester] || {})
    .reduce<string[]>((acc, units) => [...acc, ...units], []);

  // Reset active module and unit when switching semesters
  const handleSemesterChange = (sem: 'First Semester' | 'Second Semester') => {
    const modules = Object.keys(filteredModulesAndUnits[sem] || {});
    const firstMod = modules[0] || '';
    const units = filteredModulesAndUnits[sem][firstMod] || [];
    const firstUnit = units[0] || '';

    const firstWordObj = VOCABULARY_LIST.find(
      (w) => w.semester === sem && w.module === firstMod && w.unit === firstUnit
    );

    setSelectedContext({
      semester: sem,
      module: firstMod,
      unit: firstUnit,
      word: firstWordObj?.word || '',
    });
  };

  const handleModuleChange = (mod: string) => {
    const units = filteredModulesAndUnits[selectedContext.semester][mod] || [];
    const firstUnit = units[0] || '';
    
    const firstWordObj = VOCABULARY_LIST.find(
      (w) => w.semester === selectedContext.semester && w.module === mod && w.unit === firstUnit
    );

    setSelectedContext((prev) => ({
      ...prev,
      module: mod,
      unit: firstUnit,
      word: firstWordObj?.word || '',
    }));
  };

  const handleUnitChange = (unit: string) => {
    const firstWordObj = VOCABULARY_LIST.find(
      (w) => w.semester === selectedContext.semester && w.module === selectedContext.module && w.unit === unit
    );

    setSelectedContext((prev) => ({
      ...prev,
      unit,
      word: firstWordObj?.word || '',
    }));
  };

  // Master Speak/TTS Engine with Dual-Mode Fallback
  const speakText = async (text: string) => {
    if (!text) return;

    // Direct routing to browser voice if currently bypassing or configured to save quota
    if (voiceEngine === 'browser') {
      fallbackSpeech(text);
      return;
    }

    try {
      const response = await fetch('/api/gemini/speech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: text }),
      });

      if (!response.ok) throw new Error('API server failed');

      const data = await response.json();
      if (data.audio && !data.fallback) {
        // Decode raw Int16 PCM audio returned by gemini-3.1-flash-tts-preview (sample rate 24000 Hz, mono)
        const binaryString = window.atob(data.audio);
        const len = binaryString.length;
        const numSamples = len / 2;
        const floatData = new Float32Array(numSamples);
        const dataView = new DataView(new ArrayBuffer(len));
        
        for (let i = 0; i < len; i++) {
          dataView.setUint8(i, binaryString.charCodeAt(i));
        }
        
        for (let i = 0; i < numSamples; i++) {
          const pcmSample = dataView.getInt16(i * 2, true); // true for little-endian
          floatData[i] = pcmSample / 32768; // normalize
        }
        
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const audioBuffer = audioCtx.createBuffer(1, numSamples, 24000);
        audioBuffer.getChannelData(0).set(floatData);

        const sourceNode = audioCtx.createBufferSource();
        sourceNode.buffer = audioBuffer;
        sourceNode.connect(audioCtx.destination);
        sourceNode.start(0);
        return;
      } else {
        // Server returned a fallback flag (likely due to exhausted quota or missing key)
        if (!hasAutoBypassed) {
          setHasAutoBypassed(true);
          setVoiceEngine('browser');
        }
        fallbackSpeech(text);
      }
    } catch (e) {
      console.log('Audio call fallback triggered:', e);
      if (!hasAutoBypassed) {
        setHasAutoBypassed(true);
        setVoiceEngine('browser');
      }
      fallbackSpeech(text);
    }
  };

  const fallbackSpeech = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        // 1. Before speaking, call speechSynthesis.cancel()
        window.speechSynthesis.cancel();

        // 2. Create a new SpeechSynthesisUtterance(text)
        const utterance = new SpeechSynthesisUtterance(text);

        // Set language to "en-US", rate to 0.85, pitch to 1
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        utterance.pitch = 1;

        // Custom voice resolver with priority on standard high quality English voices
        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find((v) => v.lang === 'en-US' && v.name.toLowerCase().includes('google')) || 
                        voices.find((v) => v.lang === 'en-US') ||
                        voices.find((v) => v.lang.startsWith('en'));
        if (enVoice) {
          utterance.voice = enVoice;
        }

        // 9. Add error handling: If speaking fails, show friendly message
        utterance.onerror = (event) => {
          console.error('SpeechSynthesisUtterance error event:', event);
          if (event.error !== 'interrupted' && event.error !== 'canceled') {
            setToastMessage("语音播放失败，请点击重试。");
          }
        };

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.error('Speech synthesis execution crashed:', err);
        setToastMessage("语音播放失败，请点击重试。");
      }
    } else {
      // 4. Add fallback if speechSynthesis is not available
      console.log('Speech synthesis not supported on this device/browser');
      setToastMessage("当前浏览器不支持语音朗读，请使用 Chrome 浏览器。");
    }
  };

  // 6. Add a hidden warm-up speech after first user tap
  useEffect(() => {
    const warmUpSpeech = () => {
      if (isWarmedUp) return;
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
          const silentUtterance = new SpeechSynthesisUtterance('');
          silentUtterance.volume = 0; // silent
          window.speechSynthesis.speak(silentUtterance);
          setIsWarmedUp(true);
        } catch (e) {
          console.warn('Speech synthesis warm-up failed:', e);
        }
      }
    };

    window.addEventListener('click', warmUpSpeech, { once: true });
    window.addEventListener('touchstart', warmUpSpeech, { once: true });
    return () => {
      window.removeEventListener('click', warmUpSpeech);
      window.removeEventListener('touchstart', warmUpSpeech);
    };
  }, [isWarmedUp]);

  // 5. Add a voice loading fix: Some Android browsers load voices slowly.
  // Use speechSynthesis.getVoices() and listen to the voiceschanged event.
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const loadVoices = () => {
        window.speechSynthesis.getVoices();
      };
      
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
      window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f9ff] text-slate-800 antialiased font-sans select-none pb-28 md:pb-16 relative overflow-hidden" style={{ minWidth: '320px' }}>
      
      {/* Toast Alert Banner */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[999] bg-rose-50 text-rose-800 border-3 border-rose-400 rounded-2xl px-5 py-3.5 font-display font-black text-xs md:text-sm shadow-xl flex items-center gap-2.5 max-w-sm w-[92%]">
          <span className="text-lg shrink-0">⚠️</span>
          <p className="flex-1 leading-snug">{toastMessage}</p>
          <button 
            onClick={() => setToastMessage(null)} 
            className="w-5 h-5 flex items-center justify-center bg-rose-250 hover:bg-rose-200 rounded-full font-black text-rose-800 transition-colors cursor-pointer text-xs shrink-0"
          >
            ✕
          </button>
        </div>
      )}
      
      {/* Background celestial visual accents */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-44 h-44 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* App Top Cheer Header (Persistent top navigation) */}
      <header className="bg-white border-b-4 border-sky-100 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={handleReturnToMap}
              className="w-10 h-10 md:w-12 md:h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-amber-950 font-display font-black text-xl md:text-2xl rotate-2 shadow-[0_4px_0_0_#d97706] border-2 border-amber-500 animate-pulse cursor-pointer"
            >
              🐶
            </button>
            <div>
              <h1 className="font-display font-black text-lg md:text-2xl text-slate-800 flex items-center gap-1.5 leading-none">
                托比的英语冒险地图
                <Smile className="w-5 h-5 text-amber-500 fill-amber-200 animate-bounce" />
              </h1>
              <p className="text-[10px] md:text-xs text-sky-600 font-display font-bold mt-0.5 tracking-wide">五年级趣味互动英语学习乐园</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-3 w-full md:w-auto">
            {/* Custom Interactive Voice Engine Switcher */}
            <div className="flex items-center gap-1 bg-amber-50 border-2 border-amber-200 rounded-2xl p-0.5 md:p-1 shadow-xs shrink-0 text-[10px] md:text-xs">
              <span className="text-[9px] md:text-[10px] font-display font-black text-amber-900 uppercase px-1 md:px-2">发音方式:</span>
              <button
                onClick={() => {
                  setVoiceEngine('gemini');
                  speakText("Toby AI voice is ready!");
                }}
                className={`px-2 md:px-3 py-1 md:py-1.5 rounded-xl text-[10px] md:text-[11px] font-display font-black transition-all cursor-pointer ${
                  voiceEngine === 'gemini' 
                    ? 'bg-amber-400 text-amber-950 border-b-2 border-amber-600 shadow-xs'
                    : 'text-slate-500 hover:text-amber-900'
                }`}
              >
                🤖 智能双语AI
              </button>
              <button
                onClick={() => {
                  setVoiceEngine('browser');
                  setTimeout(() => {
                    fallbackSpeech("Using local browser voice");
                  }, 100);
                }}
                className={`px-2 md:px-3 py-1 md:py-1.5 rounded-xl text-[10px] md:text-[11px] font-display font-black transition-all cursor-pointer ${
                  voiceEngine === 'browser'
                    ? 'bg-purple-500 text-white border-b-2 border-purple-700 shadow-xs'
                    : 'text-slate-500 hover:text-purple-600'
                }`}
              >
                🔌 本地发音
              </button>
            </div>

            <div className="flex items-center gap-1.5 bg-emerald-100 text-emerald-800 border-2 border-emerald-300 rounded-full px-3 py-1 md:px-4 md:py-1.5 font-display text-[10px] md:text-xs font-black shadow-sm">
              <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-250 animate-pulse" />
              当前单元 / Unit: Unit {allSemesterUnits.indexOf(selectedContext.unit) + 1} {selectedContext.unit}
            </div>
          </div>
        </div>


      </header>

      {/* Main Workspace Frame container */}
      <main className="max-w-5xl mx-auto px-4 mt-8">
        
        {hasAutoBypassed && (
          <div className="mb-6 bg-amber-50 border-2 border-amber-300 p-4 rounded-3xl shadow-sm text-xs text-amber-950 font-sans leading-relaxed flex items-center justify-between">
            <p>
              💡 <span className="font-display font-black">托比老师提示：</span> 由于当前智能系统语音使用频率极高，为了保证所有卡片的朗读极速、即时，托比已经自动为您切换到了 **浏览器内置本地发音**！我们可以继续高效无忧地趣味学习啦，加油，小勇士！⭐
            </p>
            <button 
              onClick={() => setHasAutoBypassed(false)}
              className="text-amber-950 bg-amber-200/50 hover:bg-amber-200 px-3 py-1.5 rounded-xl font-display font-black ml-4 shrink-0 cursor-pointer"
            >
              我知道了！
            </button>
          </div>
        )}
        
        {/* If GAME MAP is active, show the map board */}
        {activeTab === 'map' ? (
          <div className="space-y-8">
            
            {/* Top Setup Control Panel - Giant rounded board */}
            <div className="bg-gradient-to-br from-amber-200 to-yellow-100 rounded-3xl border-4 border-amber-400 shadow-[0_8px_0_0_#d97706] p-6 space-y-4 relative">
              <div className="absolute -top-3.5 left-8 bg-amber-500 text-white text-xs font-display font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm border-2 border-amber-600">
                🗺️ 课程选择
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-3">
                {/* Semester selection */}
                <div className="md:col-span-5 space-y-1.5">
                  <label className="text-xs font-display font-black uppercase text-amber-900 tracking-wider">学期选择</label>
                  <div className="grid grid-cols-2 gap-2">
                    {semesters.map((sem) => (
                      <button
                        key={sem}
                        onClick={() => {
                          handleSemesterChange(sem);
                          speakText(sem);
                        }}
                        className={`px-3 py-3 text-xs font-display font-black rounded-2xl border-2 cursor-pointer transition-all btn-bubbly ${
                          selectedContext.semester === sem
                            ? 'bg-amber-450 border-amber-600 text-amber-950 shadow-[0_4px_0_0_#b45309]'
                            : 'bg-white border-amber-300 text-slate-700 hover:bg-amber-50'
                        }`}
                      >
                        {sem === 'First Semester' ? '🍁 第一学期' : '🌸 第二学期'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Module selection */}
                <div className="md:col-span-4 space-y-1.5">
                  <label className="text-xs font-display font-black uppercase text-amber-900 tracking-wider">模块选择 / Select Module</label>
                  <select
                    value={selectedContext.module}
                    onChange={(e) => {
                      handleModuleChange(e.target.value);
                      speakText(e.target.value);
                    }}
                    className="w-full px-4 py-3 text-xs md:text-sm border-3 border-amber-400 rounded-2xl bg-white text-slate-800 font-display font-bold outline-hidden focus:border-amber-600 cursor-pointer shadow-sm"
                  >
                    {activeModules.map((mod, index) => (
                      <option key={mod} value={mod}>
                        🌲 Module {index + 1} {mod}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Unit selection */}
                <div className="md:col-span-3 space-y-1.5">
                  <label className="text-xs font-display font-black uppercase text-amber-900 tracking-wider">单元选择 / Select Unit</label>
                  <select
                    value={selectedContext.unit}
                    onChange={(e) => {
                      handleUnitChange(e.target.value);
                      speakText(e.target.value);
                    }}
                    className="w-full px-4 py-3 text-xs md:text-sm border-3 border-amber-400 rounded-2xl bg-white text-slate-800 font-display font-bold outline-hidden focus:border-amber-600 cursor-pointer shadow-sm"
                  >
                    {activeUnits.map((u) => {
                      const unitNum = allSemesterUnits.indexOf(u) + 1;
                      return (
                        <option key={u} value={u}>
                          📔 Unit {unitNum !== 0 ? unitNum : 1} {u}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Toby companion speaking bubble in quest map */}
              <div className="mt-4 p-4 bg-white/90 rounded-2xl border-2 border-amber-300 flex items-center gap-3 shadow-inner">
                <span className="text-3xl animate-bounce-slow">🐶</span>
                <p className="text-xs md:text-sm text-amber-950 font-display font-bold leading-normal">
                  "你好呀！托比正在看我们当前的【<span className="underline font-black text-amber-700">Unit {allSemesterUnits.indexOf(selectedContext.unit) + 1} {selectedContext.unit}</span>】地图哦！快选择下方的一个神奇传送门开始开心畅玩吧！"
                </p>
              </div>
            </div>

            {/* 🐾 TOBY'S GROWTH STATION DASHBOARD */}
            <div className="bg-gradient-to-br from-indigo-100 via-sky-50 to-emerald-50 rounded-3xl border-4 border-indigo-300 p-6 space-y-6 shadow-md relative">
              <div className="absolute -top-3.5 left-8 bg-indigo-500 text-white text-xs font-display font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm border-2 border-indigo-600">
                🐾 托比的成长基地 (Toby's Growth Desk)
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
                {/* Left side: Streak and Counters (Grid span 5) */}
                <div className="lg:col-span-5 bg-white/75 border-2 border-indigo-200/50 rounded-2xl p-4 flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl animate-bounce">🔥</span>
                      <div>
                        <h4 className="font-display font-black text-rose-500 text-sm">学习连续打卡</h4>
                        <p className="text-2xl font-mono text-slate-800 font-extrabold flex items-baseline gap-1 mt-0.5">
                          {learningStreak} <span className="text-xs font-display font-black text-slate-500">天</span>
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        import('canvas-confetti').then((m) => {
                          m.default({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
                        });
                        speakText(`Splendid job keeping up the daily streak! Toby is proud of you!`);
                      }}
                      className="text-[10px] bg-indigo-100 hover:bg-indigo-200 border-2 border-indigo-300 text-indigo-800 px-3 py-1.5 rounded-xl font-display font-bold cursor-pointer select-none transition-all active:scale-95"
                    >
                      放烟花 🎆
                    </button>
                  </div>

                  <p className="text-xs text-indigo-950 font-display font-bold leading-normal">
                    已连续学习 {learningStreak} 天，托比给你点赞！继续保持，攻克五年级英语大关！🐶
                  </p>

                  <div className="pt-2 border-t border-indigo-100 grid grid-cols-2 gap-3 text-[11px] font-display font-black text-slate-700">
                    <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-xl p-2">
                      <span className="text-base">📚</span>
                      <div>
                        <p className="text-slate-400 text-[9px] uppercase">已学单词</p>
                        <p className="text-amber-800 font-extrabold">{learnedWords.length} 个</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-pink-50 border border-pink-200 rounded-xl p-2">
                       <span className="text-base">🏰</span>
                      <div>
                        <p className="text-slate-400 text-[9px] uppercase">已克语法</p>
                        <p className="text-pink-950 font-extrabold">{completedGrammar.length} 项</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-xl p-2">
                      <span className="text-base">🏆</span>
                      <div>
                        <p className="text-slate-400 text-[9px] uppercase">满星关卡</p>
                        <p className="text-orange-850 font-extrabold">{completedQuizzes.length} 个</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-violet-50 border border-indigo-200 rounded-xl p-2">
                      <span className="text-base">🚀</span>
                      <div>
                        <p className="text-slate-400 text-[9px] uppercase">星际复习</p>
                        <p className="text-violet-950 font-extrabold">{completedReviews.length} 次</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side: Quick notebook access portals (Grid span 7) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Wordbook portal card */}
                  <div className="bg-amber-100/50 border border-amber-300 rounded-2xl p-4 flex flex-col justify-between space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-display font-black text-amber-900 text-sm flex items-center gap-1">
                          <span>📖 我的生词本</span>
                        </h4>
                        <p className="text-slate-500 text-[10px] lowercase font-display font-bold leading-normal mt-1">
                          保存不熟悉或需要反复复习记忆的单词闪卡。
                        </p>
                      </div>
                      <span className="bg-amber-400 text-amber-950 text-xs font-mono font-black border border-amber-500 px-2.5 py-0.5 rounded-full shadow-xs">
                        {favoriteWords.length}
                      </span>
                    </div>

                    <button
                      onClick={() => navigateToTab('favorites')}
                      className="w-full text-center py-2 bg-amber-400 hover:bg-amber-500 active:scale-95 border-b-3 border-amber-600 text-amber-950 font-display font-extrabold text-xs rounded-xl cursor-pointer"
                    >
                      查看单词本 ➔
                    </button>
                  </div>

                  {/* MistakeBook portal card */}
                  <div className="bg-rose-100/50 border border-rose-300 rounded-2xl p-4 flex flex-col justify-between space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-display font-black text-rose-900 text-sm flex items-center gap-1">
                          <span>📕 我的错题本</span>
                        </h4>
                        <p className="text-slate-500 text-[10px] lowercase font-display font-bold leading-normal mt-1">
                          自动整理拼写与语法错题，支持定向重做。
                        </p>
                      </div>
                      <span className="bg-rose-450 text-white text-xs font-mono font-black border border-rose-500 px-2.5 py-0.5 rounded-full shadow-xs">
                        {mistakeBook.length}
                      </span>
                    </div>

                    <button
                      onClick={() => navigateToTab('mistakes')}
                      className="w-full text-center py-2 bg-rose-450 hover:bg-rose-500 active:scale-95 border-b-3 border-rose-600 text-white font-display font-extrabold text-xs rounded-xl cursor-pointer"
                    >
                      消灭错题 ➔
                    </button>
                  </div>
                </div>
              </div>

              {/* Achievements Badges wall showcase */}
              <div className="pt-4 border-t-2 border-indigo-200/50 space-y-3">
                <h4 className="font-display font-black text-indigo-900 text-xs flex items-center gap-1">
                  <span>🏆 我的成就徽章墙 (My Achievements)</span>
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {badgesList.map((badge) => {
                    const isUnlocked = badge.unlocked;
                    const percent = Math.min(Math.round((badge.current / badge.target) * 100), 100);
                    return (
                      <div 
                        key={badge.id}
                        className={`p-2 rounded-2xl border flex flex-col items-center justify-between text-center relative overflow-hidden transition-all duration-300 ${
                          isUnlocked 
                            ? 'bg-gradient-to-b from-yellow-50 to-amber-100 border-amber-300 shadow-sm transform hover:scale-105' 
                            : 'bg-slate-50/50 border-slate-200 grayscale opacity-80'
                        }`}
                        title={`${badge.title}: ${badge.desc}`}
                      >
                        {!isUnlocked && (
                          <div className="absolute top-1 right-1 text-slate-400 font-mono text-[9px] font-black flex items-center gap-0.5">
                            🔒 {badge.current}/{badge.target}
                          </div>
                        )}
                        {isUnlocked && (
                          <div className="absolute top-0.5 right-1 bg-amber-500 text-[8px] text-white px-1.5 py-0.5 rounded-full uppercase font-black tracking-wide scale-90 animate-bounce">
                            get!
                          </div>
                        )}

                        <span className="text-3xl mt-1.5">{badge.emoji}</span>
                        
                        <div className="mt-1.5 space-y-0.5">
                          <p className="text-[10px] font-display font-black text-indigo-950 leading-tight">
                            {badge.id === 'vocab_beginner' ? '初学 Beginner' : badge.id === 'vocab_explorer' ? '探索 Explorer' : badge.id === 'vocab_master' ? '大师 Master' : badge.id === 'grammar_hero' ? '语法 Hero' : badge.id === 'quiz_champion' ? '答题 Champion' : '终极 Warrior'}
                          </p>
                          <p className="text-[8px] text-slate-400 font-display font-semibold select-all leading-none">
                            {badge.id === 'vocab_beginner' ? '20词' : badge.id === 'vocab_explorer' ? '50词' : badge.id === 'vocab_master' ? '100词' : badge.id === 'grammar_hero' ? '4课' : badge.id === 'quiz_champion' ? '1Quiz' : '3成就'}
                          </p>
                        </div>

                        {/* Progress Bar under Locked Badge */}
                        {!isUnlocked && (
                          <div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
                            <div className="bg-indigo-400 h-full rounded-full" style={{ width: `${percent}%` }} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Path and landmarks board game style layout */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-2 border-b-3 border-slate-200">
                <Footprints className="w-6 h-6 text-sky-500 animate-pulse" />
                <h3 className="font-display font-black text-slate-800 text-lg uppercase tracking-wide">
                  学习地图 🧭
                </h3>
              </div>

              {/* The Game Board territories grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                
                {/* Landmark 1: Word Kingdom */}
                <div className="bg-gradient-to-br from-amber-400 to-orange-300 rounded-3xl border-4 border-amber-500 shadow-[0_8px_0_0_#d97706] p-6 flex flex-col justify-between space-y-4 transform hover:scale-[1.02] transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">📚</span>
                      <span className="bg-amber-100 text-amber-800 text-[10px] uppercase font-display font-extrabold px-3 py-1 rounded-full border border-amber-200">
                        第一关
                      </span>
                    </div>
                    <h4 className="font-display font-black text-xl text-amber-950">单词王国</h4>
                    <p className="text-xs text-amber-900 font-display font-bold leading-relaxed">
                      "用麦克风跟托比学英语发音、拆解音节，配合超赞的卡通插图轻松掌握核心词汇！"
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      navigateToTab('vocabulary');
                    }}
                    className="w-full py-3.5 bg-white text-amber-950 font-display font-extrabold text-sm rounded-2xl border-b-4 border-amber-400 text-center btn-bubbly hover:bg-amber-50 shadow-sm cursor-pointer"
                  >
                    开始学习 👑
                  </button>
                </div>

                {/* Landmark 2: Grammar Castle */}
                <div className="bg-gradient-to-br from-rose-400 to-pink-300 rounded-3xl border-4 border-rose-500 shadow-[0_8px_0_0_#be123c] p-6 flex flex-col justify-between space-y-4 transform hover:scale-[1.02] transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">🏰</span>
                      <span className="bg-rose-100 text-rose-800 text-[10px] uppercase font-display font-extrabold px-3 py-1 rounded-full border border-rose-200">
                        第二关
                      </span>
                    </div>
                    <h4 className="font-display font-black text-xl text-rose-950">语法城堡</h4>
                    <p className="text-xs text-rose-900 font-display font-bold leading-relaxed">
                      "和托比一起保卫皇家城堡！趣味攻克语法拼写公式、打卡教材重点句式。"
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      navigateToTab('grammar');
                    }}
                    className="w-full py-3.5 bg-white text-rose-950 font-display font-extrabold text-sm rounded-2xl border-b-4 border-rose-400 text-center btn-bubbly hover:bg-rose-50 shadow-sm cursor-pointer"
                  >
                    学习语法 🛡️
                  </button>
                </div>

                {/* Landmark 3: Quiz Challenge */}
                <div className="bg-gradient-to-br from-emerald-400 to-teal-300 rounded-3xl border-4 border-emerald-500 shadow-[0_8px_0_0_#047857] p-6 flex flex-col justify-between space-y-4 transform hover:scale-[1.02] transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">🏆</span>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase font-display font-extrabold px-3 py-1 rounded-full border border-emerald-200">
                        第三关
                      </span>
                    </div>
                    <h4 className="font-display font-black text-xl text-emerald-950">闯关挑战</h4>
                    <p className="text-xs text-emerald-900 font-display font-bold leading-relaxed">
                      "挑战多维选择题、拼写卡式游戏与单词泡泡！在当前单元拿下最高分记录。"
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      navigateToTab('practice');
                    }}
                    className="w-full py-3.5 bg-white text-emerald-950 font-display font-extrabold text-sm rounded-2xl border-b-4 border-emerald-400 text-center btn-bubbly hover:bg-emerald-50 shadow-sm cursor-pointer"
                  >
                    开始闯关 ⚡
                  </button>
                </div>

                {/* Landmark 4: Review Planet */}
                <div className="bg-gradient-to-br from-violet-400 to-indigo-300 rounded-3xl border-4 border-violet-500 shadow-[0_8px_0_0_#4c1d95] p-6 flex flex-col justify-between space-y-4 transform hover:scale-[1.02] transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">🎯</span>
                      <span className="bg-violet-100 text-violet-800 text-[10px] uppercase font-display font-extrabold px-3 py-1 rounded-full border border-violet-200">
                        第四关
                      </span>
                    </div>
                    <h4 className="font-display font-black text-xl text-violet-950">复习星球</h4>
                    <p className="text-xs text-violet-900 font-display font-bold leading-relaxed">
                      "伴随倒计时，一键发射复习火箭！自动生成学习报告，梳理本单元核心考点。"
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      navigateToTab('exam');
                    }}
                    className="w-full py-3.5 bg-white text-violet-950 font-display font-extrabold text-sm rounded-2xl border-b-4 border-violet-450 text-center btn-bubbly hover:bg-violet-50 shadow-sm cursor-pointer"
                  >
                    开始复习 🚀
                  </button>
                </div>

              </div>

              {/* Landmark 5: Talk Toby row panel - Floating full width */}
              <div className="bg-slate-900 text-white rounded-3xl border-4 border-slate-700 shadow-[0_8px_0_0_#1e293b] p-6 flex flex-col md:flex-row items-center justify-between gap-5 transform hover:scale-[1.01] transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-4xl animate-bounce">🐕</div>
                  <div>
                    <h4 className="font-display font-black text-xl text-amber-400 flex items-center gap-1">
                      托比老师
                    </h4>
                    <p className="text-xs text-slate-300 font-display font-bold leading-relaxed max-w-lg mt-1">
                      "你可以让托比讲讲英语笑话、用简单贴心的方式解释语法难点，或是帮您开启一轮趣味听写！"
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    navigateToTab('chat');
                  }}
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-display font-extrabold text-sm rounded-2xl border-b-4 border-amber-600 btn-bubbly shadow-md cursor-pointer shrink-0 w-full md:w-auto text-center"
                >
                  托比老师 🐕
                </button>
              </div>

            </div>

          </div>
        ) : (
          /* ELSE Render active world workspace with "Back to Map" capability integrated */
          <div className="space-y-6">
            
            {activeTab === 'vocabulary' && (
              <VocabExplorer
                words={VOCABULARY_LIST}
                selectedContext={selectedContext}
                onSelectWord={(word) => setSelectedContext((prev) => ({ ...prev, word }))}
                speakText={speakText}
                onBackToMap={handleReturnToMap}
                favoriteWords={favoriteWords}
                onToggleFavoriteWord={handleToggleFavoriteWord}
                learnedWords={learnedWords}
                onToggleLearnedWord={handleToggleLearnedWord}
              />
            )}

            {activeTab === 'grammar' && (
              <GrammarLab 
                selectedContext={selectedContext} 
                speakText={speakText} 
                onBackToMap={handleReturnToMap}
                completedGrammar={completedGrammar}
                onCompleteGrammar={handleCompleteGrammar}
              />
            )}

            {activeTab === 'practice' && (
              <PracticeArena
                words={VOCABULARY_LIST}
                selectedContext={selectedContext}
                speakText={speakText}
                onBackToMap={handleReturnToMap}
                onAddMistake={handleAddMistake}
                onCompleteQuiz={handleCompleteQuiz}
              />
            )}

            {activeTab === 'chat' && (
              <TutorChat 
                selectedContext={selectedContext} 
                speakText={speakText} 
                onBackToMap={handleReturnToMap}
              />
            )}

            {activeTab === 'exam' && (
              <ExamSuite
                words={VOCABULARY_LIST}
                selectedContext={selectedContext}
                speakText={speakText}
                onBackToMap={handleReturnToMap}
                onAddMistake={handleAddMistake}
                onCompleteReview={handleCompleteReview}
              />
            )}

            {activeTab === 'favorites' && (
              <FavoriteWords
                words={VOCABULARY_LIST}
                favoriteWords={favoriteWords}
                onToggleFavoriteWord={handleToggleFavoriteWord}
                speakText={speakText}
                onBackToMap={handleReturnToMap}
              />
            )}

            {activeTab === 'mistakes' && (
              <MistakeBook
                mistakeBook={mistakeBook}
                onRemoveMistake={handleRemoveMistake}
                speakText={speakText}
                onBackToMap={handleReturnToMap}
                triggerSparkle={() => {
                  import('canvas-confetti').then((m) => {
                    m.default({ particleCount: 120, spread: 50, origin: { y: 0.6 } });
                  });
                }}
              />
            )}

          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation Menu (Always visible & persistent on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-sky-100 flex justify-around items-center py-2 px-1 shadow-[0_-6px_15px_rgba(0,0,0,0.06)] md:hidden">
        {[
          { id: 'map', label: '地图', icon: '🗺️' },
          { id: 'vocabulary', label: '单词王国', icon: '📚' },
          { id: 'grammar', label: '语法城堡', icon: '🏰' },
          { id: 'practice', label: '闯关挑战', icon: '🏆' },
          { id: 'exam', label: '复习星球', icon: '🚀' },
          { id: 'chat', label: '托比老师', icon: '🤖' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`mobile-tab-${tab.id}`}
              onClick={() => navigateToTab(tab.id as any)}
              className="flex flex-col items-center justify-center flex-1 py-1 cursor-pointer"
            >
              <span className={`text-xl transition-transform ${isActive ? 'scale-115 opacity-100' : 'opacity-60 grayscale-30'}`}>
                {tab.icon}
              </span>
              <span className={`text-[10px] font-display font-black leading-tight mt-0.5 transition-colors ${
                isActive ? 'text-sky-600' : 'text-slate-500'
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* 🏆 ACHIEVEMENT BADGE UNLOCK CELEBRATION MODAL OVERLAY */}
      {celebratingBadge && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs transition-opacity animate-fade-in" id="badge-celebration-overlay">
          <div className="bg-gradient-to-br from-amber-100 via-white to-amber-50 border-8 border-amber-400 rounded-[36px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-sm w-full p-6 text-center space-y-5 relative transform scale-100 transition-transform animate-bounce-slow">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-amber-400 p-4 rounded-full border-4 border-white shadow-md animate-bounce">
              <span className="text-5xl">{celebratingBadge.emoji}</span>
            </div>

            <div className="pt-8 space-y-1.5">
              <span className="bg-amber-500 text-white text-[10px] uppercase font-display font-black px-3.5 py-1 rounded-full tracking-widest border border-amber-600 animate-pulse">
                Milestone Unlocked!
              </span>
              <h1 className="font-display font-black text-amber-950 text-xl tracking-tight">
                {celebratingBadge.title}
              </h1>
              <p className="text-xs text-amber-900 font-display font-bold leading-normal px-2">
                恭喜你，五年级的小勇士！你正式攻克了以下等级挑战，解锁了托比颁发的成长纪念勋章！ ✨
              </p>
            </div>

            <div className="bg-amber-200/40 border border-amber-300 rounded-2xl p-4 text-xs font-display font-bold text-amber-900 leading-relaxed">
              👉 {celebratingBadge.desc}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setCelebratingBadge(null);
                  import('canvas-confetti').then((m) => {
                    m.default({ particleCount: 80, spread: 40, origin: { y: 0.6 } });
                  });
                }}
                className="w-full text-center py-3 bg-amber-400 hover:bg-amber-500 border-b-4 border-amber-600 text-amber-950 font-display font-black text-sm rounded-2xl cursor-pointer shadow-md select-none transform transition-transform active:scale-95 btn-bubbly"
              >
                太棒啦，我知道了！⭐
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
