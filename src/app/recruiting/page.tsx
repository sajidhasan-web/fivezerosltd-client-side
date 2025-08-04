'use client';

import { useState } from 'react';

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Berlin, Germany',
    type: 'Full-time',
    description: 'Build beautiful and responsive UIs for our recruiting platform.',
  },
  {
    id: '2',
    title: 'HR Specialist',
    department: 'People',
    location: 'Remote',
    type: 'Part-time',
    description: 'Support recruitment campaigns and manage candidate experiences.',
  },
  {
    id: '3',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Munich, Germany',
    type: 'Full-time',
    description: 'Design scalable APIs and data systems for hiring solutions.',
  },
  {
    id: '4',
    title: 'Sales Manager',
    department: 'Sales',
    location: 'Hamburg, Germany',
    type: 'Full-time',
    description: 'Lead business development and build strong client relationships.',
  },
];

const unique = (arr: string[]) => [...new Set(arr)];

export default function RecruitingPage() {
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const filteredJobs = jobs.filter((job) => {
    return (
      (departmentFilter === '' || job.department === departmentFilter) &&
      (locationFilter === '' || job.location === locationFilter) &&
      (typeFilter === '' || job.type === typeFilter)
    );
  });

  const departments = unique(jobs.map((j) => j.department));
  const locations = unique(jobs.map((j) => j.location));
  const types = unique(jobs.map((j) => j.type));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg max-w-xl mx-auto">
          Discover exciting opportunities in engineering, HR, sales, and more.
        </p>
      </section>

      {/* Filters */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {/* Department Filter */}
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          {/* Location Filter */}
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          {/* Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-blue-500 focus:outline-none"
          >
            <option value="">All Job Types</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Job Grid */}
        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {job.department} · {job.location} · {job.type}
                </p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <a
                  href="#"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium"
                >
                  Apply Now
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No jobs match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
