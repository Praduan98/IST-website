import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Insightstap – AI-Powered ABM, Performance Marketing, HubSpot Automation & B2B Growth Solutions',
  description: 'Run your B2B enterprise like an e-commerce store with Insightstap\'s AI-powered GTM systems. We deliver hyper-personalized ABM, performance marketing, HubSpot automation, and analytics to accelerate pipeline growth and lower CAC.',
  keywords: 'B2B Sales Automation, Account-Based Marketing, Performance Marketing, HubSpot Automation, AI GTM Systems, Intent Data, Sales Pipeline Growth, Marketing Automation, CRM Optimization, Revenue Operations',
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-[#0F172A] overflow-x-hidden" suppressHydrationWarning>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
