import React, { useState, useEffect } from 'react';
import { BookOpen, AlertTriangle, CheckCircle, HelpCircle, RefreshCw, Star, ArrowLeft, Shield, Sparkles, Trophy } from 'lucide-react';
import { GRAMMAR_RULES } from '../data/vocabulary';
import { LearningContext } from '../types';

interface GrammarLabProps {
  selectedContext: LearningContext;
  speakText: (text: string) => void;
  onBackToMap: () => void;
  completedGrammar?: string[];
  onCompleteGrammar?: (unit: string) => void;
}

export default function GrammarLab({ selectedContext, speakText, onBackToMap, completedGrammar, onCompleteGrammar }: GrammarLabProps) {
  const activeUnitRules = GRAMMAR_RULES[selectedContext.unit];
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Clear answers when user shifts units
  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [selectedContext.unit]);

  const totalGrammarLessons = Object.keys(GRAMMAR_RULES).length;
  const currentGrammarCompletedCount = completedGrammar?.length || 0;
  const grammarPercent = totalGrammarLessons > 0 ? Math.round((currentGrammarCompletedCount / totalGrammarLessons) * 100) : 0;
  const unitIsCompleted = completedGrammar?.includes(selectedContext.unit);

  if (!activeUnitRules) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border-4 border-rose-400 max-w-lg mx-auto shadow-[0_8px_0_0_#fb7185]">
        <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <p className="text-lg text-slate-700 font-display font-bold">城堡正在建设中！🏗️</p>
        <p className="text-sm text-slate-500 mt-2 font-sans font-medium">托比正在用闪亮的盾牌装饰这间语法教室。请选择其他单元进行冒险吧！</p>
        <button
          onClick={onBackToMap}
          className="mt-6 px-6 py-3 bg-rose-500 hover:bg-rose-600 font-display font-bold text-white rounded-2xl border-b-4 border-rose-700 btn-bubbly shadow-md cursor-pointer"
        >
          返回地图 🗺️
        </button>
      </div>
    );
  }

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
    speakText(activeUnitRules.miniPractice.options[idx]);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    
    // Speak feedback
    if (selectedOption === activeUnitRules.miniPractice.answer) {
      speakText("Incredible, grammar royalty! Your answer is absolutely correct! ⭐ You earned a gold star!");
      if (onCompleteGrammar) {
        onCompleteGrammar(selectedContext.unit);
      }
    } else {
      speakText("Nice venture! Toby says we can inspect the map and conquer the mistake together! 🏰");
    }
  };

  return (
    <div className="space-y-6" id="grammar-lab-panel">
      {/* Back to map bar */}
      <div className="flex items-center justify-between bg-pink-400 p-3 rounded-2xl border-b-4 border-pink-600 shadow-sm text-pink-950">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-2 bg-pink-100 hover:bg-white text-pink-900 px-4 py-2 rounded-xl text-xs font-display font-bold border-b-2 border-pink-300 btn-bubbly cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          返回地图 🗺️
        </button>
        <span className="font-display font-extrabold text-sm md:text-base flex items-center gap-1.5 uppercase tracking-wide">
          🏰 语法城堡探索
        </span>
        <div className="flex items-center gap-1 bg-pink-950/20 text-white rounded-full px-3 py-1 font-mono text-xs font-bold">
          <Shield className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 animate-bounce" />
          等级: {currentGrammarCompletedCount >= totalGrammarLessons ? "城堡大统领 👑" : currentGrammarCompletedCount >= 2 ? "皇家守卫 🛡️" : "见习侍从 ⚔️"}
        </div>
      </div>

      {/* Grammar Progress Bar */}
      <div className="bg-pink-50 border-3 border-pink-300 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-pink-950 font-display font-black text-xs">
        <div className="flex items-center gap-2">
          <span>🏰 语法城堡总进度:</span>
          <span className="bg-pink-200 text-pink-950 px-2.5 py-0.5 rounded-full font-black">
            掌握 {currentGrammarCompletedCount} / {totalGrammarLessons} 项语法口诀
          </span>
        </div>
        <div className="flex-1 max-w-sm bg-white border border-pink-200 rounded-full h-4 overflow-hidden relative">
          <div 
            className="bg-gradient-to-r from-pink-400 to-rose-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${grammarPercent}%` }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-pink-950">
            {grammarPercent}% 已解锁
          </span>
        </div>
        {unitIsCompleted && (
          <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-xl text-[10px] uppercase font-black animate-pulse">
            ✅ 单元语法已攻克
          </span>
        )}
      </div>

      {/* Interactive Grammar Lesson Card - Stylized Book */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-white rounded-3xl border-4 border-pink-400 shadow-[0_8px_0_0_#f43f5e] p-6 md:p-8 space-y-6 relative overflow-hidden">
        {/* Ribbon banner */}
        <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-500 to-pink-500 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl border-l border-b border-rose-600 font-display">
          👑 晋级语法规则
        </div>

        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-3 bg-rose-100 border-2 border-rose-300 rounded-2xl text-rose-600 transform hover:rotate-6 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-rose-500 font-display block">核心语法要点</span>
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-800 tracking-tight leading-tight">{activeUnitRules.grammarPoint}</h2>
            </div>
          </div>
        </div>

        {/* The Rule section - Styled like a golden royal scroll */}
        <div className="bg-amber-50 border-4 border-dashed border-amber-300 rounded-2xl p-5 relative">
          <span className="absolute -top-3.5 left-4 bg-amber-400 border-2 border-amber-500 text-amber-950 text-[10px] font-display font-black px-2.5 py-0.5 rounded-full uppercase">
            📜 语法公式口诀
          </span>
          <p className="font-display text-sm md:text-base text-amber-900 leading-relaxed font-bold mt-2 font-mono">
            {activeUnitRules.rule}
          </p>
        </div>

        {/* Explain Rule Simple - Speech Bubble from Toby */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-sm relative">
          <span className="text-[10px] font-display font-extrabold text-pink-500 uppercase tracking-widest block mb-1">托比老师轻快解读</span>
          <p className="text-sm text-slate-600 leading-relaxed font-sans font-semibold italic">
            "{activeUnitRules.explanation}"
          </p>
        </div>

        {/* Examples Section - Colored blocks */}
        <div>
          <span className="text-[11px] font-display font-extrabold text-slate-400 uppercase tracking-widest">✨ 五年级趣味例句</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            {activeUnitRules.examples.map((ex, idx) => (
              <div key={idx} className="flex gap-2.5 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl items-center text-emerald-900 transform hover:-translate-y-0.5 transition-transform shadow-sm font-display font-bold text-sm">
                <Star className="w-5 h-5 text-emerald-500 fill-emerald-300 shrink-0" />
                <span>{ex}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes - Styled highly visually (Do / Do Not) */}
        <div className="pt-4 border-t-2 border-slate-100">
          <div className="flex items-center gap-1.5 mb-3">
            <AlertTriangle className="w-5 h-5 text-rose-500 animate-pulse" />
            <span className="text-[11px] font-display font-black text-rose-700 uppercase tracking-widest">避坑守护防错盾牌 🛡️</span>
          </div>
          <div className="space-y-4">
            {activeUnitRules.commonMistakes.map((mistake, idx) => (
              <div key={idx} className="border-3 border-rose-200 rounded-3xl overflow-hidden text-xs md:text-sm shadow-sm bg-white">
                <div className="bg-rose-50 p-3 text-rose-800 font-display font-bold flex items-center gap-2">
                  <span className="font-extrabold uppercase text-[10px] bg-rose-200 text-rose-700 px-2 py-1 rounded-lg">❌ 易错雷区</span>
                  <span className="line-through">{mistake.wrong}</span>
                </div>
                <div className="bg-emerald-50 p-3 text-emerald-900 font-display font-bold flex items-center gap-2 border-t border-rose-100">
                  <span className="font-extrabold uppercase text-[10px] bg-emerald-200 text-emerald-700 px-2 py-1 rounded-lg">✅ 正确表达</span>
                  <span>{mistake.right}</span>
                </div>
                <div className="p-3 bg-slate-50 text-slate-500 font-sans leading-relaxed italic border-t border-rose-100">
                  <span className="font-bold text-slate-700">为什么呢？</span> {mistake.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mini Quiz Practice */}
      <div className="bg-indigo-50 border-4 border-indigo-300 rounded-3xl shadow-[0_8px_0_0_#6366f1] p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500 fill-yellow-200 animate-bounce" />
          <h3 className="font-display font-black text-slate-800 text-lg">城堡守卫挑战 🏰</h3>
        </div>

        <p className="text-xs text-indigo-900 font-semibold font-sans">
          必须要选择正确的单词组合，城堡大门才会向你敞开。你能通过托比老师的试炼吗？
        </p>

        <div className="space-y-4">
          <p className="font-display text-base text-slate-800 font-bold p-4 bg-white border-2 border-indigo-200 rounded-2xl shadow-inner text-center">
            {activeUnitRules.miniPractice.question}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeUnitRules.miniPractice.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let btnClass = 'bg-white border-2 border-b-6 border-slate-300 hover:bg-indigo-50/50 text-slate-700';
              if (isSelected) {
                btnClass = 'bg-indigo-400 border-indigo-600 text-indigo-950 font-black shadow-sm';
              }
              if (isSubmitted) {
                if (idx === activeUnitRules.miniPractice.answer) {
                  btnClass = 'bg-emerald-400 border-emerald-600 text-emerald-950 font-black shadow-sm';
                } else if (isSelected && selectedOption !== activeUnitRules.miniPractice.answer) {
                  btnClass = 'bg-rose-400 border-rose-600 text-rose-950 line-through opacity-85';
                } else {
                  btnClass = 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isSubmitted}
                  className={`px-4 py-4 rounded-2xl text-xs md:text-sm font-display font-bold btn-bubbly text-center transition-all cursor-pointer ${btnClass}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="flex justify-end gap-2.5 pt-2">
            {isSubmitted && (
              <button
                onClick={() => {
                  setSelectedOption(null);
                  setIsSubmitted(false);
                }}
                className="px-4 py-3 text-xs md:text-sm bg-white border-2 border-b-4 border-slate-300 text-slate-600 rounded-xl font-display font-bold btn-bubbly transition-all cursor-pointer inline-flex items-center gap-1"
              >
                <RefreshCw className="w-4 h-4" />
                再试一次
              </button>
            )}
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null || isSubmitted}
              className={`px-5 py-3 text-xs md:text-sm font-display font-extrabold rounded-xl transition-all border-b-4 btn-bubbly flex items-center gap-1 cursor-pointer ${
                selectedOption === null || isSubmitted
                  ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-700 shadow-md'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              核对答案
            </button>
          </div>

          {isSubmitted && (
            <div className="p-4 bg-white border-3 border-emerald-300 rounded-2xl text-xs md:text-sm text-slate-700 leading-relaxed select-text font-sans font-semibold shadow-inner">
              <span className="font-display font-bold text-emerald-700">🌟 托比老师的解析魔法：</span> {activeUnitRules.miniPractice.reason}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}