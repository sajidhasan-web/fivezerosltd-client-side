'use client';

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description:
        'We start by understanding your needs — whether you’re hiring, sourcing, or investing.',
    },
    {
      number: '02',
      title: 'Planning & Matchmaking',
      description:
        'Our experts tailor a solution — matching you with the best candidates, products, or properties.',
    },
    {
      number: '03',
      title: 'Execution & Delivery',
      description:
        'We handle logistics, documentation, or onboarding to ensure smooth delivery and results.',
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description:
        'We stay connected post-deal — supporting performance, queries, or long-term satisfaction.',
    },
  ];

  return (
    <section className="bg-white py-20" id="process">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Process in 4 Simple Steps
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md transition p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
