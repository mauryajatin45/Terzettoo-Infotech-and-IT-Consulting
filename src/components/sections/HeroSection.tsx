"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = memo(() => {
  return (
    <section 
      id="hero-section" 
      className="relative mt-12 pt-20 pb-32 bg-[#d90429] text-white overflow-hidden"
      aria-label="Hero section - Full Stack Software Development Company"
    >
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center min-h-[600px]">
        {/* Left Textual Content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold leading-tight mb-6 !text-white"
          >
            Full Stack Software
            <br />
            Development Company
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg mb-8"
          >
            We cultivate solutions for your business — from custom web apps
            and e‑commerce stores to cloud integrations and UI/UX design.
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-white/90 transition-colors px-8 py-3 rounded-full font-semibold text-[#d90429]"
              aria-label="Get a quote for your software development project"
            >
              Get a Quote →
            </Link>
          </motion.div>
        </div>

        {/* Right Single Composite Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg"
          >
            <Image
              src="/image/Hero/Introduction1.png"
              alt="Terzettoo Full Stack Software Development Services Overview - Web, Mobile, Cloud and UI/UX Solutions"
              width={600}
              height={600}
              className="rounded-lg"
              priority
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
})

HeroSection.displayName = 'HeroSection'

export default HeroSection