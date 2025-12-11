'use client'
import { memo, useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    rating: 5,
    text: 'Terzettoo delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched. Our sales increased by 40% within the first month!',
    project: 'E-commerce Platform',
    image: '/image/testimonial_image/sarah.webp',
    alt: 'Photo of Sarah Johnson',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'HealthTech Solutions',
    role: 'CTO',
    rating: 5,
    text: 'The mobile app they developed for us is simply outstanding. Clean code, beautiful UI, and perfect performance. They understood our vision and brought it to life flawlessly.',
    project: 'Healthcare Mobile App',
    image: '/image/testimonial_image/michael.png',
    alt: 'Photo of Michael Chen',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'FinanceFlow',
    role: 'Product Manager',
    rating: 5,
    text: 'Working with Terzettoo was a game-changer for our startup. They delivered a scalable fintech solution on time and within budget. Their expertise in API integration saved us months of development.',
    project: 'Fintech API Platform',
    image: '/image/testimonial_image/emily.jpg',
    alt: 'Photo of Emily Rodriguez',
  },
  {
    id: 4,
    name: 'David Kim',
    company: 'EduLearn Platform',
    role: 'Founder',
    rating: 5,
    text: "Incredible team! They built our learning management system with features we didn't even know we needed. The platform handles thousands of users seamlessly.",
    project: 'Learning Management System',
    image: '/image/testimonial_image/david.jpg',
    alt: 'Photo of David Kim',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    company: 'RetailHub',
    role: 'Operations Director',
    rating: 5,
    text: 'The inventory management system they created revolutionized our operations. Real-time tracking, automated alerts, and comprehensive reporting — everything works perfectly.',
    project: 'Inventory Management System',
    image: '/image/testimonial_image/lisa.jpg',
    alt: 'Photo of Lisa Thompson',
  },
]

const TestimonialsSection = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  const updateCardsToShow = useCallback(() => {
    const width = window.innerWidth
    if (width < 640) {
      setCardsToShow(1)
    } else if (width < 1024) {
      setCardsToShow(2)
    } else {
      setCardsToShow(3)
    }
  }, [])

  useEffect(() => {
    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [updateCardsToShow])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 3000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const getTransformValue = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const cardWidth = containerWidth / cardsToShow
      return -currentIndex * cardWidth
    }
    return 0
  }

  return (
    <section className="py-20 bg-[#edf2f4] text-[#2b2d42] overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-[#8d99ae] max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about our work.
          </p>
        </motion.div>

        {/* Carousel */}
        <div ref={containerRef} className="relative h-[420px] overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 flex gap-8"
            style={{
              transform: `translateX(${getTransformValue()}px)`,
              transition: 'transform 0.5s ease-in-out',
              width: `${(duplicatedTestimonials.length / cardsToShow) * 100}%`
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border border-[#8d99ae]/20 rounded-3xl p-6 md:p-8 shadow-lg flex flex-col justify-between"
                style={{
                  width: `${100 / (duplicatedTestimonials.length / cardsToShow)}%`,
                  minWidth: 0
                }}
              >
                <div className="absolute top-5 left-5 opacity-10">
                  <Quote className="h-12 w-12 text-[#d90429]" />
                </div>

                <div className="flex mb-4 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-[#2b2d42] text-base leading-relaxed mb-6">
                  “{testimonial.text}”
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[#2b2d42]">{testimonial.name}</div>
                    <div className="text-sm text-[#8d99ae]">{testimonial.role} at {testimonial.company}</div>
                    <div className="text-sm text-[#d90429] font-medium">{testimonial.project}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? 'bg-[#d90429]' : 'bg-[#8d99ae]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
})

TestimonialsSection.displayName = 'TestimonialsSection'

export default TestimonialsSection
