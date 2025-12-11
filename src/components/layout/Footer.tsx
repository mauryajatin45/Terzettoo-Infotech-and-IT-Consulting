import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#d90429] text-white relative overflow-hidden" role="contentinfo">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/30"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-white/30"></div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/Terzettoo_logo_remove_BG.png"
                  alt="Terzettoo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold !text-white">Terzettoo</span>
            </div>

            <p className="!text-white/90 leading-relaxed">
              Delivering premium software solutions that drive business growth and innovation.
            </p>

            {/* Social Media Links */}
            <nav aria-label="Social media links" className="flex space-x-5 pt-2">
              {[
                { icon: Linkedin, url: "https://linkedin.com/company/terzettoo", label: "Follow us on LinkedIn" },
                { icon: Instagram, url: "https://www.instagram.com/terzettoo_official/", label: "Follow us on Instagram" },
                { icon: Twitter, url: "https://twitter.com/terzettoo", label: "Follow us on Twitter" },
                { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61578955508887", label: "Follow us on Facebook" },
              ].map(({ icon: Icon, url, label }) => (
                <Link
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-white/80 hover:!text-white !transition-colors !duration-300 transform hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg !font-semibold mb-6 pb-2 border-b border-white/20 !text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Mobile Apps',
                'API Development',
                'DevOps',
                'Testing & QA',
                'IT Consulting',
                'UI/UX Design',
                'Cloud Solutions'
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="!text-white/90 hover:!text-white !transition-colors flex items-start group"
                  >
                    <span className="inline-block mr-2 group-hover:translate-x-1 !transition-transform">→</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg !font-semibold mb-6 pb-2 border-b border-white/20 !text-white">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/company/about' },
                { label: 'Portfolio', href: '/company/portfolio' },
                { label: 'Careers', href: '/careers' },
                { label: 'Blog', href: '/blog' },
                { label: 'FAQ', href: '/company/faq' },
                { label: 'Contact', href: '/contact' }
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="!text-white/90 hover:!text-white !transition-colors flex items-start group"
                  >
                    <span className="inline-block mr-2 group-hover:translate-x-1 !transition-transform">→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg !font-semibold mb-6 pb-2 border-b border-white/20 !text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mt-0.5 mr-3 !text-white flex-shrink-0" />
                <span className="!text-white/90">Ahmedabad, Gujarat, India</span>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 mt-0.5 mr-3 !text-white" />
                <span className="!text-white/90">admin@terzettoo.com</span>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 mt-0.5 mr-3 !text-white" />
                <span className="!text-white/90">+91 70690 13316</span>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 mt-0.5 mr-3 !text-white" />
                <span className="!text-white/90">+91 6356 633 868</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="!text-white/80 text-sm">
            © {currentYear} Terzettoo. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link href="/company/privacy" className="!text-white/80 hover:!text-white text-sm !transition-colors">
              Privacy Policy
            </Link>
            <Link href="/company/terms" className="!text-white/80 hover:!text-white text-sm !transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer