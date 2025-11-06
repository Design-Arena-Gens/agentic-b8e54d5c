import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Clean, modern portfolio showcasing visual work',
  metadataBase: new URL('https://agentic-b8e54d5c.vercel.app'),
  openGraph: {
    title: 'Portfolio',
    description: 'Clean, modern portfolio showcasing visual work',
    url: 'https://agentic-b8e54d5c.vercel.app',
    siteName: 'Portfolio',
    images: [
      {
        url: '/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Portfolio cover'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio',
    description: 'Clean, modern portfolio showcasing visual work'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans">
        <a href="#main" className="visually-hidden">Skip to content</a>
        <NavBar />
        <main id="main" className="py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
