import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Terzettoo',
  description: 'Privacy Policy for Terzettoo Infotech & IT Consultancy',
  keywords: [
    'Terzettoo',
    'privacy policy',
    'data protection',
    'personal data',
    'cookies',
    'security'
  ],
  authors: [{ name: 'Terzettoo' }],
  openGraph: {
    title: 'Privacy Policy | Terzettoo',
    description: 'Learn how Terzettoo collects, uses, and protects your information.',
    url: 'https://www.terzettoo.com/company/privacy',
    siteName: 'Terzettoo',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.terzettoo.com/company/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Terzettoo',
    description: 'Privacy Policy for Terzettoo Infotech & IT Consultancy',
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#2b2d42]">
      <header className="bg-[#d90429] mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl !text-white md:text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-[#edf2f4]">Effective Date: July 29, 2025</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-red max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">1. Introduction</h2>
            <p>
              Terzettoo is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our services through our website or during
              project engagements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
            <p>We may collect personally identifiable information when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us via forms, email, or phone</li>
              <li>Engage our services through contracts</li>
              <li>Make payments for our services</li>
              <li>Participate in surveys or feedback</li>
            </ul>
            <p className="mt-2">
              This may include: Name, email address, phone number, business details, payment information, and project requirements.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">2.2 Non-Personal Information</h3>
            <p>We automatically collect certain technical data when you visit our website:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type and version</li>
              <li>IP address (anonymized where possible)</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">3. How We Use Your Information</h2>
            <p>We use collected information for legitimate business purposes including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining our Services</li>
              <li>Processing transactions and delivering projects</li>
              <li>Communicating about projects, updates, and security alerts</li>
              <li>Improving our website and service offerings</li>
              <li>Complying with legal obligations</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">4. Legal Basis for Processing</h2>
            <p>We process personal data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contractual necessity</strong> when providing services</li>
              <li><strong>Legitimate interests</strong> for business operations and security</li>
              <li><strong>Legal compliance</strong> for tax and regulatory requirements</li>
              <li><strong>Consent</strong> where explicitly provided (e.g., marketing emails)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">5. Data Sharing and Disclosure</h2>

            <h3 className="text-xl font-semibold mb-2">5.1 Service Providers</h3>
            <p>We may share information with third-party vendors who assist with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processing (Razorpay, etc.)</li>
              <li>Cloud storage and hosting</li>
              <li>Analytics and performance monitoring</li>
            </ul>
            <p className="mt-2">All vendors are contractually obligated to maintain confidentiality and security.</p>

            <h3 className="text-xl font-semibold mb-2 mt-4">5.2 Legal Requirements</h3>
            <p>We may disclose information when required by law or to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comply with legal processes</li>
              <li>Protect our rights or property</li>
              <li>Prevent fraud or security issues</li>
              <li>Ensure safety of our team or others</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">5.3 Business Transfers</h3>
            <p>
              In case of merger, acquisition, or asset sale, client information may be transferred as a business asset,
              with prior notice and opportunity to opt-out where applicable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">6. Data Security</h2>
            <p>We implement robust security measures including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Access controls and authentication protocols</li>
              <li>Regular security audits and vulnerability testing</li>
              <li>Secure development practices for all projects</li>
            </ul>
            <p className="mt-2">
              However, no internet transmission is 100% secure. We cannot guarantee absolute security but will promptly notify
              affected individuals if a data breach occurs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">7. Data Retention</h2>
            <p>We retain personal data only as long as necessary for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Active projects and service delivery</li>
              <li>Legal and tax compliance (typically 6 years)</li>
              <li>Business records and analytics</li>
            </ul>
            <p className="mt-2">
              Client project data is archived or deleted within 60 days after project completion unless extended retention
              is contractually required.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">8. Your Data Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate or incomplete information</li>
              <li>Request deletion of your data (subject to legal limits)</li>
              <li>Restrict or object to certain processing</li>
              <li>Withdraw consent (where processing is consent-based)</li>
              <li>Lodge complaints with data protection authorities</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at <span className="text-[#d90429]">legal@terzettoo.com</span>.
              We may verify your identity before fulfilling requests.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">9. International Data Transfers</h2>
            <p>
              As a global service provider, data may be transferred to and processed in countries outside your residence.
              We ensure all transfers comply with applicable laws using:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard Contractual Clauses (SCCs) where required</li>
              <li>Data processing agreements with vendors</li>
              <li>Adequacy decisions for recipient countries</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">10. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses essential cookies for functionality and may use analytics cookies to improve services.
              You can manage preferences through browser settings or our Cookie Banner.
            </p>
            <p className="mt-2">We do not sell personal data or engage in cross-context behavioral advertising.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">11. Children&apos;s Privacy</h2>
            <p>
              Our Services are not directed to individuals under 16. We do not knowingly collect children&apos;s data.
              If we become aware of such collection, we will take steps to delete the information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">12. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for their privacy practices.
              We encourage reviewing their policies before providing any information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">13. Policy Updates</h2>
            <p>
              We may update this policy periodically. Material changes will be notified via email or website notice
              prior to the change becoming effective. The &quot;Effective Date&quot; at the top indicates when revisions were last made.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">14. Contact Us</h2>
            <p>For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer at:</p>
            <address className="not-italic mt-2">
              <p>Terzettoo</p>
              <p>Attn: Jatin Maurya</p>
              <p>
                Email: <span className="text-[#d90429]">admin@terzettoo.com</span>
              </p>
            </address>
          </section>
        </div>
      </main>
    </div>
  )
}
