'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">FiveZeros Ltd</h3>
          <p className="text-sm">
            Connecting businesses with top talent, quality imports, and real estate opportunities.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/recruiting" className="hover:text-white transition">Recruiting</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Imported Products</Link></li>
            <li><Link href="/real-estate" className="hover:text-white transition">Real Estate</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/signin" className="hover:text-white transition">Sign In</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
          <p className="text-sm">Email: info@mycompany.com</p>
          <p className="text-sm mb-3">Phone: +49 123 456 789</p>
          <div className="flex space-x-4 ">
            <Link
             href="#" className="hover:text-white transition text-xl"><FaFacebookF /> 
            </Link>
            <Link href="#" className="hover:text-white transition text-xl"><FaLinkedin /></Link>
            <Link href="#" className="hover:text-white transition text-xl hover:scale-y-150 "><FaYoutube /></Link>
            <Link href="#" className="hover:text-white transition text-xl"><FaInstagram /></Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
}