export default function StatsSection() {
    return (
        <section className="py-24 md:py-32 border-t border-muted/50">
            <div className="mx-auto max-w-6xl space-y-16 px-6">
                <div className="max-w-2xl space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Growth Statistics</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Ventory is a fast-moving retail co-pilot assisting micro-retailers across key markets. Our dedicated team drives tools powering a growing ecosystem of SME shop metrics.
                    </p>
                </div>

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-12">
                    <div className="space-y-3 border-l pl-8 border-primary/20">
                        <div className="text-5xl font-bold tracking-tighter">2025</div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Founded</p>
                    </div>
                    <div className="space-y-3 border-l pl-8 border-primary/20">
                        <div className="text-5xl font-bold tracking-tighter">99%</div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Voice accuracy</p>
                    </div>
                    <div className="space-y-3 border-l pl-8 border-primary/20">
                        <div className="text-5xl font-bold tracking-tighter">10x</div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Faster Logs</p>
                    </div>
                    <div className="space-y-3 border-l pl-8 border-primary/20">
                        <div className="text-5xl font-bold tracking-tighter text-primary">₦10M+</div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Sales Tracked</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
