module.exports = [
"[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Navbar = ()=>{
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navigateToHomeSection = (sectionId)=>{
        setMenuOpen(false);
        if (!sectionId) {
            window.location.href = "/";
            return;
        }
        window.location.href = `/#${sectionId}`;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        menuOpen
    ]);
    const menuItems = [
        {
            name: "Home",
            action: ()=>navigateToHomeSection()
        },
        {
            name: "How It Works",
            action: ()=>navigateToHomeSection("process")
        },
        {
            name: "Why Choose Us",
            action: ()=>navigateToHomeSection("why-us")
        },
        {
            name: "Who We Help",
            action: ()=>navigateToHomeSection("who-we-help")
        },
        {
            name: "Success Stories",
            action: ()=>navigateToHomeSection("testimonials")
        },
        {
            name: "Get Started",
            action: ()=>navigateToHomeSection("emergency-appeal-form")
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-30 hidden lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/8fd2c099e8bb2b2a0fbbb3c14411f22a.png",
                                        alt: "Appeal Partners",
                                        className: "w-5 h-5 object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-semibold text-white tracking-tight",
                                children: "Appeal Partners"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-5 right-32 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "tel:661-605-5819",
                    className: "inline-flex flex-col bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2 rounded-md font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transform whitespace-nowrap cursor-pointer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "+1 661-605-5819"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                        lineNumber: 85,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 h-full w-72 sm:w-80 bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 z-40 transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 sm:p-8 pt-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "space-y-2",
                            children: menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: item.action,
                                    className: "w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-base sm:text-lg cursor-pointer border border-transparent hover:border-white/20",
                                    children: item.name
                                }, index, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:+17186684216",
                                className: "block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base",
                                children: "Call Us Now"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-30",
                onClick: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 119,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setMenuOpen(!menuOpen),
                    className: "w-11 h-11 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer",
                    "aria-label": "Menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-5 h-4 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 133,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 136,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                                lineNumber: 139,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/components/Navbar.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
];

//# sourceMappingURL=074s_2026_project_Appeal%20Partners%20Website%20Files_components_Navbar_tsx_0_0e7cl._.js.map