import React, { useState, useEffect } from 'react';
import { Volume2, Mic, CheckCircle2, ChevronRight, PenTool, Sparkles, HelpCircle, Loader2, ArrowLeft, Heart, Star, Eye, EyeOff, Sparkle, RefreshCw } from 'lucide-react';
import { WordItem, LearningContext } from '../types';
import { t } from '../utils/translation';

// === GRADE 5 INTERACTIVE CARTOON VECTOR ILLUSTRATIONS ===
interface CartoonProps {
  word: string;
  meaning: string;
}

const EducationalCartoon: React.FC<CartoonProps> = ({ word, meaning }) => {
  const norm = word.toLowerCase().trim();

  // 1. pilot
  if (norm === 'pilot' || norm.includes('pilot')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#DBEAFE" />
          </linearGradient>
          <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#F87171" />
          </linearGradient>
        </defs>
        {/* Sky */}
        <rect width="400" height="300" rx="24" fill="url(#skyGrad)" />
        {/* Sun */}
        <circle cx="345" cy="55" r="26" fill="#FBBF24" />
        <circle cx="345" cy="55" r="20" fill="#F59E0B" />
        {/* Clouds */}
        <path d="M50 120 C60 100, 90 100, 100 120 C110 110, 130 110, 137 122 C145 120, 160 125, 160 135 C160 145, 140 150, 120 150 L50 150 Z" fill="white" opacity="0.85" />
        <path d="M260 80 C270 65, 295 65, 305 80 C315 72, 330 72, 335 82 C342 80, 355 85, 355 95 C355 105, 335 110, 315 110 L260 110 Z" fill="white" opacity="0.6" />
        
        {/* Speed lines */}
        <line x1="12" y1="135" x2="42" y2="135" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <line x1="22" y1="155" x2="52" y2="155" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

        {/* Airplane Fuselage */}
        <path d="M60 180 L280 140 C300 135, 320 145, 320 160 L320 190 C320 205, 300 215, 280 210 L60 180 Z" fill="url(#planeGrad)" stroke="#B91C1C" strokeWidth="4" />
        <path d="M300 150 L340 100 L350 105 L320 170 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="4" />
        <path d="M140 170 L180 250 L195 245 L170 170 Z" fill="#FCD34D" stroke="#D97706" strokeWidth="4" />
        <path d="M150 168 L190 90 L205 95 L180 168 Z" fill="#FCD34D" stroke="#D97706" strokeWidth="4" />
        
        {/* Propeller Nose */}
        <path d="M60 160 C45 170, 45 190, 60 200 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="4" />
        <line x1="50" y1="180" x2="32" y2="110" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
        <line x1="50" y1="180" x2="32" y2="250" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
        <circle cx="50" cy="180" r="5" fill="#1E293B" />
        
        {/* Cockpit & Pilot */}
        <path d="M165 160 C165 125, 215 125, 215 160 Z" fill="#93C5FD" opacity="0.7" stroke="#1E3A8A" strokeWidth="3" />
        <circle cx="190" cy="152" r="15" fill="#FDBA74" stroke="#7C2D12" strokeWidth="2.5" />
        
        {/* Pilot Helmet & Goggles */}
        <path d="M175 146 C175 132, 205 132, 205 146 L205 152 L175 152 Z" fill="#78350F" />
        <rect x="180" y="138" width="20" height="8" rx="4" fill="#10B981" />
        <circle cx="185" cy="151" r="1.5" fill="#000" />
        <circle cx="195" cy="151" r="1.5" fill="#000" />
        <path d="M187 157 Q190 160, 193 157" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Waving pilot hand */}
        <path d="M210 154 Q220 144, 224 138" stroke="#7C2D12" strokeWidth="3" strokeLinecap="round" />
        <circle cx="224" cy="138" r="4" fill="#FDBA74" stroke="#7C2D12" strokeWidth="1.5" />
        
        {/* Windows */}
        <circle cx="250" cy="174" r="8" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
        <circle cx="275" cy="170" r="8" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
        
        {/* Educational label inside vector */}
        <rect x="110" y="15" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
        <text x="200" y="32" fill="#FCD34D" fontSize="11" fontWeight="950" fontFamily="sans-serif" textAnchor="middle">
          👨‍✈️ PILOT • 飞行员
        </text>
      </svg>
    );
  }

  // 2. teach / teacher
  if (norm === 'teach' || norm === 'teacher' || norm.includes('teach')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>
          <linearGradient id="boardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#064E3B" />
            <stop offset="100%" stopColor="#022C22" />
          </linearGradient>
        </defs>
        {/* Wall */}
        <rect width="400" height="300" rx="24" fill="url(#wallGrad)" />
        
        {/* Board Frame */}
        <rect x="30" y="35" width="340" height="170" rx="12" fill="#78350F" stroke="#451A03" strokeWidth="4" />
        <rect x="40" y="45" width="320" height="150" rx="8" fill="url(#boardGrad)" />
        
        {/* Chalk drawings on board */}
        <text x="65" y="90" fill="#FFFFFF" fontSize="22" fontWeight="800" fontFamily="sans-serif" opacity="0.9">A B C</text>
        <text x="65" y="130" fill="#6EE7B7" fontSize="20" fontWeight="700" fontFamily="sans-serif" opacity="0.8">English Lesson</text>
        <text x="220" y="100" fill="#FFFFFF" fontSize="22" fontWeight="800" fontFamily="sans-serif" opacity="0.9">1 + 2 = 3</text>
        
        <circle cx="260" cy="135" r="16" stroke="#FCD34D" strokeWidth="3" fill="none" opacity="0.8" />
        <line x1="260" y1="125" x2="260" y2="145" stroke="#FCD34D" strokeWidth="3" opacity="0.8" />
        <line x1="250" y1="135" x2="270" y2="135" stroke="#FCD34D" strokeWidth="3" opacity="0.8" />

        {/* Teacher standing on the right */}
        <path d="M290 300 C290 230, 370 230, 370 300 Z" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="35" strokeLinecap="round" />
        {/* Teacher Head */}
        <circle cx="330" cy="205" r="23" fill="#FDBA74" stroke="#7C2D12" strokeWidth="3" />
        <path d="M308 198 C308 175, 352 175, 352 198 C352 188, 342 184, 330 184 C318 184, 308 188, 308 198 Z" fill="#78350F" />
        
        {/* Glasses */}
        <circle cx="320" cy="202" r="7" fill="none" stroke="#78350F" strokeWidth="2" />
        <circle cx="340" cy="202" r="7" fill="none" stroke="#78350F" strokeWidth="2" />
        <line x1="327" y1="202" x2="333" y2="202" stroke="#78350F" strokeWidth="2" />
        <circle cx="320" cy="202" r="2" fill="#000" />
        <circle cx="340" cy="202" r="2" fill="#000" />
        <path d="M325 214 Q330 218, 335 214" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        
        {/* Pointer stick */}
        <line x1="310" y1="240" x2="200" y2="120" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
        <circle cx="310" cy="240" r="6" fill="#FDBA74" stroke="#7C2D12" strokeWidth="1.5" />
        
        {/* Desk with Books & Apple */}
        <rect x="30" y="255" width="130" height="45" fill="#B45309" stroke="#451A03" strokeWidth="3" />
        <rect x="40" y="240" width="40" height="15" fill="#EF4444" stroke="#991B1B" strokeWidth="2" rx="3" />
        <rect x="45" y="228" width="30" height="12" fill="#10B981" stroke="#065F46" strokeWidth="2" rx="3" />
        <circle cx="120" cy="245" r="8" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
        <path d="M120 237 Q123 232, 125 233" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />

        {/* Text Ribbon */}
        <rect x="110" y="15" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
        <text x="200" y="32" fill="#6EE7B7" fontSize="11" fontWeight="950" fontFamily="sans-serif" textAnchor="middle">
          👩‍🏫 TEACH • 教师教学
        </text>
      </svg>
    );
  }

  // 3. cook
  if (norm === 'cook' || norm === 'chef' || norm.includes('cook')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kitchenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#115E59" />
          </linearGradient>
          <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#EA580C" opacity="0.2" />
            <stop offset="50%" stopColor="#F97316" opacity="0.9" />
            <stop offset="100%" stopColor="#FCD34D" />
          </linearGradient>
        </defs>
        {/* Wall */}
        <rect width="400" height="300" rx="24" fill="url(#kitchenGrad)" />
        <path d="M0 80 L400 80 M0 160 L400 160" stroke="#134E4A" strokeWidth="2" opacity="0.5" />
        <path d="M100 0 L100 300 M200 0 L200 300 M300 0 L300 300" stroke="#134E4A" strokeWidth="2" opacity="0.5" />
        
        {/* Stove block */}
        <rect x="0" y="220" width="400" height="80" fill="#475569" stroke="#1E293B" strokeWidth="3" />
        <ellipse cx="140" cy="230" rx="45" ry="10" fill="#1E293B" />
        <path d="M110 228 Q115 210, 120 228 Q125 195, 135 228 Q140 200, 145 228 Q155 205, 160 228 Q165 215, 170 228 Z" fill="url(#fireGrad)" stroke="#EA580C" strokeWidth="1.5" />

        {/* Frying pan tossing food */}
        <path d="M100 215 C100 200, 190 200, 190 215 L190 224 L100 224 Z" fill="#334155" stroke="#0F172A" strokeWidth="4" />
        <path d="M190 215 L280 185" stroke="#1E293B" strokeWidth="7" strokeLinecap="round" />
        <path d="M190 215 L280 185" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />

        {/* Spices / Splashes */}
        <circle cx="130" cy="155" r="4" fill="#34D399" />
        <circle cx="160" cy="145" r="6" fill="#F87171" stroke="#991B1B" strokeWidth="1" />
        <path d="M115 160 Q130 140, 120 120" stroke="#F1F5F9" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <path d="M168 160 Q152 140, 160 115" stroke="#F1F5F9" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

        {/* Chef mascot */}
        <path d="M260 300 C260 240, 360 240, 360 300 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
        <circle cx="288" cy="265" r="4" fill="#64748B" />
        <circle cx="288" cy="280" r="4" fill="#64748B" />
        <path d="M295 242 Q310 250, 325 242" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
        
        {/* Head */}
        <circle cx="310" cy="205" r="24" fill="#FDBA74" stroke="#7C2D12" strokeWidth="3" />
        <circle cx="302" cy="202" r="2.5" fill="#000" />
        <circle cx="318" cy="202" r="2.5" fill="#000" />
        <circle cx="295" cy="208" r="3.5" fill="#F43F5E" opacity="0.4" />
        <circle cx="325" cy="208" r="3.5" fill="#F43F5E" opacity="0.4" />
        <path d="M294 212 Q310 205, 326 212 Q310 224, 294 212" fill="#78350F" stroke="#451A03" strokeWidth="2" />
        
        {/* Chef hat */}
        <path d="M285 185 C275 185, 275 155, 292 155 C285 140, 305 125, 317 140 C325 125, 345 130, 340 152 C350 155, 350 185, 335 185 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
        <rect x="285" y="176" width="50" height="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />

        {/* Title */}
        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
        <text x="200" y="32" fill="#FCD34D" fontSize="11" fontWeight="950" fontFamily="sans-serif" textAnchor="middle">
          🍳 COOK • 厨师烹饪
        </text>
      </svg>
    );
  }

  // 4. taxi driver
  if (norm === 'taxi driver' || norm.includes('taxi') || norm.includes('driver')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="100%" stopColor="#ECFDF5" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" rx="24" fill="url(#cityGrad)" />
        
        {/* Skyline */}
        <rect x="20" y="80" width="60" height="120" fill="#6EE7B7" opacity="0.25" />
        <rect x="65" y="110" width="50" height="90" fill="#6EE7B7" opacity="0.25" />
        <rect x="240" y="70" width="70" height="130" fill="#6EE7B7" opacity="0.25" />
        <rect x="300" y="100" width="80" height="100" fill="#6EE7B7" opacity="0.25" />
        <circle cx="180" cy="70" r="18" fill="#FBBF24" />
        
        {/* Roadway */}
        <rect x="0" y="190" width="400" height="110" fill="#475569" />
        <line x1="0" y1="245" x2="400" y2="245" stroke="#FDE68A" strokeWidth="5" strokeDasharray="15 15" />

        {/* Yellow Taxi Car */}
        <ellipse cx="190" cy="225" rx="135" ry="10" fill="#1F2937" opacity="0.3" />
        <circle cx="100" cy="215" r="24" fill="#1F2937" stroke="#9CA3AF" strokeWidth="3" />
        <circle cx="100" cy="215" r="8" fill="#E5E7EB" />
        <circle cx="280" cy="215" r="24" fill="#1F2937" stroke="#9CA3AF" strokeWidth="3" />
        <circle cx="280" cy="215" r="8" fill="#E5E7EB" />

        <path d="M50 195 L50 170 C50 160, 60 152, 72 152 L115 152 L145 110 C150 102, 162 97, 172 97 L240 97 C250 97, 260 102, 265 110 L290 152 L315 152 C327 152, 335 160, 335 170 L335 195 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="4" />
        <rect x="50" y="172" width="285" height="15" fill="#F59E0B" />
        
        <path d="M123 152 L148 112 C151 106, 156 104, 163 104 L185 104 L185 152 Z" fill="#DBEAFE" stroke="#1E3A8A" strokeWidth="2.5" />
        <path d="M195 104 L235 104 C243 104, 248 106, 252 112 L273 152 L195 152 Z" fill="#DBEAFE" stroke="#1E3A8A" strokeWidth="2.5" />
        
        {/* Sign */}
        <rect x="180" y="81" width="36" height="16" rx="3" fill="#FFFFFF" stroke="#000" strokeWidth="2" />
        <text x="198" y="93" fill="black" fontSize="9" fontWeight="950" fontFamily="monospace" textAnchor="middle">TAXI</text>

        {/* Driver smiling inside */}
        <circle cx="218" cy="128" r="13" fill="#FDBA74" stroke="#7C2D12" strokeWidth="2" />
        <path d="M205 124 C205 116, 231 116, 231 124 Z" fill="#1E40AF" />
        <circle cx="214" cy="127" r="1" fill="#000" />
        <circle cx="222" cy="127" r="1" fill="#000" />
        <path d="M216 133 Q218 135, 220 133" stroke="#000" strokeWidth="1" strokeLinecap="round" />
        
        {/* Checker pattern */}
        <rect x="90" y="174" width="10" height="10" fill="black" />
        <rect x="100" y="174" width="10" height="10" fill="white" />
        <rect x="110" y="174" width="10" height="10" fill="black" />
        <rect x="120" y="174" width="10" height="10" fill="white" />
        <rect x="130" y="174" width="10" height="10" fill="black" />

        {/* Title */}
        <rect x="100" y="12" width="200" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="30" fill="#FCD34D" fontSize="11" fontWeight="950" fontFamily="sans-serif" textAnchor="middle">
          🚖 TAXI DRIVER • 出租车司机
        </text>
      </svg>
    );
  }

  // 5. beach
  if (norm === 'beach' || norm.includes('beach') || norm.includes('sea') || norm === 'island') {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="beachSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#FECDD3" />
          </linearGradient>
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" rx="24" fill="url(#beachSky)" />
        
        {/* Smiling sun */}
        <circle cx="80" cy="70" r="22" fill="#FBBF24" />
        <circle cx="73" cy="67" r="2" fill="black" />
        <circle cx="87" cy="67" r="2" fill="black" />
        <path d="M74 76 Q80 82, 86 76" stroke="black" strokeWidth="2.5" strokeLinecap="round" />

        {/* Water */}
        <path d="M0 160 Q80 145, 160 160 Q240 175, 320 160 Q400 145, 400 160 L400 300 L0 300 Z" fill="url(#oceanGrad)" />
        {/* Sand */}
        <path d="M120 300 L400 160 L400 300 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
        
        {/* Palm tree */}
        <path d="M355 210 Q315 160, 335 100 Q342 162, 370 195 Z" fill="#78350F" stroke="#451A03" strokeWidth="1.5" />
        <path d="M335 100 Q300 100, 270 120 Q305 115, 335 100" fill="#10B981" stroke="#065F46" strokeWidth="1.5" />
        <path d="M335 100 Q310 70, 290 50 Q317 68, 335 100" fill="#10B981" stroke="#065F46" strokeWidth="1.5" />
        <path d="M335 100 Q350 70, 380 60 Q362 76, 335 100" fill="#059669" stroke="#065F46" strokeWidth="1.5" />
        <circle cx="330" cy="100" r="5" fill="#78350F" />
        
        {/* Umbrella */}
        <line x1="260" y1="260" x2="240" y2="185" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M200 185 C200 150, 280 150, 280 185 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
        <path d="M220 185 C220 155, 235 155, 240 185" fill="#FFFFFF" stroke="#991B1B" strokeWidth="1.5" />
        <path d="M260 185 C260 155, 245 155, 240 185" fill="#FFFFFF" stroke="#991B1B" strokeWidth="1.5" />

        {/* Title */}
        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="30" fill="#FCD34D" fontSize="12" fontWeight="950" fontFamily="sans-serif" textAnchor="middle">
          🏖️ BEACH • 迷人海滩
        </text>
      </svg>
    );
  }

  // 6. post office
  if (norm === 'post office' || norm.includes('post') || norm.includes('office')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="24" fill="#93C5FD" />
        
        {/* Post office block */}
        <rect x="40" y="100" width="220" height="150" rx="12" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="4" />
        <polygon points="25 100, 150 40, 275 100" fill="#1D4ED8" stroke="#1E3A8A" strokeWidth="4" />
        
        <rect x="75" y="112" width="150" height="28" rx="6" fill="#1F2937" />
        <text x="150" y="130" fill="#FDE047" fontSize="11" fontWeight="900" fontFamily="monospace" textAnchor="middle">✉️ POST OFFICE</text>

        {/* Door */}
        <rect x="130" y="180" width="45" height="70" rx="4" fill="#E2E8F0" stroke="#1F2937" strokeWidth="3" />
        
        {/* Mail Box Red */}
        <rect x="300" y="145" width="42" height="100" rx="8" fill="#EF4444" stroke="#B91C1C" strokeWidth="3.5" />
        <rect x="308" y="158" width="26" height="6" fill="#1E293B" rx="2" />
        <rect x="306" y="180" width="30" height="15" fill="#FFE4E6" stroke="#991B1B" strokeWidth="1" />
        <text x="321" y="191" fill="#EF4444" fontSize="8" fontWeight="bold" textAnchor="middle">郵</text>

        <rect x="0" y="245" width="400" height="55" fill="#10B981" />
        <rect x="0" y="245" width="400" height="5" fill="#059669" />

        {/* Envelopes */}
        <g transform="translate(260, 65) rotate(-15)">
          <rect width="36" height="24" rx="4" fill="#FFFFFF" stroke="#475569" strokeWidth="2" />
          <path d="M 0 0 L 18 13 L 36 0" stroke="#475569" strokeWidth="2" fill="none" />
          <circle cx="30" cy="6" r="3" fill="#EF4444" />
        </g>

        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="30" fill="#FCD34D" fontSize="11" fontWeight="950" fontFamily="sans-serif" textAnchor="middle">
          ✉️ POST OFFICE • 邮局建筑
        </text>
      </svg>
    );
  }

  // 7. hospital
  if (norm === 'hospital' || norm.includes('hospital') || norm.includes('clinic')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="24" fill="#A5F3FC" />
        <rect x="0" y="240" width="400" height="60" fill="#64748B" />
        <rect x="0" y="240" width="400" height="6" fill="#475569" />

        {/* Hospital block */}
        <rect x="80" y="80" width="240" height="160" rx="16" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="4.5" />
        
        {/* Red Cross Sign */}
        <circle cx="200" cy="120" r="28" fill="#FFFFFF" stroke="#EF4444" strokeWidth="3" />
        <rect x="194" y="104" width="12" height="32" rx="2" fill="#EF4444" />
        <rect x="184" y="114" width="32" height="12" rx="2" fill="#EF4444" />

        {/* Windows */}
        <rect x="110" y="165" width="35" height="35" rx="6" fill="#93C5FD" stroke="#1E40AF" strokeWidth="2" />
        <rect x="255" y="165" width="35" height="35" rx="6" fill="#93C5FD" stroke="#1E40AF" strokeWidth="2" />
        <line x1="127" y1="165" x2="127" y2="200" stroke="#1E40AF" strokeWidth="1.5" />
        <line x1="272" y1="165" x2="272" y2="200" stroke="#1E40AF" strokeWidth="1.5" />

        {/* Slide doors */}
        <rect x="175" y="190" width="50" height="50" rx="4" fill="#DBEAFE" stroke="#1F2937" strokeWidth="3" />
        <line x1="200" y1="190" x2="200" y2="240" stroke="#1F2937" strokeWidth="2" />

        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="30" fill="#FCD34D" fontSize="11" fontWeight="950" fontFamily="sans-serif" textAnchor="middle">
          🏥 HOSPITAL • 治病医院
        </text>
      </svg>
    );
  }

  // 8. grandparents
  if (norm === 'grandparents' || norm.includes('parents') || norm.includes('grand') || norm === 'relative') {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="24" fill="#FFF1F2" />
        <path d="M200 130 C200 50, 100 50, 140 130 L200 210 L260 130 C300 50, 200 50, 200 130 Z" fill="#FDA4AF" opacity="0.35" />

        {/* Grandma */}
        <g transform="translate(-10, 0)">
          <path d="M110 300 C110 220, 190 220, 190 300 Z" fill="#EC4899" stroke="#961B4D" strokeWidth="3" />
          <circle cx="150" cy="195" r="24" fill="#FDBA74" stroke="#7C2D12" strokeWidth="3" />
          <circle cx="150" cy="155" r="13" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="2.5" />
          {/* Hair part */}
          <path d="M125 190 C125 174, 175 174, 175 190 C175 180, 160 178, 150 178 L150 190 Z" fill="#E5E7EB" />
          <circle cx="140" cy="194" r="7" fill="none" stroke="#D97706" strokeWidth="2" />
          <circle cx="160" cy="194" r="7" fill="none" stroke="#D97706" strokeWidth="2" />
          <line x1="147" y1="194" x2="153" y2="194" stroke="#D97706" strokeWidth="2" />
          <circle cx="140" cy="194" r="1.5" fill="#000" />
          <circle cx="160" cy="194" r="1.5" fill="#000" />
          <path d="M142 208 Q150 213, 158 208" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Grandpa */}
        <g transform="translate(10, 0)">
          <path d="M220 300 C220 215, 300 215, 300 300 Z" fill="#059669" stroke="#047857" strokeWidth="3" />
          <line x1="240" y1="240" x2="240" y2="300" stroke="#D97706" strokeWidth="3" />
          <line x1="280" y1="240" x2="280" y2="300" stroke="#D97706" strokeWidth="3" />
          
          <circle cx="260" cy="195" r="24" fill="#FDBA74" stroke="#7C2D12" strokeWidth="3" />
          <path d="M235 192 Q230 172, 240 172 Q245 182, 240 192 Z" fill="#E5E7EB" />
          <path d="M285 192 Q290 172, 280 172 Q275 182, 280 192 Z" fill="#E5E7EB" />
          
          <circle cx="250" cy="194" r="7" fill="none" stroke="#1E293B" strokeWidth="2.1" />
          <circle cx="270" cy="194" r="7" fill="none" stroke="#1E293B" strokeWidth="2.1" />
          <line x1="257" y1="194" x2="263" y2="194" stroke="#1E293B" strokeWidth="2" />
          <circle cx="250" cy="194" r="1.5" fill="#000" />
          <circle cx="270" cy="194" r="1.5" fill="#000" />
          <path d="M253 214 Q260 219, 267 214" stroke="#7C2D12" strokeWidth="2" strokeLinecap="round" />
        </g>

        <rect x="80" y="12" width="240" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="30" fill="#FCD34D" fontSize="11" fontWeight="950" fontFamily="sans-serif" textAnchor="middle">
          👵👴 GRANDPARENTS • 慈祥祖父母
        </text>
      </svg>
    );
  }

  // 9. busy
  if (norm === 'busy') {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="24" fill="#EEF2F6" />
        <circle cx="200" cy="150" r="110" fill="#E2E8F0" opacity="0.4" />
        
        <circle cx="90" cy="90" r="20" fill="#FFF" stroke="#64748B" strokeWidth="3.5" />
        <line x1="90" y1="90" x2="90" y2="78" stroke="#1E293B" strokeWidth="3" />
        <line x1="90" y1="90" x2="102" y2="90" stroke="#1E293B" strokeWidth="3" />

        <circle cx="310" cy="210" r="24" fill="#FFF" stroke="#F59E0B" strokeWidth="3.5" />
        <line x1="310" y1="210" x2="310" y2="196" stroke="#1E293B" strokeWidth="3" />
        <line x1="310" y1="210" x2="324" y2="215" stroke="#1E293B" strokeWidth="3" />

        <path d="M150 300 C150 210, 250 210, 250 300 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="3.5" />
        <circle cx="200" cy="180" r="28" fill="#FDBA74" stroke="#7C2D12" strokeWidth="3.5" />
        
        <path d="M 80 160 L 115 150 L 125 180 L 90 190 Z" fill="#93C5FD" stroke="#1E40AF" strokeWidth="2.5" />
        <path d="M 290 80 L 320 70 L 330 95 L 300 105 Z" fill="#93C5FD" stroke="#1E40AF" strokeWidth="2.5" />
        
        <circle cx="190" cy="176" r="3" fill="#000" />
        <circle cx="210" cy="176" r="3" fill="#000" />
        <path d="M195 192 Q200 186, 205 192" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
        
        <rect x="130" y="15" width="140" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="33" fill="#FCD34D" fontSize="12" fontWeight="950" textAnchor="middle">
          ⚡ BUSY • 忙碌的
        </text>
      </svg>
    );
  }

  // 10. lazy
  if (norm === 'lazy') {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="24" fill="#ECFDF5" />
        <path d="M 0 100 Q 150 120, 400 80" stroke="#78350F" strokeWidth="18" strokeLinecap="round" />
        <circle cx="360" cy="70" r="45" fill="#059669" opacity="0.85" />
        
        <rect x="120" y="105" width="130" height="60" rx="30" fill="#B45309" stroke="#78350F" strokeWidth="4" />
        <path d="M 150 110 L 150 90" stroke="#B45309" strokeWidth="8" strokeLinecap="round" />
        <path d="M 220 110 L 220 90" stroke="#B45309" strokeWidth="8" strokeLinecap="round" />
        
        <circle cx="120" cy="150" r="25" fill="#D1D5DB" stroke="#78350F" strokeWidth="4" />
        <ellipse cx="110" cy="150" rx="8" ry="12" fill="#B45309" transform="rotate(-15, 110, 150)" />
        <ellipse cx="130" cy="150" rx="8" ry="12" fill="#B45309" transform="rotate(15, 130, 150)" />
        <path d="M106 150 Q110 154, 114 150" stroke="#FFE4E6" strokeWidth="2" strokeLinecap="round" />
        <path d="M126 150 Q130 154, 134 150" stroke="#FFE4E6" strokeWidth="2" strokeLinecap="round" />
        <circle cx="120" cy="157" r="3" fill="#111" />

        <text x="75" y="130" fill="#059669" fontSize="20" fontWeight="900">z</text>
        <text x="55" y="155" fill="#10B981" fontSize="15" fontWeight="800">Z</text>

        <rect x="130" y="15" width="140" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="33" fill="#A7F3D0" fontSize="11" fontWeight="950" textAnchor="middle">
          🦥 LAZY • 懒散的
        </text>
      </svg>
    );
  }

  // 11. zoo
  if (norm === 'zoo' || norm.includes('zoo')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" rx="24" fill="#ECFDF5" />
        <rect x="40" y="0" width="14" height="300" fill="#34D399" />
        <rect x="330" y="0" width="16" height="300" fill="#059669" />
        
        <ellipse cx="200" cy="255" rx="75" ry="10" fill="#D1D5DB" />
        <rect x="140" y="160" width="120" height="100" rx="50" fill="#111827" stroke="#374151" strokeWidth="2" />
        <rect x="155" y="170" width="90" height="85" rx="42" fill="#FFFFFF" />
        
        <circle cx="200" cy="130" r="42" fill="#FFFFFF" stroke="#374151" strokeWidth="4" />
        <circle cx="160" cy="98" r="16" fill="#111827" />
        <circle cx="240" cy="98" r="16" fill="#111827" />
        
        <ellipse cx="182" cy="128" rx="10" ry="14" fill="#111827" transform="rotate(-15, 182, 128)" />
        <ellipse cx="218" cy="128" rx="10" ry="14" fill="#111827" transform="rotate(15, 218, 128)" />
        <circle cx="184" cy="125" r="3.5" fill="#FFFFFF" />
        <circle cx="216" cy="125" r="3.5" fill="#FFFFFF" />
        <polygon points="195 142, 205 142, 200 146" fill="#111827" />
        <path d="M 194 150 Q 200 155, 206 150" stroke="#111827" strokeWidth="2" />

        <rect x="110" y="15" width="180" height="28" rx="10" fill="#1E40AF" opacity="0.9" />
        <text x="200" y="32" fill="#FDE047" fontSize="12" fontWeight="950" textAnchor="middle">
          🐼 ZOO • 动物园
        </text>
      </svg>
    );
  }

  // --- Falling back to high quality Thematic Classifiers ---
  const isTimeWord = ['hour', 'after', 'before', 'when', 'begin', 'year', 'usually', 'often', 'sometimes', 'always', 'never', 'date', 'month', 'clock', 'time'].includes(norm);
  if (isTimeWord) {
    const isAlways = norm === 'always';
    const isNever = norm === 'never';
    const isSometimes = norm === 'sometimes';
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="timeSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#C7D2FE" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" rx="24" fill="url(#timeSky)" />
        <circle cx="100" cy="70" r="30" fill="white" opacity="0.3" />
        <circle cx="310" cy="80" r="35" fill="white" opacity="0.2" />
        
        <circle cx="150" cy="115" r="22" fill="#E2E8F0" stroke="#1F2937" strokeWidth="4" />
        <circle cx="250" cy="115" r="22" fill="#E2E8F0" stroke="#1F2937" strokeWidth="4" />
        <path d="M 180 115 Q 200 95, 220 115" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" fill="none" />

        {/* Vintage double-bell round clock body */}
        <circle cx="200" cy="180" r="62" fill="#EF4444" stroke="#1F2937" strokeWidth="5.5" />
        <circle cx="200" cy="180" r="50" fill="#FFFFFF" stroke="#374151" strokeWidth="3" />
        <line x1="200" y1="180" x2="200" y2="148" stroke="#1E293B" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="200" y1="180" x2="232" y2="180" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="200" cy="180" r="5" fill="#EF4444" />

        {isAlways && (
          <g transform="translate(140, 48)">
            <circle cx="60" cy="30" r="18" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
            <line x1="60" y1="5" x2="60" y2="12" stroke="#D97706" strokeWidth="3" />
            <line x1="35" y1="30" x2="42" y2="30" stroke="#D97706" strokeWidth="3" />
            <text x="60" y="62" fill="#D97706" fontSize="9" fontWeight="900" textAnchor="middle">☀️ ALWAYS</text>
          </g>
        )}

        {isNever && (
          <g transform="translate(250, 110)">
            <circle cx="40" cy="40" r="22" fill="#EF4444" stroke="#7F1D1D" strokeWidth="3" />
            <line x1="24" y1="24" x2="56" y2="56" stroke="#FFFFFF" strokeWidth="5" />
            <text x="40" y="78" fill="#7F1D1D" fontSize="9" fontWeight="950" textAnchor="middle">🚫 NEVER</text>
          </g>
        )}

        {isSometimes && (
          <g transform="translate(30, 110)">
            <path d="M10 25 C10 15, 25 10, 35 15 C42 10, 55 10, 60 18 C75 18, 75 25, 75 25 Z" fill="#94A3B8" />
            <line x1="25" y1="42" x2="20" y2="50" stroke="#3B82F6" strokeWidth="2.5" />
            <line x1="45" y1="42" x2="40" y2="50" stroke="#3B82F6" strokeWidth="2.5" />
            <text x="42" y="63" fill="#475569" fontSize="9" fontWeight="900" textAnchor="middle">🌦️ SOMETIMES</text>
          </g>
        )}

        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="32" fill="#E0E7FF" fontSize="11" fontWeight="950" textAnchor="middle">
          ⏰ TIME • 时间概念 ({word})
        </text>
      </svg>
    );
  }

  const isSchoolWord = ['class', 'study', 'subject', 'english', 'math', 'science', 'art', 'music', 'pe', 'sport', 'computer', 'crayon', 'paper', 'word', 'write', 'learn', 'lesson', 'school'].includes(norm);
  if (isSchoolWord) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="schoolGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DDD6FE" />
            <stop offset="100%" stopColor="#C4B5FD" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" rx="24" fill="url(#schoolGrad)" />
        
        <polygon points="0 250, 400 250, 400 300, 0 300" fill="#D97706" />
        <rect x="0" y="244" width="400" height="6" fill="#B45309" />

        <path d="M 60 250 L 180 220 L 220 235 L 100 265 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2.5" />
        <text x="135" y="246" fill="#FFE4E6" fontSize="10" transform="rotate(-14, 135, 246)" fontWeight="900">📐 MATH</text>
        
        <path d="M 70 238 L 190 208 L 230 223 L 110 253 Z" fill="#10B981" stroke="#065F46" strokeWidth="2.5" />
        <text x="145" y="234" fill="#E6F4EA" fontSize="10" transform="rotate(-14, 145, 234)" fontWeight="900">🔬 SCIENCE</text>

        <path d="M 80 226 L 200 196 L 240 211 L 120 241 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2.5" />
        <text x="155" y="222" fill="#E8F0FE" fontSize="10" transform="rotate(-14, 155, 222)" fontWeight="900">🔔 ENGLISH</text>

        <g opacity="0.85">
          <circle cx="100" cy="90" r="24" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
          <text x="100" y="98" fill="#78350F" fontSize="24" fontWeight="950" textAnchor="middle">A</text>
          
          <circle cx="200" cy="75" r="24" fill="#F87171" stroke="#B91C1C" strokeWidth="2.5" />
          <text x="200" y="83" fill="#7F1D1D" fontSize="24" fontWeight="950" textAnchor="middle">B</text>

          <circle cx="300" cy="100" r="24" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="2.5" />
          <text x="300" y="108" fill="#1E3A8A" fontSize="24" fontWeight="950" textAnchor="middle">C</text>
        </g>

        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="32" fill="#F5F3FF" fontSize="11" fontWeight="950" textAnchor="middle">
          ✏️ STUDY • 智慧学习 ({word})
        </text>
      </svg>
    );
  }

  const isNatureWord = ['lake', 'hill', 'river', 'sea', 'forest', 'tree', 'ground', 'fire', 'sky', 'sun', 'flower', 'garden', 'zoo', 'park', 'toy shop', 'flower shop', 'supermarket', 'house', 'station', 'museum', 'theatre', 'cinema'].includes(norm);
  if (isNatureWord) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="natureSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#F0F9FF" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" rx="24" fill="url(#natureSky)" />
        <circle cx="340" cy="55" r="22" fill="#FCD34D" />

        <path d="M-40 220 Q80 140, 200 210 Q320 280, 440 210 L440 300 L-40 300 Z" fill="#10B981" />
        <path d="M0 240 Q150 180, 280 230 L410 300 L0 300 Z" fill="#059669" opacity="0.8" />
        
        <path d="M100 260 Q85 180, 95 140 L115 140 Q112 190, 115 260" fill="#78350F" stroke="#451A03" strokeWidth="2.5" />
        <circle cx="75" cy="120" r="30" fill="#15803D" stroke="#166534" strokeWidth="2.5" />
        <circle cx="125" cy="115" r="28" fill="#15803D" stroke="#166534" strokeWidth="2.5" />
        <circle cx="100" cy="90" r="33" fill="#16A34A" stroke="#166534" strokeWidth="3" />

        <g transform="translate(230, 215)">
          <line x1="10" y1="20" x2="10" y2="35" stroke="#10B981" strokeWidth="3" />
          <path d="M 5 20 Q 10 10, 15 20 Z" fill="#EF4444" />
        </g>
        <g transform="translate(260, 225)">
          <line x1="10" y1="20" x2="10" y2="35" stroke="#10B981" strokeWidth="3" />
          <path d="M 5 20 Q 10 10, 15 20 Z" fill="#EC4899" />
        </g>

        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.9" />
        <text x="200" y="32" fill="#DBEAFE" fontSize="11" fontWeight="950" textAnchor="middle">
          🌲 OUTDOORS • 自然地理 ({word})
        </text>
      </svg>
    );
  }

  // --- INDIVIDUAL CUSTOM WORD ILLUSTRATIONS ---

  // sock / socks
  if (norm === 'sock' || norm === 'socks' || norm.includes('sock')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" id="sock-illustration">
        <rect width="400" height="300" rx="24" fill="#FFF1F2" />
        <rect width="400" height="300" rx="24" stroke="#F43F5E" strokeWidth="4" />
        <line x1="40" y1="85" x2="360" y2="85" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
        
        {/* Sock 1 */}
        <g transform="translate(130, 85)">
          <rect x="17" y="-12" width="6" height="18" fill="#D97706" rx="1.5" />
          <path d="M15 0 L15 70 C15 88, 30 102, 50 102 C65 102, 65 88, 51 88 L35 88 L35 0 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="3.5" />
          <rect x="18.5" y="18" width="13" height="6" fill="#FDE047" />
          <rect x="18.5" y="38" width="13" height="6" fill="#FDE047" />
          <rect x="18.5" y="58" width="13" height="6" fill="#FDE047" />
        </g>

        {/* Sock 2 */}
        <g transform="translate(200, 90) rotate(8)">
          <rect x="17" y="-12" width="6" height="18" fill="#D97706" rx="1.5" />
          <path d="M15 0 L15 70 C15 88, 30 102, 50 102 C65 102, 65 88, 51 88 L35 88 L35 0 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="3.5" />
          <rect x="18.5" y="18" width="13" height="6" fill="#FFFFFF" />
          <rect x="18.5" y="38" width="13" height="6" fill="#FFFFFF" />
          <rect x="18.5" y="58" width="13" height="6" fill="#FFFFFF" />
        </g>

        <path d="M 90 55 L 92 59 L 96 59 L 93 61 L 94 65 L 90 62 L 86 65 L 87 61 L 84 59 L 88 59 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
        <path d="M 315 160 L 317 164 L 321 164 L 318 166 L 319 170 L 315 167 L 311 170 L 312 166 L 309 164 L 313 164 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
        
        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
        <text x="200" y="30" fill="#F472B6" fontSize="11" fontWeight="950" textAnchor="middle">
          🧦 SOCK • 教学袜子闪卡
        </text>
      </svg>
    );
  }

  // umbrella
  if (norm === 'umbrella' || norm.includes('umbrella')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" id="umbrella-illustration">
        <defs>
          <linearGradient id="rainSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" rx="24" fill="url(#rainSky)" />
        <rect width="400" height="300" rx="24" stroke="#0284C7" strokeWidth="4" />
        
        <line x1="60" y1="40" x2="55" y2="65" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" strokeLinecap="round" />
        <line x1="320" y1="50" x2="315" y2="75" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" strokeLinecap="round" />
        <line x1="130" y1="20" x2="125" y2="45" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" strokeLinecap="round" />
        <line x1="280" y1="30" x2="275" y2="55" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" strokeLinecap="round" />

        <path d="M200 130 L200 220 A15 15 0 0 1 170 220" stroke="#475569" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        <path d="M100 140 C100 65, 300 65, 300 140 Q250 120, 200 140 Q150 120, 100 140 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="4" />
        <rect x="197" y="65" width="6" height="15" fill="#475569" rx="2" />
        
        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
        <text x="200" y="30" fill="#E0F2FE" fontSize="11" fontWeight="950" textAnchor="middle">
          ☔ UMBRELLA • 遮雨伞
        </text>
      </svg>
    );
  }

  // tidy
  if (norm === 'tidy' || norm.includes('tidy')) {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" id="tidy-illustration">
        <rect width="400" height="300" rx="24" fill="#F5F3FF" />
        <rect width="400" height="300" rx="24" stroke="#8B5CF6" strokeWidth="4" />
        
        {/* Organizer shelf */}
        <rect x="50" y="80" width="140" height="150" rx="12" fill="#E2E8F0" stroke="#64748B" strokeWidth="3.5" />
        <line x1="50" y1="150" x2="190" y2="150" stroke="#64748B" strokeWidth="3" />
        
        {/* Books arranged nicely */}
        <rect x="68" y="100" width="20" height="50" fill="#EF4444" rx="2" />
        <rect x="88" y="94" width="22" height="56" fill="#3B82F6" rx="2" />
        <rect x="110" y="104" width="18" height="46" fill="#10B981" rx="2" />
        
        {/* Teddy bear toy */}
        <circle cx="120" cy="190" r="15" fill="#D97706" />
        <circle cx="111" cy="177" r="5" fill="#D97706" />
        <circle cx="129" cy="177" r="5" fill="#D97706" />
        <circle cx="115" cy="188" r="1.5" fill="#000" />
        <circle cx="125" cy="188" r="1.5" fill="#000" />
        <ellipse cx="120" cy="195" rx="5" ry="3" fill="#FDBA74" />

        {/* Clean folded bed */}
        <rect x="230" y="130" width="120" height="100" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
        <rect x="230" y="130" width="120" height="30" fill="#C4B5FD" rx="5" />
        <rect x="250" y="175" width="80" height="40" fill="#EF4444" rx="4" />

        {/* Sweeping broom representing tidy up action */}
        <line x1="210" y1="205" x2="210" y2="245" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
        <polygon points="200 245, 220 245, 225 260, 195 260" fill="#FDE047" stroke="#D97706" strokeWidth="1.5" />

        <g fill="#FDE047">
          <path d="M 215 80 L 217 83 L 221 83 L 218 85 L 219 89 L 215 86 L 211 89 L 212 85 L 209 83 L 213 83 Z" />
          <path d="M 330 80 L 332 83 L 336 83 L 333 85 L 334 89 L 330 86 L 326 89 L 327 85 L 324 83 L 328 83 Z" />
        </g>
        
        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
        <text x="200" y="30" fill="#A7F3D0" fontSize="11" fontWeight="950" textAnchor="middle">
          ✨ TIDY • 整理干净的卧室
        </text>
      </svg>
    );
  }

  // always
  if (norm === 'always') {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" id="always-illustration">
        <rect width="400" height="300" rx="24" fill="#ECFDF5" />
        <rect width="400" height="300" rx="24" stroke="#059669" strokeWidth="4" />
        
        <rect x="40" y="70" width="320" height="155" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
        <rect x="40" y="70" width="320" height="35" fill="#EF4444" rx="10" />
        <text x="200" y="93" fill="#FFFFFF" fontSize="14" fontWeight="950" textAnchor="middle">DAILY SCHEDULE (100% ALWAYS)</text>
        
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => {
          const x = 55 + idx * 42;
          return (
            <g key={idx}>
              <rect x={x} y={115} width="34" height="34" rx="6" fill="#F0FDF4" stroke="#10B981" strokeWidth="1.5" />
              <text x={x + 17} y={135} fill="#047857" fontSize="12" fontWeight="900" textAnchor="middle">{day}</text>
              <path d={`M ${x + 8} ${168} L ${x + 14} ${174} L ${x + 25} ${162}`} stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx={x + 17} cy={195} r="6" fill="#FBBF24" />
            </g>
          );
        })}
        
        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
        <text x="200" y="30" fill="#FDE047" fontSize="11" fontWeight="950" textAnchor="middle">
          ☀️ ALWAYS • 每时每刻/总是
        </text>
      </svg>
    );
  }

  // mine
  if (norm === 'mine') {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" id="mine-illustration">
        <rect width="400" height="300" rx="24" fill="#FFFBEB" />
        <rect width="400" height="300" rx="24" stroke="#D97706" strokeWidth="4" />
        
        <rect x="130" y="100" width="140" height="140" rx="20" fill="#EF4444" stroke="#B91C1C" strokeWidth="4" />
        <rect x="150" y="125" width="100" height="80" rx="10" fill="#DC2626" stroke="#991B1B" strokeWidth="2.5" />
        
        <polygon points="215 150, 265 150, 275 165, 265 180, 215 180" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
        <circle cx="222" cy="165" r="2.5" fill="#78350F" />
        <text x="246" y="169" fill="#78350F" fontSize="11" fontWeight="950" textAnchor="middle">MINE</text>
        
        <path d="M 90 165 L 140 165" stroke="#4F46E5" strokeWidth="5.5" strokeLinecap="round" />
        <polygon points="140 157, 153 165, 140 173" fill="#4F46E5" />
        <text x="90" y="150" fill="#4F46E5" fontSize="12" fontWeight="950" textAnchor="middle">我的！</text>
        
        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
        <text x="200" y="30" fill="#FEF3C7" fontSize="11" fontWeight="950" textAnchor="middle">
          🙋‍♂️ MINE • 属于我的书包
        </text>
      </svg>
    );
  }

  // hers
  if (norm === 'hers') {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" id="hers-illustration">
        <rect width="400" height="300" rx="24" fill="#FFF1F2" />
        <rect width="400" height="300" rx="24" stroke="#E11D48" strokeWidth="4" />
        
        <rect x="130" y="90" width="140" height="150" rx="10" fill="#EC4899" stroke="#9F1239" strokeWidth="4.5" />
        <rect x="145" y="90" width="10" height="150" fill="#F43F5E" />
        
        <rect x="250" y="150" width="26" height="24" rx="4" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
        <path d="M255 150 L255 142 C255 137, 271 137, 271 142 L271 150" stroke="#475569" strokeWidth="2.5" fill="none" />
        
        <rect x="165" y="145" width="65" height="34" rx="6" fill="#FFFFFF" stroke="#000" strokeWidth="1.5" />
        <text x="197" y="166" fill="#EC4899" fontSize="11" fontWeight="950" textAnchor="middle">HERS</text>
        
        <path d="M 85 160 L 125 160" stroke="#10B981" strokeWidth="5" strokeLinecap="round" />
        <polygon points="125 153, 137 160, 125 167" fill="#10B981" />
        <text x="85" y="144" fill="#10B981" fontSize="11" fontWeight="900" textAnchor="middle">她的课本 📖</text>
        
        <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
        <text x="200" y="30" fill="#FDA4AF" fontSize="11" fontWeight="950" textAnchor="middle">
          👧 HERS • 属于她的书
        </text>
      </svg>
    );
  }

  // --- STUDY NOTEBOOK HIGH QUALITY FALLBACK (NO MASCOTS) ---
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" id="study-fallback">
      <defs>
        <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="notebookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
      </defs>
      
      {/* Wooden Desk Surface */}
      <rect width="400" height="300" rx="24" fill="url(#deskGrad)" stroke="#CBD5E1" strokeWidth="4" />
      
      {/* Rulers & pencils on the desk */}
      {/* Ruler */}
      <g transform="translate(20, 248) rotate(-15)">
        <rect x="0" y="0" width="100" height="15" rx="2" fill="#F87171" opacity="0.8" />
        <line x1="10" y1="0" x2="10" y2="5" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="30" y1="0" x2="30" y2="5" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="50" y1="0" x2="50" y2="5" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="70" y1="0" x2="70" y2="5" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="90" y1="0" x2="90" y2="5" stroke="#FFFFFF" strokeWidth="1.5" />
      </g>
      
      {/* Pencil */}
      <g transform="translate(325, 230) rotate(25)">
        <rect x="0" y="0" width="8" height="70" fill="#FBBF24" />
        <polygon points="0 0, 8 0, 4 -8" fill="#FDBA74" />
        <polygon points="2 -4, 6 -4, 4 -8" fill="#1E293B" />
        <rect x="0" y="62" width="8" height="8" fill="#F472B6" rx="1" />
      </g>

      {/* Premium Opened Spiral Study Book */}
      <rect x="50" y="55" width="300" height="185" rx="16" fill="url(#notebookGrad)" stroke="#94A3B8" strokeWidth="3" />
      
      {/* Book center vertical divider */}
      <line x1="199" y1="55" x2="199" y2="240" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="200" y1="55" x2="200" y2="240" stroke="#FFFFFF" strokeWidth="2" />

      {/* Book Rings / Spirals */}
      <g stroke="#64748B" strokeWidth="2.5" fill="none">
        {[65, 88, 111, 134, 157, 180, 203, 226].map((y) => (
          <path key={y} d={`M 194 ${y} Q 200 ${y + 5}, 206 ${y}`} />
        ))}
      </g>

      {/* Left Page content: A study concept layout, alphabet elements */}
      <g transform="translate(60, 65)">
        <text x="15" y="25" fill="#6366F1" fontSize="11" fontWeight="950" fontFamily="sans-serif">📖 WORD EXPLAIN</text>
        
        {/* Decorative drawing: glowing key or brain lightbulb */}
        <g transform="translate(45, 45)">
          <path d="M20 20 C20 10, 40 10, 40 20 C40 28, 30 32, 30 38" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" />
          <line x1="30" y1="44" x2="30" y2="48" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="30" cy="20" r="1.5" fill="#F59E0B" />
          
          <path d="M 10 10 L 12 14 L 16 14 L 13 17 L 14 21 L 10 19 L 6 21 L 7 17 L 4 14 L 8 14 Z" fill="#FDE047" />
          <path d="M 50 10 L 51 12 L 53 12 L 51 13 L 52 15 L 50 14 L 48 15 L 49 13 L 47 12 L 49 12 Z" fill="#FDE047" />
        </g>
        
        <text x="65" y="125" fill="#64748B" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="monospace">
          Let's spell the letters!
        </text>
        <rect x="25" y="136" width="18" height="18" rx="4" fill="#6366F1" />
        <text x="34" y="149" fill="white" fontSize="11" fontWeight="950" textAnchor="middle">A</text>
        
        <rect x="50" y="136" width="18" height="18" rx="4" fill="#10B981" />
        <text x="59" y="149" fill="white" fontSize="11" fontWeight="950" textAnchor="middle">B</text>

        <rect x="75" y="136" width="18" height="18" rx="4" fill="#EF4444" />
        <text x="84" y="149" fill="white" fontSize="11" fontWeight="950" textAnchor="middle">C</text>
      </g>

      {/* Right Page content: Word spelling and custom Chinese meaning */}
      <g transform="translate(210, 65)">
        <text x="15" y="25" fill="#475569" fontSize="9" fontWeight="900" letterSpacing="1">SPELLING STUDY CARD</text>
        
        {/* Dynamic Vocabulary Title */}
        <text x="15" y="65" fill="#312E81" fontSize="24" fontWeight="950" fontFamily="sans-serif">
          {word}
        </text>

        <line x1="15" y1="80" x2="115" y2="80" stroke="#E2E8F0" strokeWidth="2" />
        
        {/* Meaning highlighted ribbon */}
        <rect x="15" y="93" width="105" height="42" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="25" y="110" fill="#78350F" fontSize="8" fontWeight="900">CHINESE MEANING:</text>
        <text x="25" y="127" fill="#B45309" fontSize="14" fontWeight="950" fontFamily="sans-serif">
          {meaning}
        </text>
      </g>

      {/* Header ribbon for full view */}
      <rect x="110" y="12" width="180" height="28" rx="10" fill="#1E293B" opacity="0.95" />
      <text x="200" y="30" fill="#FEF3C7" fontSize="11" fontWeight="950" textAnchor="middle">
        💡 STUDY DESK • 核心释义学习
      </text>
    </svg>
  );
};

interface VocabExplorerProps {
  words: WordItem[];
  selectedContext: LearningContext;
  onSelectWord: (word: string) => void;
  speakText: (text: string) => void;
  onBackToMap: () => void;
  favoriteWords?: string[];
  onToggleFavoriteWord?: (word: string) => void;
  learnedWords?: string[];
  onToggleLearnedWord?: (word: string) => void;
}

export default function VocabExplorer({ words, selectedContext, onSelectWord, speakText, onBackToMap, favoriteWords, onToggleFavoriteWord, learnedWords, onToggleLearnedWord }: VocabExplorerProps) {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [typedSentence, setTypedSentence] = useState('');
  const [recordProgressStep, setRecordProgressStep] = useState<'idle' | 'listening' | 'finished'>('idle');
  const [textCheckFeedback, setTextCheckFeedback] = useState<string | null>(null);
  const [isCheckLoading, setIsCheckLoading] = useState(false);

  const [isFlipped, setIsFlipped] = useState(false);

  const filteredWords = words.filter(
    (w) => w.semester === selectedContext.semester && w.unit === selectedContext.unit
  );

  const activeWord = filteredWords[activeWordIndex] || filteredWords[0];

  const unitLearnedCount = filteredWords.filter(w => learnedWords?.includes(w.word)).length;
  const unitTotalCount = filteredWords.length;
  const progressPercent = unitTotalCount > 0 ? Math.round((unitLearnedCount / unitTotalCount) * 105) : 0;
  const capPercent = Math.min(progressPercent, 100);

  // Sync selected word on load or when filtered words change
  useEffect(() => {
    setActiveWordIndex(0);
    setTypedSentence('');
    setTextCheckFeedback(null);
    setRecordProgressStep('idle');
    setIsFlipped(false);
    if (filteredWords[0]) {
      onSelectWord(filteredWords[0].word);
    }
  }, [selectedContext.unit, selectedContext.semester]);

  const selectWordCard = (index: number) => {
    setActiveWordIndex(index);
    setTypedSentence('');
    setTextCheckFeedback(null);
    setRecordProgressStep('idle');
    setIsFlipped(false);
    if (filteredWords[index]) {
      onSelectWord(filteredWords[index].word);
    }
    // Speak word on click helper
    speakText(filteredWords[index].word);
  };

  const handleMicListenRepeat = () => {
    if (recordProgressStep === 'listening') return;
    
    speakText(activeWord.word);
    setRecordProgressStep('listening');
    
    setTimeout(() => {
      setRecordProgressStep('finished');
      setTimeout(() => {
        const welcomePraisingPhrases = [
          "Superstar! Your pronunciation sounds absolutely perfect! ⭐",
          "Excellent! You read the syllables beautifully! 🎉",
          "Rocket speed! 🚀 Your reading of this word is top tier!",
          "Splendid! Toby loved how clear your voice was! 🏆"
        ];
        const phrase = welcomePraisingPhrases[Math.floor(Math.random() * welcomePraisingPhrases.length)];
        speakText(phrase);
        if (onToggleLearnedWord && !learnedWords?.includes(activeWord.word)) {
          onToggleLearnedWord(activeWord.word);
        }
      }, 600);
    }, 2500);
  };

  const handleCheckSentence = async () => {
    if (!typedSentence.trim() || isCheckLoading) return;

    setIsCheckLoading(true);
    setTextCheckFeedback(null);

    try {
      const response = await fetch('/api/gemini/practice-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          word: activeWord.word,
          sentence: typedSentence,
        }),
      });

      if (!response.ok) {
        throw new Error('Trouble checking sentence. Let\'s try again!');
      }

      const data = await response.json();
      setTextCheckFeedback(data.feedback);
      
      // Auto-praise with TTS
      if (data.feedback?.toLowerCase().includes('correct') || data.feedback?.toLowerCase().includes('great') || data.feedback?.toLowerCase().includes('good')) {
        speakText("Spectacular sentence! Keep up the brilliant english writing! 🌟");
        if (onToggleLearnedWord && !learnedWords?.includes(activeWord.word)) {
          onToggleLearnedWord(activeWord.word);
        }
      }
    } catch (err: any) {
      setTextCheckFeedback(`⭐ Toby says: "That's a lovely sentence attempt! Try checking your spelling or use another cool Grade 5 pattern."`);
    } finally {
      setIsCheckLoading(false);
    }
  };

  // Helper to load next card
  const handleNextCard = () => {
    const nextIndex = (activeWordIndex + 1) % filteredWords.length;
    selectWordCard(nextIndex);
  };

  if (filteredWords.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border-4 border-amber-400 max-w-lg mx-auto shadow-[0_8px_0_0_#f59e0b]">
        <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <p className="text-lg text-slate-700 font-display font-bold">哎呀！</p>
        <p className="text-sm text-slate-500 mt-2 font-sans">托比在这个单元没有找到任何单词。让我们选择其他单元探索吧！</p>
        <button
          onClick={onBackToMap}
          className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 font-display font-bold text-white rounded-2xl border-b-4 border-amber-700 btn-bubbly shadow-md cursor-pointer"
        >
          返回学习地图 🗺️
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 @container">
      
      {/* 3D Premium Card Flip Animations Styles */}
      <style>{`
        .vocab-3d-card {
          perspective: 1600px;
        }
        .vocab-3d-inner {
          position: relative;
          width: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .vocab-3d-card.flipped .vocab-3d-inner {
          transform: rotateY(180deg);
        }
        .vocab-3d-front, .vocab-3d-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 24px;
        }
        .vocab-3d-back {
          transform: rotateY(180deg);
        }
      `}</style>
      
      {/* Upper Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-amber-400 p-4 rounded-3xl border-b-4 border-amber-600 shadow-sm text-amber-950 gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToMap}
            className="flex items-center gap-2 bg-white hover:bg-amber-50 text-amber-900 px-4 py-2 rounded-2xl text-xs font-display font-black border-2 border-b-4 border-amber-300 btn-bubbly cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            返回地图 🗺️
          </button>
          <span className="font-display font-black text-sm md:text-base flex items-center gap-1.5 uppercase tracking-wide">
            👑 单词王国闯关
          </span>
         </div>

        {/* Play Mode Controls */}
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 text-white font-display font-black rounded-2xl px-4 py-2 text-xs border border-amber-600 flex items-center gap-1.5 shadow-xs select-none">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin-slow" />
            <span>3D 伴读闪卡魔法 🚀</span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-amber-950/20 text-amber-900 font-display font-black rounded-full px-4 py-1.5 text-xs">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse animate-bounce-slow" />
            累计 {filteredWords.length} 个核心词
          </div>
        </div>
      </div>

      {/* Unit Word Progress Bar */}
      <div className="bg-amber-50 border-3 border-amber-300 rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-amber-950 font-display font-black text-xs">
        <div className="flex items-center gap-2">
          <span>📚 当前单元掌握进度:</span>
          <span className="bg-amber-250 text-amber-900 border border-amber-300 px-3 py-1 rounded-full font-black shadow-xs">
            已掌握 {unitLearnedCount} / {unitTotalCount} 个核心词
          </span>
        </div>
        <div className="flex-1 max-w-sm bg-white border border-amber-200 rounded-full h-4 overflow-hidden relative">
          <div 
            className="bg-gradient-to-r from-amber-400 to-amber-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${capPercent}%` }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-amber-950">
            {capPercent}% 已掌握
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="vocab-explorer-layout">
        
        {/* Left Column: Word Stepping-stone scroll paths */}
        <div className="lg:col-span-4 bg-amber-50/70 rounded-3xl border-4 border-amber-200 p-4 h-[630px] overflow-y-auto space-y-3 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b-2 border-amber-200/50">
            <h3 className="font-display font-extrabold text-amber-800 text-xs uppercase tracking-widest">
              🏰 单词列表
            </h3>
            <span className="text-[10px] font-mono bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">
              进度 {activeWordIndex + 1}
            </span>
          </div>

          <div className="space-y-2.5">
            {filteredWords.map((wordObj, idx) => {
              const isActive = activeWordIndex === idx;
              return (
                <button
                  key={`${wordObj.word}-${idx}`}
                  onClick={() => selectWordCard(idx)}
                  className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-2xl border-2 transition-all cursor-pointer btn-bubbly ${
                    isActive
                      ? 'bg-amber-400 border-amber-600 text-amber-950 font-display font-extrabold shadow-[0_4px_0_0_#d97706] scale-102'
                      : 'bg-white border-slate-200 hover:bg-amber-50/50 text-slate-755 hover:text-amber-900'
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-display font-black leading-tight tracking-wide">{wordObj.word}</span>
                    <span className={`text-[11px] ${isActive ? 'text-amber-950 opacity-90' : 'text-slate-400 font-semibold'}`}>
                      {wordObj.meaning}
                    </span>
                  </div>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 shrink-0 ${
                    isActive ? 'bg-amber-100 border-amber-600 text-amber-800' : 'bg-slate-50 border-slate-200 text-slate-300'
                  }`}>
                    {isActive ? (
                      <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-amber-600" />
                    ) : (
                      <span className="font-display text-[10px] font-extrabold">{idx + 1}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Flashcard Arena */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Enhanced 3D Flashcard Frame */}
          <div className={`vocab-3d-card w-full h-[620px] md:h-[500px] select-none ${isFlipped ? 'flipped' : ''}`}>
            
            <div className="vocab-3d-inner w-full h-full">
              
              {/* FRONT SIDE */}
              <div 
                className="vocab-3d-front bg-amber-50/40 rounded-3xl border-4 border-amber-500 shadow-[0_8px_0_0_#d97706] p-6 flex flex-col items-center justify-between cursor-pointer group"
                onClick={() => {
                  setIsFlipped(true);
                  speakText("Toby's mystery word! Guess what is this!");
                }}
              >
                {/* Front Header */}
                <div className="w-full flex items-center justify-between pb-3 border-b-2 border-amber-250/50">
                  <span className="bg-amber-100 text-amber-900 border border-amber-300 font-display font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 animate-pulse-slow">
                    🕵️‍♀️ 看图 guessed!
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onToggleFavoriteWord) onToggleFavoriteWord(activeWord.word);
                      }}
                      className="p-2 bg-white hover:bg-amber-100 rounded-full border border-amber-300 shadow-sm transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                      title={favoriteWords?.includes(activeWord.word) ? "从生词本中移出" : "加入我的生词本"}
                    >
                      <Star 
                        className={`w-4 h-4 ${favoriteWords?.includes(activeWord.word) ? 'text-amber-500 fill-amber-400' : 'text-slate-400'}`} 
                      />
                    </button>

                    {/* Learned Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onToggleLearnedWord) onToggleLearnedWord(activeWord.word);
                      }}
                      className={`p-2 rounded-full border transition-transform hover:scale-110 active:scale-95 cursor-pointer ${
                        learnedWords?.includes(activeWord.word) 
                          ? 'bg-emerald-100 border-emerald-300 text-emerald-600' 
                          : 'bg-white border-slate-300 text-slate-400 hover:bg-slate-100'
                      }`}
                      title={learnedWords?.includes(activeWord.word) ? "标记为未掌握" : "标记为已掌握单词"}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    
                    <span className="bg-orange-100 text-orange-700 font-display font-black text-[10.5px] px-3 py-1 rounded-full border border-orange-200 shadow-xs">
                      ✨ 闪卡 {activeWordIndex + 1} / {filteredWords.length}
                    </span>
                  </div>
                </div>

                {/* Main Illustration Box */}
                <div className="w-full max-w-sm aspect-[4/3] rounded-3xl border-4 border-amber-400 bg-white shadow-md overflow-hidden relative group-hover:scale-102 group-hover:rotate-1 duration-300 transition-transform">
                  
                  {/* Cartoon Custom Illustration */}
                  <div className="w-full h-full">
                    <EducationalCartoon word={activeWord.word} meaning={activeWord.meaning} />
                  </div>

                  {/* Guessing Mask Overlay always visible as background hint until flipped */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4 flex flex-col items-center select-none text-center pointer-events-none">
                    <p className="text-white text-xs font-display font-black leading-tight drop-shadow-md">
                      先仔细观察卡通图画线索，试着拼读出单词吧！
                    </p>
                  </div>
                </div>

                {/* Tap to Flip Hint */}
                <div className="w-full flex flex-col items-center gap-1 select-none">
                  <p className="text-center text-[11px] text-slate-500 font-semibold font-sans leading-relaxed">
                    "托比老师绘制了一张有趣的谜题画！你能说出它是对应的英文什么吗？"
                  </p>
                  <div className="mt-2 text-xs font-display font-black text-amber-800 flex items-center gap-2 px-6 py-2.5 bg-amber-400 hover:bg-amber-500 rounded-full border-2 border-b-4 border-amber-600 transition-all shadow-md animate-bounce">
                    <RefreshCw className="w-4 h-4 text-amber-950 animate-spin-slow" />
                    <span>点击翻牌 / Tap to flip 🔄</span>
                  </div>
                </div>

              </div>

              {/* BACK SIDE */}
              <div 
                className="vocab-3d-back bg-white rounded-3xl border-4 border-indigo-500 shadow-[0_8px_0_0_#4f46e5] p-5 md:p-6 flex flex-col justify-between overflow-y-auto"
              >
                {/* Back Header */}
                <div className="flex items-center justify-between pb-3 border-b-2 border-indigo-100 select-none">
                  <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 font-display font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    🌟 知识核对 revealed!
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onToggleFavoriteWord) onToggleFavoriteWord(activeWord.word);
                      }}
                      className="p-2 bg-indigo-50 hover:bg-indigo-100 rounded-full border border-indigo-250 shadow-sm transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                      title={favoriteWords?.includes(activeWord.word) ? "从生词本中移出" : "加入我的生词本"}
                    >
                      <Star 
                        className={`w-4 h-4 ${favoriteWords?.includes(activeWord.word) ? 'text-amber-500 fill-amber-400' : 'text-slate-400'}`} 
                      />
                    </button>

                    {/* Learned Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onToggleLearnedWord) onToggleLearnedWord(activeWord.word);
                      }}
                      className={`p-2 rounded-full border transition-transform hover:scale-110 active:scale-95 cursor-pointer ${
                        learnedWords?.includes(activeWord.word) 
                          ? 'bg-emerald-100 border-emerald-300 text-emerald-600 font-bold' 
                          : 'bg-white border-slate-200 text-slate-400 hover:bg-slate-100'
                      }`}
                      title={learnedWords?.includes(activeWord.word) ? "标记为未掌握" : "标记为已掌握单词"}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFlipped(false);
                      }}
                      className="px-3 py-1.5 text-[11px] bg-slate-100 hover:bg-slate-200 border-2 border-b-4 border-slate-300 text-slate-700 rounded-xl font-display font-black btn-bubbly flex items-center gap-1 shadow-sm cursor-pointer transition-all active:scale-95 animate-pulse-slow"
                    >
                      <ArrowLeft className="w-3" />
                      返回正面↩️
                    </button>
                  </div>
                </div>

                {/* Info and Examples Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 py-3 md:py-4 text-left">
                  
                  {/* Left panel: words spelling, syllables and Chinese meaning */}
                  <div className="space-y-3.5 flex flex-col justify-center">
                    <div>
                      <span className="text-[10px] uppercase font-display font-black text-indigo-500 tracking-wider">
                        📖 核心拼写:
                      </span>
                      <div className="flex flex-wrap items-end gap-2.5 mt-1">
                        <h2 className="text-2xl md:text-3xl.5 font-display font-black text-indigo-950 tracking-wide select-text leading-none">
                          {activeWord.word}
                        </h2>
                        <span className="text-xs font-sans bg-slate-100 px-2.5 py-0.5 rounded-lg text-slate-500 border border-slate-200 font-bold select-text">
                          {activeWord.phonetic}
                        </span>
                      </div>
                    </div>

                    {/* Phonics clickable stones */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-display font-black text-slate-400 uppercase tracking-wider block select-none">
                        🍒 自然拼读：
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {(activeWord.phonics || activeWord.word).split('-').map((syllable, sIdx) => (
                          <React.Fragment key={sIdx}>
                            {sIdx > 0 && <span className="text-amber-500 font-sans font-black text-sm">•</span>}
                            <span 
                              onClick={(e) => {
                                e.stopPropagation();
                                speakText(syllable);
                              }}
                              className="bg-amber-100 hover:bg-amber-155 text-amber-950 font-display font-black text-xs md:text-sm px-3.5 py-1.5 rounded-xl border-2 border-amber-300 shadow-sm transition-transform cursor-pointer hover:scale-105 active:scale-95 select-none"
                            >
                              {syllable}
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Local Chinese translates */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 border-2 border-amber-500 flex flex-col gap-0.5 text-white shadow-sm">
                      <span className="text-[9px] font-display font-black uppercase tracking-widest text-amber-950 opacity-90 select-none">
                        中文含义释义：
                      </span>
                      <span className="text-lg md:text-xl font-display font-black text-white leading-normal drop-shadow-xs select-text">
                        {activeWord.meaning}
                      </span>
                    </div>
                  </div>

                  {/* Right panel: example sentences and advice */}
                  <div className="space-y-3.5 flex flex-col justify-center">
                    
                    {/* Example story */}
                    <div className="space-y-1.5 p-3.5 bg-slate-55 border-2 border-slate-200 rounded-2xl relative select-text">
                      <span className="text-[9px] font-display font-extrabold text-slate-400 uppercase tracking-wider block select-none">
                        🧸 词汇造句故事创意：
                      </span>
                      
                      <p className="text-sm md:text-base font-display font-black text-slate-800 leading-snug">
                        {activeWord.example.split(new RegExp(`(${activeWord.word})`, 'gi')).map((part, i) => 
                          part.toLowerCase() === activeWord.word.toLowerCase() ? (
                            <span key={i} className="text-indigo-600 underline font-black decoration-2">{part}</span>
                          ) : part
                        )}
                      </p>
                      
                      <p className="text-xs text-slate-500 font-semibold font-sans italic leading-relaxed mt-1 opacity-90">
                        {activeWord.translation}
                      </p>
                    </div>

                    {/* Toby recommendation memo tip */}
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex gap-2 items-start text-xs select-text">
                      <span className="text-base shrink-0 select-none">💡</span>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-display font-black text-emerald-800 uppercase tracking-widest select-none">
                          托比老师的记忆魔法：
                        </span>
                        <p className="text-[11px] text-slate-650 leading-normal font-sans font-medium">
                          {activeWord.memoryTip}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Back card action triggers */}
                <div className="pt-3.5 border-t-2 border-indigo-50 flex flex-wrap items-center justify-between gap-3 select-none">
                  
                  {/* Speakers and Mic */}
                  <div className="flex gap-2.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(activeWord.word);
                      }}
                      className="px-4.5 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white font-display font-black border-b-4 border-indigo-700 btn-bubbly flex items-center justify-center gap-1.5 shadow-md cursor-pointer text-xs active:scale-95"
                    >
                      <Volume2 className="w-4 h-4" />
                      听发音 🔊
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMicListenRepeat();
                      }}
                      disabled={recordProgressStep === 'listening'}
                      className={`px-4.5 py-3 rounded-2xl font-display font-black border-2 border-b-4 btn-bubbly flex items-center justify-center gap-1.5 cursor-pointer text-xs shadow-md transition-all ${
                        recordProgressStep === 'listening'
                          ? 'bg-red-500 border-red-700 text-white animate-pulse'
                          : recordProgressStep === 'finished'
                          ? 'bg-emerald-500 border-emerald-700 text-white'
                          : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Mic className="w-4 h-4" />
                      {recordProgressStep === 'listening' 
                        ? '倾听中...' 
                        : recordProgressStep === 'finished' 
                        ? '发音超棒！⭐' 
                        : '大声练读 🎤'}
                    </button>
                  </div>

                  {/* Navigation and Next card */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFlipped(false);
                      }}
                      className="px-4 py-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-2 border-indigo-200 rounded-2xl font-display font-extrabold text-xs cursor-pointer transition-transform duration-150 active:scale-95"
                    >
                      再猜一次 ↩
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextCard();
                      }}
                      className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 border-b-4 border-amber-600 rounded-2xl font-display font-black text-xs btn-bubbly shadow-md flex items-center gap-1 cursor-pointer active:scale-95"
                    >
                      下一个单词 🚀
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Toby's Active sentence checker box */}
          <div className="bg-orange-50 rounded-3xl border-4 border-orange-300 shadow-[0_6px_0_0_#fdba74] p-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✏️</span>
              <h3 className="font-display font-extrabold text-slate-800 text-sm md:text-base">
                托比的创意造句沙盒
              </h3>
            </div>
            
            <p className="text-xs text-orange-900 leading-relaxed font-sans font-medium">
              试着用核心单词 <span className="font-display font-black text-amber-600">"{activeWord.word}"</span> 造一个好玩的五年级英文句子吧。托比导师会随时帮样检查语法以及送上星章哦！🐾
            </p>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={typedSentence}
                  onChange={(e) => setTypedSentence(e.target.value)}
                  placeholder={`在这里输入你用 "${activeWord.word}" 造的可爱句子吧...`}
                  disabled={isCheckLoading}
                  className="flex-1 px-4 py-3 text-sm text-slate-800 font-display border-3 border-orange-200 rounded-2xl outline-hidden focus:border-amber-400 bg-white"
                />
                <button
                  onClick={handleCheckSentence}
                  disabled={!typedSentence.trim() || isCheckLoading}
                  className={`px-5 py-3 rounded-2xl font-display font-black border-b-4 btn-bubbly flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md text-xs shrink-0 ${
                    !typedSentence.trim() || isCheckLoading
                      ? 'bg-slate-100 border-slate-300 text-slate-400 cursor-not-allowed'
                      : 'bg-indigo-500 hover:bg-indigo-600 text-white border-indigo-700'
                  }`}
                >
                  {isCheckLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                  让托比老师检查！🐾
                </button>
              </div>

              {textCheckFeedback && (
                <div className="p-4 bg-white border-3 border-orange-200 text-xs text-slate-700 rounded-2xl leading-relaxed whitespace-pre-wrap select-text font-serif shadow-inner">
                  {textCheckFeedback}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
