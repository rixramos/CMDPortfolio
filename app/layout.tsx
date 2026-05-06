import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: 'John Doe | Customer Experience Expert',
  description: 'Dedicated professional with expertise in delivering exceptional customer experiences and technical solutions. View my portfolio and get in touch.',
  keywords: ['customer support', 'technical support', 'portfolio', 'resume', 'customer experience'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    title: 'John Doe | Customer Experience Expert',
    description: 'Dedicated professional with expertise in delivering exceptional customer experiences and technical solutions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#00ff66',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
