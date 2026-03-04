"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 w-full max-w-7xl mx-auto border-t border-white/10 relative"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#CCFF00] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 w-full items-center">
        <div>
          <h2 className="text-6xl sm:text-8xl font-bold tracking-tighter uppercase mb-6">
            Let&apos;s <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #ffffff" }}
            >
              Talk.
            </span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-md mb-12">
            Ready to stop being invisible online? Fill out the form. We&apos;ll
            get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-panel border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] font-bold">
                E
              </div>
              <p className="text-lg">hello@kua.agency</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border-white/10 shadow-2xl"
        >
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/50 uppercase tracking-widest pl-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#CCFF00] transition-colors text-white placeholder:text-white/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/50 uppercase tracking-widest pl-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#CCFF00] transition-colors text-white placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/50 uppercase tracking-widest pl-1">
                Project Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project, timeline, and goals..."
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#CCFF00] transition-colors text-white placeholder:text-white/20 resize-none"
              />
            </div>

            <button className="bg-[#CCFF00] text-black w-full py-5 rounded-xl font-bold uppercase tracking-wider text-lg hover:bg-white transition-colors mt-4">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
