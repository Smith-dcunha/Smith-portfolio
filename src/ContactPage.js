import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Contact</h1>
          <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          {/* Social Links */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:dcunhasmith2005@gmail.com" className="text-blue-500 hover:underline">
                Mail
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <a 
                href="https://www.linkedin.com/in/smithdcunha2005" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input className="w-full mt-1 p-3 border rounded-lg" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input className="w-full mt-1 p-3 border rounded-lg" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Message</label>
              <textarea className="w-full mt-1 p-3 border rounded-lg" rows="5" placeholder="How can I help?"></textarea>
            </div>
            <div className="flex justify-end">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}