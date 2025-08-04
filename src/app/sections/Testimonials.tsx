'use client';

import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: 'Anna Müller',
    role: 'HR Manager, TechNova GmbH',
    quote:
      'Their recruiting service helped us fill critical roles faster than ever. Professional, responsive, and efficient!',
  },
  {
    name: 'Ravi Desai',
    role: 'Import Manager, RetailPlus',
    quote:
      'We sourced premium kitchen products through them — quality exceeded expectations. Great support throughout.',
  },
  {
    name: 'Sophie Weber',
    role: 'Homebuyer, Berlin',
    quote:
      'They made buying my first home smooth and stress-free. The team was honest, fast, and super helpful.',
  },
  {
    name: 'Liam Schmidt',
    role: 'Startup Founder',
    quote:
      'Flexible, reliable, and truly global. Their service helped us scale fast without hiring headaches.',
  },
];

export default function TestimonialsMarquee() {
  return (
    <section className="bg-white py-20" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Real feedback from clients across recruitment, product import, and real estate services.
        </p>

        <Marquee pauseOnHover className="bg-gray-50 rounded-lg  py-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="mx-6 w-[300px] sm:w-[350px] md:w-[400px] shrink-0 rounded-md bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <div className="text-left">
                <p className="text-gray-900 font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
