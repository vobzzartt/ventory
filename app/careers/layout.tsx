import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers — Shape the Future of Retail AI | Ventory',
  description: 'Join the Ventory team. We are looking for exceptional AI backend developers, frontend engineers, and speech recognition specialists to build co-pilots for retail businesses.',
  openGraph: {
    title: 'Careers — Ventory',
    description: 'Empowering small and medium enterprises with conversational co-pilots. Explore open roles in backend, frontend, and speech systems.',
    images: ['/careers-og.png'],
  }
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
