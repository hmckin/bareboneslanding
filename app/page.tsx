"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronUp, MessageSquare, Tag } from "lucide-react"
import { motion } from "framer-motion"
import BlurredCard from "@/components/ui/BlurredCard"
import CreatePost from "@/components/CreatePost"





export default function Home() {
  const [isYearly, setIsYearly] = React.useState(true)
  
  // Pricing configuration for Stripe integration
  const pricing = {
    free: {
      price: 0,
      name: 'Free',
      features: ['100 tickets', '20 users', 'Core Features: tickets, upvotes, comments and roadmap']
    },
    pro: {
      monthly: 19,
      yearly: 16,
      name: 'Pro',
      features: ['All Free Features', 'Unlimited tickets', '200 users']
    },
    team: {
      monthly: 47,
      yearly: 39,
      name: 'Team',
      features: ['All Features in Pro', 'Unlimited users', 'Priority Support']
    }
  };

  return (
    <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="/images/barebones-black.svg" alt="barebones" className="h-8 w-auto" />
              </a>
              <nav className="hidden md:flex space-x-8">
                <a href="#product" className="text-gray-900 hover:text-gray-600 transition-colors">Product</a>
                <a href="#pricing" className="text-gray-900 hover:text-gray-600 transition-colors">Pricing</a>
              </nav>
            </div>
            
            {/* Sign In & Sign Up */}
            <div className="flex items-center space-x-4">
              <Link href="/signin" className="text-gray-900 hover:text-gray-600 transition-colors">Sign in</Link>
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-4 py-2 text-sm rounded-full">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-64 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-9xl md:text-7xl font-bold text-gray-900 mb-2">
            Dead simple ticketing
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Kill your prioritization doubts with <br /> feedback from your users.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-full" onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}>
              Watch Demo
            </Button>
          </div>

          {/* Big Translucent GIF Container - Half on page, half below */}
          <div className="flex justify-center mt-24 relative">
            {/* Blurred gradient background starting off-screen left */}
            <div className="absolute -left-96 top-3/4 transform -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-400 to-[#FFC56F] rounded-full blur-3xl opacity-80"></div>
            
            <div id="product" className="w-full max-w-4xl h-[600px] bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl flex items-center justify-center relative -mb-48 z-10 scroll-mt-32">
              <div className="text-center text-gray-600">
                <p className="text-lg mb-2">🎬</p>
                <p className="text-sm">GIF Placeholder</p>
                <p className="text-xs opacity-75">Replace with your actual GIF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="how-it-works" className="bg-white pt-20 mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">"Less, but better."</h2>
          </div>
          
          {/* Single Column Feature Layout */}
          <div className="mx-20 space-y-10">
            {/* Feature 1 */}
            <motion.div 
              className="grid md:grid-cols-2 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Your users post feedback
                </h3>
                <p className="text-xl text-gray-400">
                  And upvote what is important.
                </p>
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <BlurredCard fromColor="from-cyan-400" viaColor="via-teal-300" toColor="to-teal-400">
                  <CreatePost />
                </BlurredCard>
              </motion.div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="grid md:grid-cols-2 gap-4 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                <BlurredCard fromColor="from-rose-400" viaColor="via-rose-400" toColor="to-rose-500" animation="animate-glow-drift-reverse">
                  <Card className="bg-white/60 backdrop-blur-xl border border-white/100 shadow-xl w-full max-w-md">
                    <CardContent className="pr-8 py-4">
                      <div className="flex space-x-4 w-full">
                        {/* Upvote Section */}
                        <div className="flex flex-col items-center">
                          <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600">
                            <ChevronUp className="w-3 h-3" />
                            <span className="text-sm font-medium">24</span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1">
                          <div>
                            <Badge 
                              variant="secondary"
                              className="bg-blue-100 text-blue-700 text-[10px] px-1"
                            >
                              IN PROGRESS
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
                            Improve Onboarding Flow
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed font-normal text-left">
                            Streamline the first-time user experience.
                          </p>
                          
                          {/* Post Metadata */}
                          <div className="mt-3 pt-3 border-t border-gray-200 w-full">
                            <div className="flex items-center justify-start space-x-3 text-xs text-gray-500 font-light">
                              <span>Created 2 days ago</span>
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="w-3 h-3" />
                                <span>12 Comments</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BlurredCard>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  You tackle tickets
                </h3>
                <p className="text-xl text-gray-400">
                  With full visibility on progress.
                </p>
              </motion.div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="grid md:grid-cols-2 gap-4 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  You ship what people want
                </h3>
                <p className="text-xl text-gray-400">
                  No guesswork.
                </p>
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <BlurredCard fromColor="from-emerald-400" viaColor="via-emerald-400" toColor="to-emerald-400">
                    <div className="flex items-center justify-center h-full">
                    <Badge 
                      variant="default"
                      className="bg-[#DDFCE7] text-[#016730] border border-white/40 text-2xl px-10 py-6 font-semibold rounded-full flex items-center"
                    >
                      <div className="w-4 h-4 bg-[#016730] rounded-full animate-pulse mr-2 relative shadow-lg">
                        <div className="absolute top-1 left-2 w-1 h-1 bg-white/70 rounded-full"></div>
                      </div>
                      SHIPPED
                    </Badge>
                  </div>
                </BlurredCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Width Sunset Gradient Section */}
      <section className="relative mt-10">
        {/* Sunset Gradient Background */}
        <div 
          className="absolute inset-0 w-full h-[1200px]" 
          style={{
            background: 'linear-gradient(to bottom, white 0%, #FDE9AC 25%, #FDE9AC 25%, #D47F68 50%, #535459 75%, #1E2E34 100%)'
          }}
        >
          {/* Half-circle sun at bottom */}
          <div 
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] rounded-full"
            style={{
              background: 'linear-gradient(to bottom, #FD234D 0%, transparent 50%)',
            }}
          ></div>
        </div>
        
          {/* Content Container */}
          <div className="relative min-h-[1200px] flex flex-col pt-40">
            
            {/* Card in sunset section */}
            <div className="flex flex-col flex-1 items-center justify-start px-4 sm:px-6 lg:px-8 py-20 space-y-96">
              <div className="transform scale-[1.8] mt-20">
                  <div className="w-[600px]">
                                         <Card className="bg-white/90 backdrop-blur-xl border border-white/50 shadow-xl w-full">
                      <CardContent className="px-8 py-4">
                        <div className="flex space-x-4 w-full">
                          {/* Upvote Section */}
                          <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                              <ChevronUp className="w-4 h-4" />
                              <span className="text-sm font-bold">16</span>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="flex-1">
                            <div className="mb-2">
                              <Badge 
                                variant="default"
                                className="bg-[#DDFCE7] text-[#016730] text-[12px] px-2 py-1 rounded-full"
                              >
                                COMPLETED
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">
                              Sunset your ticketing process
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-normal text-left">
                              Use barebones.
                            </p>
                            
                            {/* Post Metadata */}
                            <div className="mt-6 pt-4 border-t border-gray-200 w-full">
                              <div className="flex items-center justify-start space-x-2 text-xs text-gray-500 font-light">
                                <span>Created 08/09/2025</span>
                                <div className="flex items-center space-x-1">
                                  <MessageSquare className="w-3 h-3" />
                                  <span>5 Comments</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              </div>
              <div className="text-center">
                <img 
                  src="/images/barebones-white.svg" 
                  alt="barebones" 
                  className="h-32 w-auto mx-auto"
                />
              </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#1E2E34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo and Title */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Pricing</h2>
            <h3 className="text-5xl font-bold text-white leading-tight">Your most expensive feature <br /> is the one nobody uses. </h3>
          </div>

          {/* Billing Toggle */}
          <div className="mb-12 flex justify-start max-w-5xl mx-auto">
            <div className="relative inline-flex items-center rounded-full bg-gray-700 p-1 border border-gray-600">
              <button
                onClick={() => setIsYearly(true)}
                className={`relative px-6 py-3 rounded-full text-md font-medium transition-all duration-200 ${
                  isYearly ? 'bg-gray-600 text-gray-100 shadow-sm' : 'text-gray-300 hover:text-gray-100'
                }`}
              >
                <span className="flex items-center">
                  Yearly
                  <span className="ml-2 text-md text-gray-100 flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    20% off
                  </span>
                </span>
              </button>
              <button
                onClick={() => setIsYearly(false)}
                className={`relative px-6 py-3 rounded-full text-md font-medium transition-all duration-200 ${
                  !isYearly ? 'bg-gray-600 text-gray-100 shadow-sm' : 'text-gray-300 hover:text-gray-100'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-gray-700 border border-gray-600 flex flex-col">
              <CardHeader className="text-left">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-2xl font-bold text-gray-100">Free</CardTitle>
                  <span className="text-amber-500/80 text-sm font-medium">49 spots remaining</span>
                </div>
                <div className="flex items-baseline">
                  <div className="text-5xl font-bold text-gray-100">
                    ${pricing.free.price}
                  </div>
                  <div className="text-lg text-gray-300 ml-2">
                    / month
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-left flex-1">
                <ul className="space-y-3">
                  {pricing.free.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-start">
                      <span className="text-gray-200 mr-2">✓</span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full">
                  Sign Up
                </Button>
              </div>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gray-700 border-2 border-amber-500 flex flex-col">
              <CardHeader className="text-left">
                <CardTitle className="text-2xl font-bold text-gray-100">Pro</CardTitle>
                <div className="flex items-baseline">
                  <div className="text-5xl font-bold text-gray-100">
                    ${isYearly ? pricing.pro.yearly : pricing.pro.monthly}
                  </div>
                  <div className="text-lg text-gray-300 ml-2">
                    {isYearly ? '/ month billed yearly' : '/ month'}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-left flex-1">
                <ul className="space-y-3">
                  {pricing.pro.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-start">
                      <span className="text-gray-200 mr-2">✓</span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button size="lg" className="w-full bg-amber-600 text-white hover:bg-amber-500 px-8 py-6 text-lg rounded-full">
                  Sign Up
                </Button>
              </div>
            </Card>

            {/* Team Plan */}
            <Card className="bg-gray-700 border border-gray-600 flex flex-col">
              <CardHeader className="text-left">
                <CardTitle className="text-2xl font-bold text-gray-100">Team</CardTitle>
                <div className="flex items-baseline">
                  <div className="text-5xl font-bold text-gray-100">
                    ${isYearly ? pricing.team.yearly : pricing.team.monthly}
                  </div>
                  <div className="text-lg text-gray-300 ml-2">
                    {isYearly ? '/ month billed yearly' : '/ month'}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-left flex-1">
                <ul className="space-y-3">
                  {pricing.team.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-start">
                      <span className="text-gray-200 mr-2">✓</span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full">
                  Sign Up
                </Button>
              </div>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-48">
            {/* Divider Line */}
            <div className="border-t border-gray-600 mb-12"></div>
            
            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
              {/* Logo Section - First 1/3 */}
              <div className="md:w-1/3 flex justify-center md:justify-start">
                <img src="/images/barebones-white.svg" alt="barebones" className="h-16 w-auto" />
              </div>
              
              {/* Links Section - Right 2/3 */}
              <div className="md:w-2/3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-xs text-gray-400">
                  <div className="text-left">
                    <div className="font-semibold mb-2 text-gray-300">Legal</div>
                    <div className="space-y-1">
                      <Link href="/terms" className="block hover:text-gray-200 transition-colors">Terms of Service</Link>
                      <Link href="/privacy" className="block hover:text-gray-200 transition-colors">Privacy Policy</Link>
                      <Link href="/security" className="block hover:text-gray-200 transition-colors">Security</Link>
                      <Link href="/contact" className="block hover:text-gray-200 transition-colors">Contact Us</Link>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold mb-2 text-gray-300">Product</div>
                    <div className="space-y-1">
                      <Link href="#product" className="block hover:text-gray-200 transition-colors">Demo</Link>
                      <Link href="#how-it-works" className="block hover:text-gray-200 transition-colors">How it Works</Link>
                      <Link href="#pricing" className="block hover:text-gray-200 transition-colors">Pricing</Link>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold mb-2 text-gray-300">Connect</div>
                    <div className="space-y-1">
                      <Link href="https://x.com/butimjust_harry" className="block hover:text-gray-200 transition-colors">Twitter</Link>
                      <Link href="/" className="block hover:text-gray-200 transition-colors">GitHub</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} barebones. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
