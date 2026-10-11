'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import GlobalPresence from '@/components/sections/GlobalPresence'
import FeaturedProjects from '@/components/sections/FeaturedProjects'

export default function PortfolioClient() {
  return (
    <div className="bg-[#d90429] text-[#2b2d42]">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden min-h-[500px] h-[60vh] max-h-[800px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/Portfolio/Project_Hero.webp"
            alt="Digital technology background"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d90429]/30 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto !text-white">
              Transforming Ideas into <span className="text-[#ffffff]">Digital Success</span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              Explore our collection of successful projects that showcase our expertise, innovation, and dedication to delivering exceptional digital experiences.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex justify-center gap-4"
            >
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex cursor-pointer items-center px-6 py-3 bg-[#d90429] text-white rounded-lg font-medium hover:bg-[#ef233c] transition-all shadow-lg shadow-[#d90429]/30"
              >
                View Our Work
              </button>
              <Link href="/services" className="inline-flex items-center px-6 py-3 bg-white/90 border border-[#8d99ae]/30 text-[#2b2d42] rounded-lg font-medium hover:border-[#d90429]/50 hover:text-[#d90429] transition">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Section */}
      <FeaturedProjects />

      {/* Global Presence */}
      <GlobalPresence />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-t from-[#d90429] to-[#ef233c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Let&apos;s collaborate to create something amazing. Our team is ready to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="block px-8 py-3 bg-white text-[#d90429] rounded-lg font-bold hover:bg-gray-100 transition text-center cursor-pointer">
                Get a Free Consultation
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services" className="block px-8 py-3 bg-transparent border-2 border-white !text-white rounded-lg font-bold hover:bg-white/10 transition text-center cursor-pointer">
                View Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
