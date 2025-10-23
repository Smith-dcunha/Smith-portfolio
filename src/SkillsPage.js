import React from 'react';
import { Link } from 'react-router-dom';

export default function SkillsPage() {
  const skillCategories = {
    Frontend: ['React', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL'],
    Tools: ['Git', 'GitHub', 'npm', 'VS Code'],
    Testing: ['Jest', 'React Testing Library'],
    Design: ['Figma', 'Responsive Design', 'Accessibility (A11y)']
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Skills</h1>
          <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>

        <p className="text-gray-600 mb-8">
          Below are the technologies and tools I work with grouped by category.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500">
          <small>Want a deeper breakdown (projects or experience per skill)? I can add that.</small>
        </div>
      </div>
    </div>
  );
}