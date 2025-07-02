import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl sm:text-2xl font-bold tracking-tight">
            <Link to="/">SweetieBirdX</Link>
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm sm:text-base items-center relative">
            <Link to="/" className="hover:text-white/80 transition duration-300 ease-in-out">Home</Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="hover:text-white/80 transition duration-300 ease-in-out focus:outline-none"
              >
                Projects
              </button>
              {isProjectsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-md text-gray-800 rounded-lg shadow-lg ring-1 ring-black/5 animate-fade-in z-50 transition-all">
                  <Link
                    to="/featured-projects"
                    className="block px-5 py-3 rounded-md hover:bg-purple-100 hover:text-purple-800 font-medium transition-colors duration-300"
                  >
                    🚀 Featured Projects
                  </Link>
                  <Link
                    to="/mini-apps"
                    className="block px-5 py-3 rounded-md hover:bg-purple-100 hover:text-purple-800 font-medium transition-colors duration-300"
                  >
                    🧩 Mini Apps
                  </Link>
                </div>
              )}
            </div>

            <a href="#blog" className="hover:text-white/80 transition duration-300 ease-in-out">Blog</a>
            <a href="#contact" className="hover:text-white/80 transition duration-300 ease-in-out">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {!isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-sm sm:text-base`}
      >
        <ul className="px-4 py-4 space-y-2">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 px-2 rounded hover:bg-white/10 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/featured-projects" onClick={() => setIsOpen(false)} className="block py-2 px-2 rounded hover:bg-white/10 transition duration-300">Featured Projects</Link>
          </li>
          <li>
            <Link to="/mini-apps" onClick={() => setIsOpen(false)} className="block py-2 px-2 rounded hover:bg-white/10 transition duration-300">Mini Apps</Link>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsOpen(false)} className="block py-2 px-2 rounded hover:bg-white/10 transition duration-300">Blog</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 px-2 rounded hover:bg-white/10 transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
