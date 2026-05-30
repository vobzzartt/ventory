'use client'

import React from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import CallToAction from '@/components/call-to-action'
import { motion } from 'motion/react'
import { Mic, BarChart3, CloudOff, Store, MessageSquare, Boxes } from 'lucide-react'

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <HeroHeader />
            <main className="relative pt-32 pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20"
                        >
                            The Features
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                        >
                            Everything your shop needs. <br className="hidden sm:block" />
                            Nothing it doesn't.
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            Traditional POS systems force you to adapt to their complex menus. Ventory adapts to you, using AI and natural voice processing to handle inventory, sales, and accounting instantly.
                        </motion.p>
                    </div>

                    <div className="space-y-24">
                        {/* Feature 1 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1 bg-muted/30 border border-muted rounded-3xl p-8 aspect-square lg:aspect-auto lg:h-[500px] flex flex-col items-center justify-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                                <div className="p-6 bg-background border shadow-2xl rounded-2xl w-full max-w-sm space-y-4 relative z-10">
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                                        <div className="size-2 rounded-full bg-red-500 animate-pulse" />
                                        Listening to your voice...
                                    </div>
                                    <p className="text-lg font-medium">"Sold two bags of Dangote cement and one head pan to Mr. Chinedu."</p>
                                    <div className="pt-4 border-t flex items-center justify-between">
                                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">+₦18,500</span>
                                        <span className="text-xs text-muted-foreground">-2 Cement, -1 Pan</span>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="order-1 lg:order-2 space-y-6">
                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Mic className="size-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Voice-First Sales Logging</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Your hands are busy tending to customers. With Ventory, simply dictate your transactions as they happen. Our custom NLP engine understands local market dialects, automatically extracting the product, quantity, and price. 
                                </p>
                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center gap-3 text-muted-foreground"><CheckIcon /> 99% accuracy on local inventory names.</li>
                                    <li className="flex items-center gap-3 text-muted-foreground"><CheckIcon /> Background noise filtering for busy markets.</li>
                                    <li className="flex items-center gap-3 text-muted-foreground"><CheckIcon /> Zero manual data entry required.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Boxes className="size-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Real-Time Inventory Brain</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Never lose a sale because you didn't realize you were out of stock. Ventory maintains a dynamic ledger of every item in your shop, automatically updating balances the moment a voice log is processed.
                                </p>
                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center gap-3 text-muted-foreground"><CheckIcon /> Automated low-stock WhatsApp/SMS alerts.</li>
                                    <li className="flex items-center gap-3 text-muted-foreground"><CheckIcon /> Margin tracking on wholesale restocking.</li>
                                    <li className="flex items-center gap-3 text-muted-foreground"><CheckIcon /> Easy voice-based stock audits at closing time.</li>
                                </ul>
                            </div>
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-muted/30 border border-muted rounded-3xl p-8 aspect-square lg:aspect-auto lg:h-[500px] flex flex-col items-center justify-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent pointer-events-none" />
                                <div className="w-full max-w-sm space-y-4 relative z-10">
                                    {[
                                        { name: 'Peak Milk (Carton)', stock: '3', status: 'text-red-500', bg: 'bg-red-500/10' },
                                        { name: 'Milo Sachet (Roll)', stock: '45', status: 'text-green-500', bg: 'bg-green-500/10' },
                                        { name: 'Golden Penny Pasta', stock: '12', status: 'text-amber-500', bg: 'bg-amber-500/10' },
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 bg-background border shadow-sm rounded-xl flex items-center justify-between">
                                            <span className="font-medium">{item.name}</span>
                                            <div className={`px-3 py-1 rounded-md text-xs font-bold ${item.bg} ${item.status}`}>
                                                {item.stock} left
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Feature 3 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1 bg-muted/30 border border-muted rounded-3xl p-8 aspect-square lg:aspect-auto lg:h-[500px] flex flex-col items-center justify-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                                <div className="p-6 bg-background border shadow-2xl rounded-2xl w-full max-w-sm space-y-6 relative z-10">
                                    <div className="flex items-center gap-3 pb-4 border-b">
                                        <div className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                                            <MessageSquare className="size-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">AI Co-Pilot</h4>
                                            <span className="text-xs text-muted-foreground">Always active</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-muted p-3 rounded-lg rounded-tl-none text-sm inline-block">
                                            Good evening! You made ₦145,000 in revenue today across 42 sales.
                                        </div>
                                        <div className="bg-primary/10 text-primary p-3 rounded-lg rounded-tl-none text-sm inline-block">
                                            Your best selling item was Indomie (Hungry Man), generating ₦32,000. Note: You only have 2 cartons left!
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="order-1 lg:order-2 space-y-6">
                                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <BarChart3 className="size-6" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Conversational Business Intelligence</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Stop trying to decipher complicated charts. Your AI Co-Pilot analyzes your daily sales and sends you simple, plain-text summaries detailing exactly what happened in your shop today, and what actions you need to take tomorrow.
                                </p>
                                <ul className="space-y-3 pt-4">
                                    <li className="flex items-center gap-3 text-muted-foreground"><CheckIcon /> End-of-day Naira revenue summaries.</li>
                                    <li className="flex items-center gap-3 text-muted-foreground"><CheckIcon /> Trend detection (e.g. "Bread is selling faster on Tuesdays").</li>
                                    <li className="flex items-center gap-3 text-muted-foreground"><CheckIcon /> Ask questions naturally: "How much profit did I make this week?"</li>
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

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
