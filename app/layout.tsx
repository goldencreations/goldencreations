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
  keywords: ['digital invitations', 'e-cards', 'Tanzania', 'wedding invitations', 'event management', 'WhatsApp invitations', 'harusi', 'mialiko', 'kadi za kidigitali'],
  authors: [{ name: 'Golden eCards' }],
  creator: 'Golden eCards',
  publisher: 'Golden eCards',
  metadataBase: new URL('https://goldenecard.co.tz'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'sw': '/sw',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_TZ',
    alternateLocale: 'sw_TZ',
    url: 'https://goldenecard.co.tz',
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
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: '/images/logo.png',
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
              "url": "https://goldenecard.co.tz",
              "logo": "https://goldenecard.co.tz/images/logo.png",
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
              "url": "https://goldenecard.co.tz",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://goldenecard.co.tz/?search={search_term_string}",
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
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goldenecard.co.tz" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://goldenecard.co.tz#services" },
                { "@type": "ListItem", "position": 3, "name": "Portfolio", "item": "https://goldenecard.co.tz#portfolio" },
                { "@type": "ListItem", "position": 4, "name": "Packages", "item": "https://goldenecard.co.tz#packages" },
                { "@type": "ListItem", "position": 5, "name": "Contact", "item": "https://goldenecard.co.tz#contact" }
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
