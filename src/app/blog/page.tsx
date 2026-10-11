import React from 'react';
import BlogClient from './blogClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terzettoo Blog - IT Solutions, Web Development & Digital Marketing',
  description: 'Explore Terzettoo\'s blog for insights on web development, app development, UI/UX design, SEO, and digital marketing. Your trusted tech partner.',
  keywords: 'Terzettoo, IT solutions, web development, app development, UI/UX design, SEO, digital marketing, tech partner',
  authors: [{ name: 'Terzettoo' }],
  alternates: {
    canonical: 'https://www.terzettoo.com/blog',
  },
  openGraph: {
    title: 'Terzettoo Blog - IT Solutions & Technology Insights',
    description: 'Expert perspectives on web development, mobile apps, UI/UX design, and digital growth from the Terzettoo team.',
    url: 'https://www.terzettoo.com/blog',
    siteName: 'Terzettoo',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogClient />
    </main>
  );
}
