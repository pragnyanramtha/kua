"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center text-center z-10 w-full">
        {/* Layered Typography Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mix-blend-difference"
        >
          <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-bold tracking-tighter text-white uppercase wrap-break-word w-full">
            Websites Built
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
            >
              To Dominate
            </span>{" "}
            Search.
          </h1>
        </motion.div>

        {/* Floating Abstract Element for Liquid Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] border border-white/10 rounded-full mix-blend-overlay pointer-events-none"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.05, 1],
            borderRadius: ["50%", "40% 60% 70% 30% / 40% 50% 60% 50%", "50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-xl sm:text-2xl font-light text-white/60 max-w-2xl text-balance"
        >
          We build websites that rank. Not brochures that sit in a corner and
          collect dust. Technical SEO, custom design, and a pricing page you can
          actually read.{" "}
          <br className="hidden sm:block" />
          <span className="text-[#CCFF00] font-medium">
            Transparent pricing. Zero BS.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#pricing"
            className="glass-panel text-white font-semibold py-4 px-8 rounded-full cursor-pointer hover:bg-white/10 transition-colors inline-block uppercase text-sm tracking-wide border-[#FF0055]/50"
          >
            View Pricing
          </a>
          <a
            href="#contact"
            className="bg-[#CCFF00] hover:bg-white text-black font-semibold py-4 px-8 rounded-full transition-colors inline-block uppercase text-sm tracking-wide"
          >
            Start a Project
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30vh" }}
        transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-12 w-px bg-linear-to-b from-[#CCFF0080] to-transparent hidden lg:block"
      />
    </section>
  );
}
