'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle, DollarSign, Code, Shield, Database, Phone } from 'lucide-react'
import LatestArticlesSection from "@/components/sections/LatestArticlesSection";
interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  category?: string;
  readTime?: string;
  imageUrl?: string;
  buttonUrl?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Empowering Startups with Scalable Web Development",
    date: "June 1, 2024",
    category: "Web Development",
    readTime: "5 min read",
    summary:
      "Discover how Terzettoo helps startups build customized, scalable websites that grow with their business needs through modern technologies and agile methodologies.",
  },
  {
    id: 2,
    imageUrl: "/image/blog/Innovative-UI-UX-Design-for-Impactful-User-Experiences.png",
    title: "Innovative UI/UX Design for Impactful User Experiences",
    date: "June 10, 2024",
    category: "Design",
    readTime: "4 min read",
    buttonUrl: "/blog/Innovative-UI-UX-Design-for-Impactful-User-Experiences",
    summary:
      "Learn about our approach to blending creativity and technology to deliver user-centric designs that drive engagement and improve conversion rates.",
  },
  {
    id: 3,
    imageUrl: "/image/blog/seo-digital-marketing-strategies.png",
    title: "Boost Your Online Presence with Expert SEO & Digital Marketing",
    date: "June 15, 2024",
    category: "Marketing",
    readTime: "6 min read",
    buttonUrl: "/blog/seo-digital-marketing-strategies",
    summary:
      "Explore strategies Terzettoo uses to enhance visibility and attract customers through tailored SEO and marketing solutions that deliver measurable results.",
  },
  {
    id: 4,
    imageUrl: "/image/blog/trusted-tech-partner.png",
    title: "Your Trusted Tech Partner: From Idea to Execution",
    date: "June 20, 2024",
    category: "Company",
    readTime: "7 min read",
    buttonUrl: "/blog/trusted-tech-partner",
    summary:
      "How Terzettoo collaborates with businesses to turn innovative ideas into high-performing digital solutions through our comprehensive development process.",
  },
];


const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    icon: MessageCircle,
    faqs: [
      {
        question: "What services does Terzettoo offer?",
        answer:
          "We offer comprehensive software development services including custom website development, mobile app development, API development & integration, testing & QA, DevOps & deployment, and database design & management.",
      },
      // {
      //   question: "How long has Terzettoo been in business?",
      //   answer:
      //     "Terzettoo has been delivering high-quality software solutions for over 5 years, with a team of experienced developers who have worked on 150+ successful projects.",
      // },
      {
        question: "What industries do you work with?",
        answer:
          "We work with diverse industries including e-commerce, healthcare, fintech, education, real estate, and startups. Our flexible approach allows us to adapt to any business domain.",
      },
      {
        question: "Do you work with startups?",
        answer:
          "Absolutely! We love working with startups and offer special packages for early-stage companies, including MVP development and scalable architecture planning.",
      },
    ],
  },
  {
    id: 'technology',
    title: 'Technology Stack',
    icon: Code,
    faqs: [
      {
        question: "What technologies do you specialize in?",
        answer:
          "Our core stack includes React/Next.js for frontend, Node.js/Python for backend, React Native/Flutter for mobile, AWS/Azure for cloud, and PostgreSQL/MongoDB for databases.",
      },
      {
        question: "Do you work with legacy systems?",
        answer:
          "Yes, we have experience modernizing legacy systems through refactoring, microservices architecture, or complete rewrites when necessary.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Definitely. We specialize in API integrations with CRMs, ERPs, payment gateways, and other third-party services.",
      },
      {
        question: "Do you provide AI/ML solutions?",
        answer:
          "Yes, we offer AI/ML integration services including recommendation engines, predictive analytics, and computer vision solutions.",
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Payment',
    icon: DollarSign,
    faqs: [
      {
        question: "How do you price your projects?",
        answer:
          "Our pricing is project-based and depends on complexity, timeline, and specific requirements. We provide detailed quotes after understanding your needs through a free consultation.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment plans. Typically, we work with milestone payments: 30% upfront, 40% mid-way, and 30% on delivery.",
      },
      {
        question: "Are there any hidden costs?",
        answer:
          "No, we believe in transparent pricing. All costs are clearly outlined in our project proposal, including development, testing, deployment, and any applicable third-party fees.",
      },
    ],
  },
  {
    id: 'process',
    title: 'Development Process',
    icon: Database,
    faqs: [
      {
        question: "What is your development process?",
        answer:
          "We follow an agile development methodology: Discovery → Design → Development → QA → Deployment → Maintenance, with regular communication throughout.",
      },
      {
        question: "How do you ensure code quality?",
        answer:
          "We use modern tools like CI/CD, peer review, automated testing, and follow clean code practices to ensure reliability and maintainability.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes, we provide support packages that include bug fixes, updates, monitoring, and ongoing improvements.",
      },
      {
        question: "How often will we receive updates?",
        answer:
          "We provide weekly progress reports and can schedule bi-weekly demo calls to review the current state of your project.",
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    icon: Shield,
    faqs: [
      {
        question: "How do you handle data security?",
        answer:
          "We implement industry-standard security measures including encryption, role-based access control, regular security audits, and penetration testing.",
      },
      {
        question: "Are you GDPR compliant?",
        answer:
          "Yes, we ensure all our solutions are GDPR compliant and can help you implement necessary data protection measures.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Absolutely. We take client confidentiality seriously and are happy to sign NDAs before any project discussion.",
      },
    ],
  },
]

export default function FAQClient() {
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const toggleFAQ = (faqIndex: string) => {
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex)
  }

  return (
    <div className="pt-20 pb-16 bg-[#edf2f4] text-[#2b2d42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        {/* FAQ Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#d90429] to-[#ef233c]">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#5f6c7b] max-w-3xl mx-auto">
            Everything you need to know about working with Terzettoo. Can&apos;t find what you&apos;re looking for?
            <a href="/contact" className="text-[#d90429] hover:underline ml-1">Contact us directly.</a>
          </p>
        </motion.div>

        {/* Grid with Sidebar + Content */}
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-2">
              <h3 className="text-lg font-semibold mb-4 px-2">Browse by Category</h3>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id)
                    setOpenFAQ(null)
                  }}
                  className={`w-full flex items-center p-4 rounded-xl transition-all text-left group ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#d90429] to-[#ef233c] text-white shadow-lg'
                    : 'bg-white border border-[#e2e8f0] text-[#2b2d42] hover:border-[#d90429]/30 hover:shadow-md'
                    }`}
                >
                  <category.icon className={`h-5 w-5 mr-3 ${selectedCategory === category.id ? 'text-white' : 'text-[#d90429] group-hover:text-[#ef233c]'
                    }`} />
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Question List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm border border-[#e2e8f0] p-6"
              >
                {faqCategories
                  .filter((c) => c.id === selectedCategory)
                  .map((category) => (
                    <div key={category.id}>
                      <div className="flex items-center mb-8">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-[#d90429] to-[#ef233c] mr-4">
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold">{category.title}</h2>
                      </div>

                      <div className="space-y-4">
                        {category.faqs.map((faq, idx) => {
                          const key = `${category.id}-${idx}`
                          return (
                            <div
                              key={key}
                              className="overflow-hidden rounded-xl border border-[#e2e8f0] hover:border-[#d90429]/30 transition-all"
                            >
                              <button
                                onClick={() => toggleFAQ(key)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-[#f8f9fa] transition-colors"
                              >
                                <h3 className="text-lg font-semibold pr-4 text-[#2b2d42]">
                                  {faq.question}
                                </h3>
                                <ChevronDown
                                  className={`h-5 w-5 text-[#d90429] transition-transform duration-300 ${openFAQ === key ? 'rotate-180' : ''
                                    }`}
                                />
                              </button>

                              {/* FAQ Answer */}
                              <AnimatePresence>
                                {openFAQ === key && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 pb-6 pt-2 text-[#5f6c7b]">
                                      {faq.answer}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 mb-20"
        >
          <div className="bg-gradient-to-r bg-white shadow-2xl text-[#ff0000] rounded-2xl p-10 text-center ">
            <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              We&apos;re here to help. Get in touch with our team for personalized answers to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#d90429] !text-[#ffffff] font-bold rounded-xl hover:bg-[#d90427e9] transition shadow-md hover:shadow-lg"
              >
                Contact Our Team
              </a>
              <a
                href="tel:+917016569676"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#d90429] text-[#d90429] font-bold rounded-xl hover:bg-[#d90429] hover:!text-white transition shadow-md hover:shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>

        {/* Latest Articles Section */}
        <LatestArticlesSection blogPosts={blogPosts} />
      </div>
    </div>
  )
}