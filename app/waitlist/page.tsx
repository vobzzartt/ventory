'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { CheckCircle2, Loader2, Mail, User, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function WaitlistPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (formState === 'loading') return

    // Basic client-side validation
    if (!name.trim()) {
      nameRef.current?.focus()
      return
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailRef.current?.focus()
      return
    }

    setFormState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }

      setFormState('success')
    } catch (err: unknown) {
      setFormState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <HeroHeader />
      <main className="flex-1 flex items-center justify-center min-h-screen pt-24 pb-16 px-4 bg-background">
        <div className="w-full max-w-xl mx-auto rounded-2xl border bg-card text-card-foreground shadow-sm p-8 md:p-12 relative overflow-hidden">
          {formState === 'success' ? (
            <div className="text-center animate-in fade-in zoom-in duration-500 relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-primary/5">
                  <CheckCircle2 className="size-8 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight mb-3">
                Welcome aboard, {name}!
              </h1>
              <p className="text-muted-foreground mb-8">
                We've added <span className="font-medium text-foreground">{email}</span> to our waitlist. 
                We will notify you as soon as your access to the platform is ready.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/5 p-3 ring-4 ring-primary/5">
                    <Server className="size-6 text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl font-semibold tracking-tight mb-3">
                  Request Early Access
                </h1>
                <p className="text-muted-foreground">
                  Join the waitlist to get early access to Ventory's enterprise-grade cloud infrastructure.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="waitlist-name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <input
                      id="waitlist-name"
                      ref={nameRef}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      disabled={formState === 'loading'}
                      className="flex h-11 w-full rounded-lg border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="waitlist-email" className="text-sm font-medium">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <input
                      id="waitlist-email"
                      ref={emailRef}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      disabled={formState === 'loading'}
                      className="flex h-11 w-full rounded-lg border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    />
                  </div>
                </div>

                {formState === 'error' && errorMsg && (
                  <div className="text-sm font-medium text-destructive bg-destructive/10 p-3 rounded-md">
                    {errorMsg}
                  </div>
                )}

                <Button 
                  type="submit" 
                  disabled={formState === 'loading'}
                  className="w-full h-11 mt-2"
                  size="lg"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      Securing your spot...
                    </>
                  ) : (
                    'Join the Waitlist'
                  )}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                By joining, you agree to our <Link href="/terms" className="underline underline-offset-4 hover:text-primary transition-colors">Terms of Service</Link> and <Link href="/privacy" className="underline underline-offset-4 hover:text-primary transition-colors">Privacy Policy</Link>.
              </p>
            </div>
          )}
        </div>
      </main>
      <FooterSection />
    </>
  )
}
