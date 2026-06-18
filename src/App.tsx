import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductDetailPage from './components/ProductDetailPage';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // Dynamically update document title based on language
  useEffect(() => {
    document.title =
      lang === 'zh'
        ? '圣焰科技(深圳)有限公司 - 集成电路设计与工程技术研究先锋'
        : 'Shengyan Technology - IC Design & Advanced Engineering Tech Research';
  }, [lang]);

  // Monitor Scroll top relative to sections to highlight the active tab in Navbar
  useEffect(() => {
    if (selectedProductId !== null) return;
    const sections = ['home', 'about', 'products', 'contact'];
    
    const handleScroll = () => {
      // Offset added to match the heights of sticky headers
      const scrollPos = window.scrollY + 200;

      for (const sect of sections) {
        const element = document.getElementById(sect);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProductId]);

  const handleNavClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Universal Ambient noise overlay */}
      <div className="fixed inset-0 bg-slate-50 pointer-events-none z-0" />

      {/* Main Structural Wrapper */}
      <div className="relative z-10">
        {selectedProductId !== null ? (
          <ProductDetailPage
            lang={lang}
            setLang={setLang}
            productId={selectedProductId}
            onBack={() => {
              setSelectedProductId(null);
              // Smoothly scroll back to the products section once back on main page
              setTimeout(() => {
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'instant', block: 'start' });
                }
              }, 40);
            }}
          />
        ) : (
          <>
            {/* Navigation Layer */}
            <Navbar
              lang={lang}
              setLang={setLang}
              activeSection={activeSection}
              onNavClick={handleNavClick}
            />

            {/* Hero Section */}
            <HeroSection
              lang={lang}
              onExploreProducts={() => handleNavClick('products')}
              onContactUs={() => handleNavClick('contact')}
            />

            {/* Divider Glow */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent w-full" />

            {/* About Section */}
            <AboutSection lang={lang} />

            {/* Divider Glow */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-600/15 to-transparent w-full" />

            {/* Products Section */}
            <ProductsSection
              lang={lang}
              onSelectProduct={setSelectedProductId}
            />

            {/* Divider Glow */}
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent w-full" />

            {/* Contact Section */}
            <ContactSection lang={lang} />

            {/* Universal Footer */}
            <Footer lang={lang} onNavClick={handleNavClick} />
          </>
        )}
      </div>
    </div>
  );
}
