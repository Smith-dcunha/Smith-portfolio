import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    desc: 'Personal portfolio built with React and Tailwind, responsive and accessible.',
    tech: ['React', 'Tailwind'],
    demo: '#',
    repo: '#'
  },
  {
    id: 2,
    title: 'Job Portal',
    desc: 'Full‑stack task management app with authentication and REST API.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    demo: 'https://job-portal-r365.onrender.com/', // Replace with your actual deployed job portal URL
    repo: 'https://github.com/Smith-dcunha/job-portal' // Replace with your actual GitHub repo URL
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Projects</h1>
          <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(p => (
            <article key={p.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={p.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline hover:text-blue-600 transition-colors"
                >
                  Live Demo →
                </a>
                <a 
                  href={p.repo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:underline hover:text-gray-600 transition-colors"
                >
                  GitHub Repo →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}