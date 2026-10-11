'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'
import Image from 'next/image'

interface FormData {
  name: string
  email: string
  company?: string
  service: string
  budget: string
  message: string
}

const services = [
  'Custom Website Development',
  'Mobile App Development',
  'API Development & Integration',
  'Testing & Quality Assurance',
  'DevOps & Deployment',
  'Database Design & Management',
  'Consulting Services',
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000 - $100,000',
  'Above $100,000',
]

export default function ContactClient() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/admin@terzettoo.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Contact Form Submission from ${data.name}`,
          _template: 'table',
          _autoresponse: `Thank you for contacting us, ${data.name}! We've received your message and will get back to you within 24 hours.`
        })
      })

      const result = await response.json()
      if (result.success === 'true') {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#edf2f4] text-[#2b2d42]">
      {/* Hero Section */}
      <div className="relative h-[45vh] mt-16 w-full">
        <Image
          src="/image/Others/contactHero.jpg"
          alt="Contact Header"
          className="object-cover w-full h-full"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold !text-white mb-2">Thank you for your interest. Let&apos;s Talk!</h2>
          <p className="text-base md:text-lg max-w-2xl">
            Please fill the below form and we will get in touch with you within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-12 pb-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2b2d42]">
            Contact Us
          </h2>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-xl">

            {/* LEFT SIDE: Contact Info */}
            <div className="bg-[#ff5050] text-white px-8 py-12 flex flex-col justify-between space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <p className="leading-relaxed">
                  Office No. 809, Plot No.-146/2, MOUNT BIZPARK,
                  <br />
                  Vaishnodevi Circle, Sardar Patel Ring Rd,
                  <br />
                  near Malabar Exotica, opp. Dwarkesh Opulence,
                  <br />
                  Tragad, Gujarat 382470
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <div className="mb-4">
                  <p className="font-semibold">Email Here</p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> admin@terzettoo.com
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Call Here</p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+917016569676" className="!text-white hover:underline">
                      +91 7016569676
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Office Hour</h3>
                <p>Always Open for Businesses</p>
              </div>

              <div className="text-white space-y-4">
                <p className="text-white/90">
                  Need help or have a question? We&apos;re just a message away.
                  Our expert team is always available to guide you — feel free to connect anytime.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="px-8 py-12"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-[#8d99ae]">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-[#2b2d42]">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email address',
                          },
                        })}
                        className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                    <input
                      {...register('company')}
                      className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Service & Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Needed *</label>
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-sm text-red-600 mt-1">{errors.service.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Budget *</label>
                      <select
                        {...register('budget', { required: 'Please select a budget range' })}
                        className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details *</label>
                    <textarea
                      {...register('message', { required: 'Please describe your project' })}
                      rows={3}
                      className="w-full px-4 py-3 border border-[#8d99ae]/30 rounded-xl focus:ring-2 focus:ring-[#d90429] bg-white"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                    {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Honeypot field */}
                  <input type="text" name="_honey" style={{ display: 'none' }} />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer flex items-center justify-center px-6 py-4 bg-[#ff5050] text-white font-semibold rounded-xl hover:bg-[#ef233c] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="Terzettoo Location - Mount Bizpark, Ahmedabad"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4376.073046173677!2d72.5526368!3d23.1328732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83475371fe33%3A0xfe76307100c314bb!2sMount%20Bizpark!5e1!3m2!1sen!2sin!4v1791693550140!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  )
}