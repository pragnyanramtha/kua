import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Pricing } from "@/components/ui/pricing";
import { kuaPlans } from "@/components/ui/pricing-demo";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black text-white selection:bg-[#CCFF00] selection:text-black">
      {/* Liquid Glass Background effect */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#FF0055] opacity-20 blur-[120px] rounded-full mix-blend-screen animate-float" />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#CCFF00] opacity-15 blur-[120px] rounded-full mix-blend-screen animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <Navbar />

      <div className="z-10 w-full">
        <Hero />
        <Features />
        <Pricing
          plans={kuaPlans}
          title="TRANSPARENT PRICING."
          description="No hidden fees. No 'custom quote' runarounds. Pick a plan, and we get to work."
        />
        <Faq />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
