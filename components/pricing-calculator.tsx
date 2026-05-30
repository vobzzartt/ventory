'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Store, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react'

// Base prices in USD
const BASE_PRICES = {
    plan: { starter: 5, growth: 20, enterprise: 80 },
    smsCredit: 0.005, // per SMS alert
    additionalKiosk: 3 // per additional kiosk branch
}

// Exchange rate mapping
const EXCHANGE_RATES = {
    NGN: 1500, // Nigerian Naira (Default & primary)
    USD: 1,
    GHS: 13.5, // Ghanaian Cedi
    KES: 130, // Kenyan Shilling
    ZAR: 19, // South African Rand
}

export function PricingCalculator() {
    const [currency, setCurrency] = useState<keyof typeof EXCHANGE_RATES>('NGN')
    
    // Inputs
    const [planTier, setPlanTier] = useState<'starter' | 'growth' | 'enterprise'>('starter')
    const [kioskBranches, setKioskBranches] = useState(1)
    const [smsCredits, setSmsCredits] = useState(500) // Monthly SMS receipt alerts

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let cost = 0;
        
        // Base plan tier cost
        cost += BASE_PRICES.plan[planTier]
        
        // Additional kiosks cost
        if (kioskBranches > 1) {
            cost += (kioskBranches - 1) * BASE_PRICES.additionalKiosk
        }
        
        // SMS credits cost (first 100 free in starter, 300 free in growth, 1000 free in enterprise)
        const freeSms = planTier === 'starter' ? 100 : planTier === 'growth' ? 300 : 1000
        if (smsCredits > freeSms) {
            cost += (smsCredits - freeSms) * BASE_PRICES.smsCredit
        }

        // Apply currency conversion
        cost = cost * EXCHANGE_RATES[currency]
        
        setTotal(cost)
    }, [planTier, kioskBranches, smsCredits, currency])

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0
        }).format(amount)
    }

    return (
        <Card className="w-full bg-muted/30 border-muted">
            <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Ventory Plan Estimator</h3>
                        <p className="text-sm text-muted-foreground">Select your kiosk tier and estimate monthly subscription costs.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-muted p-1 rounded-lg border">
                        <select 
                            value={currency} 
                            onChange={(e) => setCurrency(e.target.value as any)}
                            className="bg-transparent border-none text-sm font-medium focus:ring-0 px-2 py-1 cursor-pointer outline-none"
                        >
                            <option value="NGN">NGN (₦)</option>
                            <option value="USD">USD ($)</option>
                            <option value="GHS">GHS (₵)</option>
                            <option value="KES">KES (KSh)</option>
                            <option value="ZAR">ZAR (R)</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        {/* Plan Tier Selection */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 font-medium">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span>Ventory Plan Tier</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {(['starter', 'growth', 'enterprise'] as const).map((tier) => (
                                    <button
                                        key={tier}
                                        onClick={() => setPlanTier(tier)}
                                        className={`py-2.5 px-3 rounded-lg border text-sm font-semibold capitalize transition-all ${
                                            planTier === tier 
                                                ? 'bg-primary text-primary-foreground border-primary shadow-sm' 
                                                : 'bg-background hover:bg-muted/50 border-muted'
                                        }`}
                                    >
                                        {tier}
                                    </button>
                                ))}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                                {planTier === 'starter' && "Perfect for 1 shop kiosk. Includes 100 free monthly customer SMS alerts."}
                                {planTier === 'growth' && "Ideal for growing retailers. Includes 300 free monthly customer SMS alerts."}
                                {planTier === 'enterprise' && "For wholesale distributors and warehouses. Includes 1,000 free monthly SMS alerts."}
                            </div>
                        </div>

                        {/* Kiosk Branches */}
                        <div className="space-y-3 pt-4 border-t border-muted-foreground/10">
                            <div className="flex items-center gap-2 font-medium">
                                <Store className="w-4 h-4 text-primary" />
                                <span>Active Shop Branches / Kiosks</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="20" 
                                    step="1"
                                    value={kioskBranches}
                                    onChange={(e) => setKioskBranches(parseInt(e.target.value))}
                                    className="flex-1 accent-primary"
                                />
                                <div className="text-sm font-bold bg-background border border-muted px-3 py-1.5 rounded-lg w-16 text-center">
                                    {kioskBranches}
                                </div>
                            </div>
                        </div>

                        {/* SMS Credit Alerts */}
                        <div className="space-y-3 pt-4 border-t border-muted-foreground/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 font-medium">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                    <span>Monthly Customer SMS Alerts</span>
                                </div>
                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                    {planTier === 'starter' ? '100 Free' : planTier === 'growth' ? '300 Free' : '1000 Free'}
                                </span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="5000" 
                                    step="50"
                                    value={smsCredits}
                                    onChange={(e) => setSmsCredits(parseInt(e.target.value))}
                                    className="flex-1 accent-primary"
                                />
                                <div className="text-sm font-bold bg-background border border-muted px-3 py-1.5 rounded-lg w-20 text-center">
                                    {smsCredits}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:pl-8 md:border-l border-muted-foreground/10 flex flex-col justify-center">
                        <div className="bg-background rounded-xl p-8 border shadow-sm text-center">
                            <p className="text-muted-foreground text-sm font-medium mb-2">Estimated Kiosk Cost</p>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                                {formatCurrency(total)}<span className="text-sm font-medium text-muted-foreground">/mo</span>
                            </h2>
                            <p className="text-xs text-muted-foreground mt-4 pb-4 border-b">
                                Rates computed statefully based on active shop outlets and SMS thresholds. <br />No hidden fees. Cancel anytime.
                            </p>
                            
                            <div className="mt-6 flex flex-col gap-3">
                                <button className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium py-2.5 rounded-lg transition-colors">
                                    Activate Shop License
                                </button>
                                <button className="w-full bg-muted text-foreground hover:bg-muted/80 font-medium py-2.5 rounded-lg transition-colors">
                                    Get 7-Day Trial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
