'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-blue-700 text-white py-20 px-6 sm:px-10">
      {/* Decorative SVG Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          width="1440"
          height="320"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M0 0h1440v320H0z"
            className="text-blue-800"
          />
        </svg>
      </div>

      {/* CTA Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Let's Build Something Great Together
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          From recruitment to real estate and global trade — partner with us to grow smarter, faster, and stronger.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-6 py-3 rounded-md transition duration-200"
          >
            Contact Our Team
          </Link>
          <Link
            href="/recruiting"
            className="inline-block border border-white hover:bg-white hover:text-blue-700 font-semibold text-lg px-6 py-3 rounded-md transition duration-200"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
