import { Metadata } from 'next'
import SaasStrategyClient from './saas-strategyClient'

export const metadata: Metadata = {
  title: 'SaaS Strategy Consulting | Pricing, GTM, Architecture | Terzettoo',
  description:
    'Win your SaaS market with the right pricing, GTM, onboarding, and scalable architecture. We craft end-to-end SaaS strategies that convert and retain with Terzettoo.',
  alternates: { canonical: 'https://www.terzettoo.com/saas-strategy-and-advisory' },
  openGraph: {
    title: 'SaaS Strategy Consulting | Terzettoo',
    description:
      'From positioning to multi-tenant architecture—we align your SaaS to grow and scale with Terzettoo.',
    url: 'https://www.terzettoo.com/saas-strategy-and-advisory',
    siteName: 'Terzettoo',
    type: 'website',
  },
}

export default function Page() {
  return <SaasStrategyClient />
}
