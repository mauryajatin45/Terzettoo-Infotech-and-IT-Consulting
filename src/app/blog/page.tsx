import React from 'react';
import BlogClient from './blogClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terzettoo Blog - IT Solutions, Web Development & Digital Marketing',
  description: 'Explore Terzettoo\'s blog for insights on web development, app development, UI/UX design, SEO, and digital marketing. Your trusted tech partner.',
  keywords: 'Terzettoo, IT solutions, web development, app development, UI/UX design, SEO, digital marketing, tech partner',
  authors: [{ name: 'Terzettoo' }],
};

export default function BlogPage() {
  return (
    <main>
      <BlogClient />
    </main>
  );
}
