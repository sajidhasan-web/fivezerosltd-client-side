'use client';

import Image from 'next/image';
import aboutImage from '../../../public/fivezerosLogo_transparent.png'; // replace with your image

export default function AboutMission() {
  return (
    <section className="bg-gray-50 py-20" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            At <strong>MyCompany</strong>, We're redriven by one mission — to connect people, deliver quality products, and help clients find their dream properties.
          </p>
          <p className="text-gray-600">
            With a diverse portfolio in <span className="text-blue-600 font-semibold">recruiting</span>,
            <span className="text-emerald-600 font-semibold"> imports</span>, and
            <span className="text-orange-500 font-semibold"> real estate</span>, we leverage innovation and trust to serve businesses and individuals worldwide.
            We're more than just a service provider — we're your growth partner.
          </p>
        </div>

        {/* Image or Video */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={aboutImage}
            alt="About our company"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
