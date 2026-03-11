import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">Kua.</span>
          </div>
          <p className="text-white/50 font-light leading-relaxed">
            We build high-performance websites that force your brand to the top
            of its niche. No templates. No fluff. Results.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg text-white mb-2">Nav</h4>
            {[
              { name: "What We Do", href: "#work" },
              { name: "Pricing", href: "#pricing" },
              { name: "FAQ", href: "#faq" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/60 hover:text-[#CCFF00] transition-colors font-light"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-white/40 text-sm font-light">
        <p>
          &copy; {new Date().getFullYear()} Kua Agency. All rights reserved.
        </p>
        <p className="mt-2 sm:mt-0">Designed & Engineered with intensity.</p>
      </div>
    </footer>
  );
}
