"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Work", "Features", "Pricing", "FAQ", "Contact"];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-4 glass-panel rounded-2xl mx-auto max-w-7xl"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#CCFF00] rounded-sm flex items-center justify-center">
          <div className="w-3 h-3 bg-black rounded-full mix-blend-multiply" />
        </div>
        <span className="text-xl font-bold tracking-tighter">Kua.</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium text-white/70 hover:text-[#CCFF00] transition-colors relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="hidden md:flex">
        <button className="bg-transparent border border-white/10 text-white px-5 py-2 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors rounded-lg font-medium text-sm">
          Book a Call
        </button>
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[120%] left-0 w-full bg-black/95 backdrop-blur-2xl p-6 flex flex-col gap-6 rounded-2xl border border-white/10 md:hidden shadow-2xl"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link}
            </a>
          ))}
          <button className="w-full bg-[#CCFF00] text-black font-semibold py-3 rounded-lg mt-4">
            Book a Call
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
