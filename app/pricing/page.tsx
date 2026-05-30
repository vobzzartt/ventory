'use client'

import React from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { PricingCalculator } from '@/components/pricing-calculator'
import CallToAction from '@/components/call-to-action'
import { motion } from 'motion/react'
import { Check, X, AlertTriangle } from 'lucide-react'

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <HeroHeader />
            <main className="relative pt-32 pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                        >
                            Powerful Local Tech. <br className="hidden sm:block" />
                            Honest Local Pricing.
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            We built Ventory specifically for the realities of African retail. Compare how much you save using an AI co-pilot designed for your market rather than forcing a foreign POS system to work for you.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto mb-24"
                    >
                        <PricingCalculator />
                    </motion.div>

                    {/* Comparison Section */}
                    <div className="max-w-5xl mx-auto py-16 border-t border-muted/50">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">Why Foreign Apps Fail Local Shops</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Tools like Square or Shopify POS are incredible—if you run a boutique in New York. But in a bustling Lagos market, they are often too fragile, too expensive, and demand constant internet.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* The "Others" Card */}
                            <div className="bg-muted/30 border border-muted rounded-3xl p-8 lg:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-red-500/10 text-red-600 rounded-xl">
                                        <AlertTriangle className="size-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Foreign POS Apps</h3>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 text-muted-foreground">
                                        <X className="size-6 text-red-500 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-foreground block mb-1">Hardware Dependent</strong>
                                            Require expensive tablets, proprietary card readers, and scanners just to log a simple sale.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 text-muted-foreground">
                                        <X className="size-6 text-red-500 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-foreground block mb-1">Always-On Internet Required</strong>
                                            When the network drops, your shop operations halt. You can't record sales offline reliably.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 text-muted-foreground">
                                        <X className="size-6 text-red-500 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-foreground block mb-1">Foreign Currencies & High Fees</strong>
                                            Pricing is pegged to the Dollar. As exchange rates fluctuate, your software costs skyrocket unpredictably.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 text-muted-foreground">
                                        <X className="size-6 text-red-500 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-foreground block mb-1">Heavy Manual Data Entry</strong>
                                            Requires intense typing and menu navigation—impossible when managing a crowd of impatient customers.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Ventory Card */}
                            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-bl-2xl">
                                    Our Approach
                                </div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-primary/20 text-primary rounded-xl">
                                        <Check className="size-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Ventory Co-Pilot</h3>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 text-muted-foreground">
                                        <Check className="size-6 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-foreground block mb-1">Voice-First Logging</strong>
                                            Just speak to your phone: "Sold 3 crates of eggs". Ventory logs it, updates inventory, and tracks revenue. No typing.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 text-muted-foreground">
                                        <Check className="size-6 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-foreground block mb-1">Offline-First Architecture</strong>
                                            Network completely dead? Keep speaking and logging. Ventory safely caches data locally and syncs automatically when signal returns.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 text-muted-foreground">
                                        <Check className="size-6 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-foreground block mb-1">Naira-First Pricing</strong>
                                            Flat, predictable pricing in Naira. Your operational costs shouldn't jump just because of FX volatility.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 text-muted-foreground">
                                        <Check className="size-6 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-foreground block mb-1">Zero Hardware Lock-in</strong>
                                            Runs directly on the smartphone you already own. We utilize the microphone and local storage to run a full retail engine.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <CallToAction />
            <FooterSection />
        </div>
    )
}
