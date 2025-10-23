import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './AboutPage.js';
import ProjectsPage from './ProjectsPage.js';
import ContactPage from './ContactPage.js';
import SkillsPage from './SkillsPage.js';
import './App.css';

function Home() {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <section id="home" className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="space-y-8">
              <h2 className="text-2xl text-blue-500 font-medium">Welcome to my portfolio</h2>
              <h1 className="text-6xl font-bold text-gray-800 mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Smith D'Cunha</span>
              </h1>
              <p className="text-xl text-gray-600">
                A passionate web developer crafting beautiful and functional web experiences.
              </p>
              <div className="flex gap-4">
                <Link to="/projects" className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-lg">
                  View My Work
                </Link>
                <Link to="/contact" className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors">
                  Contact Me
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30"></div>
                <img 
                  src="/images/profile.jpg"
                  alt="Smith D'Cunha"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Additional Hero Content */}
          <div className="grid md:grid-cols-3 gap-8 py-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile-First Approach</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Latest Work</h3>
              <p className="text-gray-600">Building apps with React, Tailwind and Node.js.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
              <div className="text-gray-600">
                <div>+ Years Experience</div>
                <div>2+ Projects</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-2">About</h3>
          <p className="text-gray-600">Short bio — <Link to="/about" className="text-blue-500">read more</Link></p>
        </div>
      </section>

      {/* Social Links Section */}

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-xl font-semibold mb-4">Find me on</h4>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Smith-dcunha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transform hover:scale-110 transition"
              aria-label="GitHub"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/smithdcunha2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transform hover:scale-110 transition"
              aria-label="LinkedIn"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/smith15___"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transform hover:scale-110 transition"
              aria-label="Instagram"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transform hover:scale-110 transition"
              aria-label="Twitter"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ...rest of your existing App component code...

// ...existing imports...

export default function App() {
  return (
    <Router>
      {/* Enhanced Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name with enhanced gradient and animation */}
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              Smith D'Cunha
            </Link>

            {/* Navigation Links with improved styling */}
            <div className="hidden md:flex space-x-1">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/projects", label: "Projects" },
                { path: "/skills", label: "Skills" },
                { path: "/contact", label: "Contact" }
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 relative group"
                >
                  {label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"/>
                </Link>
              ))}
            </div>

            {/* Mobile menu button (shows on small screens) */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <svg 
                className="w-6 h-6 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Rest of your routes */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}