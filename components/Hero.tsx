"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [menuOpen]);

    const scrollToForm = () => {
        const formElement = document.getElementById("emergency-appeal-form");
        if (formElement) {
            formElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    const scrollToSection = (sectionId: string) => {
        setMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const menuItems = [
        {
            name: "Home",
            action: () => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
            },
        },
        { name: "How It Works", action: () => scrollToSection("process") },
        { name: "Why Choose Us", action: () => scrollToSection("why-us") },
        { name: "Who We Help", action: () => scrollToSection("who-we-help") },
        {
            name: "Success Stories",
            action: () => scrollToSection("testimonials"),
        },
        {
            name: "Get Started",
            action: () => scrollToSection("emergency-appeal-form"),
        },
    ];

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
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] transition-all duration-3000 ${mounted ? "animate-pulse" : ""}`}
                ></div>
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
                                src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/8fd2c099e8bb2b2a0fbbb3c14411f22a.png"
                                alt="Appeal Partners"
                                className="w-5 h-5 object-contain"
                            />
                        </div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    </div>
                    <div>
                        <span className="text-base font-semibold text-white tracking-tight">
                            Appeal Partners
                        </span>
                    </div>
                </div>
            </div>

            <div className="absolute top-5 left-4 lg:left-auto lg:right-32 z-40">
                <a
                    href="tel:661-605-5819"
                    className="inline-flex flex-col bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2 rounded-md font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transform whitespace-nowrap cursor-pointer"
                >
                    <p>+1 661-605-5819</p>
                </a>
            </div>

            {/* Hamburger Menu Button - Top Right */}
            <div className="absolute top-4 right-4 z-50">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="w-11 h-11 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    aria-label="Menu"
                >
                    <div className="w-5 h-4 flex flex-col justify-between">
                        <span
                            className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                        ></span>
                        <span
                            className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Slide-out Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 z-40 transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 sm:p-8 pt-20">
                    <nav className="space-y-2">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={item.action}
                                className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-base sm:text-lg cursor-pointer border border-transparent hover:border-white/20"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                        <a
                            href="tel:+17186684216"
                            className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base"
                        >
                            Call Us Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Overlay when menu is open */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* Main hero content */}
            <div className="relative z-20 text-center px-4 sm:px-6 max-w-7xl mx-auto w-full">
                <div
                    className={`transition-opacity duration-1500 ease-out ${mounted ? "opacity-100" : "opacity-0"}`}
                >
                    {/* Mobile & Tablet logo */}
                    <div className="mb-6 block lg:hidden pt-10">
                        <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 mx-auto w-fit">
                            <div className="relative">
                                <div className="w-10 sm:w-8 h-10 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center shadow-2xl overflow-hidden">
                                    <img
                                        src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/8fd2c099e8bb2b2a0fbbb3c14411f22a.png"
                                        alt="Appeal Partners"
                                        className="w-8 sm:w- h-8 sm:h-5 object-contain rounded-sm"
                                    />
                                </div>
                                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
                            </div>
                            <div>
                                <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                                    Appeal Partners
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Premium status badge - Desktop only */}
                    <div className="mb-6 sm:mb-8 hidden sm:block">
                        <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-2xl border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl">
                            <div className="flex items-center mr-3 sm:mr-4">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                                <span className="text-emerald-300 font-semibold text-xs uppercase tracking-wider">
                                    Live Success Rate
                                </span>
                            </div>
                            <div className="text-white font-bold text-lg sm:text-xl">
                                93.7%
                            </div>
                        </div>
                    </div>

                    {/* Mobile-optimized headline */}
                    <div className="mb-3 sm:mb-4">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 leading-[0.9] tracking-tighter"
                            style={{ fontFamily: "Clash Display, sans-serif" }}
                        >
                            The #1 Amazon Seller
                            <br />
                            Reinstatement Service
                        </h1>
                    </div>

                    {/* Mobile-optimized subheadline */}
                    <div className="mb-6 sm:mb-8">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-100/90 font-medium max-w-4xl mx-auto leading-snug px-2">
                            We fully reactivate Amazon & Walmart Seller Accounts
                            in 7 days or less.
                        </p>
                    </div>

                    {/* Premium status badge - Mobile only */}
                    <div className="mb-6 block sm:hidden">
                        <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-2xl border border-white/20 rounded-full px-3 py-2 shadow-2xl">
                            <div className="flex items-center mr-2">
                                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="text-emerald-300 font-semibold text-xs uppercase tracking-wider">
                                    Success Rate
                                </span>
                            </div>
                            <div className="text-white font-bold text-base">
                                93.7%
                            </div>
                        </div>
                    </div>

                    {/* Mobile-optimized stats showcase */}
                    <div className="mb-6 sm:mb-8 lg:mb-10">
                        <div className="grid md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 max-w-3xl mx-auto">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl lg:rounded-2xl px-3 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1 whitespace-nowrap">
                                    $2.7M+
                                </div>
                                <div className="text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider whitespace-nowrap">
                                    Revenue Released
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl lg:rounded-2xl px-3 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1 whitespace-nowrap">
                                    3,000+
                                </div>
                                <div className="text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider whitespace-nowrap">
                                    Accounts Restored
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg sm:rounded-xl lg:rounded-2xl px-3 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1 whitespace-nowrap">
                                    4.2 Days
                                </div>
                                <div className="text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider whitespace-nowrap">
                                    Avg Resolution
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile-optimized CTA buttons */}
                    <div className="mb-6 sm:mb-8 lg:mb-10">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto px-2">
                            <button
                                onClick={scrollToForm}
                                className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transform whitespace-nowrap cursor-pointer border-0 overflow-hidden w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                                <span className="relative z-10 flex items-center justify-center">
                                    Start My Appeal
                                    <i className="ri-arrow-right-line ml-2 text-lg sm:text-xl lg:text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
                                </span>
                            </button>

                            <Link
                                href="#process"
                                className="group text-white/80 hover:text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center"
                            >
                                <span className="border-b-2 border-white/30 group-hover:border-blue-400 transition-colors duration-300 pb-1">
                                    See How It Works
                                </span>
                                <i className="ri-arrow-down-line ml-2 text-lg sm:text-xl lg:text-2xl group-hover:translate-y-1 transition-transform duration-300"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile-optimized trust indicators */}
                    <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-2 sm:gap-4 lg:gap-6 opacity-60 max-w-xs sm:max-w-none mx-auto">
                            <div className="flex items-center justify-center text-white/60 text-xs sm:text-sm font-medium">
                                <i className="ri-shield-check-line mr-1.5 sm:mr-2 text-sm sm:text-base text-emerald-400 w-4 h-4 flex items-center justify-center"></i>
                                100% Confidential
                            </div>
                            <div className="flex items-center justify-center text-white/60 text-xs sm:text-sm font-medium">
                                <i className="ri-time-line mr-1.5 sm:mr-2 text-sm sm:text-base text-blue-400 w-4 h-4 flex items-center justify-center"></i>
                                24/7 Emergency Line
                            </div>
                            <div className="flex items-center justify-center text-white/60 text-xs sm:text-sm font-medium">
                                <i className="ri-award-line mr-1.5 sm:mr-2 text-sm sm:text-base text-purple-400 w-4 h-4 flex items-center justify-center"></i>
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
