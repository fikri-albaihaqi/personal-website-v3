import type { Metadata } from 'next'
import './globals.css'
import { kumbhSans } from './assets/fonts'
import Menu from './components/menu'
import Contact from './components/contact'
import { ReactLenis } from './utils/lenis'

export const metadata: Metadata = {
  title: 'Fikri Albaihaqi',
  description:
    "Hello! I'm Fikri, a 24 years old passionate Frontend Web Developer who like to build a pixel-perfect and beautiful websites.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Fikri Albaihaqi" />
        <meta
          name="google-site-verification"
          content="xRokpyLwNnjNgzDTWKghHMsdkERiejuVldjITFoiX7w"
        />
      </head>
      <ReactLenis root>
        <body className={`${kumbhSans.className} text-ivory`}>
          <div className="w-screen h-screen bg-[url('/bg-noise.gif')] opacity-10 fixed -z-50"></div>
          <Menu />
          {children}
          <Contact />
        </body>
      </ReactLenis>
    </html>
  )
}
