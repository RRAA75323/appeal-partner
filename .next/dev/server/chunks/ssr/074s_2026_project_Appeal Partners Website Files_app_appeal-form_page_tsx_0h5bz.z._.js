module.exports = [
"[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppealFormPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function AppealFormPage() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        countryCode: '+1',
        phoneNumber: '',
        appealType: '',
        yearsOnAmazon: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const countryCodes = [
        {
            code: '+1',
            country: 'US/Canada'
        },
        {
            code: '+44',
            country: 'UK'
        },
        {
            code: '+91',
            country: 'India'
        },
        {
            code: '+61',
            country: 'Australia'
        },
        {
            code: '+49',
            country: 'Germany'
        },
        {
            code: '+33',
            country: 'France'
        },
        {
            code: '+86',
            country: 'China'
        },
        {
            code: '+81',
            country: 'Japan'
        },
        {
            code: '+55',
            country: 'Brazil'
        },
        {
            code: '+52',
            country: 'Mexico'
        }
    ];
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        const webhookData = {
            name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phoneNumber}`,
            appealType: formData.appealType,
            yearsOnAmazon: formData.yearsOnAmazon
        };
        try {
            const response = await fetch('https://hooks.zapier.com/hooks/catch/21210663/uk6dbmr/', {
                method: 'POST',
                body: JSON.stringify(webhookData)
            });
            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    countryCode: '+1',
                    phoneNumber: '',
                    appealType: '',
                    yearsOnAmazon: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-900 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-gray-800 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png",
                                    alt: "Appeal Partners",
                                    className: "w-5 h-5 sm:w-6 sm:h-6 object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg sm:text-2xl font-medium text-white tracking-tight",
                                children: "Appeal Partners"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8 sm:mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight",
                                children: "Appeal Intake Form"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-gray-400 px-4",
                                children: "Fill out the form below and we'll get back to you shortly"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        id: "appeal-intake-form",
                        "data-readdy-form": true,
                        onSubmit: handleSubmit,
                        className: "bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5 sm:space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block text-sm font-semibold text-white mb-2",
                                                children: "Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                required: true,
                                                value: formData.name,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        name: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-white placeholder-gray-500",
                                                placeholder: "Enter your full name"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-semibold text-white mb-2",
                                                children: "Email *"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                required: true,
                                                value: formData.email,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        email: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-white placeholder-gray-500",
                                                placeholder: "your@email.com"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "phone",
                                                className: "block text-sm font-semibold text-white mb-2",
                                                children: "Phone Number *"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 sm:gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "countryCode",
                                                        value: formData.countryCode,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                countryCode: e.target.value
                                                            }),
                                                        className: "w-24 sm:w-auto px-2 sm:px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm pr-6 sm:pr-8 cursor-pointer text-white",
                                                        children: countryCodes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: item.code,
                                                                children: item.code
                                                            }, item.code, false, {
                                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        id: "phone",
                                                        name: "phoneNumber",
                                                        required: true,
                                                        value: formData.phoneNumber,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                phoneNumber: e.target.value
                                                            }),
                                                        className: "flex-1 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-white placeholder-gray-500",
                                                        placeholder: "123-456-7890"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "appealType",
                                                className: "block text-sm font-semibold text-white mb-2",
                                                children: "What Appeal is This? *"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "appealType",
                                                name: "appealType",
                                                required: true,
                                                value: formData.appealType,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        appealType: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm pr-8 cursor-pointer text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select appeal type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Amazon",
                                                        children: "Amazon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ASIN",
                                                        children: "ASIN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Walmart",
                                                        children: "Walmart"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "yearsOnAmazon",
                                                className: "block text-sm font-semibold text-white mb-2",
                                                children: "How Long Have You Been Selling on Amazon For? (years) *"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "yearsOnAmazon",
                                                name: "yearsOnAmazon",
                                                required: true,
                                                min: "0",
                                                step: "0.5",
                                                value: formData.yearsOnAmazon,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        yearsOnAmazon: e.target.value
                                                    }),
                                                className: "w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-white placeholder-gray-500",
                                                placeholder: "e.g., 2.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            submitStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 sm:mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-400 text-sm font-medium",
                                    children: "Thank you! Your form has been submitted successfully. We'll be in touch soon."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            submitStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 sm:mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-400 text-sm font-medium",
                                    children: "Something went wrong. Please try again."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting,
                                className: "mt-6 sm:mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02]",
                                children: isSubmitting ? 'Submitting...' : 'Submit Appeal Form'
                            }, void 0, false, {
                                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-6 sm:mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Previous$2d$Company$2f$FB__International__BD$2f$2026$2f$project$2f$Appeal__Partners__Website__Files$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm sm:text-base text-gray-400 hover:text-blue-400 transition cursor-pointer",
                            children: "← Back to Home"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Previous-Company/FB International BD/2026/project/Appeal Partners Website Files/app/appeal-form/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=074s_2026_project_Appeal%20Partners%20Website%20Files_app_appeal-form_page_tsx_0h5bz.z._.js.map