'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-xl mx-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Your appeal form has been submitted successfully. Our team will review your case and get back to you shortly.
        </p>

        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 mb-8 text-left">
          <h2 className="text-white font-semibold mb-3">What happens next?</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>✓ Our team will review your submission within 24 hours</li>
            <li>✓ You'll receive a confirmation email shortly</li>
            <li>✓ A specialist will contact you to discuss your case</li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
