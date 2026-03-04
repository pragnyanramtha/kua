"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "How long does a project take?",
        a: "Starter pages go live in 3\u20135 days. Multi-page Business & SEO sites typically take 2\u20134 weeks. Enterprise projects get a dedicated timeline scoped during our first call.",
    },
    {
        q: "Can you guarantee first-page Google rankings?",
        a: "No one can guarantee a specific ranking position \u2014 anyone who says otherwise is lying. What we guarantee is a technically flawless, search-optimized foundation. Clean code, fast load times, structured data, and keyword-targeted content. We\u2019ve consistently placed brands at the top of their local niche with this approach.",
    },
    {
        q: "Why no templates?",
        a: "Templates look like templates. Visitors can tell. We build from a blank canvas every time so your site feels like your brand, not a reskinned version of someone else\u2019s. Unique geometry, animation curves, and interactions that stick in memory.",
    },
    {
        q: "What\u2019s the payment structure?",
        a: "50% upfront to start. The remaining 50% after you\u2019ve reviewed a working test deployment and approved it. Enterprise projects can be structured around milestones. No surprises.",
    },
    {
        q: "What is GEO (Generative Engine Optimization)?",
        a: "When your customers ask ChatGPT, Perplexity, or Google AI for a recommendation in your industry, GEO ensures you\u2019re the name that comes up. We structure your content and online presence so AI systems cite and recommend your business.",
    },
    {
        q: "Do you handle hosting and maintenance?",
        a: "We can. We deploy on Vercel or similar edge platforms for maximum speed and uptime. Post-launch maintenance and updates are available as an add-on or part of Enterprise plans.",
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
