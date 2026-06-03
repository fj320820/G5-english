import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, HelpCircle, ArrowRight, CheckCircle2, XCircle, RefreshCw, ArrowLeft, Stars, Star, Heart, Loader2 } from 'lucide-react';
import { WordItem, LearningContext, QuizQuestion } from '../types';

interface PracticeArenaProps {
  words: WordItem[];
  selectedContext: LearningContext;
  speakText: (text: string) => void;
  onBackToMap: () => void;
  onAddMistake?: (mistake: {
    question: string;
    options?: string[];
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
    wordKeyword: string;
  }) => void;
  onCompleteQuiz?: (unit: string) => void;
}

export default function PracticeArena({ words, selectedContext, speakText, onBackToMap, onAddMistake, onCompleteQuiz }: PracticeArenaProps) {
  const filteredWords = words.filter(
    (w) => w.semester === selectedContext.semester && w.unit === selectedContext.unit
  );

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [fillValue, setFillValue] = useState('');
  const [orderedSentenceBlocks, setOrderedSentenceBlocks] = useState<string[]>([]);
  const [unorderedSentenceBlocks, setUnorderedSentenceBlocks] = useState<string[]>([]);
  const [isAttemptSubmitted, setIsAttemptSubmitted] = useState(false);
  const [scoreTracker, setScoreTracker] = useState({ correct: 0, total: 0 });
  const [quizFinished, setQuizFinished] = useState(false);
  const [isAnswerRight, setIsAnswerRight] = useState(false);

  // Generate Questions dynamically when unit changes
  useEffect(() => {
    generateUnitQuestions();
  }, [selectedContext.unit, selectedContext.semester]);

  const generateUnitQuestions = () => {
    if (filteredWords.length === 0) return;

    const queryPool: QuizQuestion[] = [];

    // Make 1-2 MCQ translation questions
    filteredWords.forEach((wordObj, i) => {
      // Multiple Choice Translation
      const distractors = filteredWords
        .filter((_, idx) => idx !== i)
        .map((w) => w.meaning);
      while (distractors.length < 3) distractors.push('学习', '读书', '快乐');
      // Shuffle options
      const finalOptions = [wordObj.meaning, ...distractors.slice(0, 2)].sort(() => Math.random() - 0.5);
      const correctIdx = finalOptions.indexOf(wordObj.meaning);

      queryPool.push({
        id: `mcq-${wordObj.word}-${i}`,
        type: 'multiple-choice',
        question: `英文单词 "${wordObj.word}" 的中文意思是什么呢？`,
        options: finalOptions,
        correctOptionIndex: correctIdx,
        correctString: wordObj.meaning,
        explanation: `单词 "${wordObj.word}" 读作 ${wordObj.phonetic}。其中文释义为 "${wordObj.meaning}"。托比老师的记忆魔法：${wordObj.memoryTip}`,
        wordKeyword: wordObj.word
      });

      // Fill in the Blank Example completing
      if (wordObj.example && wordObj.example.toLowerCase().includes(wordObj.word.toLowerCase())) {
        const blAnkSentence = wordObj.example.replace(new RegExp(`\\b${wordObj.word}\\b`, 'gi'), '______');
        queryPool.push({
          id: `fill-${wordObj.word}-${i}`,
          type: 'fill-blank',
          question: `请拼写出正确的单词填空："${blAnkSentence}"（中文意思：${wordObj.translation}）`,
          correctString: wordObj.word,
          explanation: `完整的句子是："${wordObj.example}"。这里使用核心单词 "${wordObj.word}"，释义为 "${wordObj.meaning}"。`,
          wordKeyword: wordObj.word
        });
      }

      // Sentence ordering questions
      if (wordObj.example) {
        // Clean up sentence punctuation
        const cleanWords = wordObj.example
          .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"")
          .split(' ');
        
        if (cleanWords.length > 2 && cleanWords.length < 8) {
          const blocks = [...cleanWords].sort(() => Math.random() - 0.5);
          queryPool.push({
            id: `order-${wordObj.word}-${i}`,
            type: 'ordering',
            question: `请点击词块，连词成句：`,
            orderingBlocks: cleanWords, // original correct array
            correctString: wordObj.example.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").trim().toLowerCase(),
            explanation: `拼装好的句子是："${wordObj.example}"。中文翻译为："${wordObj.translation}"！`,
            wordKeyword: wordObj.word
          });
        }
      }
    });

    // Shuffle and pick at most 5 questions to keep it snappy for 10-year olds!
    const picked = queryPool.sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(picked);
    setCurrentQuestionIdx(0);
    setSelectedOpt(null);
    setFillValue('');
    setOrderedSentenceBlocks([]);
    setIsAttemptSubmitted(false);
    setScoreTracker({ correct: 0, total: picked.length });
    setQuizFinished(false);

    if (picked[0] && picked[0].type === 'ordering') {
      const orig = [...picked[0].orderingBlocks!];
      setUnorderedSentenceBlocks([...orig].sort(() => Math.random() - 0.5));
    }
  };

  const handleNextStep = () => {
    if (currentQuestionIdx + 1 < questions.length) {
      const nextIdx = currentQuestionIdx + 1;
      setCurrentQuestionIdx(nextIdx);
      setSelectedOpt(null);
      setFillValue('');
      setOrderedSentenceBlocks([]);
      setIsAttemptSubmitted(false);

      if (questions[nextIdx] && questions[nextIdx].type === 'ordering') {
        const orig = [...questions[nextIdx].orderingBlocks!];
        setUnorderedSentenceBlocks([...orig].sort(() => Math.random() - 0.5));
      }
    } else {
      setQuizFinished(true);
      if (onCompleteQuiz) {
        onCompleteQuiz(selectedContext.unit);
      }
      // Speak final achievement
      const isAwesome = scoreTracker.correct >= questions.length / 2;
      if (isAwesome) {
        speakText(`Splendid! You passed Toby\'s practice with ${scoreTracker.correct} correct answers! Toby is so proud of you! 🏆`);
      } else {
        speakText(`Nice try! Study the cards and practice spelling. Toby is here to support you! 🚀`);
      }
    }
  };

  const handleBlockTap = (blk: string, fromOrdered: boolean) => {
    if (isAttemptSubmitted) return;

    if (fromOrdered) {
      setOrderedSentenceBlocks((prev) => prev.filter((b) => b !== blk));
      setUnorderedSentenceBlocks((prev) => [...prev, blk]);
    } else {
      setUnorderedSentenceBlocks((prev) => prev.filter((b) => b !== blk));
      setOrderedSentenceBlocks((prev) => [...prev, blk]);
    }
  };

  const handleCheckAnswer = () => {
    if (isAttemptSubmitted) return;

    const currentQ = questions[currentQuestionIdx];
    let isCorrect = false;

    if (currentQ.type === 'multiple-choice') {
      isCorrect = (selectedOpt === currentQ.correctOptionIndex);
    } else if (currentQ.type === 'fill-blank') {
      isCorrect = (fillValue.trim().toLowerCase() === currentQ.correctString.toLowerCase());
    } else if (currentQ.type === 'ordering') {
      const currentOrderedJoined = orderedSentenceBlocks.join(' ').toLowerCase().trim();
      const targetClean = currentQ.correctString.toLowerCase().trim();
      isCorrect = (currentOrderedJoined === targetClean);
    }

    setIsAnswerRight(isCorrect);
    setIsAttemptSubmitted(true);

    if (isCorrect) {
      setScoreTracker((prev) => ({ ...prev, correct: prev.correct + 1 }));
      speakText("Awesome! Your answer is absolutely correct! ⭐");
    } else {
      speakText("Good try! Toby will show you the correct answer. ⭐");
      if (onAddMistake) {
        let uAnswer = "";
        if (currentQ.type === 'multiple-choice') {
          uAnswer = selectedOpt !== null ? currentQ.options?.[selectedOpt] || "" : "";
        } else if (currentQ.type === 'fill-blank') {
          uAnswer = fillValue;
        } else if (currentQ.type === 'ordering') {
          uAnswer = orderedSentenceBlocks.join(' ');
        }
        onAddMistake({
          question: currentQ.question,
          options: currentQ.options,
          userAnswer: uAnswer || "未作答",
          correctAnswer: currentQ.correctString,
          explanation: currentQ.explanation,
          wordKeyword: currentQ.wordKeyword || ""
        });
      }
    }
  };

  if (filteredWords.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border-4 border-emerald-400 max-w-lg mx-auto shadow-[0_8px_0_0_#10b981]">
        <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <p className="text-lg text-slate-700 font-display font-bold">没有闯关题目！🏟️</p>
        <p className="text-sm text-slate-500 mt-2 font-sans font-medium">托比提示：选择一个含有单词的单元，以激活答题闯关系统！</p>
        <button
          onClick={onBackToMap}
          className="mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 font-display font-bold text-white rounded-2xl border-b-4 border-emerald-700 btn-bubbly shadow-md cursor-pointer"
        >
          返回地图 🗺️
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center max-w-md mx-auto">
        <LoaderComponent text="托比老师正在为你精心编制趣味闯关题目..." />
      </div>
    );
  }

  if (quizFinished) {
    const ratio = scoreTracker.correct / scoreTracker.total;
    const isPerfect = ratio === 1;

    return (
      <div className="bg-white rounded-3xl border-4 border-emerald-400 shadow-[0_10px_0_0_#10b981] p-8 text-center max-w-xl mx-auto space-y-6" id="quiz-result-card">
        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto text-yellow-500 border-4 border-yellow-300 transform hover:scale-110 transition-transform">
          <Trophy className="w-12 h-12 animate-bounce text-amber-500" />
        </div>

        <div className="space-y-1">
          <h2 className="text-3xl font-display font-extrabold text-slate-800">闯关挑战成绩单！🏆</h2>
          <p className="text-xs text-emerald-600 uppercase tracking-widest font-extrabold">当前单元：{selectedContext.unit}</p>
        </div>

        {/* Big score indicator */}
        <div className="bg-gradient-to-br from-amber-400 to-yellow-300 border-b-6 border-amber-600 rounded-3xl p-6 max-w-xs mx-auto text-white shadow-md">
          <span className="text-[10px] tracking-widest font-extrabold uppercase font-display text-amber-950">成功攻克的单词</span>
          <div className="text-5xl font-display font-black leading-none mt-2">
            {scoreTracker.correct} / {scoreTracker.total}
          </div>
          <span className="text-xs text-amber-900 font-display font-bold mt-2 block">
            {isPerfect ? "🎉 金色全对星章！⭐" : "🚀 太棒了，继续加油！"}
          </span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-sm mx-auto font-medium">
          "哇，你的英语听力和拼写反应非常的迅速！托比老师觉得你的词汇和语法大有进步，真是五年级英语小明星！"
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-3">
          <button
            onClick={generateUnitQuestions}
            className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-yellow-950 border-b-4 border-yellow-600 rounded-2xl font-display font-bold btn-bubbly transition-all cursor-pointer shadow-md text-xs md:text-sm"
          >
            <RefreshCw className="w-4 h-4 mr-1.5 inline-block" />
            再玩一次！🔄
          </button>
          
          <button
            onClick={onBackToMap}
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white border-b-4 border-emerald-700 rounded-2xl font-display font-bold btn-bubbly transition-all cursor-pointer shadow-md text-xs md:text-sm"
          >
            返回学习地图 🗺️
          </button>
        </div>
      </div>
    );
  }

  const activeQ = questions[currentQuestionIdx];

  return (
    <div className="space-y-6">
      {/* Back to map bar */}
      <div className="flex items-center justify-between bg-emerald-400 p-3 rounded-2xl border-b-4 border-emerald-600 shadow-sm text-emerald-950">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-2 bg-emerald-100 hover:bg-white text-emerald-900 px-4 py-2 rounded-xl text-xs font-display font-bold border-b-2 border-emerald-300 btn-bubbly cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          返回地图 🗺️
        </button>
        <span className="font-display font-extrabold text-sm md:text-base flex items-center gap-1.5 uppercase tracking-wide">
          🏆 闯关挑战对决
        </span>
        <div className="flex items-center gap-1 bg-emerald-950/20 text-white rounded-full px-3 py-1 font-mono text-xs font-bold">
          <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 animate-pulse" />
          得分: {scoreTracker.correct}
        </div>
      </div>

      <div className="bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_8px_0_0_#059669] p-6 md:p-8 space-y-6 relative overflow-hidden" id="practice-arena-body">
        
        {/* Progress bar with Duolingo style */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-3 py-1 rounded-full font-display uppercase tracking-wider">
              第 {currentQuestionIdx + 1} 关 / 共 {questions.length} 关
            </span>
            <span className="text-xs font-display font-bold text-slate-500 flex items-center gap-1">
              <Stars className="w-4 h-4 text-amber-500 fill-amber-300" />
              闯关掌握进度: {Math.round(((currentQuestionIdx) / questions.length) * 100)}%
            </span>
          </div>
          
          {/* Real track layout */}
          <div className="w-full bg-slate-100 h-4 rounded-full border-2 border-slate-200 overflow-hidden">
            <div 
              className="bg-emerald-400 h-full rounded-full transition-all duration-300 border-r-4 border-emerald-600"
              style={{ width: `${((currentQuestionIdx) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Toby's Speech Question Bubble */}
        <div className="bg-amber-50 border-3 border-amber-200 p-5 rounded-2xl relative mt-4">
          <div className="absolute -top-3.5 left-4 bg-amber-400 text-amber-950 text-[10px] font-display font-extrabold px-2.5 py-0.5 rounded-full uppercase">
            🗣️ 托比老师的魔法问题
          </div>
          <h2 className="text-base md:text-lg font-display font-extrabold text-slate-800 leading-snug mt-1 pt-1">
            {activeQ.question}
          </h2>
        </div>

        {/* Answer Inputs layout based on Question Archetype */}
        <div className="border-t-2 border-slate-100 pt-5">
          {activeQ.type === 'multiple-choice' && activeQ.options && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeQ.options.map((opt, idx) => {
                const isSelected = selectedOpt === idx;
                let btnClass = 'bg-white border-2 border-b-6 border-slate-300 hover:bg-slate-55 text-slate-700';
                if (isSelected) {
                  btnClass = 'bg-emerald-100 border-emerald-600 text-emerald-950 font-black';
                }
                if (isAttemptSubmitted) {
                  if (idx === activeQ.correctOptionIndex) {
                    btnClass = 'bg-emerald-400 border-emerald-600 text-emerald-950 font-black';
                  } else if (isSelected) {
                    btnClass = 'bg-rose-400 border-rose-600 text-rose-950 line-through';
                  } else {
                    btnClass = 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedOpt(idx);
                      speakText(opt);
                    }}
                    disabled={isAttemptSubmitted}
                    className={`px-4 py-4 rounded-2xl text-xs sm:text-sm font-display font-bold btn-bubbly text-center transition-all cursor-pointer ${btnClass}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {activeQ.type === 'fill-blank' && (
            <div className="max-w-md space-y-3">
              <input
                type="text"
                value={fillValue}
                onChange={(e) => setFillValue(e.target.value)}
                placeholder="在此输入你要拼写的魔法英文单词..."
                disabled={isAttemptSubmitted}
                className="w-full px-4 py-3.5 border-3 border-emerald-200 focus:border-emerald-500 rounded-2xl text-sm bg-white outline-hidden font-display"
              />
            </div>
          )}

          {activeQ.type === 'ordering' && (
            <div className="space-y-4">
              {/* Assembled block container */}
              <div className="min-h-[60px] p-3 bg-emerald-50/50 border-3 border-dashed border-emerald-200 rounded-2xl flex flex-wrap gap-2.5 items-center">
                {orderedSentenceBlocks.length === 0 ? (
                  <span className="text-slate-400 text-xs font-display italic px-2">顺次点击下方的英文语块，组装为符合语法的原句...</span>
                ) : (
                  orderedSentenceBlocks.map((blk, idx) => (
                    <button
                      key={`ord-${idx}`}
                      onClick={() => handleBlockTap(blk, true)}
                      disabled={isAttemptSubmitted}
                      className="bg-emerald-400 text-emerald-950 border-2 border-b-4 border-emerald-600 rounded-xl px-3.5 py-2 text-xs md:text-sm font-display font-extrabold shadow-sm cursor-pointer btn-bubbly"
                    >
                      {blk}
                    </button>
                  ))
                )}
              </div>

              {/* Unassembled blocks */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {unorderedSentenceBlocks.map((blk, idx) => (
                  <button
                    key={`unord-${idx}`}
                    onClick={() => {
                      handleBlockTap(blk, false);
                      speakText(blk);
                    }}
                    disabled={isAttemptSubmitted}
                    className="bg-white hover:bg-slate-50 border-2 border-b-4 border-slate-300 rounded-xl px-3.5 py-2 text-xs md:text-sm font-display font-medium text-slate-700 cursor-pointer btn-bubbly"
                  >
                    {blk}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Button panel */}
        <div className="flex justify-end gap-3 pt-4 border-t-2 border-slate-100">
          {!isAttemptSubmitted ? (
            <button
              onClick={handleCheckAnswer}
              disabled={(activeQ.type === 'multiple-choice' && selectedOpt === null) || (activeQ.type === 'fill-blank' && !fillValue.trim()) || (activeQ.type === 'ordering' && orderedSentenceBlocks.length === 0)}
              className={`px-6 py-4.5 text-xs md:text-sm font-display font-black rounded-2xl border-b-4 btn-bubbly flex items-center gap-1.5 cursor-pointer shadow-md ${
                ((activeQ.type === 'multiple-choice' && selectedOpt === null) || (activeQ.type === 'fill-blank' && !fillValue.trim()) || (activeQ.type === 'ordering' && orderedSentenceBlocks.length === 0))
                  ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-700'
              }`}
            >
              提交核对！🔬
            </button>
          ) : (
            <button
              onClick={handleNextStep}
              className="bg-yellow-400 hover:bg-yellow-500 border-b-4 border-yellow-600 text-yellow-950 px-6 py-4 rounded-2xl text-xs md:text-sm font-display font-black flex items-center gap-1.5 shadow-md cursor-pointer btn-bubbly transition-all"
            >
              开启下一题挑战
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Visual Response banner after check */}
        {isAttemptSubmitted && (
          <div className={`p-5 rounded-3xl border-3 flex gap-3.5 items-start select-text shadow-sm ${
            isAnswerRight 
              ? 'bg-emerald-100 border-emerald-300 text-emerald-950' 
              : 'bg-rose-100 border-rose-300 text-rose-950'
          }`}>
            {isAnswerRight ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-600 fill-emerald-100 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-8 h-8 text-rose-600 fill-rose-100 shrink-0 mt-0.5" />
            )}

            <div className="space-y-1">
              <h4 className="font-display font-black text-sm md:text-base">
                {isAnswerRight ? "太棒了！拼写与释义完全正确！🎉" : "距离成功只差一步！托比老师的解析："}
              </h4>
              <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap select-text font-sans font-medium">
                {activeQ.explanation}
              </p>
              <div className="text-[11px] font-mono bg-white/60 inline-block px-2 py-0.5 rounded-lg font-bold border-2 border-dashed border-emerald-300">
                本题参考拼写解答: {activeQ.correctString}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function LoaderComponent({ text }: { text: string }) {
  return (
    <div className="p-8 text-center bg-white rounded-3xl border-4 border-amber-300 shadow-md flex flex-col items-center justify-center gap-3">
      <Loader2 className="w-10 h-10 animate-spin text-amber-500" />
      <span className="text-xs text-slate-500 font-display font-bold">{text}</span>
    </div>
  );
}
