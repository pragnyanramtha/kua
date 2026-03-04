import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
});

export const metadata: Metadata = {
    title: "Kua | High-Performing Websites for Modern Brands",
    description:
        "We boost reach for modern brands with SEO-optimized, high-performing websites and transparent pricing.",
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
