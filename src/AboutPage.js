import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">About Me</h1>
          <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Who I am</h2>
            <p className="text-gray-600">
              I'm Smith D'Cunha — a web developer focused on building accessible, performant,
              and delightful user experiences using React, Tailwind CSS and Node.js.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Frontend & full-stack projects for startups and agencies</li>
              <li>Building component libraries, design systems and responsive apps</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Education & Interests</h3>
            <p className="text-gray-600">Fr. C. Rodrigues Institute of Technology.
              T.E AI&DS  / Self‑taught — continual learning in web tech, UX and performance.</p>
          </section>
        </div>
      </div>
    </div>
  );
}