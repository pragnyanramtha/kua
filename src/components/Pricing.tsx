"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter / Landing",
    price: "₹5,000",
    desc: "Perfect for new businesses needing an immediate high-end online presence.",
    features: [
      "1 Landing Page",
      "Mobile Responsive",
      "High-speed Setup",
      "Basic SEO",
      "1 Revision",
    ],
    isPopular: false,
    color: "#CCFF00",
  },
  {
    name: "Business & SEO",
    price: "₹20,000",
    desc: "A full-scale website built to capture leads and rank on Google.",
    features: [
      "Up to 5 Pages",
      "Advanced Tech SEO",
      "CMS Integration",
      "Copywriting Support",
      "Priority Support",
    ],
    isPopular: true,
    color: "#FF0055",
  },
  {
    name: "Enterprise / Custom",
    price: "Custom",
    desc: "Complex web applications, SaaS frontends, or massive e-commerce.",
    features: [
      "Unlimited Pages",
      "Custom Logic / Web Apps",
      "Advanced State Management",
      "Dedicated Account Manager",
      "24/7 Monitoring",
    ],
    isPopular: false,
    color: "#FFFFFF",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 px-6 w-full max-w-7xl mx-auto border-t border-white/10"
    >
      <div className="text-center mb-24">
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 uppercase">
          Transparent{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px #CCFF00" }}
          >
            Pricing.
          </span>
        </h2>
        <p className="text-white/60 text-xl font-light max-w-2xl mx-auto">
          No hidden fees. Just world-class design and engineering tailored to
          your ambition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className={`relative glass-panel rounded-3xl p-8 lg:p-10 flex flex-col h-full border ${plan.isPopular ? "border-[#FF0055]/50" : "border-white/10"}`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#FF0055] text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
            <p className="text-white/50 text-sm h-16">{plan.desc}</p>

            <div className="my-8">
              <span
                className="text-5xl font-bold tracking-tighter"
                style={{ color: plan.color }}
              >
                {plan.price}
              </span>
              {plan.price !== "Custom" && (
                <span className="text-white/40 font-light ml-2 text-lg">
                  /project
                </span>
              )}
            </div>

            <ul className="flex-1 space-y-4 mb-10">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-white/80">
                  <span className="p-1 rounded-full bg-white/10 border border-white/10">
                    <Check size={14} className="text-white" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              className="w-full py-4 rounded-xl font-semibold uppercase tracking-wider text-sm transition-colors border"
              style={{
                backgroundColor: plan.isPopular ? plan.color : "transparent",
                borderColor: plan.isPopular
                  ? plan.color
                  : "rgba(255,255,255,0.1)",
                color: plan.isPopular ? "#000" : "#fff",
              }}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
