'use client'

import { useEffect, useRef, useState, memo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Easing function for smooth animation
const easeOutQuad = (t: number): number => t * (2 - t)

interface AnimatedNumberProps {
  value: number
  isInView: boolean
  isPercentage?: boolean
  isRating?: boolean
}

const AnimatedNumber = memo(({
  value,
  isInView,
  isPercentage = false,
  isRating = false
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0)
      return
    }

    const duration = 2000
    const startTime = performance.now()
    let animationId: number

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const easedProgress = easeOutQuad(progress)
      const currentValue = value * easedProgress

      setDisplayValue(currentValue)

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isInView, value])

  const formattedValue = isRating
    ? `${displayValue.toFixed(1)}/5`
    : isPercentage
      ? `${Math.round(displayValue)}%`
      : `${Math.round(displayValue)}+`

  return <>{formattedValue}</>
})

AnimatedNumber.displayName = 'AnimatedNumber'

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: 150, label: 'Projects Delivered' },
    { value: 98, label: 'Client Retention' },
    { value: 4.9, label: 'Average Rating' },
    { value: 24, label: 'Support Coverage' }
  ]

  return (
    <section
      ref={ref}
      className="py-16 bg-white -mt-12 shadow-xl rounded-t-3xl relative z-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#d90429] mb-2">
                <AnimatedNumber
                  value={stat.value}
                  isInView={isInView}
                  isPercentage={stat.label.includes('Retention')}
                  isRating={stat.label.includes('Rating')}
                />
              </div>
              <div className="text-sm uppercase tracking-wider text-[#8d99ae]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const reviewData = [
  {
    platform: 'Clutch',
    iconUrl: '/image/Stats/clutch.png',
    rating: 4.9,
    stars: '★★★★★',
    review: 'Exceptional service and attention to detail. Would highly recommend!',
    link: 'https://clutch.co/profile/terzettoo'
  },
  {
    platform: 'GoodFirms',
    iconUrl: '/image/Stats/Goodfirms.jpg',
    rating: 5,
    stars: '★★★★★',
    review: 'Their team delivered beyond our expectations. Truly professionals.',
    link: '#'
  },
  {
    platform: 'Google',
    iconUrl: '/image/Stats/Google.png',
    rating: 4.9,
    stars: '★★★★☆',
    review: 'Reliable and innovative solutions. Great communication throughout.',
    link: '#'
  },
  {
    platform: 'Glassdoor',
    iconUrl: '/image/Stats/glassdoor.webp',
    rating: 4.3,
    stars: '★★★★☆',
    review: 'Great workplace culture and challenging projects. Love working here!',
    link: '#'
  }
] as const

const SocialReviewsSection = memo(() => {

  return (
    <section className="bg-[#d90429] py-12 text-white relative rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 !text-white">Trusted by Clients Worldwide</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {reviewData.map((review, index) => (
            <motion.div
              key={review.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {/* Platform icon and name */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg mr-3">
                  {/* Use next/image for optimized loading */}
                  <Image
                    src={review.iconUrl}
                    alt={`${review.platform} logo`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{review.platform}</h3>
              </div>

              {/* Stars and rating */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-xl mr-2">{review.stars}</span>
                <span className="font-bold text-gray-700">{review.rating.toFixed(1)}</span>
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm mb-4 italic">&quot;{review.review}&quot;</p>

              {/* See full review link */}
              <Link
                href={review.link}
                className="text-sm font-medium text-[#d90429] hover:text-[#ef233c] flex items-center"
                target='_blank'
              >
                See full review
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="#"
            className="inline-block bg-white text-[#d90429] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm md:text-base shadow-lg hover:shadow-xl"
          >
            See All Reviews →
          </Link>
        </motion.div>
      </div>
    </section>
  )
})

SocialReviewsSection.displayName = 'SocialReviewsSection'

const StatsWithReviews = memo(() => {
  return (
    <div className="relative">
      <StatsSection />
      <SocialReviewsSection />
    </div>
  )
})

StatsWithReviews.displayName = 'StatsWithReviews'

export default StatsWithReviews