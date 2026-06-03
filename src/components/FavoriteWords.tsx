import React, { useState } from 'react';
import { ArrowLeft, Star, Trash2, BookOpen, Volume2, HelpCircle, Eye, RefreshCw, Smile } from 'lucide-react';
import { WordItem } from '../types';
import { t } from '../utils/translation';

interface FavoriteWordsProps {
  words: WordItem[];
  favoriteWords: string[];
  onToggleFavoriteWord: (word: string) => void;
  speakText: (text: string) => void;
  onBackToMap: () => void;
}

export default function FavoriteWords({
  words,
  favoriteWords,
  onToggleFavoriteWord,
  speakText,
  onBackToMap,
}: FavoriteWordsProps) {
  const [learnMode, setLearnMode] = useState<'list' | 'flashcard'>('list');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter actual full-vocab list items that are currently favorited
  const favItems = words.filter((w) => favoriteWords.includes(w.word));

  const handleNextCard = () => {
    setIsFlipped(false);
    if (favItems.length > 0) {
      setActiveCardIndex((prev) => (prev + 1) % favItems.length);
    }
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    if (favItems.length > 0) {
      setActiveCardIndex((prev) => (prev - 1 + favItems.length) % favItems.length);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in" id="favorite-words-panel">
      {/* Action Header */}
      <div className="flex items-center justify-between bg-amber-400 p-4 rounded-3xl border-b-4 border-amber-600 shadow-sm text-amber-950">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-2 bg-white hover:bg-amber-50 text-amber-900 px-4 py-2 rounded-xl text-xs font-display font-black border-2 border-amber-300 btn-bubbly cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          返回学习地图 🗺️
        </button>
        <span className="font-display font-black text-sm md:text-base flex items-center gap-1.5 uppercase tracking-wide">
          ⭐ 我收藏的酷词生词本
        </span>
        <div className="flex items-center gap-1.5 bg-amber-950/20 text-white rounded-full px-3 py-1 font-mono text-xs font-bold shadow-inner">
          <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 animate-pulse" />
          生词数: {favItems.length}
        </div>
      </div>

      {favItems.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border-4 border-amber-300 max-w-lg mx-auto shadow-[0_8px_0_0_#fdba74] space-y-4">
          <div className="text-6xl animate-bounce">🐶</div>
          <h3 className="text-lg font-display font-black text-slate-800">你的生词本空空如也哦！</h3>
          <p className="text-xs text-slate-500 font-sans font-medium leading-relaxed max-w-sm mx-auto">
            "托比提示：每当我们感觉哪个单词拼读吃力，或者在攻克关卡时遇到了困难，只需点击单词卡头部的 ⭐ 收藏按钮，就能把它拉进这里快乐复温啦！"
          </p>
          <button
            onClick={onBackToMap}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 font-display font-black text-xs rounded-2xl border-b-4 border-amber-600 btn-bubbly shadow-md cursor-pointer"
          >
            去地图中收集好词 ✨
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* View switcher and helper bubble */}
          <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl gap-3">
            <div className="flex items-center gap-2 text-xs text-amber-950 font-display font-bold">
              <span>🐶 托比：</span>
              <span>"你有 {favItems.length} 个收藏单词。让我们选择最舒展的学习策略来消灭他们吧！"</span>
            </div>
            
            <div className="flex items-center bg-white p-1 rounded-xl border border-amber-200 shadow-inner">
              <button
                onClick={() => setLearnMode('list')}
                className={`px-4 py-2 text-xs font-display font-black rounded-lg transition-all cursor-pointer ${
                  learnMode === 'list' ? 'bg-amber-400 text-amber-950 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                📝 核心生词单
              </button>
              <button
                onClick={() => {
                  setLearnMode('flashcard');
                  setActiveCardIndex(0);
                  setIsFlipped(false);
                }}
                className={`px-4 py-2 text-xs font-display font-black rounded-lg transition-all cursor-pointer ${
                  learnMode === 'flashcard' ? 'bg-amber-400 text-amber-950 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                🔬 卡片记忆复习
              </button>
            </div>
          </div>

          {learnMode === 'list' ? (
            /* LIST VIEW MODE */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favItems.map((item) => (
                <div
                  key={item.word}
                  className="bg-white rounded-2xl border-4 border-slate-200 p-5 shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-display font-black text-sky-600 block">
                        {t(item.unit)}
                      </span>
                      <button
                        onClick={() => {
                          onToggleFavoriteWord(item.word);
                          speakText("已移出生词本");
                        }}
                        className="text-slate-300 hover:text-red-500 transition-colors p-1"
                        title="移出生词本"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <h4 className="text-xl font-display font-black text-indigo-950 leading-none">
                        {item.word}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono font-medium mt-1">
                        {item.phonetic}
                      </p>
                    </div>

                    <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                      <p className="text-xs text-amber-950 font-display font-bold">
                        {item.meaning}
                      </p>
                    </div>

                    <div className="p-2 border border-slate-100 rounded-xl bg-slate-50/50">
                      <p className="text-[11px] font-sans text-slate-600 italic leading-relaxed">
                        "{item.example}"
                      </p>
                      <p className="text-[10px] text-slate-400 font-sans mt-0.5">
                        {item.translation}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => speakText(item.word)}
                    className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-display font-black text-xs rounded-xl border border-indigo-200 shadow-2xs cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    发音复习 🔊
                  </button>
                </div>
              ))}
            </div>
          ) : (
            /* FLASHCARD CAROUSEL MODE */
            <div className="max-w-xl mx-auto space-y-6">
              <style>{`
                .fav-3d-card {
                  perspective: 1200px;
                }
                .fav-3d-inner {
                  position: relative;
                  width: 100%;
                  transform-style: preserve-3d;
                  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .fav-3d-card.flipped .fav-3d-inner {
                  transform: rotateY(180deg);
                }
                .fav-3d-front, .fav-3d-back {
                  position: absolute;
                  inset: 0;
                  width: 100%;
                  height: 100%;
                  -webkit-backface-visibility: hidden;
                  backface-visibility: hidden;
                  border-radius: 24px;
                }
                .fav-3d-back {
                  transform: rotateY(180deg);
                }
              `}</style>

              {/* Progress dots */}
              <div className="flex items-center justify-center gap-1.5">
                {favItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveCardIndex(idx);
                      setIsFlipped(false);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeCardIndex === idx ? 'w-6 bg-amber-500' : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              {/* The Active 3D studied card */}
              <div 
                className={`fav-3d-card w-full h-[320px] select-none ${isFlipped ? 'flipped' : ''}`}
                onClick={() => {
                  setIsFlipped(!isFlipped);
                  if(!isFlipped) speakText(favItems[activeCardIndex].word);
                }}
              >
                <div className="fav-3d-inner w-full h-full cursor-pointer">
                  
                  {/* FRONT: Big spelling challenge */}
                  <div className="fav-3d-front bg-slate-900 text-white rounded-3xl border-4 border-slate-700 shadow-md p-6 flex flex-col justify-between items-center text-center">
                    <div className="w-full flex justify-between text-[10px] text-slate-400 font-display">
                      <span>🧪 生词复习闪卡 {activeCardIndex + 1} / {favItems.length}</span>
                      <span className="text-yellow-400 font-extrabold uppercase">{t(favItems[activeCardIndex].unit)}</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-sm font-sans font-semibold text-amber-400 italic block">"试着拼读出这个核心词汇吧"</span>
                      <h2 className="text-4xl font-display font-black text-white tracking-widest leading-none">
                        {favItems[activeCardIndex].word}
                      </h2>
                      <p className="text-xs text-slate-400 mt-1 select-all font-mono">
                        {favItems[activeCardIndex].phonetic}
                      </p>
                    </div>

                    <span className="px-4 py-1.5 bg-yellow-400 text-yellow-950 text-xs font-display font-black rounded-full border border-yellow-500 flex items-center gap-1.5 shadow-sm animate-pulse-slow">
                      <RefreshCw className="w-3.5 h-3.5" />
                      点击翻面揭晓含义 / Flip 🔄
                    </span>
                  </div>

                  {/* BACK: Detailed explanation */}
                  <div className="fav-3d-back bg-white rounded-3xl border-4 border-indigo-500 shadow-md p-6 flex flex-col justify-between">
                    <div className="w-full flex justify-between items-center text-[10px] text-slate-400 border-b pb-2 select-none">
                      <span className="font-display">⭐ 生词本深度释义</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavoriteWord(favItems[activeCardIndex].word);
                          speakText("已移出生词本");
                        }}
                        className="text-red-500 hover:bg-red-50 px-2 py-0.5 rounded-lg border border-red-200 font-bold"
                      >
                        移出 ✖
                      </button>
                    </div>

                    <div className="my-auto space-y-3 p-1.5 text-left">
                      <div className="flex items-center gap-3 justify-between">
                        <span className="text-2xl font-display font-black text-indigo-950">{favItems[activeCardIndex].word}</span>
                        <div className="flex items-center gap-1 font-sans text-[11px] text-amber-700 bg-amber-50 px-2.5 py-1 rounded-xl font-bold border border-amber-250">
                          <span>中文: {favItems[activeCardIndex].meaning}</span>
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl font-sans text-xs">
                        <p className="font-semibold text-slate-700 leading-snug">"{favItems[activeCardIndex].example}"</p>
                        <p className="text-slate-400 mt-1">{favItems[activeCardIndex].translation}</p>
                      </div>

                      <div className="text-[11px] text-slate-550 border-l-4 border-emerald-400 pl-2 leading-tight">
                        <span className="font-display font-extrabold text-emerald-800 block text-[9px] uppercase">记忆口诀:</span>
                        {favItems[activeCardIndex].memoryTip}
                      </div>
                    </div>

                    <div className="w-full flex items-center justify-between pt-2 border-t text-[10px] select-none">
                      <span className="text-slate-400">点击卡片可再次翻面 ↩</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakText(favItems[activeCardIndex].word);
                        }}
                        className="p-1 px-3 bg-indigo-50 rounded-lg text-indigo-700 border border-indigo-200"
                      >
                        🔊 听发音
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Slider controls */}
              <div className="flex items-center justify-between max-w-xs mx-auto pt-4">
                <button
                  onClick={handlePrevCard}
                  className="px-5 py-2.5 bg-white border-2 border-slate-300 text-slate-700 font-display text-xs font-black rounded-xl hover:bg-slate-50 cursor-pointer shadow-sm"
                >
                  ◀ 上一个
                </button>
                <span className="text-xs text-slate-500 font-display font-bold">
                  Card {activeCardIndex + 1} / {favItems.length}
                </span>
                <button
                  onClick={handleNextCard}
                  className="px-5 py-2.5 bg-amber-400 border-2 border-b-4 border-amber-600 text-amber-950 font-display text-xs font-black rounded-xl hover:bg-amber-500 shadow-md cursor-pointer"
                >
                  下一个 🚀
                </button>
              </div>

            </div>
          )}
        </div>
      )}
    </div>
  );
}
