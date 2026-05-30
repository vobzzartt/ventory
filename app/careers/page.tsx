'use client'

import React, { useState } from 'react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Briefcase, Code, Terminal, Send, CheckCircle2, Github, Linkedin, Clock, Layers, Sparkles, Upload } from 'lucide-react'

const jobOpenings = [
    {
        title: "Python AI Backend Engineer",
        description: "Build high-performance AI engines, Speech-to-Text streaming proxies, and Gemini co-pilot prompt architectures.",
        requirements: ["Strong proficiency in Python & FastAPI", "Experience with LLMs & Gemini API", "Knowledge of audio processing"],
        icon: <Code className="size-5" />
    },
    {
        title: "React/Next.js Frontend Engineer",
        description: "Develop premium, high-fidelity conversational interfaces, live audio recording triggers, and stateful widgets.",
        requirements: ["Proficiency in React & TypeScript", "Eye for detail and premium UI/UX", "Experience with browser audio APIs"],
        icon: <Terminal className="size-5" />
    },
    {
        title: "Speech Recognition Specialist",
        description: "Implement and optimize real-time local dialect transcription filters for Pidgin English and regional accents.",
        requirements: ["Deep understanding of Speech-to-Text models", "Experience with Google Cloud Speech API", "Accents mapping experience"],
        icon: <Layers className="size-5" />
    }
]

export default function CareersPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [selectedRole, setSelectedRole] = useState(jobOpenings[0].title)
    const [fileName, setFileName] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setFileName(file.name)
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        const formData = new FormData(e.currentTarget)
        formData.append('role', selectedRole)

        try {
            const response = await fetch('/api/careers', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                setSubmitted(true)
            }
        } catch (error) {
            console.error('Submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <HeroHeader />
            <main className="min-h-screen pt-24 md:pt-32 pb-24">
                <div className="mx-auto max-w-5xl px-6 space-y-24">
                    
                    {/* Hero Header */}
                    <div className="space-y-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 text-zinc-100 text-[10px] font-bold uppercase tracking-[0.2em] border border-zinc-800">
                            Join the Team
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Shape the Future of Retail AI.</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We are looking for exceptional developers and product thinkers to build the co-pilot layers that power small and medium businesses.
                        </p>
                    </div>

                    {/* Open Positions */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {jobOpenings.map((job) => (
                            <div 
                                key={job.title}
                                onClick={() => setSelectedRole(job.title)}
                                className={`p-8 rounded-2xl border transition-all cursor-pointer group ${
                                    selectedRole === job.title ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-muted hover:border-primary/50 bg-background'
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        {job.icon}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight">{job.title}</h3>
                                </div>
                                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                                    {job.description}
                                </p>
                                <ul className="space-y-3">
                                    {job.requirements.map((req, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                            <div className="size-1 rounded-full bg-primary" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Application Form */}
                    <section id="apply" className="max-w-3xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">Submit Your Application</h2>
                            <p className="text-muted-foreground">Applying for: <span className="text-primary font-bold">{selectedRole}</span></p>
                        </div>

                        {!submitted ? (
                            <form 
                                onSubmit={handleSubmit}
                                className="space-y-8 bg-muted/20 p-8 md:p-12 rounded-[2.5rem] border border-muted/50"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Full Name</label>
                                        <Input name="name" placeholder="Victor Bodude" required className="bg-background border-muted/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Email Address</label>
                                        <Input name="email" type="email" placeholder="hello@ventory.app" required className="bg-background border-muted/50" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest ml-1">GitHub / LinkedIn</label>
                                        <Input name="profile" placeholder="github.com/username" required className="bg-background border-muted/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Experience Years</label>
                                        <Input name="experience" type="number" placeholder="3" required className="bg-background border-muted/50" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Upload CV (PDF preferred)</label>
                                    <div className="relative">
                                        <input 
                                            type="file" 
                                            name="cv_file" 
                                            accept=".pdf,.doc,.docx"
                                            required 
                                            onChange={handleFileChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                                        />
                                        <div className="flex items-center gap-3 bg-background border border-muted/50 rounded-md px-3 py-2 text-sm text-muted-foreground">
                                            <Upload className="size-4" />
                                            <span>{fileName || "Choose file..."}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1">Why Ventory?</label>
                                    <Textarea name="motivation" placeholder="Tell us why you're interested in building AI co-pilots for shop owners..." required className="bg-background border-muted/50 min-h-[120px]" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1">How can you contribute?</label>
                                    <Textarea name="contribution" placeholder="Describe how you would approach speech recognition under unstable network states..." required className="bg-background border-muted/50 min-h-[120px]" />
                                </div>

                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full rounded-xl py-6 text-sm font-bold transition-all hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    {isSubmitting ? "Processing..." : "Submit Application"}
                                </Button>
                            </form>
                        ) : (
                            <div 
                                className="text-center py-20 bg-primary/5 rounded-[2.5rem] border border-primary/20 space-y-6"
                            >
                                <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                                    <CheckCircle2 className="size-10" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold tracking-tight">Application Received</h3>
                                    <p className="text-muted-foreground">We&apos;ve sent a confirmation to your email. Our team will review your application within 48 hours.</p>
                                </div>
                                <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another Application</Button>
                            </div>
                        )}
                    </section>
                </div>
            </main>
            <FooterSection />
        </>
    )
}
