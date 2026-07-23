"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const footerLinks = [
        {
            title: "Quick Navigation",
            links: [
                {
                    name: "How It Works",
                    action: () => scrollToSection("process"),
                },
                {
                    name: "Why Choose Us",
                    action: () => scrollToSection("why-us"),
                },
                {
                    name: "Success Stories",
                    action: () => scrollToSection("testimonials"),
                },
                {
                    name: "Who We Help",
                    action: () => scrollToSection("who-we-help"),
                },
                {
                    name: "Get Started",
                    action: () => scrollToSection("emergency-appeal-form"),
                },
                { name: "Blogs", action: () => router.push("/blogs") },
            ],
        },
        {
            title: "Problems We Solve",
            links: [
                {
                    name: "Account Suspensions",
                    action: () => scrollToSection("problem"),
                },
                {
                    name: "Listing Removals",
                    action: () => scrollToSection("problem"),
                },
                {
                    name: "Frozen Funds",
                    action: () => scrollToSection("problem"),
                },
                {
                    name: "Emergency Appeals",
                    action: () => scrollToSection("emergency-appeal-form"),
                },
                {
                    name: "Fast-Track Process",
                    action: () => scrollToSection("process"),
                },
            ],
        },
        {
            title: "Get Help Now",
            links: [
                {
                    name: "About Appeal Partners",
                    action: () =>
                        window.scrollTo({ top: 0, behavior: "smooth" }),
                },
                {
                    name: "Our Success Rate",
                    action: () => scrollToSection("why-us"),
                },
                {
                    name: "Client Testimonials",
                    action: () => scrollToSection("testimonials"),
                },
                {
                    name: "Emergency Contact",
                    action: () => (window.location.href = "tel:+17186684216"),
                },
                {
                    name: "Start Your Appeal",
                    action: () => scrollToSection("emergency-appeal-form"),
                },
            ],
        },
    ];

    const socialLinks = [
        { icon: "ri-instagram-line", href: "https://www.instagram.com/appealpartners", label: "Instagram" },
        { icon: "ri-linkedin-line", href: "#", label: "LinkedIn" },
        { icon: "ri-twitter-x-line", href: "#", label: "Twitter" },
        { icon: "ri-facebook-line", href: "#", label: "Facebook" },
        { icon: "ri-youtube-line", href: "#", label: "YouTube" },
    ];

    return (
        <footer className="bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 sm:py-20">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 sm:gap-16 items-start">
                        {/* Left Column - Brand & CTA */}
                        <div
                            className={`transition-all duration-1200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        >
                            {/* Logo */}
                            <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
                                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden">
                                    <img
                                        src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/8fd2c099e8bb2b2a0fbbb3c14411f22a.png"
                                        alt="Appeal Partners"
                                        className="w-5 sm:w-6 h-5 sm:h-6 object-contain"
                                    />
                                </div>
                                <span className="text-lg sm:text-2xl font-medium text-white tracking-tight">
                                    Appeal Partners
                                </span>
                            </div>

                            {/* Mission Statement */}
                            <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 sm:mb-6 leading-relaxed">
                                Reinstating Amazon & Walmart Sellers
                                <br />
                                <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    one appeal at a time
                                </span>
                            </h3>

                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                                When Amazon suspends your account, we don&apos;t
                                just write appeals—we wage war for your business
                                survival using insider connections and proven
                                strategies.
                            </p>

                            {/* Contact Information */}
                            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <i className="ri-phone-line text-blue-400 text-lg sm:text-xl mr-2 sm:mr-3"></i>
                                    <span className="text-blue-300 font-semibold text-sm sm:text-base">
                                        Contact Us
                                    </span>
                                </div>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex items-center text-gray-300">
                                        <i className="ri-mail-line text-blue-400 text-sm mr-2 sm:mr-3 w-4 h-4 flex items-center justify-center"></i>
                                        <a
                                            href="mailto:Sales@appealpartners.com"
                                            className="hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base"
                                        >
                                            Sales@appealpartners.com
                                        </a>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <i className="ri-phone-line text-blue-400 text-sm mr-2 sm:mr-3 w-4 h-4 flex items-center justify-center"></i>
                                        <a
                                            href="tel:+17186684216"
                                            className="hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base"
                                        >
                                            +1 718-668-4216
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 sm:gap-6">
                                <div className="text-center">
                                    <div className="text-xl sm:text-2xl font-bold text-emerald-400">
                                        93%
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                                        Success Rate
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl sm:text-2xl font-bold text-blue-400">
                                        7 Days
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                                        Avg Resolution
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl sm:text-2xl font-bold text-purple-400">
                                        $2.7M+
                                    </div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                                        Funds Recovered
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Links and Emergency */}
                        <div className="space-y-8 sm:space-y-12">
                            {/* Navigation Links */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                                {footerLinks.map((section, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-1200 delay-${(index + 1) * 200} ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                                    >
                                        <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
                                            {section.title}
                                        </h4>
                                        <ul className="space-y-3 sm:space-y-4">
                                            {section.links.map(
                                                (link, linkIndex) => (
                                                    <li key={linkIndex}>
                                                        <button
                                                            onClick={
                                                                link.action
                                                            }
                                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm cursor-pointer text-left"
                                                        >
                                                            {link.name}
                                                        </button>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Emergency Contact - Now on the right */}
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <i className="ri-alarm-warning-line text-red-400 text-lg sm:text-xl mr-2 sm:mr-3"></i>
                                    <span className="text-red-300 font-bold text-sm sm:text-base">
                                        Emergency Suspension?
                                    </span>
                                </div>
                                <p className="text-red-200 text-xs sm:text-sm mb-3 sm:mb-4">
                                    Every minute counts. Get immediate help from
                                    our emergency response team.
                                </p>
                                <a
                                    href="tel:+17186684216"
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap inline-block text-sm sm:text-base"
                                >
                                    <div className="flex items-center">
                                        <i className="ri-phone-line mr-2 text-base sm:text-lg w-5 h-5 flex items-center justify-center"></i>
                                        <p>Emergency Hotline</p>
                                    </div>
                                    <p className="text-center">+1 718-668-4216</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6 sm:py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-500 text-xs sm:text-sm text-center lg:text-left">
                            2026 Appeal Partners. All rights reserved. Amazon
                            suspension recovery specialists.
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4 sm:space-x-6">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
                                    aria-label={social.label}
                                    target="_blank"
                                >
                                    <i
                                        className={`${social.icon} text-gray-400 group-hover:text-white transition-colors duration-300 text-sm sm:text-base`}
                                    ></i>
                                </Link>
                            ))}
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
                            <button
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }
                                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                            >
                                Privacy Policy
                            </button>
                            <Link
                                href="/terms"
                                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                            >
                                Terms of Service
                            </Link>
                            <button
                                onClick={() =>
                                    scrollToSection("emergency-appeal-form")
                                }
                                className="text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                            >
                                Get Help Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
