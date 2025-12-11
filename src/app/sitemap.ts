import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.terzettoo.com'

// Route configuration with priorities and change frequencies
const routeConfig = {
  // High priority pages
  high: {
    routes: ['', '/services', '/contact'],
    priority: 1.0,
    changeFrequency: 'weekly' as const,
  },
  // Medium-high priority (company pages)
  mediumHigh: {
    routes: ['/company/about', '/company/portfolio', '/career', '/blog'],
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  },
  // Medium priority (service pages)
  medium: {
    routes: [
      '/mobile-app-development',
      '/android-app-development',
      '/ios-app-development',
      '/ipad-app-development',
      '/react-app-development',
      '/flutter-development',
      '/web-development',
      '/frontend-development',
      '/react-js-development',
      '/ecommerce-portal-development',
      '/shopify-development',
      '/wordpress-development',
      '/java-development',
      '/php-development',
      '/dotnet-web-development',
      '/python-web-development',
      '/amazon-web-services-aws-development',
      '/ai-ml',
      '/data-analytics',
      '/computer-vision',
      '/chatbot-development',
      '/ui-ux-development',
      '/digital-marketing',
      '/seo-services',
      '/ppc-advertising',
      '/social-media-marketing',
      '/content-marketing-and-strategy',
      '/graphic-design-services',
      '/erp-implementation-and-customization',
      '/shopping-cart-development',
      '/technical-product-roadmaps',
      '/mvp-planning',
      '/saas-strategy-and-advisory',
      '/tech-stack-recommendations',
      '/client-vendor-matching',
      '/project-oversight-and-quality-monitoring',
    ],
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  },
  // Lower priority (legal pages)
  low: {
    routes: ['/company/faq', '/company/privacy', '/company/terms'],
    priority: 0.5,
    changeFrequency: 'yearly' as const,
  },
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  
  // Generate static pages from config
  const staticPages: MetadataRoute.Sitemap = Object.values(routeConfig).flatMap(
    ({ routes, priority, changeFrequency }) =>
      routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: now,
        changeFrequency,
        priority,
      }))
  )

  // Dynamic Blog Posts
  const blogDir = path.join(process.cwd(), 'src/app/blog')
  let blogPosts: MetadataRoute.Sitemap = []

  try {
    if (fs.existsSync(blogDir)) {
      const items = fs.readdirSync(blogDir)
      blogPosts = items
        .filter((item) => {
          const itemPath = path.join(blogDir, item)
          return (
            fs.statSync(itemPath).isDirectory() &&
            fs.existsSync(path.join(itemPath, 'page.tsx'))
          )
        })
        .map((slug) => ({
          url: `${BASE_URL}/blog/${slug}`,
          lastModified: now,
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }))
    }
  } catch (error) {
    // Silently handle error in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reading blog directory:', error)
    }
  }

  return [...staticPages, ...blogPosts]
}
