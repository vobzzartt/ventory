'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, BarChart3, Users, Terminal, TrendingUp } from 'lucide-react'

// Ventory Business Terminal Sequence - Shop Operations & Market Sync Logs
const BusinessTerminalOutput = () => {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  
  const sequence = [
    { text: "> [SYNC] Connecting to Lagos Trade Association Union...", delay: 400 },
    { text: "> [LOG] Iya Sukura (Ibadan): Daily revenue synced ₦42,500...", delay: 600 },
    { text: "> [STOCK] Baba Ganiyu (Lekki): Added 5 cases of mineral water...", delay: 500 },
    { text: "> [UNION] Association of Yam Sellers: Standard wholesale rate verified...", delay: 800 },
    { text: "> [SMS] Alhaji Musa (Kano): Sales confirmation SMS dispatched to customer...", delay: 700 },
    { text: "--------- VENTORY RETAIL NETWORK SYNCED ---------", delay: 1000 },
    { text: "> [AUTO] Processing daily margins & payout calculation for 142 kiosks...", delay: 1200 },
    { text: "> [SUCCESS] Kiosk transaction updates pushed to live ledger successfully.", delay: 500 }
  ]

  useEffect(() => {
    let isActive = true
    let seqIndex = 0

    const runSequence = async () => {
      while (isActive) {
        if (seqIndex >= sequence.length) {
          await new Promise(r => setTimeout(r, 3000))
          if (isActive) {
            setLines([])
            seqIndex = 0
          }
          continue;
        }

        const item = sequence[seqIndex]
        setCurrentLine("")
        
        let typed = ""
        for (let i = 0; i < item.text.length; i++) {
          if (!isActive) break;
          typed += item.text[i]
          setCurrentLine(typed)
          await new Promise(r => setTimeout(r, 20))
        }

        if (isActive) {
          setLines(prev => [...prev, item.text])
          setCurrentLine("")
          await new Promise(r => setTimeout(r, item.delay))
          seqIndex++
        }
      }
    }
    
    runSequence()
    return () => { isActive = false }
  }, [])

  return (
    <div className="h-full w-full font-mono text-[13px] leading-tight sm:text-sm text-primary/90 overflow-hidden flex flex-col justify-end p-4">
       <div className="flex flex-col gap-1.5 opacity-90">
          <p className="text-muted-foreground">{'>'} Ventory Core v2.4.1 [ACTIVE]</p>
          {lines.map((line, i) => (
             <p key={i} className={line.includes('SUCCESS') || line.includes('SYNCED') ? 'text-green-500 font-semibold' : 'text-primary'}>{line}</p>
          ))}
          <p className="text-primary">{currentLine}<span className="inline-block w-2 bg-primary h-3.5 ml-1 animate-pulse align-middle"></span></p>
       </div>
    </div>
  )
}

const marketClusters = [
  { name: 'Lagos Market Union', baseValue: 92, value: 92, unit: '%', label: 'Stock Accuracy' },
  { name: 'Abuja Butchery Guild', baseValue: 94, value: 94, unit: '%', label: 'Daily Margin' },
  { name: 'Kano Grain Association', baseValue: 78, value: 78, unit: '%', label: 'Sync Rate' },
  { name: 'Enugu Retail Coalition', baseValue: 85, value: 85, unit: '%', label: 'Active Users' },
  { name: 'Ibadan Yam Union', baseValue: 88, value: 88, unit: '%', label: 'Delivery Velocity' },
]

export function BigBoostMetricsSection() {
  const [salesVolume, setSalesVolume] = useState(42.5)
  const [activeShops, setActiveShops] = useState(125) // 125k
  const [transactions, setTransactions] = useState(11200)

  useEffect(() => {
    const interval = setInterval(() => {
      setSalesVolume(prev => {
        const next = Math.max(40, Math.min(48, prev + (Math.random() - 0.5) * 0.5))
        return Number(next.toFixed(1))
      })
      setActiveShops(prev => {
        const next = Math.max(120, Math.min(128, prev + (Math.random() - 0.5) * 1))
        return Number(next.toFixed(0))
      })
      setTransactions(prev => {
        const next = prev + (Math.random() > 0.5 ? 1 : -1)
        return Math.max(11000, Math.min(12000, next))
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-20 lg:py-32 bg-muted/20 border-y border-muted overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900">Market Cluster Analytics.</h2>
              <p className="text-lg text-muted-foreground">Aggregating live transaction volumes, stock levels, and vendor performance rates across major trade groups and regional associations.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,_auto)]">
          
          {/* Terminal Block */}
          <Card className="lg:col-span-1 border-muted shadow-sm flex flex-col bg-background/50 backdrop-blur">
             <div className="flex items-center gap-2 px-4 py-3 border-b border-muted bg-muted/40 rounded-t-xl">
                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-400"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
                 <span className="ml-auto text-[10px] font-mono text-muted-foreground flex items-center gap-2 uppercase tracking-tighter"><Terminal className="w-3 h-3"/> ventory://terminal_v2</span>
             </div>
             <CardContent className="p-0 flex-1 relative bg-background/80 rounded-b-xl">
                 <BusinessTerminalOutput />
             </CardContent>
          </Card>

          {/* Metrics 2x2 Block */}
          <div className="lg:col-span-1 grid grid-cols-2 grid-rows-2 gap-4">
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{salesVolume}%</span>
                <span className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">Transaction Volume</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse"></div>
                   <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-wider">Live</span>
                </div>
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{activeShops}K</span>
                <span className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">Active Shops</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">94.2%</span>
                <span className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">Stock Sync Rate</span>
             </Card>
             <Card className="flex flex-col justify-center items-start p-6 border-muted shadow-sm bg-background/50">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{transactions.toLocaleString()}</span>
                <span className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">Daily Invoices</span>
             </Card>
          </div>

          {/* Map Status Block */}
          <Card className="lg:col-span-1 row-span-2 border-muted shadow-sm bg-background/50 flex flex-col overflow-hidden relative">
             <div className="px-6 py-5 border-b border-muted bg-muted/20 flex justify-between items-center">
                 <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">MARKET_CLUSTERS.MAP</span>
                 <span className="text-[10px] font-bold text-zinc-900 flex items-center gap-2"><Sparkles className="w-3 h-3" /> Real-time Sync</span>
             </div>
             
             <div className="h-64 w-full relative bg-zinc-50 border-b border-muted overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
                <TrendingUp className="size-32 text-zinc-200" />
                <span className="text-[10px] z-10 font-mono text-muted-foreground absolute bottom-3 right-3 uppercase">kiosk_sync_projection.v4</span>
             </div>
             
             <CardContent className="p-0 flex-1 flex flex-col">
                <div className="p-6">
                    <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-4 text-[10px] font-mono text-muted-foreground border-b border-muted/50 pb-2 uppercase tracking-wide">
                        <span>Trade Association</span>
                        <span>Engagement</span>
                        <span>Status</span>
                    </div>
                    <div className="space-y-3">
                        {marketClusters.map((region) => (
                            <div key={region.name} className="grid grid-cols-[1fr_auto_auto] gap-4 text-sm items-center font-medium text-zinc-900">
                                <span>{region.name}</span>
                                <span className="text-primary font-bold">{region.value}{region.unit}</span>
                                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                                    Connected
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-auto border-t border-muted bg-muted/10 p-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Network Efficiency</span>
                        <span className="text-[10px] font-bold text-zinc-900">98% Active</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                        <div className="h-full bg-zinc-900 rounded-full transition-all duration-1000" style={{ width: '98%' }}></div>
                    </div>
                </div>
             </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}

