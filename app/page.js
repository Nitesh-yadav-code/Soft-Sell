"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Upload, DollarSign, CreditCard, Shield, Clock, Award, Users, Moon, Sun } from "lucide-react"
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }


  const testimonials = [
    {
      name: "Priya Sharma",
      role: "IT Director",
      company: "Microsoft.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      quote:
        "SoftSell helped us recover over $50,000 from unused software licenses. The process was seamless and their valuation was fair and transparent.",
    },
    {
      name: "John Doe",
      role: "CFO",
      company: "Innovate Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      quote:
        "As we transitioned to cloud services, SoftSell made it easy to offload our legacy licenses. Their team was professional and the payment was processed quickly.",
    },
  ]

  return (
    <div className="min-h-screen bg-white  dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: 0 }}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
            </motion.div>
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">SoftSell</span>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Turn Unused Software Licenses Into Cash
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  SoftSell helps businesses recover value from their unused or underutilized software licenses through
                  our secure and transparent resale platform.
                </p>
                <motion.button
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sell My Licenses
                  <ArrowRight className="ml-2" size={18} />
                </motion.button>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                  alt="Software license management"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our streamlined process makes it easy to convert your unused software licenses into cash.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Upload className="w-12 h-12 text-blue-500" />,
                  title: "Upload License",
                  description: "Submit your license details through our secure portal for review.",
                },
                {
                  icon: <DollarSign className="w-12 h-12 text-blue-500" />,
                  title: "Get Valuation",
                  description: "Receive a fair market valuation based on current demand and license type.",
                },
                {
                  icon: <CreditCard className="w-12 h-12 text-blue-500" />,
                  title: "Get Paid",
                  description: "Accept our offer and receive payment through your preferred method.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                SoftSell offers unique advantages that make us the preferred choice for software license resale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="w-10 h-10 text-blue-500" />,
                  title: "Secure Transactions",
                  description:
                    "End-to-end encryption and secure transfer protocols protect your sensitive license data.",
                },
                {
                  icon: <Clock className="w-10 h-10 text-blue-500" />,
                  title: "Fast Processing",
                  description: "Get valuations within 24 hours and payment within 3 business days of acceptance.",
                },
                {
                  icon: <Award className="w-10 h-10 text-blue-500" />,
                  title: "Best Value",
                  description:
                    "Our extensive network of buyers ensures you get the best possible price for your licenses.",
                },
                {
                  icon: <Users className="w-10 h-10 text-blue-500" />,
                  title: "Expert Support",
                  description:
                    "Our team of licensing experts is available to guide you through every step of the process.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Hear from businesses that have successfully recovered value from their software assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
       <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
