"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams(formData as any).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      });
      setStatus("success");
      // Reset form if needed, but showing success UI is better.
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 w-full max-w-7xl mx-auto border-t border-white/10 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 w-full items-center">
        <div>
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter uppercase mb-6">
            LET&apos;S{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px #CCFF00" }}
            >
              TALK.
            </span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-md mb-12">
            Ready to stop being invisible online? Fill out the form. We&apos;ll
            get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-panel border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00]">
                <Mail className="h-5 w-5" />
              </div>
              <p className="text-lg">pragnyanramtha@gmail.com</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border-white/10 shadow-2xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00] mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">MESSAGE SENT.</h3>
                <p className="text-white/60 max-w-xs">
                  We&apos;ve received your request and will be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[#CCFF00] hover:underline uppercase tracking-widest text-sm font-bold"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
                data-netlify="true"
                name="contact-form"
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/50 uppercase tracking-widest pl-1">
                      Name
                    </label>
                    <input
                      required
                      name="name"
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
                      required
                      name="email"
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
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, timeline, and goals..."
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#CCFF00] transition-colors text-white placeholder:text-white/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-[#CCFF00] text-black w-full py-5 rounded-xl font-bold uppercase tracking-wider text-lg hover:bg-white transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
