import React from "react";
import Image from "next/image";
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
    imageUrl: "/image/blog/EmpoweringStartupswithScalableWebDevelopment.png",
    buttonUrl: "/blog/Empowering-Startups-with-Scalable-Web-Development",
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

const BlogClient: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative mt-16 bg-gradient-to-b from-[#d90429] to-[#8d0224] text-white py-24 md:py-32">        <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/image/blog/pattern.svg')] bg-repeat opacity-20"></div>
      </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Terzettoo</span> Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 opacity-90">
              Expert perspectives on web development, design, and digital strategy
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <article className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-80 lg:h-auto relative">
              <Image
                src="/image/blog/EmpoweringStartupswithScalableWebDevelopment.png"
                alt="Preview: Empowering Startups with Scalable Web Development"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-[#d90429] text-white text-xs px-3 py-1 rounded-full font-bold">
                  Featured
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium text-[#d90429]">
                  {blogPosts[0].category}
                </span>
                <span className="text-sm text-gray-500">
                  {blogPosts[0].date}
                </span>
                <span className="text-sm text-gray-500">
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].summary}</p>
              <a
                href="/blog/Empowering-Startups-with-Scalable-Web-Development"
                className="inline-flex items-center px-6 py-3 rounded-md font-medium !text-white bg-[#d90429] hover:bg-[#b00322] transition-colors group"
              >
                Read Article
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* Latest Articles Section */}
      <LatestArticlesSection blogPosts={blogPosts} />
    </div>
  );
};

export default BlogClient;