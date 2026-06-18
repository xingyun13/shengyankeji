import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { Language, translations } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ lang, setLang, activeSection, onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'products', label: t.nav.products },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4 shadow-sm shadow-slate-200/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => onNavClick('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-red-500/10 border border-red-500/30 overflow-hidden">
              <span className="font-mono text-red-600 font-black text-xl leading-none group-hover:scale-110 transition-transform duration-300">
                炎
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-sans font-black text-xl tracking-tight text-slate-900 group-hover:text-red-600 transition-colors duration-300">
              圣焰<span className="text-red-600 font-light">科技</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-full border border-slate-200/50">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavClick(item.id)}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-350 cursor-pointer ${
                      isActive
                        ? 'text-blue-600 bg-white font-semibold shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Language Selector Indicator */}
            <div className="flex items-center space-x-0.5 bg-slate-100 border border-slate-200 p-0.5 rounded-lg">
              <button
                onClick={() => setLang('zh')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  lang === 'zh'
                    ? 'bg-blue-600 text-white shadow font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                中
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-blue-600 text-white shadow font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden space-x-3">
            {/* Lang for mobile header */}
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="flex items-center space-x-1 px-2.5 py-1 text-xs text-slate-700 border border-slate-200 rounded-md bg-white cursor-pointer hover:bg-slate-50"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bg-white/95 backdrop-blur-lg border-b border-slate-200/80 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
