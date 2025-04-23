'use client';

export default function Navbar() {
  return (
    <nav className="w-full backdrop-blur-2xl bg-[rgba(43,38,38,0.88)] sticky top-0 z-50 hidden md:block">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <a href="#hero" className="text-2xl font-bold ml-4">
          <span className="text-pink-600">Andi</span> <span className="text-white">Agung</span>
        </a>

        {/* Navbar Links for Desktop */}
        <div className="flex space-x-8">
          <a
            href="#about"
            className="text-bold text-gray-300 hover:text-pink-600 relative transition-all duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#experiences"
            className="text-bold text-gray-300 hover:text-pink-600 relative transition-all duration-300 ease-in-out"
          >
            Experiences
          </a>
          <a
            href="#projects"
            className="text-bold text-gray-300 hover:text-pink-600 relative transition-all duration-300 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-bold text-gray-300 hover:text-pink-600 relative transition-all duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
