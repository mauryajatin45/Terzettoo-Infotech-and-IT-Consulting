'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ShieldAlert, Trash2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ScrubbLandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden pt-20 flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#111827]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#d90429]/30 to-purple-600/30 blur-[120px]" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-600/20 to-[#d90429]/20 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative w-48 h-16 sm:w-64 sm:h-20"
            >
              <Image 
                src="/image/DeleteAccount/DeleteAccount.png" 
                alt="Delete Account Logo" 
                fill 
                className="object-contain"
              />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
            >
              Pass Apple App Store Review <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d90429] to-orange-400">Instantly.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Pass Apple 5.1.1 and GDPR instantly. Add a native account deletion block directly to your storefront.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-[#d90429] hover:bg-[#ef233c] text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(217,4,41,0.4)] hover:shadow-[0_0_30px_rgba(217,4,41,0.6)] flex items-center justify-center group">
                Install on Shopify
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                The Regulatory Wall
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Getting an iOS app rejected due to Apple Guideline 5.1.1 is frustrating. Delete Account fixes this by letting you add a native account deletion block to your storefront without coding.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Beyond instant compliance for Apple and GDPR, Delete Account helps you manage churn. You can set a custom grace period before permanent deletion, collect exit feedback, and trigger webhooks to erase customer data across your other platforms. Secure your store and pass your app reviews effortlessly without impacting page speed.
              </p>
              <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                <ShieldAlert className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-red-900 mb-1">App Store Rejection Risk</h4>
                  <p className="text-red-700 text-sm">Without a proper account deletion flow, Apple reviewers will flag your app under Guideline 5.1.1v, delaying your launch indefinitely.</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d90429] to-purple-600 rounded-3xl transform rotate-3 opacity-10" />
              <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 relative z-10 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Trash2 className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Account Settings</h3>
                      <p className="text-sm text-gray-500">Customer Profile</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                  <div className="h-4 bg-gray-100 rounded w-5/6 mb-8" />
                  <button className="w-full py-3 bg-red-50 text-red-600 font-medium rounded-xl border border-red-200 flex items-center justify-center space-x-2 hover:bg-red-100 transition-colors">
                    <Trash2 className="w-4 h-4" />
                    <span>Delete Account Permanently</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantage & Pricing */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">The &quot;Anti-Bloat&quot; Build</h2>
              <p className="text-lg text-gray-600 mb-8">
                Existing competitors focus on heavy, bloated enterprise GDPR suites with complex multi-language dashboards, charging anywhere from $5 to $15+ per month. 
                <br/><br/>
                We built Delete Account to be a plug-and-play theme block that works instantly. Marketed explicitly as an Apple App Store Approval Tool, it&apos;s the specific painkiller you need without the bloat you don&apos;t.
              </p>
              <ul className="space-y-6">
                {[
                  "Add a native account deletion block to your theme with zero coding required.",
                  "Set custom grace periods to delay permanent deletion and allow account recovery.",
                  "Collect custom exit feedback from users to understand why they are leaving.",
                  "Fire custom webhooks to erase user data across your other marketing platforms."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-[#111827] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d90429] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 bg-[#d90429]/20 text-[#d90429] font-semibold rounded-full text-sm mb-6 border border-[#d90429]/30">
                  Flat Subscription
                </div>
                <div className="mb-2">
                  <span className="text-6xl font-extrabold">$2.99</span>
                  <span className="text-gray-400 text-xl font-medium"> / month</span>
                </div>
                <p className="text-gray-400 mb-8 pb-8 border-b border-gray-800">Everything you need to pass App Store review.</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#d90429]" />
                    <span>Unlimited Account Deletions</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#d90429]" />
                    <span>Native Shopify Theme Block</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-[#d90429]" />
                    <span>GDPR & CCPA Redaction Support</span>
                  </li>
                </ul>

                <button className="w-full py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center group">
                  Get Delete Account on Shopify
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-[#d90429]" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Privacy Policy Link */}
      <footer className="mt-auto py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Terzettoo Infotech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/products/scrubb/privacy" className="hover:text-[#d90429] transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#d90429] transition-colors font-medium">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
