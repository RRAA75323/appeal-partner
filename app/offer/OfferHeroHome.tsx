'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OfferHeroHome() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('emergency-appeal-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Premium gradient background with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      
      {/* Animated mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] transition-all duration-3000 ${mounted ? 'animate-pulse' : ''}`}></div>
      </div>

      {/* Premium floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && (
          <>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-float-slow"></div>
            <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-float">
              {/* Premium light streaks */}
              <div className="absolute top-1/3 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent rotate-12 animate-fade-in-delayed"></div>
              <div className="absolute bottom-1/3 left-1/5 w-px h-32 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent -rotate-12 animate-fade-in-slow"></div>
            </div>
          </>
        )}
      </div>

      {/* Logo in top left with premium styling - Desktop only */}
      <div className="absolute top-4 left-4 z-30 hidden lg:block">
        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png" 
                alt="Appeal Partners"
                className="w-5 h-5 object-contain"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          </div>
          <div>
            <span className="text-base font-semibold text-white tracking-tight">Appeal Partners</span>
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className={`transition-opacity duration-1500 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>

          {/* Mobile & Tablet logo */}
          <div className="mb-6 sm:mb-8 block lg:hidden pt-8">
            <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5 mx-auto w-fit">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden">
                  <img 
                    src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png" 
                    alt="Appeal Partners"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-base font-semibold text-white tracking-tight">Appeal Partners</span>
              </div>
            </div>
          </div>

          {/* Premium status badge - Desktop only */}
          <div className="mb-6 sm:mb-8 hidden sm:block">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/15 to-blue-500/15 backdrop-blur-2xl border border-emerald-400/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4 animate-pulse"></div>
                <span className="text-emerald-300 font-bold text-xs uppercase tracking-wider">STEP 1: BOOK YOUR FREE 30-MINUTE CONSULT</span>
              </div>
            </div>
          </div>

          {/* Mobile-first responsive headline */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 leading-[0.85] tracking-tighter text-center" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              The #1 Amazon Seller<br />
              Reinstatement Service
            </h1>
          </div>
          
          {/* Mobile-first responsive subheadline */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-100/90 font-medium max-w-4xl mx-auto leading-relaxed px-2">
              We full reactivate Amazon & Walmart Seller Accounts in 7 days or less.
            </p>
          </div>

          {/* Premium status badge - Mobile only */}
          <div className="mb-6 sm:mb-8 block sm:hidden">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/15 to-blue-500/15 backdrop-blur-2xl border border-emerald-400/20 rounded-full px-4 py-2 shadow-2xl">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-emerald-300 font-bold text-xs uppercase tracking-wider">STEP 1: BOOK YOUR FREE 30-MINUTE CONSULT</span>
              </div>
            </div>
          </div>

          {/* Mobile-first responsive stats showcase */}
          <div className="mb-8 sm:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-lg sm:max-w-none mx-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">$2.7M+</div>
                <div className="text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider">Revenue Released</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">3k+</div>
                <div className="text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider">Accounts Reinstated</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">4.2 Days</div>
                <div className="text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider">Avg Resolution</div>
              </div>
            </div>
          </div>
          
          {/* Mobile-first responsive CTA buttons */}
          <div className="mb-8 sm:mb-12">
            <div className="flex justify-center items-center max-w-sm sm:max-w-none mx-auto">
              <a 
                href="https://wa.me/17186684216?text=Hey%21%20how%20do%20I%20book%20my%20free%20consult?"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                    (window as any).gtag_report_conversion();
                  }
                }}
                className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transform whitespace-nowrap cursor-pointer border-0 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center justify-center">
                  Book a FREE Consult
                  <i className="ri-arrow-right-line ml-2 sm:ml-3 text-xl sm:text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
              </a>
            </div>
          </div>

          {/* Mobile-first responsive trust indicators */}
          <div className="mb-4">
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-6 lg:gap-8 opacity-60 max-w-xs sm:max-w-none mx-auto">
              <div className="flex items-center justify-center text-white/60 text-xs sm:text-sm font-medium">
                <i className="ri-shield-check-line mr-2 text-base sm:text-lg text-emerald-400"></i>
                100% Confidential
              </div>
              <div className="flex items-center justify-center text-white/60 text-xs sm:text-sm font-medium">
                <i className="ri-time-line mr-2 text-base sm:text-lg text-blue-400"></i>
                24/7 Emergency Line
              </div>
              <div className="flex items-center justify-center text-white/60 text-xs sm:text-sm font-medium">
                <i className="ri-award-line mr-2 text-base sm:text-lg text-purple-400"></i>
                Amazon Insider Network
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom premium fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}
