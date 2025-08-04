'use client';

import Link from 'next/link';

const listings = [
  {
    category: 'Job Opening',
    title: 'Senior Software Engineer',
    description: 'Join our partner firm and lead backend development in a dynamic team.',
    href: '/recruiting',
    tag: 'Recruiting',
  },
  {
    category: 'Product',
    title: 'Japanese Ceramic Cookware Set',
    description: 'Premium-quality imported ceramic set for modern kitchens.',
    href: '/products',
    tag: 'Imported Products',
  },
  {
    category: 'Property',
    title: '3-Bedroom Modern Apartment, Berlin',
    description: 'Luxury apartment near city center with private balcony and parking.',
    href: '/real-estate',
    tag: 'Real Estate',
  },
];

export default function FeaturedListings() {
  return (
    <section className="bg-gray-50 py-20" id="listings">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Listings</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our latest job opportunities, premium imported products, and high-value real estate listings.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group block rounded-xl bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md transition duration-200 p-6"
            >
              <span className="inline-block mb-2 text-sm text-blue-600 font-medium">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <span className="text-sm font-medium text-blue-600 group-hover:underline">
                View more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
