import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MetaPixel from '@/components/tracking/MetaPixel'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Terzettoo - Infotech & IT Consulting Solutions',
  description: 'Empower your business with Terzettoo\'s comprehensive Infotech and IT consulting solutions. We deliver innovative software, digital transformation, and expert technology consulting for modern enterprises.',
  keywords: 'Infotech, IT consulting, software solutions, digital transformation, technology consulting, business IT services, custom software, web development, mobile apps, enterprise IT, Terzettoo, IT strategy, IT support, IT solutions, IT partner',
  authors: [{ name: 'Terzettoo' }],
  icons: {
    icon: '/Terzettoo_logo_remove_BG.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.terzettoo.com',
    siteName: 'Terzettoo',
    title: 'Terzettoo - Infotech & IT Consulting Solutions',
    description: 'Empower your business with Terzettoo\'s Infotech and IT consulting expertise. Innovative software, digital transformation, and technology solutions for growth.',
    images: [
      {
        url: '/Terzettoo_logo_remove_BG.png',
        width: 1200,
        height: 630,
        alt: 'Terzettoo - Infotech and IT Consulting Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terzettoo - Infotech & IT Consulting Solutions',
    description: 'Empower your business with Terzettoo\'s Infotech and IT consulting expertise. Innovative software, digital transformation, and technology solutions for growth.',
    images: ['/Terzettoo_logo_remove_BG.png'],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  metadataBase: new URL('https://www.terzettoo.com'),
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/Terzettoo_logo_remove_BG.png" type="image/png" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Terzettoo',
              url: 'https://www.terzettoo.com',
              logo: 'https://www.terzettoo.com/Terzettoo_logo_remove_BG.png',
              description: 'Terzettoo delivers comprehensive Infotech and IT consulting solutions including custom software development, web and mobile applications, and digital transformation services.',
              foundingDate: '2022',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ahmedabad',
                addressRegion: 'Gujarat',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://linkedin.com/company/terzettoo',
                'https://www.instagram.com/terzettoo_official/',
                'https://twitter.com/terzettoo',
                'https://www.facebook.com/profile.php?id=61578955508887',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-70690-13316',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi'],
              },
            }),
          }}
        />
        {/* Google Analytics - Load after page interaction for better performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DN9RC5XEDP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DN9RC5XEDP', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
        {/* Meta Pixel (Facebook Pixel) */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1256998902924411');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1256998902924411&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.className} min-h-screen bg-[#edf2f4] text-[#2b2d42] antialiased`} suppressHydrationWarning>
        <MetaPixel />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}