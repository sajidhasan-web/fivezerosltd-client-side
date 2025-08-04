'use client';

import { BriefcaseIcon, CubeIcon, HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

const services = [
  {
    name: 'Recruiting',
    description:
      'Connect with top talent, streamline hiring, and grow your business with our expert recruiting services.',
    icon: BriefcaseIcon,
    href: '/recruiting',
    color: 'text-blue-600',
  },
  {
    name: 'Imported Products',
    description:
      'Access a wide range of high-quality imported goods at competitive prices from our global partners.',
    icon: CubeIcon,
    href: '/products',
    color: 'text-emerald-600',
  },
  {
    name: 'Real Estate',
    description:
      'Explore commercial and residential properties tailored to your needs and investment goals.',
    icon: HomeIcon,
    href: '/real-estate',
    color: 'text-orange-500',
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We offer expert solutions in recruitment, international product sourcing, and premium real estate listings.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group block rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 p-6 text-left hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-100">
                <service.icon className={`h-6 w-6 ${service.color}`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700">
                {service.name}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <span className="inline-block mt-4 text-blue-600 group-hover:underline font-medium text-sm">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
