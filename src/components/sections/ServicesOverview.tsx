'use client'
import { memo } from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Zap,
  Shield,
  Cloud,
  Database,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks',
    features: ['React/Next.js', 'Responsive Design', 'SEO Optimized'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: ['React Native', 'Flutter', 'App Store Ready'],
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Seamless API development and third-party service integrations',
    features: ['RESTful APIs', 'GraphQL', 'Microservices'],
  },
  {
    icon: Shield,
    title: 'Testing & QA',
    description: 'Comprehensive testing strategies for reliable software delivery',
    features: ['Automated Testing', 'Performance', 'Security Audits'],
  },
  {
    icon: Cloud,
    title: 'DevOps',
    description: 'Cloud infrastructure setup and deployment automation',
    features: ['CI/CD Pipelines', 'AWS/Azure', 'Docker/K8s'],
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Scalable database solutions with optimization and management',
    features: ['SQL/NoSQL', 'Data Migration', 'Performance Tuning'],
  },
]

const ServicesOverview = memo(() => {
  return (
    <section className="py-20 bg-[#edf2f4] text-[#2b2d42]" aria-label="Our Services Overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-lg text-[#8d99ae] max-w-2xl mx-auto">
            We offer comprehensive software development services to transform your ideas into powerful digital solutions.
          </p>
        </motion.div>

        {/* Grid of Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md border border-[#8d99ae]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-5">
                <div className="p-3 bg-[#ef233c]/10 rounded-xl mr-4">
                  <service.icon className="h-6 w-6 text-[#d90429]" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>

              <p className="text-[#8d99ae] mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 text-sm text-[#2b2d42]">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#d90429] mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d90429] !text-white font-bold rounded-xl hover:bg-[#ef233c] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
})

ServicesOverview.displayName = 'ServicesOverview'

export default ServicesOverview
