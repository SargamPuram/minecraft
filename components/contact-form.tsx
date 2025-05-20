"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="relative bg-[#1E1E1E] border-4 border-[#A9A9A9] p-6 rounded-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/paper_texture.png')] bg-repeat opacity-10 pointer-events-none"></div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-lg font-medium text-[#FFBE0B]">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="bg-[#1E1E1E] border-2 border-[#A9A9A9] text-[#F4EAD5] focus:border-[#915EFF] focus:ring-[#915EFF]"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-lg font-medium text-[#FFBE0B]">
              Your Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="bg-[#1E1E1E] border-2 border-[#A9A9A9] text-[#F4EAD5] focus:border-[#915EFF] focus:ring-[#915EFF]"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-lg font-medium text-[#FFBE0B]">
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              className="bg-[#1E1E1E] border-2 border-[#A9A9A9] text-[#F4EAD5] focus:border-[#915EFF] focus:ring-[#915EFF] min-h-[150px]"
              placeholder="Write your message here..."
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#3DBE65] hover:bg-[#3DBE65]/80 text-white border-2 border-[#FFBE0B] px-8 py-6 text-xl ${
                isSubmitting ? "opacity-70" : ""
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin mr-2">
                    <Image src="/images/loading.png" alt="Loading" width={24} height={24} />
                  </div>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <Image src="/images/emerald.png" alt="Success" width={64} height={64} className="mb-6 animate-pulse" />
          <h3 className="text-2xl font-bold text-[#3DBE65] mb-4">Message Sent Successfully!</h3>
          <p className="text-lg text-[#F4EAD5]">Thank you for your message. Contact me at sargampuram3@gmail.com!</p>
          <div className="mt-4 flex flex-col items-center">
            <p className="text-[#FFBE0B]">Find me on:</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/SargamPuram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4EAD5] hover:text-[#FFBE0B]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sargam-puram-188806257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4EAD5] hover:text-[#FFBE0B]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
