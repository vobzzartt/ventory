'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (res.ok) {
                setSubmitted(true)
            } else {
                alert('Failed to send message. Please try again.')
            }
        } catch (error) {
            alert('An error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <HeroHeader />
            
            <main className="relative pt-32 pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 text-zinc-100 text-[10px] font-bold uppercase tracking-[0.2em] border border-zinc-800">
                                    Inquiries
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Connect with Ventory.</h1>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                                    Whether you have questions about our product, want to partner with us, or need support with your shop co-pilot, reach out to our team.
                                </p>
                            </div>

                            <div className="space-y-8 border-t pt-10">
                                <div className="flex items-start gap-4">
                                    <div className="size-5 mt-1 text-primary">
                                        <Mail className="size-full" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest mb-1">General Support</h3>
                                        <a href="mailto:hello@ventory.app" className="text-muted-foreground hover:text-primary transition-colors">
                                            hello@ventory.app
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border rounded-2xl p-8 lg:p-10 shadow-sm">
                            {submitted ? (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-12 space-y-4"
                                >
                                    <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                                        <Send className="size-6" />
                                    </div>
                                    <h2 className="text-xl font-bold">Message Received.</h2>
                                    <p className="text-muted-foreground">Our team will review your inquiry and get back to you within 24 hours.</p>
                                    <Button variant="link" onClick={() => setSubmitted(false)} className="mt-4">
                                        Send another message
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                                            <Input name="name" required placeholder="Full Name" className="bg-muted/30 border-muted rounded-lg h-11" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                                            <Input name="email" required type="email" placeholder="email@address.com" className="bg-muted/30 border-muted rounded-lg h-11" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                                        <Input name="subject" required placeholder="Inquiry Subject" className="bg-muted/30 border-muted rounded-lg h-11" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                                        <Textarea name="message" required placeholder="How can we collaborate?" className="bg-muted/30 border-muted rounded-lg min-h-[120px] resize-none" />
                                    </div>
                                    <Button disabled={isSubmitting} type="submit" className="w-full h-11 font-bold text-sm">
                                        {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            
            <FooterSection />
        </div>
    )
}
