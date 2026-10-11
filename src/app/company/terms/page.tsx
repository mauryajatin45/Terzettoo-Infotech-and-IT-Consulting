import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Terzettoo',
  description: 'Terms of Service for Terzettoo Infotech & IT Consultancy.',
  keywords: [
    'Terzettoo',
    'Terms of Service',
    'terms',
    'user agreement',
    'service agreement',
    'legal'
  ],
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Terms of Service | Terzettoo',
    description: 'Read the Terms of Service governing the use of Terzettoo products and services.',
    url: 'https://www.terzettoo.com/company/terms',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/company/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Terzettoo',
    description: 'Terms of Service for Terzettoo Infotech & IT Consultancy.',
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-[#2b2d42]">
      <header className="bg-[#d90429] text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold !text-white">Terms of Service</h1>
          <p className="mt-2 text-[#edf2f4]">Last Updated: July 29, 2025</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-red max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">1. Introduction</h2>
            <p>
              Welcome to Terzettoo. These Terms of Service (&quot;Terms&quot;) govern your use of our
              website and services (&quot;Services&quot;) offered through our Infotech and Consultancy divisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">2. Services Overview</h2>
            <p>Terzettoo provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web &amp; Mobile Application Development</li>
              <li>UI/UX Design Services</li>
              <li>IT Consultancy and Technical Advisory</li>
              <li>Project Management and Vendor Matching</li>
              <li>Digital Transformation Solutions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">3. Engagement Terms</h2>
            <p>
              All projects require a signed Service Agreement outlining scope, deliverables, timelines, and payment terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">4. Intellectual Property</h2>
            <p>
              All deliverables become the property of the Client upon full payment completion. Terzettoo retains the right
              to display completed work in our portfolio unless otherwise agreed in writing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">5. Confidentiality</h2>
            <p>
              We adhere to strict confidentiality standards. Client information is protected under our
              Privacy Policy and any signed Non-Disclosure Agreements (NDAs).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">6. Quality Assurance</h2>
            <p>
              All deliverables undergo rigorous quality checks. We provide 1-2 weeks of post-delivery support for minor
              adjustments at no additional cost.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">7. Limitations of Liability</h2>
            <p>
              Terzettoo&apos;s liability is limited to the value of the project fees paid. We are not liable for indirect,
              incidental, or consequential damages arising from service delivery.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be
              subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">9. Amendments</h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of our Services constitutes acceptance
              of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">10. Contact Information</h2>
            <p>For questions regarding these Terms, please contact us through our website contact form.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
