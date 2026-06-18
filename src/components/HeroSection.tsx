import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowDown, Cpu, Shield, Layers } from 'lucide-react';
import { Language, translations } from '../types';

interface HeroSectionProps {
  lang: Language;
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export default function HeroSection({ lang, onExploreProducts, onContactUs }: HeroSectionProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = translations[lang];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffsetShape1 = scrollY * 0.4;
  const parallaxOffsetShape2 = -scrollY * 0.2;
  const parallaxOffsetText = scrollY * 0.15;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden bg-slate-50"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePos.x || 50}% ${
          mousePos.y || 40
        }%, rgba(239, 68, 68, 0.08) 0%, rgba(249, 115, 22, 0.03) 30%, transparent 60%)`,
      }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] opacity-70" />

      {/* Floating Parallax Shape 1 (Glow Circle Top Right) */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-red-400/5 blur-[120px] pointer-events-none transition-transform duration-75"
        style={{
          top: '15%',
          right: '5%',
          transform: `translateY(${parallaxOffsetShape1}px)`,
        }}
      />

      {/* Floating Parallax Shape 2 (Gradient Ring Bottom Left) */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full bg-orange-400/5 blur-[100px] pointer-events-none transition-transform duration-75"
        style={{
          bottom: '10%',
          left: '10%',
          transform: `translateY(${parallaxOffsetShape2}px)`,
        }}
      />

      {/* Interactive floating wireframe graphic */}
      <div 
        className="absolute hidden lg:block border border-slate-205 bg-white/75 shadow-lg shadow-slate-100 rounded-2xl p-6 backdrop-blur-[3px] transition-transform duration-100 ease-out pointer-events-none"
        style={{
          top: '28%',
          right: '8%',
          width: '280px',
          transform: `translateY(${scrollY * 0.22}px) rotate(8deg)`,
        }}
      >
        <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
          <div className="flex space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] font-mono text-slate-400">IC DEV CORE: STABLE</span>
        </div>
        <div className="space-y-3">
          <div className="h-2 w-1/3 bg-slate-200/80 rounded" />
          <div className="h-3 w-4/5 bg-red-50 rounded border border-red-100 text-red-600 flex items-center px-1.5 text-[9px] font-mono">SILICON: ENERGIZED</div>
          <div className="h-2 w-2/3 bg-slate-200/60 rounded" />
          <div className="h-2 w-3/4 bg-slate-200/60 rounded" />
          <div className="pt-2 flex justify-between text-[11px] font-mono text-red-655 font-bold">
            <span>VOLTAGE: 1.25V</span>
            <span>TEMP: 38.4°C</span>
          </div>
        </div>
      </div>

      <div 
        className="absolute hidden lg:block border border-slate-205 bg-white/75 shadow-lg shadow-slate-100 rounded-2xl p-6 backdrop-blur-[3px] transition-transform duration-100 ease-out pointer-events-none"
        style={{
          bottom: '20%',
          left: '6%',
          width: '240px',
          transform: `translateY(${-scrollY * 0.1}px) rotate(-12deg)`,
        }}
      >
        <div className="flex items-center space-x-2 text-orange-600 mb-2 font-bold">
          <Shield className="w-4 h-4 animate-pulse" />
          <span className="text-xs font-mono">RESEARCH REGISTERED</span>
        </div>
        <div className="space-y-2">
          <div className="h-1.5 w-full bg-slate-200 rounded overflow-hidden">
            <div className="h-full w-[100%] bg-red-600" />
          </div>
          <p className="text-[10px] font-mono text-slate-400">PATENTS SECURED 100%</p>
        </div>
      </div>

      {/* Main Content Layer */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center items-center"
        style={{
          transform: `translateY(${parallaxOffsetText}px)`,
          opacity: Math.max(1 - scrollY / 700, 0)
        }}
      >
        {/* Tech Badge */}
        <div className="inline-flex items-center space-x-2 bg-red-50 hover:bg-red-100 border border-red-200/50 px-4 py-1.5 rounded-full text-xs font-semibold text-red-600 mb-8 transition-all duration-300 select-none backdrop-blur-md cursor-pointer">
          <Sparkles className="w-3.5 h-3.5 animate-spin text-red-500" style={{ animationDuration: '4s' }} />
          <span>{t.hero.badge}</span>
        </div>

        {/* Big Displays */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight text-slate-900 max-w-5xl leading-tight">
          <span className="block text-slate-800">{t.hero.titleFirst}</span>
          <span className="block mt-2 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-sm font-black animate-gradient leading-none py-1">
            {t.hero.titleHighlight}
          </span>
          {t.hero.titleLast && (
            <span className="block text-slate-500 text-3xl sm:text-5xl lg:text-6xl mt-4 font-normal tracking-wide">
              {t.hero.titleLast}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        {t.hero.subtitle && (
          <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-light px-4">
            {t.hero.subtitle}
          </p>
        )}

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onExploreProducts}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/35 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {t.hero.ctaPrimary}
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={onContactUs}
            className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-sm shadow-slate-200/20"
          >
            <span>{t.hero.ctaSecondary}</span>
          </button>
        </div>
      </div>

      {/* Hero Stats */}
      {/* <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/85 border border-slate-200/60 p-8 rounded-3xl backdrop-blur-md shadow-xl shadow-slate-200/30">
          <div className="text-center md:text-left md:border-r border-slate-100 md:pr-8 last:border-0">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600">
                <Layers className="w-5 h-5" />
              </div>
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight animate-pulse">
                {t.hero.statsUsers}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-sans tracking-wide">
              {t.hero.statsUsersLabel}
            </p>
          </div>

          <div className="text-center md:text-left md:border-r border-slate-100 md:px-8 last:border-0">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-600">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t.hero.statsSpeed}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-sans tracking-wide">
              {t.hero.statsSpeedLabel}
            </p>
          </div>

          <div className="text-center md:text-left md:pl-8">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t.hero.statsSecurity}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-sans tracking-wide">
              {t.hero.statsSecurityLabel}
            </p>
          </div>
        </div>
      </div> */}

      {/* Scroll Down Anchor */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-80 animate-bounce cursor-pointer select-none" onClick={onExploreProducts}>
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1">SCROLL DOWN</span>
        <ArrowDown className="w-4 h-4 text-red-600" />
      </div>
    </section>
  );
}
