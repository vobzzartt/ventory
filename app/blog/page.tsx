import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { FileText, Calendar, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Ventory',
  description: 'Read the latest updates, business insights, and retail scaling stories from the Ventory team.',
}

export default function BlogPage() {
  const posts = [
    {
      title: "Empowering Africa’s SME Retailers — The Ventory Story",
      date: "October 13, 2025",
      summary: "Africa's local markets are full of hustle, talent, and energy. This is the gap that led to Ventory—the voice-first shop assistant created specifically for local business owners.",
      slug: "/blog/ventory-story"
    }
  ]

  return (
    <>
      <HeroHeader />
      <main className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-32">
        <section className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 max-w-3xl mb-16 md:mb-24">
            <h1 className="text-4xl font-semibold lg:text-6xl tracking-tight">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Business guides, product updates, and success stories directly from the team building Africa's smartest retail co-pilot.
            </p>
          </div>

          <div className="grid gap-12 mb-24">
            {posts.map((post, i) => (
              <article key={i} className="group border-b border-muted pb-12 last:border-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <time>{post.date}</time>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-6 max-w-3xl">
                  {post.summary}
                </p>
                <Link href={post.slug} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  Read article <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  )
}
