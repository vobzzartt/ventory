import { Cpu, Zap, Shield, Layers, Box, Globe, Binary, Anchor } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-24 md:py-32">
            <div className="mx-auto max-w-6xl space-y-12 px-6">
                <div className="max-w-2xl space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for the next decade of retail growth.</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Ventory is the technology co-pilot behind a growing network of modern micro-retail stores. We engineer conversational interfaces that ensure <span className="font-medium text-foreground">transparency and profitability</span> for SME shop owners.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-primary">
                                    <Anchor className="size-4" />
                                    <h3 className="text-sm font-bold uppercase tracking-widest">Voice Operations depth</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">High-level natural voice note analysis with real-time text translation and action logging.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-primary">
                                    <Shield className="size-4" />
                                    <h3 className="text-sm font-bold uppercase tracking-widest">Business Security</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">Cloud database backups keeping all historical inventory and sales ledger records secure.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-primary">
                                    <Box className="size-4" />
                                    <h3 className="text-sm font-bold uppercase tracking-widest">Adaptive Systems</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">Flexible co-pilot intelligence that scales perfectly as your product listings and store locations expand.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-primary">
                                    <Layers className="size-4" />
                                    <h3 className="text-sm font-bold uppercase tracking-widest">Integrated Assistant</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">A unified conversational chat, database sync, and metrics reporting suite designed to feel as simple as WhatsApp.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10" />
                        <div className="border border-muted/50 rounded-2xl overflow-hidden p-1 bg-background/50">
                            <Image
                                src="/2150690154.jpg"
                                className="rounded-xl grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                                alt="Modern Engineering Systems"
                                width={1000}
                                height={667}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}