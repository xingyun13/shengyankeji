import React, { useState } from 'react';
import { Compass, Cpu, Layers } from 'lucide-react';
import { Language, translations } from '../types';

interface AboutSectionProps {
  lang: Language;
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = translations[lang];
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      id: 1,
      icon: Cpu,
      title: t.about.card1Title,
      description: t.about.card1Desc,
      glowColor: 'from-red-500/5 to-transparent',
      hoverBorder: 'group-hover:border-red-500/20',
      badge: 'SEMICONDUCTOR & IC DESIGN',
    },
    {
      id: 2,
      icon: Compass,
      title: t.about.card2Title,
      description: t.about.card2Desc,
      glowColor: 'from-orange-500/5 to-transparent',
      hoverBorder: 'group-hover:border-orange-500/20',
      badge: 'ENGINEERING & PHYSICS RESEARCH',
    },
    {
      id: 3,
      icon: Layers,
      title: t.about.card3Title,
      description: t.about.card3Desc,
      glowColor: 'from-amber-500/5 to-transparent',
      hoverBorder: 'group-hover:border-amber-500/20',
      badge: 'TECHNICAL ELECTRONICS SALES',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorative Rings in Opposing Direction */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full border border-red-500/5 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full border border-orange-500/5 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200/50 px-3.5 py-1 rounded-full text-xs font-semibold text-red-600 mb-4 select-none">
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-6 font-sans">
            {t.about.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-4xl leading-relaxed font-light whitespace-pre-line text-left md:text-justify">
            {t.about.subtitle}
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => {
            const IconComponent = v.icon;
            return (
              <div
                key={v.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white/80 border border-slate-200/60 rounded-3xl p-8 hover:bg-white transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm shadow-slate-100"
              >
                {/* Accent Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${v.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Animated Inner Border Accent */}
                <div
                  className={`absolute inset-px rounded-[23px] border border-transparent ${v.hoverBorder} transition-colors duration-300 pointer-events-none`}
                />

                <div>
                  {/* Icon Area */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-red-650 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-orange-600 group-hover:border-red-500 transition-all duration-500 mb-6 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Badge */}
                  <span className="text-[10px] tracking-wider font-mono text-slate-400 block mb-2">
                    {v.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-650 transition-colors duration-300">
                    {v.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-slate-600 text-sm leading-relaxed font-light group-hover:text-slate-800 transition-colors duration-300 mb-6">
                    {v.description}
                  </p>
                </div>

                {/* Arrow Accent */}
                <div className="flex items-center space-x-1.5 text-xs font-mono text-red-600/70 group-hover:text-red-600 transition-colors duration-200 mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>PROCESS ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
