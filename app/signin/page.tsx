"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Mail, Github } from "lucide-react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get plan context from URL parameters
    const plan = searchParams.get('plan')
    const price = searchParams.get('price')
    const billing = searchParams.get('billing')
    
    if (plan && price) {
      setSelectedPlan({
        name: plan,
        price: price,
        billing: billing || 'monthly'
      })
    }
  }, [searchParams])

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')
    
    try {
      // TODO: Implement Supabase magic link authentication
      // Include plan context for Stripe integration
      if (selectedPlan) {
        console.log('Sending magic link to:', email, 'for plan:', selectedPlan)
      } else {
        console.log('Sending magic link to:', email)
      }
      setMessage('Magic link sent! Check your email.')
    } catch (error) {
      setMessage('Error sending magic link. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSSO = async (provider: 'github' | 'google' | 'microsoft') => {
    setIsLoading(true)
    setMessage('')
    
    try {
      // TODO: Implement Supabase SSO authentication
      // Include plan context for Stripe integration
      if (selectedPlan) {
        console.log('Signing in with:', provider, 'for plan:', selectedPlan)
      } else {
        console.log('Signing in with:', provider)
      }
      setMessage(`Redirecting to ${provider}...`)
    } catch (error) {
      setMessage('Error with SSO. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <img src="/images/barebones-black.svg" alt="barebones" className="h-8 w-auto" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-[calc(100vh-4rem)] bg-white relative overflow-hidden">

        
        {/* Single Column Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          {/* Back to Home - Top Left */}
          <div className="absolute top-0 left-4 sm:left-6 lg:left-8 pt-4">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          {/* Logo */}
          <div className="text-center mb-8">
            <img src="/images/barebones-black.svg" alt="barebones" className="h-16 w-auto" />
          </div>

          {/* Sign In Form */}
          <div className="w-full max-w-md">

            {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign in to your account</h2>
            </div>

            {/* SSO Buttons */}
            <div className="space-y-3 mb-8">
              <Button 
                onClick={() => handleSSO('github')}
                disabled={isLoading}
                className="w-full bg-gray-900 text-white hover:bg-gray-800 py-3"
              >
                <Github className="w-5 h-5 mr-3" />
                Continue with GitHub
              </Button>
              
              <Button 
                onClick={() => handleSSO('google')}
                disabled={isLoading}
                variant="outline"
                className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              
              <Button 
                onClick={() => handleSSO('microsoft')}
                disabled={isLoading}
                variant="outline"
                className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#F25022" d="M1 1h10v10H1z"/>
                  <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                  <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                  <path fill="#FFB900" d="M13 13h10v10H13z"/>
                </svg>
                Continue with Microsoft
              </Button>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Magic Link Form */}
            <form onSubmit={handleMagicLink} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading || !email}
                className="w-full bg-black text-white hover:bg-gray-800 py-3"
              >
                <Mail className="w-5 h-5 mr-2" />
                {isLoading ? 'Sending...' : 'Send magic link'}
              </Button>
            </form>

            {/* Message Display */}
            {message && (
              <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-sm">
                {message}
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>Don't have an account?{' '}
                <Link href="/" className="text-black hover:text-gray-800 font-medium underline">
                  View pricing plans
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
