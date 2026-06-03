import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Check, Trash2, ShieldAlert, Sparkles, RefreshCw, X, Loader2, Trophy, ArrowRight, Smile } from 'lucide-react';
import { t } from '../utils/translation';

interface MistakeItem {
  id: string;
  question: string;
  options?: string[];
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  wordKeyword: string;
  unit: string;
}

interface MistakeBookProps {
  mistakeBook: MistakeItem[];
  onRemoveMistake: (id: string) => void;
  speakText: (text: string) => void;
  onBackToMap: () => void;
  triggerSparkle?: () => void;
}

export default function MistakeBook({
  mistakeBook,
  onRemoveMistake,
  speakText,
  onBackToMap,
  triggerSparkle,
}: MistakeBookProps) {
  const [retryMode, setRetryMode] = useState<boolean>(false);
  const [activeRetryIdx, setActiveRetryIdx] = useState<number>(0);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const startRetry = () => {
    if (mistakeBook.length === 0) return;
    setRetryMode(true);
    setActiveRetryIdx(0);
    resetAttempt();
    speakText("Initiating defensive guard quiz! Let's eliminate our english mistakes one by one! ⚔️");
  };

  const endRetry = () => {
    setRetryMode(false);
  };

  const resetAttempt = () => {
    setTypedAnswer('');
    setSelectedOpt(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  const activeMistake = mistakeBook[activeRetryIdx];

  const handleCheckAttempt = () => {
    if (isAnswered) return;

    let correct = false;
    const cleanCorrect = activeMistake.correctAnswer.toLowerCase().trim();

    if (activeMistake.options && activeMistake.options.length > 0) {
      // Multiple choice questions
      const userSelectedText = selectedOpt !== null ? activeMistake.options[selectedOpt] || "" : "";
      correct = userSelectedText.toLowerCase().trim() === cleanCorrect;
    } else {
      // Free text spelling check
      correct = typedAnswer.toLowerCase().trim() === cleanCorrect;
    }

    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      speakText("Phenomenal! You conquered this tough question and removed the mistake! 🥇");
      if (triggerSparkle) triggerSparkle();
    } else {
      speakText("Valiant effort! Toby says checking explanations leads to great wisdom.");
    }
  };

  const handleNextRetry = () => {
    // If correct, remove from mistake book BEFORE moving to avoid offset issue
    if (isCorrect) {
      onRemoveMistake(activeMistake.id);
      
      // If there was only 1 item remaining, we're done!
      if (mistakeBook.length <= 1) {
        setRetryMode(false);
        speakText("Spectacular! You cleared all the mistakes in your mistakes diary! 🏰");
        return;
      }
      
      // Since it's removed, staying at the same index effectively grabs the "next" item
      // but ensure we don't go out of bounds of the updated list
      if (activeRetryIdx >= mistakeBook.length - 1) {
        setActiveRetryIdx(0);
      }
    } else {
      // If incorrect, keep it in the book and just slide forward
      if (activeRetryIdx + 1 < mistakeBook.length) {
        setActiveRetryIdx((prev) => prev + 1);
      } else {
        setActiveRetryIdx(0); // circular list
      }
    }
    
    resetAttempt();
  };

  return (
    <div className="space-y-6 animate-fade-in" id="mistake-book-panel">
      {/* Upper Navigation Banner */}
      <div className="flex items-center justify-between bg-rose-500 p-4 rounded-3xl border-b-4 border-rose-700 shadow-sm text-white">
        <button
          onClick={retryMode ? endRetry : onBackToMap}
          className="flex items-center gap-2 bg-white hover:bg-rose-50 text-rose-900 px-4 py-2 rounded-xl text-xs font-display font-black border-2 border-rose-300 btn-bubbly cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          {retryMode ? "退出消错练习 ↩" : "返回地图 🗺️"}
        </button>
        <span className="font-display font-black text-sm md:text-base flex items-center gap-1.5 uppercase tracking-wide">
          📕 避坑宝典错题本
        </span>
        <div className="flex items-center gap-1.5 bg-rose-950/20 text-white rounded-full px-3 py-1 font-mono text-xs font-bold shadow-inner">
          <BookOpen className="w-3.5 h-3.5 text-rose-200 fill-rose-200" />
          错题数: {mistakeBook.length}
        </div>
      </div>

      {mistakeBook.length === 0 ? (
        /* SAFE & COZY SCREEN - ZERO ERRORS */
        <div className="p-12 text-center bg-white rounded-3xl border-4 border-emerald-400 max-w-lg mx-auto shadow-[0_8px_0_0_#34d399] space-y-5">
          <div className="text-6xl animate-bounce">🏰</div>
          <h3 className="text-xl font-display font-black text-slate-800">万岁！城堡内无错题雷区 🎉</h3>
          <p className="text-xs text-slate-500 font-sans font-medium leading-relaxed max-w-sm mx-auto">
            "托比老师很高兴，你在之前的闯关挑战与火箭复习考试里写出的英语句子都十分端正! 所有的拼写错误都被你消灭啦！你非常擅长保持完美的防线！"
          </p>
          <button
            onClick={onBackToMap}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-xs rounded-2xl border-b-4 border-emerald-700 btn-bubbly shadow-md cursor-pointer"
          >
            去接受更多奇妙挑战 ⚔️
          </button>
        </div>
      ) : !retryMode ? (
        /* LIST EXPLANATION VIEW */
        <div className="space-y-6">
          {/* Motivation bubble from Toby */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-rose-50 border-2 border-rose-200 rounded-2xl gap-3">
            <div className="flex items-start gap-2.5 text-xs text-rose-950 font-display font-semibold text-left">
              <span className="text-lg">🐾</span>
              <div>
                <span className="font-black block">托比老师的小建议：</span>
                "不要害怕英语中出现的拼写与语法错误。错题本正是你的五年级英语护航防空网。点击下面的按钮开始消灭错题吧！"
              </div>
            </div>
            
            <button
              onClick={startRetry}
              className="px-5 py-3 bg-rose-500 hover:bg-rose-600 text-white font-display font-black text-xs rounded-2xl border-b-4 border-rose-700 btn-bubbly shadow-md cursor-pointer shrink-0 animate-bounce"
            >
              🔥 开启消灭错题挑战 (消灭错题)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mistakeBook.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border-4 border-slate-200 p-5 shadow-sm hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4 text-left"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-display font-black text-rose-500 bg-rose-50 border border-rose-200 rounded-full px-2.5 py-0.5">
                      错题 #{index + 1} • {t(item.unit)}
                    </span>
                    <button
                      onClick={() => {
                        onRemoveMistake(item.id);
                        speakText("错题已移除");
                      }}
                      className="text-slate-300 hover:text-red-500 transition-colors p-1"
                      title="直接移除此错题"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-sans font-extrabold text-slate-800 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono">
                      {item.question}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-display">
                    <div className="bg-red-50 border border-red-150 rounded-xl p-2.5 text-red-900 font-medium">
                      <span className="text-[10px] text-red-600 font-black block select-none mb-0.5">你的回答:</span>
                      <span className="line-through">{item.userAnswer || "未作答"}</span>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-150 rounded-xl p-2.5 text-emerald-900 font-medium md:font-semibold">
                      <span className="text-[10px] text-emerald-600 font-black block select-none mb-0.5">正确答案:</span>
                      <span>{item.correctAnswer}</span>
                    </div>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-150 rounded-xl p-3 text-xs leading-relaxed font-sans font-medium text-slate-700">
                    <span className="font-display font-black text-indigo-800 block select-none text-[10px] mb-0.5 uppercase tracking-wide">
                      💡 托比老师的纠错秘笈:
                    </span>
                    {item.explanation}
                  </div>
                </div>

                <div className="flex gap-2 justify-end select-none">
                  <button
                    onClick={() => speakText(item.correctAnswer)}
                    className="p-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg text-indigo-700 border border-indigo-200 text-xs font-display font-bold flex items-center gap-1 cursor-pointer"
                  >
                    🔊 拼读核心词: {item.wordKeyword}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ACTIVE RETRY PRACTICE ZONE */
        <div className="max-w-xl mx-auto bg-slate-50 p-6 rounded-3xl border-4 border-rose-300 shadow-md space-y-6">
          <div className="flex items-center justify-between text-xs font-display select-none">
            <span className="bg-rose-100 text-rose-800 border-2 border-rose-300 rounded-full px-3 py-1 font-black">
              ⚔️ 正在消灭错题 {activeRetryIdx + 1} / {mistakeBook.length}
            </span>
            <span className="font-extrabold text-slate-500">
              当前单词：{activeMistake.wordKeyword}
            </span>
          </div>

          {/* Active Question Panel */}
          <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm text-center">
            <p className="font-display text-base text-slate-800 font-bold leading-relaxed mb-4">
              {activeMistake.question}
            </p>

            {activeMistake.options && activeMistake.options.length > 0 ? (
              /* MC RETRY LAYOUT */
              <div className="grid grid-cols-1 gap-2.5">
                {activeMistake.options.map((opt, oIdx) => {
                  const isSelected = selectedOpt === oIdx;
                  let optClass = 'bg-slate-50 hover:bg-indigo-50/50 border-2 border-slate-200 text-slate-700';
                  
                  if (isSelected) {
                    optClass = 'bg-rose-400 border-rose-600 text-rose-950 font-black';
                  }
                  
                  if (isAnswered) {
                    const cleanOpt = opt.toLowerCase().trim();
                    const cleanCorrect = activeMistake.correctAnswer.toLowerCase().trim();
                    if (cleanOpt === cleanCorrect) {
                      optClass = 'bg-emerald-400 border-emerald-600 text-emerald-950 font-black';
                    } else if (isSelected) {
                      optClass = 'bg-rose-300 border-rose-500 text-rose-900 line-through';
                    } else {
                      optClass = 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={isAnswered}
                      onClick={() => setSelectedOpt(oIdx)}
                      className={`w-full py-3.5 px-4 font-display font-medium text-xs md:text-sm rounded-xl text-center btn-bubbly cursor-pointer ${optClass}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            ) : (
              /* SPELLING REMEDY LAYOUT */
              <div className="space-y-3 max-w-sm mx-auto">
                <input
                  type="text"
                  value={typedAnswer}
                  disabled={isAnswered}
                  onChange={(e) => setTypedAnswer(e.target.value)}
                  placeholder="在这里输入拼写的拼图单词..."
                  className="w-full px-4 py-3 text-center text-sm border-2 border-slate-300 rounded-xl outline-hidden focus:border-rose-400 text-slate-800 bg-white"
                />
              </div>
            )}
          </div>

          {/* Feedback Screen */}
          {isAnswered && (
            <div className={`p-4 rounded-2xl border-3 text-xs leading-relaxed font-sans ${
              isCorrect 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800' 
                : 'bg-rose-50 border-rose-300 text-rose-800'
            }`}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-base">{isCorrect ? '✅ 消除成功！' : '❌ 继续充电！'}</span>
                <span className="font-display font-black text-sm uppercase">托比守卫复习：</span>
              </div>
              <p className="font-medium font-serif mt-1">{activeMistake.explanation}</p>
            </div>
          )}

          {/* Submits and Next Card */}
          <div className="flex justify-end gap-3 select-none">
            {!isAnswered ? (
              <button
                disabled={(!activeMistake.options && !typedAnswer.trim()) || (activeMistake.options && selectedOpt === null)}
                onClick={handleCheckAttempt}
                className={`px-6 py-3 font-display font-black text-xs md:text-sm rounded-xl border-b-4 btn-bubbly cursor-pointer ${
                  ((!activeMistake.options && !typedAnswer.trim()) || (activeMistake.options && selectedOpt === null))
                    ? 'bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed'
                    : 'bg-rose-500 hover:bg-rose-650 border-rose-700 text-white shadow-md'
                }`}
              >
                核对解法
              </button>
            ) : (
              <button
                onClick={handleNextRetry}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-xs md:text-sm border-b-4 border-emerald-700 rounded-xl btn-bubbly shadow-md cursor-pointer flex items-center gap-1"
              >
                {isCorrect ? "消灭！继续下一个 🚀" : "跳过，看下一个 🚀"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
