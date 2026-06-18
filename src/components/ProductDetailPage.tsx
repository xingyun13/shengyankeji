import React, { useEffect, useState } from 'react';
import { ArrowLeft, Check, Cpu, Network, ShieldCheck } from 'lucide-react';
const spoterPro = new URL('../../assets/images/spoter_pro.jpg', import.meta.url).href;
const spoter = new URL('../../assets/images/spoter.png', import.meta.url).href;
import { Language, translations } from '../types';

interface ProductDetailPageProps {
  lang: Language;
  productId: number;
  onBack: () => void;
  setLang: (lang: Language) => void;
}

const productDetailsData = [
  {
    model: 'SPOTER-BASIC',
    category: { zh: '星点便携式点焊机 (标准版)', en: 'FLAMME Portable Spot Welder (SPOTER Version)' },
    standards: ['A品锂电芯', '双脉冲安全驱动', 'Type-C充放一体', '防火阻燃ABS外壳'],
    subOverview: {
      zh: '星点便携式点焊机 SPOTER 版本采用自研瞬间大电流电容充放电控制驱动。精选高品质A级高倍率聚合物锂电池电芯，专为手机电极保护板、小型聚合物电池极耳、镍氢/镍镉电池组熔接等场景精心研发。机身外壳采用优质防火阻燃ABS材质打造，手感绝佳。支持Type-C双向高保真智能快充，充放自如。内置智能微电脑程序及自感应毫秒级延迟控制，让每一粒星点熔接都稳如磐石。',
      en: 'The Star-point SPOTER compact welder employs custom micro-second capacitor discharges. Driven by premium Grade-A high-multiplier lithium cells, it is specifically configured for detailed mobile phone repair, battery protection board bonding, and small utility nickel-plate welds. Built with water-resistant, flame-retardant ABS enclosures, it offers robust handling and Type-C bidirection power flow.'
    },
    features: {
      zh: [
        '精选A品高倍率电芯，2500mAh容量，最大1000A大电流，超高放电倍率，焊接质量更好，温控保护，温度超过60°C，自动断电。',
        '双脉冲焊接，真材实料，镀金笔端，抗氧化，寿命长；紫铜笔端，99.9%纯紫铜细节之处显真章，电阻小/导电好/熔点高，抗氧化，寿命长，焊接效果稳定。',
        '自带焊接夹具，可夹持焊接，可利用侧面，铜柱焊接，防虚焊，防误触，高效便捷体验感更佳。',
        'TYPE-C快充，充放一体兼容易用。',
        '防水外壳，外壳采用优质防火ABS材料，阻燃抗氧化。'
      ],
      en: [
        'Premium Grade-A high-rate battery cell with 2500mAh capacity, maximum 1000A peak current, excellent discharge rates for stronger bonds, and active 60°C thermostatic cutoff.',
        'Double-pulse welding design with gold-plated anti-oxidation pen tips and 99.9% pure solid copper electrodes for minor resistance and robust thermal limits.',
        'Equipped with integrated welding fixtures supporting convenient clamped and side-contact copper welding to prevent false joints.',
        'Type-C fast bidirectional charging, offering convenient input and output operations.',
        'Water-resistant secure chassis modeled from premium fire-retardant industrial ABS polymer.'
      ]
    },
    specs: {
      zh: [
        { label: '产品名称 / Product name', value: '星点便携式点焊机 (FLAMME PORTABLE SPOT WELDING MACHINE)' },
        { label: '电池类型 / Battery type', value: '可充电聚合物锂电池 (Rechargeable polymer lithium batteries)' },
        { label: '电池容量 / Battery capacity', value: '2500mAh' },
        { label: '输出电压 / Output voltage', value: '4.2V (MAX)' },
        { label: '输出电流 / Output current', value: '650A (MAX) / 1000A Peak' },
        { label: 'USB 口输出 / USB output', value: '5V / 2.4A (MAX)' },
        { label: '输入接口 / Input interface', value: 'Type-C 充电口 (Type-C charging port)' },
        { label: '输入参数 / Input parameters', value: '5V / 2A' },
        { label: '推荐镍带厚度 / Thickness', value: '0.1mm - 0.12mm' }
      ],
      en: [
        { label: 'Product Name', value: 'FLAMME PORTABLE SPOT WELDING MACHINE' },
        { label: 'Battery Type', value: 'Rechargeable polymer lithium batteries' },
        { label: 'Battery Capacity', value: '2500mAh' },
        { label: 'Output Voltage', value: '4.2V (MAX)' },
        { label: 'Output Current', value: '650A (MAX)' },
        { label: 'USB Output', value: '5V / 2.4A (MAX)' },
        { label: 'Input Interface', value: 'Type-C charging port' },
        { label: 'Input Parameters', value: '5V / 2A' },
        { label: 'Recommended Strip', value: '0.1-0.12mm' }
      ]
    }
  },
  {
    model: 'SPOTER-PRO',
    category: { zh: '星点便携式点焊机 (旗舰Pro版)', en: 'FLAMME Portable Spot Welder (SPOTER PRO Version)' },
    standards: ['行业自适应彩屏', '多脉冲主脉冲融合', '4000mAh 65C电芯', 'V3防爆防火材料'],
    subOverview: {
      zh: '旗舰星点便携式点焊机 SPOTER PRO 版本是一款革命性的智能多温控双脉冲电池组组装一体机。采用全高清1.8英寸彩色LCD数码指示面板，高精度主被动温控，搭载行业首创的“多脉冲+主脉冲”波形清氧化熔合脉冲驱动逻辑，可大幅提高厚极耳与锂电单体熔合良率，是重型电摩电池维修、便携户外户外电源生产、电池厂研发实验室的顶尖量产型神机！',
      en: 'The premium SPOTER PRO is an elite multifunction battery pack spot welding station. Incorporating an high-definition color LCD dashboard and state-of-the-art "multi-pulse + main-pulse" fusion process control, it thoroughly clears oxide crusts to support ultra-dense weld joints. Formed using thermal-graded V3-rated fireproof ABS skins, it is built for continuous commercial battery assembly cycles.'
    },
    features: {
      zh: [
        '全高清彩屏面板，功能齐全信息丰富。',
        '行业领先，多脉冲+主脉冲，焊接质量牢固、可靠。',
        '自带焊接夹具及耐磨耐高温防滑垫，可夹持焊接，可利用侧面，铜住焊接，防虚焊，防误触，高效便捷体验感更佳。',
        '精选A品高倍率电芯，4000mAh 65C容量，最大1000A大电流，超高放电倍率，焊接质量更好，温控保护，温度超过60°C，自动断电。',
        '双脉冲焊接，真材实料，镀金笔端，抗氧化，寿命长；紫铜笔端，99.9%纯紫铜细节之处显真章，电阻小/导电好/熔点高，抗氧化，寿命长，焊接效果稳定。',
        '防火外壳，外壳采用V3级防火ABS材料，阻燃抗氧化，精细塑造，细腻新肤。'
      ],
      en: [
        'Full HD customizable color screen panel, presenting complete settings, realtime voltage, and heat metrics.',
        'Industry leading multi-pulse + main-pulse weld algorithms for unbreakable connections across dense nickel sheets.',
        'Built-in secure slot-clamp bracket and bespoke wear-resistant high-temp anti-slip workpad support for zero misalignment.',
        'A Grade high-multiplier cell architecture with massive 4000mAh 65C capacity, delivering superhigh 1000A output and smart cutoff above 60°C.',
        'Heavy-duty double-pulse layout utilizing durable gold-plated pen ends and 99.9% pure oxygen-free copper columns for stable conductivity.',
        'Premium outer enclosure with strict V3 flame retardancy rating, giving optimal heat deflection and skin-friendly grip.'
      ]
    },
    specs: {
      zh: [
        { label: '产品名称 / Product name', value: '星点便携式点焊机 (FLAMME PORTABLE SPOT WELDING MACHINE)' },
        { label: '电池类型 / Battery type', value: '可充电聚合物锂电池 (Rechargeable polymer lithium batteries)' },
        { label: '电池容量 / Battery capacity', value: '见产品标称 (Refer to the product label)' },
        { label: '输出电压 / Output voltage', value: '4.2V (MAX)' },
        { label: '输出电流 / Output current', value: '650A (MAX) / 1000A Peak' },
        { label: 'USB 口输出 / USB output', value: '5V / 2.4A (MAX)' },
        { label: '输入接口 / Input interface', value: 'Type-C 充电口 (Type-C charging port)' },
        { label: '输入参数 / Input parameters', value: '5V / 2A' },
        { label: '推荐镍带厚度 / Thickness', value: '0.1mm - 0.12mm' }
      ],
      en: [
        { label: 'Product Name', value: 'FLAMME PORTABLE SPOT WELDING MACHINE' },
        { label: 'Battery Type', value: 'Rechargeable polymer lithium batteries' },
        { label: 'Battery Capacity', value: 'Refer to the product label' },
        { label: 'Output Voltage', value: '4.2V (MAX)' },
        { label: 'Output Current', value: '650A (MAX)' },
        { label: 'USB Output', value: '5V / 2.4A (MAX)' },
        { label: 'Input Interface', value: 'Type-C charging port' },
        { label: 'Input Parameters', value: '5V / 2A' },
        { label: 'Recommended Strip', value: '0.1-0.12mm' }
      ]
    }
  },
  {
    model: 'SY-TK-CONSULT',
    category: { zh: '交钥匙锂电组装及仿真定制咨询服务', en: 'Turnkey IC and Board Engineering Consultancy' },
    standards: ['电芯老化测试', '热流多物理仿真', '大电流过载保护', '定制自动流水规划'],
    subOverview: {
      zh: '圣焰交钥匙锂电组装及大电流仿真研制咨询服务，是由圣焰工程研究院全面向中小型电池Pack装配商、新能源维护极客及生产车间打造的端到端技术支持。通过整合电芯精准分容、老化过载阻性测试、以及多物理热循环仿真算法，为您定制全生命周期的电池装配与自动流水线点焊方案，打通从创意到高负荷量产的最后一步。',
      en: 'Shengyan comprehensive Turnkey lithium pack assembly and heavy-current simulation service delivers direct system pathways to bulk battery builders. We open up our high-rate battery testing grids, physical thermal simulation solvers, and factory-level auto-pneumatic weld track designs, supporting rapid, highly robust and secure energy assembly workflow configurations.'
    },
    features: {
      zh: [
        '专业热循环与大电流仿真：使用多物理场电极发热散热仿真，预测极高倍率充放电环境下的温度场梯度，预防电芯穿刺及热失控。',
        '高良率焊接工艺定制：原厂专家团队亲临，针对气动/自动流水线精密点焊机系统提供PLC编程及多段复杂脉冲波形整定支持。',
        '老化与分容参数验证：制定并指导配置高精度锂电池检测维护设备，解决电池单体组配过程中的充灌偏差、短路防误触和阻抗非均一性。',
        '一站式合规建厂赋能：输出专业电池装配标准文件，支持海内外新能源电池检测整机检测防爆资质、CE/FCC安标等全套申报指导。'
      ],
      en: [
        'Advanced Thermal & Multi-physics simulations: Dynamic calculation of cell cluster temperature profiles, managing heat dissipation under heavy cycles.',
        'High-Yield Assembly Integration: Specialized guidance on integrating automated spot welding rigs, tuning complex pulse combinations directly.',
        'Cell Matching & Diagnostics Auditing: Resolving variations in internal resistance and static voltage offsets across deep multi-channel cell groups.',
        'Full Turnkey Compliance support: Supplying compliance guide templates, helping workshops clear CE, FCC, RoHS, and explosion-prevention safety approvals.'
      ]
    },
    specs: {
      zh: [
        { label: '项目评估期', value: '确定项目目标、选型规格、空间受力与多物理热流通仿真设计校验 (约占比 20%)' },
        { label: '方案定制期', value: '智能自动化焊针排布、多路组包连接铜排参数设计、多脉冲熔合定型 (约占比 45%)' },
        { label: '设备调试期', value: '样件试焊、温度场实测标定、电池充放及跌落机械破坏耐受检测 (约占比 25%)' },
        { label: '量产合规期', value: '出具整包热评估与安全操作指导书、批量点焊流水调试、产线良率精益认证 (约占比 10%)' }
      ],
      en: [
        { label: 'Concept & Simulation', value: 'Parameter mapping, component layout sizing, and initial thermal dissipation modelling (20% cycle)' },
        { label: 'Custom System Sourcing', value: 'Detailed weld pen pattern designs, busbar copper thickness limits, and pulse config definition (45% cycle)' },
        { label: 'Active Prototype Proofing', value: 'Trial welding runs, temperature profile scans under heavy discharging, and load-limit testing (25% cycle)' },
        { label: 'Compliance & Calibration', value: 'Formulation of safety handbooks, automated production flow fine-tuning, and yield-rate certification (10% cycle)' }
      ]
    }
  }
];

// Helper to render high-fidelity, clean mathematical CAD diagrams
const renderProductVisual = (index: number) => {
  if (index === 0) {
    return (
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="welderGridRegD" width="15" height="15" patternUnits="userSpaceOnUse">
            <path d="M 15 0 L 0 0 0 15" fill="none" stroke="rgba(239,68,68,0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#welderGridRegD)" rx="12" />
        
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
  } else {
    return (
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="proGridRegD" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" />
            <circle cx="10" cy="10" r="0.5" fill="rgba(249,115,22,0.06)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#proGridRegD)" rx="12" />

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
  }
};

export default function ProductDetailPage({ lang, productId, onBack, setLang }: ProductDetailPageProps) {
  const t = translations[lang];
  const detailProduct = productDetailsData[productId];

  // Auto scroll to top when page loaded or product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [productId]);

  const pNames = [t.products.p1Name, t.products.p2Name, t.products.p3Name];
  const pDescs = [t.products.p1Desc, t.products.p2Desc, t.products.p3Desc];
  const pImgSrcs = [spoter, spoterPro];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Simple, Professional, Direct Header replacing standard nav bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-xs font-mono font-bold text-slate-600 hover:text-red-650 transition-colors bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg uppercase tracking-wider cursor-pointer"
              id="back-to-home-btn"
            >
              <ArrowLeft className="w-4 h-4 text-red-600" />
              <span>{lang === 'zh' ? '返回产品列表' : 'Back to List'}</span>
            </button>
            <div className="hidden sm:flex items-center space-x-1.5 text-slate-350 text-[11px] font-mono">
              <span>/</span>
              <span>{detailProduct.model}</span>
              <span>/</span>
              <span className="text-slate-500 font-medium">{detailProduct.category[lang]}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Simple logo */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="font-mono text-red-600 font-black text-lg leading-none">炎</span>
              <span className="font-sans font-black text-sm text-slate-900">
                圣焰<span className="text-red-600 font-light">科技</span>
              </span>
            </div>

            {/* Simple local language switch */}
            <div className="flex items-center space-x-0.5 bg-slate-150 p-0.5 rounded-md border border-slate-200 text-[10px]">
              <button
                onClick={() => setLang('zh')}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  lang === 'zh' ? 'bg-red-600 text-white font-bold' : 'text-slate-500'
                }`}
              >
                中
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                  lang === 'en' ? 'bg-red-600 text-white font-bold' : 'text-slate-500'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Page Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Brand visual banner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-white to-slate-50/50">
          <div className="w-full md:w-1/3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-4 relative overflow-hidden min-h-[220px] shadow-sm select-none">
            <img 
              src={pImgSrcs[productId]} 
              alt={pNames[productId]}
              className="w-full h-full object-contain max-h-[200px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {detailProduct.standards.map((std, i) => (
                <span 
                  key={i} 
                  className="px-2 py-0.5 text-[9px] uppercase font-mono font-bold bg-slate-100 border border-slate-200 text-slate-600 rounded"
                >
                  {std}
                </span>
              ))}
            </div>
            <span className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider block mb-1">
              MODEL: {detailProduct.model}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              {pNames[productId]}
            </h1>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              {pDescs[productId]}
            </p>
          </div>
        </div>

        {/* Details Grid: Left side for Overview/Features, Right side for Technical Specification parameters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Width 7/12) - Overview & Features list */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
            <div>
              <h2 className="text-slate-900 text-base font-bold mb-4 border-b border-slate-100 pb-2">
                {lang === 'zh' ? '产品技术概述 / Technical Overview' : 'Technical Overview'}
              </h2>
              <p className="text-slate-600 text-sm font-light leading-relaxed whitespace-pre-line">
                {detailProduct.subOverview[lang]}
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-base font-bold mb-4 border-b border-slate-100 pb-2">
                {lang === 'zh' ? '核心设计与性能指标 / Key Features' : 'Core Key Features'}
              </h2>
              <ul className="space-y-3.5">
                {detailProduct.features[lang].map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-slate-700 text-sm font-light leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 text-red-600 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Width 5/12) - Technical Specifications Parameters (formerly right form position) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-slate-900 text-base font-bold mb-4 border-b border-slate-100 pb-2">
              {lang === 'zh' ? '核心技术规格参数 / Parameters Sheet' : 'Engineering Specifications'}
            </h2>
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
              <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold font-mono">
                    <th className="p-3 w-5/12">{lang === 'zh' ? '规格项 / Spec' : 'Specification Item'}</th>
                    <th className="p-3 w-7/12">{lang === 'zh' ? '测试指标值 / Rating' : 'Standard Rating'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-light">
                  {detailProduct.specs[lang].map((spec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                      <td className="p-3 font-semibold text-slate-900 border-r border-slate-100">{spec.label}</td>
                      <td className="p-3 font-mono text-slate-600 leading-normal">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      {/* Simple Detail Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20 py-8 text-center text-xs text-slate-450">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono">
            &copy; {new Date().getFullYear()} 圣焰科技(深圳)有限公司 &middot; Shengyan Tech R&D Division
          </p>
          <p className="text-slate-400 mt-1 font-sans">
            {lang === 'zh' ? '原厂技术资料，完全自主设计，严禁未经授权非法转载。' : 'Proprietary engineering assets. Under direct license only.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
