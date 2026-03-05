"use client";

import { Pricing } from "@/components/ui/pricing";

export const kuaPlans = [
    {
        name: "Starter / Landing",
        price: "20000",
        yearlyPrice: "4000",
        period: "project",
        features: [
            "1 Landing Page",
            "Fully Mobile Responsive",
            "Live in 3–5 Days",
            "Basic On-Page SEO",
            "1 Round of Revisions",
        ],
        description: "One high-impact landing page to get you online fast. Ideal for new businesses.",
        buttonText: "Get Started",
        href: "#contact",
        isPopular: false,
        highlightColor: "#CCFF00",
    },
    {
        name: "Business & SEO",
        price: "50000",
        yearlyPrice: "16000",
        period: "project",
        features: [
            "Up to 5 Pages",
            "Advanced Technical SEO",
            "CMS Integration",
            "Copywriting Support",
            "Priority Support",
            "Performance Optimization",
            "Custom Domain Setup",
        ],
        description: "A full multi-page site engineered to rank on Google and convert visitors.",
        buttonText: "Get Started",
        href: "#contact",
        isPopular: true,
        highlightColor: "#FF0055",
    },
    {
        name: "Enterprise / Custom",
        price: "Custom",
        yearlyPrice: "Custom",
        period: "",
        features: [
            "Unlimited Pages",
            "Custom Logic / Web Apps",
            "Advanced State Management",
            "Dedicated Account Manager",
            "24/7 Uptime Monitoring",
            "Custom SLA",
            "Security Audits",
        ],
        description: "Complex web applications and large-scale builds scoped to your needs.",
        buttonText: "Contact Sales",
        href: "#contact",
        isPopular: false,
        highlightColor: "#FFFFFF",
    },
];

export function PricingBasic() {
    return (
        <div className="py-20">
            <Pricing
                plans={kuaPlans}
                title="TRANSPARENT PRICING."
                description="No hidden fees. No 'custom quote' runarounds. Pick a plan, and we get to work."
            />
        </div>
    );
}
