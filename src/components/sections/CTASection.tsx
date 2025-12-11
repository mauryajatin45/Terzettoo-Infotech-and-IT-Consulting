"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CTASection = memo(() => {
  const benefits = [
    "Free consultation and project estimation",
    "Dedicated project manager and team",
    "Regular progress updates and demos",
    "Post-launch support and maintenance",
  ];

  return (
    <section className="py-20 bg-[#edf2f4] text-[#2b2d42] relative overflow-hidden">
      {/* Decoration floats */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[60px] h-[60px] bg-[#d90429]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-[100px] h-[100px] bg-[#ef233c]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-[40%] w-16 h-16 bg-white/30 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Business Ideas?
            </h2>

            <p className="text-lg mb-8 text-[#8d99ae] leading-relaxed">
              Let&apos;s discuss your project and create something amazing
              together. Our team of experts is ready to bring your vision to
              life with cutting-edge technology.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8 text-sm">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center text-[#2b2d42]"
                >
                  <CheckCircle className="h-5 w-5 mr-3 text-[#d90429]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#d90429] !text-white font-bold rounded-xl hover:bg-[#ef233c] transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/company/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#d90429] text-[#d90429] font-semibold rounded-xl hover:bg-[#ef233c]/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Additional Contact Prompts */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8 pt-8 border-t border-[#8d99ae]/30 text-sm">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>admin@terzettoo.com</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Schedule a free consultation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Card – Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="bg-white border border-[#8d99ae]/20 shadow-xl rounded-2xl p-8">
                {/* Card Heading */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#2b2d42]">
                    Let&apos;s Get Started
                  </h3>
                  <p className="text-sm text-[#8d99ae]">
                    Get your free project consultation
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-4 text-sm">
                  {[
                    "Share your idea",
                    "Get detailed proposal",
                    "Start building",
                  ].map((label, i) => (
                    <div
                      key={i}
                      className="flex items-center p-3 bg-[#edf2f4] rounded-xl"
                    >
                      <div className="w-8 h-8 bg-[#d90429] text-white rounded-full flex items-center justify-center font-bold mr-3">
                        {i + 1}
                      </div>
                      <span className="text-[#2b2d42] font-medium">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer: Trust Badges or Logos */}
                <div className="mt-6 pt-6 border-t border-[#8d99ae]/20 text-center">
                  <p className="text-xs text-[#8d99ae] mb-4">
                    Trusted by 50+ companies
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { src: "/image/Others/gujarat-terce-laboratories-ltd.png", alt: "Gujarat Terce Laboratories - Trusted Client" },
                      { src: "/image/Others/usp.jpg", alt: "USP - Trusted Client" },
                      { src: "/image/Others/datec.png", alt: "Datec - Trusted Client" },
                      { src: "/image/Others/Nordic.png", alt: "Nordic - Trusted Client" },
                      { src: "/image/Others/sms.png", alt: "SMS - Trusted Client" },
                    ].map((company) => (
                      <Image
                        key={company.src}
                        src={company.src}
                        alt={company.alt}
                        width={80}
                        height={32}
                        loading="lazy"
                        className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Emojis */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-[#d90429] text-white rounded-xl shadow-lg flex items-center justify-center"
              >
                🚀
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-500 rounded-xl shadow-lg flex items-center justify-center text-white"
              >
                💡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
})

CTASection.displayName = 'CTASection'

export default CTASection
