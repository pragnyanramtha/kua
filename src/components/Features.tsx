"use client";

import { motion } from "framer-motion";
import { Search, Zap, LayoutTemplate, LineChart } from "lucide-react";

const features = [
  {
    icon: <LayoutTemplate size={32} className="text-[#CCFF00]" />,
    title: "Liquid & Premium Design",
    desc: "Unforgettable, award-winning visual experiences that command attention. We don't use templates.",
  },
  {
    icon: <Search size={32} className="text-[#FF0055]" />,
    title: "Technical SEO Mastery",
    desc: "Built from the ground up to dominate search algorithms, driving organic intent-based traffic directly to you.",
  },
  {
    icon: <Zap size={32} className="text-[#CCFF00]" />,
    title: "Extreme Performance",
    desc: "Sub-second load times. Modern architectures (Next.js & React) that outpace your competition.",
  },
  {
    icon: <LineChart size={32} className="text-[#FF0055]" />,
    title: "Conversion Focused",
    desc: "Every pixel and interaction is placed with psychological intent to turn visitors into buyers.",
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
          A lethal combination of striking aesthetics and ruthless search
          optimization. Designed to make your competitors sweat.
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
