"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
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
    const [isMonthly, setIsMonthly] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const switchRef = useRef<HTMLButtonElement>(null);

    const handleToggle = (checked: boolean) => {
        setIsMonthly(!checked);
        if (checked && switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            confetti({
                particleCount: 50,
                spread: 60,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
                colors: [
                    "#CCFF00",
                    "#FF0055",
                    "hsl(var(--primary))",
                    "hsl(var(--secondary))",
                ],
                ticks: 200,
                gravity: 1.2,
                decay: 0.94,
                startVelocity: 30,
                shapes: ["circle"],
            });
        }
    };

    return (
        <div className="container py-20 bg-background text-foreground">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-bold tracking-tight sm:text-7xl uppercase">
                    {title.split(" ").map((word, i) => (
                        word === "PRICING." ?
                            <span key={i} className="text-transparent" style={{ WebkitTextStroke: "1px #CCFF00" }}>{word} </span> :
                            <span key={i}>{word} </span>
                    ))}
                </h2>
                <p className="text-muted-foreground text-xl font-light max-w-2xl mx-auto whitespace-pre-line">
                    {description}
                </p>
            </div>

            <div className="flex justify-center items-center gap-4 mb-10">
                <span className={cn("text-sm font-medium", isMonthly ? "text-foreground" : "text-muted-foreground")}>One-time Payment</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <Label>
                        <Switch
                            ref={switchRef as any}
                            checked={!isMonthly}
                            onCheckedChange={handleToggle}
                            className="relative"
                        />
                    </Label>
                </label>
                <span className={cn("text-sm font-medium", !isMonthly ? "text-primary" : "text-muted-foreground")}>
                    Annual Support <span className="opacity-70">(Save 20%)</span>
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
                {plans.map((plan, index) => {
                    const isNumeric = !isNaN(Number(isMonthly ? plan.price : plan.yearlyPrice)) && plan.price !== "Custom";

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
                                `rounded-3xl border p-8 bg-black/40 backdrop-blur-xl relative flex flex-col`,
                                plan.isPopular ? "border-primary/50 shadow-[0_0_30px_-10px_rgba(204,255,0,0.3)]" : "border-white/10",
                                !plan.isPopular && "mt-0 md:mt-5",
                            )}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-black py-1 px-4 rounded-full flex items-center shadow-lg">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="ml-1 text-xs font-bold uppercase tracking-widest">
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
                                                    value={Number(isMonthly ? plan.price : plan.yearlyPrice)}
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
        </div>
    );
}
