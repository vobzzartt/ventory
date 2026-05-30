import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { PaystackLogo, FlutterwaveLogo, MoniepointLogo, KudaLogo } from './brand-logos'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16 border-y border-muted/50">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6 mb-8 md:mb-0">
                        <p className="text-center md:text-end text-sm font-medium text-muted-foreground uppercase tracking-widest">Powering local industry</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={100}>
                            
                            <div className="flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all px-8">
                                <PaystackLogo className="h-6 w-auto" />
                            </div>

                            <div className="flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all px-8">
                                <FlutterwaveLogo className="h-6" />
                            </div>

                            <div className="flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all px-8">
                                <MoniepointLogo className="h-5" />
                            </div>

                            <div className="flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all px-8">
                                <KudaLogo className="h-6" />
                            </div>

                            <div className="flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all px-8">
                                <div className="text-foreground font-bold text-lg">PiggyVest</div>
                            </div>

                            <div className="flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all px-8 text-foreground font-bold">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" fill="currentColor">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                                Interswitch
                            </div>

                            <div className="flex items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all px-8">
                                <div className="flex items-center gap-2 font-bold text-foreground">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                                    GitHub
                                </div>
                            </div>
                        </InfiniteSlider>

                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
                        
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20 z-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20 z-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
