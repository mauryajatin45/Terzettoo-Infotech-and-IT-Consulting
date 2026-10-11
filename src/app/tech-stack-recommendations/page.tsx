import { Metadata } from 'next'
import TechStackRecommendationClient from './tech-stack-recommendationClient'

export const metadata: Metadata = {
  title: 'Technology Stack Recommendation | Terzettoo',
  description:
    'Choose the right tech stack for speed, security, scalability, and team fit. We evaluate trade-offs and recommend stacks that set you up for long-term success with Terzettoo.',
  alternates: { canonical: 'https://www.terzettoo.com/tech-stack-recommendations' },
  openGraph: {
    title: 'Technology Stack Recommendation | Terzettoo',
    description:
      'Objective, context-aware stack choices—frontend, backend, data, DevOps with Terzettoo.',
    url: 'https://www.terzettoo.com/tech-stack-recommendations',
    siteName: 'Terzettoo',
    type: 'website',
  },
}

export default function Page() {
  return <TechStackRecommendationClient />
}
