"use client";

import { useEffect, useState } from "react";

const testimonials = [
    {
        quote:
            "Ventory has completely changed how I run my provisions store in Lagos. I just tell the AI what I sold using my voice, and it handles the calculations. I save 2 hours every single day!",
        name: "Mrs. Chinwe",
        role: "Kiosk Owner, Yaba Markets",
        initials: "MC"
    },
    {
        quote:
            "Tapping the mic to log stock and transactions has saved us thousands in lost revenue. I don't need spreadsheets or paper books anymore. Ventory makes business management effortless.",
        name: "Emeka Nnamdi",
        role: "Retail Merchant, Wuse Market Abuja",
        initials: "EN"
    },
    {
        quote:
            "Our sales tracking is now 100% automated. The real-time low stock warnings prevent us from running out of best-selling products like Peak Milk and Milo.",
        name: "Alhaji Ibrahim",
        role: "Provisions Storefront, Kano Central",
        initials: "AI"
    }
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="py-24 md:py-32 bg-muted/10 border-y border-muted/50">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-3xl relative min-h-[300px] flex items-center">
                    {testimonials.map((testimonial, idx) => (
                        <blockquote
                            key={testimonial.name}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center ${
                                idx === current ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-4 z-0 pointer-events-none"
                            }`}
                            aria-hidden={idx !== current}
                        >
                            <p className="text-xl font-medium sm:text-2xl md:text-3xl tracking-tight leading-relaxed italic text-zinc-800 dark:text-zinc-200">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div className="mt-12 flex items-center gap-6">
                                <div className="size-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-xs tracking-widest border border-zinc-800">
                                    {testimonial.initials}
                                </div>
                                <div className="space-y-1">
                                    <cite className="font-bold not-italic text-sm uppercase tracking-widest">{testimonial.name}</cite>
                                    <span className="text-muted-foreground block text-xs font-medium">{testimonial.role}</span>
                                </div>
                            </div>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
