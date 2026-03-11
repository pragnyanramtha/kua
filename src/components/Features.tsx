"use client";

import { Search, Zap, LayoutTemplate, LineChart } from "lucide-react";
import AnimatedBackground from "@/components/ui/animated-background";

const features = [
  {
    icon: <LayoutTemplate size={32} className="text-[#CCFF00]" />,
    title: "Custom Design, Zero Templates",
    desc: "Every site we ship is built from scratch. No themes. No drag-and-drop. Your brand gets its own geometry, its own animation curves, its own personality.",
  },
  {
    icon: <Search size={32} className="text-[#FF0055]" />,
    title: "SEO That Actually Ranks",
    desc: "We structure every page for Google’s crawlers from day one. Clean URLs, schema markup, and optimized Core Web Vitals to ensure you show up first.",
  },
  {
    icon: <Zap size={32} className="text-[#CCFF00]" />,
    title: "Sub-Second Load Times",
    desc: "Built on Next.js and React. Server-rendered. Edge-cached. Your site loads in under 1 second on a 4G connection. Speed rewards with ranking.",
  },
  {
    icon: <LineChart size={32} className="text-[#FF0055]" />,
    title: "Every Pixel Earns Its Place",
    desc: "Each decision is backed by conversion data. The sites we build don’t just look good. They are engineered to bring in calls and sales.",
  },
];

export default function Features() {
  return (
    <section
      id="work"
      className="py-32 px-6 w-full max-w-7xl mx-auto border-t border-white/5"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <AnimatedBackground
          className="rounded-2xl bg-white/5 border border-white/10"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          {features.map((feat, index) => (
            <div
              key={feat.title}
              data-id={`feature-${index}`}
              className="group p-10 lg:p-12 w-full h-full flex flex-col items-start cursor-pointer"
            >
              <div className="mb-8 p-4 glass-panel rounded-xl inline-block border-white/10 group-hover:bg-white/10 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-3xl font-semibold mb-4 tracking-tight">
                {feat.title}
              </h3>
              <p className="text-white/60 font-light text-lg leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </AnimatedBackground>
      </div>
    </section>
  );
}

