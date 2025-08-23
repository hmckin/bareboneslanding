"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              barebones ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our feature 
              request and roadmap management platform.
            </p>
            <p className="text-gray-700">
              Our service is built with Next.js 14, TypeScript, and Tailwind CSS, hosted on Vercel, 
              and uses Supabase for authentication and data storage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 User Account Information</h3>
                <p className="text-gray-700">
                  • Email address and authentication credentials<br/>
                  • Profile information (name, avatar, preferences)<br/>
                  • Account settings and preferences<br/>
                  • Authentication tokens and session data
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Feature Request Data</h3>
                <p className="text-gray-700">
                  • Feature request titles, descriptions, and content<br/>
                  • User votes and interactions with feature requests<br/>
                  • Image attachments (up to 5MB per image)<br/>
                  • Comments and feedback on feature requests
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2.3 Usage Data</h3>
                <p className="text-gray-700">
                  • Platform usage patterns and interactions<br/>
                  • Feature request submission and voting history<br/>
                  • Roadmap viewing and interaction data<br/>
                  • Technical logs and error reports
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                • <strong>Service Provision:</strong> To provide and maintain our feature request management platform
              </p>
              <p className="text-gray-700">
                • <strong>User Experience:</strong> To personalize your experience and improve our service
              </p>
              <p className="text-gray-700">
                • <strong>Communication:</strong> To send important updates, security alerts, and support messages
              </p>
              <p className="text-gray-700">
                • <strong>Analytics:</strong> To analyze usage patterns and improve platform functionality
              </p>
              <p className="text-gray-700">
                • <strong>Security:</strong> To protect against fraud, abuse, and security threats
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Processing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">4.1 Supabase Data Handling</h3>
                <p className="text-gray-700">
                  • User authentication and account data stored securely in Supabase<br/>
                  • Feature requests, votes, and comments stored in Supabase database<br/>
                  • Image uploads stored in Supabase Storage with temporary file management<br/>
                  • Real-time data updates and session management through Supabase
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">4.2 Vercel Hosting</h3>
                <p className="text-gray-700">
                  • Platform hosted on Vercel with standard analytics collection<br/>
                  • Performance monitoring and error tracking<br/>
                  • CDN distribution for optimal global performance
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use essential cookies to maintain your session and authentication state. These cookies are 
              necessary for the platform to function properly and cannot be disabled.
            </p>
            <p className="text-gray-700">
              We may use analytics cookies to understand how users interact with our platform and improve 
              our service. You can control these cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                • <strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion
              </p>
              <p className="text-gray-700">
                • <strong>Feature Requests:</strong> Retained for the lifetime of the platform unless deleted by the user
              </p>
              <p className="text-gray-700">
                • <strong>Image Attachments:</strong> Stored until the associated feature request is deleted
              </p>
              <p className="text-gray-700">
                • <strong>Usage Logs:</strong> Retained for 90 days for security and debugging purposes
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">7.1 GDPR Rights (EU Users)</h3>
                <p className="text-gray-700">
                  • Right to access, rectify, and erase your personal data<br/>
                  • Right to data portability and restriction of processing<br/>
                  • Right to object to processing and withdraw consent<br/>
                  • Right to lodge a complaint with supervisory authorities
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">7.2 CCPA Rights (California Users)</h3>
                <p className="text-gray-700">
                  • Right to know what personal information is collected and sold<br/>
                  • Right to delete personal information<br/>
                  • Right to opt-out of the sale of personal information<br/>
                  • Right to non-discrimination for exercising these rights
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">7.3 General Rights</h3>
                <p className="text-gray-700">
                  • Update or correct your account information<br/>
                  • Delete your account and associated data<br/>
                  • Export your data in a portable format<br/>
                  • Opt-out of non-essential communications
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Security</h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                • <strong>Encryption:</strong> All data transmitted and stored is encrypted using industry-standard protocols
              </p>
              <p className="text-gray-700">
                • <strong>Access Controls:</strong> Strict access controls limit who can access user data
              </p>
              <p className="text-gray-700">
                • <strong>Security Audits:</strong> Regular security assessments and penetration testing
              </p>
              <p className="text-gray-700">
                • <strong>Incident Response:</strong> Comprehensive procedures for handling security incidents
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We use the following third-party services that may collect and process your data:
            </p>
            <div className="space-y-3">
              <p className="text-gray-700">
                • <strong>Supabase:</strong> Authentication, database, and file storage services
              </p>
              <p className="text-gray-700">
                • <strong>Vercel:</strong> Hosting and analytics services
              </p>
              <p className="text-gray-700">
                • <strong>Authentication Providers:</strong> OAuth services for secure login
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              Each third-party service has their own privacy policy, and we recommend reviewing them 
              for complete information about their data practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700">
              Our service is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe 
              your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers comply with applicable data protection laws and implement 
              appropriate safeguards to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new policy on our platform and updating the "Last updated" date. 
              Your continued use of our service after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                our contact page
              </Link>.
            </p>
            <p className="text-gray-700 mt-2">
              For privacy-specific concerns, you can also reach our Data Protection Officer at{' '}
              <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">privacy@barebones.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
