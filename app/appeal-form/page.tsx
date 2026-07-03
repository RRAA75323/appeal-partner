'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AppealFormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    appealType: '',
    yearsOnAmazon: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const countryCodes = [
    { code: '+1', country: 'US/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+55', country: 'Brazil' },
    { code: '+52', country: 'Mexico' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const webhookData = {
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phoneNumber}`,
      appealType: formData.appealType,
      yearsOnAmazon: formData.yearsOnAmazon
    };

    try {
      const response = await fetch('https://hook.eu1.make.com/dmoq12n9fp6pz4r88gyng3hnwun35fjk', {
        method: 'POST',
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', { 'send_to': 'AW-17829495758/PdWUCPWb-MUcEM6H4rVC' });
        }
        router.push('/thank-you');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <header className="border-b border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src="https://static.readdy.ai/image/e6422e02a3150375563aeb9e41bc0548/2b3cff5cb5f42f207f075ff8f318ef20.png" 
                alt="Appeal Partners"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
            </div>
            <span className="text-lg sm:text-2xl font-medium text-white tracking-tight">Appeal Partners</span>
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Appeal Intake Form
          </h1>
          <p className="text-base sm:text-lg text-gray-400 px-4">
            Fill out the form below and we&apos;ll get back to you shortly
          </p>
        </div>

        <form 
          id="appeal-intake-form"
          data-readdy-form
          onSubmit={handleSubmit}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl"
        >
          <div className="space-y-5 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-white placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-white placeholder-gray-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                Phone Number *
              </label>
              <div className="flex gap-2 sm:gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="w-24 sm:w-auto px-2 sm:px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm pr-6 sm:pr-8 cursor-pointer text-white"
                >
                  {countryCodes.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-white placeholder-gray-500"
                  placeholder="123-456-7890"
                />
              </div>
            </div>

            <div>
              <label htmlFor="appealType" className="block text-sm font-semibold text-white mb-2">
                What Appeal is This? *
              </label>
              <select
                id="appealType"
                name="appealType"
                required
                value={formData.appealType}
                onChange={(e) => setFormData({ ...formData, appealType: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm pr-8 cursor-pointer text-white"
              >
                <option value="">Select appeal type</option>
                <option value="Amazon">Amazon</option>
                <option value="ASIN">ASIN</option>
                <option value="Walmart">Walmart</option>
              </select>
            </div>

            <div>
              <label htmlFor="yearsOnAmazon" className="block text-sm font-semibold text-white mb-2">
                How Long Have You Been Selling on Amazon For? (years) *
              </label>
              <input
                type="number"
                id="yearsOnAmazon"
                name="yearsOnAmazon"
                required
                min="0"
                step="0.5"
                value={formData.yearsOnAmazon}
                onChange={(e) => setFormData({ ...formData, yearsOnAmazon: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm text-white placeholder-gray-500"
                placeholder="e.g., 2.5"
              />
            </div>
          </div>

          {submitStatus === 'error' && (
            <div className="mt-5 sm:mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm font-medium">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 sm:mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Appeal Form'}
          </button>
        </form>

        <div className="text-center mt-6 sm:mt-8">
          <Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition cursor-pointer">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
