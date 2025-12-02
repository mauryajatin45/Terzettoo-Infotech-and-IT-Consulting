// src/components/templates/ServicePageTemplate.tsx
'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import RelatedServices from '@/components/sections/RelatedServices'

export interface ServiceContent {
  hero: {
    title: string
    subtitle: string
    description: string
    primaryCTA: string
    secondaryCTA: string
    heroImage?: string
  }
  overview: {
    title: string
    description: string
    keyPoints: string[]
  }
  features: {
    title: string
    items: Array<{
      icon: LucideIcon
      title: string
      description: string
    }>
  }
  benefits: {
    title: string
    items: Array<{
      title: string
      description: string
    }>
  }
  process: {
    title: string
    steps: Array<{
      number: string
      title: string
      description: string
    }>
  }
  technologies?: {
    title: string
    items: string[]
  }
  stats: Array<{
    number: string
    label: string
  }>
  writtenContent?: {
    title: string
    paragraphs: string[]
    facts: Array<{
      label: string
      value: string
    }>
  }
  // New "Dominance" fields
  richTextContent?: {
    title: string
    content: string // HTML string for long-form content
  }
  relatedServices?: Array<{
    title: string
    href: string
    description?: string
  }>
  faq?: Array<{
    question: string
    answer: string
  }>
}

interface ServicePageTemplateProps {
  content: ServiceContent
}

const AnimatedCounter = ({ value }: { value: string }) => {
  const controls = useAnimation()
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && ref.current) {
      // Extract numeric value and any suffix (like % or +)
      const matches = value.match(/(\d+)([^\d]*)/)
      if (!matches) return

      const numericPart = matches[1]
      const suffix = matches[2] || ''
      const numValue = parseInt(numericPart.replace(/,/g, ''))

      const duration = 2 // seconds
      const frameDuration = 1000 / 60 // 60 fps
      const totalFrames = Math.round(duration * 1000 / frameDuration)

      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5 }
      })

      let frame = 0
      const counter = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        const currentValue = Math.round(numValue * progress)

        if (ref.current) {
          ref.current.textContent = currentValue.toLocaleString() + suffix
        }

        if (frame === totalFrames) {
          clearInterval(counter)
        }
      }, frameDuration)
    }
  }, [isInView, value, controls])

  return (
    <motion.span
      ref={ref}
      animate={controls}
      className="text-4xl font-bold text-[#d90429] mb-2 block"
    >
      0{value.replace(/\d+/g, '')}
    </motion.span>
  )
}

export default function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  const pathname = usePathname()

  // Generate Breadcrumbs
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: content.hero.title, href: pathname || '' }
  ]

  // Generate Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: content.hero.title,
    description: content.hero.description,
    provider: {
      '@type': 'Organization',
      name: 'Terzettoo',
      url: 'https://www.terzettoo.com',
      logo: 'https://www.terzettoo.com/Terzettoo_logo_remove_BG.png'
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: content.hero.title,
      itemListElement: content.features.items.map((item, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.title,
          description: item.description
        }
      }))
    }
  }

  return (
    <div className="bg-[#edf2f4] text-[#2b2d42] mt-16">
      {/* Schema Injection */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-[#d90429]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} className="!text-white" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br bg-[#d90429]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight !text-white">
                {content.hero.title}
              </h1>
              <h2 className="text-2xl font-semibold mb-4 !text-gray-100">
                {content.hero.subtitle}
              </h2>
              <p className="text-xl text-[#ffffff] mb-8 leading-relaxed">
                {content.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#ffffff] !text-[d90429] font-bold rounded-xl hover:bg-[#dfdddd] transition-all duration-300 transform shadow-lg"
                >
                  {content.hero.primaryCTA}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/company/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white !text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  {content.hero.secondaryCTA}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-1 shadow-xl">
                <div className="w-full h-80 bg-gradient-to-br from-[#d90429] to-[#ef233c] rounded-xl flex items-center justify-center text-white text-6xl font-bold relative">
                  {content.hero.heroImage ? (
                    <Image
                      src={content.hero.heroImage}
                      alt="Hero Image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-2xl">
                      No Image Available
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Written Content & Facts Section (Legacy) */}
      {content.writtenContent && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-center">{content.writtenContent.title}</h2>
              {content.writtenContent.paragraphs.map((para, idx) => (
                <p key={idx} className="text-lg text-[#8d99ae] mb-4 max-w-4xl mx-auto leading-relaxed">
                  {para}
                </p>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {content.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter value={stat.number} />
                <div className="text-[#8d99ae]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#d90429]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 !text-white">{content.overview.title}</h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              {content.overview.description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.overview.keyPoints.map((point, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#90EE90] mr-3 flex-shrink-0" />
                  <span className='text-[#ffffff]'>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{content.features.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {content.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-red-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-white rounded-xl w-fit mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <feature.icon className="h-6 w-6 text-[#d90429]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#8d99ae]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#d90429]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 !text-white">{content.process.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#ffffff] text-[#d90429] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 !text-white">{step.title}</h3>
                <p className="text-[#eaeaea]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {content.technologies && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold">{content.technologies.title}</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {content.technologies.items.map((tech, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-[#ef233c]/10 text-[#d90429] rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}


      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#2b2d42] relative inline-block">
              {content.benefits.title}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#d90429] to-[#ef233c]"
              />
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d90429] to-[#ef233c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start mb-4">
                  <div className="p-2 mr-4 bg-[#ef233c]/10 rounded-lg group-hover:bg-[#d90429]/20 transition-colors duration-300">
                    <CheckCircle className="h-6 w-6 text-[#d90429] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2b2d42] mt-1">{benefit.title}</h3>
                </div>

                <p className="text-[#6c757d] pl-14 group-hover:text-[#495057] transition-colors duration-300">
                  {benefit.description}
                </p>

                <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich Content Section (New for Dominance) */}
      {content.richTextContent && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-[#2b2d42]">{content.richTextContent.title}</h2>
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[#2b2d42] prose-a:text-[#d90429] prose-strong:text-[#2b2d42]"
                dangerouslySetInnerHTML={{ __html: content.richTextContent.content }} 
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Services Section (New for Dominance) */}
      {content.relatedServices && content.relatedServices.length > 0 && (
        <RelatedServices services={content.relatedServices} />
      )}

      {/* CTA Section */}
      <section className="py-20 bg-[#d90429] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl !text-white font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#d90429] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/company/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white !text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}