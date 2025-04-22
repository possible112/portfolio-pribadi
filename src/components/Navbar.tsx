'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen] = useState(false);

  return (
    // Completely hide the navbar on mobile
    <nav className="w-full backdrop-blur-2xl bg-[rgba(43,38,38,0.88)] sticky top-0 z-50 md:block hidden">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <a href="#hero" className="text-2xl font-bold">
          <span className="text-pink-600">Andi</span> <span className="text-white">Agung</span>
        </a>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
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

        {/* Hamburger Icon for Mobile */}
        {/* Since we hide the navbar entirely on mobile, no need for hamburger icon */}
      </div>

      {/* Mobile Dropdown Menu */}
      {/* This is also hidden completely on mobile */}
      {menuOpen && (
        <div
          className="md:hidden bg-stone-800 text-white px-6 py-4 space-y-4 transform transition-all duration-500 ease-in-out w-full max-w-xs"
        >
          <a href="#about" className="block">About</a>
          <a href="#experiences" className="block">Experiences</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}
