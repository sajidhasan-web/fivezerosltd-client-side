'use client';

import { notFound } from 'next/navigation';
import products from '@/data/product';
import Link from 'next/link';

export default function ProductDetail({ params }: { params: { ProductId: string } }) {
  const product = products.find((p) => p.id === params.ProductId);

  if (!product) {
    console.warn('Product not found for id:', params.ProductId);
    return notFound();
  }

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline text-emerald-600">Home</Link> &gt;{' '}
        <Link href="/products" className="hover:underline text-emerald-600">Products</Link> &gt;{' '}
        <span className="text-gray-700 font-medium">{product.name}</span>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">{product.description}</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-emerald-600 font-bold text-2xl">${product.price.toFixed(2)}</span>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            <button className="w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow hover:shadow-md hover:opacity-90 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
