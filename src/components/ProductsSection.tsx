import React, { useState } from 'react';
import { Cpu, ShieldCheck, Network, ChevronRight, Check } from 'lucide-react';
import { Language, translations } from '../types';
const spoterPro = new URL('../../assets/images/spoter_pro.jpg', import.meta.url).href;
const spoter = new URL('../../assets/images/spoter.png', import.meta.url).href;
interface ProductsSectionProps {
  onSelectProduct: (productId: number) => void;
  lang: Language;
}

// Helper to render high-fidelity, clean mathematical welder/battery CAD diagrams
const renderProductVisual = (index: number) => {
  if (index === 0) {
    // FLAMME SPOTER: Clean portable spot welder box, sleek dual-digit screen, welding pen terminals
    return (
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="welderGridReg" width="15" height="15" patternUnits="userSpaceOnUse">
            <path d="M 15 0 L 0 0 0 15" fill="none" stroke="rgba(239,68,68,0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#welderGridReg)" rx="12" />
        
        {/* Soft glowing ambient backgrounds */}
        <circle cx="150" cy="120" r="80" fill="#dc2626" fillOpacity="0.04" filter="blur(20px)" />

        {/* Outer Welder Device Shell */}
        <rect x="50" y="45" width="200" height="150" rx="14" fill="#0f172a" stroke="#ef4444" strokeWidth="2" />
        <rect x="55" y="50" width="190" height="140" rx="10" fill="none" stroke="#334155" strokeWidth="1" />

        {/* LED Digital Segment Displays: "8.8" (Delay Pulse power) */}
        <rect x="80" y="70" width="60" height="35" rx="6" fill="#020617" stroke="#1e293b" strokeWidth="1" />
        <text x="110" y="94" fill="#ef4444" fontSize="18" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">P.08</text>
        <text x="110" y="114" fill="#475569" fontSize="6" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">PULSE POWER</text>

        {/* Micro Dials/Controls */}
        <circle cx="170" cy="88" r="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
        <line x1="170" y1="88" x2="176" y2="82" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <text x="170" y="106" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="middle">DELAY ADJ</text>

        {/* Quick Release Pen Terminals (Positive and Negative) */}
        <circle cx="100" cy="150" r="12" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
        <circle cx="100" cy="150" r="4" fill="#f97316" />
        <text x="100" y="172" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PEN (+)</text>

        <circle cx="200" cy="150" r="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="200" cy="150" r="4" fill="#3b82f6" />
        <text x="200" y="172" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PEN (-)</text>

        {/* Engraving */}
        <text x="150" y="130" fill="#cbd5e1" fontSize="9" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1" textAnchor="middle">FLAMME SPOTER</text>
      </svg>
    );
  } else if (index === 1) {
    // SPOTER PRO: Sleek industrial dual-pulse capacitor welder with heavy dual capacitor icons and terminals
    return (
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="proGridReg" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" />
            <circle cx="10" cy="10" r="0.5" fill="rgba(249,115,22,0.06)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#proGridReg)" rx="12" />

        {/* Heavy Capacitor Banks Background CAD Layout */}
        <rect x="35" y="40" width="230" height="160" rx="10" fill="#020617" stroke="#334155" strokeWidth="2" />

        {/* Outer Heavy Copper Rail path Lines */}
        <path d="M 50,60 H 250" stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 2" />
        
        {/* Two massive cylindrical Storage Capacitor banks */}
        <rect x="65" y="70" width="50" height="85" rx="4" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
        <line x1="65" y1="90" x2="115" y2="90" stroke="#f97316" strokeWidth="1" />
        <text x="90" y="115" fill="#f8fafc" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CAP I</text>
        <text x="90" y="128" fill="#f97316" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">3000F</text>

        <rect x="185" y="70" width="50" height="85" rx="4" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
        <line x1="185" y1="90" x2="235" y2="90" stroke="#f97316" strokeWidth="1" />
        <text x="210" y="115" fill="#f8fafc" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CAP II</text>
        <text x="210" y="128" fill="#f97316" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">3000F</text>

        {/* Middle Central Microprocessor Controller Unit */}
        <rect x="127" y="80" width="46" height="50" rx="3" fill="#0f172a" stroke="#d97706" strokeWidth="1" />
        <text x="150" y="102" fill="#f97316" fontSize="7" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">DOUBLE</text>
        <text x="150" y="113" fill="#cbd5e1" fontSize="7" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">PULSE</text>
        <text x="150" y="123" fill="#475569" fontSize="6" fontFamily="monospace" textAnchor="middle">CPU v3.5</text>

        {/* Connection terminals at bottom */}
        <rect x="110" y="165" width="80" height="20" rx="4" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="130" cy="175" r="3" fill="#ea580c" />
        <circle cx="170" cy="175" r="3" fill="#3b82f6" />
        <text x="150" y="158" fill="#94a3b8" fontSize="6" fontFamily="monospace" textAnchor="middle">DUTY HEAVY OUT</text>

        {/* Mounting Feet */}
        <rect x="45" y="200" width="20" height="6" rx="2" fill="#475569" />
        <rect x="235" y="200" width="20" height="6" rx="2" fill="#475569" />
      </svg>
    );
  } else {
    // FLAMME-PACK-TK consulting layout workflow
    return (
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="packGridReg" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" />
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(249,115,22,0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#packGridReg)" rx="12" />

        {/* Node 1: Concept */}
        <rect x="25" y="30" width="112" height="65" rx="6" fill="#0f172a" stroke="#ea580c" strokeWidth="1.5" />
        <text x="35" y="48" fill="#ea580c" fontSize="8" fontFamily="monospace" fontWeight="bold">01 CELLS CHECK</text>
        <text x="35" y="62" fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">多路电芯精细筛选</text>

        {/* Node 2: Simulation */}
        <rect x="163" y="30" width="112" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
        <text x="173" y="48" fill="#94a3b8" fontSize="8" fontFamily="monospace" fontWeight="bold">02 MULTI-EMU</text>
        <text x="173" y="62" fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">温度过载多维仿真</text>

        {/* Node 3: Tuning */}
        <rect x="25" y="145" width="112" height="65" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
        <text x="35" y="163" fill="#94a3b8" fontSize="8" fontFamily="monospace" fontWeight="bold">03 SPOTER WELD</text>
        <text x="35" y="177" fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">毫秒高能纯镍熔接</text>

        {/* Node 4: Sourcing */}
        <rect x="163" y="145" width="112" height="65" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
        <text x="173" y="163" fill="#10b981" fontSize="8" fontFamily="monospace" fontWeight="bold">04 BULK PACKING</text>
        <text x="173" y="177" fill="#cbd5e1" fontSize="8" fontFamily="sans-serif">一站式合格品质组包</text>

        {/* Connecting arrows */}
        <path d="M 137,62 L 163,62" stroke="#ea580c" strokeWidth="1" strokeDasharray="3 2" />
        <path d="M 219,95 L 219,145" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />
        <path d="M 163,177 L 137,177" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />
        <path d="M 81,145 L 81,95" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    );
  }
};

export default function ProductsSection({ lang, onSelectProduct }: ProductsSectionProps) {
  const t = translations[lang];
  // Filter state: 'all' | 'spoter' | 'pro'
  const [filterCategory, setFilterCategory] = useState<'all' | 'spoter' | 'pro'>('all');

  const productKeys = [
    {
      id: 0,
      categoryType: 'spoter' as const,
      icon: Cpu,
      name: t.products.p1Name,
      title: t.products.p1Title,
      desc: t.products.p1Desc,
      specs: t.products.p1Specs,
      badgeText: lang === 'zh' ? '毫秒级数显 · 手机片/大电流极耳焊接专用' : 'Microcomputer precision battery tab welder',
      model: 'SPOTER',
      imgSrc: spoter
    },
    {
      id: 1,
      categoryType: 'pro' as const,
      icon: Network,
      name: t.products.p2Name,
      title: t.products.p2Title,
      desc: t.products.p2Desc,
      specs: t.products.p2Specs,
      badgeText: lang === 'zh' ? '旗舰储能大师 · 多脉冲+主脉冲加厚熔接' : 'Premium dual-pulse double capacitor welder',
      model: 'SPOTER PRO',
      imgSrc: spoterPro
    }
  ];

  // Filtering products list
  const filteredProducts = productKeys.filter(
    (p) => filterCategory === 'all' || p.categoryType === filterCategory
  );

  return (
    <section id="products" className="relative py-24 bg-white overflow-hidden">
      {/* Background soft grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(239,68,68,0.015)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-100 px-3.5 py-1 rounded-full text-xs font-semibold text-red-600 select-none mb-4 animate-fade-in">
            <span>{t.products.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4 font-sans">
            {t.products.title}
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed font-light">
            {t.products.subtitle}
          </p>
        </div>

        {/* Tab Filter buttons - Simple & Direct */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 border-b border-slate-100 pb-6">
          {[
            { filter: 'all', label: lang === 'zh' ? '全部版本 / All' : 'All Versions' },
            { filter: 'spoter', label: lang === 'zh' ? 'SPOTER 标准版' : 'SPOTER Basic' },
            { filter: 'pro', label: lang === 'zh' ? 'SPOTER PRO 专业版 / 咨询' : 'SPOTER PRO & Consulting' }
          ].map((item) => {
            const isCur = filterCategory === item.filter;
            return (
              <button
                key={item.filter}
                onClick={() => setFilterCategory(item.filter as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isCur
                    ? 'bg-red-600 text-white shadow-md shadow-red-500/10'
                    : 'bg-slate-50 text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Solid Product Catalog Grid Layout - Simplified & elegant clickable card trigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch mb-4">
          {filteredProducts.map((p) => {
            return (
              <div 
                key={p.id}
                onClick={() => onSelectProduct(p.id)}
                className="bg-white border border-slate-200/90 rounded-[22px] overflow-hidden hover:border-red-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer"
              >
                {/* Visual Header Block with Dynamic User Image Custom Support */}
                <div className="bg-slate-50 p-6 flex items-center justify-center relative overflow-hidden select-none border-b border-slate-150 h-52">
                  <img 
                    src={p.imgSrc} 
                    alt={p.name}
                    className="w-full h-full object-contain max-h-[170px] transition-all duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Text Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 block mb-1.5 uppercase font-bold">
                      MODEL: {p.model}
                    </span>
                    <div className="inline-block bg-orange-50 text-orange-600 border border-orange-100/60 text-[9px] font-mono px-2 py-0.5 rounded-full mb-2">
                      {p.badgeText}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-650 transition-colors mb-2 font-sans line-clamp-2">
                      {p.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed mb-4 line-clamp-4 whitespace-pre-line">
                      {p.desc}
                    </p>

                    {/* Accurate Specifications Bullet items */}
                    <div className="border-t border-slate-100 pt-4 space-y-2.5">
                      {p.specs.map((item, keyIdx) => (
                        <div key={keyIdx} className="flex items-start space-x-2 text-slate-600 text-[11px] font-light">
                          <Check className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Controls panel - click triggers page jump */}
                  <div className="border-t border-slate-100 pt-4 mt-auto">
                    <span className="w-full py-2 bg-slate-50 group-hover:bg-red-600 group-hover:text-white text-slate-700 text-xs font-bold font-mono tracking-wide rounded-lg flex items-center justify-center space-x-1 shadow-sm transition-all">
                      <span>{lang === 'zh' ? '核验详细规格指标' : 'Enter Technical Specs'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
