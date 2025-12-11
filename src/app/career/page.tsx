import { Metadata } from 'next'
import Image from 'next/image'
import { CareerClient } from './careerClient'

export const metadata: Metadata = {
  title: 'Career Opportunities | Join Our Team | Terzettoo',
  description:
    'Discover exciting career opportunities and join our innovative team at Terzettoo. We offer competitive benefits, growth opportunities, and a great work environment.',
  keywords: 'careers, jobs, employment, work with us, tech jobs, Terzettoo careers',
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Career Opportunities | Join Our Team | Terzettoo',
    description: 'Join our innovative team and build your future with Terzettoo.',
    url: 'https://www.terzettoo.com/careers',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/careers',
  },
}

export default function CareerPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative mt-16 bg-gray-900 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/image/Others/Careers.jpeg"
            alt="Diverse team collaborating in modern office"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/20" />
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !text-white tracking-tight">
              Build Your Future With Us
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-red-200">
              Join our team of innovators and problem-solvers. We&apos;re committed to your growth and success while delivering exceptional products to our customers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#openings"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-red-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                View Open Positions
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <svg className="h-8 w-8 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-white">
        <CareerClient />
      </main>

      {/* Values Section */}
      <section className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These principles guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Innovation',
                description: 'We challenge the status quo and continuously seek better solutions.',
                icon: (
                  <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                name: 'Collaboration',
                description: 'We believe the best results come from working together.',
                icon: (
                  <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                name: 'Integrity',
                description: 'We do the right thing, even when no one is watching.',
                icon: (
                  <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-red-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-lg">{value.icon}</div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">{value.name}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
