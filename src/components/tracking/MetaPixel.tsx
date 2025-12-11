'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense, useCallback } from 'react'

// Declare fbq as a global function
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

// Meta Pixel event types
export const FB_PIXEL_ID = '1256998902924411'

// Standard events
export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

// Track custom events
export const trackEvent = (eventName: string, options?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, options)
  }
}

// Track custom events (for non-standard events)
export const trackCustomEvent = (eventName: string, options?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, options)
  }
}

// Specific event tracking functions
export const trackLead = (data?: { content_name?: string; content_category?: string; value?: number }) => {
  trackEvent('Lead', data)
}

export const trackContact = () => {
  trackEvent('Contact')
}

export const trackViewContent = (data?: { content_name?: string; content_category?: string; content_ids?: string[] }) => {
  trackEvent('ViewContent', data)
}

export const trackSearch = (searchString: string) => {
  trackEvent('Search', { search_string: searchString })
}

export const trackInitiateCheckout = () => {
  trackEvent('InitiateCheckout')
}

export const trackSchedule = () => {
  trackEvent('Schedule')
}

export const trackCompleteRegistration = (data?: { content_name?: string; status?: string }) => {
  trackEvent('CompleteRegistration', data)
}

export const trackSubmitApplication = () => {
  trackEvent('SubmitApplication')
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackCustomEvent('ScrollDepth', { depth_percentage: percentage })
}

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackCustomEvent('TimeOnPage', { time_seconds: seconds })
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackCustomEvent('ButtonClick', { button_name: buttonName, location })
}

// Track form interactions
export const trackFormStart = (formName: string) => {
  trackCustomEvent('FormStart', { form_name: formName })
}

export const trackFormSubmit = (formName: string) => {
  trackCustomEvent('FormSubmit', { form_name: formName })
}

// Track outbound links
export const trackOutboundLink = (url: string) => {
  trackCustomEvent('OutboundLink', { destination_url: url })
}

// Component that handles route change tracking
function MetaPixelTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview()
      
      // Track page-specific content
      trackViewContent({
        content_name: pathname,
        content_category: getPageCategory(pathname)
      })
    }
  }, [pathname, searchParams])

  return null
}

// Helper function to categorize pages
function getPageCategory(pathname: string): string {
  if (pathname === '/') return 'Home'
  if (pathname.startsWith('/services')) return 'Services'
  if (pathname.startsWith('/about')) return 'About'
  if (pathname.startsWith('/contact')) return 'Contact'
  if (pathname.startsWith('/portfolio')) return 'Portfolio'
  if (pathname.startsWith('/blog')) return 'Blog'
  if (pathname.startsWith('/news')) return 'News'
  return 'Other'
}

// Main MetaPixel component with user activity tracking
export default function MetaPixel() {
  // Track scroll depth
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = Math.round((scrollTop / docHeight) * 100)

    // Track at 25%, 50%, 75%, and 100%
    const milestones = [25, 50, 75, 100]
    const reachedMilestones = JSON.parse(sessionStorage.getItem('scrollMilestones') || '[]')
    
    milestones.forEach(milestone => {
      if (scrollPercent >= milestone && !reachedMilestones.includes(milestone)) {
        trackScrollDepth(milestone)
        reachedMilestones.push(milestone)
        sessionStorage.setItem('scrollMilestones', JSON.stringify(reachedMilestones))
      }
    })
  }, [])

  // Track time on page
  useEffect(() => {
    const startTime = Date.now()
    const timeIntervals = [30, 60, 120, 300] // Track at 30s, 1min, 2min, 5min
    const trackedIntervals: number[] = []

    const checkTime = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000)
      
      timeIntervals.forEach(interval => {
        if (elapsedSeconds >= interval && !trackedIntervals.includes(interval)) {
          trackTimeOnPage(interval)
          trackedIntervals.push(interval)
        }
      })
    }, 5000)

    return () => clearInterval(checkTime)
  }, [])

  // Add scroll listener
  useEffect(() => {
    // Reset scroll milestones on new page
    sessionStorage.setItem('scrollMilestones', '[]')
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Track all link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      const button = target.closest('button')
      
      if (link) {
        const href = link.getAttribute('href')
        const isExternal = href?.startsWith('http') && !href.includes(window.location.hostname)
        
        if (isExternal && href) {
          trackOutboundLink(href)
        }
        
        // Track specific link types
        if (href?.includes('tel:')) {
          trackContact()
          trackCustomEvent('PhoneClick', { phone: href.replace('tel:', '') })
        }
        if (href?.includes('mailto:')) {
          trackContact()
          trackCustomEvent('EmailClick', { email: href.replace('mailto:', '') })
        }
        if (href?.includes('whatsapp')) {
          trackContact()
          trackCustomEvent('WhatsAppClick')
        }
      }
      
      if (button) {
        const buttonText = button.textContent?.trim() || 'Unknown'
        const buttonId = button.id || button.className.split(' ')[0] || 'no-id'
        
        // Track important buttons
        if (buttonText.toLowerCase().includes('contact') || 
            buttonText.toLowerCase().includes('get started') ||
            buttonText.toLowerCase().includes('submit') ||
            buttonText.toLowerCase().includes('send') ||
            buttonText.toLowerCase().includes('book') ||
            buttonText.toLowerCase().includes('schedule')) {
          trackButtonClick(buttonText, buttonId)
          
          if (buttonText.toLowerCase().includes('submit') || buttonText.toLowerCase().includes('send')) {
            trackLead({ content_name: buttonId })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Track form interactions
  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      const form = target.closest('form')
      
      if (form) {
        const formId = form.id || form.className.split(' ')[0] || 'unknown-form'
        const formStarted = sessionStorage.getItem(`form_started_${formId}`)
        
        if (!formStarted) {
          trackFormStart(formId)
          sessionStorage.setItem(`form_started_${formId}`, 'true')
        }
      }
    }

    const handleSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement
      const formId = form.id || form.className.split(' ')[0] || 'unknown-form'
      trackFormSubmit(formId)
      trackLead({ content_name: formId, content_category: 'Form Submission' })
    }

    document.addEventListener('focusin', handleFocus)
    document.addEventListener('submit', handleSubmit)
    
    return () => {
      document.removeEventListener('focusin', handleFocus)
      document.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return (
    <Suspense fallback={null}>
      <MetaPixelTracker />
    </Suspense>
  )
}
