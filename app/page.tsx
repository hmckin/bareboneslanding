"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronUp, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

// Simplified TicketCard component
const TicketCard = ({ 
  upvotes = 10, 
  status = "SUGGESTED", 
  title, 
  description, 
  date, 
  comments = 7,
  variant = "default" // "default" or "completed"
}: {
  upvotes?: number;
  status?: string;
  title: string;
  description: string;
  date: string;
  comments?: number;
  variant?: "default" | "completed";
}) => {
  const isCompleted = variant === "completed"
  
  return (
    <Card className="bg-white border border-gray-200 shadow-xl">
      <CardContent className="px-8 py-2">
        <div className="flex space-x-4">
          {/* Upvote Section */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm font-bold">{upvotes}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="mb-2">
              <Badge 
                variant={isCompleted ? "default" : "secondary"}
                className={isCompleted ? "bg-[#DDFCE7] text-[#016730]" : "bg-blue-100 text-blue-700"}
              >
                {status}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              {description}
            </p>
            
            {/* Post Metadata */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-start space-x-2 text-xs text-gray-500 font-light">
                <span>Created {date}</span>
                <div className="flex items-center space-x-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>{comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <img src="/images/barebones-black.svg" alt="barebones" className="h-8 w-auto" />
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Product</a>
                <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Pricing</a>
              </nav>
            </div>
            
            {/* Sign In */}
            <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Sign in</a>
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
            Kill your prioritization doubts.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full">
              Sign Up
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-full">
              Watch Demo
            </Button>
          </div>

          {/* Big Translucent GIF Container - Half on page, half below */}
          <div className="flex justify-center mt-24 relative">
            {/* Blurred gradient background starting off-screen left */}
            <div className="absolute -left-96 top-3/4 transform -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-400 to-[#FFC56F] rounded-full blur-3xl opacity-80"></div>
            
            <div className="w-full max-w-4xl h-[600px] bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl flex items-center justify-center relative -mb-48 z-10">
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
      <section className="bg-white pt-20 mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">"Less, but better."</h2>
          </div>
          
          {/* Single Column Feature Layout */}
          <div className="mx-20">
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
                <img 
                  src="/images/pushpin.webp" 
                  alt="Pushpin Icon" 
                  className="w-[400px] h-[400px] object-contain"
                />
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
                className="md:order-2 text-center"
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
              <motion.div 
                className="flex justify-center md:order-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <img 
                  src="/images/cog.webp" 
                  alt="Gear Icon" 
                  className="w-[400px] h-[400px] object-contain"
                />
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
                <img 
                  src="/images/rocket.webp" 
                  alt="Rocket Icon" 
                  className="w-[400px] h-[400px] object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Width Sunset Image Section */}
      <section className="relative">
        {/* Sunset Background */}
        <div className="absolute inset-0 w-full h-[2012px]">
          <img 
            src="/images/sunset.png" 
            alt="Sunset" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
          {/* Content Container */}
          <div className="relative min-h-[2012px] flex flex-col">
            
            {/* Card in sunset section */}
            <div className="flex flex-col flex-1 items-center justify-start px-4 sm:px-6 lg:px-8 my-64 space-y-96">
              <div className="transform scale-[1.8] mt-64">
                  <div className="w-[600px]">
                    <TicketCard
                      title="Sunset your ticketing process"
                      description="Use a less shitty Jira. Use barebones."
                      date="08/09/2025"
                      status="COMPLETED"
                      upvotes={16}
                      comments={5}
                      variant="completed"
                    />
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
      <section className="py-20 bg-[#2C3C42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo and Title */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white">Pricing</h2>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Free</CardTitle>
                <div className="text-4xl font-bold text-gray-900">$0</div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Feature 1</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Feature 2</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Feature 3</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                  Sign Up
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-white border-2 border-black">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Pro</CardTitle>
                <div className="text-4xl font-bold text-gray-900">$20</div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Feature 1</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Feature 2</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Feature 3</span>
                  </li>
                </ul>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Sign Up
                </Button>
              </CardContent>
            </Card>

            {/* Team Plan */}
            <Card className="bg-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">Team</CardTitle>
                <div className="text-4xl font-bold text-gray-900">$40</div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Feature 1</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Feature 2</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">Feature 3</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                  Sign Up
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto text-xs text-gray-400">
              <div>
                <div className="font-semibold mb-2">Subtitle</div>
                <div className="space-y-1">
                  <div>Link</div>
                  <div>Link</div>
                  <div>Link</div>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">Subtitle</div>
                <div className="space-y-1">
                  <div>Link</div>
                  <div>Link</div>
                  <div>Link</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
