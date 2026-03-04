import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
});

export const metadata: Metadata = {
    title: "Kua — High-Performing Websites for Modern Brands",
    description:
        "Kua builds custom websites that rank on Google and bring in higher-paying customers. Technical SEO, striking design, transparent pricing. No templates.",
    keywords: ["web design agency", "SEO", "custom website", "GEO", "business website", "India"],
    openGraph: {
        title: "Kua — Websites That Rank",
        description:
            "Custom web design + technical SEO for businesses tired of being invisible online. Transparent pricing starting at ₹5,000.",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
            <body
                className={`${jakarta.variable} font-sans bg-black text-white antialiased selection:bg-[#CCFF00] selection:text-black min-h-screen flex flex-col`}
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
