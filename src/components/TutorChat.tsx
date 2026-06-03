import React, { useState, useRef, useEffect } from 'react';
import { Send, Volume2, Sparkles, AlertCircle, RefreshCw, MessageSquare, Heart, Smile } from 'lucide-react';
import { ChatMessage, LearningContext } from '../types';

interface TutorChatProps {
  selectedContext: LearningContext;
  speakText: (text: string) => void;
  onBackToMap?: () => void;
}

export default function TutorChat({ selectedContext, speakText, onBackToMap }: TutorChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'tutor',
      text: "你好呀，小朋友！我是托比老师，你的五年级英文伴学好伙伴！🌟 很高兴能陪你一起学英语！\n\n我们现在一起探索单元 \"" + selectedContext.unit + "\" 吧。你可以随时在下方输入你想请教的英语内容，或者选择快捷卡片探索哦！🚀",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Reset chat welcome when context changes
  useEffect(() => {
    setMessages([
      {
        id: `welcome-${selectedContext.unit}`,
        sender: 'tutor',
        text: `太棒了！我们现在来到了单元 "${selectedContext.unit}"（${selectedContext.semester === 'First Semester' ? '上学期' : '下学期'}）。\n\n想听听本单元的生词拼写魔法，还是想挑战托比老师的语法思考题呢？请选择下方的学习挑战选项吧！✨ 🎈`,
        timestamp: new Date(),
      }
    ]);
  }, [selectedContext.unit, selectedContext.semester]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setErrorText(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          selectedContext,
        }),
      });

      if (!response.ok) {
        throw new Error('Toby had a tiny connection hiccup. Let\'s try again!');
      }

      const data = await response.json();
      const tutorReply: ChatMessage = {
        id: `tutor-${Date.now()}`,
        sender: 'tutor',
        text: data.text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, tutorReply]);
    } catch (err: any) {
      setErrorText(err.message || 'Connecting to Toby failed. Check if server is ready!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (actionType: string) => {
    let prompt = '';
    switch (actionType) {
      case 'spelling':
        prompt = `托比老师，请从单元「${selectedContext.unit}」里随机挑一个单词，我来挑战拼写！📝`;
        break;
      case 'question':
        prompt = `请为我出一道关于「${selectedContext.unit}」的英语挑战题！💭`;
        break;
      case 'joke':
        prompt = "托比老师，给我讲一个简单有趣的儿童英语双语小笑话吧！🎈";
        break;
      case 'rules':
        prompt = `请用好玩的表情符号和简单的例句，给我讲解一下「${selectedContext.unit}」核心语法要点吧！💡`;
        break;
      default:
        return;
    }
    handleSendMessage(prompt);
  };

  const cleanTextForSpeech = (text: string) => {
    return text.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g, "")
               .replace(/\*\*|\*/g, "")
               .replace(/#{1,6}/g, "");
  };

  return (
    <div className="space-y-6">
      {/* Back to map bar */}
      <div className="flex items-center justify-between bg-sky-400 p-3 rounded-2xl border-b-4 border-sky-600 shadow-sm text-sky-950">
        <button
          onClick={() => onBackToMap?.()}
          className="flex items-center gap-2 bg-sky-100 hover:bg-white text-sky-900 px-4 py-2 rounded-xl text-xs font-display font-bold border-b-2 border-sky-300 btn-bubbly cursor-pointer"
        >
          🏠 返回学习地图
        </button>
        <span className="font-display font-extrabold text-sm md:text-base flex items-center gap-1.5 uppercase tracking-wide">
          🐕 托比对话辅导
        </span>
        <div className="flex items-center gap-1 bg-sky-950/20 text-white rounded-full px-3 py-1 font-mono text-xs font-bold">
          <MessageSquare className="w-3.5 h-3.5 text-amber-300 fill-amber-300 animate-bounce" />
          五年级专属伴学
        </div>
      </div>

      <div className="flex flex-col h-[550px] bg-white rounded-3xl border-4 border-sky-400 shadow-[0_8px_0_0_#38bdf8] overflow-hidden" id="tutor-chat-section">
        {/* Toby Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-sky-50 border-b-3 border-sky-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-white font-display font-extrabold text-2xl border-2 border-amber-600 shadow-sm relative transform rotate-1">
              🐶
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>
            <div>
              <h3 className="font-display font-black text-slate-800 text-sm md:text-base flex items-center gap-1">
                托比老师对话辅导 <Smile className="w-4.5 h-4.5 text-amber-500 fill-amber-250 animate-bounce" />
              </h3>
              <span className="text-xs text-sky-800 font-display font-bold flex items-center gap-1">
                当前单元: {selectedContext.unit}
              </span>
            </div>
          </div>
          <button
            onClick={() => setMessages([{
              id: 'welcome-reset',
              sender: 'tutor',
              text: "我们重新开始学习探索吧！想请教托比老师什么问题呢？🌟",
              timestamp: new Date()
            }])}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 px-3 py-2 bg-white rounded-xl border-2 border-b-4 border-slate-200 hover:bg-slate-50 font-display font-extrabold transition-all btn-bubbly cursor-pointer"
            title="重新开始对话"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            清空记录
          </button>
        </div>

        {/* Messages list */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] rounded-2xl px-4 py-3.5 border-3 transition-transform duration-200 ${
                msg.sender === 'user'
                  ? 'bg-amber-100 text-slate-850 border-amber-300 rounded-tr-none shadow-[0_4px_0_0_#fbd38d]'
                  : 'bg-white text-slate-850 border-sky-100 rounded-tl-none shadow-[0_4px_0_0_#e2e8f0]'
              }`}>
                <div className="whitespace-pre-line text-sm leading-relaxed select-text font-display font-bold text-slate-800">
                  {msg.text}
                </div>
                <div className="flex items-center justify-between mt-2 pt-1.5 border-t-2 border-dashed border-slate-100 text-[11px] font-display font-bold text-slate-400">
                  <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  {msg.sender === 'tutor' && (
                    <button
                      onClick={() => {
                        speakText(cleanTextForSpeech(msg.text));
                      }}
                      className="p-1 hover:bg-sky-50 rounded-lg text-sky-500 hover:scale-110 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1 bg-slate-50 border border-slate-200"
                      title="朗读回答内容"
                    >
                      <Volume2 className="w-4 h-4 text-sky-600" />
                      <span className="text-[10px]">语音朗读 🔊</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-slate-800 border-3 border-sky-100 max-w-[80%] rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-3 shadow-xs">
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2.5 h-2.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-xs text-sky-700 font-display font-bold animate-pulse">托比老师思考中...</span>
              </div>
            </div>
          )}

          {errorText && (
            <div className="bg-red-50 border-3 border-red-200 rounded-2xl p-4 flex items-start gap-2.5 text-red-750 text-xs font-display font-bold shadow-xs">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
              <div className="flex-1">
                <p className="font-extrabold text-sm">发生了一点小事故</p>
                <p className="mt-1 opacity-90">{errorText}</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick response selectors */}
        <div className="px-4 py-2.5 bg-sky-50/70 border-t-3 border-sky-100 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => handleQuickAction('spelling')}
            className="bg-sky-100 font-display font-extrabold text-sky-850 hover:bg-sky-200 border-2 border-b-4 border-sky-300 text-xs px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer btn-bubbly"
          >
            📝 英文拼写挑战
          </button>
          <button
            onClick={() => handleQuickAction('question')}
            className="bg-emerald-100 font-display font-extrabold text-emerald-850 hover:bg-emerald-250 border-2 border-b-4 border-emerald-300 text-xs px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer btn-bubbly"
          >
            💬 托比智力通关
          </button>
          <button
            onClick={() => handleQuickAction('rules')}
            className="bg-indigo-100 font-display font-extrabold text-indigo-850 hover:bg-indigo-200 border-2 border-b-4 border-indigo-300 text-xs px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer btn-bubbly"
          >
            💡 单元语法解读
          </button>
          <button
            onClick={() => handleQuickAction('joke')}
            className="bg-amber-100 font-display font-extrabold text-amber-850 hover:bg-amber-200 border-2 border-b-4 border-amber-300 text-xs px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer btn-bubbly"
          >
            🎈 趣味英语双语笑话
          </button>
        </div>

        {/* Message Typing Panel */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputValue);
          }}
          className="p-3 bg-white border-t-3 border-sky-100 flex gap-2.5 items-center"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`输入你想问托比老师的问题...`}
            disabled={isLoading}
            className="flex-1 px-4 py-3.5 rounded-2xl border-3 border-slate-200 bg-slate-50 focus:bg-white focus:border-sky-400 transition-all outline-hidden text-sm font-display font-bold text-slate-700"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className={`px-5 py-3.5 rounded-2xl font-display font-black text-white flex items-center gap-1.5 shadow-md transition-all cursor-pointer border-b-4 ${
              !inputValue.trim() || isLoading
                ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed'
                : 'bg-amber-400 hover:bg-amber-500 border-amber-600 text-amber-950 btn-bubbly'
            }`}
          >
            <Send className="w-4 h-4" />
            发送
          </button>
        </form>
      </div>
    </div>
  );
}
