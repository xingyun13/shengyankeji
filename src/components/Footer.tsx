import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Language, translations } from '../types';

interface FooterProps {
  lang: Language;
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ lang, onNavClick }: FooterProps) {
  const t = translations[lang];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 pb-8 border-b border-slate-200/60">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-red-600 font-black text-xl leading-none">
                炎
              </span>
              <span className="font-sans font-black text-lg text-slate-900">
                圣焰<span className="text-red-600 font-light">科技</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs font-light max-w-sm text-center md:text-left leading-relaxed">
              {lang === 'zh'
                ? '精研核心半导体与先进工程技术研究，赋能安全可靠的下一代智联网核心硬件。'
                : 'Pioneering semiconductor silicon layout and high-end engineering physics to empower reliable intelligent system platforms.'}
            </p>
          </div>

          {/* Core Menu list */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => onNavClick('home')}
              className="text-xs font-mono font-medium text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => onNavClick('about')}
              className="text-xs font-mono font-medium text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => onNavClick('products')}
              className="text-xs font-mono font-medium text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
            >
              {t.nav.products}
            </button>
            <button
              onClick={() => onNavClick('contact')}
              className="text-xs font-mono font-medium text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>

        {/* Dynamic legal & scroll-back-to-top */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] text-slate-450 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-1.5 text-slate-400">
            <span>&copy; {new Date().getFullYear()} 圣焰科技(深圳)有限公司 &middot; Shengyan Tech Co., Ltd.</span>
            <span>&middot;</span>
            <span className="hover:text-red-600 cursor-pointer">{lang === 'zh' ? '隐私协议' : 'Privacy'}</span>
            <span>&middot;</span>
            <span className="hover:text-red-600 cursor-pointer">{lang === 'zh' ? '服务条款' : 'Terms of Service'}</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Status indicator */}
            <div className="flex items-center space-x-1.5 text-slate-400 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === 'zh' ? '自建封测流产线平稳运行' : 'CHIP FABRICATION UNIT STABLE'}</span>
            </div>

            {/* Back to top button */}
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-xl bg-white border border-slate-205 hover:border-red-300 hover:text-red-650 text-slate-500 transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
