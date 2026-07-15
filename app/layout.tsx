import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const pacifico = Pacifico({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-pacifico",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Appeal Partners - #1 Amazon Account Reinstatement Service | 93% Success Rate",
    description:
        "Get your suspended Amazon seller account reinstated in 7 days or less. 3,000+ accounts restored, $2.7M+ revenue recovered. Emergency Amazon appeal specialists with 93% success rate.",
    keywords:
        "Amazon account suspension, Amazon reinstatement, Amazon appeal service, suspended Amazon seller, Amazon account recovery, Amazon suspension help, Amazon seller reinstatement",
    authors: [{ name: "Appeal Partners" }],
    creator: "Appeal Partners",
    publisher: "Appeal Partners",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://appealpartners.com",
        siteName: "Appeal Partners",
        title: "Appeal Partners - #1 Amazon Account Reinstatement Service",
        description:
            "Get your suspended Amazon seller account reinstated in 7 days or less. 3,000+ accounts restored with 93% success rate.",
        images: [
            {
                url: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png",
                width: 1200,
                height: 630,
                alt: "Appeal Partners - Amazon Account Reinstatement Service",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Appeal Partners - #1 Amazon Account Reinstatement Service",
        description:
            "Get your suspended Amazon seller account reinstated in 7 days or less. 3,000+ accounts restored with 93% success rate.",
        images: [
            "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png",
        ],
        creator: "@appealpartners",
    },
    icons: {
        icon: [
            {
                url: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
        apple: [
            {
                url: "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        shortcut:
            "https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png",
    },
    manifest: "/manifest.json",
    other: {
        "msapplication-TileColor": "#1e40af",
        "theme-color": "#1e40af",
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: "#1e40af",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning={true}
            className="scroll-smooth"
        >
            <head>
                <link
                    rel="canonical"
                    href="https://appealpartners.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="google-site-verification"
                    content=""
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            name: "Appeal Partners",
                            description:
                                "Amazon account reinstatement and appeal service specialists",
                            url: "https://appealpartners.com",
                            telephone: "+1-213-757-9704",
                            email: "Sales@appealpartners.com",
                            address: {
                                "@type": "PostalAddress",
                                addressCountry: "US",
                            },
                            serviceType: "Amazon Account Reinstatement",
                            areaServed: "Worldwide",
                            hasOfferCatalog: {
                                "@type": "OfferCatalog",
                                name: "Amazon Appeal Services",
                                itemListElement: [
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Amazon Account Reinstatement",
                                            description:
                                                "Professional Amazon seller account suspension appeal service",
                                        },
                                    },
                                ],
                            },
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.9",
                                reviewCount: "3000",
                            },
                        }),
                    }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
            >
                {/* Wistia Player Script */}
                <Script
                    src="https://fast.wistia.com/player.js"
                    strategy="afterInteractive"
                />

                {/* Google Tag (gtag.js) - AW */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17829495758"
                    strategy="afterInteractive"
                />
                <Script id="google-ads" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-17829495758');
                        window.gtag = gtag;
                    `}
                </Script>

                {/* Google Analytics GA4 */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-DQCDFZ7NSN"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics-ga4" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-DQCDFZ7NSN');
                    `}
                </Script>

                {/* Call from Website - Phone 1 */}
                <Script id="call-tracking-1" strategy="afterInteractive">
                    {`
                        gtag('config', 'AW-17829495758/Np0uCOne-MUcEM6H4rVC', {
                            'phone_conversion_number': '+1 661-605-5819'
                        });
                    `}
                </Script>

                {/* Call from Website - Phone 2 */}
                <Script id="call-tracking-2" strategy="afterInteractive">
                    {`
                        gtag('config', 'AW-17829495758/-vnLCIWB3sccEM6H4rVC', {
                            'phone_conversion_number': '+1 718-668-4216'
                        });
                    `}
                </Script>

                {/* Google Ads Conversion */}
                <Script id="google-ads-conversion" strategy="afterInteractive">
                    {`
                        function gtag_report_conversion(url) {
                            var callback = function () {
                                if (typeof(url) != 'undefined') {
                                    window.location = url;
                                }
                            };
                            if (typeof window.gtag === 'function') {
                                window.gtag('event', 'conversion', {
                                    'send_to': 'AW-17829495758/HamtCNy24rMcEM6H4rVC',
                                    'event_callback': callback
                                });
                            }
                            return false;
                        }
                        window.gtag_report_conversion = gtag_report_conversion;
                    `}
                </Script>

                {children}

                {/* Email Click Event */}
                <Script id="email-click-event" strategy="afterInteractive">
                    {`
                        window.addEventListener('load', function(){
                            if (typeof jQuery !== 'undefined') {
                                jQuery('a[href="mailto:Sales@appealpartners.com"]').click(function(){
                                    gtag('event', 'Email Click', {'event_category': 'button', 'event_label': 'Email'});
                                });
                            }
                        });
                    `}
                </Script>
            </body>
        </html>
    );
}
