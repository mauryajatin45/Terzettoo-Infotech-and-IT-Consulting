'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ShopifyPortfolio from './ShopifyPortfolio'

type Project = {
  id: number
  title: string
  category: 'Shopify' | 'N8N' | 'SaaS' | 'Mobile App Development'
  description: string
  technologies: string[]
  features: string[]
  liveUrl: string
  image: string
  imageAlt?: string
  results?: {
    metric1?: string
    metric2?: string
    metric3?: string
  }
}

export const projects: Project[] = []

const categories = ['Shopify', 'N8N', 'SaaS', 'Mobile App Development'] as const

type FeaturedProjectsProps = {
  limit?: number
  hideFilters?: boolean
}

export default function FeaturedProjects({ limit, hideFilters = false }: FeaturedProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Shopify')

  // Filter handler for category buttons
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  let filteredProjects = projects.filter((p) => p.category === selectedCategory)

  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit)
  }

  return (
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
        {!hideFilters && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#d90429] border border-[#d90429] text-white shadow-lg'
                    : 'bg-white border border-[#d90429] text-[#2b2d42] hover:bg-[#d90429]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Conditionally Render Custom Portfolio Layouts */}
        {selectedCategory === 'Shopify' ? (
          <ShopifyPortfolio />
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projects Grid - 3 columns on large screens */}
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-[#edf2f4] rounded-2xl overflow-hidden border border-[#8d99ae]/20 transition-all duration-300 hover:shadow-xl hover:border-[#d90429]/30 flex flex-col"
              >
                {/* Card Header with Background Image */}
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
        ) : (
          <div className="text-center py-16 bg-[#edf2f4] rounded-2xl border border-[#8d99ae]/20 p-8 max-w-xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-[#2b2d42] mb-3">
              {selectedCategory} Case Studies
            </h3>
            <p className="text-[#8d99ae] mb-6 text-base leading-relaxed">
              Our enterprise projects in {selectedCategory} are delivered under custom non-disclosure agreements (NDAs). Connect with our team to explore relevant architecture breakdowns, demos, and case studies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#d90429] text-white font-semibold rounded-xl hover:bg-[#ef233c] transition shadow-md hover:shadow-lg"
            >
              Request {selectedCategory} Portfolio
            </Link>
          </div>
        )}
        
        {/* View All Button (shows when limited) */}
        {limit && (
          <div className="mt-12 text-center">
            <Link href="/company/portfolio" className="inline-flex items-center px-6 py-3 bg-white text-[#d90429] border border-[#d90429]/20 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-lg shadow-gray-200">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
