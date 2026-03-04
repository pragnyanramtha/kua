"use client";

import { motion } from "framer-motion";
import { Search, Zap, LayoutTemplate, LineChart } from "lucide-react";

const features = [
  {
    icon: <LayoutTemplate size={32} className="text-[#CCFF00]" />,
    title: "Custom Design, Zero Templates",
    desc: "Every site we ship is built from scratch. No themes. No drag-and-drop. Your brand gets its own geometry, its own animation curves, its own personality. Templates dilute identity. We don\u2019t use them.",
  },
  {
    icon: <Search size={32} className="text-[#FF0055]" />,
    title: "SEO That Actually Ranks",
    desc: "We structure every page for Google\u2019s crawlers from day one. Clean URLs, schema markup, optimized Core Web Vitals, and keyword-mapped content. When someone searches your trade in your city, you show up first.",
  },
  {
    icon: <Zap size={32} className="text-[#CCFF00]" />,
    title: "Sub-Second Load Times",
    desc: "Built on Next.js and React. Server-rendered. Edge-cached. Your site loads in under 1 second on a 4G connection. Google rewards speed with ranking. Your visitors reward speed with their wallets.",
  },
  {
    icon: <LineChart size={32} className="text-[#FF0055]" />,
    title: "Every Pixel Earns Its Place",
    desc: "We don\u2019t decorate pages. We engineer them. Button placement, scroll depth, color contrast, whitespace \u2014 each decision is backed by conversion data. The sites we build don\u2019t just look good. They bring in calls.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 px-6 w-full max-w-7xl mx-auto border-t border-white/10"
    >
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-end mb-20">
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter max-w-2xl leading-none">
          WHAT WE{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px #FF0055" }}
          >
            DO.
          </span>
        </h2>
        <p className="max-w-md text-white/50 text-lg font-light mt-6 lg:mt-0">
          Striking aesthetics paired with ruthless search optimization. Built to
          pull your competitors&apos; customers straight to your door.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {features.map((feat, index) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group glass-panel rounded-2xl p-10 lg:p-12 hover:bg-white/10 border-white/10 transition-all cursor-pointer relative overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute top-0 right-0 p-32 bg-[#CCFF00] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />

            <div className="mb-8 p-4 glass-panel rounded-xl inline-block border-white/10">
              {feat.icon}
            </div>
            <h3 className="text-3xl font-semibold mb-4 tracking-tight">
              {feat.title}
            </h3>
            <p className="text-white/60 font-light text-lg leading-relaxed">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
