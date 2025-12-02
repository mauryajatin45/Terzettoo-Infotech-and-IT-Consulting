'use client'
import ServicePageTemplate, { ServiceContent } from '@/components/templates/ServicePageTemplate'
import { Smartphone, Code, Zap, Shield, Users, Globe } from 'lucide-react'

const mobileAppDevelopmentContent: ServiceContent = {
  hero: {
    title: 'Mobile App Development',
    subtitle: 'Innovative Mobile Solutions',
    description: 'Create engaging and high-performance mobile applications for your business needs. Our expert developers build apps for iOS and Android platforms with seamless user experiences.',
    primaryCTA: 'Start Your Mobile App',
    secondaryCTA: 'Explore Our Portfolio',
    heroImage: '/image/Services/mobile-app_development.jpg'
  },
  overview: {
    title: 'Comprehensive Mobile App Development',
    description: 'We deliver custom mobile apps that drive business growth and customer engagement. Our solutions are scalable, secure, and optimized for performance.',
    keyPoints: [
      'Custom iOS and Android Apps',
      'User-Centric Design',
      'Robust Backend Integration',
      'Agile Development Process',
      'Cross-Platform Compatibility',
      'Ongoing Support and Maintenance'
    ]
  },
  features: {
    title: 'Key Features of Our Mobile Apps',
    items: [
      {
        icon: Code,
        title: 'Custom Development',
        description: 'Tailored app solutions built to meet your unique business requirements.'
      },
      {
        icon: Zap,
        title: 'Fast Performance',
        description: 'Optimized code and architecture for smooth and responsive apps.'
      },
      {
        icon: Smartphone,
        title: 'Cross-Platform Support',
        description: 'Apps that work seamlessly across iOS and Android devices.'
      },
      {
        icon: Users,
        title: 'User-Friendly Interface',
        description: 'Intuitive designs that enhance user engagement and satisfaction.'
      },
      {
        icon: Globe,
        title: 'Global Reach',
        description: 'Apps designed to scale and serve users worldwide.'
      },
      {
        icon: Shield,
        title: 'Security Focused',
        description: 'Implementing best practices to protect user data and privacy.'
      }
    ]
  },
  benefits: {
    title: 'Benefits of Choosing Our Mobile App Development',
    items: [
      {
        title: 'Accelerated Time to Market',
        description: 'Efficient development cycles to launch your app quickly.'
      },
      {
        title: 'Cost-Effective Solutions',
        description: 'Optimized development processes to reduce costs without compromising quality.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Apps built to grow with your business needs.'
      },
      {
        title: 'Expert Support',
        description: 'Dedicated team providing ongoing maintenance and updates.'
      }
    ]
  },
  process: {
    title: 'Our Mobile App Development Process',
    steps: [
      {
        number: '01',
        title: 'Requirement Analysis',
        description: 'Understanding your business goals and app requirements.'
      },
      {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Creating user-centric designs and interactive prototypes.'
      },
      {
        number: '03',
        title: 'Development & Testing',
        description: 'Agile development with continuous testing and quality assurance.'
      },
      {
        number: '04',
        title: 'Deployment & Support',
        description: 'Launching the app and providing ongoing support and updates.'
      }
    ]
  },
  technologies: {
    title: 'Technologies We Use',
    items: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Java', 'Objective-C', 'Firebase', 'AWS']
  },
  stats: [
    { number: '100+', label: 'Mobile Apps Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Expert Developers' },
    { number: '3+', label: 'Years of Experience' }
  ],
  writtenContent: {
    title: 'Why Choose Our Mobile App Development Services?',
    paragraphs: [
      'Our mobile app development team combines technical expertise with creative design to deliver apps that engage users and drive business growth.',
      'We focus on building scalable, secure, and high-performance applications tailored to your unique requirements.',
      'Our agile development process ensures timely delivery and continuous improvement based on user feedback.'
    ],
    facts: [
      { label: 'Apps Delivered', value: '100+' },
      { label: 'Satisfied Clients', value: '95%' },
      { label: 'Expert Developers', value: '50+' },
      { label: 'Years in Business', value: '10+' }
    ]
  },
  richTextContent: {
    title: 'Mastering Mobile: A Strategic Approach to App Development',
    content: `
      <h3>Native vs. Cross-Platform: Making the Right Choice</h3>
      <p>Choosing between native (Swift/Kotlin) and cross-platform (React Native/Flutter) development is a critical decision. We help you weigh the pros and cons based on your performance needs, budget, and time-to-market goals.</p>
      
      <h3>User-Centric Design Philosophy</h3>
      <p>Great apps are built on empathy. Our design process involves:</p>
      <ul>
        <li><strong>User Research:</strong> Understanding your audience's pain points and behaviors.</li>
        <li><strong>Prototyping:</strong> Iterative wireframing to test flows before writing code.</li>
        <li><strong>UI Design:</strong> Crafting pixel-perfect interfaces that delight users.</li>
      </ul>

      <h3>Security & Scalability</h3>
      <p>Mobile security is non-negotiable. We implement robust encryption, secure authentication (OAuth, Biometrics), and follow OWASP mobile security best practices to protect your user data. Our backend architectures are designed to scale effortlessly from 1,000 to 1,000,000 users.</p>
    `
  },
  relatedServices: [
    {
      title: 'Web Development',
      href: '/web-development',
      description: 'Complement your app with a powerful marketing website or web portal.'
    },
    {
      title: 'UI/UX Design',
      href: '/ui-ux-development',
      description: 'Ensure your app is intuitive, accessible, and visually stunning.'
    },
    {
      title: 'Cloud Services',
      href: '/amazon-web-services-aws-development',
      description: 'Reliable cloud infrastructure to power your app\'s backend.'
    }
  ]
}

export default function MobileAppDevelopmentClient() {
  return <ServicePageTemplate content={mobileAppDevelopmentContent} />
}