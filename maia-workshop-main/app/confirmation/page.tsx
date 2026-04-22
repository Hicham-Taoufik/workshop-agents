'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { FiCheckCircle, FiCalendar, FiMail, FiArrowLeft } from 'react-icons/fi';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const confirmationNumber = searchParams.get('number');

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8 text-center">
          <div className="mb-6">
            <FiCheckCircle className="mx-auto text-6xl text-green-500" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Registration Confirmed!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Thank you for registering for the AGENTIC AI workshop.
          </p>

          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-center gap-3 text-gray-700">
              <FiMail className="text-primary-600" />
              <span>You will receive a confirmation email shortly with all the details.</span>
            </div>
              <div className="flex items-center gap-3 text-gray-700">
              <FiCalendar className="text-primary-600" />
              <span>Workshop Date: 16 MAY 2026 - 8:00 AM</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FiCalendar className="text-primary-600" />
              <span>Location: FACULTY OF SCIENCE TETOUAN</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FiCalendar className="text-primary-600" />
              <span>Speaker: TAOUFIK HICHAM, Artificial Intelligence Specialist</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FiCheckCircle className="text-primary-600" />
              <span>A certificate of participation will be delivered after you complete the activity.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <FiArrowLeft />
              Back to Home
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Learn More About the Workshop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}

