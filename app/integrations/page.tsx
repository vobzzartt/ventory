'use client'

import React from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import IntegrationsSection from '@/components/integrations-5'
import CallToAction from '@/components/call-to-action'

export default function IntegrationsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <HeroHeader />
            <main className="relative pt-32 pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <IntegrationsSection />
                </div>
            </main>
            <CallToAction />
            <FooterSection />
        </div>
    )
}
