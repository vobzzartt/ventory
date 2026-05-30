import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the Waitlist — Ventory',
  description: 'Get early access to Ventory Cloud. Be the first to deploy on Africa\'s fastest cloud platform with elastic compute, Kubernetes, App Platform, and more.',
  openGraph: {
    title: 'Join the Ventory Waitlist',
    description: 'Get early access to Africa\'s fastest cloud platform.',
    url: 'https://ventory.com/waitlist',
    images: '/image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join the Ventory Waitlist',
    description: 'Get early access to Africa\'s fastest cloud platform.',
    images: '/image.png',
  },
}

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
