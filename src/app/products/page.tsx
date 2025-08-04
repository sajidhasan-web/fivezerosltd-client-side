'use client';

import Link from 'next/link';
import { useState } from 'react';
import  products  from '@/data/product'; // Assuming products data is imported from a separate file

// type Product = {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   description: string;
//   image: string;
// };

// const products: Product[] = [
//   {
//     id: '1',
//     name: 'Premium Leather Wallet',
//     category: 'Accessories',
//     price: 49.99,
//     description: 'Handcrafted wallet made from genuine Italian leather.',
//     image: 'https://images.unsplash.com/photo-1548032885-b5e38734688a?auto=format&fit=crop&w=600&h=600&q=80',
//   },
//   {
//     id: '2',
//     name: 'Wireless Headphones',
//     category: 'Electronics',
//     price: 89.99,
//     description: 'Noise-cancelling Bluetooth headphones with deep bass.',
//     image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=600&q=80',
//   },
//   {
//     id: '3',
//     name: 'Smartwatch Pro X',
//     category: 'Electronics',
//     price: 199.99,
//     description: 'Track your fitness, heart rate, and messages in real time.',
//     image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&h=600&q=80',
//   },
//   {
//     id: '4',
//     name: 'Eco-friendly Water Bottle',
//     category: 'Lifestyle',
//     price: 19.99,
//     description: 'Reusable stainless steel bottle, keeps drinks cold 24hrs.',
//     image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&h=600&q=80',
//   },
//   {
//     id: '5',
//     name: 'Designer Sunglasses',
//     category: 'Accessories',
//     price: 129.99,
//     description: 'UV protection lenses with polarized coating.',
//     image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&h=600&q=80',
//   },
//   {
//     id: '6',
//     name: 'Luxury Perfume',
//     category: 'Beauty',
//     price: 89.99,
//     description: 'Elegant fragrance with notes of jasmine and sandalwood.',
//     image: 'https://images.unsplash.com/photo-1592945403247-b9a5c8b9f8c0?auto=format&fit=crop&w=600&h=600&q=80',
//   },
//   {
//     id: '7',
//     name: 'Bluetooth Speaker',
//     category: 'Electronics',
//     price: 59.99,
//     description: '360° sound with deep bass and 12-hour battery life.',
//     image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&h=600&q=80',
//   },
//   {
//     id: '8',
//     name: 'Leather Backpack',
//     category: 'Accessories',
//     price: 149.99,
//     description: 'Premium leather backpack with laptop compartment.',
//     image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=600&q=80',
//   },
// ];

const unique = (arr: string[]) => [...new Set(arr)];

export default function ProductPage() {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = unique(products.map((p) => p.category));

  const filtered = products.filter(product => {
    const matchesCategory = !categoryFilter || product.category === categoryFilter;
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = product.price < 50;
    if (priceRange === 'medium') matchesPrice = product.price >= 50 && product.price < 150;
    if (priceRange === 'high') matchesPrice = product.price >= 150;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filtered].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-28 px-6 text-center">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Premium Imported Goods</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Discover exclusive products from around the world
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-blue-300 text-slate-800 focus:outline-none shadow-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white rounded-full p-2 hover:bg-emerald-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">Price Range</option>
              <option value="low">Under $50</option>
              <option value="medium">$50 - $150</option>
              <option value="high">Over $150</option>
            </select>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="featured">Sort By: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
          <div className="text-sm text-gray-500 w-full sm:w-auto sm:text-right">
            Showing {sortedProducts.length} of {products.length} products
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute h-full w-full object-cover transition duration-300 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/600x600?text=Product+Image';
                  }}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-slate-800">{product.name}</h3>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded">{product.category}</span>
                </div>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-bold text-lg">${product.price.toFixed(2)}</span>
                  <Link href={`/products/${product.id}`}>
  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition">
    Details
  </button>
</Link>

                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">No products found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <button 
              className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-slate-800 rounded-lg font-medium transition"
              onClick={() => {
                setCategoryFilter('');
                setPriceRange('');
                setSearchQuery('');
                setSortOption('featured');
              }}
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
