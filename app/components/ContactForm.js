import React from 'react'
import { useState } from "react"
import { motion } from "framer-motion"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      })
       const [errors, setErrors] = useState({})
        const [submitted, setSubmitted] = useState(false)

      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name]: value,
        })
      }
      const validateForm = () => {
        const tempErrors = {}
        if (!formData.name) tempErrors.name = "Name is required"
        if (!formData.email) {
          tempErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          tempErrors.email = "Email is invalid"
        }
        if (!formData.company) tempErrors.company = "Company is required"
        if (!formData.licenseType) tempErrors.licenseType = "License type is required"
        if (!formData.message) tempErrors.message = "Message is required"
    
        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
          console.log("Form submitted:", formData)
          setSubmitted(true)
          // Reset form
          setFormData({
            name: "",
            email: "",
            company: "",
            licenseType: "",
            message: "",
          })
          // Show success message for 3 seconds
          setTimeout(() => {
            setSubmitted(false)
          }, 3000)
        }
      }

      const licenseTypes = [
        "Microsoft Office",
        "Adobe Creative Cloud",
        "AutoCAD",
        "Windows Server",
        "SQL Server",
        "Other Enterprise Software",
      ]
  return (
    <div>
         <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get a Free Valuation</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Fill out the form below and our team will provide you with a no-obligation valuation of your software
                  licenses.
                </p>
              </div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {submitted ? (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your message has been submitted successfully. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.company ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                      </div>
                      <div>
                        <label
                          htmlFor="licenseType"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          License Type
                        </label>
                        <select
                          id="licenseType"
                          name="licenseType"
                          value={formData.licenseType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.licenseType ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select License Type</option>
                          {licenseTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get a Quote
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ContactForm