import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap, Shield, Globe, Network } from 'lucide-react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section id="features" className="bg-zinc-50 py-24 md:py-32 dark:bg-transparent border-t border-muted/50">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Intelligent Features for Modern Retail.</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Ventory delivers the critical tools needed by small and medium retail shop owners. We build smart, voice-driven features to make daily business tracking completely effortless.
                    </p>
                </div>
                
                <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-16 grid max-w-sm divide-y overflow-hidden shadow-sm *:text-center">
                    <div className="group p-8">
                        <CardHeader className="pb-3">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Network className="size-6" />
                            </div>
                            <h3 className="font-bold text-lg">Voice-First Sales Logging</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">Speak naturally to record sales and restocks in seconds. No complex spreadsheet forms or paper ledger notebooks needed.</p>
                        </CardContent>
                    </div>

                    <div className="group p-8">
                        <CardHeader className="pb-3">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Shield className="size-6" />
                            </div>
                            <h3 className="font-bold text-lg">Live Inventory Tracking</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">Dynamic stock level adjustments and automatic color-coded warnings so you instantly know what needs replenishment.</p>
                        </CardContent>
                    </div>

                    <div className="group p-8">
                        <CardHeader className="pb-3">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Sparkles className="size-6" />
                            </div>
                            <h3 className="font-bold text-lg">Daily Business Insights</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">Automatic daily Naira revenue computations and quick shop performance summaries delivered directly via the AI Co-Pilot.</p>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>
    )
}
