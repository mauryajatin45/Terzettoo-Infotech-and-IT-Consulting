import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // SEO 301 Permanent Redirects for legacy and variant paths
  async redirects() {
    return [
      {
        source: '/careers',
        destination: '/career',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/company/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/company/terms',
        permanent: true,
      },
      {
        source: '/saas-strategy',
        destination: '/saas-strategy-and-advisory',
        permanent: true,
      },
      {
        source: '/tech-stack-recommendation',
        destination: '/tech-stack-recommendations',
        permanent: true,
      },
      {
        source: '/blog/empowering-startups-with-scalable-web-development',
        destination: '/blog/Empowering-Startups-with-Scalable-Web-Development',
        permanent: true,
      },
      {
        source: '/blog/innovative-ui-ux-design-for-impactful-user-experiences',
        destination: '/blog/Innovative-UI-UX-Design-for-Impactful-User-Experiences',
        permanent: true,
      },
      {
        source: '/blog/ui-ux-design-impactful-experiences',
        destination: '/blog/Innovative-UI-UX-Design-for-Impactful-User-Experiences',
        permanent: true,
      },
    ];
  },

  // Image optimization configuration
  // WebP only: AVIF encoding in sharp is far heavier on CPU/RAM and was a main
  // driver of the server's memory creep. Fewer sizes = fewer variants to generate/cache.
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [32, 64, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Cap Next's in-memory cache (default 50 MB) so it can't grow unbounded.
  cacheMaxMemorySize: 32 * 1024 * 1024,

  // Enable compression
  compress: true,

  // Optimize production builds
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.google.com https://www.google-analytics.com https://www.facebook.com https://flagcdn.com; font-src 'self' data:; frame-src 'self' https://www.google.com https://www.google.com/maps https://www.youtube.com https://youtube.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://formsubmit.co https://www.facebook.com; base-uri 'self'; form-action 'self' https://formsubmit.co;",
          },
        ],
      },
      // Cache static assets
      {
        source: '/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
