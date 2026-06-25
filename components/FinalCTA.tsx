"use client";

import { useState, useEffect } from "react";

type UrgencyLevel = "critical" | "high" | "medium";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    suspensionReason: string;
    urgencyLevel: UrgencyLevel;
    additionalInfo: string;
};

export default function FinalCTA() {
    const [mounted, setMounted] = useState(false);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        suspensionReason: "",
        urgencyLevel: "high",
        additionalInfo: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    useEffect(() => {
        setMounted(true);

        const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = endTime - now;

            if (timeLeft > 0) {
                setCountdown({
                    days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(
                        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                    ),
                    minutes: Math.floor(
                        (timeLeft % (1000 * 60 * 60)) / (1000 * 60),
                    ),
                    seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        if (
            !formData.firstName.trim() ||
            !formData.lastName.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim()
        ) {
            setSubmitError("Please fill in all required fields");
            setIsSubmitting(false);
            return;
        }

        if (formData.additionalInfo.length > 500) {
            setSubmitError(
                "Additional information must be 500 characters or less",
            );
            setIsSubmitting(false);
            return;
        }

        try {
            const urgencyLabels: Record<UrgencyLevel, string> = {
                critical: "Critical - Immediate Action Required",
                high: "High - Within 24 Hours",
                medium: "Medium - Within 3 Days",
            };

            const webhookData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                suspensionReason: formData.suspensionReason,
                urgencyLevel: urgencyLabels[formData.urgencyLevel],
                additionalInfo: formData.additionalInfo,
            };

            const response = await fetch("https://appeal-partner-backend.vercel.app/api/zapier", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(webhookData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            setSubmitError("Failed to submit form. Please try again.");
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     const form = e.currentTarget;

    //     const formDataObj = new FormData(form);

    //     formDataObj.set(
    //         "urgencyLevel",
    //         {
    //             critical: "Critical - Immediate Action Required",
    //             high: "High - Within 24 Hours",
    //             medium: "Medium - Within 3 Days",
    //         }[formData.urgencyLevel],
    //     );

    //     // Send using browser form submission
    //     fetch("https://hooks.zapier.com/hooks/catch/21210663/uegpdxh/", {
    //         method: "POST",
    //         body: formDataObj,
    //         mode: "no-cors", // important
    //     });

    //     setSubmitted(true);
    // };

    const trustIndicators = [
        {
            icon: "ri-time-line",
            text: "24-hour response",
            color: "text-blue-500",
        },
        {
            icon: "ri-star-fill",
            text: "93% success rate",
            color: "text-yellow-500",
        },
        {
            icon: "ri-lock-line",
            text: "Confidential process",
            color: "text-purple-500",
        },
    ];

    const urgencyOptions = [
        {
            value: "critical",
            label: "Critical - Immediate Action Required",
            color: "text-red-400",
        },
        {
            value: "high",
            label: "High - Within 24 Hours",
            color: "text-orange-400",
        },
        {
            value: "medium",
            label: "Medium - Within 3 Days",
            color: "text-yellow-400",
        },
    ];

    const suspensionOptions = [
        {
            value: "amazon-seller-account-suspended",
            label: "Amazon seller account suspended",
            color: "text-red-400",
        },
        {
            value: "ASIN-suspension",
            label: "ASIN suspension",
            color: "text-orange-400",
        },
        {
            value: "walmart-account-suspended",
            label: "Walmart account suspended",
            color: "text-yellow-400",
        },
        {
            value: "reimbursments",
            label: "Reimbursments",
            color: "text-yellow-400",
        },
    ];

    return (
        <section 
        id="emergency-appeal-form"
        className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <div
                    className={`transition-all duration-1200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                    <div className="inline-flex items-center bg-red-500/20 border border-red-500/30 text-red-300 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-8 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                        Limited Time: Fast-Track Processing
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-[0.9] px-2">
                        Your Amazon Account
                        <br />
                        <span className="font-medium bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                            Reinstatement
                        </span>{" "}
                        Starts Now
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-200 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-tight font-light px-4">
                        Every minute your account stays suspended, you lose
                        revenue. Every day Amazon keeps your funds locked, your
                        dreams fade. Stop the bleeding. Start the comeback.
                    </p>

                    <div className="mb-6 sm:mb-8 lg:mb-12">
                        <div className="text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4 uppercase tracking-wider">
                            Fast-Track Deadline
                        </div>
                        <div className="flex justify-center space-x-2 sm:space-x-4 lg:space-x-8 px-2">
                            {Object.entries(countdown).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="text-center"
                                >
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 flex items-center justify-center">
                                        <span className="text-sm sm:text-lg lg:text-2xl font-bold text-white">
                                            {String(value).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="text-blue-300 text-xs mt-2 uppercase">
                                        {key}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12">
                            {!submitted ? (
                                <>
                                    <div className="mb-4 sm:mb-6 lg:mb-8 text-center">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                                            Amazon Seller Reinstatement Form
                                        </h3>
                                        <p className="text-blue-200 font-light text-sm sm:text-base">
                                            Complete this form to begin your
                                            fast-track reinstatement
                                        </p>
                                    </div>

                                    <form
                                        // id="emergency-appeal-form"
                                        onSubmit={handleSubmit}
                                        className="space-y-3 sm:space-y-4 lg:space-y-6"
                                    >
                                        {submitError && (
                                            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-red-300 text-sm">
                                                {submitError}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                                            <div>
                                                <label className="block text-white font-medium mb-2 sm:mb-3 text-left text-sm sm:text-base">
                                                    <i className="ri-store-3-line mr-2 text-emerald-400"></i>
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-blue-300 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 text-sm sm:text-base"
                                                    placeholder="Enter your first name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white font-medium mb-2 sm:mb-3 text-left text-sm sm:text-base">
                                                    <i className="ri-store-3-line mr-2 text-emerald-400"></i>
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-blue-300 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 text-sm sm:text-base"
                                                    placeholder="Enter your last name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div>
                                                <label className="block text-white font-medium mb-2 sm:mb-3 text-left text-sm sm:text-base">
                                                    <i className="ri-mail-line mr-2 text-blue-400"></i>
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-blue-300 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 text-sm sm:text-base"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                                            <div>
                                                <label className="block text-white font-medium mb-2 sm:mb-3 text-left text-sm sm:text-base">
                                                    <i className="ri-phone-line mr-2 text-purple-400"></i>
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-blue-300 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 text-sm sm:text-base"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-white font-medium mb-2 sm:mb-3 text-left text-sm sm:text-base">
                                                    <i className="ri-alarm-warning-line mr-2 text-yellow-400"></i>
                                                    Urgency Level
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        name="urgencyLevel"
                                                        value={
                                                            formData.urgencyLevel
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 text-sm sm:text-base appearance-none pr-8"
                                                    >
                                                        {urgencyOptions.map(
                                                            (option) => (
                                                                <option
                                                                    key={
                                                                        option.value
                                                                    }
                                                                    value={
                                                                        option.value
                                                                    }
                                                                    className="bg-gray-800 text-white"
                                                                >
                                                                    {
                                                                        option.label
                                                                    }
                                                                </option>
                                                            ),
                                                        )}
                                                    </select>
                                                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 pointer-events-none"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-white font-medium mb-2 sm:mb-3 text-left text-sm sm:text-base">
                                                <i className="ri-alarm-warning-line mr-2 text-yellow-400"></i>
                                                Suspension Reason
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="suspensionReason"
                                                    value={
                                                        formData.suspensionReason
                                                    }
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 text-sm sm:text-base appearance-none pr-8"
                                                >
                                                    {suspensionOptions.map(
                                                        (option) => (
                                                            <option
                                                                key={
                                                                    option.value
                                                                }
                                                                value={
                                                                    option.value
                                                                }
                                                                className="bg-gray-800 text-white"
                                                            >
                                                                {option.label}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 pointer-events-none"></i>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-white font-medium mb-2 sm:mb-3 text-left text-sm sm:text-base">
                                                <i className="ri-file-text-line mr-2 text-cyan-400"></i>
                                                Additional Information
                                            </label>
                                            <textarea
                                                name="additionalInfo"
                                                value={formData.additionalInfo}
                                                onChange={handleInputChange}
                                                rows={4}
                                                maxLength={500}
                                                className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-blue-300 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 resize-none text-sm sm:text-base"
                                                placeholder="Briefly describe your situation, timeline, and any urgent factors we should know about..."
                                            />
                                            <div className="text-right text-blue-300 text-xs mt-2">
                                                {formData.additionalInfo.length}
                                                /500 characters
                                            </div>
                                        </div>

                                        <div className="pt-2 sm:pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                onClick={() => {
                                                    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
                                                        (window as any).gtag_report_conversion();
                                                    }
                                                }}
                                                className="w-full group bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl whitespace-nowrap cursor-pointer border-0 relative overflow-hidden shadow-lg"
                                            >
                                                <span className="relative z-10 flex items-center justify-center">
                                                    {isSubmitting ? (
                                                        <>
                                                            <i className="ri-loader-4-line mr-3 animate-spin"></i>
                                                            <span className="hidden sm:inline">
                                                                Processing
                                                                Emergency
                                                                Appeal...
                                                            </span>
                                                            <span className="sm:hidden">
                                                                Processing...
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="hidden sm:inline">
                                                                Start Appeal
                                                                Process
                                                            </span>
                                                            <span className="sm:hidden">
                                                                Start Appeal
                                                                Process
                                                            </span>
                                                            <i className="ri-rocket-2-line ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                                                        </>
                                                    )}
                                                </span>

                                                {!isSubmitting && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-6 sm:py-8 lg:py-12">
                                    <div className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                                        <i className="ri-check-line text-2xl sm:text-3xl lg:text-4xl text-emerald-400"></i>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                                        Emergency Appeal Submitted!
                                    </h3>
                                    <p className="text-blue-200 mb-3 sm:mb-4 lg:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
                                        Your case has been prioritized for
                                        immediate review. Our Amazon specialists
                                        will contact you within 2 hours to begin
                                        your fast-track reinstatement process.
                                    </p>
                                    <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 max-w-md mx-auto">
                                        <div className="text-emerald-300 font-bold text-sm sm:text-base lg:text-lg mb-2">
                                            What happens next:
                                        </div>
                                        <div className="text-emerald-200 text-xs sm:text-sm space-y-1">
                                            <div>
                                                • Immediate case priority
                                                assignment
                                            </div>
                                            <div>
                                                • Expert consultation call
                                                within 2 hours
                                            </div>
                                            <div>
                                                • Custom appeal strategy
                                                development
                                            </div>
                                            <div>
                                                • Direct submission to Amazon
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
                        {trustIndicators.map((indicator, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                                style={{
                                    transitionDelay: `${index * 100 + 800}ms`,
                                }}
                            >
                                <i
                                    className={`${indicator.icon} text-lg sm:text-xl lg:text-2xl ${indicator.color} mb-1 sm:mb-2 lg:mb-3 block`}
                                ></i>
                                <div className="text-white text-xs sm:text-sm font-medium">
                                    {indicator.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto px-4">
                        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 backdrop-blur-sm">
                            <div className="flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                                <i className="ri-alarm-warning-line text-lg sm:text-xl lg:text-2xl text-yellow-400 mr-2 sm:mr-3"></i>
                                <span className="text-yellow-300 font-bold text-sm sm:text-base lg:text-lg">
                                    Critical Window Closing
                                </span>
                            </div>
                            <p className="text-yellow-200 text-xs sm:text-sm leading-relaxed">
                                Amazon&apos;s internal review cycles operate on
                                tight schedules. Missing this window could delay
                                your reinstatement by weeks. Your competitors
                                are already capturing your market share.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
