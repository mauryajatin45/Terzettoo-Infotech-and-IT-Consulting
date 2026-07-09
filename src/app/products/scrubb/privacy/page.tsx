import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Delete Account | Terzettoo',
  description: 'Privacy Policy for Delete Account: Apple 5.1.1 Delete Shopify App',
}

export default function ScrubbPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-[#2b2d42]">
      <header className="bg-[#d90429] mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl !text-white md:text-4xl font-bold">Privacy Policy - Delete Account</h1>
          <p className="mt-2 text-[#edf2f4]">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-red max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">1. Data Collection & Storage</h2>
            <p>
              At Terzettoo, we believe in minimizing data footprints. When you install <strong>Delete Account</strong>, we only store your store&apos;s <code>shop_domain</code> and an OAuth <code>access_token</code> in a secure, local SQLite database strictly to authenticate API calls.
            </p>
            <p>
              <strong>No End-Customer PII Stored:</strong> We do not hoard customer data. End-customer Personally Identifiable Information (PII) like names, emails, and purchase history are only processed temporarily in memory to execute the deletion or send a webhook, and are never stored permanently on our servers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">2. Data Usage</h2>
            <p>
              The minimal data we collect is strictly used to provide the app&apos;s core functionality: executing Shopify Admin API deletion commands (ensuring your compliance with Apple Guideline 5.1.1 and GDPR) and routing automated webhook payloads at the merchant&apos;s request.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">3. The &quot;Uninstall&quot; Protocol (Data Retention)</h2>
            <p>
              We believe apps should clean up after themselves. When a merchant uninstalls Delete Account from their Shopify admin, we automatically delete their OAuth access token and shop data from our database within 48 hours via the mandatory <code>app/uninstalled</code> webhook.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">4. No Data Selling</h2>
            <p>
              We do not sell, rent, or share merchant or customer data with external advertising networks, third-party data brokers, or any other external entities under any circumstances.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#d90429] mb-4">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:admin@terzettoo.com">admin@terzettoo.com</a></li>
              <li><strong>Website:</strong> <Link href="/">www.terzettoo.com</Link></li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
