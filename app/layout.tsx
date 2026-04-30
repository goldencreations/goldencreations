import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Golden eCards - Digital Invitation Cards | Tanzania',
  description: 'Tanzania\'s premier digital invitation and event management platform. Create stunning e-cards for weddings, birthdays, send-offs, and corporate events. WhatsApp & SMS delivery, QR code check-in, contribution tracking.',
  keywords: [
    'digital invitations',
    'e-cards',
    'Tanzania',
    'wedding invitations',
    'event management',
    'WhatsApp invitations',
    'harusi',
    'mialiko',
    'kadi za kidigitali',
    'kadi za mialiko',
    'mialiko ya kidigitali',
    'kadi za mialiko tanzania',
    'kadi za harusi',
    'mialiko ya harusi',
    'mialiko ya ndoa',
    'kadi za sendoff',
    'mialiko ya sendoff',
    'kadi za kitchen party',
    'mialiko ya kitchen party',
    'mialiko ya siku ya kuzaliwa',
    'kadi za birthday',
    'mialiko ya kikazi',
    'mialiko ya kampuni',
    'mialiko ya conference',
    'mialiko ya semina',
    'kadi za sherehe',
    'mwaliko wa mtandaoni',
    'mialiko whatsapp',
    'kadi za whatsapp',
    'mialiko ya sms',
    'kadi za kisasa',
    'e-card tanzania',
    'mialiko dar es salaam',
    'kadi za mialiko dar es salaam',
    'kadi za mialiko mwanza',
    'mialiko tanzania',
    'kadi za sherehe tanzania',
  ],
  authors: [{ name: 'Golden eCards' }],
  creator: 'Golden eCards',
  publisher: 'Golden eCards',
  metadataBase: new URL('https://goldencreationss.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_TZ',
    alternateLocale: 'sw_TZ',
    url: 'https://goldencreationss.com',
    siteName: 'Golden eCards',
    title: 'Golden eCards - Digital Invitation Cards | Tanzania',
    description: 'Transform your special moments with stunning digital invitations. Weddings, birthdays, send-offs & more. WhatsApp delivery, QR check-in, contribution tracking.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Golden eCards - Digital Invitation Cards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golden eCards - Digital Invitation Cards | Tanzania',
    description: 'Transform your special moments with stunning digital invitations across Tanzania.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Golden eCards",
              "description": "Tanzania's premier digital invitation and event management platform",
              "url": "https://goldencreationss.com",
              "logo": "https://goldencreationss.com/icon.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+255-765-800-227",
                "contactType": "customer service",
                "availableLanguage": ["English", "Swahili"]
              },
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Dar es Salaam",
                  "addressRegion": "Mbezi Beach Massana",
                  "addressCountry": "TZ"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Dar es Salaam",
                  "addressRegion": "Makumbusho Bus Stop",
                  "addressCountry": "TZ"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Mwanza",
                  "addressRegion": "CCM",
                  "addressCountry": "TZ"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/goldenecard/"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Digital Invitation Cards",
              "provider": {
                "@type": "Organization",
                "name": "Golden eCards"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Tanzania"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Invitation Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Golden Basic",
                    "price": "350000",
                    "priceCurrency": "TZS"
                  },
                  {
                    "@type": "Offer",
                    "name": "Golden Royal",
                    "price": "450000",
                    "priceCurrency": "TZS"
                  },
                  {
                    "@type": "Offer",
                    "name": "Golden Premium",
                    "price": "650000",
                    "priceCurrency": "TZS"
                  },
                  {
                    "@type": "Offer",
                    "name": "Golden VIP",
                    "price": "950000",
                    "priceCurrency": "TZS"
                  },
                  {
                    "@type": "Offer",
                    "name": "Golden VVIP",
                    "price": "1300000",
                    "priceCurrency": "TZS"
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Golden eCards",
              "url": "https://goldencreationss.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://goldencreationss.com/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goldencreationss.com" },
                { "@type": "ListItem", "position": 2, "name": "Why Us", "item": "https://goldencreationss.com/why-us" },
                { "@type": "ListItem", "position": 3, "name": "Services", "item": "https://goldencreationss.com/services" },
                { "@type": "ListItem", "position": 4, "name": "Portfolio", "item": "https://goldencreationss.com/portfolio" },
                { "@type": "ListItem", "position": 5, "name": "Packages", "item": "https://goldencreationss.com/packages" },
                { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://goldencreationss.com/contact" }
              ]
            })
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
