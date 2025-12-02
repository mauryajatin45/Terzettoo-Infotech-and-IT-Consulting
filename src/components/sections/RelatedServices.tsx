'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedService {
  title: string
  href: string
  description?: string
}

interface RelatedServicesProps {
  services: RelatedService[]
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  if (!services || services.length === 0) return null

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-[#2b2d42]">Explore Related Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#d90429] transition-colors">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {service.description}
                </p>
              )}
              <div className="flex items-center text-[#d90429] font-medium text-sm">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
