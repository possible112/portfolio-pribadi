'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full backdrop-blur-2xl bg-[rgba(43,38,38,0.88)] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold">
          <span className="text-pink-600">Andi</span> <span className="text-white">Agung</span>
        </a>
        <div className="space-x-6">
          <a
            href="#about"
            className="text-bold text-gray-300 hover:text-pink-600 relative transition-all duration-300 ease-in-out"
          >
            About
            <span className="text-bold absolute block h-0.5 w-full bg-pink-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="#experiences"
            className="text-bold text-gray-300 hover:text-pink-600 relative transition-all duration-300 ease-in-out"
          >
            Experiences
            <span className="text-bold absolute block h-0.5 w-full bg-pink-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="#projects"
            className="text-bold text-gray-300 hover:text-pink-600 relative transition-all duration-300 ease-in-out"
          >
            Projects
            <span className="text-bold absolute block h-0.5 w-full bg-pink-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="#contact"
            className="text-bold text-gray-300 hover:text-pink-600 relative transition-all duration-300 ease-in-out"
          >
            Contact
            <span className="text-bold absolute block h-0.5 w-full bg-pink-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

