'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Terminal, Cpu, Database, Network, Sparkles } from 'lucide-react'

// Ventory Live Operations Terminal
const LabTerminalOutput = () => {
  const [lines, setLines] = useState<string[]>([])
  
  const sequence = [
    { text: "> Iya Sukura (Ibadan): Just sold 3 tubers of Yam & 1 Palm Oil bottle", delay: 600 },
    { text: "> [LOG] Iya Sukura stock level updated: Yam count is 14 remaining", delay: 500 },
    { text: "> Baba Ganiyu (Lekki): Logged purchase of 5 crates of eggs for store", delay: 800 },
    { text: "> [LOG] Baba Ganiyu inventory added: Egg count is 150 total", delay: 400 },
    { text: "> Mama Chinedu (Enugu): Checked daily retail sales performance", delay: 900 },
    { text: "> [LOG] Daily Revenue for Mama Chinedu: ₦35,400 from 18 sales", delay: 500 },
    { text: "> Alhaji Musa (Kano Grain Kiosk): Logged sale of 2 bags of local rice", delay: 700 },
    { text: "> [STOCK ALERT] Alhaji Musa: Rice count is down to 4 bags left!", delay: 600 },
    { text: "> Wuse Market Butchery (Abuja): Logged sale of 10kg premium beef", delay: 850 },
    { text: "> [LOG] Butchery Daily margin computed: ₦22,000 processed", delay: 500 },
    { text: "> Iya Sukura (Ibadan): Recorded 1 Yam sachet restock purchase", delay: 700 },
    { text: "> Baba Ganiyu (Lekki): Sales checked - Top product today is Eggs", delay: 950 },
    { text: "> Mama Chinedu (Enugu): Recorded 1 Peak Milk tin sales log", delay: 600 },
    { text: "> [STOCK ALERT] Mama Chinedu: Peak Milk stock low (only 3 left!)", delay: 500 },
    { text: "> Alhaji Musa (Kano): Logged sale of 1 bag of groundnut seeds", delay: 700 },
    { text: "> Wuse Butchery (Abuja): Sales checked - Beef is the top seller", delay: 900 },
    { text: "> Iya Sukura (Ibadan): Checked daily profit margin... Total: ₦18,400", delay: 800 },
    { text: "> Baba Ganiyu (Lekki): Logged sale of 2 Fanta bottles", delay: 650 },
    { text: "> Mama Chinedu (Enugu): Daily sync finalized. Store status: SECURED", delay: 1000 },
    { text: "> [SUCCESS] Active operations logging. Kiosk network: ACTIVE", delay: 500 }
  ]

  useEffect(() => {
    let isActive = true
    let seqIndex = 0

    const runSequence = async () => {
      while (isActive) {
        if (seqIndex >= sequence.length) {
            await new Promise(r => setTimeout(r, 4000))
            if (isActive) {
                setLines([])
                seqIndex = 0
            }
            continue;
        }

        if (isActive) {
            setLines(prev => [...prev, sequence[seqIndex].text].slice(-10))
            await new Promise(r => setTimeout(r, sequence[seqIndex].delay))
            seqIndex++
        }
      }
    }
    
    runSequence()
    return () => { isActive = false }
  }, [])

  return (
    <div className="h-full w-full font-mono text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 overflow-hidden flex flex-col justify-end p-6 bg-background/40">
       <div className="flex flex-col gap-2.5">
          {lines.map((line, i) => (
             <p key={i} className={line.includes('SUCCESS') || line.includes('ACTIVE') ? 'text-green-600 dark:text-green-400 font-bold' : 'text-muted-foreground'}>{line}</p>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-primary animate-pulse">{'>'}</span>
            <div className="w-2 bg-primary h-4 animate-pulse"></div>
          </div>
       </div>
    </div>
  )
}

export function MetricsSection() {
  return (
    <section className="w-full py-20 lg:py-32 bg-muted/20 border-y border-muted/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Real-Time Shop Operations.</h2>
              <p className="text-lg text-muted-foreground">Observe how Ventory translates natural voice logs into structured database entries, inventory counts, and financial metrics.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Lab Terminal Block */}
          <Card className="lg:col-span-2 border-muted shadow-sm flex flex-col bg-background/50 backdrop-blur min-h-[450px]">
             <div className="flex items-center gap-2 px-5 py-4 border-b border-muted bg-muted/30 rounded-t-xl">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
                 </div>
                 <span className="ml-auto text-[10px] font-mono text-muted-foreground flex items-center gap-2 uppercase tracking-[0.2em] font-bold"><Terminal className="w-3 h-3"/> ventory://operations_v1</span>
             </div>
             <CardContent className="p-0 flex-1 relative rounded-b-xl overflow-hidden">
                 <LabTerminalOutput />
              </CardContent>
          </Card>

          {/* Research Status Block */}
          <Card className="lg:col-span-1 border-muted shadow-sm bg-background/50 flex flex-col overflow-hidden relative">
             <div className="px-6 py-5 border-b border-muted bg-muted/20 flex justify-between items-center">
                 <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">CONSOLE_STATUS</span>
                 <span className="text-[10px] font-bold text-primary flex items-center gap-2 tracking-[0.2em] uppercase"><Sparkles className="w-3 h-3" /> Live Feed</span>
             </div>
             
             <CardContent className="p-6 space-y-6 flex-1 flex flex-col justify-center">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Database className="size-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Voice Logger</p>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Active Sync</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Cpu className="size-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Inventory Database</p>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">99.9% Reliable</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <Network className="size-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ventory AI Engine</p>
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Fully Tuned</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-muted/50">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">Transcription Velocity</span>
                        <span className="text-[10px] font-bold text-primary">99.2%</span>
                    </div>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '99.2%' }}></div>
                    </div>
                </div>
             </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
