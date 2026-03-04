"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "How long does a website take to build?",
        a: "For our Starter Landing page, typical turnaround is 3-5 days. Business & SEO sites usually take 2-4 weeks. Custom enterprise projects demand a dedicated timeline based on scope.",
    },
    {
        q: "Do you guarantee SEO rankings?",
        a: "We guarantee a scientifically structured, lightning-fast foundation based on modern technical SEO. While no one can guarantee reaching #1 unconditionally due to competition, our methods consistently put brands at the top of their niche.",
    },
    {
        q: "Why are there no templates?",
        a: 'Templates dilute brand identity. We practice "Deep Design Thinking", ensuring every project has unique geometry, animation curves, and interactions that make it memorable (no generic split-screens here).',
    },
    {
        q: "What is the payment structure?",
        a: "Standard projects require a 50% deposit to commence work with the remaining balance due upon successful test rollout before final launch. Custom projects can be milestone-based.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="py-32 px-6 w-full max-w-4xl mx-auto border-t border-white/10"
        >
            <div className="mb-16">
                <h2 className="text-5xl font-bold tracking-tighter uppercase mb-2">
                    FAQ
                    <span className="text-[#FF0055]">.</span>
                </h2>
                <p className="text-white/50 text-xl font-light">
                    Questions, answered simply.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass-panel border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#CCFF00]/40" : "border-white/10"}`}
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-xl font-medium pr-8">{faq.q}</span>
                                <span
                                    className={`p-2 rounded-full border border-white/10 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#CCFF00] text-black border-transparent" : "text-white"}`}
                                >
                                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            <div
                                className="px-6 overflow-hidden transition-all duration-300 ease-in-out"
                                style={{
                                    maxHeight: isOpen ? "200px" : "0",
                                    opacity: isOpen ? 1 : 0,
                                    paddingBottom: isOpen ? "24px" : "0",
                                }}
                            >
                                <div className="w-full h-px bg-white/10 mb-6" />
                                <p className="text-white/60 font-light leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
