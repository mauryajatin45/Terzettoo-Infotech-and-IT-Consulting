import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#edf2f4] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-[#d90429]">404</h1>
        <h2 className="text-2xl font-semibold text-[#2b2d42] mt-4 mb-2">
          Page Not Found
        </h2>
        <p className="text-[#8d99ae] mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#d90429] text-white font-semibold rounded-xl hover:bg-[#ef233c] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#d90429] text-[#d90429] font-semibold rounded-xl hover:bg-[#d90429]/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
