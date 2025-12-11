'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

type Project = {
  id: number
  title: string
  category: 'Web Development' | 'Full Stack' | 'Mobile Development'
  description: string
  technologies: string[]
  features: string[]
  liveUrl: string
  image: string // NEW: background image for the card header
  imageAlt?: string
  results?: {
    metric1?: string
    metric2?: string
    metric3?: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Rosyz E-commerce Website',
    category: 'Web Development',
    description:
      'Rosyz is a stylish e-commerce website featuring trendy clothing, accessories, and home decor with a clean, user-friendly design.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'Vercel'],
    features: [
      'Modern product catalog',
      'Fast server-side rendering',
      'Secure checkout with Stripe',
      'Responsive, mobile-first UI',
    ],
    liveUrl: 'https://ecommerce-rosyz.vercel.app/',
    image: '/image/Portfolio/Rozy.webp',
    imageAlt: 'Rosyz e-commerce storefront preview',
    results: {
      metric1: '40% faster navigation',
      metric2: 'A/B tested product pages',
      metric3: 'Optimized CLS & LCP',
    },
  },
  {
    id: 2,
    title: 'Job Portal',
    category: 'Web Development',
    description:
      'A modern job portal connecting candidates with employers, offering easy search, job listings, and a seamless application process.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Advanced job search & filters',
      'Employer dashboards',
      'Resume upload & tracking',
      'Role-based access',
    ],
    liveUrl: 'https://jobportal-shivaurica.vercel.app/',
    image: '/image/Portfolio/job-portal.webp',
    imageAlt: 'Job portal platform interface',
    results: {
      metric1: '10K+ monthly searches',
      metric2: 'High application completion',
      metric3: 'SEO-friendly listings',
    },
  },
  {
    id: 3,
    title: 'CareerCraft',
    category: 'Full Stack',
    description: `CareerCraft is a comprehensive career development platform by Team QUAD that helps users assess skills, prepare for interviews, build resumes`,
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Cloudinary',
      'Gemini-2.0-flash',
    ],
    features: [
      'AI career advisor',
      'PDF resume parsing',
      'Mentor network',
    ],
    liveUrl: 'https://careercraftt.vercel.app/',
    image: '/image/Portfolio/careercraft.png',
    imageAlt: 'CareerCraft dashboard and AI advisor',
    results: {
      metric1: 'Faster interview prep',
      metric2: 'Higher resume scores',
      metric3: 'Personalized learning paths',
    },
  },
  {
    id: 4,
    title: 'Eat Smile Bakery',
    category: 'Web Development',
    description:
      'A delightful bakery storefront with online ordering, seasonal menus, and pickup scheduling — designed for mouth-watering visuals and conversions.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'SSR/ISR'],
    features: [
      'Beautiful product galleries',
      'Order & pickup scheduling',
      'Promo banners & seasonal menus',
      'Optimized images for speed',
    ],
    liveUrl: 'https://eat-smile-bakery-gilt.vercel.app/',
    image: '/image/Portfolio/eat-smile-bakery.png',
    imageAlt: 'Eat Smile Bakery website hero showing pastries',
    results: {
      metric1: 'High Lighthouse score',
      metric2: 'Reduced bounce rate',
      metric3: 'Streamlined checkout UX',
    },
  },
  {
    id: 5,
    title: 'Terzettoo',
    category: 'Web Development',
    description:
      'The official Terzettoo website showcasing services across product engineering, AI/ML, and design — built for speed, SEO, and lead generation.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'OG Tags', 'Vercel'],
    features: [
      'Marketing site & blog',
      'SEO-friendly routing',
      'Open Graph & social cards',
      'Conversion-focused CTAs',
    ],
    liveUrl: 'https://www.terzettoo.com',
    image: '/image/Portfolio/terzettoo.png',
    imageAlt: 'Terzettoo website landing preview',
    results: {
      metric1: 'Improved organic traffic',
      metric2: 'Faster TTFB & LCP',
      metric3: 'Increased lead capture',
    },
  },
]

const categories = ['All', 'Web Development', 'Mobile Development', 'Full Stack'] as const

export default function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Filter handler for category buttons
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="bg-[#d90429] text-[#2b2d42]">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden h-[vh] max-h-[800px]">
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
              <button className="inline-flex items-center px-6 py-3 bg-white/90 border border-[#8d99ae]/30 text-[#2b2d42] rounded-lg font-medium hover:border-[#d90429]/50 hover:text-[#d90429] transition">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#d90429]">Featured Projects</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[#8d99ae]">
              Discover our handpicked selection of projects that showcase our expertise across different domains.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#d90429] text-white shadow-lg'
                    : 'bg-gray-100 text-[#2b2d42] hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid - 3 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-[#edf2f4] rounded-2xl overflow-hidden border border-[#8d99ae]/20 transition-all duration-300 hover:shadow-xl hover:border-[#d90429]/30 flex flex-col"
              >
                {/* Card Header with Background Image (NEW) */}
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/80 text-[#2b2d42] text-xs rounded-full backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="absolute bottom-3 left-3 right-3 text-xl font-semibold !text-white drop-shadow">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Description */}
                  <p className="text-[#2b2d42]/80 mb-6 whitespace-pre-line">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={`${project.id}-${tech}`}
                        whileHover={{ scale: 1.06 }}
                        className="px-3 py-1 bg-white text-[#d90429] text-xs rounded-lg border border-[#8d99ae]/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Features */}
                  {project.features?.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-[#2b2d42] flex items-center">
                        <span className="w-2 h-2 bg-[#d90429] rounded-full mr-2"></span>
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 text-sm text-[#2b2d42]">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#d90429] rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Live Demo Button */}
                  <div className="mt-auto pt-2">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#d90429] !text-white rounded-lg hover:bg-[#ef233c] transition"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
            <Link href="/contact" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#d90429] rounded-lg font-bold hover:bg-gray-100 transition cursor-pointer text-center"
              >
                Get a Free Consultation
              </motion.a>
            </Link>

            <Link href="/services" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white !text-white rounded-lg font-bold hover:bg-white/10 transition cursor-pointer text-center"
              >
                View Our Services
              </motion.a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
