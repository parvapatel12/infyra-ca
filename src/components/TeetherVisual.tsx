import React from 'react';

interface TeetherVisualProps {
  type: 'rattle-green' | 'rattle-blue' | 'crocodile-grey' | 'crab-yellow';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TeetherVisual: React.FC<TeetherVisualProps> = ({ type, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48 sm:w-56 sm:h-56',
    lg: 'w-64 h-64 sm:w-80 sm:h-80',
  }[size];

  if (type === 'rattle-green' || type === 'rattle-blue') {
    const isGreen = type === 'rattle-green';
    const mainColor = isGreen ? '#4A7C59' : '#5B7C99';
    const lightColor = isGreen ? '#68A07A' : '#7D9EBC';
    const accentColor = isGreen ? '#89C199' : '#9EBBD6';
    const centerColor = isGreen ? '#3A6346' : '#45617D';

    return (
      <div className={`relative flex items-center justify-center p-2 rounded-2xl ${sizeClasses} ${className}`}>
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-md">
          {/* Top-Left Ray - Rabbit Face Nub */}
          <g className="transition-transform duration-300 hover:scale-105 cursor-pointer">
            <path d="M 60 70 C 45 40 30 50 40 25 C 48 10 65 30 70 50 Z" fill={lightColor} stroke={mainColor} strokeWidth="2.5" />
            {/* Rabbit ears detail */}
            <path d="M 45 35 Q 40 20 48 20 Q 52 28 50 40" fill="#E2A9B7" opacity="0.8" />
            <path d="M 55 38 Q 55 22 62 22 Q 65 30 60 42" fill="#E2A9B7" opacity="0.8" />
            <ellipse cx="50" cy="48" rx="1.5" ry="1.5" fill="#222" />
            <ellipse cx="58" cy="48" rx="1.5" ry="1.5" fill="#222" />
            <polygon points="54,52 52,50 56,50" fill="#222" />
          </g>

          {/* Top-Center Ray - 3D Dots Nub */}
          <g className="transition-transform duration-300 hover:scale-105 cursor-pointer">
            <path d="M 85 50 Q 100 15 115 50 Z" fill={mainColor} stroke={lightColor} strokeWidth="2" />
            <circle cx="95" cy="30" r="2.5" fill="#FFF" opacity="0.9" />
            <circle cx="105" cy="30" r="2.5" fill="#FFF" opacity="0.9" />
            <circle cx="100" cy="40" r="2.5" fill="#FFF" opacity="0.9" />
            <circle cx="92" cy="42" r="2" fill="#FFF" opacity="0.9" />
            <circle cx="108" cy="42" r="2" fill="#FFF" opacity="0.9" />
          </g>

          {/* Top-Right Ray - Bear Face Nub */}
          <g className="transition-transform duration-300 hover:scale-105 cursor-pointer">
            <path d="M 130 50 C 135 30 152 10 160 25 C 170 50 155 40 140 70 Z" fill={lightColor} stroke={mainColor} strokeWidth="2.5" />
            {/* Bear ears detail */}
            <circle cx="145" cy="28" r="6" fill={mainColor} />
            <circle cx="145" cy="28" r="3" fill="#E2A9B7" opacity="0.8" />
            <circle cx="158" cy="35" r="5" fill={mainColor} />
            <circle cx="158" cy="35" r="2.5" fill="#E2A9B7" opacity="0.8" />
            <circle cx="150" cy="44" r="1.5" fill="#222" />
            <ellipse cx="150" cy="47" rx="3" ry="2" fill="#FFF" opacity="0.9" />
            <circle cx="150" cy="46" r="1" fill="#222" />
          </g>

          {/* Bottom-Right Ray - Spiral Swirl */}
          <g className="transition-transform duration-300 hover:scale-105 cursor-pointer">
            <path d="M 140 90 C 175 95 180 120 155 135 Z" fill={mainColor} />
            <path d="M 152 105 Q 165 110 158 122" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.8" strokeLinecap="round" />
          </g>

          {/* Bottom-Left Ray - Ribbed Ridges */}
          <g className="transition-transform duration-300 hover:scale-105 cursor-pointer">
            <path d="M 60 90 C 25 95 20 120 45 135 Z" fill={mainColor} />
            <line x1="38" y1="102" x2="52" y2="102" stroke="#FFF" strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />
            <line x1="35" y1="110" x2="50" y2="110" stroke="#FFF" strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />
            <line x1="38" y1="118" x2="48" y2="118" stroke="#FFF" strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />
          </g>

          {/* Outer Sun-Ray Ring Frame */}
          <circle cx="100" cy="100" r="48" fill={mainColor} stroke={accentColor} strokeWidth="3" />

          {/* Inner Central Pop-It Dome Bulb */}
          <circle cx="100" cy="100" r="32" fill={centerColor} />
          <circle cx="100" cy="100" r="28" fill={accentColor} opacity="0.9" />
          <ellipse cx="94" cy="92" rx="8" ry="4" fill="#FFF" opacity="0.4" />
          
          {/* Gentle Rattle Beads inside dome */}
          <circle cx="92" cy="104" r="3.5" fill="#FBBF24" />
          <circle cx="102" cy="108" r="3" fill="#F472B6" />
          <circle cx="108" cy="98" r="3" fill="#60A5FA" />

          {/* Lower Loop Handle Base */}
          <path d="M 75 140 Q 60 170 70 195 C 80 210 120 210 130 195 Q 140 170 125 140 Z" fill={mainColor} />
          <path d="M 85 152 Q 78 175 88 190 Q 100 198 112 190 Q 122 175 115 152 Z" fill="#FFF" opacity="0.95" />
          
          {/* Horizontal Grip Ridges on handle base */}
          <line x1="88" y1="198" x2="112" y2="198" stroke="#FFF" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
          <line x1="90" y1="203" x2="110" y2="203" stroke="#FFF" strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />

          {/* Brand Emblem Stamp */}
          <rect x="88" y="142" width="24" height="10" rx="3" fill="#FFF" opacity="0.85" />
          <text x="100" y="149" fontSize="6" fontWeight="bold" fill="#333" textAnchor="middle" fontFamily="sans-serif">infyra</text>
        </svg>
      </div>
    );
  }

  if (type === 'crocodile-grey') {
    return (
      <div className={`relative flex items-center justify-center p-2 rounded-2xl ${sizeClasses} ${className}`}>
        <svg viewBox="0 0 220 200" className="w-full h-full drop-shadow-md">
          {/* Crocodile Body Outline */}
          <path d="M 30 110 C 20 70 60 30 110 30 C 150 30 180 60 185 90 C 190 120 160 150 120 155 C 80 160 40 140 30 110 Z" fill="#64748B" />

          {/* Toothy Smile */}
          <path d="M 40 85 Q 70 95 95 85" stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="50,87 54,92 58,87" fill="#FFF" />
          <polygon points="62,88 66,93 70,88" fill="#FFF" />
          <polygon points="74,88 78,93 82,88" fill="#FFF" />

          {/* Snout nostrils & Eye Bump */}
          <circle cx="36" cy="72" r="2" fill="#334155" />
          <circle cx="42" cy="70" r="2" fill="#334155" />
          <circle cx="70" cy="48" r="8" fill="#475569" />
          <circle cx="70" cy="48" r="5" fill="#FFF" />
          <circle cx="70" cy="48" r="2.5" fill="#1E293B" />

          {/* Spine Scale Ridges Along Top */}
          <polygon points="90,32 98,20 106,32" fill="#475569" />
          <polygon points="112,32 120,20 128,32" fill="#475569" />
          <polygon points="134,35 142,23 150,37" fill="#475569" />
          <polygon points="156,45 164,33 172,49" fill="#475569" />

          {/* Integrated Tail Handle Loop */}
          <path d="M 175 80 C 210 90 215 140 170 150 C 150 155 140 145 150 130 C 175 125 180 100 165 92 Z" fill="#475569" />

          {/* 5 Pop-It Buttons */}
          {/* Button 1 (Top-Left): Starburst */}
          <circle cx="75" cy="72" r="14" fill="#94A3B8" />
          <path d="M 75 62 L 75 82 M 65 72 L 85 72 M 68 65 L 82 79 M 68 79 L 82 65" stroke="#FFF" strokeWidth="2" opacity="0.85" />

          {/* Button 2 (Top-Right): 3D Dots */}
          <circle cx="115" cy="65" r="14" fill="#94A3B8" />
          <circle cx="110" cy="60" r="2" fill="#FFF" />
          <circle cx="120" cy="60" r="2" fill="#FFF" />
          <circle cx="115" cy="65" r="2.5" fill="#FFF" />
          <circle cx="110" cy="70" r="2" fill="#FFF" />
          <circle cx="120" cy="70" r="2" fill="#FFF" />

          {/* Button 3 (Bottom-Left): Dense Massaging Dots */}
          <circle cx="65" cy="115" r="14" fill="#94A3B8" />
          <circle cx="60" cy="110" r="1.5" fill="#FFF" />
          <circle cx="66" cy="108" r="1.5" fill="#FFF" />
          <circle cx="71" cy="112" r="1.5" fill="#FFF" />
          <circle cx="59" cy="117" r="1.5" fill="#FFF" />
          <circle cx="65" cy="116" r="1.5" fill="#FFF" />
          <circle cx="70" cy="120" r="1.5" fill="#FFF" />

          {/* Button 4 (Bottom-Center): Wavy Ripple Lines */}
          <circle cx="105" cy="118" r="14" fill="#94A3B8" />
          <path d="M 96 112 Q 100 108 105 112 T 114 112" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.85" />
          <path d="M 96 118 Q 100 114 105 118 T 114 118" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.85" />
          <path d="M 96 124 Q 100 120 105 124 T 114 124" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.85" />

          {/* Button 5 (Bottom-Right): Concentric Spiral Swirl */}
          <circle cx="145" cy="102" r="14" fill="#94A3B8" />
          <path d="M 145 102 m -8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.85" />
          <circle cx="145" cy="102" r="3" fill="#FFF" opacity="0.85" />

          {/* Brand Emblem */}
          <rect x="100" y="148" width="28" height="10" rx="3" fill="#FFF" opacity="0.9" />
          <text x="114" y="155" fontSize="6.5" fontWeight="bold" fill="#334155" textAnchor="middle" fontFamily="sans-serif">infyra</text>
        </svg>
      </div>
    );
  }

  if (type === 'crab-yellow') {
    return (
      <div className={`relative flex items-center justify-center p-2 rounded-2xl ${sizeClasses} ${className}`}>
        <svg viewBox="0 0 220 200" className="w-full h-full drop-shadow-md">
          {/* Top Yellow Claws */}
          {/* Left Claw with Dots */}
          <g className="transition-transform duration-300 hover:scale-105 cursor-pointer">
            <path d="M 50 65 Q 25 35 45 15 C 65 20 60 45 65 65 Z" fill="#D97706" />
            <circle cx="38" cy="28" r="2.5" fill="#FEF3C7" />
            <circle cx="48" cy="25" r="2.5" fill="#FEF3C7" />
            <circle cx="42" cy="38" r="2.5" fill="#FEF3C7" />
            <circle cx="52" cy="35" r="2.5" fill="#FEF3C7" />
          </g>

          {/* Right Claw with Stars */}
          <g className="transition-transform duration-300 hover:scale-105 cursor-pointer">
            <path d="M 170 65 Q 195 35 175 15 C 155 20 160 45 155 65 Z" fill="#D97706" />
            <polygon points="175,25 177,29 181,29 178,32 179,36 175,33 171,36 172,32 169,29 173,29" fill="#FEF3C7" />
            <polygon points="163,38 165,42 169,42 166,45 167,49 163,46 159,49 160,45 157,42 161,42" fill="#FEF3C7" />
          </g>

          {/* Side Coral Legs with Spirals */}
          <path d="M 35 95 C 10 90 15 110 38 112 Z" fill="#EA580C" />
          <path d="M 185 95 C 210 90 205 110 182 112 Z" fill="#EA580C" />

          {/* Middle Tan Legs with Dots */}
          <path d="M 40 120 C 15 125 20 142 45 138 Z" fill="#B45309" />
          <path d="M 180 120 C 205 125 200 142 175 138 Z" fill="#B45309" />

          {/* Bottom Yellow Feet with Waves */}
          <path d="M 55 145 Q 40 170 65 170 Q 75 155 70 145 Z" fill="#D97706" />
          <path d="M 165 145 Q 180 170 155 170 Q 145 155 150 145 Z" fill="#D97706" />

          {/* Central Crab Body (Cream) */}
          <ellipse cx="110" cy="105" rx="55" ry="42" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3" />
          <ellipse cx="110" cy="105" rx="36" ry="24" fill="#FFF" />

          {/* Cute Eyes & Smiley Face */}
          <circle cx="95" cy="90" r="5" fill="#222" />
          <circle cx="97" cy="88" r="2" fill="#FFF" />
          <circle cx="125" cy="90" r="5" fill="#222" />
          <circle cx="127" cy="88" r="2" fill="#FFF" />

          <path d="M 100 102 Q 110 114 120 102" stroke="#222" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="92" cy="102" r="3" fill="#F472B6" opacity="0.6" />
          <circle cx="128" cy="102" r="3" fill="#F472B6" opacity="0.6" />

          {/* Brand Emblem */}
          <rect x="96" y="120" width="28" height="10" rx="3" fill="#F59E0B" opacity="0.9" />
          <text x="110" y="127" fontSize="6.5" fontWeight="bold" fill="#FFF" textAnchor="middle" fontFamily="sans-serif">infyra</text>
        </svg>
      </div>
    );
  }

  return null;
};
