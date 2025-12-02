import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://www.terzettoo.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/company/about',
    '/company/portfolio',
    '/company/faq',
    '/company/privacy',
    '/company/terms',
    '/career',
    '/contact',
    '/blog',
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
  ]

  const staticPages = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Blog Posts
  const blogDir = path.join(process.cwd(), 'src/app/blog')
  let blogPosts: MetadataRoute.Sitemap = []

  try {
    const items = fs.readdirSync(blogDir)
    blogPosts = items
      .filter((item) => {
        const itemPath = path.join(blogDir, item)
        return fs.statSync(itemPath).isDirectory() && fs.existsSync(path.join(itemPath, 'page.tsx'))
      })
      .map((slug) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
  } catch (error) {
    console.error('Error reading blog directory:', error)
  }

  return [...staticPages, ...blogPosts]
}
