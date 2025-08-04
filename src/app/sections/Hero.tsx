'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-down">
          Powering <span className="text-orange-400">Growth</span> Across
          <br className="hidden sm:block" /> Recruiting, Products & Real Estate
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up">
          We connect people, deliver global goods, and open property doors — all in one platform.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
          <Link
            href="/recruiting"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Explore Recruiting
          </Link>
          <Link
            href="/products"
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          >
            View Products
          </Link>
          <Link
            href="/real-estate"
            className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-emerald-700 transition"
          >
            Browse Real Estate
          </Link>
        </div>
      </div>

      {/* Optional background pattern or blur */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
    </section>
  );
}
