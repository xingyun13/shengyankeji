import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, QrCode } from 'lucide-react';
import { Language, translations } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = translations[lang];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('18127090590');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background soft red light spot */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.03)_0%,transparent_45%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-150 px-3.5 py-1 rounded-full text-xs font-semibold text-red-600 mb-4 select-none animate-fade-in">
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-4 font-sans">
            {t.contact.title}
          </h2>
          {/* <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed font-light">
            {t.contact.subtitle}
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Info details (5/12 column width) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-sm">
            <div>
              <span className="text-xs font-mono font-bold text-red-650 uppercase tracking-widest block mb-3">
                {lang === 'zh' ? '原厂技术沟通通道' : 'DIRECT COMMUNICATIONS'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-8 font-sans">
                {t.contact.infoTitle}
              </h3>

              <div className="space-y-6">
                {/* Address Item */}
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-red-600 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-450 text-[10px] font-mono mb-1 font-semibold">
                      {lang === 'zh' ? '深圳研发与工程实验室' : 'SHENZHEN RESEACH & DESIGN RESIDENCE'}
                    </h4>
                    <p className="text-xs font-light text-slate-705 leading-relaxed">
                      {t.contact.infoAddr}
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-red-600 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-450 text-[10px] font-mono mb-1 font-semibold">
                      {lang === 'zh' ? '业务洽谈与芯片样片热线' : 'SALES & SAMPLES DIRECT HOTLINE'}
                    </h4>
                    <p className="text-xs font-light text-slate-705 leading-relaxed font-mono">
                      {t.contact.infoPhone}
                    </p>
                  </div>
                </div>

                {/* Email Item */}
                {/* <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-red-600 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-450 text-[10px] font-mono mb-1 font-semibold">
                      {lang === 'zh' ? '项目咨询与定制销售信箱' : 'DIRECT SALES & SUPPORT INBOX'}
                    </h4>
                    <p className="text-xs font-light text-red-600 font-mono hover:underline cursor-pointer">
                      {t.contact.infoEmail}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Simple Clean Footprint Note */}
            <div className="mt-8 pt-4 border-t border-slate-100 font-mono text-[10px] text-slate-400 leading-normal">
              <p>{lang === 'zh' ? '圣焰科技(深圳)有限公司 原厂正规流片业务与一站式多物理仿真代理服务支撑。' : 'Shengyan Technology (Shenzhen) Co., Ltd. Standard corporate-grade original semiconductor R&D consultation platform.'}</p>
            </div>
          </div>

          {/* Right: Beautiful Drawn WeChat QR Code Integration & Action Card (7/12 column width) */}
          <div className="lg:col-span-7 relative bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 text-center sm:text-left">
              <span className="text-xs font-mono font-bold text-green-600 uppercase tracking-widest block mb-3">
                {lang === 'zh' ? '微信扫码快捷通道' : 'WECHAT CONTACT NETWORK'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 font-sans">
                {t.contact.formCardTitle}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 font-light max-w-xl">
                {lang === 'zh' 
                  ? '请使用手机微信扫一扫下方二维码，直接添加张经理微信。或点击复制手机号搜索建联，为您提供定制的设备方案、采购报价与售后支持。' 
                  : 'Please use WeChat to scan the QR code below and connect with Manager Zhang directly. You can also copy the hotline number to search and add us manually.'}
              </p>
            </div>

            {/* QR Code Graphic Frame */}
            <div className="relative z-10 flex flex-col items-center justify-center my-4 py-6 bg-slate-50/50 rounded-2xl border border-slate-100 max-w-md mx-auto w-full transition-all hover:border-green-200 hover:shadow-inner">
              <div className="relative p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
                <image className="w-48 h-48 sm:w-52 sm:h-52" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"></image>
                 
                
                {/* Visual Scanner Alignment Corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-green-500 rounded-tl-md pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-green-500 rounded-tr-md pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-green-500 rounded-bl-md pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-green-500 rounded-br-md pointer-events-none" />
              </div>

              {/* Badge indicating instant scan */}
              <div className="mt-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-150 text-[11px] font-semibold text-green-700 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>{lang === 'zh' ? '推荐微信扫码 专属技术咨询' : 'SCAN VIA WECHAT FOR INSTANT TECHNICAL PROPOSALS'}</span>
              </div>
            </div>

            {/* Quick Action Block: One click copy */}
            <div className="relative z-10 bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-md mx-auto w-full transition-all hover:border-slate-300">
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                  {lang === 'zh' ? '微信号 / 手机号' : 'WECHAT PHONE NO.'}
                </p>
                <p className="text-slate-800 text-sm font-bold font-mono">
                  18127090590 <span className="text-xs text-slate-400 font-normal">({lang === 'zh' ? '张礼玲' : 'Zhang Liling'})</span>
                </p>
              </div>
              <button
                onClick={handleCopy}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-bold font-mono flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  copied 
                    ? 'bg-green-600 text-white shadow-sm' 
                    : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-700'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>{lang === 'zh' ? '已复制！' : 'COPIED!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{lang === 'zh' ? '复制微信号' : 'COPY WECHAT'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
