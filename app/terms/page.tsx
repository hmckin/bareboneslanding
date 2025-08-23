"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Service Description</h2>
            <p className="text-gray-700 mb-4">
              barebones is a feature request and roadmap management platform that allows users to submit, 
              view, and upvote feature suggestions, track development progress through visual roadmaps, 
              and manage feature request workflows.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Responsibilities</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                • <strong>Appropriate Content:</strong> Users must submit only appropriate, non-offensive content. 
                No hate speech, harassment, or inappropriate material is permitted.
              </p>
              <p className="text-gray-700">
                • <strong>No Spam:</strong> Users may not submit duplicate or spam feature requests. 
                Each suggestion should be unique and valuable to the community.
              </p>
              <p className="text-gray-700">
                • <strong>Accurate Information:</strong> Users must provide accurate and truthful information 
                when submitting feature requests or creating accounts.
              </p>
              <p className="text-gray-700">
                • <strong>Respectful Behavior:</strong> Users must treat other community members with respect 
                and professionalism in all interactions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Handling and Storage</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                • <strong>Data Storage:</strong> User data, feature requests, and uploaded content are stored 
                securely using Supabase, our trusted data management platform.
              </p>
              <p className="text-gray-700">
                • <strong>Data Security:</strong> We implement industry-standard security measures to protect 
                your data, including encryption and secure access controls.
              </p>
              <p className="text-gray-700">
                • <strong>Data Retention:</strong> User data is retained according to our privacy policy and 
                applicable data protection regulations.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Content Guidelines</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                • <strong>Feature Requests:</strong> All feature suggestions must be relevant to the platform 
                and described clearly with appropriate titles and descriptions.
              </p>
              <p className="text-gray-700">
                • <strong>Image Attachments:</strong> Users may attach images up to 5MB per image. 
                Images must be relevant to the feature request and not contain malicious content.
              </p>
              <p className="text-gray-700">
                • <strong>No Malicious Content:</strong> Users may not upload files containing viruses, 
                malware, or other harmful content.
              </p>
              <p className="text-gray-700">
                • <strong>Copyright Compliance:</strong> Users must only upload images they own or have 
                permission to use.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              Users retain all rights to their feature suggestions and content submissions. By submitting 
              content to barebones, users grant us a non-exclusive, worldwide, royalty-free license to 
              display, store, and process their content solely for the purpose of providing our service.
            </p>
            <p className="text-gray-700">
              barebones retains all rights to its platform, software, and proprietary technology. 
              Users may not copy, modify, or distribute our platform without explicit permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimers</h2>
            <p className="text-gray-700 mb-4">
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
              barebones does not guarantee that the service will be uninterrupted, error-free, or secure.
            </p>
            <p className="text-gray-700">
              We do not guarantee that any feature request will be implemented or that development 
              timelines will be met. Feature requests are suggestions only and do not constitute 
              promises or commitments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Liability Limitations</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, barebones SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO 
              THE USE OF OUR SERVICE.
            </p>
            <p className="text-gray-700">
              Our total liability for any claims arising from the use of our service shall not exceed 
              the amount paid by the user for our service in the twelve months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination Conditions</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend user accounts at any time for violations of these terms, 
              inappropriate behavior, or for any other reason at our sole discretion.
            </p>
            <p className="text-gray-700">
              Users may terminate their accounts at any time by contacting our support team. 
              Upon termination, user data will be handled according to our privacy policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
            <p className="text-gray-700">
              These terms shall be governed by and construed in accordance with the laws of the 
              jurisdiction where barebones operates. Any disputes arising from these terms shall 
              be resolved in the courts of that jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Users will be notified of 
              significant changes via email or through our platform. Continued use of the service 
              after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these terms, please contact us at{' '}
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                our contact page
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
