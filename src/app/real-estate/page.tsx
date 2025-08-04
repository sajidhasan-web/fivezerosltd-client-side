"use client";

import { useState } from "react";

const properties = [
  {
    id: "1",
    title: "Modern Family House",
    location: "Berlin, Germany",
    price: 350000,
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1560185127-6c9a1d96f33b?auto=format&fit=crop&w=800&q=80",
    description: "Spacious family home with garden and garage in quiet neighborhood.",
  },
  {
    id: "2",
    title: "Luxury Penthouse Apartment",
    location: "Munich, Germany",
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1600607688968-3eaf8a2375a3?auto=format&fit=crop&w=800&q=80",
    description: "Top-floor penthouse with city views and private rooftop terrace.",
  },
  {
    id: "3",
    title: "Cozy Studio",
    location: "Hamburg, Germany",
    price: 125000,
    bedrooms: 1,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Charming studio in central location, ideal for singles or students.",
  },
];

export default function RealEstatePage() {
  const [search, setSearch] = useState("");
  const filtered = properties.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-emerald-700">Find Your Dream Property</h1>
        <div className="mb-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search by location or title..."
            className="w-full px-4 py-3 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{property.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                <p className="text-emerald-600 font-bold text-lg mb-2">
                  €{property.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-700 line-clamp-2 mb-2">
                  {property.description}
                </p>
                <p className="text-sm text-gray-500">
                  {property.bedrooms} beds • {property.bathrooms} baths
                </p>
                <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2 rounded-lg shadow">
                  View Details
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center col-span-full py-20">
              <p className="text-xl font-semibold text-gray-700 mb-4">No properties found</p>
              <p className="text-gray-500">Try searching with a different keyword.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


