import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delete Account | Shopify Compliance App | Terzettoo',
  description: 'Pass Apple App Store Guideline 5.1.1v instantly. Delete Account adds a native account deletion block to your Shopify storefront for instant iOS and GDPR compliance.',
  keywords: [
    'Shopify Apple 5.1.1 compliance',
    'Shopify account deletion app',
    'Apple App Store rejection Shopify',
    'Guideline 5.1.1v Shopify',
    'Shopify GDPR right to be forgotten',
    'Shopify CCPA compliance',
    'Delete account button Shopify',
    'Shopify mobile app compliance'
  ],
  authors: [{ name: 'Terzettoo Infotech' }],
  openGraph: {
    title: 'Delete Account | Shopify Compliance App',
    description: 'Bypass App Store rejection instantly. Add a native account deletion block to your Shopify storefront with zero coding required.',
    url: 'https://www.terzettoo.com/products/scrubb',
    siteName: 'Terzettoo Infotech',
    images: [
      {
        url: 'https://www.terzettoo.com/image/Scrubb/Scrubb_Logo.png',
        width: 800,
        height: 600,
        alt: 'Delete Account Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/products/scrubb',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delete Account | Shopify Compliance',
    description: 'Pass Apple App Store Guideline 5.1.1v instantly. Add a native account deletion block to your Shopify storefront.',
    images: ['https://www.terzettoo.com/image/Scrubb/Scrubb_Logo.png'],
  },
}

export default function ScrubbLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
