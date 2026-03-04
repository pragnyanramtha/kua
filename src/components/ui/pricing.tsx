"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
    name: string;
    price: string;
    yearlyPrice: string;
    period: string;
    features: string[];
    description: string;
    buttonText: string;
    href: string;
    isPopular: boolean;
    highlightColor?: string;
}

interface PricingProps {
    plans: PricingPlan[];
    title?: string;
    description?: string;
}

export function Pricing({
    plans,
    title = "Simple, Transparent Pricing",
    description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const switchRef = useRef<HTMLButtonElement>(null);

    return (
        <section id="pricing" className="py-32 px-6 w-full max-w-7xl mx-auto border-t border-white/10">
            <div className="text-center space-y-4 mb-24">
                <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter uppercase mb-6">
                    {title.split(" ").map((word, i) => (
                        word.toUpperCase().includes("PRICING") ?
                            <span key={i} className="text-transparent" style={{ WebkitTextStroke: "2px #CCFF00" }}>{word} </span> :
                            <span key={i}>{word} </span>
                    ))}
                </h2>
                <p className="text-white/60 text-xl font-light max-w-2xl mx-auto whitespace-pre-line">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                {plans.map((plan, index) => {
                    const isNumeric = !isNaN(Number(plan.price)) && plan.price !== "Custom";

                    return (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={
                                isDesktop
                                    ? {
                                        y: plan.isPopular ? -20 : 0,
                                        opacity: 1,
                                        scale: plan.isPopular ? 1.05 : 1.0,
                                    }
                                    : { opacity: 1, y: 0 }
                            }
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100,
                                damping: 30,
                                delay: index * 0.1,
                            }}
                            className={cn(
                                `rounded-3xl border p-10 bg-black/40 backdrop-blur-xl relative flex flex-col`,
                                plan.isPopular ? "border-[#FF0055]/50 shadow-[0_0_40px_-10px_rgba(255,0,85,0.2)]" : "border-white/10",
                                !plan.isPopular && "mt-0 md:mt-5",
                            )}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF0055] text-white py-1.5 px-6 rounded-full flex items-center shadow-lg z-20 whitespace-nowrap">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="ml-2 text-xs font-bold uppercase tracking-widest">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <div className="flex-1 flex flex-col">
                                <p className="text-xl font-medium mb-2">
                                    {plan.name}
                                </p>
                                <p className="text-muted-foreground text-sm h-12 flex items-center">
                                    {plan.description}
                                </p>
                                <div className="mt-8 mb-8 flex items-baseline gap-x-2">
                                    <span className="text-5xl font-bold tracking-tighter text-foreground" style={{ color: plan.highlightColor || "inherit" }}>
                                        {isNumeric ? (
                                            <span className="flex items-center">
                                                <span className="text-3xl mr-1">₹</span>
                                                <NumberFlow
                                                    value={Number(plan.price)}
                                                    format={{
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits: 0,
                                                    }}
                                                    transformTiming={{
                                                        duration: 500,
                                                        easing: "ease-out",
                                                    }}
                                                    willChange
                                                    className="font-variant-numeric: tabular-nums"
                                                />
                                            </span>
                                        ) : (
                                            plan.price
                                        )}
                                    </span>
                                    {isNumeric && plan.period && (
                                        <span className="text-sm font-semibold text-muted-foreground opacity-60 lowercase">
                                            / {plan.period}
                                        </span>
                                    )}
                                </div>

                                <ul className="flex-1 space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                                            <div className="mt-0.5 p-0.5 rounded-full bg-white/5 border border-white/10">
                                                <Check className="h-3 w-3 text-primary" />
                                            </div>
                                            <span className="text-left">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={plan.href}
                                    className={cn(
                                        buttonVariants({
                                            variant: plan.isPopular ? "default" : "outline",
                                        }),
                                        "w-full py-6 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300",
                                        plan.isPopular
                                            ? "bg-primary text-black hover:bg-primary/90 shadow-lg"
                                            : "border-white/10 hover:bg-white/5 hover:border-white/20"
                                    )}
                                >
                                    {plan.buttonText}
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
