import React, { useState, useEffect, useMemo } from 'react';
import { Star, Trophy, Sparkles, Gamepad2, CheckCircle2, XCircle, ArrowRight, RotateCcw, MessageSquare, Compass, SpellCheck, BookOpen, Volume2 } from 'lucide-react';
import { WordItem, LearningContext } from '../types';
import { GRAMMAR_RULES } from '../data/vocabulary';

interface EnglishChallengeMasterProps {
  words: WordItem[];
  selectedContext: LearningContext;
  speakText: (text: string) => void;
  onBackToMap: () => void;
}

interface DialogueState {
  step: number;
  score: number;
  finished: boolean;
  replies: { role: 'tutor' | 'student'; text: string; feedback?: string }[];
}

export default function EnglishChallengeMaster({ words, selectedContext, speakText, onBackToMap }: EnglishChallengeMasterProps) {
  // --- Persistent Points & Stars ---
  const [points, setPoints] = useState<number>(() => {
    const saved = localStorage.getItem('challenge_points');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [stars, setStars] = useState<number>(() => {
    const saved = localStorage.getItem('challenge_stars');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('challenge_points', points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem('challenge_stars', stars.toString());
  }, [stars]);

  // --- Core States ---
  const [activeChallengeMode, setActiveChallengeMode] = useState<'menu' | 'spelling' | 'vocabulary' | 'grammar' | 'dialogue'>('menu');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });
  const [consecutiveStreak, setConsecutiveStreak] = useState<number>(0);

  // Filter vocabulary by current semester/unit if available, else use all
  const filteredWords = useMemo(() => {
    const matched = words.filter(
      (w) => w.semester === selectedContext.semester && w.unit === selectedContext.unit
    );
    return matched.length > 0 ? matched : words;
  }, [words, selectedContext]);

  // -- 1. Spelling Challenge States --
  const [spellingWord, setSpellingWord] = useState<WordItem | null>(null);
  const [spellingInput, setSpellingInput] = useState('');
  const [showSpellingHint, setShowSpellingHint] = useState(false);

  // -- 2. Vocabulary Challenge States --
  const [vocabWord, setVocabWord] = useState<WordItem | null>(null);
  const [vocabOptions, setVocabOptions] = useState<string[]>([]);
  const [selectedVocabIdx, setSelectedVocabIdx] = useState<number | null>(null);
  const [vocabSubmitted, setVocabSubmitted] = useState(false);

  // -- 3. Grammar Challenge States --
  const [grammarRuleKey, setGrammarRuleKey] = useState<string>('');
  const [grammarSentBlocks, setGrammarSentBlocks] = useState<string[]>([]);
  const [grammarScrambleBlocks, setGrammarScrambleBlocks] = useState<string[]>([]);
  const [grammarUserBlocks, setGrammarUserBlocks] = useState<string[]>([]);
  const [grammarSubmitted, setGrammarSubmitted] = useState(false);

  // -- 4. Dialogue Challenge States --
  const [activeDialogueId, setActiveDialogueId] = useState<string | null>(null);
  const [dialogueState, setDialogueState] = useState<DialogueState | null>(null);

  // Mascot dynamic quotes representing Toby's encouraging voice
  const tobyMascotMessage = useMemo(() => {
    if (activeChallengeMode === 'menu') {
      return "汪汪！我是托比老师 🐕。欢迎来到【挑战达人】乐园！这里没有复杂的AI云连接，纯本地极速应战，带你攻克单词发音、拼写与核心五年级语法！快选一个决战吧！🌟";
    }
    if (activeChallengeMode === 'spelling') {
      return "字母大合体！仔细听我的发音，试着拼准这个单词哦！拼对了可以得 10 积分和 1 颗星星！⭐";
    }
    if (activeChallengeMode === 'vocabulary') {
      return "词义大消消！看看这个汉语意思或例句句意，能找出对应的超级英语单词吗？加油！";
    }
    if (activeChallengeMode === 'grammar') {
      return "句式拼接师！点击下方乱序的块块，帮我把它拼回一个亮闪闪的正宗五年级金句吧！🏰";
    }
    return "情景大对话！试着跟我进行英文日常模拟通话！选出最合理、语法最优美的回答来通关喔！💬";
  }, [activeChallengeMode]);

  // Level computation based on total stars
  const challengeLevelName = useMemo(() => {
    if (stars < 5) return '英语小兵 🔰';
    if (stars < 15) return '冒险先锋 🏹';
    if (stars < 30) return '词汇狂人 ⚡';
    if (stars < 50) return '语法大师 🏰';
    return '金牌挑战达人 🏆';
  }, [stars]);

  // Sparkle stars celebration effect
  const triggerConfetti = () => {
    import('canvas-confetti').then((m) => {
      m.default({ particleCount: 70, spread: 60, origin: { y: 0.75 } });
    });
  };

  // Sound pronounces helper
  const handleTTS = (text: string) => {
    speakText(text);
  };

  // --- INITIALIZERS FOR EACH CHALLENGE MODE ---

  // spelling
  const initSpellingChallenge = () => {
    if (filteredWords.length === 0) return;
    const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    setSpellingWord(randomWord);
    setSpellingInput('');
    setShowSpellingHint(false);
    setFeedback({ type: null, text: '' });
    // Auto speak word
    setTimeout(() => {
      speakText(randomWord.word);
    }, 150);
  };

  // vocabulary
  const initVocabChallenge = () => {
    if (words.length === 0) return;
    const targetWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    setVocabWord(targetWord);
    
    // distractors
    const distractors = words
      .filter((w) => w.word !== targetWord.word)
      .map((w) => w.meaning);
    
    // shuffle
    const shuffledOpts = [targetWord.meaning, ...distractors.slice(0, 3)]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    
    setVocabOptions(shuffledOpts);
    setSelectedVocabIdx(null);
    setVocabSubmitted(false);
    setFeedback({ type: null, text: '' });
    // Auto speak
    setTimeout(() => {
      speakText(targetWord.word);
    }, 150);
  };

  // grammar
  const initGrammarChallenge = () => {
    const keys = Object.keys(GRAMMAR_RULES);
    if (keys.length === 0) return;
    
    // Pick current unit grammar if possible, else random
    let ruleUnit = selectedContext.unit;
    if (!GRAMMAR_RULES[ruleUnit]) {
      ruleUnit = keys[Math.floor(Math.random() * keys.length)];
    }
    
    const rule = GRAMMAR_RULES[ruleUnit];
    setGrammarRuleKey(ruleUnit);

    // Pick a random example sentence from rule or word item inside the unit
    const possibleSentences = [...rule.examples];
    const targetSet = words.filter(w => w.unit === ruleUnit && w.example);
    targetSet.forEach(w => possibleSentences.push(w.example));

    let sentence = possibleSentences[Math.floor(Math.random() * possibleSentences.length)];
    // strip punctuation and spaces
    const cleanSent = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
    const blocks = cleanSent.split(/\s+/);

    setGrammarSentBlocks(blocks);
    setGrammarScrambleBlocks([...blocks].sort(() => Math.random() - 0.5));
    setGrammarUserBlocks([]);
    setGrammarSubmitted(false);
    setFeedback({ type: null, text: '' });
  };

  // Dialogues Database
  const DIALOGUES = {
    future: {
      title: '💼 谈论未来的梦想工作',
      mascot: '🐶',
      turns: [
        {
          tutorSpeech: "Hello there, little friend! What do you want to be when you grow up? 👨‍✈️",
          options: [
            {
              text: "I want to be a pilot and fly high!",
              score: 20,
              feedback: "极速过关！'want to be a pilot' 语法非常标准，用 a 代表具体职业，托比给你狂点赞！💯"
            },
            {
              text: "I want be a doctor.",
              score: 10,
              feedback: "哎呀，记住 want 后面一定要加上 to be 哦！标准说法国是 'want to be a...' 🩹"
            },
            {
              text: "I want to fly like bird.",
              score: 5,
              feedback: "句意很帅！但可以说 'fly like a bird'，而且我们要记得提到某种职业哦。🌲"
            }
          ]
        },
        {
          tutorSpeech: "Wow, that sounds amazing! Why do you like that job? 🌟",
          options: [
            {
              text: "Because it is very quiet in the sky.",
              score: 20,
              feedback: "哇！完美的 'Because it is...' 重磅原因结构！并且形容词 pairing 很好！🌥️"
            },
            {
              text: "Because it is interesting.",
              score: 20,
              feedback: "哇！'Because' 发车大赞！'interesting' 是本学期超级金牌单词呢！📘"
            },
            {
              text: "It is quite beautiful.",
              score: 10,
              feedback: "回答很优雅！但是如果能用 'Because' 来承接托比为什么 (Why) 的提问，就天衣无缝啦！🌹"
            }
          ]
        }
      ]
    },
    school: {
      title: '🚌 探讨每天的上学方式',
      mascot: '🐕',
      turns: [
        {
          tutorSpeech: "Morning! How do you go to school every day? Do you take a bus or train? 🏬",
          options: [
            {
              text: "I usually walk to school every morning.",
              score: 20,
              feedback: "'walk to school' 满分表达！千万不能写 'go to school by walk' 哦！🐾"
            },
            {
              text: "I come to school by the bus.",
              score: 10,
              feedback: "很好！但是 by 后面直接跟交通工具名就行啦，写 'by bus' 最纯正！🚍"
            },
            {
              text: "I go to school on feet.",
              score: 5,
              feedback: "哇，上学真是辛苦！不过在英语里，步行我们一般说 'on foot' (单数) 或者直接用动词 'walk to school'！👟"
            }
          ]
        },
        {
          tutorSpeech: "Excellent travel habit! How long does it take you to get to school? ⏱️",
          options: [
            {
              text: "It takes half an hour.",
              score: 20,
              feedback: "太专业了！'half an hour' (半小时) 表达极度正宗，- h 不发音配合 an 是绝对的王牌语法！🥇"
            },
            {
              text: "It takes one hours.",
              score: 10,
              feedback: "数字是 1 (one) 的时候，hour 应该是单数，不需要加 s 噢。也就是 'one hour'！"
            },
            {
              text: "Very quick, five minutes.",
              score: 15,
              feedback: "太方便了！'five minutes' (五分钟) 词汇掌握完美，极速加分！📈"
            }
          ]
        }
      ]
    },
    birthday: {
      title: '🎂 筹备我的生日聚会',
      mascot: '🎈',
      turns: [
        {
          tutorSpeech: "Guess what! My birthday is coming! When's your birthday, classmate? 🎉",
          options: [
            {
              text: "My birthday is in November.",
              score: 20,
              feedback: "在某个月份，大写的月份名称前面使用 in，搭配得行云流水！⭐"
            },
            {
              text: "My birthday are October 15th.",
              score: 10,
              feedback: "注意单数生日，动词要用单数 is 哦！另外具体某一天，介词要换成 on (on October 15th)！🎁"
            },
            {
              text: "When is yours?",
              score: 15,
              feedback: "反问得很热烈！物主代词 yours (你的生日) 用的极其出色！"
            }
          ]
        },
        {
          tutorSpeech: "Great! Please come to my party. What orange thing can you bring for games? 🍊",
          options: [
            {
              text: "I can bring an orange hat.",
              score: 20,
              feedback: "哇，一顶可爱的橙色遮阳帽！'an orange hat' 里对于 an (元音元开头的词首) 的选择十分优秀！🎩"
            },
            {
              text: "I will bring a orange crayon.",
              score: 10,
              feedback: "橘色蜡笔很赞！不过 orange 开口发音属于元音音素，冠词用 an (an orange crayon) 才是完美组合呢！🎨"
            },
            {
              text: "I bring orange balloon.",
              score: 12,
              feedback: "气球太美了！只是 balloon 是可数名词，带单数时要写 'an orange balloon'，或者复数 'orange balloons' 哟！🎈"
            }
          ]
        }
      ]
    }
  };

  const startDialogue = (id: keyof typeof DIALOGUES) => {
    const d = DIALOGUES[id];
    setActiveDialogueId(id);
    setDialogueState({
      step: 0,
      score: 0,
      finished: false,
      replies: [
        { role: 'tutor', text: d.turns[0].tutorSpeech }
      ]
    });
    setFeedback({ type: null, text: '' });
    speakText(d.turns[0].tutorSpeech);
  };

  const selectDialogueOption = (opt: { text: string; score: number; feedback: string }) => {
    if (!dialogueState || !activeDialogueId) return;
    const d = DIALOGUES[activeDialogueId as keyof typeof DIALOGUES];
    const currentStep = dialogueState.step;
    
    // Add user reply and feedback
    const updatedReplies = [...dialogueState.replies];
    updatedReplies.push({
      role: 'student',
      text: opt.text,
      feedback: opt.feedback
    });

    const nextStep = currentStep + 1;
    const isFinished = nextStep >= d.turns.length;
    const addedPoints = opt.score;

    speakText(opt.text);

    if (isFinished) {
      // Finished dialogue
      const totalDialogueScore = dialogueState.score + addedPoints;
      const earnedStars = Math.max(1, Math.round(totalDialogueScore / 15));
      
      setPoints(p => p + totalDialogueScore);
      setStars(s => s + earnedStars);
      
      setDialogueState({
        step: nextStep,
        score: totalDialogueScore,
        finished: true,
        replies: updatedReplies
      });
      triggerConfetti();
      speakText("Wonderful dialog practicing! You passed! You are the champion!");
    } else {
      // Move to next turn
      const nextTutorSpeech = d.turns[nextStep].tutorSpeech;
      setTimeout(() => {
        updatedReplies.push({
          role: 'tutor',
          text: nextTutorSpeech
        });
        setDialogueState({
          step: nextStep,
          score: dialogueState.score + addedPoints,
          finished: false,
          replies: updatedReplies
        });
        speakText(nextTutorSpeech);
      }, 2500); // Wait for reader spelling suggestion feedback to be viewed
    }
  };

  // --- SUBMIT COMPARES ---

  // spelling compare
  const submitSpelling = () => {
    if (!spellingWord) return;
    const ans = spellingInput.trim().toLowerCase();
    const correct = spellingWord.word.toLowerCase();
    
    if (ans === correct) {
      setFeedback({ type: 'success', text: `🏆 恭喜拼写正确！！\n单词：${spellingWord.word} ${spellingWord.phonetic}\n释义：${spellingWord.meaning}\n例句：${spellingWord.example}` });
      setPoints(p => p + 10);
      setStars(s => s + 1);
      setConsecutiveStreak(st => st + 1);
      triggerConfetti();
      speakText(`Spelling correct! ${spellingWord.word}. ${spellingWord.example}`);
    } else {
      setFeedback({ 
        type: 'error', 
        text: `🙁 拼写有些小笔误哦，加油小勇士！\n正确拼写是：${spellingWord.word}\n音标分音：${spellingWord.phonics}\n记忆魔法：${spellingWord.memoryTip}` 
      });
      setConsecutiveStreak(0);
      speakText(`Try again! The correct spelling is ${spellingWord.word}`);
    }
  };

  // vocabulary compare
  const selectVocabAnswer = (idx: number) => {
    if (vocabSubmitted || !vocabWord) return;
    setSelectedVocabIdx(idx);
    setVocabSubmitted(true);
    
    const selectedText = vocabOptions[idx];
    const correctText = vocabWord.meaning;
    
    if (selectedText === correctText) {
      setFeedback({
        type: 'success',
        text: `🌟 答对啦！积分 +10\n单词：${vocabWord.word} [${vocabWord.phonetic}]\n例句：${vocabWord.example}\n记忆小卡片：${vocabWord.memoryTip}`
      });
      setPoints(p => p + 10);
      setStars(s => s + 1);
      setConsecutiveStreak(st => st + 1);
      triggerConfetti();
      speakText(`Excellent! Meaning of ${vocabWord.word} is correct.`);
    } else {
      setFeedback({
        type: 'error',
        text: `🔍 哎呀，选错了。正确答案是：“${correctText}”\n联想小魔法：${vocabWord.memoryTip}`
      });
      setConsecutiveStreak(0);
      speakText(`Let's review this word meaning.`);
    }
  };

  // grammar comparative blocks
  const handleBlockClick = (block: string, source: 'scramble' | 'user') => {
    if (grammarSubmitted) return;
    if (source === 'scramble') {
      // Find index in scramble
      const idx = grammarScrambleBlocks.indexOf(block);
      if (idx !== -1) {
        const updatedScramble = [...grammarScrambleBlocks];
        updatedScramble.splice(idx, 1);
        setGrammarScrambleBlocks(updatedScramble);
        setGrammarUserBlocks([...grammarUserBlocks, block]);
      }
    } else {
      // return to scramble
      const idx = grammarUserBlocks.indexOf(block);
      if (idx !== -1) {
        const updatedUser = [...grammarUserBlocks];
        updatedUser.splice(idx, 1);
        setGrammarUserBlocks(updatedUser);
        setGrammarScrambleBlocks([...grammarScrambleBlocks, block]);
      }
    }
  };

  const submitGrammarScramble = () => {
    setGrammarSubmitted(true);
    const userString = grammarUserBlocks.join(' ').toLowerCase();
    const correctString = grammarSentBlocks.join(' ').toLowerCase();

    if (userString === correctString) {
      const gRule = GRAMMAR_RULES[grammarRuleKey] || { grammarPoint: 'Grammar', explanation: 'Beautiful structures!' };
      setFeedback({
        type: 'success',
        text: `🏰 城堡守卫成功！积分 +20，星星 +2！\n标准句式：“${grammarSentBlocks.join(' ')}”\n语法要诀 [${gRule.grammarPoint}]：${gRule.explanation}`
      });
      setPoints(p => p + 20);
      setStars(s => s + 2);
      setConsecutiveStreak(st => st + 1);
      triggerConfetti();
      speakText(`Amazing grammar work! Standard sentence.`);
    } else {
      const gRule = GRAMMAR_RULES[grammarRuleKey] || { explanation: 'Practice makes perfect!' };
      setFeedback({
        type: 'error',
        text: `⚔️ 词序有些调换了，我们来看正确顺序：\n“${grammarSentBlocks.join(' ')}”\n语法要领：${gRule.explanation}`
      });
      setConsecutiveStreak(0);
      speakText(`Let's reorder and practice.`);
    }
  };

  // Switch between menu & back
  const handleMenuSwitch = (mode: typeof activeChallengeMode) => {
    setActiveChallengeMode(mode);
    setFeedback({ type: null, text: '' });
    if (mode === 'spelling') initSpellingChallenge();
    if (mode === 'vocabulary') initVocabChallenge();
    if (mode === 'grammar') initGrammarChallenge();
    if (mode === 'dialogue') {
      setActiveDialogueId(null);
      setDialogueState(null);
    }
  };

  return (
    <div className="space-y-6" id="english-challenge-master">
      {/* 🏆 TOP SCORE & LEVEL PANEL CARD */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 border-4 border-indigo-750 text-white rounded-3xl p-6 shadow-[0_8px_0_0_#1e1b4b] flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-inner border-2 border-white transform -rotate-3">
            🏆
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-black text-2xl tracking-wide text-amber-300">
                英语挑战达人
              </h2>
              <span className="bg-indigo-500/50 text-[10px] text-indigo-200 uppercase font-display font-black px-2 py-0.5 rounded-full border border-indigo-400/30">
                PRO LOCAL
              </span>
            </div>
            <p className="text-xs text-slate-300 font-display font-bold mt-1">
              勇敢挑战五年级英语关卡，积累星星，荣登最终的挑战殿堂 🌟
            </p>
          </div>
        </div>

        {/* Stats columns */}
        <div className="flex items-center gap-6 bg-slate-800/80 border-2 border-indigo-500/30 rounded-2xl p-3 px-5 text-center shrink-0">
          <div>
            <span className="text-[10px] text-indigo-300 uppercase font-display font-black block tracking-wider">
              当前阶位
            </span>
            <span className="text-sm font-display font-black text-amber-300">
              {challengeLevelName}
            </span>
          </div>

          <div className="w-px bg-slate-700 h-8" />

          <div>
            <span className="text-[10px] text-indigo-300 uppercase font-display font-black block tracking-wider">
              星星数量
            </span>
            <span className="text-lg font-display font-black text-yellow-300 flex items-center justify-center gap-1">
              <Star className="w-4 h-4 fill-yellow-300" /> {stars}
            </span>
          </div>

          <div className="w-px bg-slate-700 h-8" />

          <div>
            <span className="text-[10px] text-indigo-300 uppercase font-display font-black block tracking-wider">
              挑战积分
            </span>
            <span className="text-lg font-display font-black text-emerald-400">
              {points}
            </span>
          </div>
        </div>
      </div>

      {/* 🐶 TOBY INDEPENDENT DIALOG BUBBLE CHAT */}
      <div className="bg-white rounded-3xl border-4 border-sky-400 shadow-[0_8px_0_0_#38bdf8] p-5 flex items-start gap-4 transform transition-all relative">
        <div className="text-4xl bg-sky-100 p-2.5 rounded-2xl shadow-inside border-2 border-sky-200 shrink-0 select-none animate-bounce-slow">
          🐶
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-display font-black text-sky-950 text-sm">
              托比老师 (Mascot Tutor)
            </h4>
            {consecutiveStreak > 0 && (
              <span className="bg-rose-500 text-white text-[9px] uppercase font-display font-black px-2 py-0.5 rounded-full animate-pulse">
                🔥 {consecutiveStreak} 连胜!!
              </span>
            )}
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-display font-bold bg-slate-50 border border-slate-100 rounded-xl p-3">
            {tobyMascotMessage}
          </p>
        </div>
      </div>

      {/* 🔮 MENU CHOOSECARD SECTION OR ACTIVE CHALLENGE SCREEN */}
      {activeChallengeMode === 'menu' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="challenge-menu-selector">
          {/* Card 1: Spelling challenge */}
          <div className="bg-gradient-to-br from-amber-400 to-orange-300 rounded-3xl border-4 border-amber-500 shadow-[0_8px_0_0_#d97706] p-6 flex flex-col justify-between space-y-4 transform hover:scale-[1.01] transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl">✏️</span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-display font-black px-2.5 py-1 rounded-full">
                  10分/题
                </span>
              </div>
              <h3 className="font-display font-black text-lg text-amber-950">单词拼写大对决</h3>
              <p className="text-xs text-amber-900 font-display font-bold leading-normal">
                精选当下单元核心核心词！听托比语音，结合提示与卡片拼写，稳扎稳打夯实基本词组发音。
              </p>
            </div>
            <button
              onClick={() => handleMenuSwitch('spelling')}
              className="w-full text-center py-3 bg-white text-amber-950 font-display font-black text-xs rounded-xl border-b-4 border-amber-400 btn-bubbly hover:bg-amber-50 cursor-pointer shadow-sm"
            >
              发起拼写挑战 ▶️
            </button>
          </div>

          {/* Card 2: Vacab challenge */}
          <div className="bg-gradient-to-br from-teal-400 to-emerald-300 rounded-3xl border-4 border-teal-500 shadow-[0_8px_0_0_#0d9488] p-6 flex flex-col justify-between space-y-4 transform hover:scale-[1.01] transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl">📚</span>
                <span className="bg-teal-100 text-teal-800 text-[10px] font-display font-black px-2.5 py-1 rounded-full">
                  10分/题
                </span>
              </div>
              <h3 className="font-display font-black text-lg text-teal-950">词意大消消</h3>
              <p className="text-xs text-teal-900 font-display font-bold leading-normal">
                快速匹配！分析五年级语篇中文意思，在倒计时前匹配正确的英语短语，扩充记忆池。
              </p>
            </div>
            <button
              onClick={() => handleMenuSwitch('vocabulary')}
              className="w-full text-center py-3 bg-white text-teal-950 font-display font-black text-xs rounded-xl border-b-4 border-teal-400 btn-bubbly hover:bg-teal-50 cursor-pointer shadow-sm"
            >
              发起词意挑战 ▶️
            </button>
          </div>

          {/* Card 3: Grammar formulas scramble */}
          <div className="bg-gradient-to-br from-rose-400 to-pink-300 rounded-3xl border-4 border-rose-500 shadow-[0_8px_0_0_#e11d48] p-6 flex flex-col justify-between space-y-4 transform hover:scale-[1.01] transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🏰</span>
                <span className="bg-rose-100 text-rose-800 text-[10px] font-display font-black px-2.5 py-1 rounded-full">
                  20分 + 2⭐/题
                </span>
              </div>
              <h3 className="font-display font-black text-lg text-rose-950">句式拼接师</h3>
              <p className="text-xs text-rose-900 font-display font-bold leading-normal">
                语法城堡大闯关！将错乱的词块重新积木化复原！牢记 third-person singular (单三)、名词所有格以及介词搭配。
              </p>
            </div>
            <button
              onClick={() => handleMenuSwitch('grammar')}
              className="w-full text-center py-3 bg-white text-rose-950 font-display font-black text-xs rounded-xl border-b-4 border-rose-400 btn-bubbly hover:bg-rose-50 cursor-pointer shadow-sm"
            >
              发起拼接挑战 ▶️
            </button>
          </div>

          {/* Card 4: Dialog Simulation */}
          <div className="bg-gradient-to-br from-indigo-400 to-violet-300 rounded-3xl border-4 border-indigo-500 shadow-[0_8px_0_0_#4f46e5] p-6 flex flex-col justify-between space-y-4 transform hover:scale-[1.01] transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl">💬</span>
                <span className="bg-indigo-100 text-indigo-800 text-[10px] font-display font-black px-2.5 py-1 rounded-full">
                  多轮豪华丰厚
                </span>
              </div>
              <h3 className="font-display font-black text-lg text-indigo-950">情景大对话</h3>
              <p className="text-xs text-indigo-900 font-display font-bold leading-normal">
                与卡通吉祥物托比开展多回合模拟语音互动，打卡日常句型习惯。用最标准的对话获取星光勋章！
              </p>
            </div>
            <button
              onClick={() => handleMenuSwitch('dialogue')}
              className="w-full text-center py-3 bg-white text-indigo-950 font-display font-black text-xs rounded-xl border-b-4 border-indigo-400 btn-bubbly hover:bg-indigo-50 cursor-pointer shadow-sm"
            >
              发起情景对话 ▶️
            </button>
          </div>

          {/* Back button to Learning Map */}
          <div className="md:col-span-2 pt-4 flex justify-center">
            <button
              onClick={onBackToMap}
              className="px-8 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-display font-black text-sm rounded-2xl border-b-4 border-slate-400 cursor-pointer transition-transform active:scale-95 flex items-center gap-2 select-none"
            >
              ↩️ 返回学习地图
            </button>
          </div>
        </div>
      ) : (
        /* OTHERWISE show active task board */
        <div className="bg-white rounded-3xl border-4 border-slate-300 p-6 shadow-md space-y-6">
          
          {/* Header row in task */}
          <div className="flex items-center justify-between pb-4 border-b-2 border-slate-100">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleMenuSwitch('menu')}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-display font-black text-xs rounded-xl border border-slate-300 select-none cursor-pointer"
              >
                ◀ 返回主菜单
              </button>
              <h3 className="font-display font-black text-base md:text-lg text-slate-800 flex items-center gap-1.5">
                {activeChallengeMode === 'spelling' && '✏️ 单词拼写挑战'}
                {activeChallengeMode === 'vocabulary' && '📚 词意匹配挑战'}
                {activeChallengeMode === 'grammar' && '🏰 句式拼接挑战'}
                {activeChallengeMode === 'dialogue' && '💬 模拟情景大对话'}
              </h3>
            </div>

            {consecutiveStreak > 0 && (
              <div className="bg-rose-50 border border-rose-250 rounded-xl px-3 py-1 font-display font-black text-[10px] md:text-xs text-rose-600 animate-pulse flex items-center gap-1.5">
                🔥 连对：{consecutiveStreak}
              </div>
            )}
          </div>

          {/* ==================== SPELLING MODE PANEL ==================== */}
          {activeChallengeMode === 'spelling' && spellingWord && (
            <div className="space-y-6 max-w-lg mx-auto" id="spelling-challenge-playground">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl text-center space-y-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => speakText(spellingWord.word)}
                    className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl border-b-3 border-sky-700 font-display font-black text-xs cursor-pointer active:scale-95 select-none"
                  >
                    <Volume2 className="w-4 h-4 animate-pulse" /> 重新发音 / Pronounce
                  </button>
                </div>

                <div className="space-y-1 pt-1.5">
                  <p className="text-2xl font-display font-semibold text-sky-950 uppercase tracking-widest bg-white inline-block px-6 py-2 rounded-2xl border border-sky-100 shadow-sm font-mono">
                    {/* Spelling Blank hint dashes */}
                    {spellingWord.word.split('').map((char, index) => {
                      if (char === ' ') return ' ';
                      if (showSpellingHint) {
                        return index === 0 || index === spellingWord.word.length - 1 ? char : '_';
                      }
                      return '_';
                    }).join(' ')}
                  </p>
                  <p className="text-xs text-slate-400 font-display font-bold">
                    共 {spellingWord.word.length} 个字母组成
                  </p>
                </div>

                <div className="space-y-1 border-t border-slate-150 pt-4 text-xs font-display font-bold text-slate-600 leading-relaxed">
                  <p>📖 中文释义：<span className="text-amber-600 font-black">{spellingWord.meaning}</span></p>
                  <p>⏱️ 教材出处：{spellingWord.semester === 'First Semester' ? '第一学期' : '第二学期'} · {spellingWord.unit}</p>
                </div>
              </div>

              {/* Input for user */}
              <div className="space-y-2">
                <input
                  type="text"
                  value={spellingInput}
                  onChange={(e) => setSpellingInput(e.target.value)}
                  placeholder="在此输入拼写 (e.g. pilot)..."
                  className="w-full bg-slate-50 text-slate-800 border-3 border-sky-200 focus:border-sky-500 focus:ring-0 focus:outline-hidden p-3.5 rounded-2xl font-mono text-center font-bold text-lg leading-relaxed shadow-inside placeholder-slate-400 tracking-wide"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') submitSpelling();
                  }}
                  disabled={feedback.type === 'success'}
                  autoFocus
                />

                <div className="flex items-center justify-between gap-3 text-[11px] font-display font-bold">
                  <button
                    onClick={() => {
                      setShowSpellingHint(true);
                      setPoints(p => Math.max(0, p - 2));
                      speakText(`First letter is ${spellingWord.word[0]}`);
                    }}
                    className="text-amber-600 bg-amber-50 rounded-lg px-2.5 py-1 border border-amber-200 cursor-pointer active:scale-95 disabled:opacity-50"
                    disabled={showSpellingHint || feedback.type === 'success'}
                  >
                    💡 获取首尾字母线索 (扣2积分)
                  </button>

                  <button
                    onClick={() => speakText(spellingWord.word.split('').join(' '))}
                    className="text-fuchsia-600 bg-fuchsia-50 rounded-lg px-2.5 py-1 border border-fuchsia-250 cursor-pointer active:scale-95 disabled:opacity-50"
                    disabled={feedback.type === 'success'}
                  >
                    🗣️ 拼读发音联想
                  </button>
                </div>
              </div>

              {/* Show Answer Submit button */}
              {feedback.type === null ? (
                <button
                  onClick={submitSpelling}
                  disabled={!spellingInput.trim()}
                  className="w-full py-4 bg-lime-500 hover:bg-lime-600 text-lime-950 font-display font-black rounded-2xl border-b-4 border-lime-700 shadow-md text-sm select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform transition-all active:translate-y-0.5"
                >
                  确认拼写并提交 ✅
                </button>
              ) : (
                <div className="space-y-4">
                  <div className={`p-4 rounded-2xl text-xs font-display font-bold leading-normal border-2 whitespace-pre-wrap ${
                    feedback.type === 'success' ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-red-50 border-red-300 text-red-900'
                  }`}>
                    {feedback.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-emerald-600 inline mr-2" /> : <XCircle className="w-5 h-5 text-red-650 inline mr-2" />}
                    {feedback.text}
                  </div>

                  <button
                    onClick={initSpellingChallenge}
                    className="w-full py-3 bg-sky-400 hover:bg-sky-500 text-sky-950 font-display font-black rounded-xl border-b-4 border-sky-600 cursor-pointer shadow-xs text-xs flex items-center justify-center gap-1.5"
                  >
                    下一题单词战斗 <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ==================== VOCABULARY MATCH MODE ==================== */}
          {activeChallengeMode === 'vocabulary' && vocabWord && (
            <div className="space-y-6 max-w-lg mx-auto" id="vocab-challenge-playground">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-3xl space-y-4 text-center">
                <p className="text-[10px] uppercase font-display font-black text-slate-400 tracking-wider">
                  核心词组作战 / Vocabulary Item
                </p>
                <h1 className="text-3xl font-display font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
                  {vocabWord.word}
                  <button 
                    onClick={() => speakText(vocabWord.word)}
                    className="p-1 px-2.5 bg-slate-250 hover:bg-slate-200 text-slate-700 text-xs rounded-lg cursor-pointer"
                  >
                    🔊
                  </button>
                </h1>
                <p className="text-xs text-sky-600 font-display font-bold">
                  音标/Phonetic: <span className="font-mono">{vocabWord.phonetic}</span>
                </p>

                {/* Example sentence with word hidden as hints */}
                {vocabWord.example && (
                  <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 text-left space-y-1 mx-2">
                    <span className="text-[9px] uppercase font-display font-black text-sky-500 tracking-widest block">
                      教材句式范例 / Sentence Example
                    </span>
                    <p className="text-xs text-sky-950 font-medium font-display leading-tight italic">
                      "{vocabWord.example.replace(new RegExp(vocabWord.word, 'gi'), '_____')}"
                    </p>
                  </div>
                )}
              </div>

              {/* Render Options Grid selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vocabOptions.map((opt, i) => {
                  const isCorrect = opt === vocabWord.meaning;
                  let optStyle = 'border-slate-200 bg-white hover:bg-sky-50 text-slate-700';
                  
                  if (vocabSubmitted) {
                    if (isCorrect) {
                      optStyle = 'border-emerald-400 bg-emerald-100 text-emerald-950 shadow-[0_4px_0_0_#10b981]';
                    } else if (selectedVocabIdx === i) {
                      optStyle = 'border-red-400 bg-red-100 text-red-950 shadow-[0_4px_0_0_#f43f5e]';
                    } else {
                      optStyle = 'opacity-50 border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed';
                    }
                  } else {
                    optStyle = 'border-slate-200 hover:border-sky-300 hover:shadow-xs active:scale-[0.99]';
                  }

                  return (
                    <button
                      key={opt + i}
                      onClick={() => selectVocabAnswer(i)}
                      disabled={vocabSubmitted}
                      className={`p-4 border-2 rounded-2xl text-xs font-display font-black text-left cursor-pointer transition-all ${optStyle}`}
                    >
                      <span className="bg-slate-150 text-slate-600 text-[10px] px-2 py-0.5 rounded-md mr-2.5">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Show explanation output */}
              {vocabSubmitted && (
                <div className="space-y-4">
                  <div className={`p-4 rounded-3xl border-2 text-xs font-display font-bold leading-relaxed whitespace-pre-wrap ${
                    feedback.type === 'success' ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-red-50 border-red-300 text-red-900'
                  }`}>
                    {feedback.text}
                  </div>

                  <button
                    onClick={initVocabChallenge}
                    className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-display font-black rounded-2xl border-b-4 border-sky-700 cursor-pointer shadow-md text-xs flex items-center justify-center gap-1.5"
                  >
                    继续迎战下一词汇 <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ==================== GRAMMAR BLOCK SCRAMBLE ==================== */}
          {activeChallengeMode === 'grammar' && (
            <div className="space-y-6 max-w-lg mx-auto" id="grammar-challenge-playground">
              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-5 text-center">
                <span className="bg-indigo-600 text-white text-[9px] uppercase font-display font-black px-3 py-1 rounded-full border border-indigo-400">
                  Unit: {grammarRuleKey} / Grammar Focus
                </span>
                <p className="text-xs text-indigo-950 font-display font-bold mt-2.5 leading-relaxed bg-white/70 rounded-xl p-3 border border-indigo-100">
                  {/* Print grammar target point */}
                  💡 搭配要诀：{GRAMMAR_RULES[grammarRuleKey]?.rule}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display font-black text-slate-500 block uppercase">
                  🧩 拼装好的新句式 (点击下方乱序块进行拼装)：
                </label>
                
                {/* User assembled sentence view */}
                <div className="bg-slate-50 border-3 border-indigo-150 min-h-16 p-3.5 rounded-2xl flex flex-wrap gap-2 items-center justify-center shadow-inside bg-dashed border-dashed">
                  {grammarUserBlocks.map((block, i) => (
                    <button
                      key={`user-${block}-${i}`}
                      onClick={() => handleBlockClick(block, 'user')}
                      disabled={grammarSubmitted}
                      className="px-3.5 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white border-b-3 border-indigo-800 font-display font-semibold text-xs rounded-xl cursor-pointer active:scale-95 border pr-2"
                    >
                      {block} <span className="text-[8px] bg-indigo-700 text-indigo-200 px-1 py-0.2 rounded-md ml-1.5">✕</span>
                    </button>
                  ))}
                  {grammarUserBlocks.length === 0 && (
                    <span className="text-xs text-slate-400 font-display font-medium">请点击下方的英语碎块...</span>
                  )}
                </div>
              </div>

              {/* Scrambled blocks selector */}
              {!grammarSubmitted && (
                <div className="space-y-1.5">
                  <span className="text-[10px] font-display font-black text-slate-450 block uppercase">
                    可点击提取的乱序句法碎颗粒：
                  </span>
                  <div className="flex flex-wrap gap-2 justify-center p-3.5 bg-slate-100/50 rounded-2xl border border-slate-200">
                    {grammarScrambleBlocks.map((block, i) => (
                      <button
                        key={`scramble-${block}-${i}`}
                        onClick={() => handleBlockClick(block, 'scramble')}
                        className="px-3 py-2 bg-white hover:bg-indigo-50 border border-slate-350 hover:border-indigo-400 text-slate-800 font-sans font-bold text-xs rounded-xl cursor-pointer shadow-xs active:scale-95"
                      >
                        {block}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit triggers comparing */}
              {!grammarSubmitted ? (
                <button
                  onClick={submitGrammarScramble}
                  disabled={grammarUserBlocks.length === 0}
                  className="w-full py-4 bg-lime-500 hover:bg-lime-600 text-lime-950 font-display font-black rounded-2xl border-b-4 border-lime-700 shadow-md text-sm select-none cursor-pointer disabled:opacity-50"
                >
                  拼好了，一键向守卫城墙提交认证 🏰
                </button>
              ) : (
                <div className="space-y-4">
                  <div className={`p-4 rounded-3xl border-2 text-xs font-display font-bold leading-relaxed whitespace-pre-wrap ${
                    feedback.type === 'success' ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-red-50 border-red-300 text-red-900'
                  }`}>
                    {feedback.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-emerald-500 inline mr-2" /> : <XCircle className="w-5 h-5 text-red-500 inline mr-2" />}
                    {feedback.text}
                  </div>

                  <button
                    onClick={initGrammarChallenge}
                    className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-display font-black rounded-2xl border-b-4 border-sky-700 cursor-pointer shadow-md text-xs flex items-center justify-center gap-1.5"
                  >
                    挑战下一句城堡拼写 <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ==================== DIALOGUE PRACTICE PANEL ==================== */}
          {activeChallengeMode === 'dialogue' && (
            <div className="space-y-6 max-w-lg mx-auto" id="dialogue-challenge-playground">
              {!dialogueState ? (
                // Select theme Menu
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 font-display font-black text-center">
                    请在下方挑选一个场景，和托比进行趣味模拟呼叫英文交谈吧！
                  </p>
                  
                  <div className="space-y-2.5">
                    {Object.entries(DIALOGUES).map(([key, d]) => (
                      <button
                        key={key}
                        onClick={() => startDialogue(key as any)}
                        className="w-full p-4 bg-slate-50 hover:bg-sky-50 text-slate-800 border-2 border-slate-200 hover:border-sky-400 rounded-3xl font-display font-black text-xs md:text-sm text-left flex items-center justify-between cursor-pointer transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xl">{d.mascot}</span>
                          {d.title}
                        </span>
                        <span className="bg-sky-100 text-sky-700 text-[10px] px-2.5 py-1 rounded-full font-bold">
                          进入交谈
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                // Active Interactive Dialogue turns
                <div className="space-y-5">
                  <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-3 border border-slate-100">
                    <span className="text-xs font-display font-black text-indigo-950">
                      📟 正在和托比通话中... (第 {dialogueState.step} / {DIALOGUES[activeDialogueId as keyof typeof DIALOGUES].turns.length} 轮)
                    </span>
                    <button
                      onClick={() => {
                        setActiveDialogueId(null);
                        setDialogueState(null);
                      }}
                      className="text-[10px] text-rose-600 bg-rose-50 px-2 py-1 rounded-lg border border-rose-200"
                    >
                      挂断电话
                    </button>
                  </div>

                  {/* Message rows */}
                  <div className="space-y-4 max-h-[340px] overflow-y-auto p-2 border-2 border-slate-100 rounded-2xl bg-slate-50">
                    {dialogueState.replies.map((reply, i) => (
                      <div key={reply.text + i} className="space-y-2">
                        {/* bubble */}
                        <div className={`flex items-start gap-2.5 ${reply.role === 'student' ? 'flex-row-reverse' : ''}`}>
                          <div className={`text-2xl p-1.5 rounded-lg shrink-0 select-none ${reply.role === 'student' ? 'bg-amber-100' : 'bg-sky-100'}`}>
                            {reply.role === 'student' ? '🙋' : '🐶'}
                          </div>
                          
                          <div className={`rounded-2xl p-3 font-display max-w-[85%] text-xs font-bold leading-normal ${
                            reply.role === 'student' 
                              ? 'bg-amber-400 text-amber-950 border-b-2 border-amber-600'
                              : 'bg-white text-slate-800 border border-slate-200'
                          }`}>
                            <p>{reply.text}</p>
                          </div>
                        </div>

                        {/* educational instant hints feedback */}
                        {reply.feedback && (
                          <div className="bg-teal-50 border border-teal-200 text-teal-900 rounded-xl p-3 text-[11px] font-display leading-tight italic mx-8">
                            📝 托比纠偏反馈： {reply.feedback}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Prompt User selections if NOT finished */}
                  {!dialogueState.finished ? (
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-display font-black text-slate-500 block uppercase">
                        请点击选择你想回给托比的英文：
                      </span>
                      
                      <div className="space-y-2">
                        {DIALOGUES[activeDialogueId as keyof typeof DIALOGUES].turns[dialogueState.step]?.options.map((opt, i) => (
                          <button
                            key={opt.text + i}
                            onClick={() => selectDialogueOption(opt)}
                            className="w-full p-3.5 bg-white hover:bg-amber-50 text-slate-800 border-2 border-slate-200 hover:border-amber-400 text-xs font-display font-black text-left rounded-2xl cursor-pointer active:scale-[0.99] transition-all"
                          >
                            <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-md mr-2 text-center inline-block">
                              选项 {i + 1}
                            </span>
                            {opt.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Finish dialogue state view rewards
                    <div className="bg-amber-50 border-4 border-amber-400 rounded-3xl p-5 text-center space-y-3.5">
                      <span className="text-4xl animate-bounce inline-block">🎉</span>
                      <h4 className="font-display font-black text-amber-900 text-base">交谈挑战圆满完成！</h4>
                      <p className="text-xs text-amber-950 font-display font-bold px-2 leading-relaxed">
                        非常好！我们在本地和托比交流了两个回合！本次模拟评分为：{dialogueState.score} 分！
                        我们将它转化为 <span className="text-sm font-black text-sky-650">+{dialogueState.score}</span> 积分奖励与大量的成长星光！⭐
                      </p>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setActiveDialogueId(null);
                            setDialogueState(null);
                          }}
                          className="flex-1 py-3 bg-white hover:bg-amber-100/50 text-amber-900 font-display font-black border border-amber-300 rounded-xl cursor-pointer text-xs"
                        >
                          换一个场景交谈 💬
                        </button>

                        <button
                          onClick={() => handleMenuSwitch('menu')}
                          className="flex-1 py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 border-b-4 border-amber-600 font-display font-black rounded-xl cursor-pointer text-xs btn-bubbly"
                        >
                          返回主菜单 ⭐
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      )}
    </div>
  );
}
