import React, { useState, useEffect } from 'react';
import { Calendar, Trophy, Zap, AlertCircle, FileText, CheckCircle, RefreshCw, Star, Heart, ArrowLeft } from 'lucide-react';
import { WordItem, LearningContext, QuizQuestion } from '../types';

interface ExamSuiteProps {
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
  onCompleteReview?: (unit: string, score: number) => void;
}

export default function ExamSuite({ words, selectedContext, speakText, onBackToMap, onAddMistake, onCompleteReview }: ExamSuiteProps) {
  const [examState, setExamState] = useState<'review' | 'exam' | 'completed'>('review');
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([]);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [answersMap, setAnswersMap] = useState<Record<number, { selectedIdx?: number; fillValue?: string }>>({});
  const [examScore, setExamScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes count
  const [timerActive, setTimerActive] = useState(false);

  // Filter entire semester's words to present a true full-semester test panel!
  const semesterWords = words.filter((w) => w.semester === selectedContext.semester);

  // Compile Key Review highlights based strictly on the selected unit
  const activeUnitWords = semesterWords.filter((w) => w.unit === selectedContext.unit);

  useEffect(() => {
    setExamState('review');
    setTimerActive(false);
  }, [selectedContext.semester, selectedContext.unit]);

  // Timer process loop
  useEffect(() => {
    let interval: any = null;
    if (timerActive && timeLeft > 0 && examState === 'exam') {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && examState === 'exam') {
      handleFinishExam();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timeLeft, examState]);

  const handleStartExam = () => {
    if (semesterWords.length === 0) return;

    // Generate 10 mixed questions dynamically from the whole active semester
    const generatedList: QuizQuestion[] = [];
    const randomizedCohort = [...semesterWords].sort(() => Math.random() - 0.5);

    randomizedCohort.forEach((wordObj, i) => {
      if (generatedList.length >= 10) return;

      const distractors = semesterWords
        .filter((w) => w.word !== wordObj.word)
        .map((w) => w.meaning);
      while (distractors.length < 3) distractors.push('你好', '学生', '水壶');
      const finalOpts = [wordObj.meaning, ...distractors.slice(0, 2)].sort(() => Math.random() - 0.5);
      const correctOptionIndex = finalOpts.indexOf(wordObj.meaning);

      // Mix formatting: MCQs if even index, typing if odd
      if (i % 2 === 0) {
        generatedList.push({
          id: `exam-mcq-${wordObj.word}-${i}`,
          type: 'multiple-choice',
          question: `单词 "${wordObj.word}" 的正确中文翻译是什么？`,
          options: finalOpts,
          correctOptionIndex,
          correctString: wordObj.meaning,
          explanation: `"${wordObj.word}" 的中文释义为 "${wordObj.meaning}"。`,
          wordKeyword: wordObj.word
        });
      } else if (wordObj.example) {
        // Spelling completion MCQ
        const blAnkSentence = wordObj.example.replace(new RegExp(`\\b${wordObj.word}\\b`, 'gi'), '______');
        generatedList.push({
          id: `exam-fill-${wordObj.word}-${i}`,
          type: 'fill-blank',
          question: `请填空补全句子："${blAnkSentence}"（中文意思：${wordObj.translation}）`,
          correctString: wordObj.word,
          explanation: `完整的英文句子原句是："${wordObj.example}"。`,
          wordKeyword: wordObj.word
        });
      }
    });

    setExamQuestions(generatedList);
    setActiveQuestionIdx(0);
    setAnswersMap({});
    setTimeLeft(600); // 10 mins
    setExamState('exam');
    setTimerActive(true);
    speakText("Ready! Toby has compiled a celestial Review Planet assessment with 10 meteor questions. Good luck, cosmic explorer! ⭐");
  };

  const handleOptionSelect = (optIdx: number) => {
    setAnswersMap((prev) => ({
      ...prev,
      [activeQuestionIdx]: { selectedIdx: optIdx }
    }));
    speakText(examQuestions[activeQuestionIdx].options?.[optIdx] || '');
  };

  const handleTextFill = (text: string) => {
    setAnswersMap((prev) => ({
      ...prev,
      [activeQuestionIdx]: { fillValue: text }
    }));
  };

  const handleFinishExam = () => {
    setTimerActive(false);
    let score = 0;
    
    examQuestions.forEach((q, idx) => {
      const resp = answersMap[idx];
      let isCorrect = false;
      let uAnswer = "";

      if (resp) {
        if (q.type === 'multiple-choice') {
          isCorrect = (resp.selectedIdx === q.correctOptionIndex);
          uAnswer = resp.selectedIdx !== undefined ? q.options?.[resp.selectedIdx] || "" : "";
        } else if (q.type === 'fill-blank') {
          isCorrect = (resp.fillValue?.trim().toLowerCase() === q.correctString.toLowerCase());
          uAnswer = resp.fillValue || "";
        }
      }

      if (isCorrect) {
        score += 1;
      } else {
        if (onAddMistake) {
          onAddMistake({
            question: q.question,
            options: q.options,
            userAnswer: uAnswer || "未作答",
            correctAnswer: q.correctString,
            explanation: q.explanation,
            wordKeyword: q.wordKeyword || ""
          });
        }
      }
    });

    setExamScore(score);
    setExamState('completed');
    
    if (onCompleteReview) {
      onCompleteReview(selectedContext.unit, score);
    }

    // Speak final praise
    const pr = score / examQuestions.length;
    if (pr >= 0.8) {
      speakText(`Splendid orbit work! You got ${score} out of 10! You unlocked the Cosmic Golden Emblem! 🏆 ⭐`);
    } else if (pr >= 0.5) {
      speakText(`Out of this world! You got ${score} out of 10! Toby holds you high as our star explorer. 🚀`);
    } else {
      speakText(`Good try! You got ${score} out of 10. Toby has fueled the rocket with custom spelling cards to try again! 🌟`);
    }
  };

  const formatTime = (secs: number) => {
    const minStr = Math.floor(secs / 60).toString().padStart(2, '0');
    const secStr = (secs % 60).toString().padStart(2, '0');
    return `${minStr}:${secStr}`;
  };

  return (
    <div className="space-y-6" id="exam-suite-dashboard">
      {/* Back to map bar */}
      <div className="flex items-center justify-between bg-violet-400 p-3 rounded-2xl border-b-4 border-violet-600 shadow-sm text-violet-950">
        <button
          onClick={onBackToMap}
          className="flex items-center gap-2 bg-violet-100 hover:bg-white text-violet-900 px-4 py-2 rounded-xl text-xs font-display font-bold border-b-2 border-violet-300 btn-bubbly cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          返回地图 🗺️
        </button>
        <span className="font-display font-extrabold text-sm md:text-base flex items-center gap-1.5 uppercase tracking-wide">
          🎯 复习星球星际远航
        </span>
        <div className="flex items-center gap-1 bg-violet-950/20 text-white rounded-full px-3 py-1 font-mono text-xs font-bold">
          ⭐ 飞船积分: {examScore}
        </div>
      </div>

      {/* 1. REVIEW STAGE */}
      {examState === 'review' && (
        <div className="space-y-6">
          {/* Review Notebook Card */}
          <div className="bg-gradient-to-br from-violet-50 via-indigo-50 to-white rounded-3xl border-4 border-violet-400 shadow-[0_8px_0_0_#7c3aed] p-6 md:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-3 bg-violet-100 border-2 border-violet-300 rounded-2xl text-violet-600 transform hover:rotate-6 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold text-violet-600 tracking-wider font-display block">星系任务控制台</span>
                  <h2 className="text-2xl font-display font-black text-slate-800">
                    {selectedContext.semester === 'First Semester' ? '上学期' : '下学期'} 词汇星空大复习
                  </h2>
                </div>
              </div>
              <span className="bg-amber-100 text-amber-800 border-2 border-amber-300 font-display text-[11px] font-extrabold px-3 py-1.5 rounded-full select-none">
                📍 当前单元坐标: {selectedContext.unit}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl font-sans font-medium">
              "欢迎来到复习星球，小小宇航员！阅读托比老师的学期要点指南，为火箭引擎注入满满的能量，然后启动专属的模拟考挑战吧！"
            </p>

            {/* Keys grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* key vocab */}
              <div className="border-3 border-violet-200 rounded-2xl p-5 space-y-3 bg-white shadow-sm">
                <h3 className="text-xs font-display font-black uppercase text-violet-700 flex items-center gap-1">
                  <Star className="w-4.5 h-4.5 text-amber-400 fill-amber-300" />
                  本单元拼写对照表
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeUnitWords.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-violet-50 border-2 border-violet-100 rounded-xl px-3 py-1 text-xs text-violet-900 font-display font-bold transform hover:scale-105 transition-transform"
                    >
                      {item.word}
                    </span>
                  ))}
                  {activeUnitWords.length === 0 && (
                    <span className="text-xs text-slate-400 italic">该星区暂无待加载的核心词汇</span>
                  )}
                </div>
              </div>

              {/* key sentence rules */}
              <div className="border-3 border-indigo-200 rounded-2xl p-5 space-y-3 bg-white shadow-sm">
                <h3 className="text-xs font-display font-black uppercase text-indigo-700 flex items-center gap-1">
                  <Heart className="w-4.5 h-4.5 text-pink-500 fill-pink-300 animate-pulse" />
                  卫星句型演练大本营
                </h3>
                <ul className="space-y-2 pt-1">
                  {activeUnitWords.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-slate-600 font-display font-bold flex items-start gap-1.5 p-2 bg-slate-50 rounded-xl">
                      <span className="bg-indigo-200 text-indigo-700 w-5 h-5 rounded-md flex items-center justify-center text-[10px] pb-0.5 font-black shrink-0">{idx + 1}</span>
                      <span className="select-text">{item.example}</span>
                    </li>
                  ))}
                  {activeUnitWords.length === 0 && (
                    <span className="text-xs text-slate-400 italic">该区域未发现可点亮的航道例句</span>
                  )}
                </ul>
              </div>
            </div>

            {/* Start Exam Action Panel */}
            <div className="bg-violet-100 border-4 border-dashed border-violet-300 rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="space-y-1">
                <h3 className="text-base font-display font-black text-violet-950">准备好开始环绕星测试了吗？</h3>
                <p className="text-xs text-violet-800 leading-relaxed max-w-md font-sans font-medium">
                  托比老师已经预热好考点分析仪啦。在 10 分钟内挑战 10 道随机混合题，检验你的本学期综合掌握度吧！
                </p>
              </div>
              <button
                onClick={handleStartExam}
                className="bg-violet-600 hover:bg-violet-700 border-b-4 border-violet-800 text-white px-6 py-4 rounded-2xl font-display font-extrabold shadow-md cursor-pointer inline-flex items-center gap-2 transition-all btn-bubbly text-xs sm:text-sm"
              >
                <Zap className="w-5 h-5 text-yellow-300 fill-yellow-200 animate-bounce" />
                启动星际模拟考！🚀
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. EXAM ACTIVE STAGE */}
      {examState === 'exam' && examQuestions.length > 0 && (
        <div className="bg-white rounded-3xl border-4 border-violet-500 shadow-[0_8px_0_0_#6d28d9] p-6 md:p-8 space-y-6 relative overflow-hidden">
          {/* Header clock / count */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="bg-amber-100 font-display uppercase font-black text-amber-800 text-[10px] px-3 py-1 rounded-full border border-amber-300">
                🚀 星系飞船答题雷达
              </span>
              <span className="text-xs font-display font-bold text-slate-400">第 {activeQuestionIdx + 1} 题 / 共 {examQuestions.length} 题</span>
            </div>

            <div className="text-right flex items-center gap-1.5 bg-rose-50 border-2 border-rose-200 rounded-2xl px-4 py-1.5 text-rose-700 font-display text-sm font-black animate-pulse">
              <Calendar className="w-4 h-4 text-rose-500" />
              <span>本关剩余氧气: {formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Core active question detail */}
          <div className="py-2.5 space-y-4">
            <h3 className="text-lg md:text-xl font-display font-black text-slate-800 leading-snug">
              {examQuestions[activeQuestionIdx].question}
            </h3>

            <div className="pt-3">
              {examQuestions[activeQuestionIdx].type === 'multiple-choice' && examQuestions[activeQuestionIdx].options && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {examQuestions[activeQuestionIdx].options.map((opt, i) => {
                    const isSelected = answersMap[activeQuestionIdx]?.selectedIdx === i;
                    return (
                      <button
                        key={i}
                        onClick={() => handleOptionSelect(i)}
                        className={`w-full p-4 rounded-2xl border-2 border-b-6 font-display font-bold text-center transition-all cursor-pointer btn-bubbly ${
                          isSelected
                            ? 'bg-violet-400 border-violet-600 text-violet-950 font-black'
                            : 'bg-white border-slate-300 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {examQuestions[activeQuestionIdx].type === 'fill-blank' && (
                <div className="max-w-md">
                  <input
                    type="text"
                    value={answersMap[activeQuestionIdx]?.fillValue || ''}
                    onChange={(e) => handleTextFill(e.target.value)}
                    placeholder="在此输入你拼凑的星轨拼写词汇..."
                    className="w-full px-4 py-3.5 border-3 border-violet-200 focus:border-violet-500 outline-hidden bg-white rounded-2xl text-slate-800 font-display font-bold text-sm"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Stepper buttons */}
          <div className="border-t-2 border-slate-100 pt-5 flex items-center justify-between">
            <button
              onClick={() => setActiveQuestionIdx((prev) => Math.max(0, prev - 1))}
              disabled={activeQuestionIdx === 0}
              className={`px-5 py-3 rounded-xl text-xs md:text-sm font-display font-bold border-2 border-b-4 transition-all cursor-pointer btn-bubbly ${
                activeQuestionIdx === 0 ? 'border-slate-200 text-slate-300 pointer-events-none' : 'border-slate-300 text-slate-600 bg-white'
              }`}
            >
              返回上一题
            </button>

            {activeQuestionIdx + 1 === examQuestions.length ? (
              <button
                onClick={handleFinishExam}
                className="bg-emerald-500 hover:bg-emerald-600 border-b-4 border-emerald-700 text-white px-6 py-3.5 rounded-2xl font-display font-black text-xs md:text-sm shadow-md cursor-pointer transition-all btn-bubbly animate-pulse"
              >
                提交星际模拟考！🏁
              </button>
            ) : (
              <button
                onClick={() => setActiveQuestionIdx((prev) => Math.min(examQuestions.length - 1, prev + 1))}
                className="bg-violet-600 hover:bg-violet-700 text-white border-b-4 border-violet-800 px-6 py-3.5 rounded-2xl font-display font-black text-xs md:text-sm cursor-pointer transition-all btn-bubbly shadow-md"
              >
                开启下一题 🚀
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. COMPLETED METRICS STAGE */}
      {examState === 'completed' && (
        <div className="bg-white rounded-3xl border-4 border-violet-400 shadow-[0_10px_0_0_#7c3aed] p-8 text-center max-w-xl mx-auto space-y-6" id="exam-achievement-suite">
          {/* Trophy element */}
          <div className="w-24 h-24 bg-violet-50 rounded-full border-4 border-violet-200 flex items-center justify-center text-violet-500 mx-auto transform hover:scale-110 transition-transform">
            <Trophy className="w-12 h-12 text-yellow-500 fill-yellow-250 animate-bounce" />
          </div>

          <div className="space-y-1">
            <h2 className="text-3xl font-display font-black text-slate-800">星际复习考取得大胜利！🎉</h2>
            <p className="text-xs text-slate-400 font-extrabold uppercase tracking-widest text-violet-600">本学期综合掌握评测报告</p>
          </div>

          {/* Score tracker */}
          <div className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white border-b-6 border-violet-700 rounded-3xl p-6 max-w-xs mx-auto shadow-md">
            <span className="text-[10px] tracking-wider uppercase font-extrabold text-violet-200 font-display">托比老师评定的分数</span>
            <div className="text-5xl font-display font-black leading-none mt-2">
              {examScore} / {examQuestions.length}
            </div>
            <span className="text-xs mt-2 block font-display font-bold text-yellow-200">
              {examScore >= 8 ? '🥇 荣获宇宙学霸星章！闪闪发光的金色星火！' : '🚀 太赞了！你对本学期英语掌握非常到位。'}
            </span>
          </div>

          {/* List answers correctness */}
          <div className="text-left space-y-2 border-t-2 border-slate-100 pt-5 max-h-[220px] overflow-y-auto pr-2">
            <h4 className="text-xs font-display font-black text-slate-400 uppercase tracking-widest mb-3">星轨对决详细日志</h4>
            {examQuestions.map((q, idx) => {
              const resp = answersMap[idx];
              let userString = '';
              let isRight = false;
              if (q.type === 'multiple-choice') {
                isRight = (resp?.selectedIdx === q.correctOptionIndex);
                userString = resp && q.options ? q.options[resp.selectedIdx || 0] : '未作答';
              } else if (q.type === 'fill-blank') {
                isRight = (resp?.fillValue?.trim().toLowerCase() === q.correctString.toLowerCase());
                userString = resp?.fillValue || '未作答';
              }

              return (
                <div key={idx} className={`p-4 rounded-2xl border-2 flex gap-3 items-start justify-between text-xs md:text-sm ${
                  isRight ? 'border-emerald-200 bg-emerald-50 text-emerald-950 font-display font-bold' : 'border-rose-200 bg-rose-50 text-rose-950 font-display font-bold'
                }`}>
                  <div className="space-y-1.5 select-text">
                    <span className="font-extrabold block text-slate-800 leading-tight select-text">第 {idx + 1} 题: {q.question}</span>
                    <p className="text-xs text-slate-500 select-text font-sans font-medium">
                      你的拼写解答: <span className="font-mono text-slate-800 underline">"{userString}"</span>
                    </p>
                    <p className="text-xs text-emerald-800 select-text font-sans font-semibold">
                      正确答案参考: <span className="font-mono underline">"{q.correctString}"</span>
                    </p>
                  </div>
                  {isRight ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-100 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-500 fill-rose-100 shrink-0 mt-0.5 animate-bounce" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-3">
            <button
              onClick={() => setExamState('review')}
              className="px-5 py-3 rounded-2xl border-2 border-b-4 border-slate-300 text-slate-600 bg-white font-display font-bold text-xs md:text-sm cursor-pointer btn-bubbly transition-all"
            >
              <RefreshCw className="w-4 h-4 mr-1 inline-block" />
              重新翻看总结
            </button>
            <button
              onClick={handleStartExam}
              className="bg-violet-600 hover:bg-violet-700 text-white border-b-4 border-violet-800 px-6 py-3.5 rounded-2xl font-display font-black text-xs md:text-sm btn-bubbly shadow-md cursor-pointer"
            >
              再次星轨航行！🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
